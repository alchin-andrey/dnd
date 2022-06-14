import color from "./colors.js";
import spells from "./spells.js";
import gender from "./genders.js";
import lang from "./languages.js";

export default {
  halfling: {
    name: "halfling",
    details: "halfling_details",

    settings: {
      ethnos: {
        stout: {
          name: "stout",
          details: "stout_halfling_details",

          male: {
            link: "https://www.heroforge.com/load_config%3D503185616",
            img_coef: 3.65,
          },

          female: {
            link: "https://www.heroforge.com/load_config%3D503211377",
            img_coef: 3.75,
          },

          settings: {
            color: {
              skin: color[2][0],
              eyes: color[4][5],
              hair: color[1][4],
            },
          },

          constitution: 1,

          fines: [
            {
              type: "advantage",
              keyword: "advantage",
              details: "poison_against",
            },

            {
              type: "resistance",
              keyword: "resistance",
              details: "poison_damage",
            },
          ],
        },

        lightfoot: {
          name: "lightfoot",
          details: "lightfoot_halfling_details",
          link_male: "https://www.heroforge.com/load_config%3D503210924",
          link_female: "https://www.heroforge.com/load_config%3D503211388",

          settings: {
            color: {
              skin: color[2][1],
              eyes: color[2][5],
              hair: color[0][6],
            },
          },

          charisma: 1,

          fines: [
            {
              type: "plus",
              keyword: "stealth",
              details: "behind_bigger_then_mid",
            },
          ],
        },

        ghost: {
          name: "ghost",
          details: "ghost_halfling_details",
          link_male: "https://www.heroforge.com/load_config%3D503211188",
          link_female: "https://www.heroforge.com/load_config%3D503211452",

          settings: {
            color: {
              skin: color[2][2],
              eyes: color[8][2],
              hair: color[2][5],
            },
          },

          wisdom: 1,

          fines: [
            {
              type: "plus",
              keyword: "telepathy",
              details: "secrecy_size_details",
            },
          ],

          rare: true,
        },
      },
      gender: gender,
      color: {
        skin: [
          color[1][0],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
        eyes: [color[2][4], color[2][6]],
        hair: [color[2][4], color[2][6], color[1][5], color[1][6]],
      },

      age: {
        min: 10,
        young: 20,
        mature: 75,
        old: 100,
        max: 150,
      },

      height: {
        min: 90,
        max: 120,
      },

      weight: {
        min: 15,
        max: 20,
      },

      // ТОЛЬКО ДЛЯ ОТЛАДКИ
      custom_skills: 2,
      custom_stats: 2,
      custom_language: 1,
    },

    dexterity: 2,

    speed: 25,

    proficiencies: {
      languages: [lang.common, lang.halfling],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "fear_against",
      },

      {
        type: "plus",
        keyword: "rethrow",
        details: "any_dice_1",
      },

      {
        type: "plus",
        keyword: "slippage",
        details: "among_bigger_than_mid",
      },

      {
        type: "disadvantage",
        keyword: "disadvantage",
        details: "fire against",
      },
    ],

    spells: [
      //ТОЛЬКО ДЛЯ ОТЛАДКИ

      {
        level: 1,
        spell: spells.thaumaturgy,
      },

      {
        level: 3,
        spell: spells.hellish_rebuke,
        gain: 2,
      },

      {
        level: 5,
        spell: spells.darkness,
      },
    ],
  },

  human: {
    settings: {
      color: {
        skin: [
          color[1][0],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
      },
    },
  }, // недораюлтан

  halfelf: {
    settings: {
      custom_skills: 2,
      custom_stats: 2,
      custom_language: 1,
    },
  }, //недоработан, обсудить применение

  tiefling: {
    spells: [
      {
        level: 1,
        spell: spells.thaumaturgy,
      },

      {
        level: 3,
        spell: spells.hellish_rebuke,
        gain: 2,
      },

      {
        level: 5,
        spell: spells.darkness,
      },
    ],
  },
};
