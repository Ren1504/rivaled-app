const fs = require('fs');
const path = require('path');

async function main() {
  const url = 'https://rivalskins.com/wp-json/';
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) throw new Error(`Status: ${res.status}`);
    const data = await res.json();
    
    // Extract routes
    const routes = Object.keys(data.routes || {});
    console.log("Total routes found:", routes.length);
    
    // Filter routes of interest (e.g. wp/v2/...)
    const filtered = routes.filter(r => r.includes('wp/v2') || r.includes('item'));
    
    const outputFilePath = path.join(__dirname, 'wp_routes.json');
    fs.writeFileSync(outputFilePath, JSON.stringify(filtered, null, 2));
    console.log(`Saved routes list to ${outputFilePath}`);
  } catch (err) {
    console.error(err);
  }
}

main();
