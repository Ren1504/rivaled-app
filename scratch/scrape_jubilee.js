// Scrape Jubilee's abilities from Marvel Rivals
const fs = require('fs');
const path = require('path');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function sanitize(name) {
  return name.toLowerCase().trim()
    .replace(/[.&'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function cleanHTML(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
}

function getOuterTable(html) {
  const startKeyword = 'class="table-imgs"';
  const startIdx = html.indexOf(startKeyword);
  if (startIdx === -1) return null;
  const tableStart = html.lastIndexOf('<table', startIdx);
  if (tableStart === -1) return null;
  let depth = 0;
  let pos = tableStart;
  while (pos < html.length) {
    if (html.substring(pos, pos + 6).toLowerCase() === '<table') { depth++; pos += 6; }
    else if (html.substring(pos, pos + 8).toLowerCase() === '</table>') {
      depth--;
      pos += 8;
      if (depth === 0) return html.substring(tableStart, pos);
    } else { pos++; }
  }
  return null;
}

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (err) {
    console.error(`  Failed to download image ${url}:`, err.message);
    return false;
  }
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');

  // Step 1: Find Jubilee's data URL from the main heroes page
  console.log('Step 1: Fetching heroes list page to find Jubilee URL...');
  const mainUrl = 'https://www.marvelrivals.com/heroes/index.html?heroId=0';
  let html;
  try {
    const res = await fetch(mainUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    html = await res.text();
  } catch (err) {
    console.error('Failed to fetch heroes list page:', err.message);
    return;
  }

  // Find Jubilee's data-url from the heroes page
  const heroRegex = /<a\b[^>]*\bdata-url="([^"]+)"[^>]*\bdata-id="([^"]+)"[^>]*\bdata-name="([^"]+)"/gi;
  let match;
  let jubileeUrl = null;
  while ((match = heroRegex.exec(html)) !== null) {
    if (match[3].trim().toUpperCase() === 'JUBILEE') {
      jubileeUrl = match[1];
      console.log(`  Found Jubilee data URL: ${jubileeUrl}`);
      break;
    }
  }

  // Also try reverse order of attributes
  if (!jubileeUrl) {
    const altRegex = /<a\b[^>]*\bdata-id="([^"]+)"[^>]*\bdata-url="([^"]+)"[^>]*\bdata-name="([^"]+)"/gi;
    while ((match = altRegex.exec(html)) !== null) {
      if (match[3].trim().toUpperCase() === 'JUBILEE') {
        jubileeUrl = match[2];
        console.log(`  Found Jubilee data URL (alt): ${jubileeUrl}`);
        break;
      }
    }
  }

  // Also try a more flexible search
  if (!jubileeUrl) {
    const jubileeMatch = html.match(/data-name="JUBILEE"[^>]*data-url="([^"]+)"/i) 
      || html.match(/data-url="([^"]+)"[^>]*data-name="JUBILEE"/i);
    if (jubileeMatch) {
      jubileeUrl = jubileeMatch[1];
      console.log(`  Found Jubilee data URL (flexible): ${jubileeUrl}`);
    }
  }
  
  if (!jubileeUrl) {
    // Let's check for any mention of Jubilee in the HTML
    const jubIndex = html.toUpperCase().indexOf('JUBILEE');
    if (jubIndex !== -1) {
      console.log('  Found "JUBILEE" in HTML at index:', jubIndex);
      console.log('  Context:', html.substring(Math.max(0, jubIndex - 200), jubIndex + 200));
    } else {
      console.log('  "JUBILEE" not found in HTML at all.');
      // Let's dump all hero names found
      const allHeroes = [];
      const allRegex = /data-name="([^"]+)"/gi;
      while ((match = allRegex.exec(html)) !== null) {
        allHeroes.push(match[1]);
      }
      console.log('  All heroes found on page:', allHeroes.join(', '));
    }
    return;
  }

  // Step 2: Fetch Jubilee's detail page
  console.log('\nStep 2: Fetching Jubilee detail page...');
  let detailHtml;
  try {
    const res = await fetch(jubileeUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    detailHtml = await res.text();
  } catch (err) {
    console.error('  Failed to fetch detail page:', err.message);
    return;
  }

  console.log('  Detail page length:', detailHtml.length);

  // Step 3: Parse abilities table
  const tableHtml = getOuterTable(detailHtml);
  if (!tableHtml) {
    console.error('  Could not find abilities table in detail page.');
    // Search for table-imgs class
    const tblIdx = detailHtml.indexOf('table-imgs');
    if (tblIdx !== -1) {
      console.log('  Found table-imgs at index:', tblIdx);
      console.log('  Context:', detailHtml.substring(Math.max(0, tblIdx - 100), tblIdx + 200));
    }
    return;
  }

  console.log('  Found abilities table. Length:', tableHtml.length);

  // Parse main rows
  const mainRows = [];
  let depth = 0;
  let currentTrStart = -1;
  for (let i = 0; i < tableHtml.length; i++) {
    if (tableHtml.substring(i, i + 3).toLowerCase() === '<tr') {
      if (depth === 0) currentTrStart = i;
      depth++;
    } else if (tableHtml.substring(i, i + 5).toLowerCase() === '</tr>') {
      depth--;
      if (depth === 0 && currentTrStart !== -1) {
        mainRows.push(tableHtml.substring(currentTrStart, i + 5));
        currentTrStart = -1;
      }
    }
  }

  console.log(`  Found ${mainRows.length} table rows.`);

  const heroAbilities = [];
  const heroSlug = 'jubilee';
  const rawDir = path.join(rootDir, 'ability_images', heroSlug);
  if (!fs.existsSync(rawDir)) fs.mkdirSync(rawDir, { recursive: true });

  for (let rowIdx = 0; rowIdx < mainRows.length; rowIdx++) {
    const rowHtml = mainRows[rowIdx];
    
    // Parse tds
    const tds = [];
    let tdDepth = 0;
    let tdStart = -1;
    for (let j = 0; j < rowHtml.length; j++) {
      if (rowHtml.substring(j, j + 3).toLowerCase() === '<td') {
        if (tdDepth === 0) tdStart = j;
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
    // Skip type "0" (Variant info) and type "3" (Team-Up ability) and type "4" (Team-Up info)
    if (typeStr === '0' || typeStr === '3' || typeStr === '4') continue;

    const nameStr = cleanHTML(tds[1] || '');
    if (!nameStr) continue;

    const imgMatch = tds[2] ? tds[2].match(/src="([^"]+)"/i) : null;
    const imgUrl = imgMatch ? imgMatch[1] : '';
    if (!imgUrl) continue;

    // Get properties from column 5 (index 4)
    const keys = [];
    if (tds[4]) {
      const innerTrs = tds[4].match(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi) || [];
      innerTrs.forEach(innerTr => {
        const innerTds = innerTr.match(/<td\b[^>]*>([\s\S]*?)<\/td>/gi) || [];
        if (innerTds.length >= 2) {
          keys.push({ key: cleanHTML(innerTds[0]), value: cleanHTML(innerTds[1]) });
        }
      });
    }

    const keyObj = keys.find(k => k.key.toLowerCase() === 'key');
    const button = keyObj ? keyObj.value.trim() : 'Passive';
    const abilitySlug = sanitize(nameStr);
    const destFile = `${abilitySlug}.png`;
    const destPath = path.join(rawDir, destFile);
    const publicPath = `/ability_images/${heroSlug}/${destFile}`;

    console.log(`  Ability: "${nameStr}" (Button: ${button})`);
    console.log(`    Icon URL: ${imgUrl}`);
    keys.filter(k => k.key.toLowerCase() !== 'key').forEach(k => {
      console.log(`    ${k.key}: ${k.value}`);
    });

    // Download icon
    let downloaded = fs.existsSync(destPath);
    if (!downloaded && imgUrl) {
      console.log(`    Downloading...`);
      downloaded = await downloadImage(imgUrl, destPath);
      await delay(100);
    } else if (downloaded) {
      console.log(`    Already downloaded.`);
    }

    heroAbilities.push({
      name: nameStr,
      slug: abilitySlug,
      button: button,
      originalImgUrl: imgUrl,
      localImgUrl: downloaded ? publicPath : null,
      properties: keys.filter(k => k.key.toLowerCase() !== 'key')
    });
  }

  console.log(`\nTotal abilities found: ${heroAbilities.length}`);
  
  // Output as JSON for easy copy
  const outputPath = path.join(rootDir, 'scratch', 'jubilee_abilities.json');
  fs.writeFileSync(outputPath, JSON.stringify({ "JUBILEE": heroAbilities }, null, 2));
  console.log(`\nJubilee abilities JSON saved to: ${outputPath}`);
}

main().catch(console.error);
