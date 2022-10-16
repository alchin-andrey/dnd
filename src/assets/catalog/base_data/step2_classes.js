import spells from "./list_spells.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tool from "./kinds_tools.js";
import armory from "./kinds_armor.js";
import weapons from "./list_weapons.js";
import MY from "@/assets/catalog/MY.js"
import packs from "./list_packs.js";

const barbarian_rage =       [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 99];
const barbarian_rage_bonus = [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];

export default {
  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    saving: ["strength", "constitution"],
    spell_attribute: "strength", // уточнить

    hp_dice: 12,
    hp_bonus: [12,7],
    regen: [MY.level,12],

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military],
    },

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_constitution",
        armor_bonus: "MY.stats.constitution.mod",
        // when without heavy armor
      },
      {
        level: 2,
        type: "plus",
        keyword: "advantage",
        details: "saving_dex_visible",
      },
      {
        level: 5,
        speed_bonus: 10,
        // when without heavy armor
      },
      {
        level: 7,
        type: "plus",
        keyword: "advantage",
        details: "on_initiative",
      },
      {
        level: 7,
        type: "plus",
        keyword: "extra_movement",
        details: "rage_half_speed",
        // приписать к заклинанию Ярость?
      },
      {
        level: 9,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 11,
        type: "plus",
        keyword: "rage_persistence",
        details: "rage_persistence_details",
        // приписать к заклинанию Ярость?
      },
      {
        level: 13,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 15,
        type: "plus",
        keyword: "rage_sustainability",
        details: "only if uncontious",
        // убрать из заклинания Ярость?
      },
      {
        level: 17,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 18,
        type: "plus",
        keyword: "saving_strength",
        details: "min_base_strength",
      },
    ],

    stats: [ 
      {
        level: 20,
        strength: 4,
        constitution: 4, 
      }
    ], 

    spells: [
      {
        level: 1,
        spell: spells.rage,
        charges: barbarian_rage[MY.level] // Проверить привязку к уровню
      },
      {
        level: 2,
        spell: spells.reckless_attack,
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [
          [weapons.javelin, 4],
        ],
        item: [
          [packs.explorers,1],
        ],
      },
    ],



    settings: {
      skills: [
        {
          level: 1,
          skills: [
            2,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
        {
          level: 3,
          skills: [
            1,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
        {
          level: 10,
          skills: [
            1,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
      ],

      feats: {
        // Cделать единым для всех
        // level 4, 8, 12, 16 и 19
      },

      equipment: [
        {
          level: 1,
          weapon: [
            [weapons.greataxe, 1],
            [weapons.halberd, 1],
            [weapons.war_pick, 1],
            [weapons.warhammer, 1],
            [weapons.battleaxe, 1],
            [weapons.glaive, 1],
            [weapons.greatsword, 1],
            [weapons.lance, 1],
            [weapons.longsword, 1],
            [weapons.whip, 1],
            [weapons.shortsword, 1],
            [weapons.maul, 1],
            [weapons.morningstar, 1],
            [weapons.pike, 1],
            [weapons.rapier, 1],
            [weapons.scimitar, 1],
            [weapons.trident, 1],
            [weapons.flail, 1],
          ],
        },

        {
          level: 1,
          weapon: [
            [weapons.handaxe, 2],
            [weapons.quarterstaff, 1],
            [weapons.mace, 1],
            [weapons.club, 1],
            [weapons.dagger, 1],
            [weapons.spear, 1],
            [weapons.light_hammer, 1],
            [weapons.javelin, 1],
            [weapons.greatclub, 1],
            [weapons.sickle, 1],
          ],
        },
      ],

      subclasses: [
        {
          level: 3,
          subclasses: {
            berserker: {
              name: "berserker",
              details: "berserker_details",
            },

            totem_warrior: {
              name: "",
              details: "",
            },
          },
        },
      ],
    },
  },

  //---------------------------------------------------------------------------------------------------------

  // barbarian_v1: {
  //   name: "barbarian",
  //   details: "barbarian_details",

  //   HP_dice: 12,

  //   proficiencies: {
  //     armor: [armory.light, armory.medium, armory.shields],
  //     weapons: [weaponry.simple, weaponry.military],
  //   },

  //   saving: ["strength", "constitution"],
  //   spell_attribute: "strength", // уточнить

  //   levels: [
  //     {
  //       //1
  //       settings: {
  //         custom_skills: [
  //           [
  //             2,
  //             //mastery_bonus[1], // добавить логику привязки к уровню

  //             "athletics",
  //             "insight",
  //             "survival",
  //             "intimidation",
  //             "nature",
  //             "animal_hanging",
  //           ],
  //         ],

  //         equipment: [
  //           [
  //             [weapons.greataxe, 1],
  //             [weapons.halberd, 1],
  //             [weapons.war_pick, 1],
  //             [weapons.warhammer, 1],
  //             [weapons.battleaxe, 1],
  //             [weapons.glaive, 1],
  //             [weapons.greatsword, 1],
  //             [weapons.lance, 1],
  //             [weapons.longsword, 1],
  //             [weapons.whip, 1],
  //             [weapons.shortsword, 1],
  //             [weapons.maul, 1],
  //             [weapons.morningstar, 1],
  //             [weapons.pike, 1],
  //             [weapons.rapier, 1],
  //             [weapons.scimitar, 1],
  //             [weapons.trident, 1],
  //             [weapons.flail, 1],
  //           ],

  //           [
  //             [weapons.handaxe, 2],
  //             [weapons.quarterstaff, 1],
  //             [weapons.mace, 1],
  //             [weapons.club, 1],
  //             [weapons.dagger, 1],
  //             [weapons.spear, 1],
  //             [weapons.light_hammer, 1],
  //             [weapons.javelin, 1],
  //             [weapons.greatclub, 1],
  //             [weapons.sickle, 1],
  //           ],
  //         ],
  //       },

  //       equipment: [
  //         [weapons.javelin, 4],
  //         //[pack.explorer,1], // Добавить состав пака
  //       ],

  //       fines: [
  //         {
  //           type: "resistance",
  //           keyword: "no_armor_protection",
  //           details: "armor_constitution",
  //         },
  //       ],
  //       spells: [
  //         [spells.rage /*barbarian_rage[level]*/], // Добавить barbarian_rage[level]
  //       ],
  //     },

  //     {
  //       //2
  //       fines: [
  //         {
  //           type: "plus",
  //           keyword: "advantage",
  //           details: "saving_dex_visible",
  //         },
  //       ],
  //       spells: [[spells.reckless_attack]],
  //     },

  //     {
  //       //3
  //       settings: {
  //         subclasses: [
  //           {
  //             berserker: {
  //               name: "",
  //               details: "",
  //               levels: [
  //                 {
  //                   //1
  //                 },
  //                 {
  //                   //2
  //                 },
  //                 {
  //                   //3
  //                   spells: [
  //                     //[spell.frenzy]
  //                   ],
  //                 },
  //                 {
  //                   //4
  //                 },
  //                 {
  //                   //5
  //                 },
  //                 {
  //                   //6
  //                   fines: [
  //                     {
  //                       type: "resistance",
  //                       keyword: "immunity",
  //                       details: "charmed_or_frightened_while_raging",
  //                     },
  //                   ],
  //                 },
  //                 {
  //                   //7
  //                 },
  //                 {
  //                   //8
  //                 },
  //                 {
  //                   //9
  //                 },
  //                 {
  //                   //10
  //                   spells: [
  //                     //[spell.пугающее присутствие]
  //                   ],
  //                 },
  //                 {
  //                   //11
  //                 },
  //                 {
  //                   //12
  //                 },
  //                 {
  //                   //13
  //                 },
  //                 {
  //                   //14
  //                   spells: [
  //                     //[spell.ответньій удар]
  //                   ],
  //                 },
  //               ],
  //             },

  //             totem_warrior: {
  //               name: "",
  //               details: "",
  //               levels: [
  //                 {
  //                   //1
  //                 },
  //                 {
  //                   //2
  //                 },
  //                 {
  //                   //3
  //                 },
  //                 {
  //                   //4
  //                 },
  //                 {
  //                   //5
  //                 },
  //                 {
  //                   //6
  //                 },
  //                 {
  //                   //7
  //                 },
  //                 {
  //                   //8
  //                 },
  //                 {
  //                   //9
  //                 },
  //                 {
  //                   //10
  //                 },
  //                 {
  //                   //11
  //                 },
  //                 {
  //                   //12
  //                 },
  //                 {
  //                   //13
  //                 },
  //                 {
  //                   //14
  //                 },
  //               ],
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   ],

  //   barbarian_rage_bonus: [
  //     2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4,
  //   ],
  //   barbarian_rage: [
  //     2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 99,
  //   ],
  //   mastery_bonus: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
  // },
};
