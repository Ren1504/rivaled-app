const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Parse the array of heroes using eval/Regex
const jsonText = content.substring(content.indexOf('export const heroes: Hero[] = ['));
const arrayStart = jsonText.indexOf('[');
// Find matching closing bracket for the array
let depth = 0;
let arrayEnd = -1;
for (let i = arrayStart; i < jsonText.length; i++) {
  if (jsonText[i] === '[') depth++;
  else if (jsonText[i] === ']') {
    depth--;
    if (depth === 0) {
      arrayEnd = i;
      break;
    }
  }
}
const arrayStr = jsonText.substring(arrayStart, arrayEnd + 1);

// Safely evaluate the array
const heroes = eval(arrayStr);

heroes.forEach(h => {
  console.log(`"${h.name}": ${h.comicDebutYear},`);
});
