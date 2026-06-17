const fs = require('fs');
const path = require('path');

async function main() {
  const url = 'https://rivalskins.com/item/1457/hela-mvp-crows-call/';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  
  // Find all links in the html
  const linkRegex = /href="([^"]+)"/g;
  let match;
  const links = [];
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[1]);
  }
  
  // Filter links containing 'rivalskins.com'
  const filteredLinks = links.filter(l => l.includes('rivalskins.com'));
  
  const output = {
    url,
    totalLinks: links.length,
    rivalskinsLinks: filteredLinks,
    // Excerpt of html around some keywords
    keywords: {}
  };
  
  const words = ['set', 'bundle', 'costume', 'related', 'queen-in-black', 'crows-call'];
  for (const w of words) {
    const idx = html.toLowerCase().indexOf(w);
    if (idx !== -1) {
      output.keywords[w] = html.substring(idx - 100, idx + 200);
    }
  }

  const outputFilePath = path.join(__dirname, 'hela_links_output.json');
  fs.writeFileSync(outputFilePath, JSON.stringify(output, null, 2));
  console.log(`Saved output to ${outputFilePath}`);
}

main();
