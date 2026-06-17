const fs = require('fs');

async function main() {
  const url = 'https://rivalskins.com/item/1458/hela-costume-queen-in-black/';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  
  // Search for the ID in the html
  const match = html.match(/id:\s*<\/span>\s*(\d+)/i) || html.match(/id[^>]*>\s*(\d+)/i) || html.match(/\b1024303\b/);
  console.log("Match for ID:", match);
  
  // Find all 9 or 10 digit numbers in the html
  const numbers = html.match(/\b\d{6,11}\b/g);
  console.log("Discovered asset IDs in HTML:", numbers);
}

main();
