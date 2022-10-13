import spells from "./spells.js";
import lang from "./languages.js";
import weaponry from "./weaponry.js";
import tool from "./tools.js";
import armory from "./armory.js";
import weapons from "./weapons.js";

export default {
  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    HP_dice: 12,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military],
    },

    saving: ["strength", "constitution"],
    spell_attribute: "strength", // уточнить

    levels: [
      
      { //1
        settings: {

          custom_skills: [

            [
              2,
              "mastery",

              "athletics",
              "insight",
              "survival",
              "intimidation",
              "nature",
              "animal_hanging",
            ],

          ],

          equipment: [

            [
              [weapons.greataxe,1],
              [weapons.halberd,1],
              [weapons.war_pick,1],
              [weapons.warhammer,1],
              [weapons.battleaxe,1],
              [weapons.glaive,1],
              [weapons.greatsword,1],
              [weapons.lance,1],
              [weapons.longsword,1],
              [weapons.whip,1],
              [weapons.shortsword,1],
              [weapons.maul,1],
              [weapons.morningstar,1],
              [weapons.pike,1],
              [weapons.rapier,1],
              [weapons.scimitar,1],
              [weapons.trident,1],
              [weapons.flail,1]
            ],

            [
              [weapons.handaxe,2],
              [weapons.quarterstaff,1],
              [weapons.mace,1],
              [weapons.club,1],
              [weapons.dagger,1],
              [weapons.spear,1],
              [weapons.light_hammer,1],
              [weapons.javelin,1],
              [weapons.greatclub,1],
              [weapons.sickle,1],
            ]
          ]

        },

        equipment: [

          [weapons.javelin,4],
          //[pack.explorer,1], // Добавить состав пака

        ],
        
        fines: [
          {
            type: "resistance",
            keyword: "no_armor_protection",
            details: "armor_constitution",
          },
        ],
        spells: [
          [spells.rage,2], // Добавить barbarian_rage[level]
        ],
      },
      
      { //2
        fines: [
          {
            type: "plus",
            keyword: "advantage",
            details: "saving_dex_visible",
          }
        ],
        spells: [
          [spells.reckless_attack],
        ]
      },

      { //3
        settings: {
          subclasses: [
            {

              berserker: {
                name:"",
                details:"",
                levels: [
                  { //1
                  },
                  { //2
                  },
                  { //3
                    spells: [
                      //[spell.frenzy]
                    ],
                  },
                  {//4
                  },
                  {//5
                  },
                  {//6
                    fines: [
                      {
                        type: "resistance",
                        keyword: "immunity",
                        details: "charmed_or_frightened_while_raging",
                      }
                    ]
                  },
                  {//7
                  },
                  {//8
                  },
                  {//9
                  },
                  {//10
                    spells: [
                      //[spell.пугающее присутствие]
                    ],
                  },
                  {//11
                  },
                  {//12
                  },
                  {//13
                  },
                  {//14
                    spells: [
                      //[spell.ответньій удар]
                    ],
                  },
                ],
            },

            totem_warrior: {
              name:"",
              details:"",
              levels: [
                { //1
                },
                { //2
                },
                { //3

                },
                {//4
                },
                {//5
                },
                {//6

                },
                {//7
                },
                {//8
                },
                {//9
                },
                {//10

                },
                {//11
                },
                {//12
                },
                {//13
                },
                {//14

                },
              ],
          },
          }

          ],
        },
      }
    ],

    barbarian_rage_bonus: [2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4],
    barbarian_rage:[2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 99],
    mastery_bonus: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
  },
};
