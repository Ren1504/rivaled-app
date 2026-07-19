const http = require('https');

const newSlugs = [
  'widows-bite-baton',
  'red-room-rifle',
  'assassins-focus',
  'electro-plasma-blast',
  'edge-dancer',
  'widows-bite-slam'
];

const oldSlugs = [
  'electro-plasma-explosion',
  'fleet-foot',
  'straight-shooter'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve(500);
    });
  });
}

async function main() {
  console.log('--- Checking New Reworked Abilities on ImageKit ---');
  for (const slug of newSlugs) {
    const url = `https://ik.imagekit.io/veiuag1gp/ability_images/black-widow/${slug}.png`;
    const status = await checkUrl(url);
    console.log(`${slug}.png: HTTP ${status} (${status === 200 ? 'IN SYNC / UPLOADED' : 'MISSING'})`);
  }

  console.log('\n--- Checking Old Removed Abilities on ImageKit ---');
  for (const slug of oldSlugs) {
    const url = `https://ik.imagekit.io/veiuag1gp/ability_images/black-widow/${slug}.png`;
    const status = await checkUrl(url);
    console.log(`${slug}.png: HTTP ${status} (${status === 200 ? 'STILL EXISTS (NEEDS CLEANUP)' : 'CLEANED UP'})`);
  }
}

main();
