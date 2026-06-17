// Auto-generated mapping database of heroes and their abilities
export interface AbilityProperty {
  key: string;
  value: string;
}

export interface HeroAbility {
  name: string;
  slug: string;
  button: string;
  originalImgUrl: string;
  localImgUrl: string | null;
  properties: AbilityProperty[];
}

export interface HeroAbilitiesDatabase {
  [heroName: string]: HeroAbility[];
}

export const heroAbilitiesData: HeroAbilitiesDatabase = {
  "CYCLOPS": [
    {
      "name": "Optic Blast",
      "slug": "optic-blast",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/67d45b41-e124-4be6-a08f-28b7f6868a7e.png",
      "localImgUrl": "/ability_images/cyclops/optic-blast.png",
      "properties": [
        {
          "key": "Tick Rate",
          "value": "0.03s per use"
        },
        {
          "key": "Damage per Tick",
          "value": "25"
        },
        {
          "key": "Hit Checks per Attack",
          "value": "3"
        },
        {
          "key": "Attack Interval",
          "value": "0.6s"
        },
        {
          "key": "Ricochet Force CD Reduction per Hit",
          "value": "0.15s"
        }
      ]
    },
    {
      "name": "Concussive Beam",
      "slug": "concussive-beam",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/3f017cb2-5d18-4fcb-8ca4-15e3da0fdab6.png",
      "localImgUrl": "/ability_images/cyclops/concussive-beam.png",
      "properties": [
        {
          "key": "Tick Rate",
          "value": "0.083s per use"
        },
        {
          "key": "Damage per Tick",
          "value": "11.5"
        },
        {
          "key": "Ricochet Damage Falloff",
          "value": "50%, minimum 10%"
        },
        {
          "key": "Environment Ricochet Damage Falloff",
          "value": "30%"
        },
        {
          "key": "Ricochet Force CD Reduction per Hit",
          "value": "0.15s"
        },
        {
          "key": "Maximum Energy",
          "value": "100"
        },
        {
          "key": "Energy Cost per Second",
          "value": "25/s"
        },
        {
          "key": "Energy Recovery per Second",
          "value": "10/s"
        }
      ]
    },
    {
      "name": "Ricochet Force",
      "slug": "ricochet-force",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/f247fe64-7879-4363-b6be-609748fa254a.png",
      "localImgUrl": "/ability_images/cyclops/ricochet-force.png",
      "properties": [
        {
          "key": "Beam Damage",
          "value": "80"
        },
        {
          "key": "Environment Ricochet Damage Falloff",
          "value": "65%"
        },
        {
          "key": "Environment Refraction Damage Falloff",
          "value": "20%"
        },
        {
          "key": "Character Refraction Damage Falloff",
          "value": "50%"
        },
        {
          "key": "Environment Refraction Damage Falloff Distance",
          "value": "Falloff begins at 8m, decreasing to 40% at 12m"
        },
        {
          "key": "Environment Refraction Damage Scaling per Refraction",
          "value": "After the first refraction, each additional refraction increases damage by 10%, up to 20%"
        },
        {
          "key": "Environment Refraction Character Tracking Range",
          "value": "12m"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 15s to recharge. Base Cooldown 2s"
        }
      ]
    },
    {
      "name": "Propulsion Burst",
      "slug": "propulsion-burst",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/b8204ec4-4bc0-4d75-9e40-c75d9a80159a.png",
      "localImgUrl": "/ability_images/cyclops/propulsion-burst.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "Minimum 0.35s, maximum 1s"
        },
        {
          "key": "Dash Duration",
          "value": "Minimum 11m, maximum 22m"
        },
        {
          "key": "Slow Effect",
          "value": "35% for 2s"
        },
        {
          "key": "Tick Rate",
          "value": "0.083s per use"
        },
        {
          "key": "Damage",
          "value": "5 per hit"
        }
      ]
    },
    {
      "name": "Optic Ascent",
      "slug": "optic-ascent",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/e20c4dc4-44bd-4e8c-b872-d10e84ef478e.png",
      "localImgUrl": "/ability_images/cyclops/optic-ascent.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "0.6s"
        },
        {
          "key": "Dash Duration",
          "value": "12m"
        },
        {
          "key": "Movement Boost",
          "value": "35% for 2s"
        },
        {
          "key": "Tick Rate",
          "value": "0.083s per use"
        },
        {
          "key": "Damage",
          "value": "5 per hit"
        }
      ]
    },
    {
      "name": "Kinetic Hover",
      "slug": "kinetic-hover",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/34579f57-e95c-49e5-a80e-9cd0b03350d8.png",
      "localImgUrl": "/ability_images/cyclops/kinetic-hover.png",
      "properties": []
    },
    {
      "name": "Ruby Rage",
      "slug": "ruby-rage",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260611/a9a51b9e-f60d-494a-9ae7-3e185cde4c4d.png",
      "localImgUrl": "/ability_images/cyclops/ruby-rage.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3700"
        },
        {
          "key": "First Spell Field Damage",
          "value": "75+20%Maximum Health"
        },
        {
          "key": "Interval Between Two Fields",
          "value": "1.1s"
        },
        {
          "key": "Second Spell Field Damage",
          "value": "75+40%Maximum Health"
        },
        {
          "key": "Maximum Range",
          "value": "60m"
        },
        {
          "key": "Spell Field Width",
          "value": "First field 2m, second field 8m"
        }
      ]
    }
  ],
  "DEVIL DINOSAUR": [
    {
      "name": "Primal Bite",
      "slug": "primal-bite",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/115176f7-366a-4c84-a53e-5cb01ce83315.png",
      "localImgUrl": "/ability_images/devil-dinosaur/primal-bite.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "75"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        },
        {
          "key": "Attack Interval",
          "value": "1st and 3rd attacks: 1s; 2nd attack: 0.9s"
        },
        {
          "key": "Bleed Damage",
          "value": "1.5% Maximum Health"
        },
        {
          "key": "Bleed Duration",
          "value": "4s"
        },
        {
          "key": "Bleed Tick Rate",
          "value": "2 times per second"
        }
      ]
    },
    {
      "name": "Impact Beam",
      "slug": "impact-beam",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/8deeb802-0265-45e5-8ea0-8ac836bf938e.png",
      "localImgUrl": "/ability_images/devil-dinosaur/impact-beam.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "3.3s"
        },
        {
          "key": "Attack Range",
          "value": "17m"
        },
        {
          "key": "Spell Field Damage",
          "value": "40/s"
        },
        {
          "key": "Spell Field Radius",
          "value": "1.2m"
        },
        {
          "key": "Slow Effect",
          "value": "15% for 2s"
        }
      ]
    },
    {
      "name": "Buddy Barrier",
      "slug": "buddy-barrier",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/5262ea98-9407-49e5-92c3-4630ededb30d.png",
      "localImgUrl": "/ability_images/devil-dinosaur/buddy-barrier.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Summons Max Health",
          "value": "450"
        },
        {
          "key": "Maximum Duration for Summons",
          "value": "6s"
        },
        {
          "key": "Slow Effect",
          "value": "15% for 2s"
        }
      ]
    },
    {
      "name": "Savage Predation",
      "slug": "savage-predation",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/d5b729a9-bd0a-4e51-9bd4-a4bf2b40b5ef.png",
      "localImgUrl": "/ability_images/devil-dinosaur/savage-predation.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Dash Duration",
          "value": "2s"
        },
        {
          "key": "Dashing Speed",
          "value": "15m/s"
        },
        {
          "key": "Bite Damage",
          "value": "50"
        }
      ]
    },
    {
      "name": "Frenzied Feast",
      "slug": "frenzied-feast",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/e3644601-c665-47c0-b70b-eff7718330c8.png",
      "localImgUrl": "/ability_images/devil-dinosaur/frenzied-feast.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Bite Damge",
          "value": "First 4 hits: 15 each; 5th hit: 30"
        },
        {
          "key": "Bonus Damage",
          "value": "First 4 hits: 5% Maximum Health each; 5th hit: 10% Maximum Health"
        }
      ]
    },
    {
      "name": "Prehistoric Plating",
      "slug": "prehistoric-plating",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/c9b874b3-dde9-4453-9fb8-e49f5ecdec9d.png",
      "localImgUrl": "/ability_images/devil-dinosaur/prehistoric-plating.png",
      "properties": [
        {
          "key": "Headshot Damage Taken Reduction",
          "value": "50%"
        },
        {
          "key": "Ultimate Energy Gain Reduction from Damage/Healing Him",
          "value": "35%"
        }
      ]
    },
    {
      "name": "Apex Advantage",
      "slug": "apex-advantage",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260515/750da25f-7267-479e-9161-ad9109a5209c.png",
      "localImgUrl": "/ability_images/devil-dinosaur/apex-advantage.png",
      "properties": [
        {
          "key": "Bonus Health",
          "value": "150% of Bleed Damage Dealt"
        }
      ]
    },
    {
      "name": "Devil-Beast Rampage",
      "slug": "devil-beast-rampage",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260514/6acd3e0f-759b-44c1-b1bc-b42dd520aa74.png",
      "localImgUrl": "/ability_images/devil-dinosaur/devil-beast-rampage.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Stomp Field Spawn Interval",
          "value": "0.3"
        },
        {
          "key": "Frenzied Feast Cooldown Reduction",
          "value": "1s"
        },
        {
          "key": "Savage Predation Cooldown Reduction",
          "value": "4s"
        },
        {
          "key": "Speed Boost During Ultimate",
          "value": "70%"
        },
        {
          "key": "Stomp Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Stomp Field Damage",
          "value": "10"
        },
        {
          "key": "Stomp Field Launch-up Interval",
          "value": "0.8s"
        }
      ]
    }
  ],
  "BLACK CAT": [
    {
      "name": "FELINE FURY",
      "slug": "feline-fury",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/b418cfa2-f3dd-4eae-b205-967e67831cf7.png",
      "localImgUrl": "/ability_images/black-cat/feline-fury.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "35"
        },
        {
          "key": "Maximum Distance",
          "value": "3.5m"
        }
      ]
    },
    {
      "name": "CALLING CARD",
      "slug": "calling-card",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/c1b8429e-cbce-4c01-ad81-b1255d6ddbb8.png",
      "localImgUrl": "/ability_images/black-cat/calling-card.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Maximum Dash Distance",
          "value": "60m"
        },
        {
          "key": "Fore-swing Damage Reduction",
          "value": "50%"
        },
        {
          "key": "Ability Duration",
          "value": "10s"
        },
        {
          "key": "Maximum Targeting Distance",
          "value": "8m"
        },
        {
          "key": "1st Claw Strike Damage",
          "value": "30"
        },
        {
          "key": "2nd Claw Strike Damage",
          "value": "30+20% Target's Maximum Health"
        }
      ]
    },
    {
      "name": "CAT'S CRADLE",
      "slug": "cats-cradle",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/0724214f-fa9d-4530-803b-02b40f0b9af7.png",
      "localImgUrl": "/ability_images/black-cat/cats-cradle.png",
      "properties": [
        {
          "key": "Maximum Dash Distance",
          "value": "15m"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge"
        }
      ]
    },
    {
      "name": "TURN OF FORTUNE",
      "slug": "turn-of-fortune",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/46a0da80-3314-466d-aab1-41bc525fc793.png",
      "localImgUrl": "/ability_images/black-cat/turn-of-fortune.png",
      "properties": [
        {
          "key": "Hook Speed",
          "value": "120m/s"
        },
        {
          "key": "Hook Maximum Distance",
          "value": "30m"
        },
        {
          "key": "Hook Damage",
          "value": "30"
        },
        {
          "key": "Bonus Health from Hook Hit",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "5s"
        }
      ]
    },
    {
      "name": "THIEVING GRACE",
      "slug": "thieving-grace",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/331db52b-ea1e-4d74-a4c7-c27fa17ec1a5.png",
      "localImgUrl": "/ability_images/black-cat/thieving-grace.png",
      "properties": []
    },
    {
      "name": "FORTUNE'S FAVOR",
      "slug": "fortunes-favor",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/f20a3d87-0110-46b5-ae9c-e942746833cd.png",
      "localImgUrl": "/ability_images/black-cat/fortunes-favor.png",
      "properties": [
        {
          "key": "Grapple Swipe Fortune Consumption",
          "value": "150"
        },
        {
          "key": "Phantom Pursuit Fortune Consumption",
          "value": "300"
        }
      ]
    },
    {
      "name": "STEALTHY CATWALK",
      "slug": "stealthy-catwalk",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/76e1a388-8bcd-40cb-b9b9-cbfea50d5264.png",
      "localImgUrl": "/ability_images/black-cat/stealthy-catwalk.png",
      "properties": []
    },
    {
      "name": "MALKIN MISFORTUNE",
      "slug": "malkin-misfortune",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/048b7e20-1062-44e0-9ae2-588cbb9d4fc8.png",
      "localImgUrl": "/ability_images/black-cat/malkin-misfortune.png",
      "properties": []
    },
    {
      "name": "CLAW WHIP",
      "slug": "claw-whip",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/5868fb3b-fb3d-4ed5-9907-0252b6687288.png",
      "localImgUrl": "/ability_images/black-cat/claw-whip.png",
      "properties": [
        {
          "key": "Spell Field Range",
          "value": "150° cone spell field with a radius of 7.5m and a height of 2.5m"
        },
        {
          "key": "Spell Field Damage",
          "value": "65"
        },
        {
          "key": "Attack Interval",
          "value": "0.6s per hit"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 30°, drop to 30% of maximum damage at 75°"
        },
        {
          "key": "Bonus Health Per Hit",
          "value": "25"
        },
        {
          "key": "Max Bonus Health",
          "value": "50"
        }
      ]
    },
    {
      "name": "CALLING CARD",
      "slug": "calling-card",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/542f0f37-1553-45e5-b794-9a5804088ccb.png",
      "localImgUrl": "/ability_images/black-cat/calling-card.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Maximum Dash Distance",
          "value": "60m"
        },
        {
          "key": "Fore-swing Damage Reduction",
          "value": "50%"
        },
        {
          "key": "Ability Duration",
          "value": "10s"
        },
        {
          "key": "Maximum Targeting Distance",
          "value": "8m"
        },
        {
          "key": "1st Claw Strike Damage",
          "value": "30"
        },
        {
          "key": "2nd Claw Strike Damage",
          "value": "30+20% Target’s Maximum Health"
        }
      ]
    },
    {
      "name": "CAT'S CRADLE",
      "slug": "cats-cradle",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/de907edd-e322-4e4b-b64d-26f1dd5bd08e.png",
      "localImgUrl": "/ability_images/black-cat/cats-cradle.png",
      "properties": [
        {
          "key": "Maximum Dash Distance",
          "value": "15m"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge."
        }
      ]
    },
    {
      "name": "PHANTOM PURSUIT",
      "slug": "phantom-pursuit",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/0f50962e-bc08-42a0-85db-7138a350d05f.png",
      "localImgUrl": "/ability_images/black-cat/phantom-pursuit.png",
      "properties": [
        {
          "key": "Dash Duration",
          "value": "0.25s"
        },
        {
          "key": "Damage",
          "value": "75"
        },
        {
          "key": "Maximum Dash Distance",
          "value": "20m"
        },
        {
          "key": "Cooldown",
          "value": "2s"
        }
      ]
    },
    {
      "name": "THIEVING GRACE",
      "slug": "thieving-grace",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/db492550-ee00-49bd-b8f2-a8725012dbe1.png",
      "localImgUrl": "/ability_images/black-cat/thieving-grace.png",
      "properties": []
    },
    {
      "name": "FORTUNE'S FAVOR",
      "slug": "fortunes-favor",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/aaaacbd7-f567-40c0-be49-494f0e6933db.png",
      "localImgUrl": "/ability_images/black-cat/fortunes-favor.png",
      "properties": [
        {
          "key": "Grapple Swipe Fortune Consumption",
          "value": "150"
        },
        {
          "key": "Phantom Pursuit Fortune Consumption",
          "value": "300"
        }
      ]
    },
    {
      "name": "STEALTHY CATWALK",
      "slug": "stealthy-catwalk",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/cf0e15f3-6715-49c6-8313-9513eed6fa61.png",
      "localImgUrl": "/ability_images/black-cat/stealthy-catwalk.png",
      "properties": []
    },
    {
      "name": "MALKIN MISFORTUNE",
      "slug": "malkin-misfortune",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/f8475d37-2f3e-495d-8783-66a39a55e6a7.png",
      "localImgUrl": "/ability_images/black-cat/malkin-misfortune.png",
      "properties": []
    },
    {
      "name": "GILDED DEAL",
      "slug": "gilded-deal",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/35b59c4e-01ea-4c4f-9321-2e378148df61.png",
      "localImgUrl": "/ability_images/black-cat/gilded-deal.png",
      "properties": []
    },
    {
      "name": "TABLET OF DESTINIES",
      "slug": "tablet-of-destinies",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/ce5e92ec-444e-48f9-9a2e-73b4f86c07fe.png",
      "localImgUrl": "/ability_images/black-cat/tablet-of-destinies.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Gain 0/50/200/500 Fortune randomly"
        },
        {
          "key": "Fortune Consumption",
          "value": "100"
        }
      ]
    },
    {
      "name": "HELM OF HADES",
      "slug": "helm-of-hades",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/b4507d88-ec34-4a0b-9303-96757d10cd5b.png",
      "localImgUrl": "/ability_images/black-cat/helm-of-hades.png",
      "properties": [
        {
          "key": "Fortune Consumption",
          "value": "200"
        },
        {
          "key": "Invisibility Duration",
          "value": "2s"
        },
        {
          "key": "Movement Speed Boost Duration",
          "value": "2s"
        },
        {
          "key": "Movement Boost",
          "value": "60%, drop to 0 in 2s"
        }
      ]
    },
    {
      "name": "FALTINE FLAME ORB",
      "slug": "faltine-flame-orb",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/004aee58-b3ee-436d-bbe7-41ef6c00b4d5.png",
      "localImgUrl": "/ability_images/black-cat/faltine-flame-orb.png",
      "properties": [
        {
          "key": "Fortune Consumption",
          "value": "100"
        },
        {
          "key": "Summon Health",
          "value": "50"
        },
        {
          "key": "Maximum Summon Quantity",
          "value": "1"
        },
        {
          "key": "Maximum Reveal Distance",
          "value": "20m"
        }
      ]
    },
    {
      "name": "CHERNOBOG'S CRYSTAL",
      "slug": "chernobogs-crystal",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/d7499d6e-8126-4d52-b3c5-649961da300b.png",
      "localImgUrl": "/ability_images/black-cat/chernobogs-crystal.png",
      "properties": [
        {
          "key": "Fortune Consumption",
          "value": "200"
        },
        {
          "key": "Special Effect",
          "value": "Remove any active control effects"
        }
      ]
    },
    {
      "name": "RING OF ZONA",
      "slug": "ring-of-zona",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/37abc875-d763-4531-8095-c0d74aae0e22.png",
      "localImgUrl": "/ability_images/black-cat/ring-of-zona.png",
      "properties": [
        {
          "key": "Fortune Consumption",
          "value": "200"
        }
      ]
    },
    {
      "name": "MENTO-FISH",
      "slug": "mento-fish",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/685beeba-23c2-457c-83a0-9beb64c100d9.png",
      "localImgUrl": "/ability_images/black-cat/mento-fish.png",
      "properties": [
        {
          "key": "Fortune Consumption",
          "value": "200"
        },
        {
          "key": "Casting",
          "value": "Projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "30m/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a radius of 5m and a height of 40m."
        },
        {
          "key": "Slow Ratio",
          "value": "35%"
        }
      ]
    },
    {
      "name": "STICKY PAWS",
      "slug": "sticky-paws",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260416/d1950ebc-6411-4006-93b9-c6db6b41ee45.png",
      "localImgUrl": "/ability_images/black-cat/sticky-paws.png",
      "properties": [
        {
          "key": "Fortune Gained per Target Hit (Feline Fury)",
          "value": "50, up to 50"
        },
        {
          "key": "Fortune Gained per Target Hit (Claw Whip)",
          "value": "50, up to 100"
        },
        {
          "key": "Fortune Gained per Target Hit (Phantom Pursuit)",
          "value": "150, up to 150"
        },
        {
          "key": "Fortune Gained per Hit (Turn of Fortune)",
          "value": "300"
        },
        {
          "key": "Fortune Gained per Hit (Calling Card)",
          "value": "300"
        },
        {
          "key": "Fortune Lost Upon Death",
          "value": "Lose 50% of Fortune when defeated, with a minimum deduction of 200"
        }
      ]
    }
  ],
  "WHITE FOX": [
    {
      "name": "YEOWOO GUSEUL",
      "slug": "yeowoo-guseul",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/c58d434c-4789-4937-961d-d27e5a1f80ef.png",
      "localImgUrl": "/ability_images/white-fox/yeowoo-guseul.png",
      "properties": [
        {
          "key": "Projectile Speed",
          "value": "120m/s"
        },
        {
          "key": "Bounce Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "35m"
        },
        {
          "key": "Bounce Projectile Max Distance",
          "value": "6m"
        },
        {
          "key": "Healing Amount",
          "value": "Direct hit: 50 per round; bounce hit: 35 per round"
        },
        {
          "key": "Damage",
          "value": "Direct hit: 40 per round; bounce hit: 25 per round"
        },
        {
          "key": "Fire Rate",
          "value": "0.45s per round"
        }
      ]
    },
    {
      "name": "CLAW STRIKE",
      "slug": "claw-strike",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/e738e469-d755-4bf3-93ae-0b5a252443ca.png",
      "localImgUrl": "/ability_images/white-fox/claw-strike.png",
      "properties": [
        {
          "key": "Attack Interval",
          "value": "0.45s per use"
        },
        {
          "key": "Damage",
          "value": "35 per hit"
        },
        {
          "key": "Attack Range",
          "value": "4m"
        }
      ]
    },
    {
      "name": "SPECTRAL SURGE",
      "slug": "spectral-surge",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/19bc9c00-28b2-4cb5-810c-183a9635f49b.png",
      "localImgUrl": "/ability_images/white-fox/spectral-surge.png",
      "properties": [
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Damage/Healing Radius",
          "value": "3m"
        },
        {
          "key": "Charm/Invincibility Radius",
          "value": "0.8m"
        },
        {
          "key": "Damage",
          "value": "65"
        },
        {
          "key": "Healing Amount",
          "value": "65"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Charm Duration",
          "value": "0.4s"
        },
        {
          "key": "Allies' Invincibility Duration",
          "value": "0.4s"
        },
        {
          "key": "Maximum Distance",
          "value": "35m"
        },
        {
          "key": "Self Healing Amount",
          "value": "50"
        }
      ]
    },
    {
      "name": "FOX FORM AWAKENING",
      "slug": "fox-form-awakening",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/72a48398-8002-4dfa-9056-24f73c76bc01.png",
      "localImgUrl": "/ability_images/white-fox/fox-form-awakening.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Attack Generated Healing Spell Field Range",
          "value": "10m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "35 per hit"
        },
        {
          "key": "Healing Spell Field That Surrounds the Caster",
          "value": "10m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "25/s"
        },
        {
          "key": "Ability Duration",
          "value": "Transform 3 tails: 9s; 2 tails: 8s; 1 tail: 7s"
        }
      ]
    },
    {
      "name": "SPIRIT SANCTUARY",
      "slug": "spirit-sanctuary",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/a69660c4-0140-4d93-b09e-88695bef6c4b.png",
      "localImgUrl": "/ability_images/white-fox/spirit-sanctuary.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Summon Health",
          "value": "200"
        },
        {
          "key": "One-time Healing Amount",
          "value": "50"
        },
        {
          "key": "Maximum Distance",
          "value": "30m"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "5m radius spherical spell field"
        },
        {
          "key": "MAXIMUM DURATION FOR SUMMONS",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "While the shield is active, it provides 20/s Healing Over Time to allies (including White Fox) within the shield's range"
        }
      ]
    },
    {
      "name": "TAIL SWEEP",
      "slug": "tail-sweep",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/5c67a6c1-758c-467c-a4de-62f8fcf8ac11.png",
      "localImgUrl": "/ability_images/white-fox/tail-sweep.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "3s"
        },
        {
          "key": "Attack Range",
          "value": "5m"
        },
        {
          "key": "DAMAGE",
          "value": "50"
        }
      ]
    },
    {
      "name": "Predatory Pounce",
      "slug": "predatory-pounce",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/5f574241-b3e7-46e1-83c5-658beb3885c9.png",
      "localImgUrl": "/ability_images/white-fox/predatory-pounce.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Dash Duration",
          "value": "10m"
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Predatory Pounce Second Unleash",
          "value": ""
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Dash Duration",
          "value": "15m"
        },
        {
          "key": "Damage",
          "value": "40"
        }
      ]
    },
    {
      "name": "KUMIHO UNLEASHED",
      "slug": "kumiho-unleashed",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/b089d7a9-c6dd-46d3-a000-4c0954353ad4.png",
      "localImgUrl": "/ability_images/white-fox/kumiho-unleashed.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "4800"
        },
        {
          "key": "Maximum Health",
          "value": "900"
        },
        {
          "key": "Continuous Healing Spell Field Range",
          "value": "10m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "85/s"
        }
      ]
    },
    {
      "name": "NINEFOLD SLAM",
      "slug": "ninefold-slam",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/246d56d8-a7ff-40e7-ace5-01c0fd4b9a66.png",
      "localImgUrl": "/ability_images/white-fox/ninefold-slam.png",
      "properties": [
        {
          "key": "Max Attack Range",
          "value": "5m"
        },
        {
          "key": "Damage",
          "value": "50 per hit"
        },
        {
          "key": "Explosion Damage",
          "value": "50 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "1 per second"
        },
        {
          "key": "Attack Generated Healing Spell Field Range",
          "value": "10m radius spherical spell field"
        },
        {
          "key": "Explosion Spell Field Range",
          "value": "6m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "100 per hit"
        }
      ]
    },
    {
      "name": "BLESSED BY THE NINE",
      "slug": "blessed-by-the-nine",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260320/36acf930-5edb-4ccb-b782-333bc20b2050.png",
      "localImgUrl": "/ability_images/white-fox/blessed-by-the-nine.png",
      "properties": [
        {
          "key": "Maximum Select Distance",
          "value": "50m"
        },
        {
          "key": "Healing Over Time Amount",
          "value": "40/s"
        },
        {
          "key": "Unstoppable State Duration",
          "value": "3s"
        },
        {
          "key": "Life-steal Ratio",
          "value": "0.25"
        },
        {
          "key": "Cooldown",
          "value": "2s"
        }
      ]
    }
  ],
  "ELSA BLOODSTONE": [
    {
      "name": "DOUBLE-BARREL BLASTER",
      "slug": "double-barrel-blaster",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/8a132243-9cec-4ed8-aa27-f374bc58d1a7.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/double-barrel-blaster.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Shotgun projectiles that hit instantly"
        },
        {
          "key": "Damage",
          "value": "4.5 per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 70% at 30m"
        },
        {
          "key": "Bullets Fired Each Cast",
          "value": "10"
        },
        {
          "key": "Crosshair Spread Radius(at 10m)",
          "value": "0.13m"
        },
        {
          "key": "Fire Rate",
          "value": "The firing interval between shots is 0.12s, with an interval of 0.8s between each round of shooting"
        },
        {
          "key": "Ammo",
          "value": "8"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "MONSTER-PIERCER",
      "slug": "monster-piercer",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/ff430438-d356-492c-bd28-2c68160d3a7a.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/monster-piercer.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Shotgun projectiles that hit instantly"
        },
        {
          "key": "Damage",
          "value": "13+0.8% of enemy's maximum health"
        },
        {
          "key": "Bullets Fired Each Cast",
          "value": "5"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "6m"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "INHERITED INSTINCT",
      "slug": "inherited-instinct",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/4b228e3f-c80f-4bd7-903f-c38148164bd9.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/inherited-instinct.png",
      "properties": [
        {
          "key": "Instinct from KOs",
          "value": "100"
        },
        {
          "key": "Additional Instinct from KOs Caught by Smoky Snare",
          "value": "200"
        },
        {
          "key": "Damage/Instinct Conversion Rate",
          "value": "0.06"
        },
        {
          "key": "Special Effect 1",
          "value": "Instinct levels up when it reaches 100, up to 3 levels"
        },
        {
          "key": "Special Effect 2",
          "value": "For each Instinct level gained, reduce the cooldown of Helix Advance by 2s"
        }
      ]
    },
    {
      "name": "RUTHLESS PURSUIT",
      "slug": "ruthless-pursuit",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/d3e00685-1ad7-4e9d-a9cc-4d176abfdf09.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/ruthless-pursuit.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Max Dash Speed",
          "value": "40m/s"
        },
        {
          "key": "Max Dash Duration",
          "value": "0.3s"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Effect 1",
          "value": "Launch up enemies hit, and activate the follow up in 5s"
        },
        {
          "key": "Special Effect 2",
          "value": "Using either stage empowers your next Double-Barrel Blaster, transforming it into Monster-Piercer"
        },
        {
          "key": "Bonus Health",
          "value": "Every unleash of Ruthless Pursuit and Helix Advance grants 30 bonus health. Max bonus health is 75"
        },
        {
          "key": "Follow Up",
          "value": ""
        },
        {
          "key": "Max Damage Distance",
          "value": "8m"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Dash Speed",
          "value": "15 m/s"
        }
      ]
    },
    {
      "name": "HELIX ADVANCE",
      "slug": "helix-advance",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/d5490ea6-b478-4c97-9ef7-20621038e83e.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/helix-advance.png",
      "properties": [
        {
          "key": "Max Dash Speed",
          "value": "27.5m/s"
        },
        {
          "key": "Max Dash Duration",
          "value": "0.28s"
        },
        {
          "key": "Special Effect",
          "value": "In 6s after unleashing Helix Advance, the next Double-Barrel Blaster becomes Monster-Piercer"
        },
        {
          "key": "Special Effect 2",
          "value": "Every unleash of Ruthless Pursuit and Helix Advance grants 30 bonus health. Max bonus health is 75"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "LIVING BULLET",
      "slug": "living-bullet",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/4931ed8c-267e-4117-bc98-174750ceebdf.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/living-bullet.png",
      "properties": [
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Projectile Damage",
          "value": "60"
        },
        {
          "key": "Special Effect 1",
          "value": "After hits an enemy, the projectile splits to several bullets to trace the enemies in range"
        },
        {
          "key": "Tracing Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Maximum Splits",
          "value": "3"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Effect 2",
          "value": "Projectile deals 40 extra damage to shields and enemies with bonus health"
        },
        {
          "key": "Speed Boost",
          "value": "Increase movement speed by 40% for 1s"
        }
      ]
    },
    {
      "name": "SMOKY SNARE",
      "slug": "smoky-snare",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/a23b9d06-1993-42ec-91af-c2e44696ba07.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/smoky-snare.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Trap Health",
          "value": "100"
        },
        {
          "key": "Maximum Immobilizing Duration",
          "value": "1.2s"
        },
        {
          "key": "Special Effect 1",
          "value": "The trap becomes Invisible and Invulnerable after one-second deployment"
        },
        {
          "key": "Triggered Trap Damage",
          "value": "Cause 5 damage every 0.2s, last 1.2s"
        },
        {
          "key": "Summons' Health",
          "value": "50"
        },
        {
          "key": "Special Effect 2",
          "value": "Defeat the summon to end the Immobolized state early"
        },
        {
          "key": "Special Effect 3",
          "value": "Elsa can dash to the enemy who triggers the trap"
        },
        {
          "key": "Maximum Select Distance",
          "value": "30m"
        },
        {
          "key": "Maximum Dash Duration",
          "value": "0.25s"
        },
        {
          "key": "Maximum Dash Speed",
          "value": "60m/s"
        }
      ]
    },
    {
      "name": "APEX PREDATOR",
      "slug": "apex-predator",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260210/baae636a-b026-4d93-b08f-3185544fbeb3.png",
      "localImgUrl": "/ability_images/elsa-bloodstone/apex-predator.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Glartrox Health",
          "value": "400"
        },
        {
          "key": "Glartrox Seize Damage",
          "value": "75"
        },
        {
          "key": "Glartrox Bite Damage",
          "value": "125"
        },
        {
          "key": "Special Effect 1",
          "value": "Enemies seized by Glartrox cannot use their abilities until it stops moving"
        },
        {
          "key": "Special Effect 2",
          "value": "Elsa can recall Glartrox at any time"
        },
        {
          "key": "Special Effect 3",
          "value": "When the Glartrox collides with terrain, returns, or reaches its maximum dash duration, it bites fiercely, dealing massive damage. If Glartrox is defeated, the bite will not be triggered"
        },
        {
          "key": "Glartrox Movement Speed",
          "value": "15m/s"
        },
        {
          "key": "Glartrox Maximum Dash Duration",
          "value": "Maximum durations for dashing and returning are 3.5s each"
        },
        {
          "key": "Special Effect",
          "value": "Glartrox cannot be critical hit. Drag 8 targets at most"
        }
      ]
    }
  ],
  "DEADPOOL": [
    {
      "name": "DUAL DESERT EAGLES - VANGUARD",
      "slug": "dual-desert-eagles-vanguard",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/612130fb-e64b-45c5-a9fe-536fce19cb0a.png",
      "localImgUrl": "/ability_images/deadpool/dual-desert-eagles-vanguard.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectile."
        },
        {
          "key": "Damage",
          "value": "34 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 15m, decreasing to 50% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "30"
        }
      ]
    },
    {
      "name": "THE BAN HAMMER",
      "slug": "the-ban-hammer",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/2dd26fc5-baa0-418f-8130-fb8e96ff90b4.png",
      "localImgUrl": "/ability_images/deadpool/the-ban-hammer.png",
      "properties": [
        {
          "key": "Damage From Per Ability Missed",
          "value": "35"
        },
        {
          "key": "Bonus Health From Per Ability Missed",
          "value": "60 per ability missed"
        },
        {
          "key": "Ability Duration",
          "value": "8s"
        },
        {
          "key": "Bonus Health Gained Upon Activation",
          "value": "200"
        },
        {
          "key": "Healing Over Time During Activation",
          "value": "25/s"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    },
    {
      "name": "MAGICAL UNICORN SHIELD!",
      "slug": "magical-unicorn-shield",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/fef38c04-fee0-40a5-ad7f-79577aa45743.png",
      "localImgUrl": "/ability_images/deadpool/magical-unicorn-shield.png",
      "properties": [
        {
          "key": "Summons' Health",
          "value": "300"
        },
        {
          "key": "Maximum Duration for Summons",
          "value": "4s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "BUNNY BOUNCE",
      "slug": "bunny-bounce",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/183eb974-55a8-488f-bd08-ef83ad4688e3.png",
      "localImgUrl": "/ability_images/deadpool/bunny-bounce.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Maximum Jump Distance",
          "value": "16m"
        }
      ]
    },
    {
      "name": "HEALING FACTOR",
      "slug": "healing-factor",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/eb588f97-66b2-45b7-b543-88aeaa167a58.png",
      "localImgUrl": "/ability_images/deadpool/healing-factor.png",
      "properties": [
        {
          "key": "Healing over Time",
          "value": "25/s"
        },
        {
          "key": "Healing over Time from Activated Healing Factor",
          "value": "50/s"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        },
        {
          "key": "Special Effect",
          "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
        }
      ]
    },
    {
      "name": "MAXIMUM FLAIR",
      "slug": "maximum-flair",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/fc477704-7f13-4fc9-a949-55a43fd0399a.png",
      "localImgUrl": "/ability_images/deadpool/maximum-flair.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
        }
      ]
    },
    {
      "name": "UPGRADE!",
      "slug": "upgrade",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/8581a805-ffde-468d-9b45-47ea9dc540da.png",
      "localImgUrl": "/ability_images/deadpool/upgrade.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts"
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - VANGUARD",
      "slug": "deadpool-in-your-area-vanguard",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/947a7dad-eb1a-48ae-a028-0c018245d0bd.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-vanguard.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption. Increase left-click attack speed for the duration."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m."
        },
        {
          "key": "Damage Reduction",
          "value": "20%"
        }
      ]
    },
    {
      "name": "KICK@$$ KATANA - VANGUARD",
      "slug": "kick-katana-vanguard",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/cd46d5e0-bd27-47b8-b5af-a50a3ae283e4.png",
      "localImgUrl": "/ability_images/deadpool/kick-katana-vanguard.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "30 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "First strike: 0.6s; second strike: 0.53s; third strike: 0.6s"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        }
      ]
    },
    {
      "name": "THE BIG TEST",
      "slug": "the-big-test",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/01cf36e8-0774-4b0f-96eb-1860e9d8ad4a.png",
      "localImgUrl": "/ability_images/deadpool/the-big-test.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "The challenge lasts 12s. The buff lasts 6s after you complete it."
        },
        {
          "key": "Boost Spell Field Range",
          "value": "6m radius spherical spell field"
        },
        {
          "key": "Bonus Health",
          "value": "Self: 200; allies: 50"
        },
        {
          "key": "Healing over Time",
          "value": "Upon activation: 50/s; challenge completed: 100/s"
        },
        {
          "key": "Movement Boost",
          "value": "Upon activation: 15%; challenge completed: 30%"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    },
    {
      "name": "HAZARDOUS HIJINKS - VANGUARD",
      "slug": "hazardous-hijinks-vanguard",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/bc056ad5-a545-497b-a4b3-296be9f62c3b.png",
      "localImgUrl": "/ability_images/deadpool/hazardous-hijinks-vanguard.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy for up to 2 times."
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Dash Duration",
          "value": "Up to 12m"
        }
      ]
    },
    {
      "name": "BUNNY BOUNCE",
      "slug": "bunny-bounce",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/f83e789b-8ec4-4623-9162-a873b479ada6.png",
      "localImgUrl": "/ability_images/deadpool/bunny-bounce.png",
      "properties": [
        {
          "key": "Maximum Dash Distance",
          "value": "16m"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "HEALING FACTOR",
      "slug": "healing-factor",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/68817e55-2b49-4e4f-9e54-36bc0530574e.png",
      "localImgUrl": "/ability_images/deadpool/healing-factor.png",
      "properties": [
        {
          "key": "Healing over Time",
          "value": "25/s"
        },
        {
          "key": "Healing over Time from Activated Healing Factor",
          "value": "50/s"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        },
        {
          "key": "Special Effect",
          "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
        }
      ]
    },
    {
      "name": "MAXIMUM FLAIR",
      "slug": "maximum-flair",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/1e05f233-ac32-4fe9-b1b8-9c7cd4e165a3.png",
      "localImgUrl": "/ability_images/deadpool/maximum-flair.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated"
        }
      ]
    },
    {
      "name": "UPGRADE!",
      "slug": "upgrade",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/bf797f74-4018-4b36-85d6-89159ea831b4.png",
      "localImgUrl": "/ability_images/deadpool/upgrade.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - VANGUARD",
      "slug": "deadpool-in-your-area-vanguard",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/b4f7983e-98fb-46bb-aabc-c8bb80041553.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-vanguard.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption. Increase left-click attack speed for the duration."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        },
        {
          "key": "Damgae Reduction",
          "value": "20%"
        }
      ]
    },
    {
      "name": "DUAL DESERT EAGLES - VANGUARD UPGRADED",
      "slug": "dual-desert-eagles-vanguard-upgraded",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/9950e177-ed31-4cc3-9dd0-5e81a1ebd0f4.png",
      "localImgUrl": "/ability_images/deadpool/dual-desert-eagles-vanguard-upgraded.png",
      "properties": [
        {
          "key": "Beam Damage",
          "value": "39 damage per round"
        },
        {
          "key": "Beam Attack Interval",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "40"
        },
        {
          "key": "Projectile Attack Interval",
          "value": "After every 5 beam bullets fired, the next shot fires 1 additional projectile"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "25"
        },
        {
          "key": "Spell Field Range",
          "value": "3m radius spherical spell field"
        }
      ]
    },
    {
      "name": "KICK@$$ KATANA - VANGUARD UPGRADED",
      "slug": "kick-katana-vanguard-upgraded",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/bff49308-0b5f-46fc-81ca-46fe94f05f81.png",
      "localImgUrl": "/ability_images/deadpool/kick-katana-vanguard-upgraded.png",
      "properties": [
        {
          "key": "Damage",
          "value": "35 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "First strike: 0.5s; second strike: 0.43s; third strike: 0.5s"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - VANGUARD UPGRADED",
      "slug": "deadpool-in-your-area-vanguard-upgraded",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/dd186638-8506-401f-b1a7-c09436994ad7.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-vanguard-upgraded.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption. Increase left-click attack speed for the duration."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        },
        {
          "key": "Damage Reduction",
          "value": "Self: 30%; allies: 20%"
        }
      ]
    },
    {
      "name": "HAZARDOUS HIJINKS - VANGUARD UPGRADED",
      "slug": "hazardous-hijinks-vanguard-upgraded",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/5477ab5b-877f-48c7-9541-973e67722586.png",
      "localImgUrl": "/ability_images/deadpool/hazardous-hijinks-vanguard-upgraded.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge."
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy for up to 2 times. Deadpool bounces as the ability hits an enemy."
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Dash Duration",
          "value": "Up to 12m"
        }
      ]
    },
    {
      "name": "MAGICAL UNICORN SHIELD! - UPGRADED",
      "slug": "magical-unicorn-shield-upgraded",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/58a98547-303e-4b5d-b0ca-d05be7c951c6.png",
      "localImgUrl": "/ability_images/deadpool/magical-unicorn-shield-upgraded.png",
      "properties": [
        {
          "key": "Summons' Health",
          "value": "400"
        },
        {
          "key": "Maximum Duration for Summons",
          "value": "4s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "THE BIG TEST - UPGRADED",
      "slug": "the-big-test-upgraded",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/917c3099-6c03-40db-a5af-da7bd907b710.png",
      "localImgUrl": "/ability_images/deadpool/the-big-test-upgraded.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "The challenge lasts 12s. The buff lasts 8s after you complete it."
        },
        {
          "key": "Boost Spell Field Range",
          "value": "6m radius spherical spell field"
        },
        {
          "key": "Bonus Health",
          "value": "Self: 300; allies: 50"
        },
        {
          "key": "Healing over Time",
          "value": "Upon activation: 50/s; challenge completed: 100/s"
        },
        {
          "key": "Movement Boost",
          "value": "Upon activation: 15%; challenge completed: 30%"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    },
    {
      "name": "THE BAN HAMMER - UPGRADED",
      "slug": "the-ban-hammer-upgraded",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/944e9d57-7cfe-47fe-97bf-dbda97f0552c.png",
      "localImgUrl": "/ability_images/deadpool/the-ban-hammer-upgraded.png",
      "properties": [
        {
          "key": "Damage From Per Ability Missed",
          "value": "35"
        },
        {
          "key": "Bonus Health From Per Ability Missed",
          "value": "70 per ability missed"
        },
        {
          "key": "Ability Duration",
          "value": "8s"
        },
        {
          "key": "Bonus Health upon Activation",
          "value": "200"
        },
        {
          "key": "Healing During Activation",
          "value": "25/s"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        },
        {
          "key": "Damage Over Time",
          "value": "25/s"
        }
      ]
    },
    {
      "name": "DUAL DESERT EAGLES - DUELIST",
      "slug": "dual-desert-eagles-duelist",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/bbbc1021-c26d-4d45-b504-41fecb1fd329.png",
      "localImgUrl": "/ability_images/deadpool/dual-desert-eagles-duelist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectile"
        },
        {
          "key": "Damage",
          "value": "38 per hit"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 18m, decreasing to 80% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "30"
        }
      ]
    },
    {
      "name": "SKILL ISSUE",
      "slug": "skill-issue",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/32d6d205-925f-4e0b-ba3c-36c29e716545.png",
      "localImgUrl": "/ability_images/deadpool/skill-issue.png",
      "properties": [
        {
          "key": "Damage From Per Ability Missed",
          "value": "60"
        },
        {
          "key": "Ability Duration",
          "value": "8s"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        }
      ]
    },
    {
      "name": "HEADSHOT! - DUELIST",
      "slug": "headshot-duelist",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/fe2d56e5-76f1-440b-b799-f3339fac8787.png",
      "localImgUrl": "/ability_images/deadpool/headshot-duelist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Projectile Damage",
          "value": "Unleash: 30; return: 25"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "15/s"
        },
        {
          "key": "Spell Field Range",
          "value": "4m spherical radius spell field"
        },
        {
          "key": "Spell Field Duration",
          "value": "1s"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "BUNNY HOP",
      "slug": "bunny-hop",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/e30a48d2-58b5-4ea4-9fbf-b0ea4237ce55.png",
      "localImgUrl": "/ability_images/deadpool/bunny-hop.png",
      "properties": [
        {
          "key": "Damage",
          "value": "25"
        },
        {
          "key": "Bonus Health",
          "value": "25, up to 50"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy."
        }
      ]
    },
    {
      "name": "HEALING FACTOR",
      "slug": "healing-factor",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/34f96677-28fa-4445-ba68-7e5553a9452e.png",
      "localImgUrl": "/ability_images/deadpool/healing-factor.png",
      "properties": [
        {
          "key": "Healing over Time",
          "value": "25/s"
        },
        {
          "key": "Healing over Time from Activated Healing Factor",
          "value": "50/s"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        },
        {
          "key": "Special Effect",
          "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
        }
      ]
    },
    {
      "name": "MAXIMUM FLAIR",
      "slug": "maximum-flair",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/f1818cfa-e96d-4f24-9aad-cbf41a68b80d.png",
      "localImgUrl": "/ability_images/deadpool/maximum-flair.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
        }
      ]
    },
    {
      "name": "UPGRADE!",
      "slug": "upgrade",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/b0d6febd-72f5-45ad-8ed4-801c869b8959.png",
      "localImgUrl": "/ability_images/deadpool/upgrade.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - DUELIST",
      "slug": "deadpool-in-your-area-duelist",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/c48ac808-c0fc-40ca-b988-4209f308059b.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-duelist.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Self Damage Reduction",
          "value": "20%"
        },
        {
          "key": "Spell Field Damage",
          "value": "15/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        }
      ]
    },
    {
      "name": "KICK@$$ KATANA - DUELIST",
      "slug": "kick-katana-duelist",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/f441fc76-d37a-495d-bff2-9c8a74fae424.png",
      "localImgUrl": "/ability_images/deadpool/kick-katana-duelist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "40 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "First strike: 0.6s; second strike: 0.53s; third strike: 0.6s"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        }
      ]
    },
    {
      "name": "POP QUIZ!",
      "slug": "pop-quiz",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/ddeac56f-2a2b-458f-a09b-30c02e893bda.png",
      "localImgUrl": "/ability_images/deadpool/pop-quiz.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "The challenge lasts 12s. The buff lasts 6s after you complete it."
        },
        {
          "key": "Healing over Time",
          "value": "Upon activation: 35/s; challenge completed: 70/s"
        },
        {
          "key": "Movement Boost",
          "value": "Upon activation: 15%; challenge completed: 30%"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        }
      ]
    },
    {
      "name": "HAZARDOUS HIJINKS - DUELIST",
      "slug": "hazardous-hijinks-duelist",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/a97263d2-9d7d-4f0e-9846-952d3a8873f2.png",
      "localImgUrl": "/ability_images/deadpool/hazardous-hijinks-duelist.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge."
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy for up to 2 times."
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Dash Duration",
          "value": "Up to 12m"
        }
      ]
    },
    {
      "name": "BUNNY HOP",
      "slug": "bunny-hop",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/61987493-d453-45cc-8f8b-6da0078b21ea.png",
      "localImgUrl": "/ability_images/deadpool/bunny-hop.png",
      "properties": [
        {
          "key": "Damage",
          "value": "25"
        },
        {
          "key": "Bonus Health",
          "value": "25, up to 50"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy or an ally. Transform the next katana base attack to a Stab."
        }
      ]
    },
    {
      "name": "HEALING FACTOR",
      "slug": "healing-factor",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/d6633d77-4996-4afb-9640-29af2ad835f5.png",
      "localImgUrl": "/ability_images/deadpool/healing-factor.png",
      "properties": [
        {
          "key": "Healing over Time",
          "value": "25/s"
        },
        {
          "key": "Healing over Time from Activated Healing Factor",
          "value": "50/s"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        },
        {
          "key": "Special Effect",
          "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
        }
      ]
    },
    {
      "name": "MAXIMUM FLAIR",
      "slug": "maximum-flair",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/13385900-a033-4e64-bf97-f8adac56bbea.png",
      "localImgUrl": "/ability_images/deadpool/maximum-flair.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
        }
      ]
    },
    {
      "name": "UPGRADE!",
      "slug": "upgrade",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/0cf9ba9a-131e-4460-9205-2acfb9fdad48.png",
      "localImgUrl": "/ability_images/deadpool/upgrade.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - DUELIST",
      "slug": "deadpool-in-your-area-duelist",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/68c29f6d-a09c-45e0-8d88-4ee6bd767f6c.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-duelist.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Self Damage Reduction",
          "value": "20%"
        },
        {
          "key": "Spell Field Damage",
          "value": "15/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        }
      ]
    },
    {
      "name": "DUAL DESERT EAGLES - DUELIST UPGRADED",
      "slug": "dual-desert-eagles-duelist-upgraded",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/1225939a-146b-4699-9d72-050fcaa16d4c.png",
      "localImgUrl": "/ability_images/deadpool/dual-desert-eagles-duelist-upgraded.png",
      "properties": [
        {
          "key": "Beam Damage",
          "value": "46 damage per round"
        },
        {
          "key": "Beam Attack Interval",
          "value": "2 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "40"
        },
        {
          "key": "Projectile Attack Interval",
          "value": "After every 5 beam bullets fired, the next shot fires 1 additional projectile"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "25"
        },
        {
          "key": "Spell Field Range",
          "value": "3m radius spherical spell field"
        }
      ]
    },
    {
      "name": "KICK@$$ KATANA - DUELIST UPGRADED",
      "slug": "kick-katana-duelist-upgraded",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/b8b503aa-e398-45a1-8500-698622cc9de4.png",
      "localImgUrl": "/ability_images/deadpool/kick-katana-duelist-upgraded.png",
      "properties": [
        {
          "key": "Damage",
          "value": "45 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "First strike: 0.5s; second strike: 0.43s; third strike: 0.5s"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - DUELIST UPGRADED",
      "slug": "deadpool-in-your-area-duelist-upgraded",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/b43a5885-06d3-4e7f-a65a-862e8b0a75b8.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-duelist-upgraded.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Self Damage Reduction",
          "value": "35%"
        },
        {
          "key": "Spell Field Damage",
          "value": "15/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        }
      ]
    },
    {
      "name": "HAZARDOUS HIJINKS - DUELIST UPGRADED",
      "slug": "hazardous-hijinks-duelist-upgraded",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/6b324b73-b598-456a-9559-b42bf1e77176.png",
      "localImgUrl": "/ability_images/deadpool/hazardous-hijinks-duelist-upgraded.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge."
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy. Deadpool bounces as the ability hits an enemy."
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Dash Duration",
          "value": "Up to 12m"
        }
      ]
    },
    {
      "name": "HEADSHOT! - DUELIST UPGRADED",
      "slug": "headshot-duelist-upgraded",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/edddeceb-fcc3-4937-b3f3-ef12531eaf98.png",
      "localImgUrl": "/ability_images/deadpool/headshot-duelist-upgraded.png",
      "properties": [
        {
          "key": "Projectile Damage",
          "value": "Unleash: 30; return: 25"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "15/s"
        },
        {
          "key": "Third Unleash Explosion Damage",
          "value": "45"
        },
        {
          "key": "Spell Field Duration",
          "value": "First unleash: 1s; second unleash: 1s; third unleash: 2s"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "POP QUIZ! - UPGRADED",
      "slug": "pop-quiz-upgraded",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/83b33337-d2fb-4d39-929e-096c8aa53056.png",
      "localImgUrl": "/ability_images/deadpool/pop-quiz-upgraded.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "The challenge lasts 12s. The buff lasts 8s after you complete it."
        },
        {
          "key": "Healing over Time",
          "value": "Upon activation: 30/s; challenge completed: 60/s"
        },
        {
          "key": "Movement Boost",
          "value": "Upon activation: 15%; challenge completed: 30%"
        },
        {
          "key": "Damage Boost",
          "value": "Upon activation: 15%; challenge completed: 30%"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        }
      ]
    },
    {
      "name": "SKILL ISSUE - UPGRADED",
      "slug": "skill-issue-upgraded",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/05a3bb0c-552b-48d5-9cd0-1f7e1e349923.png",
      "localImgUrl": "/ability_images/deadpool/skill-issue-upgraded.png",
      "properties": [
        {
          "key": "Damage From Per Ability Missed",
          "value": "60"
        },
        {
          "key": "Vulnerability Ration From Ability Missed",
          "value": "10% for each stack. Up to 4 stacks."
        },
        {
          "key": "Ability Duration",
          "value": "8s"
        },
        {
          "key": "Damage Over Time",
          "value": "25/s"
        },
        {
          "key": "Cooldown",
          "value": "45s"
        }
      ]
    },
    {
      "name": "DUAL DESERT EAGLES - STRATEGIST",
      "slug": "dual-desert-eagles-strategist",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/742f6ca8-600f-484d-8675-bac5d7b3788a.png",
      "localImgUrl": "/ability_images/deadpool/dual-desert-eagles-strategist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectile"
        },
        {
          "key": "Damage",
          "value": "25 damage per round"
        },
        {
          "key": "Healing",
          "value": "45 per round"
        },
        {
          "key": "Fire Rate",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "30"
        }
      ]
    },
    {
      "name": "PWNAGE POUND",
      "slug": "pwnage-pound",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/8480f602-9af4-45fd-b52d-1a12f22cb3b8.png",
      "localImgUrl": "/ability_images/deadpool/pwnage-pound.png",
      "properties": [
        {
          "key": "Damage From Per Ability Missed",
          "value": "60"
        },
        {
          "key": "Ability Duration",
          "value": "8s"
        },
        {
          "key": "Healing Over Time",
          "value": "80/s"
        },
        {
          "key": "Healing From Per Ability Missed",
          "value": "80 per ability missed"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    },
    {
      "name": "BOUNCING BOBBLEHEAD - STRATEGIST",
      "slug": "bouncing-bobblehead-strategist",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/5d99dd32-9db1-4810-8b0d-6b760db4bdf7.png",
      "localImgUrl": "/ability_images/deadpool/bouncing-bobblehead-strategist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Projectile Damage",
          "value": "Unleash: 20; return: 20"
        },
        {
          "key": "Projectile Healing",
          "value": "Unleash: 40; return: 40"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Healing",
          "value": "40/s"
        },
        {
          "key": "Spell Field Range",
          "value": "4m spherical radius spell field"
        },
        {
          "key": "Spell Field Duration",
          "value": "1s"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "HEALING HOP",
      "slug": "healing-hop",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/ed8221fc-11a3-48a6-bfe8-03d37528203a.png",
      "localImgUrl": "/ability_images/deadpool/healing-hop.png",
      "properties": [
        {
          "key": "Damage",
          "value": "25"
        },
        {
          "key": "Healing",
          "value": "35"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy or an ally. Transform the next katana base attack to a Stab."
        }
      ]
    },
    {
      "name": "HEALING FACTOR",
      "slug": "healing-factor",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/0ef403ed-dc90-4200-9d01-f46dc30be7e7.png",
      "localImgUrl": "/ability_images/deadpool/healing-factor.png",
      "properties": [
        {
          "key": "Healing over Time",
          "value": "25/s"
        },
        {
          "key": "Healing over Time from Activated Healing Factor",
          "value": "50/s"
        },
        {
          "key": "Cooldown",
          "value": "30s"
        },
        {
          "key": "Special Effect",
          "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
        }
      ]
    },
    {
      "name": "MAXIMUM FLAIR",
      "slug": "maximum-flair",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/aef6ba6f-d996-4c2d-ba9e-ef34a0cc9ddc.png",
      "localImgUrl": "/ability_images/deadpool/maximum-flair.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated."
        }
      ]
    },
    {
      "name": "UPGRADE!",
      "slug": "upgrade",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/18700c8d-3453-49d2-8da7-622b77e22dae.png",
      "localImgUrl": "/ability_images/deadpool/upgrade.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts"
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - STRATEGIST",
      "slug": "deadpool-in-your-area-strategist",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/fa941747-fc9e-4138-af71-9dc6b0fc6a54.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-strategist.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Healing",
          "value": "60/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        }
      ]
    },
    {
      "name": "KICK@$$ KATANA - STRATEGIST",
      "slug": "kick-katana-strategist",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/e091b58b-f4c4-4094-9076-5aa489f85ec6.png",
      "localImgUrl": "/ability_images/deadpool/kick-katana-strategist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "30 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "First strike: 0.6s; second strike: 0.53s; third strike: 0.6s"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "5m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "32"
        }
      ]
    },
    {
      "name": "FINAL EXAM",
      "slug": "final-exam",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/cb9139a3-04c0-41b5-ad70-114a5e5baef5.png",
      "localImgUrl": "/ability_images/deadpool/final-exam.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "The challenge lasts 12s. The buff lasts 6s after you complete it."
        },
        {
          "key": "Healing Amount",
          "value": "Upon activation: 70/s; challenge completed: 100/s"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    },
    {
      "name": "HEALING HIJINKS - STRATEGIST",
      "slug": "healing-hijinks-strategist",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/cbd80a74-aafa-46b2-96c8-645bb247f439.png",
      "localImgUrl": "/ability_images/deadpool/healing-hijinks-strategist.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge."
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Dash Duration",
          "value": "Up to 12m"
        },
        {
          "key": "Healing Amount",
          "value": "45"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "5m spherical radius spell field"
        }
      ]
    },
    {
      "name": "HEALING HOP",
      "slug": "healing-hop",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/d86afade-9135-4cbd-87d0-18d484cf7556.png",
      "localImgUrl": "/ability_images/deadpool/healing-hop.png",
      "properties": [
        {
          "key": "Damage",
          "value": "25"
        },
        {
          "key": "Healing",
          "value": "35"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy or an ally. Transform the next katana base attack to a Stab."
        }
      ]
    },
    {
      "name": "HEALING FACTOR",
      "slug": "healing-factor",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/257f524b-d3e0-438f-b7cc-01b8a2f7efdc.png",
      "localImgUrl": "/ability_images/deadpool/healing-factor.png",
      "properties": [
        {
          "key": "Healing over Time",
          "value": "25/s"
        },
        {
          "key": "Healing over Time from Activated Healing Factor",
          "value": "50/s"
        },
        {
          "key": "Cooldown",
          "value": "30s"
        },
        {
          "key": "Special Effect",
          "value": "The healing factor kicks in after Deadpool has been out of combat for 5s. If Deadpool takes more than 200 damage within a two-second window, the healing factor activates and boosts the healing"
        }
      ]
    },
    {
      "name": "MAXIMUM FLAIR",
      "slug": "maximum-flair",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/7f9679be-20c5-48d5-b232-7ba2172b04b9.png",
      "localImgUrl": "/ability_images/deadpool/maximum-flair.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "The ultimate ability can be unleashed after reaching an S rating. The rating is cleared if Deadpool is defeated"
        }
      ]
    },
    {
      "name": "UPGRADE!",
      "slug": "upgrade",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/d628f429-4396-4fea-89bb-c9367cec8478.png",
      "localImgUrl": "/ability_images/deadpool/upgrade.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Accumulate XP in battle. When maxed, choose an ability to upgrade for powerful boosts."
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - STRATEGIST",
      "slug": "deadpool-in-your-area-strategist",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/10363965-15e5-4296-8132-9732627c1c8f.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-strategist.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Healing",
          "value": "60/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m"
        }
      ]
    },
    {
      "name": "DUAL DESERT EAGLES - STRATEGIST UPGRADED",
      "slug": "dual-desert-eagles-strategist-upgraded",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/78599d08-a3e3-40a7-a163-59e4135f91f9.png",
      "localImgUrl": "/ability_images/deadpool/dual-desert-eagles-strategist-upgraded.png",
      "properties": [
        {
          "key": "Beam Damage",
          "value": "28"
        },
        {
          "key": "Beam Healing",
          "value": "50"
        },
        {
          "key": "Beam Attack Interval",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "40"
        },
        {
          "key": "Projectile Attack Interval",
          "value": "After every 5 beam bullets fired, the next shot fires 1 additional projectile"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Projectile Healing",
          "value": "15"
        },
        {
          "key": "Spell Field Healing",
          "value": "40"
        },
        {
          "key": "Spell Field Damage",
          "value": "20"
        },
        {
          "key": "Spell Field Range",
          "value": "3m radius spherical spell field"
        }
      ]
    },
    {
      "name": "KICK@$$ KATANA - STRATEGIST UPGRADED",
      "slug": "kick-katana-strategist-upgraded",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/351cd1a6-3b7e-4bd8-93b2-8f672d1528c6.png",
      "localImgUrl": "/ability_images/deadpool/kick-katana-strategist-upgraded.png",
      "properties": [
        {
          "key": "Damage",
          "value": "35 per hit"
        },
        {
          "key": "Attack Interval",
          "value": "First strike: 0.5s; second strike: 0.43s; third strike: 0.5s"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "35"
        }
      ]
    },
    {
      "name": "DEADPOOL IN YOUR AREA - STRATEGIST UPGRADED",
      "slug": "deadpool-in-your-area-strategist-upgraded",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/cf86463c-760f-4bbf-9dda-f45465f9872a.png",
      "localImgUrl": "/ability_images/deadpool/deadpool-in-your-area-strategist-upgraded.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Ability Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Disrupt enemies' vision in range and gain XP. Enemies can damage Deadpool to end the disruption."
        },
        {
          "key": "Damage Needed to Remove the Disruption",
          "value": "100"
        },
        {
          "key": "Spell Field Healing",
          "value": "70/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Range",
          "value": "A cylindrical spell field with a 6m radius and a height of 6m."
        },
        {
          "key": "Damage Boost",
          "value": "20%"
        }
      ]
    },
    {
      "name": "HEALING HIJINKS - STRATEGIST UPGRADED",
      "slug": "healing-hijinks-strategist-upgraded",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260114/dec06e87-6750-4796-91bf-a77d08cb8ce9.png",
      "localImgUrl": "/ability_images/deadpool/healing-hijinks-strategist-upgraded.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge."
        },
        {
          "key": "Special Effect",
          "value": "Refresh the cooldown if it hits an enemy for up to 2 times. Deadpool bounces as the ability hits an enemy."
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Dash Duration",
          "value": "Up to 12m"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Healing Amount",
          "value": "55"
        }
      ]
    },
    {
      "name": "BOUNCING BOBBLEHEAD - STRATEGIST UPGRADED",
      "slug": "bouncing-bobblehead-strategist-upgraded",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/a0174fbe-7018-46bf-b960-9b88bbbbf227.png",
      "localImgUrl": "/ability_images/deadpool/bouncing-bobblehead-strategist-upgraded.png",
      "properties": [
        {
          "key": "Projectile Damage",
          "value": "Unleash: 25; return: 20"
        },
        {
          "key": "Projectile Healing",
          "value": "Unleash: 45; return: 30"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "10/s"
        },
        {
          "key": "Spell Field Healing",
          "value": "50/s"
        },
        {
          "key": "Third Unleash Explosion Damage",
          "value": "20"
        },
        {
          "key": "Third Unleash Explosion Healing",
          "value": "70"
        },
        {
          "key": "Spell Field Duration",
          "value": "First unleash: 1s; second unleash: 1s; third unleash: 2s"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "FINAL EXAM - UPGRADED",
      "slug": "final-exam-upgraded",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/070f508b-a481-4fb2-8304-46bd0f690137.png",
      "localImgUrl": "/ability_images/deadpool/final-exam-upgraded.png",
      "properties": [
        {
          "key": "Ability Duration",
          "value": "The challenge lasts 12s. The buff lasts 8s after you complete it."
        },
        {
          "key": "Healing Amount",
          "value": "80/s upon activation; 120/s after completing the challenge"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Bonus Health from Completing the Challenge",
          "value": "300"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    },
    {
      "name": "PWNAGE POUND - UPGRADED",
      "slug": "pwnage-pound-upgraded",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260116/f6c942a1-e1fd-4360-beda-fc4f62ceb0e0.png",
      "localImgUrl": "/ability_images/deadpool/pwnage-pound-upgraded.png",
      "properties": [
        {
          "key": "Damage From Per Ability Missed",
          "value": "60"
        },
        {
          "key": "Ability Duration",
          "value": "8s"
        },
        {
          "key": "Healing Over Time",
          "value": "100/s"
        },
        {
          "key": "Healing From Per Ability Missed",
          "value": "90 per ability missed"
        },
        {
          "key": "Healing Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Cooldown",
          "value": "60s"
        }
      ]
    }
  ],
  "Rogue": [
    {
      "name": "Power Surge Punch",
      "slug": "power-surge-punch",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/60a3fc70-a087-4e74-a818-74f20c3764b6.png",
      "localImgUrl": "/ability_images/rogue/power-surge-punch.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "The first two strikes deal 35 damage, while the third strike deals 45 damage"
        },
        {
          "key": "Maximum Distance",
          "value": "4.5m"
        },
        {
          "key": "Attack Speed",
          "value": "The first two strikes: 0.33s/hit; the third strike: 0.73s/hit"
        }
      ]
    },
    {
      "name": "Defensive Stance",
      "slug": "defensive-stance",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/6df4eb8d-f7ba-4808-8680-073c0f1286af.png",
      "localImgUrl": "/ability_images/rogue/defensive-stance.png",
      "properties": [
        {
          "key": "Damage Reduction",
          "value": "60%"
        },
        {
          "key": "Maximum Energy",
          "value": "100"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "15/s"
        },
        {
          "key": "Energy Consumption",
          "value": "60/s"
        },
        {
          "key": "Energy Required to Activate the Ability",
          "value": "30"
        },
        {
          "key": "Special Effect",
          "value": "The reduced damage transforms into backlash energy that powers up the next Southern Brawl."
        },
        {
          "key": "Reduced Damage-Backlash Energy Conversion Ratio",
          "value": "0.35"
        },
        {
          "key": "Maximum Backlash Energy",
          "value": "100"
        },
        {
          "key": "Maximum Backlash Energy Falloff",
          "value": "20/s"
        }
      ]
    },
    {
      "name": "Southern Brawl",
      "slug": "southern-brawl",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/965eb4f6-cddc-4a8d-8c72-8be39286bc1a.png",
      "localImgUrl": "/ability_images/rogue/southern-brawl.png",
      "properties": [
        {
          "key": "Dash Distance",
          "value": "8m"
        },
        {
          "key": "Base Damage",
          "value": "40"
        },
        {
          "key": "Backlash Energy-Extra Damage Conversion Ratio",
          "value": "0.9"
        },
        {
          "key": "Special Effect",
          "value": "Launch up the enemies hit"
        },
        {
          "key": "Maximum Distance",
          "value": "8m"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Chrono Kick Combo",
      "slug": "chrono-kick-combo",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/f4b1d6b3-447e-47fd-bc18-9585ca699b80.png",
      "localImgUrl": "/ability_images/rogue/chrono-kick-combo.png",
      "properties": [
        {
          "key": "Spell Field Range",
          "value": "Box shaped spell field. Length: 6.5m; Width: 4.5m; Height: 2m"
        },
        {
          "key": "Spell Field Damage",
          "value": "30"
        },
        {
          "key": "Special Effect",
          "value": "Launch up the enemy hit, entering flight. The next two Power Surge Punch attacks become ranged, and Chrono Kick Combo can be unleashed again."
        },
        {
          "key": "Maximum Flight Duration",
          "value": "3s"
        },
        {
          "key": "Knock Down Spell Field Damage",
          "value": "30"
        },
        {
          "key": "Knock Down Spell Field Range",
          "value": "6m radius spherical spell field"
        },
        {
          "key": "Projectile Damage",
          "value": "60"
        },
        {
          "key": "Projectile Speed",
          "value": "100 m/s"
        },
        {
          "key": "Projectile Maximum Flying Distance",
          "value": "20m"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Fatal Attraction",
      "slug": "fatal-attraction",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/922413ba-afba-4475-b0f1-97e46caec2a3.png",
      "localImgUrl": "/ability_images/rogue/fatal-attraction.png",
      "properties": [
        {
          "key": "Dash Distance",
          "value": "10m"
        },
        {
          "key": "Dash Damage",
          "value": "30"
        },
        {
          "key": "Special Effect",
          "value": "Launch up enemies hit"
        },
        {
          "key": "Spreading Spell Field Range",
          "value": "Cylindrical Spell Field with a height of 3m, whose radius will expand to 8m after 0.8s"
        },
        {
          "key": "Spreading Spell Field Damage",
          "value": "40/s"
        },
        {
          "key": "Retrieve Spell Field Damage",
          "value": "30"
        },
        {
          "key": "Cooldown",
          "value": "14s"
        }
      ]
    },
    {
      "name": "Ability Absorption",
      "slug": "ability-absorption",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/20a291b6-507e-4d9b-bd23-b215f1feb887.png",
      "localImgUrl": "/ability_images/rogue/ability-absorption.png",
      "properties": [
        {
          "key": "Dash Distance",
          "value": "10m"
        },
        {
          "key": "Special Effect",
          "value": "Knock down the target. Rogue becomes Unstoppable during the absorption."
        },
        {
          "key": "Absorption Damage Over Time",
          "value": "30/s"
        },
        {
          "key": "Absorption Healing Over Time",
          "value": "60/s"
        },
        {
          "key": "Absorbed Ability Duration",
          "value": "10s"
        },
        {
          "key": "Boost from Vanguard Ability Absorption",
          "value": "125 Maximum Health"
        },
        {
          "key": "Debuff to the Vanguard Absorption Target",
          "value": "Reduce 20 Maximum Health"
        },
        {
          "key": "Boost from Duelist Ability Absorption",
          "value": "20% Damage Boost"
        },
        {
          "key": "Debuff to the Duelist Absorption Target",
          "value": "Reduce 3% damage dealt"
        },
        {
          "key": "Boost from Strategist Ability Absorption",
          "value": "Self healing 20/s"
        },
        {
          "key": "Debuff to the Strategist Absorption Target",
          "value": "Reduce 4% healing dealt"
        },
        {
          "key": "Absorption Process",
          "value": "0.75s"
        },
        {
          "key": "Special Effect",
          "value": "After absorbing, replace Ability Absorption with one of their abilities or refresh Fatal Attraction."
        },
        {
          "key": "Cooldown",
          "value": "25s"
        }
      ]
    },
    {
      "name": "Heartbreaker",
      "slug": "heartbreaker",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251212/c5ba783e-9ca3-436c-bcaa-a1dc284b6355.png",
      "localImgUrl": "/ability_images/rogue/heartbreaker.png",
      "properties": [
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Ultimate Ability Energy Absorption Speed",
          "value": "Absorb 4% of ultimate ability energy per second"
        },
        {
          "key": "Maximum Stats Stolen from Vanguards",
          "value": "400 maximum health"
        },
        {
          "key": "Maximum Stats Stolen from Duelists",
          "value": "35% damage boost"
        },
        {
          "key": "Maximum Stats Stolen from Strategists",
          "value": "Self healing 75/s"
        },
        {
          "key": "Spell Field Range",
          "value": "8m radius spherical spell field"
        },
        {
          "key": "Spell Field Damage",
          "value": "15/s"
        }
      ]
    }
  ],
  "Gambit": [
    {
      "name": "Kinetic Cards",
      "slug": "kinetic-cards",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/803eab7e-6824-40ba-8439-6852d4d13098.png",
      "localImgUrl": "/ability_images/gambit/kinetic-cards.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Cards Launched Per Unleash",
          "value": "3 cards per unleash"
        },
        {
          "key": "Angle Between the Side Cards and the Center Card",
          "value": "2°"
        },
        {
          "key": "Card Damage",
          "value": "20 damage per round"
        },
        {
          "key": "Card Healing",
          "value": "28 health per round"
        },
        {
          "key": "Fire Rate",
          "value": "0.45s per round"
        },
        {
          "key": "Ammo",
          "value": "21"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "60m"
        }
      ]
    },
    {
      "name": "Ragin' Royal Flush",
      "slug": "ragin-royal-flush",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/1dca6707-3f6b-48ef-a180-1f2a6f2f0c6c.png",
      "localImgUrl": "/ability_images/gambit/ragin-royal-flush.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        },
        {
          "key": "Range",
          "value": "Cone shape spell field, angle range: 110°, length: 40m"
        },
        {
          "key": "Special Effect",
          "value": "Gambit and the targeted ally receive the Purify and Jump Boost effect."
        },
        {
          "key": "One-Time Healing",
          "value": "100"
        },
        {
          "key": "Movement Speed Boost Ratio",
          "value": "40%"
        },
        {
          "key": "Enhanced Damage Ratio",
          "value": "25%"
        },
        {
          "key": "Damage Trigger Interval",
          "value": "0.5s"
        },
        {
          "key": "Healing over time",
          "value": "55/s"
        },
        {
          "key": "Ultimate Abilities Charge Acceleration Ratio",
          "value": "20%"
        },
        {
          "key": "Spell Field Duration",
          "value": "8s"
        }
      ]
    },
    {
      "name": "Cajun Charge",
      "slug": "cajun-charge",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/ac36a353-d40b-4511-a13a-27f14a429c04.png",
      "localImgUrl": "/ability_images/gambit/cajun-charge.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 12.5s to recharge."
        },
        {
          "key": "Dash Duration",
          "value": "8m"
        }
      ]
    },
    {
      "name": "Healing Hearts",
      "slug": "healing-hearts",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/6ac2c5f0-a2b1-4c61-9a9d-ad754bf80f8b.png",
      "localImgUrl": "/ability_images/gambit/healing-hearts.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "4 charges, with each charge taking 8s to recharge."
        },
        {
          "key": "Self Healing",
          "value": "Heal 20 health per second within duration"
        },
        {
          "key": "Maximum Duration",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Within the duration, consume one stack of Sleight of Hand to use Bridge Boost and Purifying Pick-Up."
        }
      ]
    },
    {
      "name": "Breaking Spades",
      "slug": "breaking-spades",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/1ef52531-92a7-4f67-8087-c439b12fd268.png",
      "localImgUrl": "/ability_images/gambit/breaking-spades.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "4 charges, with each charge taking 8s to recharge"
        },
        {
          "key": "Self Damage Boost",
          "value": "10%"
        },
        {
          "key": "Maximum Duration",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Within the duration, consume one stack of Sleight of Hand to use Explosive Trick and Bidding Barrage"
        }
      ]
    },
    {
      "name": "Bayou Bash",
      "slug": "bayou-bash",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/c8149d2a-578d-425b-baef-97750a81d644.png",
      "localImgUrl": "/ability_images/gambit/bayou-bash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast spell field that surrounds the caster"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 8s to recharge"
        },
        {
          "key": "Spell Field Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "60"
        },
        {
          "key": "Healing",
          "value": "To allies: 60; self: 60"
        },
        {
          "key": "Big Easy Impact",
          "value": ""
        },
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Dash Distance",
          "value": "12m"
        },
        {
          "key": "Spell Field Generation Quantity",
          "value": "3"
        },
        {
          "key": "Spell Field Generation Interval",
          "value": "0.1"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "25 per field"
        },
        {
          "key": "Healing",
          "value": "To allies and self: 15/hit"
        }
      ]
    },
    {
      "name": "Bridge Boost",
      "slug": "bridge-boost",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/c698518d-fcb9-49f7-88e4-6a0fdef24189.png",
      "localImgUrl": "/ability_images/gambit/bridge-boost.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory."
        },
        {
          "key": "Special Effect",
          "value": "The projectile automatically tracks allies and will bounce between allies on impact. Bridge Boost bounces on a single target are set to a maximum of 2"
        },
        {
          "key": "Projectile Speed",
          "value": "120m/s"
        },
        {
          "key": "Max Number of Ricochets",
          "value": "6"
        },
        {
          "key": "Healing",
          "value": "50 damage per round"
        },
        {
          "key": "Healing Boost Ratio",
          "value": "0.15"
        },
        {
          "key": "Duration",
          "value": "4s"
        }
      ]
    },
    {
      "name": "Purifying Pick-Up",
      "slug": "purifying-pick-up",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/4721ac14-6de6-4a2c-ad41-41f66bcf60ef.png",
      "localImgUrl": "/ability_images/gambit/purifying-pick-up.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that generates a spell field upon impact."
        },
        {
          "key": "Number of Generated Projectiles",
          "value": "10"
        },
        {
          "key": "Projectile Speed",
          "value": "100 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "15m"
        },
        {
          "key": "Spell Field Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Spell Field Healing",
          "value": "70 per field"
        },
        {
          "key": "Special Effect",
          "value": "The spell field applies Purify to allies upon impact. This can take effect on allies a maximum of 2 times and on himself once."
        }
      ]
    },
    {
      "name": "Explosive Trick",
      "slug": "explosive-trick",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/fd0e01ed-c52f-47c1-bfcf-cf6f21d7489f.png",
      "localImgUrl": "/ability_images/gambit/explosive-trick.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "Spell Field Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "70"
        },
        {
          "key": "Reduced Healing Ratio",
          "value": "0.25"
        },
        {
          "key": "Reduced Healing Duration",
          "value": "4s"
        }
      ]
    },
    {
      "name": "Bidding Barrage",
      "slug": "bidding-barrage",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251114/5b36fc07-c4e6-496a-9944-efb824adfe0f.png",
      "localImgUrl": "/ability_images/gambit/bidding-barrage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that generates a spell field upon impact"
        },
        {
          "key": "Number of Projectiles",
          "value": "10"
        },
        {
          "key": "Projectile Speed",
          "value": "100 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "15m"
        },
        {
          "key": "Spell Field Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "70"
        },
        {
          "key": "Special Effect",
          "value": "Launch enemies up on hit, which can take effect only once."
        }
      ]
    }
  ],
  "Daredevil": [
    {
      "name": "JUSTICE JAB",
      "slug": "justice-jab",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/9a0c9bf6-2e70-4a7a-8aac-92e1a9691ecb.png",
      "localImgUrl": "/ability_images/daredevil/justice-jab.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "35"
        },
        {
          "key": "Maximum Distance",
          "value": "4.5m"
        },
        {
          "key": "Special Effect",
          "value": "Gain 15 Fury on hit"
        }
      ]
    },
    {
      "name": "RIGHTEOUS CROSS",
      "slug": "righteous-cross",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/ee03f218-5394-415f-b11a-3a4858128d81.png",
      "localImgUrl": "/ability_images/daredevil/righteous-cross.png",
      "properties": [
        {
          "key": "Maximum Dash Distance",
          "value": "6m"
        },
        {
          "key": "Spell Field Damage",
          "value": "50"
        },
        {
          "key": "Spell Field Maximum Distance",
          "value": "6m"
        },
        {
          "key": "Special Effect",
          "value": "Gain 15 Fury on hit"
        }
      ]
    },
    {
      "name": "OBJECTION!",
      "slug": "objection",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/0d23a7fb-886a-4f9c-91ef-22eddd0352a9.png",
      "localImgUrl": "/ability_images/daredevil/objection.png",
      "properties": [
        {
          "key": "Duration",
          "value": "1.5s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Special Effect",
          "value": "Block frontal damage and reflect projectiles, becoming immune to all incoming harm during this stance. Gain 60 Fury when successfully blocking an attack."
        }
      ]
    },
    {
      "name": "DEVIL'S LATCH",
      "slug": "devils-latch",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/39ffe656-8f28-43c4-be3d-cc79ed2df6a5.png",
      "localImgUrl": "/ability_images/daredevil/devils-latch.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "12"
        },
        {
          "key": "Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Projectile Speed",
          "value": "180m/s"
        },
        {
          "key": "Special Effect",
          "value": "Enable Righteous Cross within 5 seconds after using this ability. Gain 30 Fury"
        }
      ]
    },
    {
      "name": "INFERNAL FURY",
      "slug": "infernal-fury",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/e0e39493-ba93-4947-a38f-7d86f314b48b.png",
      "localImgUrl": "/ability_images/daredevil/infernal-fury.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "During the activation, Daredevil can unleash Devil's Chain or Devil's Throw. Enable Righteous Cross within 5 seconds after using this ability"
        },
        {
          "key": "Fury Required for Activation",
          "value": "60"
        },
        {
          "key": "Bonus Max Health",
          "value": "100"
        },
        {
          "key": "Bonus Health Falloff",
          "value": "Falloff begins at 5s and decreases by 30/s"
        },
        {
          "key": "DEVIL'S CHAIN",
          "value": ""
        },
        {
          "key": "Spell Field Range",
          "value": "Box shaped spell field. Length: 8m; Width: 4m; Height: 4m"
        },
        {
          "key": "High Damage Spell Field Range",
          "value": "2m spherical radius spell field at the end"
        },
        {
          "key": "Damage/Bonus Health Conversion",
          "value": "0.7"
        },
        {
          "key": "Bonus Health Gained",
          "value": "25"
        },
        {
          "key": "Damage",
          "value": "40. Cause 65 damage when the target caught in the high damage range"
        },
        {
          "key": "DEVIL'S THROW",
          "value": ""
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Projectile Damage",
          "value": "30"
        },
        {
          "key": "Max Number of Ricochets",
          "value": "4. Up to 2 ricochets if there are no targets"
        },
        {
          "key": "Special Effect",
          "value": "Devil's Throw slows enemies on hit"
        },
        {
          "key": "Slow Rate",
          "value": "20%"
        },
        {
          "key": "Bonus Health Gained",
          "value": "50"
        }
      ]
    },
    {
      "name": "Sonic Pursuit",
      "slug": "sonic-pursuit",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/041a40d0-92c7-4a69-9ddd-92af7dbaf73f.png",
      "localImgUrl": "/ability_images/daredevil/sonic-pursuit.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "2.1m/s. Falloff begins at 10m away from the target, decreasing to 0.9m/s at 40m from the target"
        },
        {
          "key": "Self Damage Reduction",
          "value": "10%"
        },
        {
          "key": "Select Range",
          "value": "40m"
        },
        {
          "key": "Dash Cooldown",
          "value": "15s"
        },
        {
          "key": "Dash Select Range",
          "value": "20m"
        },
        {
          "key": "Max Dash Speed",
          "value": "100m/s"
        },
        {
          "key": "Dash Damage Range",
          "value": "1m spherical radius spell field"
        },
        {
          "key": "Dash Damage",
          "value": "20"
        },
        {
          "key": "Special Effect",
          "value": "If Daredevil defeats the target, refresh the cooldown. Gain 60 Fury after the dash"
        }
      ]
    },
    {
      "name": "RADAR SENSE",
      "slug": "radar-sense",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/1dd21aa7-df86-4264-9861-76e20570a272.png",
      "localImgUrl": "/ability_images/daredevil/radar-sense.png",
      "properties": [
        {
          "key": "Maximum Detection Distance",
          "value": "50m"
        }
      ]
    },
    {
      "name": "BLIND ASCENT",
      "slug": "blind-ascent",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/ce9cbf4e-0c10-4fbe-bd57-af7eada7b84e.png",
      "localImgUrl": "/ability_images/daredevil/blind-ascent.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "10 m/s"
        }
      ]
    },
    {
      "name": "LET THE DEVIL OUT",
      "slug": "let-the-devil-out",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251010/0aa73672-4753-4c5d-9f39-e501bd6dbbae.png",
      "localImgUrl": "/ability_images/daredevil/let-the-devil-out.png",
      "properties": [
        {
          "key": "Time Required to Reach the Maximum Blind Range and Damage",
          "value": "3s"
        },
        {
          "key": "Spell Field Duration",
          "value": "8s"
        },
        {
          "key": "Maximum Distance",
          "value": "15m"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Damage",
          "value": "50/s. Cause 85 damage per second when reaching the max damage"
        },
        {
          "key": "Blind Effect",
          "value": "Visual range 35m, decreasing to 10m when the Blind effect reaches its maximum"
        },
        {
          "key": "Fury Recovery Speed",
          "value": "30/s"
        }
      ]
    }
  ],
  "ANGELA": [
    {
      "name": "Spear of Ichors",
      "slug": "spear-of-ichors",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/5a3ec9ee-6a3b-44ac-b64c-ebb34f28c425.png",
      "localImgUrl": "/ability_images/angela/spear-of-ichors.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "45"
        },
        {
          "key": "Charge-Damage Conversion Ratio",
          "value": "35%"
        },
        {
          "key": "Maximum Distance",
          "value": "7m"
        },
        {
          "key": "Attack Interval",
          "value": "0.96s per hit"
        },
        {
          "key": "Special Effect",
          "value": "At full charge, Spear of Ichor can launch up enemies and cause 20 extra damage."
        }
      ]
    },
    {
      "name": "Axes Of Ichors",
      "slug": "axes-of-ichors",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/6e3c4ad4-32a2-4140-83f3-03e236885da2.png",
      "localImgUrl": "/ability_images/angela/axes-of-ichors.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "First three strikes: 30; the forth strike: 50."
        },
        {
          "key": "Charge-Damage Conversion Ratio",
          "value": "45%"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        },
        {
          "key": "Attack Interval",
          "value": "First three strikes: 0.4s per hit; the forth strike: 0.6s per hit."
        },
        {
          "key": "Special Effect",
          "value": "The fourth strike propels you forward in a swift dash."
        }
      ]
    },
    {
      "name": "SHIELDED STANCE",
      "slug": "shielded-stance",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/89c12b85-cd4c-4d3e-a6b8-b628c6de8eba.png",
      "localImgUrl": "/ability_images/angela/shielded-stance.png",
      "properties": [
        {
          "key": "Maximum Shield Value",
          "value": "300"
        },
        {
          "key": "Cooldown",
          "value": "1.5s"
        },
        {
          "key": "Cooldown After Destroyed",
          "value": "4s"
        },
        {
          "key": "Delayed Recovery After Release",
          "value": "2s"
        },
        {
          "key": "Recovery Speed",
          "value": "50/s"
        },
        {
          "key": "Damage Resisted-Charge Conversion Ratio",
          "value": "35%"
        }
      ]
    },
    {
      "name": "Seraphic Soar",
      "slug": "seraphic-soar",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/06ebb164-e0fe-494a-bfe9-58c81de0d369.png",
      "localImgUrl": "/ability_images/angela/seraphic-soar.png",
      "properties": [
        {
          "key": "Time Required to Enter Glide",
          "value": "0.1s"
        },
        {
          "key": "Glide Activation Condition",
          "value": "Maintain the forward speed faster than 5m/s for 1s"
        },
        {
          "key": "Glide Speed",
          "value": "10m/s"
        },
        {
          "key": "Passive Energy Gained During Glide",
          "value": "22.2/s"
        }
      ]
    },
    {
      "name": "Divine Judgement",
      "slug": "divine-judgement",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/4738a04f-deef-40f5-9e53-51c71b8dcaa7.png",
      "localImgUrl": "/ability_images/angela/divine-judgement.png",
      "properties": [
        {
          "key": "Damage",
          "value": "Hit damage: 30; damage over time: 12.5/s"
        },
        {
          "key": "Damage Over Time Spell Field Range",
          "value": "A cylindrical spell field with a radius of 8m and a height of 2m."
        },
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Movement Boost (Self)",
          "value": "35%"
        },
        {
          "key": "Spell Field Duration",
          "value": "6s"
        },
        {
          "key": "Bonus Health",
          "value": "Within the Divine Judgement zone, Angela’s each Axes of Ichors hit grants 50 Bonus Health to herself and 25 Bonus Health to allies within the area."
        },
        {
          "key": "Bonus Max Health",
          "value": "200"
        }
      ]
    },
    {
      "name": "Wingblade Ascent",
      "slug": "wingblade-ascent",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/32ac3b89-8941-4ee9-9b81-fd14fdfff36b.png",
      "localImgUrl": "/ability_images/angela/wingblade-ascent.png",
      "properties": [
        {
          "key": "Ascent Height",
          "value": "8m"
        },
        {
          "key": "Ascent Duration",
          "value": "0.35s"
        },
        {
          "key": "Ascent Elevation Angle",
          "value": "60°"
        }
      ]
    },
    {
      "name": "Assassin's Charge",
      "slug": "assassins-charge",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/dc923ca4-e2a4-4448-92e0-cae6d029e5f1.png",
      "localImgUrl": "/ability_images/angela/assassins-charge.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Maximum Energy",
          "value": "100"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "12.5/s"
        },
        {
          "key": "Energy Cost",
          "value": "25/s; 75/s when piercing an enemy"
        },
        {
          "key": "One-time Energy Cost",
          "value": "20"
        },
        {
          "key": "Energy Required to Activate the Ability",
          "value": "30"
        },
        {
          "key": "Recover Delay",
          "value": "2"
        },
        {
          "key": "Dash State Speed",
          "value": "18 m/s"
        },
        {
          "key": "Maximum Enemies Could Be Carried",
          "value": "2"
        },
        {
          "key": "Passive Energy Gained During the Dash",
          "value": "25/s"
        },
        {
          "key": "Special Effect",
          "value": "Every enemy pierced grants Angela with a 50/s passive energy recovery."
        },
        {
          "key": "Piercing Damage",
          "value": "30"
        }
      ]
    },
    {
      "name": "Heven's Retribution",
      "slug": "hevens-retribution",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250911/0240ecc1-d434-46cc-82ba-abdae0c275ef.png",
      "localImgUrl": "/ability_images/angela/hevens-retribution.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Spell Field Damage",
          "value": "40"
        },
        {
          "key": "Spell Field Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Hit Ground Damage",
          "value": "100"
        },
        {
          "key": "HIt Ground Spell Field Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Special Effect",
          "value": "Mobility abilities of enemies bound by the ribbons will be disabled. Enemies within a certain distance around the spear will be slowed."
        },
        {
          "key": "Slow Rate",
          "value": "80%"
        },
        {
          "key": "Projectile Damage",
          "value": "30"
        },
        {
          "key": "SUMMONS' HEALTH",
          "value": "650"
        }
      ]
    }
  ],
  "BLADE": [
    {
      "name": "Ancestral Sword",
      "slug": "ancestral-sword",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250808/7fbc426f-d5a0-4566-9d1f-00f79ad25bc3.png",
      "localImgUrl": "/ability_images/blade/ancestral-sword.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "Cause 26 damage per single slash; double strike cause 13 damage per hit"
        },
        {
          "key": "Maximum Distance",
          "value": "5m"
        },
        {
          "key": "Attack Interval",
          "value": "2 strikes per second"
        }
      ]
    },
    {
      "name": "Hunter's Shotgun",
      "slug": "hunters-shotgun",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250808/2b532b79-61a8-4300-98a8-5cbaa4f5a29b.png",
      "localImgUrl": "/ability_images/blade/hunters-shotgun.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory, which breaks into shrapnel after reaching a certain distance"
        },
        {
          "key": "Initial Projectile Maximum Distance",
          "value": "8m"
        },
        {
          "key": "Initial Projectile Speed",
          "value": "180 m/s"
        },
        {
          "key": "Initial Projectile Damage",
          "value": "45"
        },
        {
          "key": "Shrapnel Amount",
          "value": "11"
        },
        {
          "key": "Damage per Shrapnel Hit",
          "value": "8"
        },
        {
          "key": "Shrapnel Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "Shrapnel Damage Falloff",
          "value": "Falloff begins at 15m, decreasing to 50% at 30m"
        }
      ]
    },
    {
      "name": "Scarlet Shroud",
      "slug": "scarlet-shroud",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250808/38dda78b-768c-421d-a971-772db41ee3dd.png",
      "localImgUrl": "/ability_images/blade/scarlet-shroud.png",
      "properties": [
        {
          "key": "Maximum Energy",
          "value": "120"
        },
        {
          "key": "Energy Cost",
          "value": "60/s"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "15/s"
        },
        {
          "key": "Activation Cost",
          "value": "15"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        },
        {
          "key": "Unstoppable Duration",
          "value": "0.4s after activation"
        },
        {
          "key": "Damage Reduction",
          "value": "80%"
        },
        {
          "key": "Special Effect",
          "value": "Every 200 damage resisted grants 1 charge for Daywalker Dash"
        }
      ]
    },
    {
      "name": "Bloodline Awakening",
      "slug": "bloodline-awakening",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250808/407381d7-9280-4cfc-9f6e-2dac3d07e0ce.png",
      "localImgUrl": "/ability_images/blade/bloodline-awakening.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Left Click/Shift key ability hits accumulate attack speed buff levels; within the Bloodline Awakening duration, attacks gain Lifesteal and movement speed boost but suffer Reduced Healing"
        },
        {
          "key": "Lifesteal Proportion",
          "value": "70%, Affected by Healing Reduction"
        },
        {
          "key": "Self Reduce Healing Proportion",
          "value": "25%"
        },
        {
          "key": "Movement Speed Boost",
          "value": "1.5 m/s"
        },
        {
          "key": "Max Attack Speed Boost Buff Stack",
          "value": "10"
        },
        {
          "key": "Left Click Hit Buff Stack",
          "value": "1"
        },
        {
          "key": "Shift Hit Buff Stack",
          "value": "5"
        },
        {
          "key": "Attack Speed Boost Proportion from Each Buff Stack",
          "value": "10%"
        },
        {
          "key": "Duration of Each Buff Stack",
          "value": "1s"
        },
        {
          "key": "Whirlwind Slash Damage",
          "value": "64"
        },
        {
          "key": "Hits to Trigger the Whirlwind Slash",
          "value": "5"
        },
        {
          "key": "Special Effect",
          "value": "Landing all four hits of Whirlwind Slash grants 1 slash speed stack; Excess lifesteal grants Bonus Health( max 75; conversion rate 50%)"
        }
      ]
    },
    {
      "name": "Daywalker Dash",
      "slug": "daywalker-dash",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250808/317a7483-cdd2-4114-9fed-861f7973e7cf.png",
      "localImgUrl": "/ability_images/blade/daywalker-dash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash. Cause damage and special effects to the enemies hit"
        },
        {
          "key": "Dash Distance",
          "value": "15m"
        },
        {
          "key": "Damage",
          "value": "20"
        },
        {
          "key": "Special Effect",
          "value": "Hit while wielding the gun, inflict Slow effect to the enemy; hit while wielding the sword,  deal Healing Reduction to the enemy"
        },
        {
          "key": "Healing Reduction Proportion",
          "value": "apply 8% Healing Reduction per strike (32% total if all hit)"
        },
        {
          "key": "Healing Reduction Duration",
          "value": "4s"
        },
        {
          "key": "Slow Rate",
          "value": "40%"
        },
        {
          "key": "Slow Duration",
          "value": "1.5s"
        },
        {
          "key": "Gun Second Hit Damage",
          "value": "50"
        },
        {
          "key": "Sword Second Hit Damage",
          "value": "8 per hit, 4 hits in total"
        },
        {
          "key": "Second Hit Damage Range",
          "value": "6.5m"
        }
      ]
    },
    {
      "name": "Thousand-Fold Slash",
      "slug": "thousand-fold-slash",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250808/76a3bf21-fa7d-46b9-af37-db2c078fda6f.png",
      "localImgUrl": "/ability_images/blade/thousand-fold-slash.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "2800"
        },
        {
          "key": "Self Slow",
          "value": "25%"
        },
        {
          "key": "Maximum Charge Time",
          "value": "3s"
        },
        {
          "key": "Charge time for max distance",
          "value": "1s"
        },
        {
          "key": "Dash Distance",
          "value": "10m, maximum distance 24m after fully charged."
        },
        {
          "key": "Direct Hit Damage",
          "value": "100"
        },
        {
          "key": "Spell Field Damage Over Time",
          "value": "225/s"
        },
        {
          "key": "Spell Field Range",
          "value": "Length: Maximum dash distance; Width: 6m; Height: 4.5m"
        },
        {
          "key": "Spell Field Duration",
          "value": "2s"
        },
        {
          "key": "Healing Reduction Proportion",
          "value": "20%"
        },
        {
          "key": "Healing Reduction Duration",
          "value": "4s"
        }
      ]
    }
  ],
  "PHOENIX": [
    {
      "name": "Cosmic Flames",
      "slug": "cosmic-flames",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250710/e458821f-fbdc-4505-8407-0eafe85f5a22.png",
      "localImgUrl": "/ability_images/phoenix/cosmic-flames.png",
      "properties": [
        {
          "key": "Damage",
          "value": "55"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 10m, decreasing to 75% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "0.435s per round"
        },
        {
          "key": "Special Effect",
          "value": "Apply 1 Spark to enemies hit. Critical hits apply 2 Sparks. At 3 Sparks, Phoenix triggers a fiery explosion that applies 1 Spark to enemies around. Sparks from explosions will not stack within a brief period."
        },
        {
          "key": "Explosion Direct Damage",
          "value": "35"
        },
        {
          "key": "Explosion Range Damage",
          "value": "12"
        },
        {
          "key": "Explosion Range",
          "value": "4m spherical radius spell field"
        },
        {
          "key": "Self Healing Amount after the Explosion",
          "value": "10/s for 4 s"
        }
      ]
    },
    {
      "name": "Telekinesis Burst",
      "slug": "telekinesis-burst",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250710/986f26e7-7141-4dc9-90ac-acff1b8c380a.png",
      "localImgUrl": "/ability_images/phoenix/telekinesis-burst.png",
      "properties": [
        {
          "key": "Target Explosion Damage",
          "value": "20"
        },
        {
          "key": "Target Explosion Range",
          "value": "A cylindrical spell field with a 2m radius and a height of 4m."
        },
        {
          "key": "Subsequent Explosion Damage",
          "value": "20"
        },
        {
          "key": "Subsequent Explosion Range",
          "value": "A cylindrical spell field with a 3m radius and a height of 6m."
        },
        {
          "key": "Special Effect",
          "value": "The first blast Stuns enemies, while the subsequent two explosions inflict Slow."
        },
        {
          "key": "Stun Duration",
          "value": "0.3s"
        },
        {
          "key": "Slow Effect",
          "value": "Inflict 30% Slow for 2 seconds."
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Dark Ascent",
      "slug": "dark-ascent",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250710/7ef4eae3-1354-41eb-ac11-0fefbcd96808.png",
      "localImgUrl": "/ability_images/phoenix/dark-ascent.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Enter a state of free flight within the duration. Gain a 50% Movement Boost"
        },
        {
          "key": "Cooldown",
          "value": "1s"
        },
        {
          "key": "Maximum Energy",
          "value": "1200"
        },
        {
          "key": "Energy Cost",
          "value": "400/s"
        },
        {
          "key": "Energy Recovery",
          "value": "120/s"
        }
      ]
    },
    {
      "name": "Telepathic Illusion",
      "slug": "telepathic-illusion",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250710/18388d22-1918-4cfe-98e3-7a59f701b1a6.png",
      "localImgUrl": "/ability_images/phoenix/telepathic-illusion.png",
      "properties": [
        {
          "key": "Dash Distance",
          "value": "8m"
        },
        {
          "key": "Detonation Damage",
          "value": "50"
        },
        {
          "key": "Detonation Range",
          "value": "3m spherical radius spell field"
        },
        {
          "key": "Special Effect",
          "value": "The detonation applies 1 Spark to enemies hit."
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Endsong Inferno",
      "slug": "endsong-inferno",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250710/4a733ade-7bcc-4152-b3e7-3dc01bfcdb06.png",
      "localImgUrl": "/ability_images/phoenix/endsong-inferno.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Explosion Damage",
          "value": "140"
        },
        {
          "key": "Explosion Range",
          "value": "10m spherical radius spell field"
        },
        {
          "key": "Shockwave Damage",
          "value": "50"
        },
        {
          "key": "Summons' Health",
          "value": "500"
        },
        {
          "key": "Special Effect",
          "value": "The shockwave destroys enemy summons, shields, and any Bonus Health. Enemies hit by the spell field and the shockwave are applied with 1 Spark."
        },
        {
          "key": "Self Healing Amount",
          "value": "250"
        }
      ]
    }
  ],
  "Ultron": [
    {
      "name": "ENCEPHALO-RAY",
      "slug": "encephalo-ray",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250529/71627fa8-a6b2-4c24-b4f3-8cf7f0a195d3.png",
      "localImgUrl": "/ability_images/ultron/encephalo-ray.png",
      "properties": [
        {
          "key": "Casting",
          "value": "First constant beam; Second single-cast cylindrical spell field"
        },
        {
          "key": "Ammo",
          "value": "6"
        },
        {
          "key": "Damage",
          "value": "First beam 6 rounds in 0.5s, 12 per hit; second single-cast spell field 75 per hit"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 75% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "1.58s per round"
        }
      ]
    },
    {
      "name": "IMPERATIVE: FIREWALL",
      "slug": "imperative-firewall",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250529/da4eebd7-8dfc-406f-adaf-d02ea613d493.png",
      "localImgUrl": "/ability_images/ultron/imperative-firewall.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Bonus Health to Ultron",
          "value": "65"
        },
        {
          "key": "Bonus Health to allies near Ultron and the drones",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Range",
          "value": "8m spherical radius spell field"
        },
        {
          "key": "Bonus Health Falloff Begins at",
          "value": "3s"
        },
        {
          "key": "Bonus Health Falloff Speed",
          "value": "40/s"
        },
        {
          "key": "Special Effect",
          "value": "Grant bonus health to Ultron and Allies within range, centered around Ultron and the drones; the selected ally gains a 20% Movement Speed and 10% Damage boost"
        }
      ]
    },
    {
      "name": "IMPERATIVE: PATCH",
      "slug": "imperative-patch",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250529/dd94b605-3f0c-4bfc-9fc5-c16ac7b53da2.png",
      "localImgUrl": "/ability_images/ultron/imperative-patch.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Target Distance",
          "value": "25m"
        },
        {
          "key": "Healing Amount to the Targeted ally",
          "value": "35/s"
        },
        {
          "key": "Healing Amount to other allies within range",
          "value": "30/s"
        },
        {
          "key": "Drone Healing Range",
          "value": "8m spherical radius spell field"
        },
        {
          "key": "Maximum Vision",
          "value": "35m"
        },
        {
          "key": "Max Tolerance Duration out of Sight",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "Imperative: Patch can deploy up to 2 drones, allowing support for two allies at once"
        }
      ]
    },
    {
      "name": "DYNAMIC FLIGHT",
      "slug": "dynamic-flight",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250529/720ff240-78c6-49fa-92ba-fa695e6b0635.png",
      "localImgUrl": "/ability_images/ultron/dynamic-flight.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Special Effect",
          "value": "Dynamic Flight can trigger a one-time dash followed by an constant accelerated effect."
        },
        {
          "key": "Dash Direction",
          "value": "Reticle direction combined with key input"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Dash Distance",
          "value": "12m"
        },
        {
          "key": "Accelerate Duration",
          "value": "6s"
        },
        {
          "key": "Movement Boost",
          "value": "40%"
        },
        {
          "key": "Bonus Health (Self)",
          "value": "50"
        }
      ]
    },
    {
      "name": "RAGE OF ULTRON",
      "slug": "rage-of-ultron",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250529/4768132e-a560-432e-aa8b-b7fc01d321d9.png",
      "localImgUrl": "/ability_images/ultron/rage-of-ultron.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact."
        },
        {
          "key": "Projectile Speed",
          "value": "120m/s"
        },
        {
          "key": "Beam Damage",
          "value": "Ultron's Encephalo-Rays 18, Drone's Encephalo-Rays 12"
        },
        {
          "key": "Damage Falloff",
          "value": "Starts at 1.5m after Encephalo-Rays explode, with a max falloff to 50% at 3m"
        },
        {
          "key": "Beam Healing Amount",
          "value": "40"
        },
        {
          "key": "Total Ray Amount",
          "value": "5"
        },
        {
          "key": "Ray Amount per Shot",
          "value": "5"
        },
        {
          "key": "Fire Interval Between Shots",
          "value": "0.2s"
        },
        {
          "key": "Ultimate Total Fire Rounds",
          "value": "5 rounds"
        },
        {
          "key": "Fire Interval Between Rounds",
          "value": "0.5s"
        },
        {
          "key": "Spell Field Range",
          "value": "3m spherical radius spell field"
        },
        {
          "key": "Duration",
          "value": "9s"
        },
        {
          "key": "Energy Cost",
          "value": "4000"
        },
        {
          "key": "Ultimate Self-healing",
          "value": "50/s"
        },
        {
          "key": "Special Effect",
          "value": "Within the ultimate duration, Ultron grants an Unstoppable effect; Deals 125% damage to Bonus Health"
        }
      ]
    }
  ],
  "Emma Frost": [
    {
      "name": "TELEPATHIC PULSE",
      "slug": "telepathic-pulse",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/af9f583d-3891-4929-afe5-f41651b71edb.png",
      "localImgUrl": "/ability_images/emma-frost/telepathic-pulse.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Channeled"
        },
        {
          "key": "Ammo",
          "value": "70"
        },
        {
          "key": "Damage",
          "value": "Damage increases with energy: 0 - 70/s, 99 - 110/s, full energy - 140/s"
        },
        {
          "key": "Attack Range",
          "value": "18m"
        },
        {
          "key": "Ammo Consumption",
          "value": "10/s"
        },
        {
          "key": "Special Effect",
          "value": "Energy gain: Hero hit: 12/s; Sentience hit: 18/s; Common summons hit: 5/s; Shield hit: 6/s. Falloff begins 4s after not hitting an enemy, at a rate of 30/s"
        }
      ]
    },
    {
      "name": "MIND'S AEGIS",
      "slug": "minds-aegis",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/32c4bdf3-c6de-4131-b202-db95bbd1fc07.png",
      "localImgUrl": "/ability_images/emma-frost/minds-aegis.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Deployable Shield"
        },
        {
          "key": "Maximum Shield Value",
          "value": "400"
        },
        {
          "key": "Recovery Speed",
          "value": "80/s"
        },
        {
          "key": "Delayed Recovery After Release",
          "value": "2s"
        },
        {
          "key": "Reposition Cooldown",
          "value": "1s"
        },
        {
          "key": "Cooldown After Destroyed",
          "value": "4s"
        }
      ]
    },
    {
      "name": "PSYCHIC SPEAR",
      "slug": "psychic-spear",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/091083f4-aa98-4bf7-8b9e-318798ee4939.png",
      "localImgUrl": "/ability_images/emma-frost/psychic-spear.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast delayed projectile"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "24m"
        },
        {
          "key": "Sentience Health",
          "value": "Target's 25% Current Health"
        },
        {
          "key": "Damage",
          "value": "Deal 5 damage per direct hit. When the sentience shatters, it deals damage to the target, which is equal to 25% of the target's maximum health"
        },
        {
          "key": "Special Effect",
          "value": "When the distance between the target and its sentience is more than 15m, their linkage can be broken"
        }
      ]
    },
    {
      "name": "DIAMOND FORM",
      "slug": "diamond-form",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/139006e1-78e5-443f-9b1e-271c3f6bc276.png",
      "localImgUrl": "/ability_images/emma-frost/diamond-form.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Switch Form"
        },
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "25% Damage Reduction in Diamond form"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "FACETED FURY",
      "slug": "faceted-fury",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/a5598975-b4ab-49a5-b99c-a9a4d044f37c.png",
      "localImgUrl": "/ability_images/emma-frost/faceted-fury.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Damage",
          "value": "First & second hit: 50; third hit: 70; fourth hit: 80"
        },
        {
          "key": "Attack Range",
          "value": "4m"
        }
      ]
    },
    {
      "name": "CRYSTAL KICK",
      "slug": "crystal-kick",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/dd86d9de-5844-4759-9692-5e0fac76579a.png",
      "localImgUrl": "/ability_images/emma-frost/crystal-kick.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Hit Range",
          "value": "5m"
        },
        {
          "key": "Damage",
          "value": "Hit damage: 40; damage increases to 90 when the target is knocked into walls"
        },
        {
          "key": "Cooldown",
          "value": "2s"
        },
        {
          "key": "Special Effect",
          "value": "Maximum knockback distance: 10m"
        }
      ]
    },
    {
      "name": "CARBON CRUSH",
      "slug": "carbon-crush",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/a30a134d-c77a-48c3-a212-ea7704c72453.png",
      "localImgUrl": "/ability_images/emma-frost/carbon-crush.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash Based Control"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Maximum Distance",
          "value": "7m"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Control effect duration: 1.6s"
        }
      ]
    },
    {
      "name": "PSIONIC SEDUCTION",
      "slug": "psionic-seduction",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250409/f186ffef-db20-4cce-ac54-f3963738fa64.png",
      "localImgUrl": "/ability_images/emma-frost/psionic-seduction.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Large-ranged Persistent Spell Field"
        },
        {
          "key": "Duration",
          "value": "6s"
        },
        {
          "key": "Range",
          "value": "Cone shape spell field, angle range: 80°, length: 30m"
        },
        {
          "key": "Damage",
          "value": "Basic damage 80/s; distance falloff: falloff begins at 10m, decreasing to 70% at 30m; angle falloff: falloff begins at 7° from the center of view, decreasing to 80% at 20°"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Special Effect",
          "value": "When exposed to the ability, enemies accumulate 10 stacks per second, and the stacks decrease by 10 stacks per second when they leave the exposure. At 15 stacks, a control effect is triggered. Each enemy can only be controlled once per ultimate activation. Gain 25% Damage Reduction during the ability."
        }
      ]
    }
  ],
  "THE THING": [
    {
      "name": "Rocky Jab",
      "slug": "rocky-jab",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/274bfd5f-02b6-4513-a80e-3f7685dc8556.png",
      "localImgUrl": "/ability_images/the-thing/rocky-jab.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Damage",
          "value": "Double strike, 40 per hit"
        },
        {
          "key": "Attack Range",
          "value": "4m"
        },
        {
          "key": "Attack Interval",
          "value": "Double strike 0.33s between attacks, 1s between sets."
        }
      ]
    },
    {
      "name": "Stone Haymaker",
      "slug": "stone-haymaker",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/745e0798-e37f-431b-82d5-bc3d29f97d9b.png",
      "localImgUrl": "/ability_images/the-thing/stone-haymaker.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Damage",
          "value": "55+10% of enemies' max Health per hit"
        },
        {
          "key": "Attack Range",
          "value": "8m"
        },
        {
          "key": "Special Effect",
          "value": "Move forward 3 meters while punching; gain Bonus Health equal to damage dealt (up to 100); once hit, this ability can knock down flying enemies to the ground"
        }
      ]
    },
    {
      "name": "Yancy Street Charge",
      "slug": "yancy-street-charge",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/824cffd2-00d5-43a7-8e88-3c72d432ca92.png",
      "localImgUrl": "/ability_images/the-thing/yancy-street-charge.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "100%"
        },
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Damage",
          "value": "Charge: 30; ground slam: 20; immobilization zone: 15 per/s"
        },
        {
          "key": "Spell Field Range",
          "value": "Ground slam: 8m radius, 2.5m high cylindrical spell field. Immobilization zone: 8m radius, 4m high cylindrical spell field"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Special Effect",
          "value": "Gain 200 Bonus Health during skill activation"
        }
      ]
    },
    {
      "name": "Embattled Leap",
      "slug": "embattled-leap",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/59664e33-bdbf-4243-b93a-7583f1712cad.png",
      "localImgUrl": "/ability_images/the-thing/embattled-leap.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "20m"
        },
        {
          "key": "Cooldown",
          "value": "Basic Cooldown 3s, with a charge of 10s per use"
        },
        {
          "key": "Special Effect",
          "value": "Apply a 20% damage reduction effect to self and 20% damage reduction to all allies within 5m of his landing point for 3s"
        }
      ]
    },
    {
      "name": "Battle Blitz",
      "slug": "battle-blitz",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251104/22edee34-cf90-486d-9f16-4959ca72aec6.png",
      "localImgUrl": "/ability_images/the-thing/battle-blitz.png",
      "properties": [
        {
          "key": "CASTING",
          "value": "Targeted"
        },
        {
          "key": "MAXIMUM DISTANCE",
          "value": "20m"
        },
        {
          "key": "COOLDOWN",
          "value": "Basic Cooldown 3s, with a charge of 10s per use, shares the same Cooldown with the E Key ability"
        },
        {
          "key": "SPECIAL EFFECT",
          "value": "Apply a 20% Vulnerability to all enemies within 5m of his landing point for 3s"
        }
      ]
    },
    {
      "name": "Clobberin' Time",
      "slug": "clobberin-time",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/27486433-769b-4aec-ba7b-d7da3cabd52f.png",
      "localImgUrl": "/ability_images/the-thing/clobberin-time.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "2800"
        },
        {
          "key": "Range",
          "value": "Step spell field: 3m high, 10m wide, advancing 2m every 0.1 seconds, up to a maximum of 18m"
        },
        {
          "key": "Damage",
          "value": "100"
        },
        {
          "key": "Special Effect",
          "value": "Stun duration 2.5s"
        }
      ]
    },
    {
      "name": "Unyielding Will",
      "slug": "unyielding-will",
      "button": "PASSIVE",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/3898e125-f9bf-4d44-8b4d-9aeec6873187.png",
      "localImgUrl": "/ability_images/the-thing/unyielding-will.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Immune to launch-up, knock-back, and other displacement effects"
        }
      ]
    }
  ],
  "HUMAN TORCH": [
    {
      "name": "Fire Cluster",
      "slug": "fire-cluster",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/2afdfcab-b55a-4a18-a47e-9c2a6bb175b8.png",
      "localImgUrl": "/ability_images/human-torch/fire-cluster.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Burst Projectile"
        },
        {
          "key": "Charges",
          "value": "6"
        },
        {
          "key": "Charge Speed",
          "value": "Instantly recover all Fire Cluster energy after not using Fire Cluster for 1s"
        },
        {
          "key": "Fire Rate",
          "value": "0.5s per round"
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Shot Damage",
          "value": "5.5 per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 15m, decreasing to 60% at 20m."
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "0.33m"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Blazing Blast",
      "slug": "blazing-blast",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/af838642-8301-4f48-b5ea-5c3413c7cb7f.png",
      "localImgUrl": "/ability_images/human-torch/blazing-blast.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spherical spell field upon impact."
        },
        {
          "key": "Charges",
          "value": "3"
        },
        {
          "key": "Charge Speed",
          "value": "2.5s per strike"
        },
        {
          "key": "Blazing Blast Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Blazing Blast Damage",
          "value": "45"
        },
        {
          "key": "Flame Field Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Flame Field Duration",
          "value": "6s"
        },
        {
          "key": "Flame Field Continuous Damage",
          "value": "20/s"
        }
      ]
    },
    {
      "name": "Flaming Meteor",
      "slug": "flaming-meteor",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/e3c91a9a-e174-4309-b2c6-975f0671805a.png",
      "localImgUrl": "/ability_images/human-torch/flaming-meteor.png",
      "properties": [
        {
          "key": "Max Dash Speed",
          "value": "80m/s"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Flame Field Detonation Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Flame Field Detonation Damage",
          "value": "55"
        },
        {
          "key": "Bonus Health",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "20s"
        }
      ]
    },
    {
      "name": "Plasma Body",
      "slug": "plasma-body",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/bed6bb7e-ac4e-4b83-b75f-32b4c02b3249.png",
      "localImgUrl": "/ability_images/human-torch/plasma-body.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "2.5m/s"
        },
        {
          "key": "Duration",
          "value": "4s"
        },
        {
          "key": "Maximum Distance",
          "value": "10m"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge"
        }
      ]
    },
    {
      "name": "Pyro-Prison",
      "slug": "pyro-prison",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/d20f2e24-4f10-4fd8-a3a9-73b2920b27ee.png",
      "localImgUrl": "/ability_images/human-torch/pyro-prison.png",
      "properties": [
        {
          "key": "Max Link Distance",
          "value": "40m"
        },
        {
          "key": "Max Link Height",
          "value": "2m"
        },
        {
          "key": "Fire Wall Duration",
          "value": "5s"
        },
        {
          "key": "Fire Wall Damage",
          "value": "65"
        },
        {
          "key": "Pyro-Prison Continuous Damage",
          "value": "40/s"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Supernova",
      "slug": "supernova",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250220/49ec9ee0-bff0-41c5-944f-ff679966e4d4.png",
      "localImgUrl": "/ability_images/human-torch/supernova.png",
      "properties": [
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Activation Shock Wave Range",
          "value": "20m spherical radius"
        },
        {
          "key": "Activation Wave Damage",
          "value": "75"
        },
        {
          "key": "Flame Tornado Unleash Speed",
          "value": "0.7s per use"
        },
        {
          "key": "Flame Tornado Range",
          "value": "3m spherical radius; 8m high capsule-shaped spell field."
        },
        {
          "key": "Flame Tornado Continuous Damage",
          "value": "110/s"
        },
        {
          "key": "Supernova Damage Reduction",
          "value": "-30%"
        }
      ]
    }
  ],
  "INVISIBLE WOMAN": [
    {
      "name": "Orb Projection",
      "slug": "orb-projection",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250110/79e037c4-353c-46a1-abb1-1188ff3f98e3.png",
      "localImgUrl": "/ability_images/invisible-woman/orb-projection.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact."
        },
        {
          "key": "Special Effect",
          "value": "Orbs can pierce heroes and return to Invisible Woman after reaching their maximum distance. They damage enemies and heal teammates"
        },
        {
          "key": "Damage",
          "value": "Deal 30 damage per hit upon being shot out and 15 damage per hit on its return journey."
        },
        {
          "key": "Damage Falloff",
          "value": "No falloff"
        },
        {
          "key": "Healing Amount",
          "value": "Heal 45 health per hit upon being shot out and 35 health per hit on its return journey."
        },
        {
          "key": "Fire Rate",
          "value": "0.5s per hit"
        },
        {
          "key": "Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "Maximum Flight Distance",
          "value": "35m"
        },
        {
          "key": "Ammo",
          "value": "10"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "Guardian Shield",
      "slug": "guardian-shield",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/af32c3d3-713a-4faf-90f7-1be2dcfa8cbd.png",
      "localImgUrl": "/ability_images/invisible-woman/guardian-shield.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Healing Amount",
          "value": "50/sec, self 15/sec"
        },
        {
          "key": "Range",
          "value": "3m radius"
        },
        {
          "key": "Slow Rate",
          "value": "35%"
        },
        {
          "key": "Slow Duration",
          "value": "3s"
        },
        {
          "key": "Maximum Shield Value",
          "value": "200"
        },
        {
          "key": "Special Effect 1",
          "value": "Before the shield is destroyed, Invisible Woman can choose to reproject the shield onto a selected teammate at any time"
        },
        {
          "key": "Special Effect 2",
          "value": "After the shield has been damaged, Invisible Woman can press the F key to reclaim the shield and restore its value"
        },
        {
          "key": "Special Effect 3",
          "value": "If no Guardian Shield is present, pressing the recall key now deploys a shield in front of Invisible Woman"
        },
        {
          "key": "Recovery Shield Value Per Second",
          "value": "34"
        },
        {
          "key": "Cooldown After Destroyed",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Psionic Vortex",
      "slug": "psionic-vortex",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/308c5ab3-2b3f-4f53-9eb6-05c171ad4863.png",
      "localImgUrl": "/ability_images/invisible-woman/psionic-vortex.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Spell Field Range",
          "value": "5m radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "35/sec"
        },
        {
          "key": "Spell Field Duration",
          "value": "4s"
        },
        {
          "key": "Special Effect",
          "value": "Applies a slow effect to enemies within the spell field; the closer they are to the center of the field, the greater the slow effect"
        },
        {
          "key": "Slow Rate",
          "value": "Center 50%, Edge 0"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Force Physics",
      "slug": "force-physics",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/0d7893e9-e90e-483f-8b90-414535d6f133.png",
      "localImgUrl": "/ability_images/invisible-woman/force-physics.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Cylindrical Spell Field"
        },
        {
          "key": "Range",
          "value": "1.5m radius, 35m length"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Push Range",
          "value": "10m"
        },
        {
          "key": "Pull-Range",
          "value": "7m"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Invisible Boundary",
      "slug": "invisible-boundary",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/c10fa2f1-64e5-417a-abbe-0092e98b0afb.png",
      "localImgUrl": "/ability_images/invisible-woman/invisible-boundary.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted, generates a cylindrical spell field"
        },
        {
          "key": "Pass-Through Slow Rate",
          "value": "55%"
        },
        {
          "key": "Slow Duration",
          "value": "1s"
        },
        {
          "key": "Healing Amount",
          "value": "180/sec"
        },
        {
          "key": "Range",
          "value": "10m radius, 40m height"
        },
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "Slows enemies within range by 20%"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        }
      ]
    },
    {
      "name": "Covert Advance",
      "slug": "covert-advance",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/d273333c-e1da-4d98-925d-b7ce8601144c.png",
      "localImgUrl": "/ability_images/invisible-woman/covert-advance.png",
      "properties": [
        {
          "key": "Healing Amount",
          "value": "30/sec"
        }
      ]
    },
    {
      "name": "Veiled Step",
      "slug": "veiled-step",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/eb7b6f46-9d82-4df8-a513-8d94c07546e9.png",
      "localImgUrl": "/ability_images/invisible-woman/veiled-step.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    }
  ],
  "MISTER FANTASTIC": [
    {
      "name": "Stretch Punch",
      "slug": "stretch-punch",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250110/6ca25ced-20ea-495c-b403-d84fa949b02a.png",
      "localImgUrl": "/ability_images/mister-fantastic/stretch-punch.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight Spell Field"
        },
        {
          "key": "Spell Field Damage",
          "value": "70"
        },
        {
          "key": "Spell Field Range",
          "value": "15m"
        },
        {
          "key": "Attack Interval",
          "value": "1.1s per hit"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "None"
        },
        {
          "key": "Gained Elasticity",
          "value": "8"
        },
        {
          "key": "Special Mechanic",
          "value": "Swinging your arms can attack multiple targets"
        }
      ]
    },
    {
      "name": "Distended Grip",
      "slug": "distended-grip",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/f2a1a063-eb4b-4274-a9b8-fac92c4abeba.png",
      "localImgUrl": "/ability_images/mister-fantastic/distended-grip.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Initial Projectile Range",
          "value": "20m"
        },
        {
          "key": "Secondary Release Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Initial Projectile Damage",
          "value": "20"
        },
        {
          "key": "Secondary Projectile Damage",
          "value": "20"
        },
        {
          "key": "Single-Target Pull Range",
          "value": "10m"
        },
        {
          "key": "Single-Target Pull Damage",
          "value": "50"
        },
        {
          "key": "Dual-Target Pull Damage",
          "value": "30"
        },
        {
          "key": "Gained Elasticity",
          "value": "30"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "After successfully pulling an enemy with Distended Grip, the target is afflicted with a 1-second immobilize effect"
        }
      ]
    },
    {
      "name": "Flexible Elongation",
      "slug": "flexible-elongation",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/014f9fc0-5b64-4c2d-afb1-4669b7b5369c.png",
      "localImgUrl": "/ability_images/mister-fantastic/flexible-elongation.png",
      "properties": [
        {
          "key": "Maximum Select Distance",
          "value": "15m"
        },
        {
          "key": "Bonus Health (Self)",
          "value": "75"
        },
        {
          "key": "Bonus Health (Ally)",
          "value": "75"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Gained Elasticity",
          "value": "20"
        },
        {
          "key": "Charges",
          "value": "2"
        }
      ]
    },
    {
      "name": "Reflexive Rubber",
      "slug": "reflexive-rubber",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/d152620a-90bc-407e-a3f1-b137503624d0.png",
      "localImgUrl": "/ability_images/mister-fantastic/reflexive-rubber.png",
      "properties": [
        {
          "key": "Shield Value",
          "value": "300"
        },
        {
          "key": "Maximum Duration",
          "value": "3s"
        },
        {
          "key": "Self Slow Rate",
          "value": "-35%"
        },
        {
          "key": "Damage Absorbed - Damage Reflected Conversion Rate",
          "value": "60%"
        },
        {
          "key": "Reflected Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Brainiac Bounce",
      "slug": "brainiac-bounce",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/05dcb43c-4de3-483a-afc6-d06c6e76e4ff.png",
      "localImgUrl": "/ability_images/mister-fantastic/brainiac-bounce.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Range",
          "value": "10m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "Initial 70, Each Additional Leap +14, Max 140"
        },
        {
          "key": "Damage Falloff",
          "value": "Start at 3m, 71.4% falloff at 10m"
        },
        {
          "key": "Slow Rate",
          "value": "Per Leap -10%, Can Stack, Max -60%"
        },
        {
          "key": "Slow Duration",
          "value": "3s"
        },
        {
          "key": "Minimum Leaps",
          "value": "3"
        },
        {
          "key": "Maximum Leaps",
          "value": "6"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Special Mechanic",
          "value": "After the minimum number of leaps, each additional leap must hit an enemy to trigger the next one"
        },
        {
          "key": "Special Mechanic",
          "value": "When Mister Fantastic uses Brainiac Bounce (Ultimate Ability), immediately gain Bonus Health equal to that gained when entering inflated state"
        }
      ]
    },
    {
      "name": "Elastic Strength",
      "slug": "elastic-strength",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20250108/25010c9f-083e-4097-a443-544e0eeaa0ab.png",
      "localImgUrl": "/ability_images/mister-fantastic/elastic-strength.png",
      "properties": [
        {
          "key": "Max Elasticity",
          "value": "100"
        },
        {
          "key": "Inflated Duration",
          "value": "6s"
        },
        {
          "key": "Damage",
          "value": "80"
        },
        {
          "key": "Maximum Distance",
          "value": "8m"
        },
        {
          "key": "Attack Interval",
          "value": "0.92s per hit"
        },
        {
          "key": "Special Effect",
          "value": "gain 350 Maximum Health and a one-time heal of 350, which is removed upon exiting the Inflated state"
        },
        {
          "key": "Movement Boost",
          "value": "20%"
        }
      ]
    }
  ],
  "SQUIRREL GIRL": [
    {
      "name": "Burst Acorn",
      "slug": "burst-acorn",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/662dd801-7b3c-4929-bca7-4696b104811d.png",
      "localImgUrl": "/ability_images/squirrel-girl/burst-acorn.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Arced projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Spell Field Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "110"
        },
        {
          "key": "Damage Falloff",
          "value": "70% falloff at 3m"
        },
        {
          "key": "Fire Rate",
          "value": "1.49 acorns per second"
        },
        {
          "key": "Ammo",
          "value": "12"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "Unbeatable Squirrel Tsunami",
      "slug": "unbeatable-squirrel-tsunami",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/f87d8f38-b7d1-4a62-9aaa-eb00423c38d2.png",
      "localImgUrl": "/ability_images/squirrel-girl/unbeatable-squirrel-tsunami.png",
      "properties": [
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Range",
          "value": "Length: 3m, Width: 5m, Height: 1.75m"
        },
        {
          "key": "Damage",
          "value": "150"
        },
        {
          "key": "Squirrel Horde Health",
          "value": "300"
        },
        {
          "key": "Squirrel Horde Movement Speed",
          "value": "9 m/s"
        },
        {
          "key": "Energy Cost",
          "value": "2800"
        },
        {
          "key": "Special Mechanic",
          "value": "The squirrels will rush towards the nearest enemy after bouncing instead of bouncing randomly"
        }
      ]
    },
    {
      "name": "Tail Bounce",
      "slug": "tail-bounce",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/cc6be0d3-f369-4fcf-861d-5e0f2594af1a.png",
      "localImgUrl": "/ability_images/squirrel-girl/tail-bounce.png",
      "properties": [
        {
          "key": "Jump Height",
          "value": "9m"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "Mammal Bond",
      "slug": "mammal-bond",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/5714be78-0962-47d3-b231-1a3b6d8d98d3.png",
      "localImgUrl": "/ability_images/squirrel-girl/mammal-bond.png",
      "properties": [
        {
          "key": "Maximum Duration",
          "value": "5s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Squirrel Blockade",
      "slug": "squirrel-blockade",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/403af848-dda8-42f7-a2a0-b3d0959eeefe.png",
      "localImgUrl": "/ability_images/squirrel-girl/squirrel-blockade.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged projectile with an arced trajectory"
        },
        {
          "key": "Maximum Charge Time",
          "value": "1.5s"
        },
        {
          "key": "Projectile Speed",
          "value": "20 - 60 m/s (Maximum speed is achieved after 0.7s of charging)"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Imprison Duration",
          "value": "1.33s"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    }
  ],
  "BLACK WIDOW": [
    {
      "name": "Widow's Bite Baton",
      "slug": "widows-bite-baton",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/66ad25fa-5a94-4087-8d1d-d626e1a5c798.png",
      "localImgUrl": "/ability_images/black-widow/widows-bite-baton.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "45"
        },
        {
          "key": "Maximum Distance",
          "value": "3m"
        },
        {
          "key": "Fire Rate",
          "value": "2 strikes per second"
        }
      ]
    },
    {
      "name": "Red Room Rifle",
      "slug": "red-room-rifle",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/67bd0973-ab49-4e6d-a04b-70f67cb2514b.png",
      "localImgUrl": "/ability_images/black-widow/red-room-rifle.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast direct hit"
        },
        {
          "key": "Damage",
          "value": "120 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 10m, decreasing to 50% at 20m"
        },
        {
          "key": "Fire Rate",
          "value": "0.83 rounds per second"
        },
        {
          "key": "Fire Rate",
          "value": "15"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Aiming down sights times",
          "value": "0.3s"
        },
        {
          "key": "Special Effect",
          "value": "Shares the same magazine with Red Room Rifle. Straight Shooter activates only after aiming down sights for a specific duration; otherwise, it will fire from the Red Room Rifle"
        }
      ]
    },
    {
      "name": "Electro-Plasma Explosion",
      "slug": "electro-plasma-explosion",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/2ab04f37-ede8-4c33-aee0-ef47e6d4c495.png",
      "localImgUrl": "/ability_images/black-widow/electro-plasma-explosion.png",
      "properties": [
        {
          "key": "Projectile Speed",
          "value": "100m/s"
        },
        {
          "key": "Explosion Range",
          "value": "5.6m - 8m (Maximum range is achieved after 0.6s of charging)"
        },
        {
          "key": "Explosion Damage",
          "value": "120 - 170 (Maximum damage is achieved after 0.6s of charging)"
        },
        {
          "key": "Number of Plasma Globules",
          "value": "7 - 20 (Maximum amount is achieved after 0.6s of charging)"
        },
        {
          "key": "Plasma Range",
          "value": "1.5m spherical radius"
        },
        {
          "key": "Slow Rate",
          "value": "-55%"
        },
        {
          "key": "Plasma Duration",
          "value": "10s"
        },
        {
          "key": "Vulnerability Effect Duration",
          "value": "4s"
        },
        {
          "key": "Vulnerability Effect Rate",
          "value": "15%"
        },
        {
          "key": "Energy Cost",
          "value": "2800"
        }
      ]
    },
    {
      "name": "Fleet Foot",
      "slug": "fleet-foot",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/c54964b7-5c00-4229-8f65-5d156f05ce27.png",
      "localImgUrl": "/ability_images/black-widow/fleet-foot.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "33%"
        },
        {
          "key": "Maximum Energy",
          "value": "120"
        },
        {
          "key": "Energy Cost (Sprinting)",
          "value": "12/s"
        },
        {
          "key": "Power Jump Energy Cost",
          "value": "24 per leap"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "30/s"
        }
      ]
    },
    {
      "name": "Edge Dancer",
      "slug": "edge-dancer",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/63a7474c-3d1a-4db1-933a-c70c5a37e9ca.png",
      "localImgUrl": "/ability_images/black-widow/edge-dancer.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "CastingSpinning Kick Damage",
          "value": "35"
        },
        {
          "key": "Maximum Distance",
          "value": "5m"
        },
        {
          "key": "Flying Kick Distance",
          "value": "12m"
        },
        {
          "key": "Flying Kick Damage",
          "value": "35"
        },
        {
          "key": "Flying Kick Stun Duration",
          "value": "1s"
        },
        {
          "key": "Flying Kick Casting Window",
          "value": "5s"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Straight Shooter",
      "slug": "straight-shooter",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/6361d366-98b8-4268-825e-1371bf7c99f0.png",
      "localImgUrl": "/ability_images/black-widow/straight-shooter.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast direct hit"
        },
        {
          "key": "Damage",
          "value": "120 damage per hit"
        },
        {
          "key": "Fire Rate",
          "value": "0.83 rounds per second"
        },
        {
          "key": "Fire Rate",
          "value": "15"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Special Effect",
          "value": "Shares the same magazine with Red Room Rifle"
        }
      ]
    }
  ],
  "WOLVERINE": [
    {
      "name": "Savage Claw",
      "slug": "savage-claw",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/97b1d4c6-7ea2-43f2-b528-5ea88904853f.png",
      "localImgUrl": "/ability_images/wolverine/savage-claw.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Base Damage",
          "value": "15 damage per strike"
        },
        {
          "key": "Percentage Damage",
          "value": "Deal damage equal to 1.5% of the target's Max Health, with an extra 0.057% damage for each point of Rage"
        },
        {
          "key": "Maximum Distance",
          "value": "3.5m"
        },
        {
          "key": "Attack Interval",
          "value": "The first three strikes have an interval of 0.27s between them, while the fourth strike has a 0.84s interval from the third strike"
        }
      ]
    },
    {
      "name": "Last Stand",
      "slug": "last-stand",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/6900d5e2-7074-4c28-a424-4015ad9780a8.png",
      "localImgUrl": "/ability_images/wolverine/last-stand.png",
      "properties": [
        {
          "key": "Knockback Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Knockback Damage",
          "value": "50"
        },
        {
          "key": "Snatching Damage Over Time",
          "value": "20/s"
        },
        {
          "key": "Impact Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Impact Base Damage",
          "value": "50"
        },
        {
          "key": "Impact Percentage Damage",
          "value": "Deal damage equal to 10% of the target's Max Health, with an extra 0.3% damage for each point of Rage"
        },
        {
          "key": "Knockdown Time",
          "value": "0.75s"
        },
        {
          "key": "Energy Cost",
          "value": "2800"
        }
      ]
    },
    {
      "name": "Feral Leap",
      "slug": "feral-leap",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/e88c7523-3fab-4cfb-a954-080c5824f0fe.png",
      "localImgUrl": "/ability_images/wolverine/feral-leap.png",
      "properties": [
        {
          "key": "Snatch Damage",
          "value": "35"
        },
        {
          "key": "Smash Damage",
          "value": "35"
        },
        {
          "key": "Knockdown Duration",
          "value": "0.75s"
        },
        {
          "key": "Berserk Claw Strike Duration",
          "value": "5s"
        },
        {
          "key": "Berserk Claw Strike Base Damage",
          "value": "6 damage per strike"
        },
        {
          "key": "Berserk Claw Strike Percentage Damage",
          "value": "Deal damage equal to 1% of the target's Max Health, with an extra 0.035% damage for each point of Rage"
        },
        {
          "key": "Berserk Claw Strike Maximum Distance",
          "value": "3.5m"
        },
        {
          "key": "Berserk Claw Strike Attack Interval",
          "value": "5.88 strikes per second"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Undying Animal",
      "slug": "undying-animal",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/15a76d54-520c-447a-b8f1-2ab0a488faac.png",
      "localImgUrl": "/ability_images/wolverine/undying-animal.png",
      "properties": [
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Damage Reduction",
          "value": "40%"
        },
        {
          "key": "Cooldown",
          "value": "16s"
        }
      ]
    },
    {
      "name": "Vicious Rampage",
      "slug": "vicious-rampage",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/a015b659-87d4-4569-a870-4af03347ecb3.png",
      "localImgUrl": "/ability_images/wolverine/vicious-rampage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Average Speed",
          "value": "44m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "7.5m"
        },
        {
          "key": "Range",
          "value": "3m"
        },
        {
          "key": "Base Damage",
          "value": "15 damage per strike"
        },
        {
          "key": "Percentage Damage",
          "value": "Deal damage equal to 1.5% of the target's Max Health, with an extra 0.057% damage for each point of Rage"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        }
      ]
    },
    {
      "name": "Regenerative Healing Factor",
      "slug": "regenerative-healing-factor",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/031e30b1-f8d7-4be1-9a03-b758bdddc6be.png",
      "localImgUrl": "/ability_images/wolverine/regenerative-healing-factor.png",
      "properties": [
        {
          "key": "Bonus Health",
          "value": "150 - 300 (Damage increases with Rage)"
        },
        {
          "key": "Bonus Health Duration",
          "value": "3s"
        },
        {
          "key": "Bonus Health/Healing Conversion",
          "value": "1"
        },
        {
          "key": "Cooldown Reduction Per KO Engaged",
          "value": "10s"
        },
        {
          "key": "Cooldown",
          "value": "90s"
        }
      ]
    },
    {
      "name": "Berserker Rage",
      "slug": "berserker-rage",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/e97de2d3-6f28-4619-80cd-59da00931e8b.png",
      "localImgUrl": "/ability_images/wolverine/berserker-rage.png",
      "properties": [
        {
          "key": "Max Rage",
          "value": "100"
        },
        {
          "key": "Rage Per Savage Claw Hit",
          "value": "10"
        },
        {
          "key": "Rage Per Vicious Rampage Hit",
          "value": "15"
        },
        {
          "key": "Rage Per Feral Leap Snatch",
          "value": "10"
        },
        {
          "key": "Rage Per Berserk Claw Strike Hit",
          "value": "5"
        },
        {
          "key": "Rage Per Last Stand Knockback",
          "value": "25"
        },
        {
          "key": "Rage Per Hit Taken",
          "value": "5"
        },
        {
          "key": "Rage Gain From Taking Hits",
          "value": "2 per second"
        }
      ]
    }
  ],
  "CLOAK&DAGGER": [
    {
      "name": "Darkforce Cloak",
      "slug": "darkforce-cloak",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/94227f4c-02fd-4954-900c-f149b05b5cea.png",
      "localImgUrl": "/ability_images/cloakdagger/darkforce-cloak.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Cylindrical Spell Field"
        },
        {
          "key": "Special Effect",
          "value": "Attacks will target the nearest enemy to the crosshair, dealing damage"
        },
        {
          "key": "Damage",
          "value": "80/s"
        },
        {
          "key": "Range",
          "value": "20m"
        },
        {
          "key": "Ammo",
          "value": "∞"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "Eternal Bond",
      "slug": "eternal-bond",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/9791de0a-9b39-4111-a535-77a8fccaef5a.png",
      "localImgUrl": "/ability_images/cloakdagger/eternal-bond.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent Spell Field"
        },
        {
          "key": "Damage",
          "value": "30/s"
        },
        {
          "key": "Healing Amount",
          "value": "250/s"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a 4m radius and 15m in length"
        },
        {
          "key": "Duration",
          "value": "11s"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        }
      ]
    },
    {
      "name": "Light's Embrace",
      "slug": "lights-embrace",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/d79fe95c-03cf-4d39-97ce-a2af95dd180b.png",
      "localImgUrl": "/ability_images/cloakdagger/lights-embrace.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        }
      ]
    },
    {
      "name": "Terror Cape",
      "slug": "terror-cape",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/a57ebbc2-dcf5-4511-8a5e-7291aefbaf3f.png",
      "localImgUrl": "/ability_images/cloakdagger/terror-cape.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spell Field"
        },
        {
          "key": "Special Effect",
          "value": "The spell field advances along the casting path"
        },
        {
          "key": "Damage",
          "value": "55"
        },
        {
          "key": "Blinding Duration",
          "value": "1.5s"
        },
        {
          "key": "Range",
          "value": "Visibility is obstructed beyond 10m"
        },
        {
          "key": "Vulnerability",
          "value": "28%"
        },
        {
          "key": "Vulnerability Duration",
          "value": "3s"
        },
        {
          "key": "Range",
          "value": "Width: 6m, Height: 4.5m"
        },
        {
          "key": "Movement Speed",
          "value": "20m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Dark Teleportation",
      "slug": "dark-teleportation",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/08104768-56d7-4bda-84ae-bd4cd7245223.png",
      "localImgUrl": "/ability_images/cloakdagger/dark-teleportation.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent Spell Field"
        },
        {
          "key": "Special Effect",
          "value": "Allies within the area gain Invisibility and Movement Boost"
        },
        {
          "key": "Duration",
          "value": "2s"
        },
        {
          "key": "Range",
          "value": "10m spherical radius"
        },
        {
          "key": "Cooldown",
          "value": "Veil of Lightforce & Terror Cape share charges, capped out at 2 with each taking 10s to recharge. After using either, both abilities enter a 2s cooldown"
        }
      ]
    },
    {
      "name": "Lightforce Dagger",
      "slug": "lightforce-dagger",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/5211b159-6fa8-4589-829f-facb1c455241.png",
      "localImgUrl": "/ability_images/cloakdagger/lightforce-dagger.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile that generates a spell area upon impact"
        },
        {
          "key": "Special Effect",
          "value": "The projectile features an attraction effect, pulling in the closest target to the crosshair and creating a spell field upon impact. This spell field provides healing effects"
        },
        {
          "key": "Damage",
          "value": "18 damage per round"
        },
        {
          "key": "Healing Per Hit",
          "value": "16 per hit"
        },
        {
          "key": "Area of Effect Healing",
          "value": "16 per hit"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Fire Rate",
          "value": "2.27 hits per second"
        },
        {
          "key": "Ammo",
          "value": "12"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "Eternal Bond",
      "slug": "eternal-bond",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/9791de0a-9b39-4111-a535-77a8fccaef5a.png",
      "localImgUrl": "/ability_images/cloakdagger/eternal-bond.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent Spell Field"
        },
        {
          "key": "Damage",
          "value": "30/s"
        },
        {
          "key": "Healing Amount",
          "value": "250/s"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a 4m radius and 15m in length"
        },
        {
          "key": "Duration",
          "value": "13s"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        }
      ]
    },
    {
      "name": "Shadow's Embrace",
      "slug": "shadows-embrace",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/3e810039-6b5c-43e0-b1c6-22808f1ee3cf.png",
      "localImgUrl": "/ability_images/cloakdagger/shadows-embrace.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        }
      ]
    },
    {
      "name": "Veil of Lightforce",
      "slug": "veil-of-lightforce",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/b2149229-d3c4-4056-9fa4-04704c96c3af.png",
      "localImgUrl": "/ability_images/cloakdagger/veil-of-lightforce.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spell Field"
        },
        {
          "key": "Special Effect",
          "value": "The spell field advances along the casting path"
        },
        {
          "key": "Healing Amount",
          "value": "45"
        },
        {
          "key": "Healing Boost",
          "value": "15%"
        },
        {
          "key": "Duration",
          "value": "4s"
        },
        {
          "key": "Range",
          "value": "Width: 6m, Height: 4.5m"
        },
        {
          "key": "Movement Speed",
          "value": "20m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Dagger Storm",
      "slug": "dagger-storm",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/a106ebc0-80b0-4dd9-bf68-0c19f464e8bc.png",
      "localImgUrl": "/ability_images/cloakdagger/dagger-storm.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Healing Amount",
          "value": "45/s"
        },
        {
          "key": "Duration",
          "value": "6s"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Cooldown",
          "value": "Veil of Lightforce & Terror Cape share charges, capped out at 2 with each taking 10s to recharge. After using either, both abilities enter a 2s cooldown"
        },
        {
          "key": "Special Effect",
          "value": "When a Spell Field is created, allies in range get a One-Time Healing of 60"
        }
      ]
    }
  ],
  "IRON FIST": [
    {
      "name": "Jeet Kune Do",
      "slug": "jeet-kune-do",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/08e65caa-9aa0-425c-aeba-fa1544c03be2.png",
      "localImgUrl": "/ability_images/iron-fist/jeet-kune-do.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "The first four strikes each deal 35 damage, while the fifth strike deals 55 damage"
        },
        {
          "key": "Maximum Distance",
          "value": "3m"
        },
        {
          "key": "Attack Interval",
          "value": "The first four strikes have an interval of 0.45s between them, while the fifth strike has a 0.67s interval from the fourth strike"
        },
        {
          "key": "Maximum Pull-In Distance",
          "value": "6m"
        },
        {
          "key": "Dragon's Defense Cooldown Reduction Per Hit",
          "value": "1.2s"
        }
      ]
    },
    {
      "name": "Yat Jee Chung Kuen",
      "slug": "yat-jee-chung-kuen",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/fd8bfe86-ffd7-4752-9da3-d005bafa8668.png",
      "localImgUrl": "/ability_images/iron-fist/yat-jee-chung-kuen.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Maximum Pull-In Distance",
          "value": "11m"
        },
        {
          "key": "Dashing Speed Without Target",
          "value": "12 m/s"
        },
        {
          "key": "Dashing Distance Without Target",
          "value": "3m"
        },
        {
          "key": "Range",
          "value": "3m"
        },
        {
          "key": "Damage",
          "value": "8 base damage + 3.1% of the enemy's Max Health per strike"
        },
        {
          "key": "Attack Speed",
          "value": "7 strikes per second"
        }
      ]
    },
    {
      "name": "Living Chi",
      "slug": "living-chi",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/080f088b-94dd-45ac-9bc7-9e5c512d51d0.png",
      "localImgUrl": "/ability_images/iron-fist/living-chi.png",
      "properties": [
        {
          "key": "Duration",
          "value": "12s"
        },
        {
          "key": "Yat Jee Chung Kuen Bonus Range",
          "value": "100%"
        },
        {
          "key": "K'un-Lun Kick Bonus Range",
          "value": "100%"
        },
        {
          "key": "Damage Boost",
          "value": "30%"
        },
        {
          "key": "Movement Boost",
          "value": "20%"
        },
        {
          "key": "Yat Jee Chung Kuen Cooldown Reduction",
          "value": "-80%"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        }
      ]
    },
    {
      "name": "K'un-Lun Kick",
      "slug": "kun-lun-kick",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/e5377516-d352-4169-bb87-7bd68523dda7.png",
      "localImgUrl": "/ability_images/iron-fist/kun-lun-kick.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Dashing Speed",
          "value": "40 m/s"
        },
        {
          "key": "Maximum Dash Distance",
          "value": "12m"
        },
        {
          "key": "First Flying Kick Damage",
          "value": "40"
        },
        {
          "key": "Second Flying Kick Damage",
          "value": "35 - 70 (Maximum damage is achieved when the target is at 50% Health)"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Harmony Recovery",
      "slug": "harmony-recovery",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/14e2c16b-cf9f-4e49-bef0-690bcc3d910c.png",
      "localImgUrl": "/ability_images/iron-fist/harmony-recovery.png",
      "properties": [
        {
          "key": "Duration",
          "value": "3s"
        },
        {
          "key": "Healing Per Second",
          "value": "100"
        },
        {
          "key": "Excess Healing/Max Health Conversion",
          "value": "100"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Crane Leap",
      "slug": "crane-leap",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/62f2f94b-228c-4015-9d56-b9134c171cf5.png",
      "localImgUrl": "/ability_images/iron-fist/crane-leap.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "3 charges, with each charge taking 1s to recharge"
        }
      ]
    },
    {
      "name": "Dragon's Defense",
      "slug": "dragons-defense",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/5745baab-4f3f-47f0-9eb0-8b8ea67f81f2.png",
      "localImgUrl": "/ability_images/iron-fist/dragons-defense.png",
      "properties": [
        {
          "key": "Block Time",
          "value": "1.2s"
        },
        {
          "key": "Damage Reduction",
          "value": "30%"
        },
        {
          "key": "Bonus Health/Damage Blocked Conversion",
          "value": "1.3"
        },
        {
          "key": "Max Health/Damage Blocked Conversion",
          "value": "175"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Wall Runner",
      "slug": "wall-runner",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/53125bd3-2ca7-4b39-a51c-bac18c6ecfdd.png",
      "localImgUrl": "/ability_images/iron-fist/wall-runner.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "9 m/s"
        }
      ]
    },
    {
      "name": "Chi Absorption",
      "slug": "chi-absorption",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241205/2946ce20-8956-4efb-9729-afbdaa5efc51.png",
      "localImgUrl": "/ability_images/iron-fist/chi-absorption.png",
      "properties": [
        {
          "key": "Bonus Health",
          "value": "50"
        }
      ]
    }
  ],
  "PSYLOCKE": [
    {
      "name": "Psionic Crossbow",
      "slug": "psionic-crossbow",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241127/95719d81-365d-4ad7-bf6b-026166c95aed.png",
      "localImgUrl": "/ability_images/psylocke/psionic-crossbow.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Double projectile with spread"
        },
        {
          "key": "Damage",
          "value": "12 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 15m, decreasing to 70% at 30m"
        },
        {
          "key": "Bullets Fired Each Cast",
          "value": "4"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "0.2m"
        },
        {
          "key": "Fire Rate",
          "value": "The firing interval between shots is 0.2s, with an interval of 0.6s between each round of shooting"
        },
        {
          "key": "Ammo",
          "value": "16"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Critical Damage",
          "value": "150%"
        },
        {
          "key": "Cooldown Reduction On Hit",
          "value": "0.3s per hit"
        }
      ]
    },
    {
      "name": "Dance of the Butterfly",
      "slug": "dance-of-the-butterfly",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241127/dabcc1e3-5490-4fa4-87ab-b9440a74b69b.png",
      "localImgUrl": "/ability_images/psylocke/dance-of-the-butterfly.png",
      "properties": [
        {
          "key": "Range",
          "value": "10m spherical radius"
        },
        {
          "key": "Duration",
          "value": "4s"
        },
        {
          "key": "Slow Rate",
          "value": "-15%"
        },
        {
          "key": "Attack Interval",
          "value": "2 hits per second"
        },
        {
          "key": "Damage",
          "value": "160 damage per hit"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Special Mechanic",
          "value": "Psylocke will slash a random enemy, giving priority to the one who has been hit the least"
        }
      ]
    },
    {
      "name": "Psi-Blade Dash",
      "slug": "psi-blade-dash",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241127/af147052-f9a1-416b-8bfc-0143471b18c1.png",
      "localImgUrl": "/ability_images/psylocke/psi-blade-dash.png",
      "properties": [
        {
          "key": "Average Speed",
          "value": "43 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "12m"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Special Mechanic",
          "value": "Casting this ability will automatically recall the Wing Shurikens. The shurikens will first travel to Psylocke's starting position before returning to her"
        }
      ]
    },
    {
      "name": "Psychic Stealth",
      "slug": "psychic-stealth",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241127/55b04754-bda5-4bcf-8a95-44479c836508.png",
      "localImgUrl": "/ability_images/psylocke/psychic-stealth.png",
      "properties": [
        {
          "key": "Duration",
          "value": "2s"
        },
        {
          "key": "Movement Boost",
          "value": "50%"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Special Mechanic",
          "value": "When attacked while in stealth, Psylocke will remain in stealth but will briefly become visible for a short duration"
        }
      ]
    },
    {
      "name": "Wing Shurikens",
      "slug": "wing-shurikens",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241127/90b85285-ea24-4fb2-8ec4-b60d3f177569.png",
      "localImgUrl": "/ability_images/psylocke/wing-shurikens.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory."
        },
        {
          "key": "Number of Projectiles",
          "value": "5"
        },
        {
          "key": "Recall Window",
          "value": "3s"
        },
        {
          "key": "Bonus Health",
          "value": "10 bonus health per round"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Mechanic",
          "value": "When the projectile is recalled, it will move 20s toward the crosshair before returning to Psylocke"
        },
        {
          "key": "Firing Phase",
          "value": ""
        },
        {
          "key": "Damage",
          "value": "9 damage per round"
        },
        {
          "key": "Projectile Speed",
          "value": "120 m/s"
        },
        {
          "key": "Spread Angle",
          "value": "0.86°"
        },
        {
          "key": "Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 15m, decreasing to 80% at 25m"
        },
        {
          "key": "Recall Phase",
          "value": ""
        },
        {
          "key": "Damage",
          "value": "9 per hit"
        },
        {
          "key": "Projectile Speed",
          "value": "120 m/s"
        }
      ]
    }
  ],
  "HAWKEYE": [
    {
      "name": "Piercing Arrow",
      "slug": "piercing-arrow",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/9107db4e-f275-49aa-87bf-96c697157a15.png",
      "localImgUrl": "/ability_images/hawkeye/piercing-arrow.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged projectile with an arced trajectory"
        },
        {
          "key": "Slow Rate While Charging",
          "value": "-20%"
        },
        {
          "key": "Minimum Charge Time",
          "value": "0.7s"
        },
        {
          "key": "Projectile Speed",
          "value": "120 - 180 m/s (Maximum speed is achieved after 0.9s of charging)"
        },
        {
          "key": "Damage",
          "value": "28 - 70 (Maximum damage is achieved after 0.9s of charging)"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Blast Arrow",
      "slug": "blast-arrow",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/b54fcda9-4e31-4a7b-87c7-c7e8fd675434.png",
      "localImgUrl": "/ability_images/hawkeye/blast-arrow.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Arced projectile that generates a spell field upon impact"
        },
        {
          "key": "Slow Rate While Charging",
          "value": "-20%"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Projectile Damage",
          "value": "16"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "34"
        },
        {
          "key": "Blast Arrows Per Cast",
          "value": "3"
        },
        {
          "key": "Spread Angle",
          "value": "11.3°"
        },
        {
          "key": "Cooldown",
          "value": "0.5s"
        },
        {
          "key": "Charges",
          "value": "3"
        }
      ]
    },
    {
      "name": "Hunter's Sight",
      "slug": "hunters-sight",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/15af78f7-6723-402d-916e-0e17ebf4b6df.png",
      "localImgUrl": "/ability_images/hawkeye/hunters-sight.png",
      "properties": [
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Afterimage Generation Interval",
          "value": "0.5s"
        },
        {
          "key": "Afterimage Duration",
          "value": "3s"
        },
        {
          "key": "Draw Speed Boost Multiplier",
          "value": "1.5"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Special Mechanic",
          "value": "While Hunter's Sight is active, bow draw speed is increased"
        }
      ]
    },
    {
      "name": "Crescent Slash",
      "slug": "crescent-slash",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/a598cd3c-e1d2-4403-8d48-13bf9dcf1b39.png",
      "localImgUrl": "/ability_images/hawkeye/crescent-slash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Maximum Distance",
          "value": "8m"
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Hypersonic Arrow",
      "slug": "hypersonic-arrow",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/96e35f6b-b42a-461a-9cd9-554ed05e3470.png",
      "localImgUrl": "/ability_images/hawkeye/hypersonic-arrow.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that is accompanied by a spell field"
        },
        {
          "key": "Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "First Spell Field Range",
          "value": "Length: 3m, Width: 3m, Height: 2.7m"
        },
        {
          "key": "First Damage",
          "value": "55"
        },
        {
          "key": "Second Spell Field Range",
          "value": "Length: 3m, Width: 5m, Height: 1.6m"
        },
        {
          "key": "Second Damage",
          "value": "55"
        },
        {
          "key": "Slow Rate",
          "value": "-40%"
        },
        {
          "key": "Slow Duration",
          "value": "1s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Ronin Slash",
      "slug": "ronin-slash",
      "button": "V",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/d8d9cc33-6737-4481-b442-ce0375138806.png",
      "localImgUrl": "/ability_images/hawkeye/ronin-slash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Maximum Distance",
          "value": "3m"
        },
        {
          "key": "Special Effect",
          "value": "This ability cannot block explosions or effects created by projectiles on hit"
        }
      ]
    },
    {
      "name": "Skyward Leap",
      "slug": "skyward-leap",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/83892ce1-2db5-4c6c-a0f2-a4117ab86aab.png",
      "localImgUrl": "/ability_images/hawkeye/skyward-leap.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Archer's Focus",
      "slug": "archers-focus",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/54419864-579b-4029-bc38-150d604b96c2.png",
      "localImgUrl": "/ability_images/hawkeye/archers-focus.png",
      "properties": [
        {
          "key": "Bonus Damage",
          "value": "0 - 90 (Maximum damage is achieved after 0.9s of aiming)"
        },
        {
          "key": "Triggering Distance",
          "value": "40m"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Special Mechanic",
          "value": "Apply bonus damage to the base damage of Piercing Arrow"
        }
      ]
    }
  ],
  "IRON MAN": [
    {
      "name": "Repulsor Blast",
      "slug": "repulsor-blast",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d69cf17a-732e-486d-87e3-43c5892e42c3.png",
      "localImgUrl": "/ability_images/iron-man/repulsor-blast.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Ammo",
          "value": "100"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Mechanic 1",
          "value": "After firing the one-handed repulsor twice in a row, the next attack will fire two repulsors at once"
        },
        {
          "key": "Special Mechanic 2",
          "value": "Repulsor Blast and Unibeam share the same ammo count"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Damage",
          "value": "35"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "50"
        },
        {
          "key": "Spell Field Damage Falloff",
          "value": "40% falloff at 3m"
        },
        {
          "key": "Fire Rate",
          "value": "1.67 rounds per second"
        },
        {
          "key": "Ammo Consumption",
          "value": "10 damage per round"
        },
        {
          "key": "Two-handed Repulsors",
          "value": ""
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "65"
        },
        {
          "key": "Spell Field Damage Falloff",
          "value": "40% falloff at 5m"
        },
        {
          "key": "Fire Rate",
          "value": "1.39 rounds per second"
        },
        {
          "key": "Ammo Consumption",
          "value": "16 damage per round"
        }
      ]
    },
    {
      "name": "Repulsor Blast (Armor Overdrive)",
      "slug": "repulsor-blast-armor-overdrive",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d69cf17a-732e-486d-87e3-43c5892e42c3.png",
      "localImgUrl": "/ability_images/iron-man/repulsor-blast-armor-overdrive.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Damage",
          "value": "45"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "65"
        },
        {
          "key": "Spell Field Damage Falloff",
          "value": "40% falloff at 5m"
        },
        {
          "key": "Fire Rate",
          "value": "1.33 rounds per second"
        }
      ]
    },
    {
      "name": "Unibeam",
      "slug": "unibeam",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/5a005241-4e91-4240-9da0-671454971524.png",
      "localImgUrl": "/ability_images/iron-man/unibeam.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Channeled"
        },
        {
          "key": "Ammo",
          "value": "100"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Mechanic",
          "value": "Repulsor Blast and Unibeam share the same ammo count"
        },
        {
          "key": "Beam Length",
          "value": "25m"
        },
        {
          "key": "Damage",
          "value": "140 damage per second"
        },
        {
          "key": "Ammo Consumption",
          "value": "10/s"
        }
      ]
    },
    {
      "name": "Unibeam (Armor Overdrive)",
      "slug": "unibeam-armor-overdrive",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/5a005241-4e91-4240-9da0-671454971524.png",
      "localImgUrl": "/ability_images/iron-man/unibeam-armor-overdrive.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Channeled"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Beam Length",
          "value": "25m"
        },
        {
          "key": "Damage",
          "value": "190/s"
        }
      ]
    },
    {
      "name": "Invincible Pulse Cannon",
      "slug": "invincible-pulse-cannon",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/35909ad4-f7f5-4d30-8d58-b076bebca067.png",
      "localImgUrl": "/ability_images/iron-man/invincible-pulse-cannon.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Projectile Speed",
          "value": "25 m/s"
        },
        {
          "key": "Dispersive Spell Field",
          "value": "Length: 15m, Width: 5m, Height: 5m"
        },
        {
          "key": "Damage Over Time",
          "value": "300/s"
        },
        {
          "key": "Explosion Range",
          "value": "10m spherical radius"
        },
        {
          "key": "Explosion Damage",
          "value": "1000"
        },
        {
          "key": "Spell Field Damage Falloff",
          "value": "5% falloff at 10m"
        },
        {
          "key": "Special Mechanic",
          "value": "As the projectile travels, it creates a dispersive spell field that deals Damage Over Time to nearby enemies"
        }
      ]
    },
    {
      "name": "Hyper-Velocity",
      "slug": "hyper-velocity",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ea996cd4-74a0-40d7-9498-3253084b9be2.png",
      "localImgUrl": "/ability_images/iron-man/hyper-velocity.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "100%"
        },
        {
          "key": "Maximum Energy",
          "value": "120"
        },
        {
          "key": "Energy Cost",
          "value": "15/s"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "10/s"
        }
      ]
    },
    {
      "name": "Hyper-Velocity (Armor Overdrive)",
      "slug": "hyper-velocity-armor-overdrive",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ea996cd4-74a0-40d7-9498-3253084b9be2.png",
      "localImgUrl": "/ability_images/iron-man/hyper-velocity-armor-overdrive.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "100%"
        },
        {
          "key": "Maximum Energy",
          "value": "Infinite"
        }
      ]
    },
    {
      "name": "Armor Overdrive",
      "slug": "armor-overdrive",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/27f07e85-4220-4227-892b-04c9850a7c02.png",
      "localImgUrl": "/ability_images/iron-man/armor-overdrive.png",
      "properties": [
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Bonus Health",
          "value": "100"
        },
        {
          "key": "Cooldown",
          "value": "20s"
        },
        {
          "key": "Special Effect",
          "value": "Each KO while Armor Overdrive is active extends its duration by 2s"
        }
      ]
    },
    {
      "name": "Micro-Missile Barrage",
      "slug": "micro-missile-barrage",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/19e4e5da-fa8d-4cf8-a817-1111d91dc389.png",
      "localImgUrl": "/ability_images/iron-man/micro-missile-barrage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Scatter-type projectile that generates a spell area upon impact"
        },
        {
          "key": "Missiles",
          "value": "16"
        },
        {
          "key": "Projectile Speed",
          "value": "15 m/s"
        },
        {
          "key": "Range",
          "value": "2m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "20 damage per round"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Mechanic",
          "value": "Launch missiles directly beneath Iron Man"
        }
      ]
    },
    {
      "name": "Micro-Missile Barrage (Armor Overdrive)",
      "slug": "micro-missile-barrage-armor-overdrive",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/19e4e5da-fa8d-4cf8-a817-1111d91dc389.png",
      "localImgUrl": "/ability_images/iron-man/micro-missile-barrage-armor-overdrive.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Scatter-type projectile that generates a spell area upon impact"
        },
        {
          "key": "Missiles",
          "value": "18"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Range",
          "value": "2m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "15 damage per round"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Mechanic",
          "value": "Launch in the direction of Iron Man's crosshair"
        }
      ]
    }
  ],
  "MOON KNIGHT": [
    {
      "name": "Crescent Dart",
      "slug": "crescent-dart",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/f4bab63c-dd7b-4ddc-b9f5-d0481acffaf3.png",
      "localImgUrl": "/ability_images/moon-knight/crescent-dart.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Triple shot that fires in a straight trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Fire Rate",
          "value": "The firing interval between shots is 0.05s, with an interval of 0.57s between each round of shooting"
        },
        {
          "key": "Damage",
          "value": "25 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 30m, decreasing to 50% at 50m"
        },
        {
          "key": "Maximum Bounce Distance",
          "value": "7m"
        },
        {
          "key": "Maximum Number of Bounces",
          "value": "3"
        },
        {
          "key": "Damage Falloff Per Bounce",
          "value": "-20%"
        },
        {
          "key": "Ammo",
          "value": "30"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Hand of Khonshu",
      "slug": "hand-of-khonshu",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9253ada4-37a7-4cc9-9008-2d3e748d8dc1.png",
      "localImgUrl": "/ability_images/moon-knight/hand-of-khonshu.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Delayed Spherical Spell Field"
        },
        {
          "key": "Duration",
          "value": "4.5s"
        },
        {
          "key": "Descending Range",
          "value": "8m radius"
        },
        {
          "key": "Frequency",
          "value": "4 hits per second"
        },
        {
          "key": "Number of Hits",
          "value": "18"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "150 damage per hit"
        },
        {
          "key": "Damage Falloff",
          "value": "Start at 1.5m, 70% falloff at 5m"
        },
        {
          "key": "Energy Cost",
          "value": "2800"
        }
      ]
    },
    {
      "name": "Night Glider",
      "slug": "night-glider",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/815eee35-da1f-4c84-808b-ce71aa39df9c.png",
      "localImgUrl": "/ability_images/moon-knight/night-glider.png",
      "properties": [
        {
          "key": "Horizontal Movement Speed",
          "value": "8.7m/s"
        },
        {
          "key": "Descending Speed",
          "value": "1.5m/s"
        }
      ]
    },
    {
      "name": "Ancient Ankh",
      "slug": "ancient-ankh",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/4dee2bf5-3255-4ce7-bfe4-463eb64bda06.png",
      "localImgUrl": "/ability_images/moon-knight/ancient-ankh.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Pull-In Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Pull-In Damage",
          "value": "20"
        },
        {
          "key": "Bouncing Range",
          "value": "7m spherical radius"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Moonlight Hook",
      "slug": "moonlight-hook",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/60e26c6a-92ea-4e8a-a669-4c3a9be668f7.png",
      "localImgUrl": "/ability_images/moon-knight/moonlight-hook.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Grappling Hook Speed",
          "value": "120m/s"
        },
        {
          "key": "Grappling Hook Length",
          "value": "25m"
        },
        {
          "key": "Maximum Distance",
          "value": "21.5m/s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Rising Leap",
      "slug": "rising-leap",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/f7f1a460-7069-42b0-b926-a5fd1c43d171.png",
      "localImgUrl": "/ability_images/moon-knight/rising-leap.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Moon Blade",
      "slug": "moon-blade",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/7864c28b-7c4b-4cc4-8e74-d600e7c586ee.png",
      "localImgUrl": "/ability_images/moon-knight/moon-blade.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "120m/s"
        },
        {
          "key": "Damage",
          "value": "80"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 30m, decreasing to 50% at 50m"
        },
        {
          "key": "Maximum Bounce Distance",
          "value": "7m"
        },
        {
          "key": "Maximum Number of Bounces",
          "value": "3"
        },
        {
          "key": "Damage Falloff Per Bounce",
          "value": "-20%"
        },
        {
          "key": "Bonus Health",
          "value": "25, up to a max of 76 Bonus Health"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Charges",
          "value": "2"
        }
      ]
    },
    {
      "name": "Triple Eclipse",
      "slug": "triple-eclipse",
      "button": "V",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241125/9b92fd1c-3cdc-4d9d-83cf-f43d6706a73d.png",
      "localImgUrl": "/ability_images/moon-knight/triple-eclipse.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Maximum Distance",
          "value": "3m"
        }
      ]
    }
  ],
  "NAMOR": [
    {
      "name": "Trident of Neptune",
      "slug": "trident-of-neptune",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cc74a8d7-aa7a-4bef-9777-6f2499ece5a4.png",
      "localImgUrl": "/ability_images/namor/trident-of-neptune.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile with an arced trajectory"
        },
        {
          "key": "Damage",
          "value": "75"
        },
        {
          "key": "Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "Fire Rate",
          "value": "1.09 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Aquatic Dominion Charge Per Hit",
          "value": "0.084"
        }
      ]
    },
    {
      "name": "Horn of Proteus",
      "slug": "horn-of-proteus",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/41fb388d-1b2c-433f-ab04-3a02562c5b19.png",
      "localImgUrl": "/ability_images/namor/horn-of-proteus.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Cylindrical Spell Field"
        },
        {
          "key": "Maximum Distance",
          "value": "30m"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with an inner circle radius of 3.5m, an outer circle radius of 9m, and a height of 3m"
        },
        {
          "key": "Hit Delay",
          "value": "1.5s"
        },
        {
          "key": "Damage",
          "value": "Inner Circle Damage: 500; Outer Circle Damage: 180"
        },
        {
          "key": "Immobilize Duration",
          "value": "1.5s"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        }
      ]
    },
    {
      "name": "Blessing of the Deep",
      "slug": "blessing-of-the-deep",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e301578f-ee43-42c9-a95a-f162259d62fb.png",
      "localImgUrl": "/ability_images/namor/blessing-of-the-deep.png",
      "properties": [
        {
          "key": "Vertical Moving Distance",
          "value": "7m"
        },
        {
          "key": "Maximum Duration",
          "value": "3s"
        },
        {
          "key": "Cooldown",
          "value": "20s"
        }
      ]
    },
    {
      "name": "Aquatic Dominion",
      "slug": "aquatic-dominion",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/4bf22127-5c87-4163-82d7-ba90c1edae57.png",
      "localImgUrl": "/ability_images/namor/aquatic-dominion.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Arced Trajectory (Summon Monstro Spawn), Direct Hit (Monstro Spawn)"
        },
        {
          "key": "Projectile Speed (Summon Monstro Spawn)",
          "value": "30 m/s"
        },
        {
          "key": "Monstro Spawn Maximum Duration",
          "value": "8s"
        },
        {
          "key": "Monstro Spawn Health",
          "value": "125"
        },
        {
          "key": "Monstro Spawn Attack Range",
          "value": "40m"
        },
        {
          "key": "Monstro Spawn Maximum Quantity",
          "value": "2"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Default Charging Speed",
          "value": "0.1/s"
        },
        {
          "key": "Default",
          "value": ""
        },
        {
          "key": "Monstro Spawn Fire Rate",
          "value": "2 rounds per second"
        },
        {
          "key": "Monstro Spawn Damage",
          "value": "18"
        },
        {
          "key": "Monstro Spawn Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 50% at 40m"
        },
        {
          "key": "Enhanced",
          "value": ""
        },
        {
          "key": "Duration",
          "value": "2s"
        },
        {
          "key": "Monstro Spawn Fire Rate",
          "value": "5 rounds per second"
        },
        {
          "key": "Monstro Spawn Damage",
          "value": "12"
        },
        {
          "key": "Monstro Spawn Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 30% at 40m"
        }
      ]
    },
    {
      "name": "Wrath of the Seven Seas",
      "slug": "wrath-of-the-seven-seas",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/0e8f873c-9edf-43ff-87f8-1db24dcb4500.png",
      "localImgUrl": "/ability_images/namor/wrath-of-the-seven-seas.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Arced projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Damage",
          "value": "40"
        },
        {
          "key": "Projectile Speed",
          "value": "150 m/s"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "60"
        },
        {
          "key": "Spell Field Damage Falloff",
          "value": "50% falloff at 3m"
        },
        {
          "key": "Enhanced Monstro Spawn Projectile Damage",
          "value": "60"
        },
        {
          "key": "Enhanced Monstro Spawn Projectile Speed",
          "value": "120 m/s"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    }
  ],
  "STAR-LORD": [
    {
      "name": "Element Guns",
      "slug": "element-guns",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/947d9975-ec6d-4d17-b00b-ce4642fafebc.png",
      "localImgUrl": "/ability_images/star-lord/element-guns.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire shots with spread."
        },
        {
          "key": "Damage",
          "value": "6.5 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 10m, decreasing to 65% at 25m"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "After 2 consecutive shots, the spread increases to 0.15m; after 5 consecutive shots, the spread expands to 0.24m"
        },
        {
          "key": "Fire Rate",
          "value": "40 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "50"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Galactic Legend",
      "slug": "galactic-legend",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cdfdc8b1-27e7-4a28-a666-3a3387b92263.png",
      "localImgUrl": "/ability_images/star-lord/galactic-legend.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectile."
        },
        {
          "key": "Damage",
          "value": "6.5 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 25m, decreasing to 75% at 40m"
        },
        {
          "key": "Fire Rate",
          "value": "40 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "40"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Movement Boost",
          "value": "20%"
        },
        {
          "key": "Reload Time Reduction",
          "value": "70%"
        },
        {
          "key": "Maximum Locking Distance",
          "value": "40m"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Special Mechanic",
          "value": "During this period, Star-Lord's Reload Speed increases significantly"
        }
      ]
    },
    {
      "name": "Rocket Propulsion",
      "slug": "rocket-propulsion",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/2c065ae8-398d-4001-a38d-c30a2d4737bc.png",
      "localImgUrl": "/ability_images/star-lord/rocket-propulsion.png",
      "properties": [
        {
          "key": "Movement Boost",
          "value": "100%"
        },
        {
          "key": "Maximum Energy",
          "value": "1800"
        },
        {
          "key": "Energy Cost",
          "value": "300/s"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "100/s"
        }
      ]
    },
    {
      "name": "Blaster Barrage",
      "slug": "blaster-barrage",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/00802ad1-6900-44dc-a134-258fae77b326.png",
      "localImgUrl": "/ability_images/star-lord/blaster-barrage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Duration",
          "value": "3s"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Attack Interval",
          "value": "0.1 per hit"
        },
        {
          "key": "Damage",
          "value": "7.5 damage per hit"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 4m, decreasing to 80% at 8m"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "Stellar Shift",
      "slug": "stellar-shift",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/8f25f3a9-7dba-437d-b794-fed37ea2fdd3.png",
      "localImgUrl": "/ability_images/star-lord/stellar-shift.png",
      "properties": [
        {
          "key": "Invincibility Duration",
          "value": "0.37s"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Recharge Speed",
          "value": "5s per charge"
        },
        {
          "key": "Bonus Health",
          "value": "Unleashing Stellar Shift will grant Star-Lord 25 Bonus Health. Maximum Bonus Health is 25. Bonus Health falloff begins at 3s, decreasing to 0 in 1s."
        }
      ]
    }
  ],
  "SCARLET WITCH": [
    {
      "name": "Chaos Control",
      "slug": "chaos-control",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9df1d11b-6486-4f0e-83a8-b7e5dca461b6.png",
      "localImgUrl": "/ability_images/scarlet-witch/chaos-control.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Cylindrical Spell Field"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a radius of 3m and a height of 20m"
        },
        {
          "key": "Fire Rate",
          "value": "0.1s per hit"
        },
        {
          "key": "Damage",
          "value": "8.5 per hit"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 10m, decreasing to 90% at 20m"
        },
        {
          "key": "Chthonian Burst Recharge Per Hit",
          "value": "0.15 per hit"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Effect 1",
          "value": "Attack the nearest enemy within range"
        },
        {
          "key": "Special Effect 2",
          "value": "Hitting with Chaos Control charges Chthonian Burst"
        }
      ]
    },
    {
      "name": "Reality Erasure",
      "slug": "reality-erasure",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9fe279e3-1ca1-4202-b925-4eaddc649f14.png",
      "localImgUrl": "/ability_images/scarlet-witch/reality-erasure.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Range",
          "value": "15m spherical radius"
        },
        {
          "key": "Damage",
          "value": "9999"
        },
        {
          "key": "Charge Time",
          "value": "4s"
        },
        {
          "key": "Slow Rate",
          "value": "Begin to slow down by 1.5s, with the effect gradually increasing to -25% by 3.5s"
        },
        {
          "key": "Bonus Health (Self)",
          "value": "100"
        },
        {
          "key": "Special Effect",
          "value": "During this period, Scarlet Witch enters a Free-flight state, pulls in nearby enemies (within 15m radius) during cast charge. Max pull speed up to 3m/s"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        }
      ]
    },
    {
      "name": "Mystic Projection",
      "slug": "mystic-projection",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a1bd056d-4040-4dda-a79a-c1c721718e2b.png",
      "localImgUrl": "/ability_images/scarlet-witch/mystic-projection.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Duration",
          "value": "1.5s"
        },
        {
          "key": "Movement Boost",
          "value": "50%"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Recharge Speed",
          "value": "10s per charge"
        },
        {
          "key": "Special Effect",
          "value": "During this period, Scarlet Witch enters the Projection state, can be healed by teammates"
        }
      ]
    },
    {
      "name": "Dark Seal",
      "slug": "dark-seal",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/06d393d2-e8b7-443c-8e04-3696ecefac86.png",
      "localImgUrl": "/ability_images/scarlet-witch/dark-seal.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Spell Field Generation Delay",
          "value": "0.8s"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Duration",
          "value": "4.5s"
        },
        {
          "key": "Detection Interval",
          "value": "1.25s"
        },
        {
          "key": "Stun Duration Per Detection",
          "value": "0.5s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Telekinesis",
      "slug": "telekinesis",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/2893e078-cc3e-49ec-8447-4ff73a549139.png",
      "localImgUrl": "/ability_images/scarlet-witch/telekinesis.png",
      "properties": [
        {
          "key": "Horizontal Movement Speed",
          "value": "6 m/s"
        },
        {
          "key": "Descending Speed",
          "value": "3.5 m/s"
        }
      ]
    },
    {
      "name": "Chthonian Burst",
      "slug": "chthonian-burst",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/97e67269-1308-46d2-aef0-99ef179d9748.png",
      "localImgUrl": "/ability_images/scarlet-witch/chthonian-burst.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "120 m/s"
        },
        {
          "key": "Projectile Damage",
          "value": "40"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "40"
        },
        {
          "key": "Charges",
          "value": "4"
        },
        {
          "key": "Default Charging Speed",
          "value": "0.2/s"
        }
      ]
    }
  ],
  "WINTER SOLDIER": [
    {
      "name": "Roterstern",
      "slug": "roterstern",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/c394a786-61e2-4311-af38-ddbb77fb0c17.png",
      "localImgUrl": "/ability_images/winter-soldier/roterstern.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "180 m/s"
        },
        {
          "key": "Projectile Damage",
          "value": "80"
        },
        {
          "key": "Range",
          "value": "Cone-shaped spell field with a 5m radius and an apex angle of 90°"
        },
        {
          "key": "Spell Field Damage",
          "value": "45"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 70% at 40m"
        },
        {
          "key": "Fire Rate",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "3"
        },
        {
          "key": "Critical Hit",
          "value": "Projectile: Yes; Spell Field: No"
        },
        {
          "key": "Special Mechanic",
          "value": "Enemies that take damage from the projectile will no longer receive damage from the spell field"
        }
      ]
    },
    {
      "name": "Kraken Impact",
      "slug": "kraken-impact",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a53ce147-45d7-472a-b01d-27c0824f21e0.png",
      "localImgUrl": "/ability_images/winter-soldier/kraken-impact.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "70"
        },
        {
          "key": "Culling Duration",
          "value": "5s"
        },
        {
          "key": "Culling Threshold",
          "value": "20% Health"
        },
        {
          "key": "Next Kraken Impact After A Culling",
          "value": "8s"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        }
      ]
    },
    {
      "name": "Trooper's Fist",
      "slug": "troopers-fist",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/239b4e01-33ed-4f71-afd9-845810e96b8e.png",
      "localImgUrl": "/ability_images/winter-soldier/troopers-fist.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Average Speed",
          "value": "30 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "9m"
        },
        {
          "key": "Seize Damage",
          "value": "25"
        },
        {
          "key": "Range",
          "value": "Length: 4.5m, Width: 4.5m, Height: 2m"
        },
        {
          "key": "Knockback Damage",
          "value": "65"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Tainted Voltage",
      "slug": "tainted-voltage",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/65cf216c-9ad1-4a8e-9e2c-d7f1c2a9964c.png",
      "localImgUrl": "/ability_images/winter-soldier/tainted-voltage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "100 m/s"
        },
        {
          "key": "Damage",
          "value": "55"
        },
        {
          "key": "Slow Rate",
          "value": "-35%"
        },
        {
          "key": "Slow Duration",
          "value": "2s"
        },
        {
          "key": "Special Mechanic",
          "value": "Projectiles pierce through enemies"
        },
        {
          "key": "Cooldown",
          "value": "5s"
        }
      ]
    },
    {
      "name": "Bionic Hook",
      "slug": "bionic-hook",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/4173fa58-8641-47f9-9ee5-b63472fe074e.png",
      "localImgUrl": "/ability_images/winter-soldier/bionic-hook.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Charge Time",
          "value": "0.5s - 4s"
        },
        {
          "key": "Range",
          "value": "The projectile can travel up to 10m with a 0.5s charge. As the charge time increases, it can reach a maximum distance of 20m with a 1s charge"
        },
        {
          "key": "Projectile Damage",
          "value": "15"
        },
        {
          "key": "Range",
          "value": "Cone-shaped spell field with a 4.5m radius and an apex angle of 80°"
        },
        {
          "key": "Spell Field Damage",
          "value": "20"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Ceaseless Charge",
      "slug": "ceaseless-charge",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/55a1b572-78dd-47c3-8006-5b26e8d8813a.png",
      "localImgUrl": "/ability_images/winter-soldier/ceaseless-charge.png",
      "properties": [
        {
          "key": "Bonus Health (Self)",
          "value": "40 (Bionic Hook & Tainted Voltage), 50 (Trooper's Fist, Kraken Impact)"
        }
      ]
    }
  ],
  "MAGIK": [
    {
      "name": "Soulsword",
      "slug": "soulsword",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/3c254667-aec0-4d1f-bac8-8f74e5c7ec57.png",
      "localImgUrl": "/ability_images/magik/soulsword.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "75"
        },
        {
          "key": "Maximum Distance",
          "value": "6.5m"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 4.5m, decreasing to 50% at 6.5m"
        },
        {
          "key": "Attack Interval",
          "value": "0.83s per hit"
        }
      ]
    },
    {
      "name": "Darkchild",
      "slug": "darkchild",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/54ceb957-f089-4149-9b6e-f19b0b434f76.png",
      "localImgUrl": "/ability_images/magik/darkchild.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Transformation"
        },
        {
          "key": "Duration",
          "value": "12s"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Special Effect",
          "value": "When in the Darkchild state, all of Magik's abilities are enhanced"
        }
      ]
    },
    {
      "name": "Stepping Discs",
      "slug": "stepping-discs",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/83bdc026-b6c1-4c72-8a4e-b82036d06a5b.png",
      "localImgUrl": "/ability_images/magik/stepping-discs.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Average Speed",
          "value": "12m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "10m"
        },
        {
          "key": "Combo Ability Casting Window",
          "value": "3s"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Special Effect 1",
          "value": "Magik is invincible while moving"
        },
        {
          "key": "Special Effect 2",
          "value": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon's Rage"
        }
      ]
    },
    {
      "name": "Umbral Incursion",
      "slug": "umbral-incursion",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/23e2f98e-b25d-465f-8aca-92772da73677.png",
      "localImgUrl": "/ability_images/magik/umbral-incursion.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Average Speed",
          "value": "46m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "16m"
        },
        {
          "key": "Upward Slash Damage",
          "value": "85"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "Eldritch Whirl",
      "slug": "eldritch-whirl",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a360c242-9475-4d7b-ba43-efb57fdbc44a.png",
      "localImgUrl": "/ability_images/magik/eldritch-whirl.png",
      "properties": [
        {
          "key": "Casting",
          "value": "A cylindrical spell field in melee range"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a radius of 6m and a height of 5m"
        }
      ]
    },
    {
      "name": "Magik Slash",
      "slug": "magik-slash",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ddcc3be2-0a9f-4588-bbeb-b6ecc289d8cf.png",
      "localImgUrl": "/ability_images/magik/magik-slash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged projectile that travels in a straight trajectory"
        },
        {
          "key": "Maximum Charge Time",
          "value": "2s"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Damage",
          "value": "45 - 81 (Maximum damage is achieved after 1.2s of charging)"
        },
        {
          "key": "Special Effect",
          "value": "Projectile pierces enemies and reduces Stepping Discs cooldown by 1s per enemy pierced"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Demon's Rage",
      "slug": "demons-rage",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a9c67524-0a71-4106-8a95-f26d78aa15e1.png",
      "localImgUrl": "/ability_images/magik/demons-rage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "A cuboid spell field in melee range"
        },
        {
          "key": "Damage",
          "value": "20 damage per hit"
        },
        {
          "key": "Attack Speed",
          "value": "0.25s per hit"
        },
        {
          "key": "Range",
          "value": "Length: 6.5m, Width: 3m, Height: 3m"
        },
        {
          "key": "Maximum Duration for Summons",
          "value": "4s"
        },
        {
          "key": "Summons' Health",
          "value": "100"
        }
      ]
    },
    {
      "name": "Limbo's Might",
      "slug": "limbos-might",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ca2c47d6-8349-4bae-b6bc-58436c47776b.png",
      "localImgUrl": "/ability_images/magik/limbos-might.png",
      "properties": [
        {
          "key": "Conversion Rate",
          "value": "30%"
        },
        {
          "key": "Bonus Max Health",
          "value": "150"
        },
        {
          "key": "Energy Cost Special Effect",
          "value": "Convert damage taken into Bonus Health"
        }
      ]
    },
    {
      "name": "Soulsword",
      "slug": "soulsword",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/1429fdcf-3e9f-4dd9-873e-4ccf6f758cfd.png",
      "localImgUrl": "/ability_images/magik/soulsword.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "Deals 3 hits at intervals of 0.15s, with each hit dealing 35 damage"
        },
        {
          "key": "Maximum Distance",
          "value": "10m"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 6m, decreasing to 25% at 10m"
        },
        {
          "key": "Attack Interval",
          "value": "1 hit per second"
        }
      ]
    },
    {
      "name": "Stepping Discs",
      "slug": "stepping-discs",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/77738b7f-79a1-4eae-8d72-8bbda393bd5e.png",
      "localImgUrl": "/ability_images/magik/stepping-discs.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Average Speed",
          "value": "17m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "10m"
        },
        {
          "key": "Combo Ability Casting Window",
          "value": "3s"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Special Effect 1",
          "value": "Magik is invincible while moving"
        },
        {
          "key": "Special Effect 2",
          "value": "Magik can perform a combo ability within a certain time frame, choosing between Eldritch Whirl or Demon's Rage"
        }
      ]
    },
    {
      "name": "Umbral Incursion",
      "slug": "umbral-incursion",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d5f0b817-5275-4e8f-a1cf-7674cfe5e077.png",
      "localImgUrl": "/ability_images/magik/umbral-incursion.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Average Speed",
          "value": "60m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "20m"
        },
        {
          "key": "Upward Slash Damage",
          "value": "140"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Eldritch Whirl",
      "slug": "eldritch-whirl",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ab4444b3-e2b2-4855-bce8-ac5e4aadec45.png",
      "localImgUrl": "/ability_images/magik/eldritch-whirl.png",
      "properties": [
        {
          "key": "Casting",
          "value": "A cylindrical spell field in melee range"
        },
        {
          "key": "Damage",
          "value": "Deals 3 hits at intervals of 0.25s, each dealing 45 damage"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a radius of 12m and a height of 5m"
        }
      ]
    },
    {
      "name": "Magik Slash",
      "slug": "magik-slash",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/055e35e2-253d-45da-ae04-82984115f741.png",
      "localImgUrl": "/ability_images/magik/magik-slash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Maximum Charge Time",
          "value": "2s"
        },
        {
          "key": "Projectile Speed",
          "value": "100m/s"
        },
        {
          "key": "Damage",
          "value": "90 - 180 (Maximum damage is achieved after 1.8s of charging)"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        }
      ]
    },
    {
      "name": "Demon's Rage",
      "slug": "demons-rage",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/7c8271e5-5e8c-4394-a7d5-7a9e6f578295.png",
      "localImgUrl": "/ability_images/magik/demons-rage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "A cuboid spell field in melee range"
        },
        {
          "key": "Damage",
          "value": "25 damage per hit"
        },
        {
          "key": "Attack Speed",
          "value": "0.25s per hit"
        },
        {
          "key": "Range",
          "value": "Length: 6m, Width: 4m, Height: 4m"
        },
        {
          "key": "Maximum Duration for Summons",
          "value": "4s"
        },
        {
          "key": "Summons' Health",
          "value": "200"
        }
      ]
    }
  ],
  "SPIDER-MAN": [
    {
      "name": "Spider-Power",
      "slug": "spider-power",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b69dc2e7-1a28-471e-a000-19b06a1adac4.png",
      "localImgUrl": "/ability_images/spider-man/spider-power.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Special Mechanic",
          "value": "The default attack is a punch, but after landing two consecutive punches, the next attack will be a flying kick"
        },
        {
          "key": "Punch",
          "value": ""
        },
        {
          "key": "Damage",
          "value": "25"
        },
        {
          "key": "Maximum Distance",
          "value": "3m"
        },
        {
          "key": "Attack Interval",
          "value": "0.37s per punch"
        },
        {
          "key": "Kick",
          "value": ""
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Maximum Distance",
          "value": "4m"
        },
        {
          "key": "Attack Interval",
          "value": "0.82s per kick"
        }
      ]
    },
    {
      "name": "Web-Cluster",
      "slug": "web-cluster",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/51836fcc-b278-46b2-80d6-3450f9902f18.png",
      "localImgUrl": "/ability_images/spider-man/web-cluster.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Charges",
          "value": "5"
        },
        {
          "key": "Recharge Speed",
          "value": "2s per shot"
        },
        {
          "key": "Projectile Speed",
          "value": "120 m/s"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 50% at 40m"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Spider-Tracer Duration",
          "value": "3s"
        },
        {
          "key": "Spider-Tracer Damage",
          "value": "45"
        }
      ]
    },
    {
      "name": "Spectacular Spin",
      "slug": "spectacular-spin",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/df0e1190-adea-471c-aa47-186aaabe41dc.png",
      "localImgUrl": "/ability_images/spider-man/spectacular-spin.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Duration",
          "value": "2.4s"
        },
        {
          "key": "Attack Interval",
          "value": "0.08s per hit"
        },
        {
          "key": "Damage",
          "value": "15 damage per hit"
        },
        {
          "key": "Bonus Health (Self)",
          "value": "250"
        },
        {
          "key": "Slow Effect",
          "value": "-3% per hit"
        },
        {
          "key": "Slow Duration",
          "value": "1s"
        },
        {
          "key": "Hits Required to Stun",
          "value": "20"
        },
        {
          "key": "Stun Duration",
          "value": "1.5s"
        },
        {
          "key": "Energy Cost",
          "value": "2800"
        },
        {
          "key": "Special Effect",
          "value": "Striking an enemy applies a stacking Slow effect, and after reaching a certain number of stacks, the enemy will be Stunned"
        }
      ]
    },
    {
      "name": "Web-Swing",
      "slug": "web-swing",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/fb95e6a5-5e9d-44d7-b565-2cda190e0cb8.png",
      "localImgUrl": "/ability_images/spider-man/web-swing.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Maximum Webbing Length",
          "value": "30m"
        },
        {
          "key": "Charges",
          "value": "3"
        },
        {
          "key": "Recharge Speed",
          "value": "6s per charge"
        }
      ]
    },
    {
      "name": "Get Over Here!",
      "slug": "get-over-here",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d3b40d5d-cb78-4e6d-990c-0ec61404f8e0.png",
      "localImgUrl": "/ability_images/spider-man/get-over-here.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "20m"
        },
        {
          "key": "Projectile Damage",
          "value": "25"
        },
        {
          "key": "Kicking Distance",
          "value": "24m"
        },
        {
          "key": "Kick Damage",
          "value": "55"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Mechanic",
          "value": "Attack enemies marked with a Spider-Tracer, pulling Spider-Man towards them and performing a flying kick"
        }
      ]
    },
    {
      "name": "Amazing Combo",
      "slug": "amazing-combo",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/db4cbe9c-98b6-47b2-849b-655e63c86f87.png",
      "localImgUrl": "/ability_images/spider-man/amazing-combo.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Range",
          "value": "4m spherical radius"
        },
        {
          "key": "Damage",
          "value": "70"
        },
        {
          "key": "Charges",
          "value": "2"
        },
        {
          "key": "Recharge Speed",
          "value": "6s per charge"
        },
        {
          "key": "Cooldown",
          "value": "2s"
        }
      ]
    },
    {
      "name": "Thwip and Flip",
      "slug": "thwip-and-flip",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241124/82debb10-0166-41c3-914e-9dee98cd30af.png",
      "localImgUrl": "/ability_images/spider-man/thwip-and-flip.png",
      "properties": [
        {
          "key": "Special Mechanic",
          "value": "Can only be cast again after landing"
        }
      ]
    },
    {
      "name": "Spider-Sense",
      "slug": "spider-sense",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/70f075d3-fdcc-4339-b537-061af16fae55.png",
      "localImgUrl": "/ability_images/spider-man/spider-sense.png",
      "properties": [
        {
          "key": "Disappearance Time To Trigger Detection",
          "value": "3s"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        }
      ]
    },
    {
      "name": "Wall Crawl",
      "slug": "wall-crawl",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e0ab4409-cfaa-4e13-9731-240a09a6a553.png",
      "localImgUrl": "/ability_images/spider-man/wall-crawl.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "3 m/s"
        },
        {
          "key": "Sprinting Speed",
          "value": "9 m/s"
        }
      ]
    }
  ],
  "BLACK PANTHER": [
    {
      "name": "Vibranium Claws",
      "slug": "vibranium-claws",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/095862fd-2dce-4947-8996-58741ba3e326.png",
      "localImgUrl": "/ability_images/black-panther/vibranium-claws.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Melee"
        },
        {
          "key": "Damage",
          "value": "35"
        },
        {
          "key": "Maximum Distance",
          "value": "3m"
        },
        {
          "key": "Attack Interval",
          "value": "0.44s per hit"
        }
      ]
    },
    {
      "name": "Bast's Descent",
      "slug": "basts-descent",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/796baaa9-278e-464f-a394-bc5869dbc473.png",
      "localImgUrl": "/ability_images/black-panther/basts-descent.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Cuboid Spell Field"
        },
        {
          "key": "Range",
          "value": "Length: 22m, Width: 20m, Height: 7m"
        },
        {
          "key": "Casting Angle",
          "value": "150°"
        },
        {
          "key": "Damage",
          "value": "150"
        },
        {
          "key": "Energy Cost",
          "value": "3300"
        },
        {
          "key": "Special Effect",
          "value": "Gain 50% Damage Reduction during Bast's Descent startup animation"
        }
      ]
    },
    {
      "name": "Spirit Rend",
      "slug": "spirit-rend",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/5420a5ab-0ba8-4c9c-8953-7f60adf79cd2.png",
      "localImgUrl": "/ability_images/black-panther/spirit-rend.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Average Speed",
          "value": "50m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "15m"
        },
        {
          "key": "Damage",
          "value": "80"
        },
        {
          "key": "Bonus Health",
          "value": "25"
        },
        {
          "key": "Bonus Max Health",
          "value": "75"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Spinning Kick",
      "slug": "spinning-kick",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a56f606b-d519-49aa-9570-cc615be6f239.png",
      "localImgUrl": "/ability_images/black-panther/spinning-kick.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Movement-based damage ability"
        },
        {
          "key": "Average Speed",
          "value": "15m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "16m"
        },
        {
          "key": "Damage",
          "value": "75"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "Subtle Step",
      "slug": "subtle-step",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/715f8f12-5bf3-4f11-a583-ee4ad606136d.png",
      "localImgUrl": "/ability_images/black-panther/subtle-step.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "10m/s"
        }
      ]
    },
    {
      "name": "Spear Toss",
      "slug": "spear-toss",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/4ccd846a-f72e-4d69-aa9f-6c459f67648c.png",
      "localImgUrl": "/ability_images/black-panther/spear-toss.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Arced projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Charges",
          "value": "2"
        }
      ]
    },
    {
      "name": "Panther's Cunning",
      "slug": "panthers-cunning",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/07bd1118-a93b-49f7-8789-696e0480ee44.png",
      "localImgUrl": "/ability_images/black-panther/panthers-cunning.png",
      "properties": [
        {
          "key": "Trigger Condition",
          "value": "Health drops below 100"
        },
        {
          "key": "Damage Boost",
          "value": "20%"
        }
      ]
    }
  ],
  "HELA": [
    {
      "name": "Nightsword Thorn",
      "slug": "nightsword-thorn",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ea4b3942-f0b3-43b4-a2fc-d5b43b6a8b35.png",
      "localImgUrl": "/ability_images/hela/nightsword-thorn.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast direct hit"
        },
        {
          "key": "Damage",
          "value": "70"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 18m, decreasing to 70% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "2 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "10"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Goddess of Death",
      "slug": "goddess-of-death",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cc37d07b-7128-47a0-8706-240fda571a47.png",
      "localImgUrl": "/ability_images/hela/goddess-of-death.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Nastrond Crow Health",
          "value": "1000"
        },
        {
          "key": "Fire Rate",
          "value": "1 rounds per second"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Explosion Range",
          "value": "6m spherical radius"
        },
        {
          "key": "Explosion Damage",
          "value": "125"
        },
        {
          "key": "Explosion Damage Falloff",
          "value": "32% falloff at 4m."
        },
        {
          "key": "Energy Cost",
          "value": "4000"
        }
      ]
    },
    {
      "name": "Astral Flock",
      "slug": "astral-flock",
      "button": "Shift",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e9a46cd0-2dcc-4835-9f4b-f18302c03eac.png",
      "localImgUrl": "/ability_images/hela/astral-flock.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Dash Speed",
          "value": "15 m/s"
        },
        {
          "key": "Dash Distance",
          "value": "18m"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Bonus Health",
          "value": "25"
        },
        {
          "key": "Special Effect",
          "value": "Shapeshift into a Nastrond Crow and gain invincibility"
        }
      ]
    },
    {
      "name": "Soul Drainer",
      "slug": "soul-drainer",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/558313fc-c58a-4507-a812-18e9acf92b97.png",
      "localImgUrl": "/ability_images/hela/soul-drainer.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Arced projectile that generates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "40 m/s"
        },
        {
          "key": "Damage",
          "value": "1"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "40"
        },
        {
          "key": "Stun Duration",
          "value": "0.3s"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Piercing Night",
      "slug": "piercing-night",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b40f4698-b5ca-4cd1-a8fd-4ff916f1a5da.png",
      "localImgUrl": "/ability_images/hela/piercing-night.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight-line projectile that generates a spell field upon impact"
        },
        {
          "key": "Number of Projectiles",
          "value": "4"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Projectile Damage",
          "value": "10"
        },
        {
          "key": "Explosion Delay",
          "value": "3s"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Spell Field Damage",
          "value": "35 damage per round"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "Projectiles stick to enemies on hit"
        }
      ]
    },
    {
      "name": "Nastrond Crowstorm",
      "slug": "nastrond-crowstorm",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/f7bbe4b0-932e-421b-a60e-d5fb5560c6f7.png",
      "localImgUrl": "/ability_images/hela/nastrond-crowstorm.png",
      "properties": [
        {
          "key": "Delay",
          "value": "1.8s"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "80"
        }
      ]
    },
    {
      "name": "Hel's Descent",
      "slug": "hels-descent",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/29f6f04d-087b-4e97-8aeb-3b505b3c2952.png",
      "localImgUrl": "/ability_images/hela/hels-descent.png",
      "properties": [
        {
          "key": "Horizontal Movement Speed",
          "value": "6 m/s"
        },
        {
          "key": "Descending Speed",
          "value": "3.5 m/s"
        }
      ]
    }
  ],
  "STORM": [
    {
      "name": "Wind Blade",
      "slug": "wind-blade",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ac2de8df-0a48-4c10-b0be-090c2662d5e6.png",
      "localImgUrl": "/ability_images/storm/wind-blade.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile that fires in a straight trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Damage",
          "value": "55 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 15m, decreasing to 60% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "2 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "12"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Effect",
          "value": "Wind Blade pierces through enemies"
        }
      ]
    },
    {
      "name": "Omega Hurricane",
      "slug": "omega-hurricane",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/618d0d4a-f522-4ea9-9f11-64de62abe3ad.png",
      "localImgUrl": "/ability_images/storm/omega-hurricane.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Maximum Selection Duration",
          "value": "5s"
        },
        {
          "key": "Tornado Duration",
          "value": "5s"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Attack Interval",
          "value": "2 hits per second"
        },
        {
          "key": "Damage",
          "value": "80"
        },
        {
          "key": "Bonus Health (Self)",
          "value": "450"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Special Effect",
          "value": "Weather effects will be disabled during the Ultimate"
        }
      ]
    },
    {
      "name": "Weather Control",
      "slug": "weather-control",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/10b670aa-f6c6-4775-811a-5d9c4e3ae6cf.png",
      "localImgUrl": "/ability_images/storm/weather-control.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Range",
          "value": "15m spherical radius"
        },
        {
          "key": "Tornado",
          "value": ""
        },
        {
          "key": "Movement Boost (Self)",
          "value": "16%"
        },
        {
          "key": "Movement Boost (Ally)",
          "value": "8%"
        },
        {
          "key": "Special Effect",
          "value": "Using Wind Blade and Bolt Rush under this aura grants Storm Bonus Health. Damage Conversion Ratio: 25%, up to a max of 75 Bonus Health"
        },
        {
          "key": "Thunder",
          "value": ""
        },
        {
          "key": "Damage Boost (Self)",
          "value": "12%"
        },
        {
          "key": "Damage Boost (Ally)",
          "value": "8%"
        },
        {
          "key": "Special Effect",
          "value": "Under this aura, Wind Blade hits reduce Bolt Rush cooldown by 0.5s (only once per cast, even if hitting multiple enemies). Increase Bolt Rush spell field range radius from 1m to 1.5m"
        }
      ]
    },
    {
      "name": "Goddess Boost",
      "slug": "goddess-boost",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/af7bafa6-fe10-45d2-8a65-f1523f9c5223.png",
      "localImgUrl": "/ability_images/storm/goddess-boost.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spherical Spell Field"
        },
        {
          "key": "Range",
          "value": "15m spherical radius"
        },
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Enhanced Tornado",
          "value": ""
        },
        {
          "key": "Movement Boost (Self)",
          "value": "40%"
        },
        {
          "key": "Movement Boost (Ally)",
          "value": "20%"
        },
        {
          "key": "Enemy Slow Rate",
          "value": "-15%"
        },
        {
          "key": "Enhanced Thunder",
          "value": ""
        },
        {
          "key": "Damage Boost (Self)",
          "value": "25%"
        },
        {
          "key": "Damage Boost (Ally)",
          "value": "15%"
        },
        {
          "key": "Strike Frequency",
          "value": "2s per strike"
        },
        {
          "key": "Damage",
          "value": "35"
        }
      ]
    },
    {
      "name": "Bolt Rush",
      "slug": "bolt-rush",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/644cd425-b90f-41dd-b750-8d11c36e04d1.png",
      "localImgUrl": "/ability_images/storm/bolt-rush.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Straight Spell Field"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a radius of 1m and a height of 40m"
        },
        {
          "key": "Damage",
          "value": "80"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    }
  ],
  "HULK": [
    {
      "name": "Gamma Ray Gun",
      "slug": "gamma-ray-gun",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/8cb6a38e-5f26-483e-8b6c-92ff443084d1.png",
      "localImgUrl": "/ability_images/hulk/gamma-ray-gun.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Damage",
          "value": "16"
        },
        {
          "key": "Fire Rate",
          "value": "5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "25"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Puny Banner",
      "slug": "puny-banner",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9a3b272b-318b-45e2-a863-274aa7bcf288.png",
      "localImgUrl": "/ability_images/hulk/puny-banner.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Transformation"
        },
        {
          "key": "Energy Cost",
          "value": "600"
        },
        {
          "key": "Special Effect",
          "value": "The caster is immobilized during the transformation process and gains Invincibility"
        }
      ]
    },
    {
      "name": "Gamma Grenade",
      "slug": "gamma-grenade",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/3187b7a0-06b5-4e1c-babe-796554bc2430.png",
      "localImgUrl": "/ability_images/hulk/gamma-grenade.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with a downward delay that creates a spell field upon impact"
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "When the caster enters the spell field, it restores 50 gamma energy"
        }
      ]
    },
    {
      "name": "Heavy Blow",
      "slug": "heavy-blow",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cc774c86-d162-462f-95d0-1b11d36eed83.png",
      "localImgUrl": "/ability_images/hulk/heavy-blow.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Damage",
          "value": "40"
        },
        {
          "key": "Range",
          "value": "4.5m"
        },
        {
          "key": "Attack Interval",
          "value": "0.467s"
        }
      ]
    },
    {
      "name": "HULK SMASH!",
      "slug": "hulk-smash",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a3a3990b-5005-4616-abc2-96e48a971420.png",
      "localImgUrl": "/ability_images/hulk/hulk-smash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Transformation"
        },
        {
          "key": "Duration",
          "value": "12s"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Special Effect",
          "value": "The caster is immobilized during the transformation process and gains Invincibility"
        }
      ]
    },
    {
      "name": "Indestructible Guard",
      "slug": "indestructible-guard",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/4879fdb5-3227-4af4-9264-dd04c12941b4.png",
      "localImgUrl": "/ability_images/hulk/indestructible-guard.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast spell field that surrounds the caster"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Caster's Shield Value",
          "value": "200"
        },
        {
          "key": "Ally's Shield Value",
          "value": "100"
        },
        {
          "key": "Max Shield Duration",
          "value": "2.5s"
        },
        {
          "key": "Special Effect",
          "value": "When the caster's shield takes damage, 130% of the damage is converted into gamma energy. When an ally's shield takes damage, 10% of the damage is converted into gamma energy"
        }
      ]
    },
    {
      "name": "Radioactive Lockdown",
      "slug": "radioactive-lockdown",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/172254e3-9768-4dec-9157-76b456d5383d.png",
      "localImgUrl": "/ability_images/hulk/radioactive-lockdown.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile."
        },
        {
          "key": "Projectile Speed",
          "value": "100m/s"
        },
        {
          "key": "Damage",
          "value": "5"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Max Duration",
          "value": "2s"
        },
        {
          "key": "Special Effect",
          "value": "Heavy Blow and Gamma Burst can detect and damage irradiated enemies, and prematurely remove the status"
        }
      ]
    },
    {
      "name": "Incredible Leap",
      "slug": "incredible-leap",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b74339de-5816-4639-ba7f-d32d39f620cd.png",
      "localImgUrl": "/ability_images/hulk/incredible-leap.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged Dash"
        },
        {
          "key": "Minimum Charge Time",
          "value": "0.4s"
        },
        {
          "key": "Maximum Charge Time",
          "value": "1.7s"
        },
        {
          "key": "Speed at Minimum Charge Time",
          "value": "19m/s"
        },
        {
          "key": "Speed at Maximum Charge Time",
          "value": "25m/s"
        },
        {
          "key": "Special Effect",
          "value": "Press Space during the Incredible Leap to cling to the wall you encounter"
        }
      ]
    },
    {
      "name": "Gamma Burst",
      "slug": "gamma-burst",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/c55bb9d3-8b8b-44ad-ac43-4fb9bcf02130.png",
      "localImgUrl": "/ability_images/hulk/gamma-burst.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile that can pierce through enemies"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Damage",
          "value": "65"
        },
        {
          "key": "Cooldown",
          "value": "Basic Cooldown 2s, with a charge of 6s per use."
        },
        {
          "key": "Special Effect",
          "value": "Each direct hit reduces Indestructible Guard cooldown by 1s"
        }
      ]
    },
    {
      "name": "Heavy Blow",
      "slug": "heavy-blow",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cc774c86-d162-462f-95d0-1b11d36eed83.png",
      "localImgUrl": "/ability_images/hulk/heavy-blow.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Damage",
          "value": "70"
        },
        {
          "key": "Range",
          "value": "5m"
        },
        {
          "key": "Attack Interval",
          "value": "0.52s"
        }
      ]
    },
    {
      "name": "World Breaker",
      "slug": "world-breaker",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e2c65ff1-2180-4f19-b7b0-1cf08ad1b1c4.png",
      "localImgUrl": "/ability_images/hulk/world-breaker.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Damage",
          "value": "Delivers 5 hits, each dealing 40 damage"
        },
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Range",
          "value": "5m"
        },
        {
          "key": "Special Effect",
          "value": "While performing the smash, Hulk gains a 30% Damage Reduction"
        }
      ]
    },
    {
      "name": "Radioactive Lockdown",
      "slug": "radioactive-lockdown",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/5965d229-691b-42be-859e-bc83191b3d1d.png",
      "localImgUrl": "/ability_images/hulk/radioactive-lockdown.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile"
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Damage",
          "value": "5"
        },
        {
          "key": "Cooldown",
          "value": "5s"
        },
        {
          "key": "Max Duration",
          "value": "2s"
        },
        {
          "key": "Special Effect",
          "value": "Heavy Blow and Gamma Burst can detect and damage irradiated enemies, and prematurely remove the status"
        }
      ]
    },
    {
      "name": "Incredible Leap",
      "slug": "incredible-leap",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b74339de-5816-4639-ba7f-d32d39f620cd.png",
      "localImgUrl": "/ability_images/hulk/incredible-leap.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged Dash"
        },
        {
          "key": "Minimum Charge Time",
          "value": "0.7s"
        },
        {
          "key": "Maximum Charge Time",
          "value": "1.5s"
        },
        {
          "key": "Speed at Minimum Charge Time",
          "value": "19.4m/s"
        },
        {
          "key": "Speed at Maximum Charge Time",
          "value": "25m/s"
        },
        {
          "key": "Special Effect",
          "value": "Press Space during the Incredible Leap to cling to the wall you encounter"
        }
      ]
    },
    {
      "name": "Gamma Burst",
      "slug": "gamma-burst",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/0ac60cf3-6b01-485b-b205-900f7ac674a4.png",
      "localImgUrl": "/ability_images/hulk/gamma-burst.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile that can pierce through enemies"
        },
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Damage",
          "value": "125"
        },
        {
          "key": "Cooldown",
          "value": "1s"
        }
      ]
    }
  ],
  "JEFF THE LAND SHARK": [
    {
      "name": "Joyful Splash",
      "slug": "joyful-splash",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/404c171f-9a95-4341-8313-b2f6d16fd6f1.png",
      "localImgUrl": "/ability_images/jeff-the-land-shark/joyful-splash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire, delayed projectile"
        },
        {
          "key": "Projectile Speed",
          "value": "100m/s"
        },
        {
          "key": "Healing Amount",
          "value": "130/s"
        },
        {
          "key": "Damage",
          "value": "70/s"
        },
        {
          "key": "Damage Falloff",
          "value": "Damage falloff starts at 15m to a maximum of 65% at 30m"
        },
        {
          "key": "Fire Rate",
          "value": "20 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "100"
        }
      ]
    },
    {
      "name": "Aqua Burst",
      "slug": "aqua-burst",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/247fc32e-57f7-4bc3-a52a-ed9e9a46e49e.png",
      "localImgUrl": "/ability_images/jeff-the-land-shark/aqua-burst.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Damage",
          "value": "Projectile Damage: 25 damage per round, Spell Field Damage: 45 damage per cast"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 1m, decreasing to 50% at 3m (projectile damage has no falloff)"
        },
        {
          "key": "Projectile Speed",
          "value": "100m/s"
        },
        {
          "key": "Fire Rate",
          "value": "1.75 rounds per second"
        },
        {
          "key": "Cooldown",
          "value": "3 charges, with each charge taking 3s to recharge"
        },
        {
          "key": "Special Effect",
          "value": "Direct hits can launch enemies up"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "It's Jeff!",
      "slug": "its-jeff",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/25d707ba-9f22-4b05-bb8e-d2eb22a8f1f5.png",
      "localImgUrl": "/ability_images/jeff-the-land-shark/its-jeff.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Special Effect1",
          "value": "After swallowing allies and enemies, Jeff will deal damage to enemies and heal allies for the duration of the effect, during which they will also benefit from Hide and Seek"
        },
        {
          "key": "Special Effect2",
          "value": "It's Jeff! (Ultimate Ability) leaves an 8m radius Healing Pool at the point of activation that heals allies within range by 100/s. Healing Pool lasts for 8s"
        },
        {
          "key": "Range",
          "value": "10m radius,5m high cylindrical spell field"
        },
        {
          "key": "Damage",
          "value": "25/s"
        },
        {
          "key": "Healing Amount",
          "value": "225/s"
        },
        {
          "key": "Bonus Health (Ally)",
          "value": "Overflow healing on swallowed allies grants 45 Health per second as Bonus Health, up to 150"
        },
        {
          "key": "Duration",
          "value": "6s"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        }
      ]
    },
    {
      "name": "Hide and Seek",
      "slug": "hide-and-seek",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ef573d4e-d703-4015-982f-e171765bc65f.png",
      "localImgUrl": "/ability_images/jeff-the-land-shark/hide-and-seek.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Special Effect",
          "value": "During the dive, gain Unstoppable, healing over time, and a Movement Boost, while Jeff's hitbox is reduced"
        },
        {
          "key": "Movement Boost",
          "value": "60%"
        },
        {
          "key": "Maximum Energy",
          "value": "120"
        },
        {
          "key": "Energy Cost",
          "value": "20/s"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "15/s"
        },
        {
          "key": "Healing Amount",
          "value": "35/s"
        }
      ]
    },
    {
      "name": "Healing Bubble",
      "slug": "healing-bubble",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/4d341032-2db5-4cb1-84eb-2ecaa167bd2f.png",
      "localImgUrl": "/ability_images/jeff-the-land-shark/healing-bubble.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Summons"
        },
        {
          "key": "Special Effect",
          "value": "Touching the bubble will immediately activate its effect"
        },
        {
          "key": "Healing Amount",
          "value": "30/s"
        },
        {
          "key": "Healing Boost",
          "value": "15%"
        },
        {
          "key": "Movement Boost",
          "value": "60%"
        },
        {
          "key": "Buff Duration",
          "value": "4s"
        },
        {
          "key": "Duration",
          "value": "180s"
        },
        {
          "key": "Cooldown",
          "value": "3 charges, with each charge taking 6s to recharge"
        }
      ]
    },
    {
      "name": "Oblivious Cuteness",
      "slug": "oblivious-cuteness",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d976ea1f-f15a-4b12-8a47-edbb88304548.png",
      "localImgUrl": "/ability_images/jeff-the-land-shark/oblivious-cuteness.png",
      "properties": [
        {
          "key": "Critical Hit Damage Reduction",
          "value": "50%"
        }
      ]
    }
  ],
  "THE PUNISHER": [
    {
      "name": "Adjudication",
      "slug": "adjudication",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e755fe97-976b-43f7-90d8-e791ca310df1.png",
      "localImgUrl": "/ability_images/the-punisher/adjudication.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectile"
        },
        {
          "key": "Damage",
          "value": "20 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 85% at 40m"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "Up to a 0.075m radius."
        },
        {
          "key": "Fire Rate",
          "value": "10 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "40"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Deliverance",
      "slug": "deliverance",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b420c662-6d55-438d-932a-d2947005b6de.png",
      "localImgUrl": "/ability_images/the-punisher/deliverance.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Shotgun projectiles that hit instantly"
        },
        {
          "key": "Damage",
          "value": "10 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 8m, decreasing to 40% at 15m"
        },
        {
          "key": "Bullets Fired Each Cast",
          "value": "16"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "0.6m"
        },
        {
          "key": "Fire Rate",
          "value": "1.43 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "8"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Final Judgement",
      "slug": "final-judgement",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6695cf9f-352c-4bf3-aab1-1824ecf39c95.png",
      "localImgUrl": "/ability_images/the-punisher/final-judgement.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectiles that hit instantly and have a tracking trajectory"
        },
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Slow Rate While Idling",
          "value": "-10%"
        },
        {
          "key": "Slow Rate While Shooting",
          "value": "-30%"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Gatling Gun",
          "value": ""
        },
        {
          "key": "Damage",
          "value": "8 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 70% at 40m"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "Start with a spread radius of 0.6m, which reduces to 0.3m after 50 shots, and further decreases to 0.15m after 100 shots"
        },
        {
          "key": "Fire Rate",
          "value": "33.33 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "Infinite"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Shoulder-mounted Missiles",
          "value": ""
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Interval Between Volleys",
          "value": "3s"
        },
        {
          "key": "Interval Between Missiles",
          "value": "0.3s"
        },
        {
          "key": "Maximum Number of Missiles Per Volley",
          "value": "8"
        },
        {
          "key": "Maximum Number of Locked-on Missiles Per Target",
          "value": "3"
        },
        {
          "key": "Maximum Locking Distance",
          "value": "40m"
        }
      ]
    },
    {
      "name": "Vantage Connection",
      "slug": "vantage-connection",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e39565ca-3dfd-4794-bb51-23ec19256130.png",
      "localImgUrl": "/ability_images/the-punisher/vantage-connection.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Cable Attachment Angle",
          "value": "20° - 160°"
        },
        {
          "key": "Cable Length",
          "value": "5m - 35m"
        },
        {
          "key": "Dash Speed",
          "value": "25 m/s"
        },
        {
          "key": "Cooldown",
          "value": "20s"
        }
      ]
    },
    {
      "name": "Culling Turret",
      "slug": "culling-turret",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/3806a440-7ae1-4a86-8b75-09c34be080fd.png",
      "localImgUrl": "/ability_images/the-punisher/culling-turret.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire projectiles that create a spell field upon impact"
        },
        {
          "key": "Damage",
          "value": "10 damage per round"
        },
        {
          "key": "Explosion Damage",
          "value": "10 damage per round"
        },
        {
          "key": "Explosion Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Crosshair Spread Radius (at 10m)",
          "value": "Start with a spread radius of 0.2m, which reduces to 0.1m after 10 shots, and further decreases to 0.05m after 20 shots"
        },
        {
          "key": "Fire Rate",
          "value": "12.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "200"
        },
        {
          "key": "Turret Health",
          "value": "600"
        },
        {
          "key": "Cooldown",
          "value": "20s"
        }
      ]
    },
    {
      "name": "Scourge Grenade",
      "slug": "scourge-grenade",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d9b61f83-54c3-42e7-9ac1-aadb46562237.png",
      "localImgUrl": "/ability_images/the-punisher/scourge-grenade.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Projectile with an arced trajectory"
        },
        {
          "key": "Projectile Speed",
          "value": "40 m/s"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "45"
        },
        {
          "key": "Backward Jump Distance",
          "value": "9m"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "Create a temporary smokescreen that obstructs vision"
        }
      ]
    },
    {
      "name": "Warrior's Gaze",
      "slug": "warriors-gaze",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/c121a9dc-8597-45f7-8495-4dea1b7c043b.png",
      "localImgUrl": "/ability_images/the-punisher/warriors-gaze.png",
      "properties": [
        {
          "key": "Special Effect",
          "value": "Retain vision of enemies that disappear from view for a short duration"
        },
        {
          "key": "Range",
          "value": "30m spherical radius"
        },
        {
          "key": "Duration",
          "value": "3s"
        }
      ]
    }
  ],
  "LUNA SNOW": [
    {
      "name": "Light & Dark Ice",
      "slug": "light-dark-ice",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9b9358c8-4975-450c-8f88-5e18d637d0c4.png",
      "localImgUrl": "/ability_images/luna-snow/light-dark-ice.png",
      "properties": [
        {
          "key": "Casting",
          "value": "A triple shot that hits instantly"
        },
        {
          "key": "Damage",
          "value": "24 damage per round, for a total of 72 damage"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 70% at 40m"
        },
        {
          "key": "Healing Amount",
          "value": "24 health per round, for a total of 72 health"
        },
        {
          "key": "Fire Rate",
          "value": "0.5s for three shots. The interval between the first two shots is 0.05s"
        },
        {
          "key": "Ammo",
          "value": "30"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Fate of Both Worlds",
      "slug": "fate-of-both-worlds",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/47cd68fc-feb1-45d8-b204-69e09294dc80.png",
      "localImgUrl": "/ability_images/luna-snow/fate-of-both-worlds.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent spell field that surrounds the caster"
        },
        {
          "key": "Healing Amount",
          "value": "250/s"
        },
        {
          "key": "Damage Boost",
          "value": "40%"
        },
        {
          "key": "Cast to heal the ally once",
          "value": "200"
        },
        {
          "key": "Shield Value",
          "value": "250"
        },
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Energy Cost",
          "value": "5000"
        }
      ]
    },
    {
      "name": "Ice Arts",
      "slug": "ice-arts",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/db8d7bd7-8433-4b9c-b79a-4893df673815.png",
      "localImgUrl": "/ability_images/luna-snow/ice-arts.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast spell field that pierces through enemies"
        },
        {
          "key": "Special Effect",
          "value": "Replace the previous Light & Dark Ice cast"
        },
        {
          "key": "Damage",
          "value": "50 damage per round"
        },
        {
          "key": "Healing Amount",
          "value": "75 health per round"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a radius of 1m and a height of 40m"
        },
        {
          "key": "Fire Rate",
          "value": "1.43 rounds per second"
        },
        {
          "key": "Duration",
          "value": "6s"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Share the Stage",
      "slug": "share-the-stage",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/c5d05de8-094f-4003-81bc-449b5e9b65d0.png",
      "localImgUrl": "/ability_images/luna-snow/share-the-stage.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Healing Boost",
          "value": "35%"
        },
        {
          "key": "Special Effect",
          "value": "Provide healing to allies marked with Idol Aura; Reduce Ice Arts cooldown by 2s whenever a hero with Idol Aura takes part in a KO"
        }
      ]
    },
    {
      "name": "Absolute Zero",
      "slug": "absolute-zero",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/3bbafdb7-d05d-4040-ac35-ba3ef0e021ba.png",
      "localImgUrl": "/ability_images/luna-snow/absolute-zero.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Damage",
          "value": "50"
        },
        {
          "key": "Special Effect",
          "value": "Freeze enemies for 2.7s. However, if they are attacked during the last 2.2s of the freeze, the effect will be canceled. Grants 50 Bonus Health per enemy hit"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Cryo Heart",
      "slug": "cryo-heart",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/1e2f39fb-fb72-4b78-923d-09ba6b076e4f.png",
      "localImgUrl": "/ability_images/luna-snow/cryo-heart.png",
      "properties": [
        {
          "key": "Healing Amount",
          "value": "30/s for 3 seconds"
        }
      ]
    },
    {
      "name": "Smooth Skate",
      "slug": "smooth-skate",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/c672e9c6-8368-4a9b-88b5-d78fefe000ba.png",
      "localImgUrl": "/ability_images/luna-snow/smooth-skate.png",
      "properties": [
        {
          "key": "Time Required to Start Skating",
          "value": "0.5s"
        },
        {
          "key": "Skating Speed",
          "value": "9.6m/s"
        }
      ]
    },
    {
      "name": "Number One Idol",
      "slug": "number-one-idol",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20251222/b4210d02-0f6e-4b2b-9550-dd23e58547fa.png",
      "localImgUrl": "/ability_images/luna-snow/number-one-idol.png",
      "properties": [
        {
          "key": "Healing Boost",
          "value": "10%"
        },
        {
          "key": "Damage Boost",
          "value": "10%"
        }
      ]
    }
  ],
  "ADAM WARLOCK": [
    {
      "name": "Quantum Magic",
      "slug": "quantum-magic",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/996e6c76-b2b8-42c6-9e17-c74f25768123.png",
      "localImgUrl": "/ability_images/adam-warlock/quantum-magic.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast direct hit"
        },
        {
          "key": "Damage",
          "value": "60 damage per round"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 20m, decreasing to 60% at 40m"
        },
        {
          "key": "Fire Rate",
          "value": "2 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "15"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Karmic Revival",
      "slug": "karmic-revival",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20260311/6c4e7eed-03e0-472a-a3a5-8f81cbd9cf4a.png",
      "localImgUrl": "/ability_images/adam-warlock/karmic-revival.png",
      "properties": [
        {
          "key": "MOVEMENT BOOST",
          "value": "4m/s"
        },
        {
          "key": "MAXIMUM ENERGY",
          "value": "120"
        },
        {
          "key": "ENERGY COST",
          "value": "30/s"
        },
        {
          "key": "ENERGY RECOVERY SPEED",
          "value": "8/s"
        }
      ]
    },
    {
      "name": "Karmic Revival",
      "slug": "karmic-revival",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/bedb33ea-a7d7-482f-a3ba-695afc84d7df.png",
      "localImgUrl": "/ability_images/adam-warlock/karmic-revival.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent spell field that surrounds the caster"
        },
        {
          "key": "Special Effect",
          "value": "Revive allies within range, centered on Adam. Continuously monitor for fallen allies within this range; if they enter the area, they can be revived at the casting location"
        },
        {
          "key": "Health Upon Revival",
          "value": "30% of the Max Health"
        },
        {
          "key": "Range",
          "value": "35m spherical radius"
        },
        {
          "key": "Duration",
          "value": "10s"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        },
        {
          "key": "Health Upon Revival",
          "value": "Allies revived will be blessed with Bonus Health equal to 70% of their Maximum Health with a 5s duration. Bonus Health falloff begins at 5s, decreasing to 0 in 2s."
        }
      ]
    },
    {
      "name": "Soul Bond",
      "slug": "soul-bond",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6d9c5f2f-ad6d-4f5e-9a1d-bf039b2d6fdc.png",
      "localImgUrl": "/ability_images/adam-warlock/soul-bond.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Special Effect 1",
          "value": "Adam Warlock will share a portion of the damage sustained by linked allies. If Adam Warlock sustains damage that would KO him due to the link, then the link will be broken, and he will retain 1 Health. The link will also break once enough damage is sustained, if Adam Warlock or the linked ally leave the link's range, or after a certain length of time has passed"
        },
        {
          "key": "Special Effect 2",
          "value": "Adam can hover and attack during the ability's duration"
        },
        {
          "key": "Healing Amount",
          "value": "15/s"
        },
        {
          "key": "Range",
          "value": "15m"
        },
        {
          "key": "Duration",
          "value": "6s"
        },
        {
          "key": "Maximum Damage Shared Per Target",
          "value": "250"
        },
        {
          "key": "Cooldown",
          "value": "40s"
        }
      ]
    },
    {
      "name": "Avatar Life Stream",
      "slug": "avatar-life-stream",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/00ceedf0-0fab-45f5-bcb6-009797271b65.png",
      "localImgUrl": "/ability_images/adam-warlock/avatar-life-stream.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Special Effect",
          "value": "Bouncing target does not include Adam Warlock"
        },
        {
          "key": "Healing Amount",
          "value": "95"
        },
        {
          "key": "Healing Amount (Self)",
          "value": "35"
        },
        {
          "key": "Number of Bounces",
          "value": "2"
        },
        {
          "key": "Range",
          "value": "20m spherical radius"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 6s to recharge; when a critical hit lands on an enemy, reduce the cooldown time of Avatar Life Stream by 1s."
        }
      ]
    },
    {
      "name": "Cosmic Cluster",
      "slug": "cosmic-cluster",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cac2ca73-29e2-4ea4-87f9-1f1c0c24f382.png",
      "localImgUrl": "/ability_images/adam-warlock/cosmic-cluster.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged release, with multiple delayed projectiles"
        },
        {
          "key": "Damage",
          "value": "38"
        },
        {
          "key": "Maximum Projectile Count",
          "value": "5"
        },
        {
          "key": "Fire Rate",
          "value": "The firing interval for a single charged shot is 0.3s, while the interval for multiple shots is 0.07s"
        },
        {
          "key": "Projectile Speed",
          "value": "100 m/s"
        },
        {
          "key": "Special Effect",
          "value": "Cosmic Cluster shares ammo with Quantum Magic, each hit reduces the cooldown of Avatar Life Stream by 0.08s."
        }
      ]
    },
    {
      "name": "Regenerative Cocoon",
      "slug": "regenerative-cocoon",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b85e229f-e718-4402-9c78-3ce82b3b5ee0.png",
      "localImgUrl": "/ability_images/adam-warlock/regenerative-cocoon.png",
      "properties": [
        {
          "key": "Cooldown",
          "value": "105s"
        }
      ]
    }
  ],
  "ROCKET RACCOON": [
    {
      "name": "Bombard Mode",
      "slug": "bombard-mode",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6d5fc9e6-f194-494f-bcb9-a0eea60e7f60.png",
      "localImgUrl": "/ability_images/rocket-raccoon/bombard-mode.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire, delayed projectile"
        },
        {
          "key": "Damage",
          "value": "16 damage per round"
        },
        {
          "key": "Projectile Speed",
          "value": "180 m/s"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 10m, decreasing to 40% at 20m"
        },
        {
          "key": "Fire Rate",
          "value": "12.05 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "45"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Repair Mode",
      "slug": "repair-mode",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/8e83a73c-dbc6-4d8b-bf0e-2f6fbffe20a4.png",
      "localImgUrl": "/ability_images/rocket-raccoon/repair-mode.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Healing Amount (Ally)",
          "value": "50/s"
        },
        {
          "key": "One-time Healing Amount",
          "value": "55"
        },
        {
          "key": "Healing Amount (Self)",
          "value": "30/s"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Fire Rate",
          "value": "2 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "8"
        },
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Special Effect",
          "value": "One-time healing for allies when projectile hits them，Bouncing Spheres will bounce off surfaces upon contact, with a maximum of 10 bounces. When they approach injured allies, their speed will reduce"
        },
        {
          "key": "Projectile Speed Reduction",
          "value": "7 m/s"
        }
      ]
    },
    {
      "name": "C.Y.A.",
      "slug": "cya",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/8fa6c871-fb91-4115-bf94-a1ccf6f12d2c.png",
      "localImgUrl": "/ability_images/rocket-raccoon/cya.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted ability that, when activated, summons a creature and detects allies within the area."
        },
        {
          "key": "Damage Boost",
          "value": "40%"
        },
        {
          "key": "Bonus Health",
          "value": "100/s"
        },
        {
          "key": "Bonus Max Health",
          "value": "150"
        },
        {
          "key": "Range",
          "value": "20m radius"
        },
        {
          "key": "Duration",
          "value": "12s"
        },
        {
          "key": "Summons' Health",
          "value": "800"
        },
        {
          "key": "Special Effect",
          "value": "During the ability's duration, linked allies will receive an additional 100 Bonus Health points per second, capping at 150. After breaking the link, this bonus starts to falloff after 1 second at a rate of 75 per/s"
        },
        {
          "key": "Energy Cost",
          "value": "4300"
        }
      ]
    },
    {
      "name": "Jetpack Dash",
      "slug": "jetpack-dash",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/66c6ccca-0e2b-4c87-87c3-29fddfa3b4c1.png",
      "localImgUrl": "/ability_images/rocket-raccoon/jetpack-dash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Dash Direction",
          "value": "Crosshair Direction"
        },
        {
          "key": "Dash Distance",
          "value": "8m"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 10s to recharge"
        }
      ]
    },
    {
      "name": "B.R.B.",
      "slug": "brb",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/f5f99d54-aeaa-4dc8-bad1-7c0e390434cf.png",
      "localImgUrl": "/ability_images/rocket-raccoon/brb.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Summons"
        },
        {
          "key": "Special Effect",
          "value": "Generate an item every 3s, including Armor Pack and Rocket Boots"
        },
        {
          "key": "Maximum Revive Distance",
          "value": "50m"
        },
        {
          "key": "Bonus Health From Armor Pack",
          "value": "25"
        },
        {
          "key": "Duration",
          "value": "300s"
        },
        {
          "key": "Cooldown",
          "value": "40s. You can reclaim the beacon by pressing E. When reclaimed, the cooldown will be reduced based on the beacon's remaining health. If you reclaim a full-health beacon, the minimum cooldown will be 5s"
        }
      ]
    },
    {
      "name": "Wild Crawl",
      "slug": "wild-crawl",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/2bf79c26-d564-4a9e-8148-85e5b44add4f.png",
      "localImgUrl": "/ability_images/rocket-raccoon/wild-crawl.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "8m/s"
        }
      ]
    },
    {
      "name": "Flying Ace",
      "slug": "flying-ace",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/75456c26-a53f-4d7e-955f-b663d7dd337a.png",
      "localImgUrl": "/ability_images/rocket-raccoon/flying-ace.png",
      "properties": [
        {
          "key": "Descending Speed",
          "value": "3.5m/s"
        }
      ]
    }
  ],
  "LOKI": [
    {
      "name": "Mystical Missile",
      "slug": "mystical-missile",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ed396f47-c71d-47d9-b81b-3345b8dc9622.png",
      "localImgUrl": "/ability_images/loki/mystical-missile.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Damage",
          "value": "The projectile deals no damage, while the spell field inflicts 25 damage per cast"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 0.5m, decreasing to 80% at 2.5m"
        },
        {
          "key": "Projectile Speed",
          "value": "100 m/s"
        },
        {
          "key": "Area Of Effect Healing",
          "value": "40 per hit"
        },
        {
          "key": "Fire Rate",
          "value": "1.75 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "10"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Healing Per Hit",
          "value": "10 per hit"
        }
      ]
    },
    {
      "name": "God of Mischief",
      "slug": "god-of-mischief",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/8348514b-e03f-442b-9aa2-ab90fcd2186a.png",
      "localImgUrl": "/ability_images/loki/god-of-mischief.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Special Effect",
          "value": "After transforming, Loki's Ultimate ability will be fully charged. Casting a transformation-type Ultimate ability will extend the duration of God of Mischief until the transformation ability ends"
        },
        {
          "key": "Duration",
          "value": "12s"
        },
        {
          "key": "Energy Cost",
          "value": "4500"
        }
      ]
    },
    {
      "name": "Regeneration Domain",
      "slug": "regeneration-domain",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e7dd8ace-749c-49a0-bc71-bb9c59a8ba2f.png",
      "localImgUrl": "/ability_images/loki/regeneration-domain.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Release a spell field at the location of Loki and the Illusion"
        },
        {
          "key": "Special Effect",
          "value": "The spell field is sustained by Rune Stones. It will disappear if the Rune Stone is destroyed or if its maximum duration is reached. Allies within the field will receive healing over time, and any damage taken will be converted into healing based on the amount of damage taken"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a radius of 5m and a height of 2m"
        },
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Conversion Rate",
          "value": "30%"
        },
        {
          "key": "Healing Amount",
          "value": "100/s"
        },
        {
          "key": "Rune Stone Health",
          "value": "100"
        },
        {
          "key": "Cooldown",
          "value": "30s"
        }
      ]
    },
    {
      "name": "Doppelganger",
      "slug": "doppelganger",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ef9f3e86-7ad9-4ad4-8ca5-490d580e567b.png",
      "localImgUrl": "/ability_images/loki/doppelganger.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "30m"
        },
        {
          "key": "Special Effect",
          "value": "Project an Illusion at a selected location"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 12s to recharge"
        }
      ]
    },
    {
      "name": "Devious Exchange",
      "slug": "devious-exchange",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ac0da903-c22d-4471-bff9-d7df0a2a6ba6.png",
      "localImgUrl": "/ability_images/loki/devious-exchange.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "30m"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Backstab",
      "slug": "backstab",
      "button": "V",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/fe10c19c-0649-4c4d-a406-4e7ea9ada27a.png",
      "localImgUrl": "/ability_images/loki/backstab.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Damage",
          "value": "Damage: 30; Backstab Damage: +15 (total of 45)"
        },
        {
          "key": "Range",
          "value": "3m"
        }
      ]
    },
    {
      "name": "Deception",
      "slug": "deception",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ed974a34-cbea-4529-b613-028bb481b125.png",
      "localImgUrl": "/ability_images/loki/deception.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Special Effect",
          "value": "Loki leaves an illusion in his place and becomes invisible while continuously healing himself. This invisibility has no time limit, but any actions other than casting Devious Exchange, reloading, or casting Doppelganger will render him visible"
        },
        {
          "key": "Healing Amount",
          "value": "Health regenerates at a rate of 20 Health per second while invisible"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    }
  ],
  "MANTIS": [
    {
      "name": "Life Energy Blast",
      "slug": "life-energy-blast",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/53a8b0e2-f33b-4630-a318-b11feeb63da7.png",
      "localImgUrl": "/ability_images/mantis/life-energy-blast.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact"
        },
        {
          "key": "Damage",
          "value": "55 damage per round"
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Damage Falloff",
          "value": "No falloff"
        },
        {
          "key": "Fire Rate",
          "value": "2.5 rounds per second"
        },
        {
          "key": "Ammo",
          "value": "15"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Special Effect",
          "value": "Critical hit generates 1 Life Orb"
        }
      ]
    },
    {
      "name": "Soul Resurgence",
      "slug": "soul-resurgence",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6185722d-c92f-4eab-8a8c-106168ad6e1a.png",
      "localImgUrl": "/ability_images/mantis/soul-resurgence.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent spell field that surrounds the caster"
        },
        {
          "key": "Healing Amount",
          "value": "150"
        },
        {
          "key": "Caster & Ally One-time Healing Amount",
          "value": "200"
        },
        {
          "key": "Movement Boost",
          "value": "3m/s"
        },
        {
          "key": "Excess Healing/Bonus Health Conversion",
          "value": "100%"
        },
        {
          "key": "Excess Healing/Max Health Conversion",
          "value": "150"
        },
        {
          "key": "Range",
          "value": "15m spherical radius"
        },
        {
          "key": "Duration",
          "value": "8s"
        },
        {
          "key": "Energy Cost",
          "value": "4300"
        }
      ]
    },
    {
      "name": "Spore Slumber",
      "slug": "spore-slumber",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/297739c8-b9b1-4d0c-9578-0ba4d2cede4e.png",
      "localImgUrl": "/ability_images/mantis/spore-slumber.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Damage",
          "value": "10"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Sedation Duration",
          "value": "3.5s"
        },
        {
          "key": "Special Effect",
          "value": "A Mantis illusions will manifest beside the sedated heroes. Allies can attack this illusion to awaken the affected hero"
        },
        {
          "key": "Illusion Health",
          "value": "100"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        }
      ]
    },
    {
      "name": "Allied Inspiration",
      "slug": "allied-inspiration",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/c43c7aff-d641-4b43-829b-ddf53bf2b3e7.png",
      "localImgUrl": "/ability_images/mantis/allied-inspiration.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Damage Boost",
          "value": "8%"
        },
        {
          "key": "Movement Boost",
          "value": "1m/s"
        },
        {
          "key": "Duration",
          "value": "8s (16s maximum duration)"
        },
        {
          "key": "Cooldown",
          "value": "Consume 1 Life Orb"
        }
      ]
    },
    {
      "name": "Natural Anger",
      "slug": "natural-anger",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a414ebec-b637-44c3-83dd-4db27749575b.png",
      "localImgUrl": "/ability_images/mantis/natural-anger.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Damage Boost",
          "value": "12%"
        },
        {
          "key": "Duration",
          "value": "8s (the duration cannot stack; repeatedly casting will only refresh the duration)"
        },
        {
          "key": "Cooldown",
          "value": "Consume 1 Life Orb"
        }
      ]
    },
    {
      "name": "Healing Flower",
      "slug": "healing-flower",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/cd2771ec-d276-4a64-91fd-faa67a121da6.png",
      "localImgUrl": "/ability_images/mantis/healing-flower.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Special Effect",
          "value": "Healing Flower provides two types of healing effects: One-time Healing and Healing Over Time"
        },
        {
          "key": "One-time Healing Amount",
          "value": "55"
        },
        {
          "key": "Healing Over Time Amount",
          "value": "10 + 2.5% of the target's maximum Health per second"
        },
        {
          "key": "Duration",
          "value": "8s (16s maximum duration)"
        },
        {
          "key": "Cooldown",
          "value": "Consume 1 Life Orb"
        }
      ]
    },
    {
      "name": "Nature's Favor",
      "slug": "natures-favor",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b921470f-e723-4129-847e-be24fd974552.png",
      "localImgUrl": "/ability_images/mantis/natures-favor.png",
      "properties": [
        {
          "key": "Time Required to Leave Combat",
          "value": "3s"
        },
        {
          "key": "Out-of-Combat Movement Speed",
          "value": "7.5m/s"
        },
        {
          "key": "Special Effect",
          "value": "Consume Life Orbs to receive Healing Over Time"
        },
        {
          "key": "Healing Amount",
          "value": "12.5 per second"
        },
        {
          "key": "Duration",
          "value": "8s"
        }
      ]
    }
  ],
  "PENI PARKER": [
    {
      "name": "Cyber-Web Cluster",
      "slug": "cyber-web-cluster",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/2b24b421-99cf-4e20-b584-8f8e755911af.png",
      "localImgUrl": "/ability_images/peni-parker/cyber-web-cluster.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Rapid-fire, delayed projectile that is accompanied by a spell field"
        },
        {
          "key": "Projectile Speed",
          "value": "150m/s"
        },
        {
          "key": "Range",
          "value": "1.5m spherical radius"
        },
        {
          "key": "Fire Rate",
          "value": "3.33 rounds per second"
        },
        {
          "key": "Damage",
          "value": "Projectile Damage: 15; Spell Field Damage: 15"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        },
        {
          "key": "Special Effect",
          "value": "20% slowdown on release"
        }
      ]
    },
    {
      "name": "Spider-Sweeper",
      "slug": "spider-sweeper",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/bcccc074-f210-4239-a6e1-05ae478859a6.png",
      "localImgUrl": "/ability_images/peni-parker/spider-sweeper.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Enhancement"
        },
        {
          "key": "Sweep Range",
          "value": "5m"
        },
        {
          "key": "Attack Interval",
          "value": "1s"
        },
        {
          "key": "Spider-Drone Generation Interval",
          "value": "0.5s"
        },
        {
          "key": "Arachno-Mine Attack Interval",
          "value": "0.7s"
        },
        {
          "key": "Maximum Arachno-Mine Quantity",
          "value": "7"
        },
        {
          "key": "Range",
          "value": "4m spherical radius"
        },
        {
          "key": "Duration",
          "value": "12s"
        },
        {
          "key": "Damage",
          "value": "Sweep Attack Damage: 60"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Special Effect",
          "value": "Gain 450 Bonus Health and a 70% Movement Boost"
        }
      ]
    },
    {
      "name": "Bionic Spider-Nest",
      "slug": "bionic-spider-nest",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b0a9458d-2a87-483c-a165-c362bf34d179.png",
      "localImgUrl": "/ability_images/peni-parker/bionic-spider-nest.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "10m"
        },
        {
          "key": "Spider-Nest Health",
          "value": "350"
        },
        {
          "key": "Range",
          "value": "12m spherical radius"
        },
        {
          "key": "Damage",
          "value": "Each Spider-Drone inflicts 40 damage"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Special Effect",
          "value": "Two Spider-Drones are generated every 3s, slows hit enemies by 8% for 2s, each hit stacks the effect and resets the slow period, stacking up to 40%"
        }
      ]
    },
    {
      "name": "Arachno-Mine",
      "slug": "arachno-mine",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a0c17f1d-4984-4961-af7a-515078b751a4.png",
      "localImgUrl": "/ability_images/peni-parker/arachno-mine.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Damage",
          "value": "100"
        },
        {
          "key": "Cooldown",
          "value": "4 charges, with each charge taking 4s to recharge"
        }
      ]
    },
    {
      "name": "Cyber-Bond",
      "slug": "cyber-bond",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6146023c-4c46-4135-aba6-79eff6014d3b.png",
      "localImgUrl": "/ability_images/peni-parker/cyber-bond.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Pull-back Distance",
          "value": "10m"
        },
        {
          "key": "Maximum Cyber-Bond Distance",
          "value": "19m, with the possibility to exceed this distance if descending"
        },
        {
          "key": "Projectile Speed",
          "value": "100m/s"
        },
        {
          "key": "Minimum Dash Distance",
          "value": "10m"
        },
        {
          "key": "Maximum Dash Distance",
          "value": "30m"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        }
      ]
    },
    {
      "name": "Wall Crawl",
      "slug": "wall-crawl",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/a812a9bf-dcaa-443a-870f-79586813d558.png",
      "localImgUrl": "/ability_images/peni-parker/wall-crawl.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "7.2m/s"
        }
      ]
    },
    {
      "name": "Cyber-Web Snare",
      "slug": "cyber-web-snare",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/036e9648-779e-48a7-ab8b-0e60bc0c5bd1.png",
      "localImgUrl": "/ability_images/peni-parker/cyber-web-snare.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Damage",
          "value": "5"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        },
        {
          "key": "Special Effect 1",
          "value": "Enemies hit are ensnared for 0.7s. While trapped in the Cyber-Web, Peni Parker receives 25 healing per second. Any excess healing is converted into Bonus Health, up to a maximum of 200 Health, and grants a 25% Movement Boost"
        },
        {
          "key": "Special Effect 2",
          "value": "Allies in Peni's Cyber-Webs now receive the same Healing Over Time and a Movement Boost effects as her. Movement Boost for allies is 25%, Healing is 15/s. Ally excess healing converts into Bonus Health, up to 25"
        }
      ]
    }
  ],
  "THOR": [
    {
      "name": "Mjolnir Bash",
      "slug": "mjolnir-bash",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/5767ff16-bdb0-4e38-be05-f86ae73aef7e.png",
      "localImgUrl": "/ability_images/thor/mjolnir-bash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast Spell Field"
        },
        {
          "key": "Range",
          "value": "4m"
        },
        {
          "key": "Attack Interval",
          "value": "0.6s"
        },
        {
          "key": "Damage",
          "value": "45"
        }
      ]
    },
    {
      "name": "God of Thunder",
      "slug": "god-of-thunder",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/68c2df37-4e4b-48be-af36-22a545b1cb8d.png",
      "localImgUrl": "/ability_images/thor/god-of-thunder.png",
      "properties": [
        {
          "key": "Casting",
          "value": "A persistent spell field that generates a one-time spell field upon expiration"
        },
        {
          "key": "Range",
          "value": "The sustained spell field is cylindrical, measuring 8m in radius and 20m in height, whereas the one-time spell field has an 8m spherical radius"
        },
        {
          "key": "Height",
          "value": "9m"
        },
        {
          "key": "Duration",
          "value": "1.5s"
        },
        {
          "key": "Damage",
          "value": "The sustained spell field lasts for 0.5s, dealing 40 damage, while the one-time spell field deals 220 damage"
        },
        {
          "key": "Special Effect",
          "value": "After Ultimate Ability lands, Stun surrounding enemies for 1s"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        }
      ]
    },
    {
      "name": "Storm Surge",
      "slug": "storm-surge",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b18044b4-d344-4400-95aa-1db27f994c9c.png",
      "localImgUrl": "/ability_images/thor/storm-surge.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Charged Dash"
        },
        {
          "key": "Maximum Charge Time",
          "value": "2s"
        },
        {
          "key": "Dash Distance",
          "value": "No charge: 10m; Full charge: 20m. When carrying an enemy, the ranges are 6m with no charge and 13m with full"
        },
        {
          "key": "Damage",
          "value": "No Charge Damage: 40; Full Charge Damage: 60"
        },
        {
          "key": "Thorforce Cost",
          "value": "1"
        }
      ]
    },
    {
      "name": "Lightning Realm",
      "slug": "lightning-realm",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/37d0dc4d-ca68-48f0-8e5a-d7511b05b02e.png",
      "localImgUrl": "/ability_images/thor/lightning-realm.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent Spell Field"
        },
        {
          "key": "Range",
          "value": "5m spherical radius"
        },
        {
          "key": "Maximum Duration",
          "value": "4s"
        },
        {
          "key": "Damage",
          "value": "Deal 40 damage when enemies cross the boundaries"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Special Effect",
          "value": "For each enemy within the spell area, 1 point of Thorforce is restored. Enemies that cross the boundary will be Slowed by 30%, Enemies that cross the boundary will receive an additional debuff that restricts aerial abilities for 2s."
        }
      ]
    },
    {
      "name": "Awakening Rune",
      "slug": "awakening-rune",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/77bc01c1-2967-4660-a899-87a8b6c3efe5.png",
      "localImgUrl": "/ability_images/thor/awakening-rune.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Ability Enhancement"
        },
        {
          "key": "Key (Enhanced)",
          "value": "Left Click"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Attack Interval",
          "value": "The first three stages last for 0.4s each, while the fourth stage lasts for 0.8s"
        },
        {
          "key": "Range",
          "value": "3m spherical radius"
        },
        {
          "key": "Duration",
          "value": "5s"
        },
        {
          "key": "Damage",
          "value": "Projectile Damage: 70, Spell Field Damage: 15 per second"
        },
        {
          "key": "Max Shield Duration",
          "value": "2.5s"
        },
        {
          "key": "Thorforce Cost",
          "value": "3"
        },
        {
          "key": "Special Effect",
          "value": "Inflict damage over time on nearby enemies; After casting Awakening Rune, you can manually cancel the Awakened state after a brief delay. At the end of the Awakened state, Thor restores 1 point of Thunderforce."
        }
      ]
    },
    {
      "name": "Hammer Throw",
      "slug": "hammer-throw",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/06301e2b-a041-47cb-bf81-009ef24c3a3d.png",
      "localImgUrl": "/ability_images/thor/hammer-throw.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Launch a single-target projectile that returns after a delayed hit"
        },
        {
          "key": "Projectile Speed",
          "value": "The projectile travels outward at a speed of 60m per second and returns at a speed of 80m per second"
        },
        {
          "key": "Maximum Distance",
          "value": "24m"
        },
        {
          "key": "Damage",
          "value": "Outward Projectile Damage: 45; Returning Projectile Damage: 20"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Effect",
          "value": "Hits grant 50 Bonus Health (only triggers once per throw, even if hitting multiple enemies)"
        }
      ]
    },
    {
      "name": "Thorforce",
      "slug": "thorforce",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/78caf91d-ecd4-431c-9e43-31558f4e5fa9.png",
      "localImgUrl": "/ability_images/thor/thorforce.png",
      "properties": [
        {
          "key": "Maximum Thorforce",
          "value": "3"
        },
        {
          "key": "Thorforce Recovery Speed",
          "value": "5s per Thorforce"
        },
        {
          "key": "Bonus Health Per Thorforce",
          "value": "Each point of Thorforce consumed grants 50 Bonus Health, while abilities that consume 3 points of Thorforce grant 150 Bonus Health"
        },
        {
          "key": "Bonus Max Health",
          "value": "150"
        },
        {
          "key": "Mjolnir Bash Energy Recovery Per Thorforce",
          "value": "5s"
        },
        {
          "key": "Thorforce Consumption Cooldown",
          "value": "1.5s"
        }
      ]
    }
  ],
  "MAGNETO": [
    {
      "name": "Iron Volley",
      "slug": "iron-volley",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/3401f142-e87e-40ad-8ff2-3a749a6f4984.png",
      "localImgUrl": "/ability_images/magneto/iron-volley.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact that also generates a spell field"
        },
        {
          "key": "Projectile Speed",
          "value": "80m/s"
        },
        {
          "key": "Charges",
          "value": "10"
        },
        {
          "key": "Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Range",
          "value": "Initially, it produces a spell field with a 1m spherical radius; when the projectile reaches maximum distance, the explosion radius expands to a spell field with a 3m spherical radius"
        },
        {
          "key": "Attack Interval",
          "value": "0.8s"
        },
        {
          "key": "Damage",
          "value": "Projectile Damage: 40. The spell field deals 40 damage at its center, reducing to 50% within a 3m radius from the center"
        }
      ]
    },
    {
      "name": "Meteor M",
      "slug": "meteor-m",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9cd870bb-e876-438b-9416-b230d990d3e8.png",
      "localImgUrl": "/ability_images/magneto/meteor-m.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Create a persistent spell field that launches a projectile upon completion, which generates another spell field on impact"
        },
        {
          "key": "Projectile Absorption Range",
          "value": "15m spherical radius"
        },
        {
          "key": "Projectile Speed",
          "value": "45m/s"
        },
        {
          "key": "Explosion Range",
          "value": "Initially, the ability has a spherical range with a radius of 5m. After charging for 4s, it expands to an 8m radius"
        },
        {
          "key": "Maximum Duration",
          "value": "4s"
        },
        {
          "key": "Damage",
          "value": "The projectile deals no damage. The base damage at the center of the spell field starts at 100 and increases to 300 when fully charged. Each point of Energy adds an extra 3 points of damage to the spell field, with damage reducing to 50% at a distance of 6m from the center"
        },
        {
          "key": "Energy Cost",
          "value": "3400"
        },
        {
          "key": "Special Effect",
          "value": "For each point of projectile damage absorbed, the power increases by 0.125, with a maximum absorption of 800 projectile damage"
        }
      ]
    },
    {
      "name": "Metallic Curtain",
      "slug": "metallic-curtain",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e834f5cc-ab25-4c64-8c84-4fc1e19f4f7c.png",
      "localImgUrl": "/ability_images/magneto/metallic-curtain.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Shield"
        },
        {
          "key": "Maximum Energy",
          "value": "100"
        },
        {
          "key": "Energy Cost",
          "value": "65/s"
        },
        {
          "key": "Energy Recovery Delay",
          "value": "1s"
        },
        {
          "key": "Energy Recovery Speed",
          "value": "11/s"
        },
        {
          "key": "Cooldown",
          "value": "3s"
        }
      ]
    },
    {
      "name": "Metal Bulwark",
      "slug": "metal-bulwark",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/3b28340a-e0b8-4801-98b5-32ca9934bb01.png",
      "localImgUrl": "/ability_images/magneto/metal-bulwark.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "20m"
        },
        {
          "key": "Shield Value",
          "value": "200"
        },
        {
          "key": "Max Shield Duration",
          "value": "2.5s"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Special Effect",
          "value": "The shield grants one charge of Iron Ring for every 100 damage it absorbs"
        }
      ]
    },
    {
      "name": "Iron Bulwark",
      "slug": "iron-bulwark",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/02e7eb06-6242-43ba-bd8d-3ae7e124f774.png",
      "localImgUrl": "/ability_images/magneto/iron-bulwark.png",
      "properties": [
        {
          "key": "Shield Value",
          "value": "200"
        },
        {
          "key": "Max Shield Duration",
          "value": "2.5s"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        },
        {
          "key": "Special Effect",
          "value": "The shield grants one charge of Iron Ring for every 100 damage it absorbs"
        }
      ]
    },
    {
      "name": "Mag-Cannon",
      "slug": "mag-cannon",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/fa0cf0a3-32cc-4104-8c74-4fe98a7b8628.png",
      "localImgUrl": "/ability_images/magneto/mag-cannon.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact"
        },
        {
          "key": "Projectile Speed",
          "value": "120m/s"
        },
        {
          "key": "Damage",
          "value": "Iron Rings' first charge deals 40 damage, the second charge deals 65 damage, and the third charge deals 90 damage"
        },
        {
          "key": "Cooldown",
          "value": "No cooldown, but the ability can only be activated when the Iron Ring has at least one charge"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Effect",
          "value": "When fully charged, the Iron Ring has a 6m knockback distance"
        }
      ]
    },
    {
      "name": "Magnetic Descent",
      "slug": "magnetic-descent",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/d59de34f-22d9-459b-9469-8a2bb8ce714c.png",
      "localImgUrl": "/ability_images/magneto/magnetic-descent.png",
      "properties": [
        {
          "key": "Horizontal Movement Speed",
          "value": "6m/s"
        },
        {
          "key": "Descending Speed",
          "value": "3.5m/s"
        }
      ]
    }
  ],
  "VENOM": [
    {
      "name": "Dark Predation",
      "slug": "dark-predation",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/bc30fb5a-7d0a-4acb-9cc7-68d9ce23471f.png",
      "localImgUrl": "/ability_images/venom/dark-predation.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Quad-cast delayed spell field"
        },
        {
          "key": "Range",
          "value": "15m"
        },
        {
          "key": "Attack Interval",
          "value": "0.9s, with a 0.1s interval between each tendril"
        },
        {
          "key": "Damage",
          "value": "20"
        },
        {
          "key": "Critical Hit",
          "value": "Yes"
        }
      ]
    },
    {
      "name": "Feast of the Abyss",
      "slug": "feast-of-the-abyss",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/8d6946a4-fdcd-4260-a36b-4d6367c22910.png",
      "localImgUrl": "/ability_images/venom/feast-of-the-abyss.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast spell field that surrounds the caster"
        },
        {
          "key": "Movement Boost",
          "value": "80%"
        },
        {
          "key": "Range",
          "value": "7m spherical radius"
        },
        {
          "key": "Maximum Duration",
          "value": "4s"
        },
        {
          "key": "Damage",
          "value": "Inflict damage equal to 50% of the target's health, followed by an additional 50 damage"
        },
        {
          "key": "Energy Cost",
          "value": "2500"
        },
        {
          "key": "Special Effect",
          "value": "130% of damage dealt is converted into Bonus Health"
        },
        {
          "key": "HEALING REDUCTION PROPORTION",
          "value": "30%"
        },
        {
          "key": "HEALING REDUCTION DURATION",
          "value": "4s"
        }
      ]
    },
    {
      "name": "Venom Swing",
      "slug": "venom-swing",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/e3d5d3b0-9605-4bdd-8e7d-5b10a96f6fdc.png",
      "localImgUrl": "/ability_images/venom/venom-swing.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Dash"
        },
        {
          "key": "Maximum Webbing Length",
          "value": "30m"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        }
      ]
    },
    {
      "name": "Symbiotic Resilience",
      "slug": "symbiotic-resilience",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6cbe943b-e6aa-46d3-9c54-bff3d7264fcc.png",
      "localImgUrl": "/ability_images/venom/symbiotic-resilience.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Cooldown",
          "value": "15s"
        },
        {
          "key": "Special Effect",
          "value": "Grant 100 Bonus Health and convert 120% of lost Health into Bonus Health"
        }
      ]
    },
    {
      "name": "Frenzied Arrival",
      "slug": "frenzied-arrival",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/bd5d9e69-ca07-465d-aafa-c7225d6a6f7f.png",
      "localImgUrl": "/ability_images/venom/frenzied-arrival.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "40m"
        },
        {
          "key": "Minimum Distance",
          "value": "3m"
        },
        {
          "key": "Range",
          "value": "6m spherical radius"
        },
        {
          "key": "Damage",
          "value": "65 damage, with damage falloff starting at 2m from the center of the spell field and decreasing to 40% at 6m"
        },
        {
          "key": "Cooldown",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "Knocks enemies inward, with an inward knockback angle of 75°"
        }
      ]
    },
    {
      "name": "Cellular Corrosion",
      "slug": "cellular-corrosion",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/67d47ae7-0b50-42ec-98d4-b704e68e8c0d.png",
      "localImgUrl": "/ability_images/venom/cellular-corrosion.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Spell field that surrounds the caster"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Damage",
          "value": "The spell field deals 5 damage, increasing to 80 damage if the target remains in the area for a duration"
        },
        {
          "key": "CoolDown",
          "value": "8s"
        },
        {
          "key": "Special Effect",
          "value": "Tendrils apply a 25% Slow on the target and take 3s to inflict damage. If the distance from Venom exceeds 11m, the tendrils will detach"
        }
      ]
    },
    {
      "name": "Alien Biology",
      "slug": "alien-biology",
      "button": "Space",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/5ac60cab-09a4-4f2a-8236-75b82ed43c39.png",
      "localImgUrl": "/ability_images/venom/alien-biology.png",
      "properties": [
        {
          "key": "Wall-Crawling Speed",
          "value": "3 m/s"
        },
        {
          "key": "Sprinting Speed",
          "value": "9 m/s"
        }
      ]
    }
  ],
  "GROOT": [
    {
      "name": "Vine Strike",
      "slug": "vine-strike",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/b1e08b7f-2364-45cb-9ebc-6b73214d8529.png",
      "localImgUrl": "/ability_images/groot/vine-strike.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with delayed impact"
        },
        {
          "key": "Projectile Speed",
          "value": "120m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "22m"
        },
        {
          "key": "Attack Interval",
          "value": "0.7s"
        },
        {
          "key": "Damage",
          "value": "65"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "Strangling Prison",
      "slug": "strangling-prison",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/72a68f64-ac6b-4b4d-a6c2-a96d8ba932f2.png",
      "localImgUrl": "/ability_images/groot/strangling-prison.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with a downward delay that creates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Damage",
          "value": "The projectile deals 10 damage, while the spell field deals 70 damage. While imprisoning enemies, it deals 20 damage every 0.5s"
        },
        {
          "key": "Energy Cost",
          "value": "2800"
        },
        {
          "key": "Special Effect",
          "value": "Imprison enemies for 3.5s"
        }
      ]
    },
    {
      "name": "Thornlash Wall",
      "slug": "thornlash-wall",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/22175d18-5214-4a59-a1a2-b20d042ac46c.png",
      "localImgUrl": "/ability_images/groot/thornlash-wall.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "18m"
        },
        {
          "key": "Thornlash Wall Health",
          "value": "250"
        },
        {
          "key": "Cooldown",
          "value": "2 charges, with each charge taking 6s to recharge"
        },
        {
          "key": "Special Effect",
          "value": "Thornlash Wall deals 60 damage every 0.5s"
        }
      ]
    },
    {
      "name": "Ironwood Wall",
      "slug": "ironwood-wall",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/6b671ac4-7312-4702-8062-5f3d93cdbcd4.png",
      "localImgUrl": "/ability_images/groot/ironwood-wall.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "10m"
        },
        {
          "key": "Thornlash Wall Health",
          "value": "600"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        },
        {
          "key": "Special Effect",
          "value": "Ironwood Wall heals 40 Bonus Health per second, up to 250 Bonus Health; gain Unstoppable status when within 15m of Awakened Ironwood Walls"
        }
      ]
    },
    {
      "name": "Spore Bomb",
      "slug": "spore-bomb",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/bba9fe65-f6c7-46de-807c-0ba36c78e505.png",
      "localImgUrl": "/ability_images/groot/spore-bomb.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile with a downward delay that creates a spell field upon impact"
        },
        {
          "key": "Projectile Speed",
          "value": "60m/s"
        },
        {
          "key": "Range",
          "value": "Spore Bomb generates a spell field with a 5m spherical radius, while small explosive spores create a spell field with a 1.5m spherical radius"
        },
        {
          "key": "Damage",
          "value": "The projectile itself deals no damage, while Spore Bomb deals 55 damage and explosive spores deal 10 damage"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        },
        {
          "key": "Special Effect",
          "value": "Spore Bomb explodes into 6 explosive spores"
        }
      ]
    },
    {
      "name": "Flora Colossus",
      "slug": "flora-colossus",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9a004657-cc4f-47c9-8f81-a4d3471a03bb.png",
      "localImgUrl": "/ability_images/groot/flora-colossus.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Persistent spell field that surrounds the caster"
        },
        {
          "key": "Range",
          "value": "A cylindrical spell field with a 24m radius and a height of 40m"
        }
      ]
    },
    {
      "name": "Furious Flora",
      "slug": "furious-flora",
      "button": "V",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241125/32653d8e-2a57-460d-af0a-72f35b84b607.png",
      "localImgUrl": "/ability_images/groot/furious-flora.png",
      "properties": [
        {
          "key": "Range",
          "value": "The first two strikes can reach 3m, while the third strike can reach 4m"
        }
      ]
    }
  ],
  "CAPTAIN AMERICA": [
    {
      "name": "Sentinel Strike",
      "slug": "sentinel-strike",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/588f99a1-b1e0-4133-a626-35f8e6e4b158.png",
      "localImgUrl": "/ability_images/captain-america/sentinel-strike.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Change Form"
        },
        {
          "key": "Melee Range",
          "value": "4m"
        },
        {
          "key": "Shield Flying Speed",
          "value": "60m/s"
        },
        {
          "key": "Max Flying Distance",
          "value": "25m"
        },
        {
          "key": "Damage",
          "value": "Melee Attack Damage: 45, Flying Shield Damage: 45"
        },
        {
          "key": "Attack Interval",
          "value": "Melee 1st Hit: 0.4s, Melee 2nd Hit: 0.5s, Flying Shield 1st Hit: 0.5s, Flying Shield 2nd Hit: 0.57s"
        },
        {
          "key": "Ammo",
          "value": "Up to 4 throws"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        },
        {
          "key": "Special Effect",
          "value": "Automatically target enemies near the crosshair"
        }
      ]
    },
    {
      "name": "Freedom Charge",
      "slug": "freedom-charge",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/301a3e56-eeee-47e4-b3b6-08c164b5f780.png",
      "localImgUrl": "/ability_images/captain-america/freedom-charge.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Activation"
        },
        {
          "key": "Range",
          "value": "A spherical spell field with a 4m radius enveloping the caster, and a spell area with a width of 4m along the path"
        },
        {
          "key": "Spell Field Duration",
          "value": "10s"
        },
        {
          "key": "Spell Area Duration",
          "value": "5s"
        },
        {
          "key": "Health Recovery Rate",
          "value": "Cast to gain 150 Bonus Health and grant allies 100 Bonus Health. Every second afterward, gain 100 Bonus Health and grant allies 60 Bonus Health"
        },
        {
          "key": "Movement Boost",
          "value": "Grant a 30% Movement Boost to both yourself and your allies"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        },
        {
          "key": "Special Effect",
          "value": "Allies within its path gain a 20% boost to Ultimate Energy charge efficiency"
        }
      ]
    },
    {
      "name": "Leading Dash",
      "slug": "leading-dash",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/dfc71932-8e4a-47e1-8eaf-3dffddf51cb4.png",
      "localImgUrl": "/ability_images/captain-america/leading-dash.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Channeled"
        },
        {
          "key": "Movement Boost",
          "value": "33.40%"
        },
        {
          "key": "Fearless Leap Height",
          "value": "5m"
        }
      ]
    },
    {
      "name": "Vibranium Energy Saw",
      "slug": "vibranium-energy-saw",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/ba7fc0c4-f0c7-4ce7-a792-63374163cc22.png",
      "localImgUrl": "/ability_images/captain-america/vibranium-energy-saw.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast projectile that can ricochet"
        },
        {
          "key": "Projectile Speed",
          "value": "80 m/s"
        },
        {
          "key": "Maximum Distance",
          "value": "25m"
        },
        {
          "key": "Number of Ricochets",
          "value": "3"
        },
        {
          "key": "Damage",
          "value": "Start at 70, with a 20% reduction for each ricochet"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Liberty Rush",
      "slug": "liberty-rush",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/63eef162-7c33-46a8-8f48-aa74b29f910a.png",
      "localImgUrl": "/ability_images/captain-america/liberty-rush.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast forward dash"
        },
        {
          "key": "Dash Distance",
          "value": "12m"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Cooldown",
          "value": "10s"
        }
      ]
    },
    {
      "name": "Super-Soldier Slam",
      "slug": "super-soldier-slam",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/0261fd68-7164-4852-a86a-a5d02f914b2a.png",
      "localImgUrl": "/ability_images/captain-america/super-soldier-slam.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Targeted"
        },
        {
          "key": "Maximum Distance",
          "value": "20m (horizontal)"
        },
        {
          "key": "Damage",
          "value": "30"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Living Legend",
      "slug": "living-legend",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/97a1851f-7f3d-4297-a8ba-3d4650422a58.png",
      "localImgUrl": "/ability_images/captain-america/living-legend.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Channeled"
        },
        {
          "key": "Maximum Shield Value",
          "value": "350"
        },
        {
          "key": "Recovery Shield Value",
          "value": "50/s"
        },
        {
          "key": "Delayed Recovery After Release",
          "value": "4s"
        },
        {
          "key": "Cooldown After Destroyed",
          "value": "5s"
        },
        {
          "key": "Cooldown",
          "value": "1s"
        },
        {
          "key": "Ricochet Damage Falloff",
          "value": "50%"
        }
      ]
    }
  ],
  "DOCTOR STRANGE": [
    {
      "name": "Daggers of Denak",
      "slug": "daggers-of-denak",
      "button": "Left Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/005933a8-1d97-42c6-aac7-27e1bc018038.png",
      "localImgUrl": "/ability_images/doctor-strange/daggers-of-denak.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Five-round delayed hit projectiles"
        },
        {
          "key": "Projectile Speed",
          "value": "60 m/s"
        },
        {
          "key": "Damage",
          "value": "16"
        },
        {
          "key": "Damage Falloff",
          "value": "Falloff begins at 10m, decreasing to 80% at 20m"
        },
        {
          "key": "Fire Rate",
          "value": "5.56 rounds per second, with a 0.03-second interval between every two rounds"
        },
        {
          "key": "Ammo",
          "value": "10 (1 dagger per release)"
        },
        {
          "key": "Critical Hit",
          "value": "No"
        }
      ]
    },
    {
      "name": "Eye of Agamotto",
      "slug": "eye-of-agamotto",
      "button": "Q",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/0fd358bd-cf3c-4029-9455-3693bc12cbb5.png",
      "localImgUrl": "/ability_images/doctor-strange/eye-of-agamotto.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast spell field that surrounds the caster"
        },
        {
          "key": "Range",
          "value": "10m spherical radius"
        },
        {
          "key": "Damage",
          "value": "60"
        },
        {
          "key": "Soul Separation Duration",
          "value": "3s"
        },
        {
          "key": "Energy Cost",
          "value": "3100"
        }
      ]
    },
    {
      "name": "Cloak of Levitation",
      "slug": "cloak-of-levitation",
      "button": "SHIFT",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/bcd20b65-6414-40bd-9f37-524652c0ed5b.png",
      "localImgUrl": "/ability_images/doctor-strange/cloak-of-levitation.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Instant Cast"
        },
        {
          "key": "Dash Distance",
          "value": "8m"
        },
        {
          "key": "Free-Flight Duration",
          "value": "6s"
        },
        {
          "key": "Cooldown",
          "value": "12s"
        }
      ]
    },
    {
      "name": "Maelstrom of Madness",
      "slug": "maelstrom-of-madness",
      "button": "E",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/fc0621cc-3ee2-490c-bd45-28986775291c.png",
      "localImgUrl": "/ability_images/doctor-strange/maelstrom-of-madness.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Single-cast spell field that surrounds the caster"
        },
        {
          "key": "Range",
          "value": "8m spherical radius"
        },
        {
          "key": "Damage",
          "value": "Each point of Dark Magic deals 1.3 damage"
        },
        {
          "key": "Cooldown",
          "value": "6s"
        }
      ]
    },
    {
      "name": "Pentagram of Farallah",
      "slug": "pentagram-of-farallah",
      "button": "F",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9161c8ab-2eb3-4546-b454-c9d18e0ddad5.png",
      "localImgUrl": "/ability_images/doctor-strange/pentagram-of-farallah.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Multi-segment release"
        },
        {
          "key": "Duration",
          "value": "20s"
        },
        {
          "key": "Cooldown",
          "value": "180s"
        }
      ]
    },
    {
      "name": "Shield of the Seraphim",
      "slug": "shield-of-the-seraphim",
      "button": "Right Click",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/9a8c0b57-316f-42da-bcca-9923be81d771.png",
      "localImgUrl": "/ability_images/doctor-strange/shield-of-the-seraphim.png",
      "properties": [
        {
          "key": "Casting",
          "value": "Channeled"
        },
        {
          "key": "Maximum Shield Value",
          "value": "700"
        },
        {
          "key": "Recovery Speed",
          "value": "60/s"
        },
        {
          "key": "Delayed Recovery After Release",
          "value": "1s"
        },
        {
          "key": "Cooldown After Destroyed",
          "value": "3s"
        }
      ]
    },
    {
      "name": "Price of Magic",
      "slug": "price-of-magic",
      "button": "Passive",
      "originalImgUrl": "https://r.res.easebar.com/pic/20241120/14622714-9438-4212-8a0b-738f282a64bc.png",
      "localImgUrl": "/ability_images/doctor-strange/price-of-magic.png",
      "properties": [
        {
          "key": "Anti-Heal Activation Delay at Peak Dark Magic",
          "value": "3s"
        },
        {
          "key": "Anti-Heal Duration",
          "value": "2s"
        },
        {
          "key": "Generate Dark Magic",
          "value": "Daggers of Denak: Each hit generates 3.5 Dark Magic. When using the V key, every enemy hit generates 10 Dark Magic"
        }
      ]
    }
  ]
};
