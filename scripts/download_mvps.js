const fs = require('fs');
const path = require('path');

// Helper to decode HTML entities in string
function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

// Clean names for safe folder/file names
function sanitizeFilename(name) {
  return name.replace(/[\\/:*?"<>|]/g, '-').trim();
}

// Helper for delaying execution (to avoid hitting rate limits)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const outputBaseDir = path.join(rootDir, 'mvp_last_frames');
  
  if (!fs.existsSync(outputBaseDir)) {
    fs.mkdirSync(outputBaseDir, { recursive: true });
  }

  const homepageUrl = 'https://rivalskins.com/';
  console.log(`[1/4] Discovering heroes from homepage: ${homepageUrl}`);
  
  let heroSlugs = [];
  try {
    const res = await fetch(homepageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) throw new Error(`Homepage fetch failed: ${res.status}`);
    const html = await res.text();
    
    // Find all links: https://rivalskins.com/hero/[slug]/
    const heroRegex = /href="https:\/\/rivalskins\.com\/hero\/([^"/]+)\/"/g;
    let match;
    const slugsSet = new Set();
    while ((match = heroRegex.exec(html)) !== null) {
      slugsSet.add(match[1]);
    }
    heroSlugs = Array.from(slugsSet);
  } catch (err) {
    console.error(`Error discovering heroes:`, err);
    return;
  }
  
  console.log(`Found ${heroSlugs.length} hero slugs. Starting cosmetic pages discovery...`);
  
  // Discover items per hero
  const allMvpItems = []; // { heroName, slug, skinName, itemUrl }
  
  for (let i = 0; i < heroSlugs.length; i++) {
    const slug = heroSlugs[i];
    const heroUrl = `https://rivalskins.com/hero/${slug}/`;
    console.log(`[2/4] [${i + 1}/${heroSlugs.length}] Scraping hero page: ${heroUrl}`);
    
    try {
      const res = await fetch(heroUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`  Failed to fetch page for ${slug}: ${res.status}`);
        continue;
      }
      const html = await res.text();
      
      // Extract clean hero name from <title> or <h1>
      let heroName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const titleMatch = html.match(/<title>([^<]+)<\/title>/);
      if (titleMatch) {
        // e.g. "Hela Cosmetics - Marvel Rivals Skins" -> "Hela"
        const cleanTitle = titleMatch[1].replace(/\s+Cosmetics\s*-\s*Marvel\s+Rivals\s+Skins/i, '').trim();
        if (cleanTitle) {
          heroName = cleanTitle;
        }
      }
      
      // Extract bundle-card elements with data-type="mvp"
      let pos = 0;
      let mvpCount = 0;
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
          const type = typeMatch[1].trim();
          if (type === 'mvp') {
            const itemUrl = hrefMatch[1].trim();
            const skinName = nameMatch ? nameMatch[1].trim() : 'Default';
            allMvpItems.push({
              heroName,
              slug,
              skinName,
              itemUrl
            });
            mvpCount++;
          }
        }
      }
      console.log(`  Found ${mvpCount} MVP items for ${heroName}.`);
      await delay(200); // polite pause between requests
    } catch (err) {
      console.error(`  Error scraping hero ${slug}:`, err);
    }
  }
  
  console.log(`\n[3/4] Total MVP items discovered: ${allMvpItems.length}`);
  console.log(`Starting downloads...\n`);
  
  // Download each item
  for (let i = 0; i < allMvpItems.length; i++) {
    const item = allMvpItems[i];
    console.log(`[4/4] [${i + 1}/${allMvpItems.length}] Processing ${item.heroName} - ${item.skinName}`);
    
    try {
      const res = await fetch(item.itemUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`  Failed to fetch detail page: ${res.status}`);
        continue;
      }
      const html = await res.text();
      
      // Look for data-views JSON data
      const dataViewsMatch = html.match(/data-views="([^"]+)"/);
      let lastframeUrl = null;
      
      if (dataViewsMatch) {
        try {
          const decodedJson = decodeEntities(dataViewsMatch[1]);
          const views = JSON.parse(decodedJson);
          if (views.lastframe && views.lastframe.url) {
            lastframeUrl = views.lastframe.url;
          }
        } catch (jsonErr) {
          console.error(`  Failed to parse data-views JSON:`, jsonErr);
        }
      }
      
      // Fallback: look for common pattern
      if (!lastframeUrl) {
        const fallbackRegex = /https:\/\/rivalskins\.com\/wp-content\/uploads\/marvel-assets\/videos\/mvp\/last-frame\/mvp_[^\s"']+/gi;
        const fallbackMatch = html.match(fallbackRegex);
        if (fallbackMatch) {
          lastframeUrl = fallbackMatch[0];
        }
      }
      
      if (!lastframeUrl) {
        console.warn(`  Warning: No last frame image found for ${item.heroName} - ${item.skinName}.`);
        continue;
      }
      
      // Resolve full URL
      let downloadUrl = lastframeUrl;
      if (downloadUrl.startsWith('/')) {
        downloadUrl = `https://rivalskins.com` + downloadUrl;
      }
      
      // Clean up backslashes/escapes
      downloadUrl = downloadUrl.replace(/\\/g, '');
      
      // Extract file extension
      let ext = '.png';
      const extMatch = downloadUrl.match(/\.(webp|png|jpg|jpeg)($|\?)/i);
      if (extMatch) {
        ext = '.' + extMatch[1].toLowerCase();
      }
      
      // Prepare output folders
      const heroDir = path.join(outputBaseDir, sanitizeFilename(item.heroName));
      if (!fs.existsSync(heroDir)) {
        fs.mkdirSync(heroDir, { recursive: true });
      }
      
      const outputFilePath = path.join(heroDir, `${sanitizeFilename(item.skinName)}${ext}`);
      
      // Fetch the image with Referer header to bypass protection
      const imgRes = await fetch(downloadUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Referer': item.itemUrl
        }
      });
      
      if (!imgRes.ok) {
        // If image download fails, check if we can try other extensions
        console.error(`  Failed to download image ${downloadUrl}: ${imgRes.status}. Retrying as webp/png...`);
        const altUrl = downloadUrl.endsWith('.png') 
          ? downloadUrl.replace(/\.png$/, '.webp') 
          : downloadUrl.replace(/\.webp$/, '.png');
        
        const altRes = await fetch(altUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': item.itemUrl
          }
        });
        if (altRes.ok) {
          const buffer = await altRes.arrayBuffer();
          fs.writeFileSync(outputFilePath.replace(new RegExp(`\\${ext}$`), altUrl.endsWith('.png') ? '.png' : '.webp'), Buffer.from(buffer));
          console.log(`  Saved to ${outputFilePath.replace(new RegExp(`\\${ext}$`), altUrl.endsWith('.png') ? '.png' : '.webp')}`);
        } else {
          console.error(`  Failed on retry too.`);
        }
      } else {
        const buffer = await imgRes.arrayBuffer();
        fs.writeFileSync(outputFilePath, Buffer.from(buffer));
        console.log(`  Saved to ${outputFilePath}`);
      }
      
      await delay(200); // polite pause between requests
    } catch (err) {
      console.error(`  Error processing item:`, err);
    }
  }
  
  console.log(`\nAll done! All MVP last frames are stored in: ${outputBaseDir}`);
}

main();
