const fs = require('fs');
const path = require('path');

const targetPath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsData.ts');

const comicMapping = {
  "Adam Warlock": "Fantastic Four #67",
  "Angela": "Age of Ultron #10",
  "Black Cat": "The Amazing Spider-Man #194",
  "Black Panther": "Fantastic Four #52",
  "Black Widow": "Tales of Suspense #52",
  "Blade": "The Tomb of Dracula #10",
  "Captain America": "Captain America Comics #1",
  "Cloak & Dagger": "Peter Parker, the Spectacular Spider-Man #64",
  "Cyclops": "The X-Men #1",
  "Daredevil": "Daredevil #1",
  "Deadpool": "The New Mutants #98",
  "Devil Dinosaur": "Devil Dinosaur #1",
  "Doctor Strange": "Strange Tales #110",
  "Elsa Bloodstone": "Marvel Presents #3",
  "Emma Frost": "The Uncanny X-Men #129",
  "Gambit": "The Uncanny X-Men #266",
  "Groot": "Tales to Astonish #13",
  "Hawkeye": "Tales of Suspense #57",
  "Hela": "Journey into Mystery #102",
  "Hulk": "The Incredible Hulk #1",
  "Human Torch": "The Fantastic Four #1",
  "Invisible Woman": "The Fantastic Four #1",
  "Iron Fist": "Marvel Premiere #15",
  "Iron Man": "Tales of Suspense #39",
  "Jeff the Land Shark": "West Coast Avengers #6",
  "Loki": "Journey into Mystery #85",
  "Luna Snow": "Marvel Future Fight #1",
  "Magik": "Giant-Size X-Men #1",
  "Magneto": "The X-Men #1",
  "Mantis": "The Avengers #112",
  "Mister Fantastic": "The Fantastic Four #1",
  "Moon Knight": "Werewolf by Night #32",
  "Namor": "Motion Picture Funnies Weekly #1",
  "Peni Parker": "Edge of Spider-Verse #5",
  "Phoenix": "The X-Men #1",
  "Psylocke": "Captain Britain #8",
  "Rocket Raccoon": "Marvel Preview #7",
  "Rogue": "Avengers Annual #10",
  "Scarlet Witch": "The X-Men #4",
  "Spider-Man": "Amazing Fantasy #15",
  "Squirrel Girl": "Marvel Super-Heroes vol. 2 #8",
  "Star-Lord": "Marvel Preview #4",
  "Storm": "Giant-Size X-Men #1",
  "The Punisher": "The Amazing Spider-Man #129",
  "The Thing": "The Fantastic Four #1",
  "Thor": "Journey into Mystery #83",
  "Ultron": "The Avengers #54",
  "Venom": "The Amazing Spider-Man #299",
  "White Fox": "Avengers: Electric Rain #1",
  "Winter Soldier": "Captain America #100",
  "Wolverine": "The Incredible Hulk #180"
};

if (!fs.existsSync(targetPath)) {
  console.error("File not found:", targetPath);
  process.exit(1);
}

let content = fs.readFileSync(targetPath, 'utf8');

// 1. Change comicDebutYear type to string in Hero interface
content = content.replace('comicDebutYear: number;', 'comicDebutYear: string;');

// 2. Loop and replace the comicDebutYear properties
// We can parse the javascript array structure to verify everything and do string replacements.
// Let's do it using regex to parse and replace properties for each hero.
// We look for name block:


// Let's implement an evaluator that matches each hero block in text and replaces the debut year.
const heroesList = Object.keys(comicMapping);
let replacedCount = 0;

for (const heroName of heroesList) {
  const comicName = comicMapping[heroName];
  // Match a block that has "name": "heroName" followed by other fields and "comicDebutYear": YYYY
  // We can construct a precise regex for this hero
  const regex = new RegExp(`("name":\\s*"${heroName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}"[\\s\\S]*?"comicDebutYear":\\s*)(\\d+)`, 'm');
  
  const match = content.match(regex);
  if (match) {
    const year = match[2];
    const replacement = `${match[1]}"${year} (${comicName})"`;
    content = content.replace(regex, replacement);
    replacedCount++;
  } else {
    console.warn(`WARNING: Hero "${heroName}" not matched by regex!`);
  }
}

fs.writeFileSync(targetPath, content, 'utf8');
console.log(`Successfully updated ${replacedCount} heroes with comic debut names.`);
