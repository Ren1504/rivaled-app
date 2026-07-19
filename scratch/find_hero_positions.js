const fs = require('fs');
const f = fs.readFileSync('frontend/src/data/marvelRivalsAbilities.ts', 'utf8');

// Find the pattern: "HERO_NAME": [ which starts a hero section at the top level
// We look for lines that match:  "UPPER_CASE_NAME": [
const heroPattern = /^  "([A-Z][A-Z &'.-]+)": \[/gm;
const heroes = [];
let m;
while ((m = heroPattern.exec(f)) !== null) {
  const lineNum = f.substring(0, m.index).split('\n').length;
  heroes.push({ name: m[1], index: m.index, line: lineNum });
}

heroes.forEach((h, i) => {
  const nextStart = i < heroes.length - 1 ? heroes[i+1].index : f.length;
  console.log(`${h.line}: "${h.name}"`);
});

// Find where to insert after the last hero (before closing });)
const lastHero = heroes[heroes.length - 1];
console.log('\nLast hero:', lastHero.name, 'at line', lastHero.line);

// Find the closing }; of the whole object
const closingIdx = f.lastIndexOf('};');
const closingLine = f.substring(0, closingIdx).split('\n').length;
console.log('Closing }; at line:', closingLine);
