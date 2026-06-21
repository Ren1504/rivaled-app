// Marvel Rivals – Hero Data
// Auto-generated from marvel_rivals_v5.xlsx

export type Role = "Vanguard" | "Duelist" | "Strategist" | "Versatile";
export type PrimaryAttack = "Hitscan" | "Projectile" | "Melee";

export interface Hero {
  name: string;
  role: Role;
  primaryAttack: PrimaryAttack;
  hasPassive: boolean;
  isTeamUpAnchor: boolean;
  mcuDebutYear: number | null;
  comicDebutYear: number;
  difficulty: 0 | 1 | 2 | 3 | 4 | 5;
  affiliations: string[];
}

export const heroes: Hero[] = [
  {
    "name": "Adam Warlock",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2023,
    "comicDebutYear": 1967,
    "difficulty": 3,
    "affiliations": [
      "Guardians of the Galaxy",
      "Infinity Watch",
      "Cosmic Avengers"
    ]
  },
  {
    "name": "Angela",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 2013,
    "difficulty": 4,
    "affiliations": [
      "Guardians of the Galaxy",
      "Asgardians",
      "Heven"
    ]
  },
  {
    "name": "Black Cat",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1979,
    "difficulty": 4,
    "affiliations": [
      "Heroes for Hire",
      "Defenders",
      "Spider-Man Ally"
    ]
  },
  {
    "name": "Black Panther",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2018,
    "comicDebutYear": 1966,
    "difficulty": 4,
    "affiliations": [
      "Avengers",
      "Illuminati",
      "Defenders",
      "Wakanda"
    ]
  },
  {
    "name": "Black Widow",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2010,
    "comicDebutYear": 1964,
    "difficulty": 4,
    "affiliations": [
      "Avengers",
      "SHIELD",
      "Thunderbolts",
      "Heroes for Hire"
    ]
  },
  {
    "name": "Blade",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1973,
    "difficulty": 3,
    "affiliations": [
      "Midnight Sons",
      "Avengers",
      "Defenders"
    ]
  },
  {
    "name": "Captain America",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1941,
    "difficulty": 3,
    "affiliations": [
      "Avengers",
      "Invaders",
      "SHIELD"
    ]
  },
  {
    "name": "Cloak & Dagger",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1982,
    "difficulty": 3,
    "affiliations": [
      "Runaways",
      "Marvel Knights",
      "Defenders"
    ]
  },
  {
    "name": "Cyclops",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1963,
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "X-Factor",
      "Champions"
    ]
  },
  {
    "name": "Daredevil",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2015,
    "comicDebutYear": 1964,
    "difficulty": 3,
    "affiliations": [
      "Defenders",
      "Marvel Knights",
      "Avengers"
    ]
  },
  {
    "name": "Deadpool",
    "role": "Versatile",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2024,
    "comicDebutYear": 1991,
    "difficulty": 0,
    "affiliations": [
      "X-Force",
      "Avengers",
      "Thunderbolts",
      "Heroes for Hire",
      "Weapon X"
    ]
  },
  {
    "name": "Devil Dinosaur",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1978,
    "difficulty": 3,
    "affiliations": [
      "Pet Avengers",
      "Champions"
    ]
  },
  {
    "name": "Doctor Strange",
    "role": "Vanguard",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2016,
    "comicDebutYear": 1963,
    "difficulty": 2,
    "affiliations": [
      "Defenders",
      "Midnight Sons",
      "Illuminati",
      "Avengers"
    ]
  },
  {
    "name": "Elsa Bloodstone",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2022,
    "comicDebutYear": 1976,
    "difficulty": 3,
    "affiliations": [
      "Midnight Sons",
      "Nextwave",
      "Defenders"
    ]
  },
  {
    "name": "Emma Frost",
    "role": "Vanguard",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1980,
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "Hellfire Club",
      "Cabal"
    ]
  },
  {
    "name": "Gambit",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1990,
    "difficulty": 4,
    "affiliations": [
      "X-Men",
      "X-Factor",
      "Thieves Guild"
    ]
  },
  {
    "name": "Groot",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2014,
    "comicDebutYear": 1960,
    "difficulty": 2,
    "affiliations": [
      "Guardians of the Galaxy",
      "SHIELD"
    ]
  },
  {
    "name": "Hawkeye",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1964,
    "difficulty": 4,
    "affiliations": [
      "Avengers",
      "West Coast Avengers",
      "Thunderbolts",
      "Defenders",
      "SHIELD"
    ]
  },
  {
    "name": "Hela",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2017,
    "comicDebutYear": 1964,
    "difficulty": 3,
    "affiliations": [
      "Asgardians"
    ]
  },
  {
    "name": "Hulk",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2008,
    "comicDebutYear": 1962,
    "difficulty": 4,
    "affiliations": [
      "Avengers",
      "Defenders",
      "Illuminati"
    ]
  },
  {
    "name": "Human Torch",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 3,
    "affiliations": [
      "Fantastic Four",
      "Avengers"
    ]
  },
  {
    "name": "Invisible Woman",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 4,
    "affiliations": [
      "Fantastic Four",
      "Avengers",
      "SHIELD"
    ]
  },
  {
    "name": "Iron Fist",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1974,
    "difficulty": 4,
    "affiliations": [
      "Heroes for Hire",
      "Defenders",
      "Avengers"
    ]
  },
  {
    "name": "Iron Man",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2008,
    "comicDebutYear": 1963,
    "difficulty": 2,
    "affiliations": [
      "Avengers",
      "Illuminati",
      "SHIELD",
      "Guardians of the Galaxy"
    ]
  },
  {
    "name": "Jeff the Land Shark",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 2016,
    "difficulty": 1,
    "affiliations": [
      "West Coast Avengers"
    ]
  },
  {
    "name": "Loki",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1962,
    "difficulty": 4,
    "affiliations": [
      "Asgardians",
      "Young Avengers",
      "Cabal"
    ]
  },
  {
    "name": "Luna Snow",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 2018,
    "difficulty": 2,
    "affiliations": [
      "Agents of Atlas",
      "Tiger Division"
    ]
  },
  {
    "name": "Magik",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1975,
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "New Mutants",
      "Midnight Sons"
    ]
  },
  {
    "name": "Magneto",
    "role": "Vanguard",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1963,
    "difficulty": 2,
    "affiliations": [
      "X-Men",
      "Brotherhood of Mutants",
      "Hellfire Club"
    ]
  },
  {
    "name": "Mantis",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2017,
    "comicDebutYear": 1973,
    "difficulty": 1,
    "affiliations": [
      "Guardians of the Galaxy",
      "Avengers"
    ]
  },
  {
    "name": "Mister Fantastic",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 3,
    "affiliations": [
      "Fantastic Four",
      "Illuminati",
      "Avengers",
      "Future Foundation"
    ]
  },
  {
    "name": "Moon Knight",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2022,
    "comicDebutYear": 1975,
    "difficulty": 3,
    "affiliations": [
      "Midnight Sons",
      "Avengers",
      "Defenders",
      "West Coast Avengers"
    ]
  },
  {
    "name": "Namor",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2022,
    "comicDebutYear": 1939,
    "difficulty": 2,
    "affiliations": [
      "Invaders",
      "Defenders",
      "Avengers",
      "Illuminati",
      "X-Men"
    ]
  },
  {
    "name": "Peni Parker",
    "role": "Vanguard",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1992,
    "difficulty": 4,
    "affiliations": [
      "Spider-Verse",
      "Web-Warriors"
    ]
  },
  {
    "name": "Phoenix",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1963,
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "Avengers"
    ]
  },
  {
    "name": "Psylocke",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1976,
    "difficulty": 5,
    "affiliations": [
      "X-Men",
      "X-Force"
    ]
  },
  {
    "name": "Rocket Raccoon",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2014,
    "comicDebutYear": 1976,
    "difficulty": 1,
    "affiliations": [
      "Guardians of the Galaxy",
      "Avengers"
    ]
  },
  {
    "name": "Rogue",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1981,
    "difficulty": 5,
    "affiliations": [
      "X-Men",
      "Avengers",
      "Brotherhood of Mutants"
    ]
  },
  {
    "name": "Scarlet Witch",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2015,
    "comicDebutYear": 1964,
    "difficulty": 1,
    "affiliations": [
      "Avengers",
      "West Coast Avengers",
      "Brotherhood of Mutants"
    ]
  },
  {
    "name": "Spider-Man",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2016,
    "comicDebutYear": 1962,
    "difficulty": 5,
    "affiliations": [
      "Avengers",
      "Fantastic Four",
      "Spider-Verse",
      "Web-Warriors"
    ]
  },
  {
    "name": "Squirrel Girl",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1992,
    "difficulty": 1,
    "affiliations": [
      "Great Lakes Avengers",
      "Avengers",
      "Champions"
    ]
  },
  {
    "name": "Star-Lord",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2014,
    "comicDebutYear": 1976,
    "difficulty": 2,
    "affiliations": [
      "Guardians of the Galaxy",
      "Ravagers"
    ]
  },
  {
    "name": "Storm",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1975,
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "Avengers",
      "Fantastic Four",
      "Wakanda"
    ]
  },
  {
    "name": "The Punisher",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1974,
    "difficulty": 1,
    "affiliations": [
      "Thunderbolts",
      "Defenders"
    ]
  },
  {
    "name": "The Thing",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 1,
    "affiliations": [
      "Fantastic Four",
      "Avengers",
      "Guardians of the Galaxy"
    ]
  },
  {
    "name": "Thor",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1962,
    "difficulty": 3,
    "affiliations": [
      "Avengers",
      "Asgardians"
    ]
  },
  {
    "name": "Ultron",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2015,
    "comicDebutYear": 1968,
    "difficulty": 2,
    "affiliations": [
      "Masters of Evil"
    ]
  },
  {
    "name": "Venom",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1988,
    "difficulty": 1,
    "affiliations": [
      "Thunderbolts",
      "Avengers",
      "Guardians of the Galaxy",
      "Spider-Verse"
    ]
  },
  {
    "name": "White Fox",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 2012,
    "difficulty": 3,
    "affiliations": [
      "Agents of Atlas",
      "Tiger Division"
    ]
  },
  {
    "name": "Winter Soldier",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1968,
    "difficulty": 3,
    "affiliations": [
      "Avengers",
      "Invaders",
      "Thunderbolts",
      "SHIELD"
    ]
  },
  {
    "name": "Wolverine",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2024,
    "comicDebutYear": 1974,
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "Avengers",
      "X-Force",
      "Fantastic Four"
    ]
  }
];
;

// Lookup map by name for O(1) access
export const heroByName: Record<string, Hero> = Object.fromEntries(
  heroes.map((h) => [h.name, h])
);

// Heroes grouped by role
export const heroesByRole: Record<Role, Hero[]> = {
  Vanguard: heroes.filter((h) => h.role === "Vanguard"),
  Duelist: heroes.filter((h) => h.role === "Duelist"),
  Strategist: heroes.filter((h) => h.role === "Strategist"),
  Versatile: heroes.filter((h) => h.role === "Versatile")
};

// Heroes grouped by difficulty
export const heroesByDifficulty: Record<number, Hero[]> = heroes.reduce(
  (acc, h) => {
    (acc[h.difficulty] ??= []).push(h);
    return acc;
  },
  {} as Record<number, Hero[]>
);
