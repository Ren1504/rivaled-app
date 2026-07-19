const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsData.ts');

if (!fs.existsSync(targetPath)) {
  console.error("File not found:", targetPath);
  process.exit(1);
}

let content = fs.readFileSync(targetPath, 'utf8');

// 1. Remove from interface
//   isTeamUpAnchor: boolean;
const interfaceRegex = /\s*isTeamUpAnchor:\s*boolean;/g;
content = content.replace(interfaceRegex, '');

// 2. Remove from hero objects
//     "isTeamUpAnchor": true,
//     "isTeamUpAnchor": false,
const propertyRegex = /\s*"isTeamUpAnchor":\s*(true|false),?/g;
content = content.replace(propertyRegex, '');

fs.writeFileSync(targetPath, content, 'utf8');
console.log("Successfully removed isTeamUpAnchor from marvelRivalsData.ts");
