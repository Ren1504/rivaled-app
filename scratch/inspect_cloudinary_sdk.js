const path = require('path');
const cloudinary = require(path.join(__dirname, '..', 'frontend', 'node_modules', 'cloudinary')).v2;

cloudinary.config({
  cloud_name: "djxtnmm8v",
  api_key: "384817986257152",
  api_secret: "Cpc2xyJU6F890mfRwymW4esrK40",
  secure: true
});

async function main() {
  try {
    let allResources = [];
    let nextCursor = null;
    do {
      const res = await cloudinary.search
        .expression("resource_type:image")
        .max_results(500)
        .next_cursor(nextCursor)
        .execute();
      allResources = allResources.concat(res.resources || []);
      nextCursor = res.next_cursor || null;
    } while (nextCursor);

    console.log(`Total resources: ${allResources.length}`);
    const folders = new Set();
    allResources.forEach(r => {
      if (r.asset_folder) {
        folders.add(r.asset_folder);
      } else {
        folders.add("[root]");
      }
    });
    console.log("All folder paths on the account:", Array.from(folders));
  } catch (err) {
    console.error("Error:", err.message || err);
  }
}

main();
