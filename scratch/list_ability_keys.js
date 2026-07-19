const fs = require('fs');
const content = fs.readFileSync('frontend/src/data/marvelRivalsAbilities.ts', 'utf8');
const keys = content.match(/"[A-Z][A-Z &'.-]+"\s*:/g);
if(keys) {
  const unique = [...new Set(keys)];
  unique.forEach(k => console.log(k));
}
