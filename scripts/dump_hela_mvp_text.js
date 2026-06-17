const fs = require('fs');

async function main() {
  const url = 'https://rivalskins.com/item/1457/hela-mvp-crows-call/';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  
  // Clean all script and style tags from html
  let cleaned = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  cleaned = cleaned.replace(/<style[\s\S]*?<\/style>/gi, '');
  
  // Extract all text inside tags
  const textRegex = />([^<>\n\t\r]+)</g;
  let match;
  const texts = [];
  while ((match = textRegex.exec(cleaned)) !== null) {
    const txt = match[1].trim();
    if (txt) {
      texts.push(txt);
    }
  }
  
  fs.writeFileSync('C:\\Users\\vigne\\.gemini\\antigravity-ide\\brain\\c7936c89-9010-43ee-900a-e25e80bcc7d8\\scratch\\hela_texts.txt', texts.join('\n'));
  console.log("Saved texts to hela_texts.txt");
}

main();
