import color from "./colors.js";
import spells from "./spells.js";
import gender from "./genders.js";
import lang from "./languages.js";
import weapon from "./weapons.js";
import tool from "./tools.js";
import armor from "./armor.js";

export default {
  halfling: {
    name: "halfling",
    details: "halfling_details",

    settings: {
      ethnos: {
        stout: {
          name: "stout",
          details: "stout_halfling_details",

          link_male: "https://www.heroforge.com/load_config%3D503185616",
          link_female: "https://www.heroforge.com/load_config%3D503211377",

          color: {
            skin: [color[2][0]],
            eyes: [color[4][5]],
            hair: [color[1][4]],
          },

          stats: { constitution: 1 },

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

          color: {
            skin: [color[2][1]],
            eyes: [color[2][5]],
            hair: [color[0][6]],
          },

          stats: { charisma: 1 },

          fines: [
            {
              type: "plus",
              keyword: "stealth",
              details: "behind_bigger_than_mid",
            },
          ],
        },

        ghost: {
          name: "ghost",
          details: "ghost_halfling_details",
          link_male: "https://www.heroforge.com/load_config%3D503211188",
          link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [color[2][2]],
            eyes: [color[8][2]],
            hair: [color[2][5]],
          },

          stats: { wisdom: 1 },

          fines: [
            {
              type: "plus",
              keyword: "telepathy",
              details: "known_languages",
            },
          ],

          rare: "rare",
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
          color[1][6],
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
        baby: 10,
        young: 20,
        mature: 45,
        old: 100,
        oldest: 150,
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
      custom_stats: [2, 1], // [колво, инкремент]
      custom_skills: [2, 2],
      custom_language: 1,
    },

    stats: { dexterity: 2 },

    qualities: { speed: 25 },

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
        details: "fire_against",
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

  gnome: {
    name: "gnome",
    details: "gnome_details",

    settings: {
      ethnos: {
        rock: {
          name: "rock",
          details: "rock_gnome_details",

          //link_male
          //link_female

          color: {
            skin: [color[2][1], color[2][2], color[2][3], color[2][4]],
            eyes: [
              color[0][1],
              color[2][0],
              color[2][1],
              color[3][0],
              color[3][1],
              color[4][0],
              color[4][1],
              color[5][0],
              color[5][1],
              color[6][0],
              color[6][1],
              color[7][0],
              color[7][1],
            ],
            hair: [color[2][2], color[2][3]],
          },

          stats: { constitution: 1 },
          qualities: { vision_night: 60 },

          fines: [
            {
              type: "plus",
              keyword: "proficiency_bonus",
              details: "history_check_rock_gnome",
            },
          ],

          spells: [
            {
              level: 1,
              spell: spells.toy,
            },

            {
              level: 1,
              spell: spells.lighter,
            },

            {
              level: 1,
              spell: spells.music_box,
            },
          ],
        },

        deep: {
          name: "deep",
          details: "deep_gnome_details",
          // link_male: "https://www.heroforge.com/load_config%3D503210924",
          // link_female: "https://www.heroforge.com/load_config%3D503211388",

          color: {
            skin: [color[0][3], color[0][4], color[0][5], color[0][6]],
            eyes: [color[7][2], color[7][3], color[7][4], color[7][5]],
            hair: [color[8][1]],
          },

          age: {
            min: 10,
            young: 18,
            mature: 25,
            old: 200,
            max: 250,
          },

          weight: {
            min: 36,
            max: 54,
          },

          stats: { dexterity: 1 },
          qualities: { vision_night: 120 },

          proficiencies: {
            languages: [lang.undercommon],
          },

          fines: [
            {
              type: "advantage",
              keyword: "advantage",
              details: "stealth_in_stones",
            },
          ],
        },

        forest: {
          name: "forest",
          details: "forest_gnome_details",
          // link_male: "https://www.heroforge.com/load_config%3D503211188",
          // link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [color[2][2]],
            eyes: [color[8][2]],
            hair: [color[2][5]],
          },

          stats: { dexterity: 1 },
          qualities: { vision_night: 60 },

          proficiencies: {
            languages: [lang.animal],
          },

          spells: [
            {
              level: 1,
              spell: spells.small_illusion,
            },
          ],
        },
      },

      gender: gender,
      color: {
        skin: [
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
        ],
        eyes: [
          color[0][1],
          color[2][0],
          color[2][1],
          color[3][0],
          color[3][1],
          color[4][0],
          color[4][1],
          color[5][0],
          color[5][1],
          color[6][0],
          color[6][1],
          color[7][0],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][2],
        ],
        hair: [color[2][2], color[2][3], color[2][5], color[8][1]],
      },

      age: {
        min: 10,
        young: 18,
        mature: 40,
        old: 350,
        max: 500,
      },

      height: {
        min: 90,
        max: 120,
      },

      weight: {
        min: 15,
        max: 20,
      },
    },

    stats: { intelligence: 2 },

    qualities: { speed: 25 },

    proficiencies: {
      languages: [lang.common, lang.gnome],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "magic_against_int_wis_cha",
      },
    ],
  },

  dwarf: {
    name: "dwarf",
    details: "dwarf_details",

    settings: {
      ethnos: {
        mountain: {
          name: "mountain",
          details: "mountain_dwarf_details",

          //link_male
          //link_female

          color: {
            skin: [
              color[1][0],
              color[1][1],
              color[2][0],
              color[2][1],
              color[2][2],
              color[3][0],
            ],
            eyes: [
              color[4][4],
              color[2][5],
              color[8][0],
              color[2][4],
              color[2][5],
            ],
            hair: [
              color[2][1],
              color[3][1],
              color[1][3],
              color[1][4],
              color[2][2],
              color[2][3],
              color[2][4],
              color[2][5],
            ],
          },

          stats: { strength: 2 },
          qualities: { vision_night: 60 },

          proficiencies: {
            armor: [armor.light, armor.medium],
          },
        },

        grey: {
          name: "grey",
          details: "grey_dwarf_details",
          // link_male: "https://www.heroforge.com/load_config%3D503210924",
          // link_female: "https://www.heroforge.com/load_config%3D503211388",

          color: {
            skin: [color[0][3], color[0][4], color[0][5]],
            eyes: [color[4][4], color[2][5], color[8][0]],
            hair: [
              color[2][1],
              color[3][1],
              color[1][3],
              color[1][4],
              color[2][2],
              color[2][3],
              color[2][4],
              color[2][5],
            ],
          },

          stats: { strength: 1 },
          qualities: { vision_night: 120 },

          proficiencies: {
            languages: [lang.undercommon],
          },

          fines: [
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "perception_under_sun",
            },
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "attack_under_sun",
            },
          ],

          spells: [
            {
              level: 3,
              spell: spells.enlargement,
            },
            {
              level: 5,
              spell: spells.invisibility,
            },
          ],
        },

        hill: {
          name: "hill",
          details: "hill_dwarf_details",
          // link_male: "https://www.heroforge.com/load_config%3D503211188",
          // link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [
              color[1][4],
              color[1][5],
              color[2][4],
              color[2][5],
              color[2][6],
              color[1][6],
              color[0][6],
            ],
            eyes: [color[2][4], color[2][5]],
            hair: [color[0][6], color[1][6], color[2][5], color[2][6]],
          },

          stats: { wisdom: 1 },
          qualities: { vision_night: 60 },

          hp_bonus: 1,

          fines: [
            {
              type: "plus",
              keyword: "plus_1_to_maxhp",
              details: "for_each_lvl_incl_1",
            },
          ],
        },
      },

      gender: gender,

      color: {
        skin: [
          color[1][0],
          color[1][1],
          color[1][4],
          color[1][5],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[1][6],
          color[0][6],
          color[3][0],
        ],
        eyes: [color[2][4], color[2][5], color[4][4], color[8][0]],
        hair: [
          color[0][6],
          color[1][6],
          color[2][6],
          color[0][5],
          color[1][5],
          color[2][5],
          color[1][4],
          color[1][3],
        ],
      },

      age: {
        min: 10,
        young: 18,
        mature: 50,
        old: 350,
        max: 400,
      },

      height: {
        min: 120,
        max: 150,
      },

      weight: {
        min: 60,
        max: 90,
      },
    },

    stats: { constitution: 2 },

    qualities: { speed: 25 },

    proficiencies: {
      weapons: [
        weapon.battle_axes,
        weapon.hand_axes,
        weapon.battle_hammers,
        weapon.light_hammers,
      ],
      tools: [tool.blacksmith, tool.brewer, tool.mason],
      languages: [lang.common, lang.dwarf],
    },

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

      {
        type: "plus",
        keyword: "proficiency_bonus",
        details: "stone_history",
      },
    ],
  },

  human: {
    name: "human",
    details: "human_details",

    noimg_ethnos: true,

    settings: {
      ethnos: {
        arkayun: {
          name: "arkayun",
          details: "arkayun_details",

          color: {
            skin: [color[2][2]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          proficiencies: {
            languages: [lang.dambratan],
          },
        },

        bedin: {
          color: {
            skin: [color[2][6]],
            eyes: [color[2][5]],
            hair: [color[0][6]],
          },

          name: "bedin",
          details: "bedin_details",

          proficiencies: {
            languages: [lang.midani],
          },
        },

        gur: {
          color: {
            skin: [color[0][3]],
            eyes: [color[2][5]],
            hair: [color[1][6]],
          },

          name: "gur",
          details: "gur_details",

          proficiencies: {
            languages: [lang.guran],
          },
        },

        damarian: {
          color: {
            skin: [
              color[2][1],
              color[2][0],
              color[2][2],
              color[2][3],
              color[2][4],
            ],
            eyes: [color[2][5]],
            hair: [color[2][6]],
          },

          name: "damarian",
          details: "damarian_details",

          proficiencies: {
            languages: [lang.damarian],
          },
        },

        illuskian: {
          color: {
            skin: [color[2][0]],
            eyes: [color[7][3]],
            hair: [color[1][4], color[0][6], color[2][2]],
          },

          name: "illuskian",
          details: "illuskian_details",

          proficiencies: {
            languages: [lang.illuskian],
          },
        },

        imaskari: {
          color: {
            skin: [color[9][0]],
            eyes: [color[0][2]],
            hair: [color[8][1]],
          },

          name: "imaskari",
          details: "imaskari_details",

          proficiencies: {
            languages: [lang.rushum],
          },
        },

        kalishit: {
          color: {
            skin: [color[2][4]],
            eyes: [color[2][5]],
            hair: [color[2][6]],
          },

          name: "kalishit",
          details: "kalishit_details",

          proficiencies: {
            languages: [lang.alzhedo],
          },
        },

        mulan: {
          color: {
            skin: [color[2][3]],
            eyes: [color[2][4]],
            hair: [color[1][6]],
          },

          name: "mulan",
          details: "mulan_details",

          proficiencies: {
            languages: [lang.chessent],
          },
        },

        nar: {
          color: {
            skin: [color[2][2]],
            eyes: [color[1][4]],
            hair: [color[0][6]],
          },

          name: "nar",
          details: "nar_details",

          proficiencies: {
            languages: [lang.damarian],
          },
        },

        rashemi: {
          color: {
            skin: [color[2][5]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          name: "rashemi",
          details: "rashemi_details",

          proficiencies: {
            languages: [lang.rashemian],
          },
        },

        tetirian: {
          color: {
            skin: [color[2][2]],
            eyes: [color[8][3]],
            hair: [color[2][6]],
          },

          name: "tetirian",
          details: "tetirian_details",

          proficiencies: {
            languages: [lang.chondatanian],
          },
        },

        tuigan: {
          color: {
            skin: [color[3][5]],
            eyes: [color[0][5]],
            hair: [color[0][5]],
          },

          name: "tuigan",
          details: "tuigan_details",

          proficiencies: {
            languages: [lang.tuiganian],
          },
        },

        terami: {
          color: {
            skin: [color[1][5]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          name: "terami",
          details: "terami_details",

          proficiencies: {
            languages: [lang.teramian],
          },
        },

        ulutiune: {
          color: {
            skin: [color[3][4]],
            eyes: [color[8][3]],
            hair: [color[0][6]],
          },

          name: "ulutiune",
          details: "ulutiune_details",

          proficiencies: {
            languages: [lang.uluik],
          },
        },

        ffolk: {
          color: {
            skin: [color[2][1]],
            eyes: [color[7][3]],
            hair: [color[3][5]],
          },

          name: "ffolk",
          details: "ffolk_details",

          proficiencies: {
            languages: [lang.vaelan],
          },
        },

        halruanian: {
          color: {
            skin: [color[2][2]],
            eyes: [color[10][2], color[2][5], color[0][5], color[6][3]],
            hair: [color[3][2], color[2][5]],
          },

          name: "halruanian",
          details: "halruanian_details",

          proficiencies: {
            languages: [lang.halruanian],
          },
        },

        chondatan: {
          color: {
            skin: [color[2][2]],
            eyes: [color[6][3], color[2][5]],
            hair: [color[0][2], color[0][3], color[0][4], color[0][5]],
          },

          name: "chondatan",
          details: "chondatan_details",

          proficiencies: {
            languages: [lang.chondatanian],
          },
        },

        chult: {
          color: {
            skin: [color[1][6]],
            eyes: [color[3][3]],
            hair: [color[2][5]],
          },

          name: "chult",
          details: "chult_details",

          proficiencies: {
            languages: [lang.chult],
          },
        },

        shaarian: {
          color: {
            skin: [color[2][2]],
            eyes: [color[11][2]],
            hair: [color[2][5]],
          },

          name: "shaarian",
          details: "shaarian_details",

          proficiencies: {
            languages: [lang.shaarian],
          },
        },

        shu: {
          color: {
            skin: [color[3][4]],
            eyes: [color[0][5]],
            hair: [color[0][6]],
          },

          name: "shu",
          details: "shu_details",

          proficiencies: {
            languages: [lang.shu],
          },
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
          color[1][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
        eyes: [
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[6][1],
          color[6][2],
          color[6][3],
          color[6][4],
          color[6][5],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
        ],
        hair: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
        ],
      },

      age: {
        min: 10,
        young: 18,
        mature: 30,
        old: 60,
        max: 90,
      },

      height: {
        min: 150,
        max: 180,
      },

      weight: {
        min: 60,
        max: 90,
      },
    },

    stats: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },

    qualities: { speed: 30 },

    proficiencies: {
      languages: [lang.common],
    },
  },

  halfelf: {
    name: "halfelf",
    details: "halfelf_details",

    noimg_ethnos: true,

    settings: {
      ethnos: {
        common: {
          name: "common",
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
          color[1][6],
          color[0][6],
          color[3][0],
          color[12][0],
          color[11][0],
          color[10][0],
        ],
        eyes: [
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[6][1],
          color[6][2],
          color[6][3],
          color[6][4],
          color[6][5],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
        ],
        hair: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
        ],
      },

      age: {
        min: 10,
        young: 20,
        mature: 45,
        old: 150,
        max: 180,
      },

      height: {
        min: 150,
        max: 180,
      },

      weight: {
        min: 60,
        max: 90,
      },

      custom_stats: [2, 1],
      custom_skills: [2, 2],
      custom_language: 1,
    },

    stats: { charisma: 2 },

    qualities: { speed: 30, vision_night: 60 },

    proficiencies: {
      languages: [lang.common, lang.elf],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "charm_against",
      },
      {
        type: "resistance",
        keyword: "resistance",
        details: "magic_sleep_against",
      },
    ],
  },

  elf: {
    name: "elf",
    details: "elf_details",

    settings: {
      ethnos: {

        forest: {
          name: "forest",
          details: "forest_elf_details",

          color: {
            skin: [
              color[2][3],
              color[2][4],
              color[3][4],
            ],
            eyes: [
              color[5][3],
              color[2][4],
              color[2][5],
            ],
            hair: [
              color[0][6],
              color[2][6],
              color[2][5],
            ],
          },

          stats: {
            wisdom: 1,
          },
          qualities: {
            vision_night: 60,
          },

          proficiencies: {
            weapons: [
              weapon.long_swords,
              weapon.short_swords,
              weapon.long_bows,
              weapon.short_bows,
            ],
          },

          fines: [
            {
              type: "plus",
              keyword: "stealth_in_wild",
              details: "stealth_in_wild_details",
            },
          ],
        },

        high: {
          name: "high_elf",
          details: "high_elf_details",

          color: {
            skin: [
              color[2][1],
            ],
            eyes: [
              color[3][4],
              color[8][0],
              color[0][6],
            ],
            hair: [
              color[3][2],
            ],
          },

          stats: {
            wisdom: 1,
          },
          qualities: {
            vision_night: 60,
          },

          proficiencies: {
            weapons: [
              weapon.long_swords,
              weapon.short_swords,
              weapon.long_bows,
              weapon.short_bows,
            ],
          },

          fines: [
            {
              type: "plus",
              keyword: "knowledge",
              details: "any_cantrip_wizard",
            },
          ],

          custom_language: 1,
        },

        dark: {
          name: "dark",
          details: "dark_elf_details",

          color: {
            skin: [
              color[0][5],
              color[0][4],
              color[0][6],
            ],
            eyes: [
              color[0][1],
              color[1][0],
              color[8][0],
              color[9][0],
              color[10][0],
              color[11][0],
              color[12][0],
            ],
            hair: [
              color[0][0],
              color[1][0],
              color[8][0],
              color[9][0],
              color[10][0],
              color[11][0],
              color[12][0],
            ],
          },

          stats: {
            charisma: 1,
          },
          qualities: {
            vision_night: 120,
          },

          proficiencies: {
            weapons: [
              weapon.rapires,
              weapon.short_swords,
              weapon.hand_arbalets,
            ],
          },
          
          fines: [
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "perception_under_sun",
            },
            {
              type: "disadvantage",
              keyword: "disadvantage",
              details: "attack_under_sun",
            },
          ],

          spells: [
            {
              level: 1,
              spell: spells.dancing_lights,
            },
      
            {
              level: 3,
              spell: spells.faerie_fire,
            },
      
            {
              level: 5,
              spell: spells.darkness,
            },
          ],

          rare: "rare",

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
          color[1][6],
          color[0][6],
          color[3][0],
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][1],
          color[7][0],
          color[7][1],
          color[7][2],
          color[8][0],
          color[8][1],
          color[8][2],
          color[9][0],
          color[9][1],
          color[9][2],
          color[10][0],
          color[10][1],
          color[10][2],
          color[11][0],
          color[11][1],
          color[11][2],
          color[12][0],
          color[12][1],
          color[12][2],
        ],
        eyes: [
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[3][1],
          color[3][2],
          color[3][3],
          color[3][4],
          color[3][5],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[6][1],
          color[6][2],
          color[6][3],
          color[6][4],
          color[6][5],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
          color[10][1],
          color[10][2],
          color[10][3],
          color[10][4],
          color[10][5],
        ],
        hair: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
          color[4][0],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[4][6],
          color[5][0],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[5][6],
          color[7][0],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[7][6],
          color[8][0],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[8][6],
          color[9][0],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
          color[9][6],
        ],
      },


      age: {
        min: 10,
        young: 18,
        mature: 100,
        old: 600,
        max: 750,
      },

      height: {
        min: 150,
        max: 180,
      },

      weight: {
        min: 45,
        max: 65,
      },
    },

    stats: {
      dexterity: 2,
    },

    qualities: {
      speed: 30,
    },

    skills: {
      perception: 2,
    },

    proficiencies: {
      languages: [lang.common, lang.elf],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "charm_against",
      },
      {
        type: "resistance",
        keyword: "resistance",
        details: "magic_sleep_against",
      },
      {
        type: "plus",
        keyword: "trans",
        details: "trans_details",
      },
    ],
  },

  tiefling: {
    name: "tiefling",
    details: "tiefling_details",

    noimg_ethnos: true,

    settings: {
      ethnos: {
        common: {
          name: "common",
        },
      },

      gender: gender,

      color: {
        skin: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[7][0],
          color[7][1],
          color[7][2],
          color[8][0],
          color[8][1],
          color[8][2],
          color[9][0],
          color[9][1],
          color[9][2],
          color[10][0],
          color[10][1],
          color[10][2],
          color[11][0],
          color[11][1],
          color[11][2],
          color[12][0],
          color[12][1],
          color[12][2],
        ],
        eyes: [
          color[0][0],
          color[0][6],
          color[1][3],
          color[8][0],
          color[3][3],
          color[7][3],
          color[9][1],
          color[11][3],
          color[12][3],
        ],
        hair: [
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
          color[1][1],
          color[1][2],
          color[1][3],
          color[1][4],
          color[1][5],
          color[1][6],
          color[2][0],
          color[2][1],
          color[2][2],
          color[2][3],
          color[2][4],
          color[2][5],
          color[2][6],
          color[3][0],
          color[3][1],
          color[3][2],
          color[3][3],
          color[4][0],
          color[4][1],
          color[4][2],
          color[4][3],
          color[4][4],
          color[4][5],
          color[4][6],
          color[5][0],
          color[5][1],
          color[5][2],
          color[5][3],
          color[5][4],
          color[5][5],
          color[5][6],

          color[7][0],
          color[7][1],
          color[7][2],
          color[7][3],
          color[7][4],
          color[7][5],
          color[7][6],

          color[8][0],
          color[8][1],
          color[8][2],
          color[8][3],
          color[8][4],
          color[8][5],
          color[8][6],

          color[9][0],
          color[9][1],
          color[9][2],
          color[9][3],
          color[9][4],
          color[9][5],
          color[9][6],

          color[10][0],
          color[10][1],
          color[10][2],
          color[10][3],
          color[10][4],
          color[10][5],
          color[10][6],

          color[11][0],
          color[11][1],
          color[11][2],
          color[11][3],
          color[11][4],
          color[11][5],
          color[11][6],

          color[12][0],
          color[12][1],
          color[12][2],
          color[12][3],
          color[12][4],
          color[12][5],
          color[12][6],
        ],
      },

      age: {
        min: 10,
        young: 18,
        mature: 30,
        old: 85,
        max: 100,
      },

      height: {
        min: 150,
        max: 180,
      },

      weight: {
        min: 60,
        max: 90,
      },
    },

    stats: { intelligence: 1, charisma: 2 },

    qualities: { speed: 30, vision_night: 60 },

    proficiencies: {
      languages: [lang.common, lang.tiefling],
    },

    fines: [
      {
        type: "resistance",
        keyword: "resistance",
        details: "fire_damage",
      },
    ],

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
