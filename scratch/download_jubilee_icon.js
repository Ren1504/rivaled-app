const fs = require('fs');
const path = require('path');

async function main() {
  const url = 'https://static.wikia.nocookie.net/marvel-rivals/images/2/20/Hero_Icon_Jubilee.png/revision/latest/scale-to-width-down/150?cb=20260708024026';
  const destPath = path.resolve(__dirname, '..', 'frontend', 'public', 'hero-icons', 'jubilee_avatar.png');
  
  console.log('Downloading Jubilee hero icon...');
  console.log('  From:', url);
  console.log('  To:', destPath);

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    console.log('  Download successful! Size:', Buffer.from(buffer).length, 'bytes');
  } catch (err) {
    console.error('  Failed:', err.message);
  }
}

main();
