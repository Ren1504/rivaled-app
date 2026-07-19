// Marvel Rivals – Hero Data
// Auto-generated from marvel_rivals_v5.xlsx

export type Role = "Vanguard" | "Duelist" | "Strategist" | "Versatile";
export type PrimaryAttack = "Hitscan" | "Projectile" | "Melee";

export interface Hero {
  name: string;
  role: Role;
  primaryAttack: PrimaryAttack;
  hasPassive: boolean;
  mcuDebutYear: number | null;
  comicDebutYear: string;
  difficulty: 0 | 1 | 2 | 3 | 4 | 5;
  affiliations: string[];
}

export const heroes: Hero[] = [
  {
    "name": "Adam Warlock",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "mcuDebutYear": 2023,
    "comicDebutYear": "1967 (Fantastic Four #67)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "2013 (Age of Ultron #10)",
    "difficulty": 4,
    "affiliations": [
      "Guardians of the Galaxy",
      "League of Realms"
    ]
  },
  {
    "name": "Black Cat",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "mcuDebutYear": null,
    "comicDebutYear": "1979 (The Amazing Spider-Man #194)",
    "difficulty": 4,
    "affiliations": [
      "Heroes for Hire",
      "Defenders"
    ]
  },
  {
    "name": "Black Panther",
    "role": "Duelist",
    "primaryAttack": "Melee",
    "hasPassive": true,
    "mcuDebutYear": 2018,
    "comicDebutYear": "1966 (Fantastic Four #52)",
    "difficulty": 4,
    "affiliations": [
      "Avengers",
      "Illuminati",
      "Defenders"
    ]
  },
  {
    "name": "Black Widow",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "mcuDebutYear": 2010,
    "comicDebutYear": "1964 (Tales of Suspense #52)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1973 (The Tomb of Dracula #10)",
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
    "mcuDebutYear": 2011,
    "comicDebutYear": "1941 (Captain America Comics #1)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1982 (Peter Parker, the Spectacular Spider-Man #64)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1963 (The X-Men #1)",
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
    "mcuDebutYear": 2015,
    "comicDebutYear": "1964 (Daredevil #1)",
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
    "mcuDebutYear": 2024,
    "comicDebutYear": "1991 (The New Mutants #98)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1978 (Devil Dinosaur #1)",
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
    "mcuDebutYear": 2016,
    "comicDebutYear": "1963 (Strange Tales #110)",
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
    "mcuDebutYear": 2022,
    "comicDebutYear": "1976 (Marvel Presents #3)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1980 (The Uncanny X-Men #129)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1990 (The Uncanny X-Men #266)",
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
    "mcuDebutYear": 2014,
    "comicDebutYear": "1960 (Tales to Astonish #13)",
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
    "mcuDebutYear": 2011,
    "comicDebutYear": "1964 (Tales of Suspense #57)",
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
    "mcuDebutYear": 2017,
    "comicDebutYear": "1964 (Journey into Mystery #102)",
    "difficulty": 3,
    "affiliations": []
  },
  {
    "name": "Hulk",
    "role": "Vanguard",
    "primaryAttack": "Melee",
    "hasPassive": false,
    "mcuDebutYear": 2008,
    "comicDebutYear": "1962 (The Incredible Hulk #1)",
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
    "mcuDebutYear": 2025,
    "comicDebutYear": "1961 (The Fantastic Four #1)",
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
    "mcuDebutYear": 2025,
    "comicDebutYear": "1961 (The Fantastic Four #1)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1974 (Marvel Premiere #15)",
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
    "mcuDebutYear": 2008,
    "comicDebutYear": "1963 (Tales of Suspense #39)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "2016 (West Coast Avengers #6)",
    "difficulty": 1,
    "affiliations": [
      "West Coast Avengers"
    ]
  },
  {
    "name": "Jubilee",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": true,
    "mcuDebutYear": null,
    "comicDebutYear": "1989 (The Uncanny X-Men #244)",
    "difficulty": 4,
    "affiliations": [
      "X-Men",
      "New Mutants"
    ]
  },
  {
    "name": "Loki",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "mcuDebutYear": 2011,
    "comicDebutYear": "1962 (Journey into Mystery #85)",
    "difficulty": 4,
    "affiliations": [
      "Young Avengers",
      "Cabal"
    ]
  },
  {
    "name": "Luna Snow",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "mcuDebutYear": null,
    "comicDebutYear": "2018 (Marvel Future Fight #1)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1975 (Giant-Size X-Men #1)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1963 (The X-Men #1)",
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
    "mcuDebutYear": 2017,
    "comicDebutYear": "1973 (The Avengers #112)",
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
    "mcuDebutYear": 2025,
    "comicDebutYear": "1961 (The Fantastic Four #1)",
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
    "mcuDebutYear": 2022,
    "comicDebutYear": "1975 (Werewolf by Night #32)",
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
    "mcuDebutYear": 2022,
    "comicDebutYear": "1939 (Motion Picture Funnies Weekly #1)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1992 (Edge of Spider-Verse #5)",
    "difficulty": 4,
    "affiliations": [
      "Web-Warriors"
    ]
  },
  {
    "name": "Phoenix",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "mcuDebutYear": null,
    "comicDebutYear": "1963 (The X-Men #1)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1976 (Captain Britain #8)",
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
    "mcuDebutYear": 2014,
    "comicDebutYear": "1976 (Marvel Preview #7)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1981 (Avengers Annual #10)",
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
    "mcuDebutYear": 2015,
    "comicDebutYear": "1964 (The X-Men #4)",
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
    "mcuDebutYear": 2016,
    "comicDebutYear": "1962 (Amazing Fantasy #15)",
    "difficulty": 5,
    "affiliations": [
      "Avengers",
      "Fantastic Four",
      "Web-Warriors"
    ]
  },
  {
    "name": "Squirrel Girl",
    "role": "Duelist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "mcuDebutYear": null,
    "comicDebutYear": "1992 (Marvel Super-Heroes vol. 2 #8)",
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
    "mcuDebutYear": 2014,
    "comicDebutYear": "1976 (Marvel Preview #4)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1975 (Giant-Size X-Men #1)",
    "difficulty": 3,
    "affiliations": [
      "X-Men",
      "Avengers",
      "Fantastic Four"
    ]
  },
  {
    "name": "The Punisher",
    "role": "Duelist",
    "primaryAttack": "Hitscan",
    "hasPassive": true,
    "mcuDebutYear": null,
    "comicDebutYear": "1974 (The Amazing Spider-Man #129)",
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
    "mcuDebutYear": 2025,
    "comicDebutYear": "1961 (The Fantastic Four #1)",
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
    "mcuDebutYear": 2011,
    "comicDebutYear": "1962 (Journey into Mystery #83)",
    "difficulty": 3,
    "affiliations": [
      "Avengers",
      "League of Realms"
    ]
  },
  {
    "name": "Ultron",
    "role": "Strategist",
    "primaryAttack": "Hitscan",
    "hasPassive": false,
    "mcuDebutYear": 2015,
    "comicDebutYear": "1968 (The Avengers #54)",
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
    "mcuDebutYear": null,
    "comicDebutYear": "1988 (The Amazing Spider-Man #299)",
    "difficulty": 1,
    "affiliations": [
      "Thunderbolts",
      "Avengers",
      "Guardians of the Galaxy"
    ]
  },
  {
    "name": "White Fox",
    "role": "Strategist",
    "primaryAttack": "Projectile",
    "hasPassive": false,
    "mcuDebutYear": null,
    "comicDebutYear": "2012 (Avengers: Electric Rain #1)",
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
    "mcuDebutYear": 2011,
    "comicDebutYear": "1968 (Captain America #100)",
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
    "mcuDebutYear": 2024,
    "comicDebutYear": "1974 (The Incredible Hulk #180)",
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
