const https = require('https');

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

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(500));
  });
}

async function run() {
  console.log('Checking 19 new skins on ImageKit CDN (https://ik.imagekit.io/veiuag1gp/mvp_last_frames/...)...');
  let onlineCount = 0;
  for (const item of newSkins) {
    const folder = item.hero.replace(/&/g, 'and');
    const url = `https://ik.imagekit.io/veiuag1gp/mvp_last_frames/${encodeURIComponent(folder)}/${encodeURIComponent(item.file)}`;
    const status = await checkUrl(url);
    if (status === 200) onlineCount++;
    console.log(`[${status}] ${item.hero} / ${item.file}`);
  }
  console.log(`\nResult: ${onlineCount} out of ${newSkins.length} are currently uploaded and returning HTTP 200 on ImageKit.`);
}

run();
