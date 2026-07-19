const fs = require('fs');
const f = fs.readFileSync('C:\\Users\\vigne\\.gemini\\antigravity-ide\\brain\\a77c323b-5b08-4023-8187-e577d0697a25\\.system_generated\\steps\\3070\\content.md', 'utf8');

// Search for any URL patterns that look like API endpoints
const urlPatterns = f.match(/https?:\/\/[^\s"'`]+/g);
if (urlPatterns) {
  const unique = [...new Set(urlPatterns)];
  unique.forEach(u => console.log(u));
}

console.log('\n--- Looking for heroNewsList or data loading ---');
// Search for heroNewsList or data loading patterns
const dataPatterns = f.match(/heroNewsList|heroListData|getJSON|ajax|fetch|\.json/gi);
if (dataPatterns) {
  console.log('Found patterns:', [...new Set(dataPatterns)]);
}

// Look for potential fetch/XHR endpoints
console.log('\n--- Looking for data endpoint patterns ---');
const fetchPatterns = f.match(/['"](\/[^'"]*(?:hero|data|api)[^'"]*)['"]/gi);
if (fetchPatterns) {
  [...new Set(fetchPatterns)].forEach(p => console.log(p));
}
