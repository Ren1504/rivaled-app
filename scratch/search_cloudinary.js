const https = require('https');

const API_KEY = "384817986257152";
const API_SECRET = "Cpc2xyJU6F890mfRwymW4esrK40";
const CLOUD_NAME = "djxtnmm8v";

function searchCloudinary(expression) {
  return new Promise((resolve, reject) => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');
    
    const postData = JSON.stringify({
      expression: expression,
      max_results: 10
    });

    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error(`Status ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

async function main() {
  try {
    console.log("Searching Cloudinary for 'light-dark-ice'...");
    // Just search for the string "light-dark-ice" which searches public_id and tag fields
    const res = await searchCloudinary("light-dark-ice");
    console.log("Results:", JSON.stringify(res, null, 2));
  } catch (err) {
    console.error("Error searching Cloudinary:", err.message);
  }
}

main();
