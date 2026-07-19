const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'ability_images', 'black-widow');

const images = {
  'widows-bite-baton.png': 'https://r.res.easebar.com/pic/20241205/66ad25fa-5a94-4087-8d1d-d626e1a5c798.png',
  'red-room-rifle.png': 'https://r.res.easebar.com/pic/20241205/67bd0973-ab49-4e6d-a04b-70f67cb2514b.png',
  'assassins-focus.png': 'https://r.res.easebar.com/pic/20260709/4dabe2ca-e173-4016-97c5-0e91244405ff.png',
  'electro-plasma-blast.png': 'https://r.res.easebar.com/pic/20260709/04b1c193-17bf-45cb-8837-9044d0c15b7d.png',
  'edge-dancer.png': 'https://r.res.easebar.com/pic/20260709/5344178b-3361-46ab-9df0-aa58876ddb5b.png',
  'widows-bite-slam.png': 'https://r.res.easebar.com/pic/20260709/632db193-8e88-4aa2-9bb3-4dbff266e5df.png'
};

const oldFilesToDelete = [
  'electro-plasma-explosion.png',
  'fleet-foot.png',
  'straight-shooter.png'
];

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(arrayBuffer));
  console.log(`Downloaded ${url} to ${dest}`);
}

async function main() {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Delete old files
  for (const file of oldFilesToDelete) {
    const filePath = path.join(targetDir, file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted old file: ${filePath}`);
    }
  }

  // Download new files
  for (const [filename, url] of Object.entries(images)) {
    const filePath = path.join(targetDir, filename);
    try {
      await download(url, filePath);
    } catch (err) {
      console.error(`Failed to download ${filename}:`, err.message);
    }
  }
  console.log('Finished updating Black Widow ability images.');
}

main();
