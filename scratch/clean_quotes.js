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

const initialCount = quotes.length;

// Filter out map-specific quotes
const filteredQuotes = quotes.filter(q => {
  const clueLower = (q.clue || '').toLowerCase();
  return !clueLower.includes('specific maps');
});

const finalCount = filteredQuotes.length;
const removedCount = initialCount - finalCount;

console.log(`Original count: ${initialCount}`);
console.log(`Filtered count: ${finalCount}`);
console.log(`Removed ${removedCount} map-specific quotes`);

// Write back to the TS file
const newFileContent = `// Marvel Rivals Character Quotes Database
// Auto-generated from Fandom Wiki Chatter & Interactions pages

export interface HeroQuote {
  quote: string;
  character: string;
  clue: string; // recipient character for interactions, or trigger condition for chatter
  type: 'chatter' | 'interaction';
}

export const heroQuotes: HeroQuote[] = ${JSON.stringify(filteredQuotes, null, 2)};
`;

fs.writeFileSync(tsFilePath, newFileContent, 'utf8');
console.log("Successfully wrote cleaned database back to marvelRivalsQuotes.ts");
