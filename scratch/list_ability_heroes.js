const fs = require('fs');
const f = fs.readFileSync('frontend/src/data/marvelRivalsAbilities.ts', 'utf8');
const matches = [...f.matchAll(/^\s*"([A-Z][^"]+)"\s*:\s*\[/gm)];
matches.forEach(m => console.log(m[1]));
console.log('\nTotal:', matches.length, 'heroes');
