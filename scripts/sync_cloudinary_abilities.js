const fs = require('fs');
const path = require('path');
const https = require('https');

// Cloudinary Credentials (can be overridden by environment variables)
const API_KEY = process.env.CLOUDINARY_API_KEY || "384817986257152";
const API_SECRET = process.env.CLOUDINARY_API_SECRET || "Cpc2xyJU6F890mfRwymW4esrK40";
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "djxtnmm8v";

const TARGET_FILE = path.join(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsAbilities.ts');

function fetchResources(nextCursor = null) {
  return new Promise((resolve, reject) => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;
    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');
    
    const postData = JSON.stringify({
      expression: "resource_type:image", // Searches all image resources in the account
      max_results: 500,
      next_cursor: nextCursor
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
            reject(new Error(`Failed to parse JSON: ${e.message}`));
          }
        } else {
          reject(new Error(`Cloudinary API returned status ${res.statusCode}: ${data}`));
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
  console.log("Fetching images from Cloudinary using Search API...");
  let allResources = [];
  let nextCursor = null;
  
  try {
    do {
      const response = await fetchResources(nextCursor);
      const resources = response.resources || [];
      allResources = allResources.concat(resources);
      nextCursor = response.next_cursor || null;
      console.log(`Fetched ${resources.length} resources (Total: ${allResources.length})...`);
    } while (nextCursor);

    console.log(`Successfully retrieved all ${allResources.length} resources from Cloudinary Search API.`);

    if (!fs.existsSync(TARGET_FILE)) {
      console.error(`Target database file not found: ${TARGET_FILE}`);
      process.exit(1);
    }

    let tsContent = fs.readFileSync(TARGET_FILE, 'utf8');
    
    let replacedCount = 0;
    const newTsContent = tsContent.replace(/"localImgUrl":\s*"([^"]+)"/g, (match, localPath) => {
      // localPath format: "/ability_images/hulk/radioactive-lockdown.png" or a Cloudinary URL we are updating
      // Let's extract the hero and ability slugs from the path
      let heroSlug = "";
      let abilitySlug = "";

      if (localPath.includes("res.cloudinary.com")) {
        // If it's already a Cloudinary URL, let's extract the slugs from it
        // e.g. "https://res.cloudinary.com/djxtnmm8v/image/upload/v1782156401/light-dark-ice_ycp5az.png"
        // or "https://res.cloudinary.com/djxtnmm8v/image/upload/ability_images/luna-snow/light-dark-ice.png"
        const cleanUrl = localPath.replace(/_[a-z0-9]{6}\.png$/i, ''); // remove suffix if present
        const urlParts = cleanUrl.split('/');
        
        if (localPath.includes("/ability_images/")) {
          // Pathing layout: ability_images/<hero>/<ability>
          const idx = urlParts.indexOf("ability_images");
          if (idx !== -1 && idx + 2 < urlParts.length) {
            heroSlug = urlParts[idx + 1].toLowerCase();
            abilitySlug = urlParts[idx + 2].replace(/\.[^/.]+$/, "").toLowerCase();
          }
        } else {
          // Flat layout: take filename as abilitySlug, and let's fall back to just ability match
          const filename = urlParts.pop();
          abilitySlug = filename.replace(/\.[^/.]+$/, "").toLowerCase();
        }
      } else {
        // Original local format: "/ability_images/hulk/radioactive-lockdown.png"
        const parts = localPath.split('/');
        if (parts.length >= 3) {
          heroSlug = parts[parts.length - 2].toLowerCase();
          const filename = parts[parts.length - 1];
          abilitySlug = filename.replace(/\.[^/.]+$/, "").toLowerCase();
        }
      }

      if (!abilitySlug) return match;

      // Find a matching resource on Cloudinary
      // 1. First choice: Matches both the asset_folder/hero slug and the ability slug
      let foundResource = allResources.find(r => {
        // Match by asset_folder if available
        if (r.asset_folder) {
          const folderParts = r.asset_folder.toLowerCase().split('/');
          const pidHero = folderParts.pop();
          
          const pidLower = r.public_id.toLowerCase();
          const cleanPid = pidLower.replace(/_[a-z0-9]{6}$/, '');
          const pidAbility = cleanPid.split('/').pop();
          
          if (pidAbility === abilitySlug && (!heroSlug || pidHero === heroSlug)) {
            return true;
          }
        }
        
        // Match by public_id path structure
        const pidLower = r.public_id.toLowerCase();
        const cleanPid = pidLower.replace(/_[a-z0-9]{6}$/, '');
        const pidSegments = cleanPid.split('/');
        const pidAbility = pidSegments.pop();
        const pidHero = pidSegments.pop();
        
        if (pidAbility === abilitySlug) {
          if (pidHero && heroSlug) {
            return pidHero === heroSlug;
          }
          return true;
        }
        return false;
      });

      // 2. Second choice (Fallback): Matches just the ability slug in the public_id
      if (!foundResource) {
        foundResource = allResources.find(r => {
          const pidLower = r.public_id.toLowerCase();
          const cleanPid = pidLower.replace(/_[a-z0-9]{6}$/, '');
          const pidAbility = cleanPid.split('/').pop();
          return pidAbility === abilitySlug;
        });
      }

      if (foundResource) {
        replacedCount++;
        return `"localImgUrl": "${foundResource.secure_url}"`;
      } else {
        console.warn(`Warning: Ability "${abilitySlug}" (hero: "${heroSlug || 'unknown'}") was not found in Cloudinary.`);
        return match;
      }
    });

    if (replacedCount > 0) {
      fs.writeFileSync(TARGET_FILE, newTsContent, 'utf8');
      console.log(`\nSuccess: Sync completed! Updated ${replacedCount} localImgUrl mappings in marvelRivalsAbilities.ts.`);
    } else {
      console.log("\nNo mappings were updated. Verify that your Cloudinary images match the ability names.");
    }

  } catch (err) {
    console.error("Sync failed:", err.message);
    process.exit(1);
  }
}

main();
