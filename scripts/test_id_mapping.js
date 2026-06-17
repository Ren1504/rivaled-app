const fs = require('fs');

async function main() {
  const url = 'https://rivalskins.com/hero/hela/';
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  
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
        name: nameMatch ? nameMatch[1].trim().replace(/&#039;/g, "'").replace(/&amp;/g, '&') : 'Unknown'
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
        costumes.push({ name: item.name, assetId, url: item.url });
      } else if (item.type === 'mvp') {
        mvps.push({ name: item.name, assetId, url: item.url });
      }
    } catch (err) {
      console.error(err);
    }
  }
  
  console.log("\n--- COSTUMES ---");
  console.log(costumes);
  
  console.log("\n--- MVPS ---");
  console.log(mvps);
  
  console.log("\n--- MAPPING ---");
  for (const mvp of mvps) {
    if (!mvp.assetId) {
      console.log(`MVP "${mvp.name}" has no asset ID.`);
      continue;
    }
    const matchedCostume = costumes.find(c => c.assetId && mvp.assetId.startsWith(c.assetId));
    if (matchedCostume) {
      console.log(`MVP "${mvp.name}" (${mvp.assetId}) -> Costume "${matchedCostume.name}" (${matchedCostume.assetId})`);
    } else {
      console.log(`MVP "${mvp.name}" (${mvp.assetId}) -> NO MATCH`);
    }
  }
}

main();
