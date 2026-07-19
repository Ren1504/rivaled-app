const fs = require('fs');
const f = fs.readFileSync('frontend/src/data/marvelRivalsAbilities.ts', 'utf8');
const matches = [...f.matchAll(/^\s*"([^"]+)"\s*:\s*\[/gm)];
// Find JEFF and its line number
matches.forEach(m => {
  if (m[1].includes('JEFF') || m[1].includes('Jeff')) {
    const lineNum = f.substring(0, m.index).split('\n').length;
    console.log(`Found "${m[1]}" at line ${lineNum}, index ${m.index}`);
  }
});
// Also find what comes after JEFF
for (let i = 0; i < matches.length; i++) {
  if (matches[i][1].includes('JEFF') || matches[i][1].includes('Jeff')) {
    console.log('Next hero after JEFF:', matches[i+1] ? matches[i+1][1] : 'END');
    const nextLineNum = matches[i+1] ? f.substring(0, matches[i+1].index).split('\n').length : -1;
    console.log('Next hero line:', nextLineNum);
  }
}
