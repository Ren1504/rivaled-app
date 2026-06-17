const fs = require('fs');
const path = require('path');

// Decode HTML entities
function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

// Sanitize filename
function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, '-').trim();
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const baseDir = path.join(rootDir, 'mvp_last_frames');
  
  if (!fs.existsSync(baseDir)) {
    console.error("Directory not found:", baseDir);
    return;
  }

  const homepageUrl = 'https://rivalskins.com/';
  console.log(`[1/4] Discovering heroes from homepage: ${homepageUrl}`);
  
  let heroSlugs = [];
  try {
    const res = await fetch(homepageUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await res.text();
    const heroRegex = /href="https:\/\/rivalskins\.com\/hero\/([^"/]+)\/"/g;
    let match;
    const slugsSet = new Set();
    while ((match = heroRegex.exec(html)) !== null) {
      slugsSet.add(match[1]);
    }
    heroSlugs = Array.from(slugsSet);
  } catch (err) {
    console.error("Error discovering heroes:", err);
    return;
  }
  
  console.log(`Found ${heroSlugs.length} hero slugs. Starting mapping resolution...\n`);
  
  for (let i = 0; i < heroSlugs.length; i++) {
    const slug = heroSlugs[i];
    const heroUrl = `https://rivalskins.com/hero/${slug}/`;
    
    try {
      const res = await fetch(heroUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (!res.ok) continue;
      const html = await res.text();
      
      // Determine clean hero name
      let heroName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      if (titleMatch) {
        const cleanTitle = titleMatch[1].replace(/\s+Cosmetics\s*-\s*Marvel\s+Rivals\s+Skins/i, '').trim();
        if (cleanTitle) heroName = cleanTitle;
      }
      
      const heroFolder = path.join(baseDir, sanitizeFilename(heroName));
      if (!fs.existsSync(heroFolder)) {
        // Hero folder doesn't exist locally, skip
        continue;
      }
      
      console.log(`[${i + 1}/${heroSlugs.length}] Processing hero: ${heroName}`);
      
      // Extract all item links
      const items = [];
      let pos = 0;
      while (true) {
        const cardIdx = html.indexOf('class="bundle-card"', pos);
        if (cardIdx === -1) break;
        
        const startIdx = html.lastIndexOf('<a ', cardIdx);
        const endIdx = html.indexOf('</a>', cardIdx);
        if (startIdx === -1 || endIdx === -1) {
          pos = cardIdx + 20;
          continue;
        }
        
        const cardHtml = html.substring(startIdx, endIdx + 4);
        pos = endIdx + 4;
        
        const hrefMatch = cardHtml.match(/href="([^"]+)"/);
        const typeMatch = cardHtml.match(/data-type="([^"]+)"/);
        const nameMatch = cardHtml.match(/<div class="bundle-name">([^<]+)<\/div>/);
        
        if (hrefMatch && typeMatch) {
          items.push({
            url: hrefMatch[1].trim(),
            type: typeMatch[1].trim(),
            name: nameMatch ? decodeEntities(nameMatch[1].trim()) : 'Unknown'
          });
        }
      }
      
      const costumes = [];
      const mvps = [];
      
      for (const item of items) {
        if (item.type !== 'costume' && item.type !== 'mvp') continue;
        
        try {
          const itemRes = await fetch(item.url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
          });
          const itemHtml = await itemRes.text();
          
          const idMatch = itemHtml.match(/<th>ID:<\/th>\s*<td>(\d+)<\/td>/i);
          const assetId = idMatch ? idMatch[1] : null;
          
          if (item.type === 'costume') {
            costumes.push({ name: item.name, assetId });
          } else if (item.type === 'mvp') {
            mvps.push({ name: item.name, assetId });
          }
          await delay(50); // small delay between sub-requests
        } catch (itemErr) {
          console.error(`  Error fetching metadata for ${item.name}:`, itemErr);
        }
      }
      
      // Map and rename files in heroFolder
      const localFiles = fs.readdirSync(heroFolder);
      
      for (const file of localFiles) {
        const ext = path.extname(file);
        const nameWithoutExt = path.basename(file, ext);
        
        // Find matching MVP in our metadata
        const mvpMeta = mvps.find(m => sanitizeFilename(m.name).toLowerCase() === nameWithoutExt.toLowerCase());
        
        let targetSkinName = null;
        
        if (nameWithoutExt.toLowerCase() === 'default') {
          targetSkinName = 'Default';
        } else if (mvpMeta && mvpMeta.assetId) {
          // Find costume whose assetId is a prefix of MVP's assetId
          const costumeMeta = costumes.find(c => c.assetId && mvpMeta.assetId.startsWith(c.assetId));
          if (costumeMeta) {
            targetSkinName = costumeMeta.name;
          }
        }
        
        // If we found a mapping and it's different from current file name
        if (targetSkinName) {
          // Normalize costume name: e.g. "HELA Default" -> "Default", strip hero name if prefixed
          let cleanSkinName = targetSkinName;
          const heroPrefixRegex = new RegExp(`^${heroName}\\s+`, 'i');
          cleanSkinName = cleanSkinName.replace(heroPrefixRegex, '');
          
          // Capitalize first letters for clean formatting (e.g. "Queen in Black")
          cleanSkinName = cleanSkinName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
          
          const oldPath = path.join(heroFolder, file);
          const newPath = path.join(heroFolder, `${sanitizeFilename(cleanSkinName)}${ext}`);
          
          if (oldPath !== newPath) {
            console.log(`  Renaming: "${file}" -> "${sanitizeFilename(cleanSkinName)}${ext}"`);
            fs.renameSync(oldPath, newPath);
          }
        } else {
          console.log(`  No mapping found for: "${file}"`);
        }
      }
      await delay(200); // polite delay between heroes
    } catch (err) {
      console.error(`Error processing hero ${slug}:`, err);
    }
  }
  
  console.log("\nFinished renaming MVP images to respective skin names!");
}

main();
