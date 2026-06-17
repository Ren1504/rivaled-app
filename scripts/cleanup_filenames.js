const fs = require('fs');
const path = require('path');

function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const decodedName = decodeEntities(file);
    const decodedPath = path.join(dir, decodedName);
    
    // Rename if different
    let currentPath = fullPath;
    if (file !== decodedName) {
      console.log(`Renaming: ${fullPath} -> ${decodedPath}`);
      fs.renameSync(fullPath, decodedPath);
      currentPath = decodedPath;
    }
    
    const stat = fs.statSync(currentPath);
    if (stat.isDirectory()) {
      walk(currentPath);
    }
  }
}

const baseDir = path.resolve(__dirname, '..', 'mvp_last_frames');
if (fs.existsSync(baseDir)) {
  console.log(`Starting cleanup in ${baseDir}...`);
  walk(baseDir);
  console.log("Cleanup completed!");
} else {
  console.error("Directory not found:", baseDir);
}
