// Marvel Rivals – Hero Extra Data
// Curated voice lines, skills, skins, and detailed classifications for all 49 heroes

export interface Ability {
  name: string;
  key?: string;
  description: string;
}

export interface HeroExtra {
  quotes: string[];
  abilities: Ability[];
  skins: string[];
  gender: "Male" | "Female" | "Non-binary" | "Multiple/Other";
  species: string;
}

export const heroExtraData: Record<string, HeroExtra> = {
  "Adam Warlock": {
    quotes: [
      "The universe requires a guiding hand... mine.",
      "Death is but a transition in the grand cosmic design.",
      "The Soul Gem illuminates the path to victory."
    ],
    abilities: [
      { name: "Soul Cycle", key: "Passive", description: "Enables resurrection upon death through cosmic cocoon regeneration." },
      { name: "Cosmic Blast", key: "LMB", description: "Fires condensed cosmic energy beams at the enemy." },
      { name: "Regenerative Bond", key: "E", description: "Links allies with solar energy to heal them over time." }
    ],
    skins: ["Gilded Sun", "Magus", "Cosmic Alchemist"],
    gender: "Male",
    species: "Cosmic Being"
  },
  "Angela": {
    quotes: [
      "I fight not for glory, but for the debt that is owed.",
      "Asgard's blades shall carve our victory.",
      "A bounty is a promise, and I always collect."
    ],
    abilities: [
      { name: "Heavensward Charge", key: "LShift", description: "Leaps forward with blades drawn, slashing all targets in path." },
      { name: "Blades of Heven", key: "LMB", description: "Performs quick dual blade melee attacks." },
      { name: "Angelic Protection", key: "E", description: "Creates a holy barrier blocking projectile damage." }
    ],
    skins: ["Gothic Romance", "Angel of Heven", "Asgardian Armor"],
    gender: "Female",
    species: "Angel/Asgardian"
  },
  "Black Cat": {
    quotes: [
      "Bad luck is about to cross your path.",
      "A little theft makes the night much more interesting.",
      "You can't catch what you can't keep up with."
    ],
    abilities: [
      { name: "Catwalk Grapple", key: "LShift", description: "Fires a grappling hook to swing quickly across structures." },
      { name: "Bad Luck Curse", key: "E", description: "Debuffs an enemy, increasing their damage taken." },
      { name: "Swipe & Steal", key: "LMB", description: "Melee claw attacks that steal shields from opponents." }
    ],
    skins: ["Jewel Thief", "Claws & Leather", "Golden Kitty"],
    gender: "Female",
    species: "Human"
  },
  "Black Panther": {
    quotes: [
      "Wakanda Forever!",
      "The Panther God guides my claws.",
      "A king must defend his people, whatever the cost."
    ],
    abilities: [
      { name: "Vibranium Claws", key: "LMB", description: "Melee claw strikes that build kinetic energy." },
      { name: "Spear Kick", key: "LShift", description: "Throws a spear and leaps to its location, damaging targets." },
      { name: "Kinetic Burst", key: "Q", description: "Releases accumulated kinetic energy in a radial shockwave." }
    ],
    skins: ["King of Wakanda", "Vibranium Shroud", "Ancestral Armor"],
    gender: "Male",
    species: "Human"
  },
  "Black Widow": {
    quotes: [
      "Nothing lasts forever. Red in the ledger must be cleared.",
      "I've got you in my sights, and you don't even know it.",
      "Spycraft is about waiting for the perfect mistake."
    ],
    abilities: [
      { name: "Widow's Bite", key: "E", description: "Fires electrical darts that stun and damage enemies." },
      { name: "Sniper Configuration", key: "RMB", description: "Aims down sights for high-damage long-range hitscan shots." },
      { name: "Grapple Escape", key: "LShift", description: "Shoots a zip-line to quickly pull herself to ledges." }
    ],
    skins: ["Classic Stealth", "White Widow", "Tactical Ops"],
    gender: "Female",
    species: "Human"
  },
  "Blade": {
    quotes: [
      "Some motherf***ers are always trying to ice-skate uphill.",
      "Daywalker's coming for you.",
      "You're just another bloodsucker to put down."
    ],
    abilities: [
      { name: "Katana Slash", key: "LMB", description: "Quick sword swipes that heal Blade when hitting bleeding targets." },
      { name: "Glaive Throw", key: "RMB", description: "Throws a ricocheting glaive that applies bleeding status." },
      { name: "Daywalker Rage", key: "Q", description: "Enters a frenzied state, increasing movement speed and life steal." }
    ],
    skins: ["Daywalker Trenchcoat", "Classic Comic", "Vampire Hunter"],
    gender: "Male",
    species: "Half-Vampire"
  },
  "Captain America": {
    quotes: [
      "I can do this all day.",
      "Avengers, assemble!",
      "Honor and freedom are worth fighting for."
    ],
    abilities: [
      { name: "Shield Throw", key: "RMB", description: "Throws his Vibranium shield which bounces between targets." },
      { name: "Shield Block", key: "E", description: "Raises shield to block all incoming damage from the front." },
      { name: "Freedom Charge", key: "LShift", description: "Charges forward, knocking back and stunning enemies." }
    ],
    skins: ["WWII Veteran", "Stealth Strike", "Director Rogers"],
    gender: "Male",
    species: "Super Soldier"
  },
  "Cloak & Dagger": {
    quotes: [
      "Light and darkness, bound together.",
      "Where there is shadow, there must be light.",
      "We fight as one, always."
    ],
    abilities: [
      { name: "Darkforce Dimension", key: "LShift", description: "Teleports into shadows, turning temporarily invisible." },
      { name: "Light Daggers", key: "LMB", description: "Fires rapid tracking daggers of pure light energy." },
      { name: "Luminous Mend", key: "E", description: "Creates a circular ward of light that heals allies." }
    ],
    skins: ["Dual Contrast", "Street Lights", "Classic Spandex"],
    gender: "Multiple/Other",
    species: "Mutate"
  },
  "Daredevil": {
    quotes: [
      "Justice is blind, but I see perfectly.",
      "Hell's Kitchen doesn't yield to bullies.",
      "The heartbeat always tells the truth."
    ],
    abilities: [
      { name: "Radar Sense", key: "Passive", description: "Highlights enemy footsteps through walls using echolocation." },
      { name: "Billy Club Bounce", key: "RMB", description: "Throws clubs that bounce off surfaces and strike targets." },
      { name: "Kitchen Acrobatics", key: "LShift", description: "Performs flips and wall jumps to avoid incoming fire." }
    ],
    skins: ["Man Without Fear", "Shadowland", "Yellow Suit"],
    gender: "Male",
    species: "Human"
  },
  "Deadpool": {
    quotes: [
      "Maximum effort!",
      "Did somebody call for a Merc with a Mouth?",
      "Fourth wall broken? Check!"
    ],
    abilities: [
      { name: "Dual Pistols", key: "LMB", description: "Fires twin handguns rapidly with hitscan precision." },
      { name: "Chimichanga Time", key: "E", description: "Eats a snack to rapidly regenerate health while dancing." },
      { name: "Katana Whirlwind", key: "Q", description: "Spins in a circle slicing all adjacent enemies." }
    ],
    skins: ["X-Force Grey", "Sheriff Deadpool", "Gilded Mercenary"],
    gender: "Male",
    species: "Mutate"
  },
  "Doctor Strange": {
    quotes: [
      "By the Hoary Hosts of Hoggoth!",
      "The Sorcerer Supreme is on the case.",
      "Reality is mine to shape."
    ],
    abilities: [
      { name: "Daggers of Denak", key: "LMB", description: "Fires rapid magical projectiles that damage enemies." },
      { name: "Portal Gateway", key: "E", description: "Opens two linked portals allowing allies to traverse spaces." },
      { name: "Shield of Seraphim", key: "RMB", description: "Channels a massive magical shield protecting the squad." }
    ],
    skins: ["Defender Strange", "Astral Projection", "Classic Sorcerer"],
    gender: "Male",
    species: "Human"
  },
  "Elsa Bloodstone": {
    quotes: [
      "Monster hunting is a family business.",
      "A bloodstone bullet solves most problems.",
      "Keep back, unless you want lead for breakfast."
    ],
    abilities: [
      { name: "Shotgun Blast", key: "LMB", description: "Fires a wide spread shotgun blast dealing massive close range damage." },
      { name: "Bloodstone Shard", key: "E", description: "Fires a penetrating energetic crystal beam." },
      { name: "Vault & Kick", key: "LShift", description: "Vaults over an enemy, kicking them back and reloading." }
    ],
    skins: ["Monster Hunter", "Casual Bloodstone", "Crimson Jacket"],
    gender: "Female",
    species: "Human"
  },
  "Emma Frost": {
    quotes: [
      "Mind your manners, or I will mind them for you.",
      "A diamond is indestructible, and so am I.",
      "Power is nothing without class."
    ],
    abilities: [
      { name: "Diamond Form", key: "LShift", description: "Transforms skin into solid diamond, granting armor and melee boosts." },
      { name: "Psionic Spike", key: "LMB", description: "Fires telepathic darts that bypass physical shields." },
      { name: "Mental Domination", key: "E", description: "Confuses a target, causing them to wander aimlessly." }
    ],
    skins: ["White Queen", "Diamond Shimmer", "Hellfire Club"],
    gender: "Female",
    species: "Mutant"
  },
  "Gambit": {
    quotes: [
      "The name's Gambit. Remember it, mon ami.",
      "Let's play a high-stakes game.",
      "Card tricks? Nah, card explosions."
    ],
    abilities: [
      { name: "Kinetic Card Throw", key: "LMB", description: "Throws kinetic-charged playing cards that explode on impact." },
      { name: "Bo Staff Sweep", key: "E", description: "Spins staff to deflect projectiles and strike nearby foes." },
      { name: "Royal Flush", key: "Q", description: "Launches a massive volley of exploding cards in a cone." }
    ],
    skins: ["Thieves Guild", "Cajun Classic", "Trenchcoat Rogue"],
    gender: "Male",
    species: "Mutant"
  },
  "Groot": {
    quotes: [
      "I am Groot.",
      "I... am... Groot!",
      "We are Groot."
    ],
    abilities: [
      { name: "Wooden Wall", key: "E", description: "Grows a protective wooden barricade blocking enemy movement." },
      { name: "Branch Strike", key: "LMB", description: "Extends tree limbs for high-damage sweep attacks." },
      { name: "Spore Bomb", key: "RMB", description: "Launches explosive seeds that slow and damage enemies." }
    ],
    skins: ["Autumn Leaves", "King Groot", "Sapling Outfit"],
    gender: "Male",
    species: "Flora Colossus"
  },
  "Hawkeye": {
    quotes: [
      "I don't miss.",
      "Just a guy with a bow and arrow, saving the day.",
      "Bullseye, every single time."
    ],
    abilities: [
      { name: "Trick Arrows", key: "RMB", description: "Switches between explosive, sonic, and smoke arrow types." },
      { name: "Grapple Hook Bow", key: "LShift", description: "Fires grapple arrow to escape quickly to high ground." },
      { name: "Quiver Volley", key: "Q", description: "Launches a rain of arrows that cover a target zone." }
    ],
    skins: ["Ronin Suit", "Purple Archer", "Tactical Gear"],
    gender: "Male",
    species: "Human"
  },
  "Hela": {
    quotes: [
      "Kneel before your Queen.",
      "I am the Goddess of Death.",
      "Asgard shall fall, and I shall rule."
    ],
    abilities: [
      { name: "Nightsword Projectile", key: "LMB", description: "Fires magical obsidian swords at opponents." },
      { name: "Soul Vortex", key: "E", description: "Creates a gravity well that pulls enemies in and drains health." },
      { name: "Blackthorn Burst", key: "Q", description: "Summons giant death spikes from the ground under enemies." }
    ],
    skins: ["Goddess of Death", "Hel-Queen", "Classic Crownless"],
    gender: "Female",
    species: "Asgardian Deity"
  },
  "Hulk": {
    quotes: [
      "HULK SMASH!",
      "Puny god!",
      " Hulk is strongest there is!"
    ],
    abilities: [
      { name: "Gamma Leap", key: "LShift", description: "Leaps high into the air and crashes down, smashing enemies." },
      { name: "Thunderclap", key: "E", description: "Claps hands to create a sonic shockwave that deflects shots." },
      { name: "Banner Switch", key: "Q", description: "Transforms back to Bruce Banner to utilize tech weapons." }
    ],
    skins: ["Gladiator Hulk", "Maestro King", "Joe Fixit Suit"],
    gender: "Male",
    species: "Mutate"
  },
  "Human Torch": {
    quotes: [
      "Flame on!",
      "Too hot to handle!",
      "Watch the hair, it's actual fire."
    ],
    abilities: [
      { name: "Fireballs", key: "LMB", description: "Shoots consecutive burning projectiles at targets." },
      { name: "Flame Flight", key: "LShift", description: "Flies forward in a trail of flames, burning enemies passed." },
      { name: "Supernova", key: "Q", description: "Erupts in a colossal explosion, incinerating adjacent threats." }
    ],
    skins: ["Unstable Molecules", "Blue Flames", "Casual Johnny"],
    gender: "Male",
    species: "Mutate"
  },
  "Invisible Woman": {
    quotes: [
      "Now you see me, now you don't.",
      "I keep this family together.",
      "You can't hit what you can't see."
    ],
    abilities: [
      { name: "Force Field Wall", key: "RMB", description: "Creates a solid translucent wall that blocks projectiles." },
      { name: "Invisibility Shroud", key: "LShift", description: "Turns herself and nearby allies completely invisible." },
      { name: "Force Bubble", key: "E", description: "Traps an enemy inside a sphere, lifting them in the air." }
    ],
    skins: ["Fantastic Uniform", "Future Foundation", "Casual Sue"],
    gender: "Female",
    species: "Mutate"
  },
  "Iron Fist": {
    quotes: [
      "I am the Immortal Iron Fist.",
      "My fist is a weapon of pure chi.",
      "K'un-Lun's dragon flows through me."
    ],
    abilities: [
      { name: "Chi Strike", key: "LMB", description: "Delivers martial arts punch combos infused with chi." },
      { name: "Dragon Punch", key: "E", description: "Charges a golden fist strike that stuns and knocks back enemies." },
      { name: "Lotus Stance", key: "LShift", description: "Blocks incoming front attacks, absorbing energy to empower the next hit." }
    ],
    skins: ["Classic Green", "White/Gold Defender", "K'un-Lun Initiate"],
    gender: "Male",
    species: "Human"
  },
  "Iron Man": {
    quotes: [
      "I am Iron Man.",
      "Let's see what this suit can do.",
      "Genius, billionaire, playboy, philanthropist."
    ],
    abilities: [
      { name: "Repulsor Blast", key: "LMB", description: "Fires twin repulsor energy blasts from his armor hands." },
      { name: "Micro-Missiles", key: "E", description: "Launches a barrage of heat-seeking mini missiles." },
      { name: "Uni-Beam", key: "Q", description: "Fires a massive continuous laser from his chest reactor." }
    ],
    skins: ["Model Prime", "Silver Centurion", "Stealth Armor"],
    gender: "Male",
    species: "Human"
  },
  "Jeff the Land Shark": {
    quotes: [
      "*Happy shark noises*",
      "*Squeaks while chewing*",
      "Chomp chomp!"
    ],
    abilities: [
      { name: "Deep Dive", key: "LShift", description: "Submerges into the ground to swim quickly and bypass damage." },
      { name: "Chomp Attack", key: "LMB", description: "Bites enemies to deal damage and recover health." },
      { name: "Water Spit", key: "RMB", description: "Spits bubbles that heal allies and push back enemies." }
    ],
    skins: ["Captain Jeff", "Land Shark Onesie", "Golden Fin"],
    gender: "Male",
    species: "Land Shark"
  },
  "Loki": {
    quotes: [
      "I am Loki of Asgard, and I am burdened with glorious purpose.",
      "Did you really think I was there?",
      "Trust me, I'm a god."
    ],
    abilities: [
      { name: "Decoy Trickery", key: "E", description: "Summons clones of himself that fire illusory shots." },
      { name: "Shape-Shift", key: "Q", description: "Morphs into the targeted enemy hero, copying their abilities." },
      { name: "Frost Dagger", key: "LMB", description: "Throws magical frost daggers that slow enemy targets." }
    ],
    skins: ["Agent of Asgard", "President Loki", "Classic Horns"],
    gender: "Male",
    species: "Frost Giant/Asgardian"
  },
  "Luna Snow": {
    quotes: [
      "Time for a K-Pop cooldown!",
      "I sing of ice and light.",
      "My performance will blow you away!"
    ],
    abilities: [
      { name: "Ice Pop Shot", key: "LMB", description: "Fires rapid ice projectiles that deal damage or heal allies." },
      { name: "Idol Performance", key: "Q", description: "Performs a dance creating a massive healing aura around herself." },
      { name: "Snow Storm", key: "E", description: "Fires a frozen cone that immobilizes all enemies hit." }
    ],
    skins: ["Andromeda Idol", "K-Pop Queen", "Winter Concert"],
    gender: "Female",
    species: "Human"
  },
  "Magik": {
    quotes: [
      "Welcome to Limbo.",
      "My Soulsword will sever your corruption.",
      "I'm the ruler of the dark dimension."
    ],
    abilities: [
      { name: "Soulsword Strike", key: "LMB", description: "Performs heavy sword sweeps that generate barrier shields." },
      { name: "Stepping Disc", key: "LShift", description: "Opens teleportation discs to blink forward or upward." },
      { name: "Darkchylde Form", key: "Q", description: "Transforms into her demon form, boosting speed and power." }
    ],
    skins: ["New Mutants", "Ruler of Limbo", "Darkchylde Demon"],
    gender: "Female",
    species: "Mutant"
  },
  "Magneto": {
    quotes: [
      "You are gods among insects. Never forget it.",
      "Humanity's reign is over.",
      "Metal is mine to command."
    ],
    abilities: [
      { name: "Magnetic Shrapnel", key: "LMB", description: "Launches metallic debris at enemies." },
      { name: "Iron Shield", key: "E", description: "Deploys a magnetic barrier around an ally to absorb fire." },
      { name: "Metallic Rain", key: "Q", description: "Rains down a massive storm of sharp metal spikes in an area." }
    ],
    skins: ["White Suit", "Classic Red & Purple", "Age of Apocalypse"],
    gender: "Male",
    species: "Mutant"
  },
  "Mantis": {
    quotes: [
      "Listen to your emotions.",
      "I feel your anger... and it must rest.",
      "A quiet mind is a strong mind."
    ],
    abilities: [
      { name: "Sleep Touch", key: "E", description: "Approaches an enemy and puts them to sleep temporarily." },
      { name: "Empathic Heal", key: "LMB", description: "Channels a soft light that heals friendly targets." },
      { name: "Nature's spores", key: "RMB", description: "Launches pollen that marks enemies, boosting ally damage." }
    ],
    skins: ["Green Petals", "Guardians Uniform", "Empress Mantis"],
    gender: "Female",
    species: "Alien (Cotati-hybrid)"
  },
  "Mister Fantastic": {
    quotes: [
      "Calculated, precise, and elastic.",
      "There is always a rational explanation.",
      "Science will lead us to victory."
    ],
    abilities: [
      { name: "Elastic Slap", key: "LMB", description: "Melee punches that extend several meters forward." },
      { name: "Rubber Ball Bounce", key: "LShift", description: "Rolls into an elastic ball, bouncing and crushing foes." },
      { name: "Stretching Hook", key: "E", description: "Stretches arms to grab distant ledges or pull enemies." }
    ],
    skins: ["Fantastic Blue", "Future Foundation White", "Lab Coat Reed"],
    gender: "Male",
    species: "Mutate"
  },
  "Moon Knight": {
    quotes: [
      "Khonshu's wrath shall cleanse the night.",
      "I am the fist of vengeance.",
      "Three minds, one goal: justice."
    ],
    abilities: [
      { name: "Crescent Dart", key: "LMB", description: "Throws fast crescent throwing blades with hitscan reload." },
      { name: "Khonshu's Grace", key: "Passive", description: "Enables glide flight by opening his crescent cape." },
      { name: "Ankh Barrage", key: "Q", description: "Launches holy magical projectiles that lock onto targets." }
    ],
    skins: ["Mr. Knight Suit", "Khonshu Armor", "Vengeance Black"],
    gender: "Male",
    species: "Human"
  },
  "Namor": {
    quotes: [
      "Imperius Rex!",
      "The oceans bow to Atlantis.",
      "Surface dwellers know nothing of true power."
    ],
    abilities: [
      { name: "Trident Strike", key: "LMB", description: "Thrusts trident forward, creating hydrodynamic shockwaves." },
      { name: "Summon Giganto", key: "Q", description: "Summons a giant Atlantean whale to crush a massive area." },
      { name: "Water Shield", key: "E", description: "Surrounds himself in a bubble that blocks shots and heals." }
    ],
    skins: ["King of Atlantis", "Imperius Classic", "Surface Cloak"],
    gender: "Male",
    species: "Mutant/Atlantean"
  },
  "Peni Parker": {
    quotes: [
      "SP//dr suit is fully online!",
      "Me and SP//dr can take on anything!",
      "A spider's web is a complex equation."
    ],
    abilities: [
      { name: "SP//dr Cannon", key: "LMB", description: "Fires electric plasma shots from the mech's arm cannon." },
      { name: "Cyber Web Trap", key: "E", description: "Deploys energy tripwires that slow and shock enemies." },
      { name: "Mech Stomp", key: "LShift", description: "Stomps the ground, dealing impact damage and knocking back." }
    ],
    skins: ["Anime Classic", "Cyber Stealth SP//dr", "Pilot Uniform"],
    gender: "Female",
    species: "Human (Mech Pilot)"
  },
  "Phoenix": {
    quotes: [
      "I am fire and life incarnate!",
      "The Phoenix force cannot be contained.",
      "Burn away the shadows."
    ],
    abilities: [
      { name: "Fire Wave", key: "LMB", description: "Sends a wave of cosmic flame that pierces through enemies." },
      { name: "Rebirth Cocoon", key: "Passive", description: "Upon taking fatal damage, revives in a massive fire explosion." },
      { name: "Phoenix Wings", key: "LShift", description: "Gains flight and fires burning feathers at foes." }
    ],
    skins: ["Green Phoenix", "Dark Phoenix Crimson", "White Crown of Phoenix"],
    gender: "Female",
    species: "Mutant/Cosmic Entity"
  },
  "Psylocke": {
    quotes: [
      "The mind is a deadly blade.",
      "You won't hear me coming.",
      "My psi-blades will cut through your thoughts."
    ],
    abilities: [
      { name: "Psy-Blade Slash", key: "LMB", description: "Performs melee strikes with twin psychic energy swords." },
      { name: "Shadow Cloak", key: "LShift", description: "Enters a short stealth dash, leaving a decoy clone behind." },
      { name: "Psi-Arrow Volley", key: "RMB", description: "Fires psychic arrows that explode after a brief delay." }
    ],
    skins: ["Ninja Leotard", "Crimson Dawn", "Cyberpunk Assassin"],
    gender: "Female",
    species: "Mutant"
  },
  "Rocket Raccoon": {
    quotes: [
      "Ain't nothing like me, except me.",
      "Oh, I'm gonna get that arm.",
      "Who wants some laser fire?"
    ],
    abilities: [
      { name: "Laser Rifle", key: "LMB", description: "Fires a rapid-fire hitscan plasma blaster." },
      { name: "Ammo Beacon", key: "E", description: "Deploys a capsule that replenishes ammo and boosts fire rate." },
      { name: "Mech Jetpack", key: "Passive", description: "Double jump to activate hover jetpack." }
    ],
    skins: ["Guardians Red", "Bounty Hunter Shroud", "Space Suit Orange"],
    gender: "Male",
    species: "Halfworlder (Cybernetic Animal)"
  },
  "Rogue": {
    quotes: [
      "Sugar, you look like you need a hug.",
      "Thanks for the power trip!",
      "I can steal your spark in a single touch."
    ],
    abilities: [
      { name: "Power Theft", key: "E", description: "Touches an enemy to steal their kit, unlocking temporary powers." },
      { name: "Southern Punch", key: "LMB", description: "Melee punches backed by stolen Kree super-strength." },
      { name: "Flight Charge", key: "LShift", description: "Flies forward, grabbing and slamming the first enemy met." }
    ],
    skins: ["90s Classic Uniform", "Goth Rogue", "Modern Green/White"],
    gender: "Female",
    species: "Mutant"
  },
  "Scarlet Witch": {
    quotes: [
      "Chaos magic is my birthright.",
      "You think you control reality? Let me show you.",
      "Everything is about to change."
    ],
    abilities: [
      { name: "Chaos Sphere", key: "LMB", description: "Launches energy bolts of reality-warping magic." },
      { name: "Levitation Glide", key: "Passive", description: "Enables floating and gliding across the battlefield." },
      { name: "Hex Shield", key: "E", description: "Deploys a hex shield that absorbs and deflects attacks." }
    ],
    skins: ["WandaVision Retro", "Classic Tiara", "House of M Empress"],
    gender: "Female",
    species: "Mutant/Sorceress"
  },
  "Spider-Man": {
    quotes: [
      "With great power comes great responsibility.",
      "Your friendly neighborhood Spider-Man!",
      "My spider-sense is tingling!"
    ],
    abilities: [
      { name: "Web Swing", key: "LShift", description: "Swings on a web line to traverse structures rapidly." },
      { name: "Web Shoot", key: "RMB", description: "Fires web projectiles that slow and bind enemies." },
      { name: "Spider Strike", key: "LMB", description: "Melee punches and kicks that launch enemies into the air." }
    ],
    skins: ["Classic Red/Blue", "Symbiote Black Suit", "Iron Spider Armor"],
    gender: "Male",
    species: "Mutate"
  },
  "Squirrel Girl": {
    quotes: [
      "Unbeatable? You bet!",
      "Squirrels, attack!",
      "Don't underestimate the tail."
    ],
    abilities: [
      { name: "Acorn Bomb", key: "RMB", description: "Throws explosive acorns that explode into a barrage of shards." },
      { name: "Squirrel Swarm", key: "E", description: "Summons a swarm of squirrels that chew and distract enemies." },
      { name: "Tail Whip", key: "LMB", description: "Melee attacks utilizing her tail for wide-range knocks." }
    ],
    skins: ["Great Lakes Avenger", "Casual Hoodie", "Winter Nut"],
    gender: "Female",
    species: "Mutant"
  },
  "Star-Lord": {
    quotes: [
      "Who? Star-Lord, man. Legendary outlaw?",
      "Hit the music, let's dance.",
      "A little blaster fire solves everything."
    ],
    abilities: [
      { name: "Element Blasters", key: "LMB", description: "Fires rapid dual element pistols with hitscan accuracy." },
      { name: "Jet Boot Dash", key: "LShift", description: "Activates thrusters to slide or dash quickly in any direction." },
      { name: "Outlaw Dance", key: "Q", description: "Puts on headphones, sliding around while shooting all targets automatically." }
    ],
    skins: ["Guardians Jacket", "Space Outlaw Classic", "Ravager Outfit"],
    gender: "Male",
    species: "Human/Spartax Hybrid"
  },
  "Storm": {
    quotes: [
      "The elements obey my command!",
      "Do you know what happens to a toad struck by lightning?",
      "I am the Goddess of the Winds."
    ],
    abilities: [
      { name: "Lightning Bolt", key: "LMB", description: "Fires electric beams from her hands at targets." },
      { name: "Wind Dash", key: "LShift", description: "Summons wind drafts to fly quickly forward." },
      { name: "Tornado Tempest", key: "Q", description: "Summons a giant hurricane that sweeps and destroys enemies." }
    ],
    skins: ["90s White Suit", "Goddess Veil", "Punk Rock Storm"],
    gender: "Female",
    species: "Mutant"
  },
  "The Punisher": {
    quotes: [
      "One batch. Two batch. Penny and dime.",
      "The guilty must be punished.",
      "Bullets are the only language they understand."
    ],
    abilities: [
      { name: "Assault Rifle", key: "LMB", description: "Fires standard automatic rifle rounds (Hitscan)." },
      { name: "Shotgun Swap", key: "RMB", description: "Switches to shotgun for heavy point blank fire." },
      { name: "Turret Deploy", key: "Q", description: "Sits down behind a heavy machine gun turret with infinite ammo." }
    ],
    skins: ["Skull Bulletproof Vest", "War Zone Jacket", "Tactical Trenchcoat"],
    gender: "Male",
    species: "Human"
  },
  "The Thing": {
    quotes: [
      "It's clobberin' time!",
      "A rock-hard defense, literally.",
      "Don't make me angry, you won't like the rocks."
    ],
    abilities: [
      { name: "Rock Smash", key: "LMB", description: "Delivers slow, high-damage stone fist attacks." },
      { name: "Ground Pound", key: "E", description: "Slams fists into the ground, shocking and slowing enemies." },
      { name: "Yancy Street Shield", key: "Passive", description: "Generates heavy stone shields upon receiving hits." }
    ],
    skins: ["Yancy Street Vest", "Classic Blue Shorts", "Gladiator Rocks"],
    gender: "Male",
    species: "Mutate"
  },
  "Thor": {
    quotes: [
      "For Asgard!",
      "Bring me Thanos!",
      " Mjolnir, to me!"
    ],
    abilities: [
      { name: "Mjolnir Throw", key: "RMB", description: "Throws hammer which damages on way out and way back." },
      { name: "Lightning Strike", key: "E", description: "Calls lightning down on himself, charging his health/shields." },
      { name: "God of Thunder", key: "Q", description: "Leaps high and crashes down with a massive electrical smash." }
    ],
    skins: ["Unworthy Thor Beard", "Herald of Thunder", "Classic Odinson Cape"],
    gender: "Male",
    species: "Asgardian Deity"
  },
  "Ultron": {
    quotes: [
      "You crave peace, yet you wage war.",
      "There are no strings on me.",
      "Metal is superior. Flesh is weak."
    ],
    abilities: [
      { name: "Drone Summon", key: "E", description: "Summons auxiliary robotic drones that fire lasers at targets." },
      { name: "Disintegration Ray", key: "LMB", description: "Fires a concentrated red laser beam from his hand." },
      { name: "Hive Mind Link", key: "Passive", description: "If destroyed, can upload consciousness to a nearby drone to revive." }
    ],
    skins: ["Gold Ultron Prime", "Vibranium Body", "Phalanx Ruler"],
    gender: "Male",
    species: "Android/Artificial Intelligence"
  },
  "Venom": {
    quotes: [
      "We are Venom!",
      "So many snacks, so little time.",
      "Your skin looks delicious."
    ],
    abilities: [
      { name: "Symbiote Whip", key: "LMB", description: "Performs sweeping tentacle attacks at close range." },
      { name: "Symbiote Shield", key: "E", description: "Coats himself in black mass to temporarily absorb health." },
      { name: "Devour", key: "Q", description: "Eats a target enemy, digesting them for health and damage." }
    ],
    skins: ["Anti-Venom White", "Space Knight Armor", "Classic Symbiote"],
    gender: "Male",
    species: "Symbiote Bonded Human"
  },
  "White Fox": {
    quotes: [
      "Nine tails, nine ways to defeat you.",
      "The Kumiho spirit will guide my claws.",
      "You cannot escape my tracking."
    ],
    abilities: [
      { name: "Kumiho Dash", key: "LShift", description: "Dashes forward clawing enemies, inficting bleed." },
      { name: "Fox Fire", key: "RMB", description: "Throws fireballs that track and damage the nearest enemy." },
      { name: "Nine-Tail Strike", key: "Q", description: "Performs quick teleporting slashes on all targets in an area." }
    ],
    skins: ["Agent of Atlas", "Nine-Tail Goddess", "Casual Vest"],
    gender: "Female",
    species: "Kumiho-hybrid"
  },
  "Winter Soldier": {
    quotes: [
      "The mission is everything.",
      "My metal arm does the talking.",
      "Who the hell is Bucky?"
    ],
    abilities: [
      { name: "Cybernetic Punch", key: "E", description: "Punches with metal arm, breaking enemy barriers and shields." },
      { name: "Assault Rifle", key: "LMB", description: "Fires hitscan bursts of high-velocity ammunition." },
      { name: "Tactical Grenade", key: "RMB", description: "Throws an explosive grenade that knocks enemies out of cover." }
    ],
    skins: ["Soviet Assassin Mask", "Captain America Bucky", "Tactical Vest"],
    gender: "Male",
    species: "Super Soldier"
  },
  "Wolverine": {
    quotes: [
      "I'm the best there is at what I do.",
      "Let's go, bub.",
      "My claws are itching for a fight."
    ],
    abilities: [
      { name: "Adamantium Claws", key: "LMB", description: "Melee claw attacks that ignore a portion of armor." },
      { name: "Berserker Charge", key: "LShift", description: "Leaps forward into a spinning claw strike." },
      { name: "Regenerative Rage", key: "E", description: "Triggers healing factor, repairing health over time." }
    ],
    skins: ["Yellow/Blue Classic", "Brown & Tan Retro", "Weapon X Lab"],
    gender: "Male",
    species: "Mutant"
  }
};
