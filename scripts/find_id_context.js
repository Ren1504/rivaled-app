const fs = require('fs');

async function main() {
  const url = 'https://rivalskins.com/item/1457/hela-mvp-crows-call/';
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  const html = await res.text();
  
  const idx = html.indexOf('1024303305');
  if (idx !== -1) {
    console.log("Found 1024303305 in HTML. Excerpt:");
    console.log(html.substring(idx - 150, idx + 150));
  } else {
    console.log("Could not find 1024303305 in HTML.");
  }
}

main();
