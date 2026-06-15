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
    "difficulty": 3
  },
  {
    "name": "Angela",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 2013,
    "difficulty": 4
  },
  {
    "name": "Black Cat",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1979,
    "difficulty": 4
  },
  {
    "name": "Black Panther",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2018,
    "comicDebutYear": 1966,
    "difficulty": 4
  },
  {
    "name": "Black Widow",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2010,
    "comicDebutYear": 1964,
    "difficulty": 4
  },
  {
    "name": "Blade",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1973,
    "difficulty": 3
  },
  {
    "name": "Captain America",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1941,
    "difficulty": 3
  },
  {
    "name": "Cloak & Dagger",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1982,
    "difficulty": 3
  },
  {
    "name": "Daredevil",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2015,
    "comicDebutYear": 1964,
    "difficulty": 3
  },
  {
    "name": "Deadpool",
    "role": "Versatile",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2024,
    "comicDebutYear": 1991,
    "difficulty": 0
  },
  {
    "name": "Doctor Strange",
    "role": "Vanguard",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2016,
    "comicDebutYear": 1963,
    "difficulty": 2
  },
  {
    "name": "Elsa Bloodstone",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2022,
    "comicDebutYear": 1976,
    "difficulty": 3
  },
  {
    "name": "Emma Frost",
    "role": "Vanguard",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1980,
    "difficulty": 3
  },
  {
    "name": "Gambit",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1990,
    "difficulty": 4
  },
  {
    "name": "Groot",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2014,
    "comicDebutYear": 1960,
    "difficulty": 2
  },
  {
    "name": "Hawkeye",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1964,
    "difficulty": 4
  },
  {
    "name": "Hela",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2017,
    "comicDebutYear": 1964,
    "difficulty": 3
  },
  {
    "name": "Hulk",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2008,
    "comicDebutYear": 1962,
    "difficulty": 4
  },
  {
    "name": "Human Torch",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 3
  },
  {
    "name": "Invisible Woman",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 4
  },
  {
    "name": "Iron Fist",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1974,
    "difficulty": 4
  },
  {
    "name": "Iron Man",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2008,
    "comicDebutYear": 1963,
    "difficulty": 2
  },
  {
    "name": "Jeff the Land Shark",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 2016,
    "difficulty": 1
  },
  {
    "name": "Loki",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1962,
    "difficulty": 4
  },
  {
    "name": "Luna Snow",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 2018,
    "difficulty": 2
  },
  {
    "name": "Magik",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1975,
    "difficulty": 3
  },
  {
    "name": "Magneto",
    "role": "Vanguard",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1963,
    "difficulty": 2
  },
  {
    "name": "Mantis",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2017,
    "comicDebutYear": 1973,
    "difficulty": 1
  },
  {
    "name": "Mister Fantastic",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 3
  },
  {
    "name": "Moon Knight",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2022,
    "comicDebutYear": 1975,
    "difficulty": 3
  },
  {
    "name": "Namor",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2022,
    "comicDebutYear": 1939,
    "difficulty": 2
  },
  {
    "name": "Peni Parker",
    "role": "Vanguard",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1992,
    "difficulty": 4
  },
  {
    "name": "Phoenix",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1963,
    "difficulty": 3
  },
  {
    "name": "Psylocke",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1976,
    "difficulty": 5
  },
  {
    "name": "Rocket Raccoon",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2014,
    "comicDebutYear": 1976,
    "difficulty": 1
  },
  {
    "name": "Rogue",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1981,
    "difficulty": 5
  },
  {
    "name": "Scarlet Witch",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2015,
    "comicDebutYear": 1964,
    "difficulty": 1
  },
  {
    "name": "Spider-Man",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2016,
    "comicDebutYear": 1962,
    "difficulty": 5
  },
  {
    "name": "Squirrel Girl",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1992,
    "difficulty": 1
  },
  {
    "name": "Star-Lord",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2014,
    "comicDebutYear": 1976,
    "difficulty": 2
  },
  {
    "name": "Storm",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1975,
    "difficulty": 3
  },
  {
    "name": "The Punisher",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": null,
    "comicDebutYear": 1974,
    "difficulty": 1
  },
  {
    "name": "The Thing",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2025,
    "comicDebutYear": 1961,
    "difficulty": 1
  },
  {
    "name": "Thor",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1962,
    "difficulty": 3
  },
  {
    "name": "Ultron",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2015,
    "comicDebutYear": 1968,
    "difficulty": 2
  },
  {
    "name": "Venom",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 1988,
    "difficulty": 1
  },
  {
    "name": "White Fox",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "isTeamUpAnchor": true,
    "mcuDebutYear": null,
    "comicDebutYear": 2012,
    "difficulty": 3
  },
  {
    "name": "Winter Soldier",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "isTeamUpAnchor": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": 1968,
    "difficulty": 3
  },
  {
    "name": "Wolverine",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "isTeamUpAnchor": true,
    "mcuDebutYear": 2024,
    "comicDebutYear": 1974,
    "difficulty": 3
  }
];

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
