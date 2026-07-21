const https = require('https');

const jubileeAssets = [
  'https://ik.imagekit.io/veiuag1gp/hero-icons/jubilee_avatar.png',
  'https://ik.imagekit.io/veiuag1gp/ability_images/jubilee/energy-plasmoids.png',
  'https://ik.imagekit.io/veiuag1gp/mvp_last_frames/Jubilee/Midnight%20Mutant.png'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(500));
  });
}

async function run() {
  for (const url of jubileeAssets) {
    const status = await checkUrl(url);
    console.log(`[${status}] ${url}`);
  }
}

run();
