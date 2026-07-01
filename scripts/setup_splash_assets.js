const fs = require('fs');
const path = require('path');

function walkDir(dir, baseDirName) {
  const results = {};
  const list = fs.readdirSync(dir);
  
  for (const item of list) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      results[item] = fs.readdirSync(itemPath)
        .filter(f => f.endsWith('.png') || f.endsWith('.webp'));
    }
  }
  return results;
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    } else {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    }
  });
}

function main() {
  const rootDir = path.resolve(__dirname, '..');
  const sourceDir = path.join(rootDir, 'mvp_last_frames');
  const destDir = path.join(rootDir, 'frontend', 'public', 'mvp_last_frames');
  
  if (!fs.existsSync(sourceDir)) {
    console.error("Source directory not found:", sourceDir);
    return;
  }
  
  console.log("Copying mvp_last_frames to public folder...");
  copyFolderSync(sourceDir, destDir);
  console.log("Copy completed.");
  
  console.log("Scanning files to build data mapping...");
  const mapping = walkDir(sourceDir);
  
  const tsContent = `// Auto-generated mapping database of heroes and their downloaded skin names
export interface HeroSplashData {
  [heroName: string]: string[];
}

export const heroSplashData: HeroSplashData = ${JSON.stringify(mapping, null, 2)};
`;
  
  const tsPath = path.join(rootDir, 'frontend', 'src', 'data', 'splashData.ts');
  fs.writeFileSync(tsPath, tsContent);
  console.log(`Saved typescript mapping to ${tsPath}`);
}

main();
