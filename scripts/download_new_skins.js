const fs = require('fs');
const path = require('path');

// Helper to decode HTML entities
function decodeEntities(str) {
  if (!str) return '';
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

// Sanitize filename for Windows/filesystem
function sanitizeFilename(name) {
  if (!name) return 'Unknown';
  return name.replace(/[\\/:*?"<>|]/g, '-').trim();
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
};

// Known mappings for battlepass / season / event MVP animations without individual bundle pages
const KNOWN_SKIN_MAP = {
  '4206': 'Slumber Sugah',              // Rogue - Midnight Munchies
  '4205': "Shark in Sheep's Clothing",  // Jeff - Fluffy Phenomenon
  '4204': 'President Ozzy',             // Venom - Power Trip
  '4163': 'Cosmic Kumiho',              // White Fox - Stellar Snack
  '4157': 'Astral Aegis',               // Captain America - Stellar Shield
  '4161': 'Business Elite',             // Psylocke - Confident Closer
  '4160': 'Savage Squirrel',            // Squirrel Girl - Treetop Terror
  '4159': 'Grootlactus',                // Groot - Planetary Feast
  '4156': 'Astral Arcana',              // Doctor Strange - Spinning Stars
  '4155': 'The Chronicler',             // Loki - Truth Be Told
  '4164': 'Default',                    // Gorr - Default
  '4072': 'B-Boy Prime'                 // Ultron - Zero-G Break
};

// Cache for hero pages so we don't fetch hero page multiple times
const heroPagesCache = new Map();

async function getHeroCostumes(heroSlug) {
  if (!heroSlug) return [];
  if (heroPagesCache.has(heroSlug)) {
    return heroPagesCache.get(heroSlug);
  }

  const costumes = [];
  try {
    const heroUrl = `https://rivalskins.com/hero/${heroSlug}/`;
    const res = await fetch(heroUrl, { headers: HEADERS });
    if (!res.ok) {
      heroPagesCache.set(heroSlug, costumes);
      return costumes;
    }
    const html = await res.text();

    const cardRegex = /<a\s+[^>]*href="([^"]+)"[^>]*data-type="costume"[\s\S]*?<div class="bundle-name">([^<]+)<\/div>/gi;
    let m;
    while ((m = cardRegex.exec(html)) !== null) {
      costumes.push({
        itemUrl: m[1].trim(),
        name: decodeEntities(m[2].trim())
      });
    }
    heroPagesCache.set(heroSlug, costumes);
  } catch (err) {
    console.warn(`  Warning: Failed to fetch hero costumes for ${heroSlug}:`, err.message);
  }
  return costumes;
}

// Extract exact skin name for an MVP item page
async function resolveSkinName(itemHtml, mvpName, heroName, heroSlug, itemUrl) {
  // 1. Check item ID from URL (e.g. /item/4206/...)
  const urlIdMatch = itemUrl.match(/\/item\/(\d+)\//);
  const itemId = urlIdMatch ? urlIdMatch[1] : null;

  if (itemId && KNOWN_SKIN_MAP[itemId]) {
    return KNOWN_SKIN_MAP[itemId];
  }

  // 2. If it's a default MVP
  if (mvpName.toLowerCase() === 'default' || (itemHtml.includes('>Default<') && mvpName.toLowerCase().includes('default'))) {
    return 'Default';
  }

  // 3. Check bundle links on the MVP page
  const bundleMatches = [...itemHtml.matchAll(/class="bundle-link"[^>]*>[\s\S]*?<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/gi)];
  for (const match of bundleMatches) {
    const bundleUrl = match[1].trim();
    try {
      const bRes = await fetch(bundleUrl, { headers: HEADERS });
      if (bRes.ok) {
        const bHtml = await bRes.text();
        // Look for costume cards in this bundle
        const costumeCards = [...bHtml.matchAll(/<a\s+[^>]*href="([^"]+)"[^>]*data-type="costume"[\s\S]*?<div class="bundle-name">([^<]+)<\/div>/gi)];
        
        // Priority A: Costume card matching heroSlug in href or heroName
        const matchingCard = costumeCards.find(c => {
          const href = c[1].toLowerCase();
          const name = c[2].toLowerCase();
          return (heroSlug && href.includes(`/${heroSlug}-costume-`)) || 
                 (heroName && (href.includes(heroName.toLowerCase()) || name.includes(heroName.toLowerCase())));
        });

        if (matchingCard) {
          let cName = decodeEntities(matchingCard[2]);
          const heroPrefixRegex = new RegExp(`^${heroName}\\s+`, 'i');
          cName = cName.replace(heroPrefixRegex, '').trim();
          if (cName) return cName;
        }

        // Priority B: If there's only 1 costume in this bundle
        if (costumeCards.length === 1) {
          let cName = decodeEntities(costumeCards[0][2]);
          const heroPrefixRegex = new RegExp(`^${heroName}\\s+`, 'i');
          cName = cName.replace(heroPrefixRegex, '').trim();
          if (cName) return cName;
        }
      }
    } catch (e) {
      // Continue searching
    }
  }

  // 4. Hero costume search if heroSlug is present
  if (heroSlug) {
    const heroCostumes = await getHeroCostumes(heroSlug);
    // If there is an ID match on the item page
    const mvpIdMatch = itemHtml.match(/<th>ID:<\/th>\s*<td>\s*(\d+)\s*<\/td>/i);
    const mvpId = mvpIdMatch ? mvpIdMatch[1] : null;

    if (mvpId) {
      for (const c of heroCostumes) {
        try {
          const cRes = await fetch(c.itemUrl, { headers: HEADERS });
          if (cRes.ok) {
            const cHtml = await cRes.text();
            const cIdMatch = cHtml.match(/<th>ID:<\/th>\s*<td>\s*(\d+)\s*<\/td>/i);
            if (cIdMatch && cIdMatch[1] && mvpId.startsWith(cIdMatch[1])) {
              let cName = c.name;
              const heroPrefixRegex = new RegExp(`^${heroName}\\s+`, 'i');
              cName = cName.replace(heroPrefixRegex, '').trim();
              if (cName) return cName;
            }
          }
        } catch (e) {}
      }
    }
  }

  // 5. Fallback: Check bundle title name directly
  if (bundleMatches.length > 0) {
    let bText = decodeEntities(bundleMatches[0][2]);
    bText = bText.replace(new RegExp(`^${heroName}\\s*-\\s*`, 'i'), '');
    bText = bText.replace(/\s*Bundle$/i, '').trim();
    if (bText) return bText;
  }

  // 6. Fallback: Return MVP name itself
  return mvpName;
}

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const outputBaseDir = path.join(rootDir, 'newskins');

  if (!fs.existsSync(outputBaseDir)) {
    fs.mkdirSync(outputBaseDir, { recursive: true });
  }

  // Clean up any previously misnamed files in newskins/
  const misnamedFiles = [
    path.join(outputBaseDir, 'Captain America', 'Stellar Shield.png'),
    path.join(outputBaseDir, 'Doctor Strange', 'Spinning Stars.png'),
    path.join(outputBaseDir, 'Gambit', 'B-Boy Prime.png'),
    path.join(outputBaseDir, 'Groot', 'Planetary Feast.png'),
    path.join(outputBaseDir, 'Jeff the Land Shark', 'Fluffy Phenomenon.png'),
    path.join(outputBaseDir, 'Loki', 'Truth Be Told.png'),
    path.join(outputBaseDir, 'Psylocke', 'Confident Closer.png'),
    path.join(outputBaseDir, 'Rogue', 'B-Boy Prime.png'),
    path.join(outputBaseDir, 'Rogue', 'Midnight Munchies.png'),
    path.join(outputBaseDir, 'Squirrel Girl', 'Treetop Terror.png'),
    path.join(outputBaseDir, 'Ultron', 'Mustard Beat.png'),
    path.join(outputBaseDir, 'Venom', 'Power Trip.png'),
    path.join(outputBaseDir, 'White Fox', 'Stellar Snack.png')
  ];

  for (const f of misnamedFiles) {
    if (fs.existsSync(f)) {
      try {
        fs.unlinkSync(f);
        console.log(`Cleaned up obsolete/misnamed file: ${path.basename(f)}`);
      } catch (e) {}
    }
  }

  console.log(`\n=== Marvel Rivals New Skins Downloader ===`);
  console.log(`Checking https://rivalskins.com/?type=mvp for new MVP items...\n`);

  let mvpItems = [];
  try {
    const res = await fetch('https://rivalskins.com/?type=mvp', { headers: HEADERS });
    if (!res.ok) throw new Error(`Failed to fetch MVP listing: ${res.status}`);
    const html = await res.text();

    // Parse JSON-LD ItemList
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi);
    if (jsonLdMatch) {
      for (const tag of jsonLdMatch) {
        const jsonContent = tag.replace(/<\/?script[^>]*>/gi, '').trim();
        try {
          const parsed = JSON.parse(jsonContent);
          if (parsed['@type'] === 'ItemList' && Array.isArray(parsed.itemListElement)) {
            mvpItems = parsed.itemListElement;
            break;
          }
        } catch (e) {}
      }
    }

    // Fallback: match bundle cards
    if (mvpItems.length === 0) {
      const cardRegex = /href="(https:\/\/rivalskins\.com\/item\/[^"]+)"[^>]*data-type="mvp"[\s\S]*?<div class="bundle-name">([^<]+)<\/div>/gi;
      let m;
      let pos = 1;
      while ((m = cardRegex.exec(html)) !== null) {
        mvpItems.push({
          position: pos++,
          name: decodeEntities(m[2]),
          url: m[1]
        });
      }
    }
  } catch (err) {
    console.error('Error fetching MVP listing:', err);
    return;
  }

  console.log(`Found ${mvpItems.length} MVP items on page.`);

  // Find cutoff: Angela Queen of Hel / Coronation of Hel
  // Any item before this position is newer than Angela Queen of Hel
  let cutoffIndex = mvpItems.findIndex(item => 
    item.url.includes('angela-mvp-coronation-of-hel') || 
    (item.name && item.name.toLowerCase().includes('coronation of hel'))
  );

  if (cutoffIndex === -1) {
    console.log('Cutoff (Angela Queen of Hel) not found in listing, checking all items.');
    cutoffIndex = mvpItems.length;
  } else {
    console.log(`Found Angela Queen of Hel cutoff at position ${mvpItems[cutoffIndex].position || (cutoffIndex + 1)}.`);
  }

  const newItems = mvpItems.slice(0, cutoffIndex);
  console.log(`Discovered ${newItems.length} items released after Angela Queen of Hel.\n`);

  const downloadedList = [];

  for (let i = 0; i < newItems.length; i++) {
    const item = newItems[i];
    console.log(`[${i + 1}/${newItems.length}] Checking: ${item.name} (${item.url})`);

    try {
      const itemRes = await fetch(item.url, { headers: HEADERS });
      if (!itemRes.ok) {
        console.error(`  Failed to fetch item page: ${itemRes.status}`);
        continue;
      }
      const itemHtml = await itemRes.text();

      // Extract Hero Name
      let heroName = 'Unknown';
      let heroSlug = '';
      const heroBreadcrumb = itemHtml.match(/href="https:\/\/rivalskins\.com\/hero\/([^"/]+)\/"[^>]*>([^<]+)<\/a>/i);
      if (heroBreadcrumb) {
        heroSlug = heroBreadcrumb[1].trim();
        heroName = decodeEntities(heroBreadcrumb[2].trim());
      } else {
        const titleMatch = itemHtml.match(/<title>([^|]+)\s*\|/i);
        if (titleMatch) {
          heroName = titleMatch[1].trim();
        }
      }

      // Extract MVP Last Frame URL
      let lastframeUrl = null;
      const dataViewsMatch = itemHtml.match(/data-views="([^"]+)"/);
      if (dataViewsMatch) {
        try {
          const decoded = decodeEntities(dataViewsMatch[1]);
          const views = JSON.parse(decoded);
          if (views.lastframe && views.lastframe.url) {
            lastframeUrl = views.lastframe.url;
          }
        } catch (e) {}
      }

      if (!lastframeUrl) {
        const regexMatch = itemHtml.match(/https:\/\/rivalskins\.com\/wp-content\/uploads\/marvel-assets\/videos\/mvp\/last-frame\/mvp_[^\s"']+/i);
        if (regexMatch) {
          lastframeUrl = regexMatch[0];
        }
      }

      if (!lastframeUrl) {
        console.warn(`  Warning: No last frame found for ${item.name}`);
        continue;
      }

      if (lastframeUrl.startsWith('/')) {
        lastframeUrl = 'https://rivalskins.com' + lastframeUrl;
      }

      // Extract Item Name
      let mvpName = item.name;
      const itemNameMatch = itemHtml.match(/<h1 class="item-name">([^<]+)<\/h1>/i);
      if (itemNameMatch) {
        mvpName = decodeEntities(itemNameMatch[1]);
      }

      // Resolve respective Skin Name
      const skinName = await resolveSkinName(itemHtml, mvpName, heroName, heroSlug, item.url);
      console.log(`  -> Hero: "${heroName}" | MVP: "${mvpName}" | Skin: "${skinName}"`);

      // Determine extension
      let ext = '.png';
      const extMatch = lastframeUrl.match(/\.(webp|png|jpg|jpeg)($|\?)/i);
      if (extMatch) {
        ext = '.' + extMatch[1].toLowerCase();
      }

      // Target folder: newskins/<HeroName>/<SkinName>.<ext>
      const heroDir = path.join(outputBaseDir, sanitizeFilename(heroName));
      if (!fs.existsSync(heroDir)) {
        fs.mkdirSync(heroDir, { recursive: true });
      }

      const targetPath = path.join(heroDir, `${sanitizeFilename(skinName)}${ext}`);

      if (fs.existsSync(targetPath)) {
        console.log(`  ✓ Already exists: ${path.relative(rootDir, targetPath)}`);
        downloadedList.push({ hero: heroName, skin: skinName, file: targetPath, status: 'already_exists' });
        continue;
      }

      // Download Image
      console.log(`  Downloading last frame from ${lastframeUrl}...`);
      const imgRes = await fetch(lastframeUrl, {
        headers: {
          ...HEADERS,
          'Referer': item.url
        }
      });

      if (!imgRes.ok) {
        // Retry alternative extension if .png/.webp
        const altUrl = lastframeUrl.endsWith('.png')
          ? lastframeUrl.replace(/\.png$/, '.webp')
          : lastframeUrl.replace(/\.webp$/, '.png');
        const retryRes = await fetch(altUrl, { headers: { ...HEADERS, 'Referer': item.url } });
        if (retryRes.ok) {
          const buffer = Buffer.from(await retryRes.arrayBuffer());
          fs.writeFileSync(targetPath, buffer);
          console.log(`  ✓ Saved to: ${path.relative(rootDir, targetPath)}`);
          downloadedList.push({ hero: heroName, skin: skinName, file: targetPath, status: 'downloaded' });
        } else {
          console.error(`  Failed to download image: ${imgRes.status}`);
        }
      } else {
        const buffer = Buffer.from(await imgRes.arrayBuffer());
        fs.writeFileSync(targetPath, buffer);
        console.log(`  ✓ Saved to: ${path.relative(rootDir, targetPath)}`);
        downloadedList.push({ hero: heroName, skin: skinName, file: targetPath, status: 'downloaded' });
      }

      await delay(200); // Polite interval between requests
    } catch (err) {
      console.error(`  Error processing ${item.name}:`, err.message);
    }
  }

  // Save metadata report
  const reportPath = path.join(outputBaseDir, 'skins_manifest.json');
  fs.writeFileSync(reportPath, JSON.stringify(downloadedList, null, 2));
  console.log(`\nAll done! Manifest saved to: ${reportPath}`);
}

main().catch(console.error);
