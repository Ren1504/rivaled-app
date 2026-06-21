const fs = require('fs');
const path = require('path');

const tsFilePath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsQuotes.ts');
const fileContent = fs.readFileSync(tsFilePath, 'utf8');

// Extract the array content
const startMarker = 'export const heroQuotes: HeroQuote[] = ';
const startIndex = fileContent.indexOf(startMarker);
if (startIndex === -1) {
  console.error("Could not find start marker");
  process.exit(1);
}

const jsonText = fileContent.substring(startIndex + startMarker.length).trim().replace(/;$/, '');
const quotes = JSON.parse(jsonText);

const clues = new Set();
quotes.forEach(q => {
  clues.add(q.clue);
});

console.log("Total unique clues:", clues.size);
console.log("Clues containing 'Map' or 'specific' (case-insensitive):");
Array.from(clues).forEach(clue => {
  if (clue.toLowerCase().includes('map') || clue.toLowerCase().includes('specific')) {
    console.log(`- "${clue}"`);
  }
});
