const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const targetDir = path.join(rootDir, 'imagekit_upload_new_skins');

const newSkins = [
  { hero: 'Adam Warlock', file: 'Brand Ambassador.png' },
  { hero: 'Captain America', file: 'Seaside Sentinel.png' },
  { hero: 'Deadpool', file: 'Dead Mummy.png' },
  { hero: 'Devil Dinosaur', file: 'Jeff the Dinosaur.png' },
  { hero: 'Elsa Bloodstone', file: 'Primal Predator.png' },
  { hero: 'Gambit', file: "Dead man's Hand.png" },
  { hero: 'Hawkeye', file: "Bed-Stuy's Best.png" },
  { hero: 'Invisible Woman', file: 'Baxter Building Beauty.png' },
  { hero: 'Iron Man', file: 'Iron Pharaoh.png' },
  { hero: 'Jubilee', file: 'Midnight Mutant.png' },
  { hero: 'Loki', file: 'Seaside Siren.png' },
  { hero: 'Magneto', file: 'Magnetic Vintage.png' },
  { hero: 'Mantis', file: 'Akkaban Acolyte.png' },
  { hero: 'Rocket Raccoon', file: 'Golden Artificer.png' },
  { hero: 'Rogue', file: 'Raider Prime.png' },
  { hero: 'Ultron', file: 'Ultron 15.png' },
  { hero: 'Venom', file: 'Venom Bloom.png' },
  { hero: 'White Fox', file: 'Coastal Kumiho.png' },
  { hero: 'Wolverine', file: 'Bloodless Berserker.png' }
];

if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

console.log('Building imagekit_upload_new_skins folder structure...');

let copiedCount = 0;
for (const item of newSkins) {
  const srcPath = path.join(rootDir, 'mvp_last_frames', item.hero, item.file);
  const heroFolder = path.join(targetDir, item.hero);
  
  if (!fs.existsSync(heroFolder)) {
    fs.mkdirSync(heroFolder, { recursive: true });
  }

  const destPath = path.join(heroFolder, item.file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    copiedCount++;
    console.log(`[OK] Copied ${item.hero} / ${item.file}`);
  } else {
    console.warn(`[WARN] Source file not found: ${srcPath}`);
  }
}

console.log(`\nSuccessfully prepared ${copiedCount} files in: ${targetDir}`);
