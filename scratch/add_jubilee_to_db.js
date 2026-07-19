const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const jubileeData = JSON.parse(fs.readFileSync(path.join(rootDir, 'scratch', 'jubilee_abilities.json'), 'utf8'));

// 1. Update marvelRivalsAbilities.ts - add JUBILEE before the closing };
const tsPath = path.join(rootDir, 'frontend', 'src', 'data', 'marvelRivalsAbilities.ts');
let tsContent = fs.readFileSync(tsPath, 'utf8');

// Format the Jubilee entry
const jubileeJson = JSON.stringify(jubileeData['JUBILEE'], null, 2)
  .split('\n')
  .map((line, i) => i === 0 ? '  ' + line : '    ' + line)
  .join('\n');

const insertBlock = `,\n  "JUBILEE": ${jubileeJson.trim().replace(/^  /, '')}`;

// Find the last ]; before }; and insert after it
const closingIndex = tsContent.lastIndexOf('};');
const lastBracket = tsContent.lastIndexOf(']', closingIndex);
tsContent = tsContent.substring(0, lastBracket + 1) + insertBlock + '\n' + tsContent.substring(lastBracket + 1);

fs.writeFileSync(tsPath, tsContent, 'utf8');
console.log('Updated marvelRivalsAbilities.ts with JUBILEE');

// 2. Update heroAbilitiesData.json
const jsonPath = path.join(rootDir, 'frontend', 'src', 'data', 'heroAbilitiesData.json');
let jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
jsonData['JUBILEE'] = jubileeData['JUBILEE'];
fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
console.log('Updated heroAbilitiesData.json with JUBILEE');

// 3. Copy ability icons to public directory
const srcDir = path.join(rootDir, 'ability_images', 'jubilee');
const destDir = path.join(rootDir, 'frontend', 'public', 'ability_images', 'jubilee');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}
const files = fs.readdirSync(srcDir);
files.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  console.log(`Copied ${file} to public/ability_images/jubilee/`);
});

console.log('\nAll done!');
