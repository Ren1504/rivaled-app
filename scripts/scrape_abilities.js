const fs = require('fs');
const path = require('path');

// Helper to delay requests (avoid rate limits)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper to sanitize filenames/paths
function sanitize(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[.&'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Clean HTML tags and decode basic entities
function cleanHTML(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .trim();
}

// Balance HTML table tags to extract the outer main table
function getOuterTable(html) {
  const startKeyword = 'class="table-imgs"';
  const startIdx = html.indexOf(startKeyword);
  if (startIdx === -1) return null;
  
  const tableStart = html.lastIndexOf('<table', startIdx);
  if (tableStart === -1) return null;
  
  let depth = 0;
  let pos = tableStart;
  while (pos < html.length) {
    if (html.substring(pos, pos + 6).toLowerCase() === '<table') {
      depth++;
      pos += 6;
    } else if (html.substring(pos, pos + 8).toLowerCase() === '</table>') {
      depth--;
      pos += 8;
      if (depth === 0) {
        return html.substring(tableStart, pos);
      }
    } else {
      pos++;
    }
  }
  return null;
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (err) {
    console.error(`  Failed to download image ${url} to ${destPath}:`, err.message);
    return false;
  }
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const rawAbilitiesDir = path.join(rootDir, 'ability_images');
  const publicAbilitiesDir = path.join(rootDir, 'frontend', 'public', 'ability_images');
  
  if (!fs.existsSync(rawAbilitiesDir)) {
    fs.mkdirSync(rawAbilitiesDir, { recursive: true });
  }
  if (!fs.existsSync(publicAbilitiesDir)) {
    fs.mkdirSync(publicAbilitiesDir, { recursive: true });
  }

  // 1. Fetch main page to find all heroes
  const mainUrl = 'https://www.marvelrivals.com/heroes/index.html?heroId=0';
  console.log(`[1/3] Discovering heroes list from: ${mainUrl}`);
  
  let html;
  try {
    const res = await fetch(mainUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) throw new Error(`Homepage HTTP ${res.status}`);
    html = await res.text();
  } catch (err) {
    console.error('Failed to fetch homepage. Attempting to read local page.html fallback...', err);
    try {
      html = fs.readFileSync(path.join(rootDir, 'scripts', 'page.html'), 'utf8');
    } catch (readErr) {
      console.error('Local fallback page.html not found either. Exiting.', readErr);
      return;
    }
  }

  // Find all hero elements in the HTML
  // Example: <a href="javascript:;" data-url="https://www.marvelrivals.com/20241123/41360_1195681.html" data-id="7b26015b-e5f2-4d01-983b-885540b6236d" data-tag="DUELIST" data-name="WINTER SOLDIER" target="_blank" title="WINTER SOLDIER">
  const heroRegex = /<a\b[^>]*\bdata-url="([^"]+)"[^>]*\bdata-id="([^"]+)"[^>]*\bdata-name="([^"]+)"/gi;
  const heroesList = [];
  let match;
  while ((match = heroRegex.exec(html)) !== null) {
    // Avoid duplicates
    if (!heroesList.some(h => h.id === match[2])) {
      heroesList.push({
        url: match[1],
        id: match[2],
        name: match[3].trim()
      });
    }
  }

  // Fallback regex in case attributes order is different
  if (heroesList.length === 0) {
    const altRegex = /<a\b[^>]*\bdata-id="([^"]+)"[^>]*\bdata-url="([^"]+)"[^>]*\bdata-name="([^"]+)"/gi;
    while ((match = altRegex.exec(html)) !== null) {
      if (!heroesList.some(h => h.id === match[1])) {
        heroesList.push({
          id: match[1],
          url: match[2],
          name: match[3].trim()
        });
      }
    }
  }

  console.log(`[2/3] Found ${heroesList.length} heroes. Starting individual page scrapes...`);
  
  const scrapedData = {};

  for (let idx = 0; idx < heroesList.length; idx++) {
    const hero = heroesList[idx];
    const heroSlug = sanitize(hero.name);
    console.log(`\n[${idx + 1}/${heroesList.length}] Scraping abilities for ${hero.name}...`);
    
    let detailHtml;
    try {
      const res = await fetch(hero.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      detailHtml = await res.text();
    } catch (err) {
      console.error(`  Failed to fetch detail page for ${hero.name}:`, err.message);
      continue;
    }
    
    const tableHtml = getOuterTable(detailHtml);
    if (!tableHtml) {
      console.warn(`  Warning: Could not find main abilities table for ${hero.name}. Skipping.`);
      continue;
    }
    
    // Parse main rows in outer table
    const mainRows = [];
    let depth = 0;
    let currentTrStart = -1;
    for (let i = 0; i < tableHtml.length; i++) {
      if (tableHtml.substring(i, i + 3).toLowerCase() === '<tr') {
        if (depth === 0) {
          currentTrStart = i;
        }
        depth++;
      } else if (tableHtml.substring(i, i + 5).toLowerCase() === '</tr>') {
        depth--;
        if (depth === 0 && currentTrStart !== -1) {
          mainRows.push(tableHtml.substring(currentTrStart, i + 5));
          currentTrStart = -1;
        }
      }
    }
    
    const heroAbilities = [];
    
    // Create folders for hero's ability images in root raw directory
    const heroDestDir = path.join(rawAbilitiesDir, heroSlug);
    if (!fs.existsSync(heroDestDir)) {
      fs.mkdirSync(heroDestDir, { recursive: true });
    }

    for (let rowIdx = 0; rowIdx < mainRows.length; rowIdx++) {
      const rowHtml = mainRows[rowIdx];
      
      // Parse tds
      const tds = [];
      let tdDepth = 0;
      let tdStart = -1;
      for (let j = 0; j < rowHtml.length; j++) {
        if (rowHtml.substring(j, j + 3).toLowerCase() === '<td') {
          if (tdDepth === 0) {
            tdStart = j;
          }
          tdDepth++;
        } else if (rowHtml.substring(j, j + 5).toLowerCase() === '</td>') {
          tdDepth--;
          if (tdDepth === 0 && tdStart !== -1) {
            tds.push(rowHtml.substring(tdStart, j + 5));
            tdStart = -1;
          }
        } else if (rowHtml.substring(j, j + 6).toLowerCase() === '<table') {
          tdDepth++;
        } else if (rowHtml.substring(j, j + 8).toLowerCase() === '</table>') {
          tdDepth--;
        }
      }
      
      const typeStr = cleanHTML(tds[0] || '');
      // Skip type "0" (Variant info) and type "3" (Team-Up ability)
      if (typeStr === '0' || typeStr === '3') {
        continue;
      }
      
      const nameStr = cleanHTML(tds[1] || '');
      if (!nameStr) continue;

      const imgMatch = tds[2] ? tds[2].match(/src="([^"]+)"/i) : null;
      const imgUrl = imgMatch ? imgMatch[1] : '';
      if (!imgUrl) continue;
      
      // Get key binding from column 5 (index 4)
      const keys = [];
      if (tds[4]) {
        const innerTrs = tds[4].match(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi) || [];
        innerTrs.forEach(innerTr => {
          const innerTds = innerTr.match(/<td\b[^>]*>([\s\S]*?)<\/td>/gi) || [];
          if (innerTds.length >= 2) {
            keys.push({
              key: cleanHTML(innerTds[0]),
              value: cleanHTML(innerTds[1])
            });
          }
        });
      }
      
      // Retrieve key binder
      const keyObj = keys.find(k => k.key.toLowerCase() === 'key');
      const button = keyObj ? keyObj.value.trim() : 'Passive';
      
      const abilitySlug = sanitize(nameStr);
      const destFile = `${abilitySlug}.png`;
      const destPath = path.join(heroDestDir, destFile);
      const publicDestDir = path.join(publicAbilitiesDir, heroSlug);
      if (!fs.existsSync(publicDestDir)) {
        fs.mkdirSync(publicDestDir, { recursive: true });
      }
      const publicDestPath = path.join(publicDestDir, destFile);
      const publicPath = `/ability_images/${heroSlug}/${destFile}`;
      
      console.log(`  Found: "${nameStr}" (Key: ${button})`);
      
      // Download icon image if not already present
      let downloadSuccess = fs.existsSync(destPath);
      if (!downloadSuccess && imgUrl) {
        console.log(`    Downloading icon: ${imgUrl}`);
        downloadSuccess = await downloadImage(imgUrl, destPath);
        await delay(100); // polite sleep
      }
      if (downloadSuccess) {
        fs.copyFileSync(destPath, publicDestPath);
      }
      
      heroAbilities.push({
        name: nameStr,
        slug: abilitySlug,
        button: button,
        originalImgUrl: imgUrl,
        localImgUrl: downloadSuccess ? publicPath : null,
        properties: keys.filter(k => k.key.toLowerCase() !== 'key') // Keep other details like Damage, Cooldown, etc.
      });
    }
    
    scrapedData[hero.name] = heroAbilities;
    console.log(`  Completed. Total abilities matched: ${heroAbilities.length}`);
    await delay(150);
  }

  // 3. Write data mapping to files
  const dataPathJson = path.join(rootDir, 'frontend', 'src', 'data', 'heroAbilitiesData.json');
  fs.writeFileSync(dataPathJson, JSON.stringify(scrapedData, null, 2));
  console.log(`\n[3/3] Scraped data JSON saved to: ${dataPathJson}`);

  const tsContent = `// Auto-generated mapping database of heroes and their abilities
export interface AbilityProperty {
  key: string;
  value: string;
}

export interface HeroAbility {
  name: string;
  slug: string;
  button: string;
  originalImgUrl: string;
  localImgUrl: string | null;
  properties: AbilityProperty[];
}

export interface HeroAbilitiesDatabase {
  [heroName: string]: HeroAbility[];
}

export const heroAbilitiesData: HeroAbilitiesDatabase = ${JSON.stringify(scrapedData, null, 2)};
`;

  const dataPathTs = path.join(rootDir, 'frontend', 'src', 'data', 'marvelRivalsAbilities.ts');
  fs.writeFileSync(dataPathTs, tsContent);
  console.log(`Scraped data TypeScript module saved to: ${dataPathTs}`);
  console.log('All done successfully!');
}

main();
