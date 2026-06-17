const fs = require('fs');
const path = require('path');

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
  const sourceDir = path.join(rootDir, 'ability_images');
  const destDir = path.join(rootDir, 'frontend', 'public', 'ability_images');
  
  if (!fs.existsSync(sourceDir)) {
    console.error("Source directory not found:", sourceDir);
    return;
  }
  
  console.log("Copying ability_images to public folder...");
  copyFolderSync(sourceDir, destDir);
  console.log("Copy completed.");
}

main();
