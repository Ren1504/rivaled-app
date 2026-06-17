const fs = require('fs');

// Decode HTML entities
function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

async function main() {
  const url = 'https://rivalskins.com/hero/hela/';
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  
  // Extract all bundle-card elements
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
  
  console.log(`Discovered ${items.length} items. Fetching their asset IDs...`);
  
  const results = [];
  for (const item of items) {
    if (item.type !== 'costume' && item.type !== 'mvp') continue;
    
    try {
      const itemRes = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const itemHtml = await itemRes.text();
      
      // Look for ID: <span>[id]</span>
      const idMatch = itemHtml.match(/id:\s*<\/span>\s*(\d+)/i) || itemHtml.match(/id[^>]*>\s*(\d+)/i);
      const assetId = idMatch ? idMatch[1] : 'Unknown';
      
      results.push({
        name: item.name,
        type: item.type,
        assetId,
        url: item.url
      });
      
      console.log(`  ${item.type.toUpperCase()}: "${item.name}" -> AssetID: ${assetId}`);
    } catch (err) {
      console.error(`  Error fetching ${item.name}:`, err);
    }
  }
}

main();
