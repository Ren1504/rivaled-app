const fs = require('fs');
const path = require('path');

// Configure Cloudinary Node.js SDK
const cloudinary = require(path.join(__dirname, '..', 'frontend', 'node_modules', 'cloudinary')).v2;

const API_KEY = process.env.CLOUDINARY_API_KEY || "384817986257152";
const API_SECRET = process.env.CLOUDINARY_API_SECRET || "Cpc2xyJU6F890mfRwymW4esrK40";
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "djxtnmm8v";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true
});

const ABILITIES_FILE = path.join(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsAbilities.ts');
const SPLASH_DATA_FILE = path.join(__dirname, '..', 'frontend', 'src', 'data', 'splashData.ts');
const SPLASH_URLS_FILE = path.join(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsSplashUrls.ts');

// Sanitization helpers
function sanitizeHero(name) {
  return name.toLowerCase().replace(/\s*&\s*/g, "-and-").replace(/\s+/g, "-").replace(/[.']/g, "");
}

function sanitizeSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[.&'"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function main() {
  console.log("Fetching resources from Cloudinary Search API...");
  let allResources = [];
  let nextCursor = null;

  try {
    do {
      const res = await cloudinary.search
        .expression("resource_type:image")
        .max_results(500)
        .next_cursor(nextCursor)
        .execute();
      allResources = allResources.concat(res.resources || []);
      nextCursor = res.next_cursor || null;
      console.log(`Fetched ${res.resources.length} resources (Total: ${allResources.length})...`);
    } while (nextCursor);

    console.log(`Successfully retrieved all ${allResources.length} resources from Cloudinary.`);

    // ==========================================
    // 1. Sync Ability Images
    // ==========================================
    if (!fs.existsSync(ABILITIES_FILE)) {
      console.error(`Target database file not found: ${ABILITIES_FILE}`);
      process.exit(1);
    }

    let tsContent = fs.readFileSync(ABILITIES_FILE, 'utf8');
    let replacedAbilities = 0;
    
    const newTsContent = tsContent.replace(/"localImgUrl":\s*"([^"]+)"/g, (match, localPath) => {
      let heroSlug = "";
      let abilitySlug = "";

      if (localPath.includes("res.cloudinary.com")) {
        const cleanUrl = localPath.replace(/_[a-z0-9]{6}\.png$/i, '');
        const urlParts = cleanUrl.split('/');
        
        if (localPath.includes("/ability_images/")) {
          const idx = urlParts.indexOf("ability_images");
          if (idx !== -1 && idx + 2 < urlParts.length) {
            heroSlug = urlParts[idx + 1].toLowerCase();
            abilitySlug = urlParts[idx + 2].replace(/\.[^/.]+$/, "").toLowerCase();
          }
        } else {
          const filename = urlParts.pop();
          abilitySlug = filename.replace(/\.[^/.]+$/, "").toLowerCase();
        }
      } else {
        const parts = localPath.split('/');
        if (parts.length >= 3) {
          heroSlug = parts[parts.length - 2].toLowerCase();
          const filename = parts[parts.length - 1];
          abilitySlug = filename.replace(/\.[^/.]+$/, "").toLowerCase();
        }
      }

      if (!abilitySlug) return match;

      // Find match on Cloudinary
      let foundResource = allResources.find(r => {
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

      if (!foundResource) {
        foundResource = allResources.find(r => {
          const pidLower = r.public_id.toLowerCase();
          const cleanPid = pidLower.replace(/_[a-z0-9]{6}$/, '');
          const pidAbility = cleanPid.split('/').pop();
          return pidAbility === abilitySlug;
        });
      }

      if (foundResource) {
        replacedAbilities++;
        return `"localImgUrl": "${foundResource.secure_url}"`;
      } else {
        return match;
      }
    });

    if (replacedAbilities > 0) {
      fs.writeFileSync(ABILITIES_FILE, newTsContent, 'utf8');
      console.log(`Updated ${replacedAbilities} ability image URL mappings in marvelRivalsAbilities.ts.`);
    } else {
      console.log("No ability mappings were updated.");
    }

    // ==========================================
    // 2. Sync Splash Images
    // ==========================================
    if (fs.existsSync(SPLASH_DATA_FILE)) {
      console.log("\nSyncing Splash Art images...");
      const splashContent = fs.readFileSync(SPLASH_DATA_FILE, 'utf8');
      
      const assignIdx = splashContent.indexOf('heroSplashData');
      const startIdx = splashContent.indexOf('{', assignIdx);
      const endIdx = splashContent.lastIndexOf('}');
      if (assignIdx !== -1 && startIdx !== -1 && endIdx !== -1) {
        const jsObjText = splashContent.substring(startIdx, endIdx + 1);
        const heroSplashDataObj = eval(`(${jsObjText})`);
        const splashMappings = {};

        let matchedSplashCount = 0;

        for (const [heroName, skins] of Object.entries(heroSplashDataObj)) {
          const heroSlug = sanitizeHero(heroName);
          const mappedSkins = {};

          for (const skinFilename of skins) {
            const skinBaseName = skinFilename.replace(/\.[^/.]+$/, "");
            const skinSlug = sanitizeSlug(skinBaseName);

            // Find matching splash image on Cloudinary
            const foundSplash = allResources.find(r => {
              const pidLower = r.public_id.toLowerCase();
              const cleanPid = pidLower.replace(/_[a-z0-9]{6}$/, '');
              const pidSegments = cleanPid.split('/');
              const pidSkin = pidSegments.pop();
              const pidHero = pidSegments.pop();

              // Match by folder structure (dynamic folder or public ID path)
              // folder formats: "mvp_last_frames/hero-name" or "splash_images/hero-name"
              const folderMatch = r.asset_folder && r.asset_folder.toLowerCase().includes(heroSlug);
              const pathMatch = pidHero && pidHero === heroSlug;

              if (pidSkin === skinSlug && (folderMatch || pathMatch)) {
                return true;
              }
              // Also allow generic matching if flat filename is used
              if (pidSkin === skinSlug && !pidHero && !r.asset_folder) {
                return true;
              }
              return false;
            });

            if (foundSplash) {
              mappedSkins[skinFilename] = foundSplash.secure_url;
              matchedSplashCount++;
            }
          }

          if (Object.keys(mappedSkins).length > 0) {
            splashMappings[heroName] = mappedSkins;
          }
        }

        const splashUrlsContent = `// Auto-generated mapping database of heroes and their Cloudinary splash image URLs
export const heroSplashUrls: { [hero: string]: { [skin: string]: string } } = ${JSON.stringify(splashMappings, null, 2)};
`;
        fs.writeFileSync(SPLASH_URLS_FILE, splashUrlsContent, 'utf8');
        console.log(`Successfully mapped ${matchedSplashCount} splash images inside marvelRivalsSplashUrls.ts.`);
      }
    } else {
      console.log("Splash data file not found, skipping splash sync.");
    }

    console.log("\nAll done!");

  } catch (err) {
    console.error("Sync failed:", err.message || err);
    process.exit(1);
  }
}

main();
