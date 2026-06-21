const fs = require('fs');
const path = require('path');

const affiliations = {
  "Adam Warlock": ["Guardians of the Galaxy", "Infinity Watch", "Cosmic Avengers"],
  "Angela": ["Guardians of the Galaxy", "Asgardians", "Heven"],
  "Black Cat": ["Heroes for Hire", "Defenders", "Spider-Man Ally"],
  "Black Panther": ["Avengers", "Illuminati", "Defenders", "Wakanda"],
  "Black Widow": ["Avengers", "SHIELD", "Thunderbolts", "Heroes for Hire"],
  "Blade": ["Midnight Sons", "Avengers", "Defenders"],
  "Captain America": ["Avengers", "Invaders", "SHIELD"],
  "Cloak & Dagger": ["Runaways", "Marvel Knights", "Defenders"],
  "Cyclops": ["X-Men", "X-Factor", "Champions"],
  "Daredevil": ["Defenders", "Marvel Knights", "Avengers"],
  "Deadpool": ["X-Force", "Avengers", "Thunderbolts", "Heroes for Hire", "Weapon X"],
  "Devil Dinosaur": ["Pet Avengers", "Champions"],
  "Doctor Strange": ["Defenders", "Midnight Sons", "Illuminati", "Avengers"],
  "Elsa Bloodstone": ["Midnight Sons", "Nextwave", "Defenders"],
  "Emma Frost": ["X-Men", "Hellfire Club", "Cabal"],
  "Gambit": ["X-Men", "X-Factor", "Thieves Guild"],
  "Groot": ["Guardians of the Galaxy", "SHIELD"],
  "Hawkeye": ["Avengers", "West Coast Avengers", "Thunderbolts", "Defenders", "SHIELD"],
  "Hela": ["Asgardians"],
  "Hulk": ["Avengers", "Defenders", "Illuminati"],
  "Human Torch": ["Fantastic Four", "Avengers"],
  "Invisible Woman": ["Fantastic Four", "Avengers", "SHIELD"],
  "Iron Fist": ["Heroes for Hire", "Defenders", "Avengers"],
  "Iron Man": ["Avengers", "Illuminati", "SHIELD", "Guardians of the Galaxy"],
  "Jeff the Land Shark": ["West Coast Avengers"],
  "Loki": ["Asgardians", "Young Avengers", "Cabal"],
  "Luna Snow": ["Agents of Atlas", "Tiger Division"],
  "Magik": ["X-Men", "New Mutants", "Midnight Sons"],
  "Magneto": ["X-Men", "Brotherhood of Mutants", "Hellfire Club"],
  "Mantis": ["Guardians of the Galaxy", "Avengers"],
  "Mister Fantastic": ["Fantastic Four", "Illuminati", "Avengers", "Future Foundation"],
  "Moon Knight": ["Midnight Sons", "Avengers", "Defenders", "West Coast Avengers"],
  "Namor": ["Invaders", "Defenders", "Avengers", "Illuminati", "X-Men"],
  "Peni Parker": ["Spider-Verse", "Web-Warriors"],
  "Phoenix": ["X-Men", "Avengers"],
  "Psylocke": ["X-Men", "X-Force"],
  "Rocket Raccoon": ["Guardians of the Galaxy", "Avengers"],
  "Rogue": ["X-Men", "Avengers", "Brotherhood of Mutants"],
  "Scarlet Witch": ["Avengers", "West Coast Avengers", "Brotherhood of Mutants"],
  "Spider-Man": ["Avengers", "Fantastic Four", "Spider-Verse", "Web-Warriors"],
  "Squirrel Girl": ["Great Lakes Avengers", "Avengers", "Champions"],
  "Star-Lord": ["Guardians of the Galaxy", "Ravagers"],
  "Storm": ["X-Men", "Avengers", "Fantastic Four", "Wakanda"],
  "The Punisher": ["Thunderbolts", "Defenders"],
  "The Thing": ["Fantastic Four", "Avengers", "Guardians of the Galaxy"],
  "Thor": ["Avengers", "Asgardians"],
  "Ultron": ["Masters of Evil"],
  "Venom": ["Thunderbolts", "Avengers", "Guardians of the Galaxy", "Spider-Verse"],
  "White Fox": ["Agents of Atlas", "Tiger Division"],
  "Winter Soldier": ["Avengers", "Invaders", "Thunderbolts", "SHIELD"],
  "Wolverine": ["X-Men", "Avengers", "X-Force", "Fantastic Four"]
};

const filePath = path.join(__dirname, '..', 'frontend', 'src', 'data', 'marvelRivalsData.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

// 1. Update the interface Hero definition
const originalInterface = `export interface Hero {
  name: string;
  role: Role;
  primaryAttack: PrimaryAttack;
  hasPassive: boolean;
  isTeamUpAnchor: boolean;
  mcuDebutYear: number | null;
  comicDebutYear: number;
  difficulty: 0 | 1 | 2 | 3 | 4 | 5;
}`;

const updatedInterface = `export interface Hero {
  name: string;
  role: Role;
  primaryAttack: PrimaryAttack;
  hasPassive: boolean;
  isTeamUpAnchor: boolean;
  mcuDebutYear: number | null;
  comicDebutYear: number;
  difficulty: 0 | 1 | 2 | 3 | 4 | 5;
  affiliations: string[];
}`;

if (!fileContent.includes(originalInterface)) {
  console.error("Original interface structure not found in file!");
  process.exit(1);
}
fileContent = fileContent.replace(originalInterface, updatedInterface);

// 2. Parse heroes list
const startMarker = 'export const heroes: Hero[] = ';
const startIndex = fileContent.indexOf(startMarker);
if (startIndex === -1) {
  console.error("Could not find start marker");
  process.exit(1);
}

const endMarker = '];';
const endIndex = fileContent.indexOf(endMarker, startIndex);
if (endIndex === -1) {
  console.error("Could not find end marker");
  process.exit(1);
}

const arrayText = fileContent.substring(startIndex + startMarker.length, endIndex + 1);
const heroesArray = eval(arrayText); // Since it's plain JS/JSON representation, eval is safe here

const updatedHeroes = heroesArray.map(hero => {
  const heroName = hero.name;
  const heroAffs = affiliations[heroName] || [];
  return {
    ...hero,
    affiliations: heroAffs
  };
});

const updatedArrayText = JSON.stringify(updatedHeroes, null, 2);

const beforeArray = fileContent.substring(0, startIndex + startMarker.length);
const afterArray = fileContent.substring(endIndex + 1);

const newFileContent = beforeArray + updatedArrayText + ';\n' + afterArray;

fs.writeFileSync(filePath, newFileContent, 'utf8');
console.log("Successfully injected affiliations into marvelRivalsData.ts");
