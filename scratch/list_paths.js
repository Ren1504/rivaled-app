const https = require('https');

const API_KEY = "384817986257152";
const API_SECRET = "Cpc2xyJU6F890mfRwymW4esrK40";
const CLOUD_NAME = "djxtnmm8v";

function fetchResources() {
  return new Promise((resolve, reject) => {
    let url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image?max_results=500`;
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');
    
    const options = {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Status ${res.statusCode}: ${data}`));
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function main() {
  try {
    const res = await fetchResources();
    const resources = res.resources || [];
    console.log(`Found ${resources.length} resources.`);
    console.log("First 30 public IDs:");
    resources.slice(0, 30).forEach(r => {
      console.log(`- ${r.public_id} (${r.format})`);
    });
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
