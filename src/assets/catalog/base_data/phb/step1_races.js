import color from "@/assets/catalog/base_data/_colors.js";
import spells from "@/assets/catalog/base_data/list_spells.js";
import gender from "@/assets/catalog/base_data/list_genders.js";
import lang from "@/assets/catalog/base_data/list_languages.js";
import weaponry from "@/assets/catalog/base_data/kinds_weapons.js";
import tool from "@/assets/catalog/base_data/kinds_tools.js";
import armory from "@/assets/catalog/base_data/kinds_armor.js";
import backstory from "@/assets/catalog/base_data/phb/list_backstories.js";
import mods from "@/assets/catalog/base_data/list_spells_mods.js";
import feats from "@/assets/catalog/base_data/phb/list_feats.js";

export default {

  gnome: {
    name: "gnome",
    details: "gnome_details",

    noimg_ethnos: true,
    // ethnos_preview: [300, -24],
    ethnos_preview: [300, 70],

    race_settings: {
      ethnos: {
        rock: {
          name: "rock",
          details: "rock_gnome_details",

          color: {
            skin: [color[2][1], color[2][2], color[2][3], color[2][4]],
            eyes: [
              color[7][4],
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
            hair: [color[2][3], color[2][2]],
          },

          // stats: { constitution: 1 },
          stats: [{name: "constitution", num: 1, },],

          // qualities: { vision_night: 60 },
          qualities: [{name: "vision_night", num: 60,},],

          fines: [
            {
              type: "plus",
              keyword: "proficiency_bonus",
              details: "history_check_rock_gnome",
            },
          ],

          spells: [

            // КІНЕЦЬ ВІДЛАДКИ
            
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

          // stats: { dexterity: 1 },
          stats: [{ name: "dexterity", num: 1, },],

          // qualities: { vision_night: 60 },
          qualities: [{name: "vision_night", num: 60,},],


          proficiencies: {
            languages: [{
              name: "lang_animal",
              details: "lang_animal_details"
          },],
          },

          spells: [
            {
              level: 1,
              spell: spells.minor_illusion_gnome,
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

          // stats: { dexterity: 1 },
          stats: [{ name: "dexterity", num: 1, },],

          // qualities: { vision_night: 120 },
          qualities: [{name: "vision_night", num: 120,},],

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

      },

      gender: gender,
      backstory: backstory,
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

      size:"size_small",

      weight: {
        min: 15,
        max: 20,
      },
    },

    // stats: { intelligence: 2 },
    stats: [{ name: "intelligence", num: 2, },],

    // qualities: { speed: 25 },
    qualities: [{name: "speed", num: 25,},],

    proficiencies: {
      weapons: [weaponry.dimple],
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
  
  halfling: {
    name: "halfling",
    details: "halfling_details",

    noimg_ethnos: true,
    // ethnos_preview: [300, -24],
    ethnos_preview: [300, 70],

    race_settings: {
      ethnos: {

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

          // stats: { charisma: 1 },
          stats: [{ name: "charisma", num: 1, },],

          fines: [
            {
              type: "plus",
              keyword: "stealth",
              details: "behind_bigger_than_mid",
            },
          ],
        },

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

          // stats: { constitution: 1 },
          stats: [{ name: "constitution", num: 1, },],

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

          // stats: { wisdom: 1 },
          stats: [{ name: "wisdom", num: 1, },],

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
      backstory: backstory,
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
        min: 10,
        young: 20,
        mature: 45,
        old: 100,
        max: 150,
      },

      height: {
        min: 90,
        max: 120,
      },

      size:"size_small",

      weight: {
        min: 15,
        max: 20,
      },

    },

    // stats: { dexterity: 2 },
    stats: [{ name: "dexterity", num: 2, },],

    // qualities: { speed: 25 },
    qualities: [{name: "speed", num: 25,},],

    proficiencies: {
      weapons: [weaponry.dimple],
      languages: [lang.common, lang.halfling],
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "fear_against",
      },

      {
        type: "advantage",
        keyword: "rethrow",
        details: "any_dice_1",
      },

      {
        type: "plus",
        keyword: "slippage",
        details: "among_bigger_than_mid",
      },
    ],
  },

  dwarf: {
    name: "dwarf",
    details: "dwarf_details",

    noimg_ethnos: true,
    // ethnos_preview: [345, -30],
    ethnos_preview: [345, 90],

    race_settings: {
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
              color[0][6],
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

          // stats: { strength: 2 },
          stats: [{ name: "strength", num: 2, },],

          // qualities: { vision_night: 60 },
          qualities: [{name: "vision_night", num: 60,},],

          proficiencies: {
            armor: [armory.light, armory.medium],
          },
        },

        hill: {
          name: "hill",
          details: "hill_dwarf_details",
          // link_male: "https://www.heroforge.com/load_config%3D503211188",
          // link_female: "https://www.heroforge.com/load_config%3D503211452",

          color: {
            skin: [
              color[2][1],
              color[1][4],
              color[1][5],
              color[2][4],
              color[2][5],
              color[2][6],
              color[1][6],
              color[0][6],
            ],
            eyes: [color[2][4], color[2][5]],
            hair: [color[2][5], color[0][6], color[1][6], color[2][6]],
          },

          // stats: { wisdom: 1 },
          stats: [{ name: "wisdom", num: 1, },],

          // qualities: { vision_night: 60 },
          qualities: [{name: "vision_night", num: 60,},],

          hp_bonus: [1,1],

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

          // stats: { strength: 1 },
          stats: [{ name: "strength", num: 1, },],

          // qualities: { vision_night: 120 },
          qualities: [{name: "vision_night", num: 120,},],

          charges: [
            {
              level: 3,
              name: "enlargement_self_slots",
              type: "long_rest",
              list: [
                ["", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              ],
            },
            {
              level: 5,
              name: "invisibility_self_slots",
              type: "long_rest",
              list: [
                ["", 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              ],
            },
          ],

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
              spell: spells.enlargement_self,
            },
            {
              level: 5,
              spell: spells.invisibility_self,
            },
          ],
        },
      },

      gender: gender,
      backstory: backstory,

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

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    // stats: { constitution: 2 },
    stats: [{ name: "constitution", num: 2, },],

    // qualities: { speed: 25 },
    qualities: [{name: "speed", num: 25,},],

    proficiencies: {
      languages: [lang.common, lang.dwarf],
      weapons: [
        weaponry.battle_axes,
        weaponry.hand_axes,
        weaponry.battle_hammers,
        weaponry.light_hammers,
        weaponry.dimple,
      ],
      tools: [tool.blacksmith, tool.brewer, tool.mason],
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
    // ethnos_preview: [390,-36],
    ethnos_preview: [390, 82],

    race_settings: {
      ethnos: {

        human_simple: {
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

          name: "human_simple",
          details: "human_simple_details",

          stats: [
            { name: "strength", num: 1, },
            { name: "dexterity", num: 1, },
            { name: "constitution", num: 1, },
            { name: "intelligence", num: 1, },
            { name: "wisdom", num: 1, },
            { name: "charisma", num: 1, },
          ],

          settings: [
            {
              level: 1,
              type: "custom",
              name: "languages",
              position: 10,
              select: 1,
              list: [
                {
                  name: lang.damarian.name,
                  details: lang.damarian.details,
                  proficiencies: {languages: [lang.damarian]}
                },
                {
                  name: lang.vaelan.name,
                  details: lang.vaelan.details,
                  proficiencies: {languages: [lang.vaelan]}
                },
                {
                  name: lang.halruanian.name,
                  details: lang.halruanian.details,
                  proficiencies: {languages: [lang.halruanian]}
                },
                {
                  name: lang.chondatanian.name,
                  details: lang.chondatanian.details,
                  proficiencies: {languages: [lang.chondatanian]}
                },
                {
                  name: lang.uluik.name,
                  details: lang.uluik.details,
                  proficiencies: {languages: [lang.uluik]}
                },
                {
                  name: lang.dambratan.name,
                  details: lang.dambratan.details,
                  proficiencies: {languages: [lang.dambratan]}
                },
                {
                  name: lang.shaarian.name,
                  details: lang.shaarian.details,
                  proficiencies: {languages: [lang.shaarian]}
                },
                {
                  name: lang.chessent.name,
                  details: lang.chessent.details,
                  proficiencies: {languages: [lang.chessent]}
                },
                {
                  name: lang.alzhedo.name,
                  details: lang.alzhedo.details,
                  proficiencies: {languages: [lang.alzhedo]}
                },
                {
                  name: lang.shu.name,
                  details: lang.shu.details,
                  proficiencies: {languages: [lang.shu]}
                },
                {
                  name: lang.rashemian.name,
                  details: lang.rashemian.details,
                  proficiencies: {languages: [lang.rashemian]}
                },
                {
                  name: lang.midani.name,
                  details: lang.midani.details,
                  proficiencies: {languages: [lang.midani]}
                },
                {
                  name: lang.chult.name,
                  details: lang.chult.details,
                  proficiencies: {languages: [lang.chult]}
                },
                {
                  name: lang.teramian.name,
                  details: lang.teramian.details,
                  proficiencies: {languages: [lang.teramian]}
                },
                {
                  name: lang.tuiganian.name,
                  details: lang.tuiganian.details,
                  proficiencies: {languages: [lang.tuiganian]}
                },
                {
                  name: lang.guran.name,
                  details: lang.guran.details,
                  proficiencies: {languages: [lang.guran]}
                },
                {
                  name: lang.rushum.name,
                  details: lang.rushum.details,
                  proficiencies: {languages: [lang.rushum]}
                },
                {
                  name: lang.illuskian.name,
                  details: lang.illuskian.details,
                  proficiencies: {languages: [lang.illuskian]}
                },
              ]
            },
          ]

        },

        variant: {
          color: {
            skin: [
              color[1][0],
            ],
            eyes: [color[8][3]],
            hair: [color[3][3]],
          },

          name: "variant",
          details: "variant_details",

          settings: [
            {
              type: "custom",
              name: "stats",
              position:7,
              select: 2,
              list: [
                {
                  name_set: "strength",
                  stats: [
                    {
                      name: "strength",
                      num: 1,
                      details: "strength_details",
                    },
                  ],
                },
                {
                  name_set: "dexterity",
                  stats: [
                    {
                      name: "dexterity",
                      num: 1,
                      details: "dexterity_details",
                    },
                  ],
                },
                {
                  name_set: "constitution",
                  stats: [
                    {
                      name: "constitution",
                      num: 1,
                      details: "constitution_details",
                    },
                  ],
                },
                {
                  name_set: "intelligence",
                  stats: [
                    {
                      name: "intelligence",
                      num: 1,
                      details: "intelligence_details",
                    },
                  ],
                },
                {
                  name_set: "wisdom",
                  stats: [
                    {
                      name: "wisdom",
                      num: 1,
                      details: "wisdom_details",
                    },
                  ],
                },
                {
                  name_set: "charisma",
                  stats: [
                    {
                      name: "charisma",
                      num: 1,
                      details: "charisma_details",
                    },
                  ],
                },
              ]
            },
            {
              type: "custom",
              name: "feats",
              position:7,
              select: 1,
              list: [
                feats.actor,
                feats.athlete,
                feats.mobile,  
                feats.dungeon_delver,
                feats.observant,  
                feats.alert,   
                feats.lucky,
                feats.tough,
                feats.durable,
                feats.resilient, 
                feats.skilled,
                feats.keen_mind,
                feats.linguist,
                feats.healer,
                feats.lightly_armored,
                feats.moderately_armored,
                feats.heavily_armored,
                feats.shield_master,
                feats.great_weapon_master,
                feats.polearm_master,
                feats.weapon_master,
                feats.dual_wielder,
                feats.crossbow_expert,
                feats.sharpshooter,
                feats.martial_adept,
                feats.brawler,
                feats.charger,
                feats.savage_attacker,
                feats.sentinel,
                feats.mounted_combatant,
                feats.mage_slayer,
                feats.magic_initiate
              ],
            },
            {
              type: "custom",
              name: "skills",
              position: 8,
              select: 1,
              list: [
                {
                  name_set: "athletics",
                  skills: [
                    {
                      name: "athletics",
                      num: "Mastery",
                      details: "athletics_details",
                    },
                  ],
                },
                {
                  name_set: "acrobatics",
                  skills: [
                    {
                      name: "acrobatics",
                      num: "Mastery",
                      details: "acrobatics_details",
                    },
                  ],
                },
                {
                  name_set: "sleight_of_hand",
                  skills: [
                    {
                      name: "sleight_of_hand",
                      num: "Mastery",
                      details: "sleight_of_hand_details",
                    },
                  ],
                },
                {
                  name_set: "stealth",
                  skills: [
                    {
                      name: "stealth",
                      num: "Mastery",
                      details: "stealth_details",
                    },
                  ],
                },
                {
                  name_set: "investigation",
                  skills: [
                    {
                      name: "investigation",
                      num: "Mastery",
                      details: "investigation_details",
                    },
                  ],
                },
                {
                  name_set: "history",
                  skills: [
                    {
                      name: "history",
                      num: "Mastery",
                      details: "history_details",
                    },
                  ],
                },
                {
                  name_set: "religion",
                  skills: [
                    {
                      name: "religion",
                      num: "Mastery",
                      details: "religion_details",
                    },
                  ],
                },
                {
                  name_set: "arcana",
                  skills: [
                    {
                      name: "arcana",
                      num: "Mastery",
                      details: "arcana_details",
                    },
                  ],
                },
                {
                  name_set: "nature",
                  skills: [
                    {
                      name: "nature",
                      num: "Mastery",
                      details: "nature_details",
                    },
                  ],
                },
                {
                  name_set: "survival",
                  skills: [
                    {
                      name: "survival",
                      num: "Mastery",
                      details: "survival_details",
                    },
                  ],
                },
                {
                  name_set: "perception",
                  skills: [
                    {
                      name: "perception",
                      num: "Mastery",
                      details: "perception_details",
                    },
                  ],
                },
                {
                  name_set: "insight",
                  skills: [
                    {
                      name: "insight",
                      num: "Mastery",
                      details: "insight_details",
                    },
                  ],
                },
                {
                  name_set: "medicine",
                  skills: [
                    {
                      name: "medicine",
                      num: "Mastery",
                      details: "medicine_details",
                    },
                  ],
                },
                {
                  name_set: "animal_handling",
                  skills: [
                    {
                      name: "animal_handling",
                      num: "Mastery",
                      details: "animal_handling_details",
                    },
                  ],
                },
                {
                  name_set: "performance",
                  skills: [
                    {
                      name: "performance",
                      num: "Mastery",
                      details: "performance_details",
                    },
                  ],
                },
                {
                  name_set: "persuasion",
                  skills: [
                    {
                      name: "persuasion",
                      num: "Mastery",
                      details: "persuasion_details",
                    },
                  ],
                },
                {
                  name_set: "deception",
                  skills: [
                    {
                      name: "deception",
                      num: "Mastery",
                      details: "deception_details",
                    },
                  ],
                },
                {
                  name_set: "intimidation",
                  skills: [
                    {
                      name: "intimidation",
                      num: "Mastery",
                      details: "intimidation_details",
                    },
                  ],
                },
              ]
            },
            {
              level: 1,
              type: "custom",
              name: "languages",
              position: 10,
              select: 1,
              list: [
                {
                  name: lang.halfling.name,
                  details: lang.halfling.details,
                  proficiencies: {languages: [lang.halfling]}
                },
                {
                  name: lang.gnome.name,
                  details: lang.gnome.details,
                  proficiencies: {languages: [lang.gnome]}
                },
                {
                  name: lang.dwarf.name,
                  details: lang.dwarf.details,
                  proficiencies: {languages: [lang.dwarf]}
                },
                {
                  name: lang.elf.name,
                  details: lang.elf.details,
                  proficiencies: {languages: [lang.elf]}
                },
                {
                  name: lang.orc.name,
                  details: lang.orc.details,
                  proficiencies: {languages: [lang.orc]}
                },
                {
                  name: lang.dragon.name,
                  details: lang.dragon.details,
                  proficiencies: {languages: [lang.dragon]}
                },
                {
                  name: lang.giant.name,
                  details: lang.giant.details,
                  proficiencies: {languages: [lang.giant]}
                },
                {
                  name: lang.goblin.name,
                  details: lang.goblin.details,
                  proficiencies: {languages: [lang.goblin]}
                },
                {
                  name: lang.sylvan.name,
                  details: lang.sylvan.details,
                  proficiencies: {languages: [lang.sylvan]}
                },
                {
                  name: lang.undercommon.name,
                  details: lang.undercommon.details,
                  proficiencies: {languages: [lang.undercommon]}
                },
                {
                  name: lang.deep.name,
                  details: lang.deep.details,
                  proficiencies: {languages: [lang.deep]}
                },
                {
                  name: lang.primordial.name,
                  details: lang.primordial.details,
                  proficiencies: {languages: [lang.primordial]}
                },
                {
                  name: lang.sky.name,
                  details: lang.sky.details,
                  proficiencies: {languages: [lang.sky]}
                },
                {
                  name: lang.demonic.name,
                  details: lang.demonic.details,
                  proficiencies: {languages: [lang.demonic]}
                },
                {
                  name: lang.tiefling.name,
                  details: lang.tiefling.details,
                  proficiencies: {languages: [lang.tiefling]}
                },
              ]
            },
            {
              level: 1,
              type: "custom",
              name: "languages",
              position: 10,
              select: 1,
              list: [
                {
                  name: lang.damarian.name,
                  details: lang.damarian.details,
                  proficiencies: {languages: [lang.damarian]}
                },
                {
                  name: lang.vaelan.name,
                  details: lang.vaelan.details,
                  proficiencies: {languages: [lang.vaelan]}
                },
                {
                  name: lang.halruanian.name,
                  details: lang.halruanian.details,
                  proficiencies: {languages: [lang.halruanian]}
                },
                {
                  name: lang.chondatanian.name,
                  details: lang.chondatanian.details,
                  proficiencies: {languages: [lang.chondatanian]}
                },
                {
                  name: lang.uluik.name,
                  details: lang.uluik.details,
                  proficiencies: {languages: [lang.uluik]}
                },
                {
                  name: lang.dambratan.name,
                  details: lang.dambratan.details,
                  proficiencies: {languages: [lang.dambratan]}
                },
                {
                  name: lang.shaarian.name,
                  details: lang.shaarian.details,
                  proficiencies: {languages: [lang.shaarian]}
                },
                {
                  name: lang.chessent.name,
                  details: lang.chessent.details,
                  proficiencies: {languages: [lang.chessent]}
                },
                {
                  name: lang.alzhedo.name,
                  details: lang.alzhedo.details,
                  proficiencies: {languages: [lang.alzhedo]}
                },
                {
                  name: lang.shu.name,
                  details: lang.shu.details,
                  proficiencies: {languages: [lang.shu]}
                },
                {
                  name: lang.rashemian.name,
                  details: lang.rashemian.details,
                  proficiencies: {languages: [lang.rashemian]}
                },
                {
                  name: lang.midani.name,
                  details: lang.midani.details,
                  proficiencies: {languages: [lang.midani]}
                },
                {
                  name: lang.chult.name,
                  details: lang.chult.details,
                  proficiencies: {languages: [lang.chult]}
                },
                {
                  name: lang.teramian.name,
                  details: lang.teramian.details,
                  proficiencies: {languages: [lang.teramian]}
                },
                {
                  name: lang.tuiganian.name,
                  details: lang.tuiganian.details,
                  proficiencies: {languages: [lang.tuiganian]}
                },
                {
                  name: lang.guran.name,
                  details: lang.guran.details,
                  proficiencies: {languages: [lang.guran]}
                },
                {
                  name: lang.rushum.name,
                  details: lang.rushum.details,
                  proficiencies: {languages: [lang.rushum]}
                },
                {
                  name: lang.illuskian.name,
                  details: lang.illuskian.details,
                  proficiencies: {languages: [lang.illuskian]}
                },
              ]
            },
          ]
        },
      },

      gender: gender,
      backstory: backstory,

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
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    // qualities: { speed: 30 },
    qualities: [{name: "speed", num: 30,},],

    proficiencies: {
      weapons: [weaponry.dimple],
      languages: [lang.common],
    },

  },

  halfelf: {
    name: "halfelf",
    details: "halfelf_details",

    noimg_ethnos: true,
    // ethnos_preview: [390,-36],
    ethnos_preview: [390, 82],

    race_settings: {
      ethnos: {
        common: {
          name: "common",
          settings: [
            {
              type: "custom",
              name: "stats",
              position:7,
              select: 2,
              list: [
                {
                  name_set: "strength",
                  stats: [
                    {
                      name: "strength",
                      num: 1,
                      details: "strength_details",
                    },
                  ],
                },
                {
                  name_set: "dexterity",
                  stats: [
                    {
                      name: "dexterity",
                      num: 1,
                      details: "dexterity_details",
                    },
                  ],
                },
                {
                  name_set: "constitution",
                  stats: [
                    {
                      name: "constitution",
                      num: 1,
                      details: "constitution_details",
                    },
                  ],
                },
                {
                  name_set: "intelligence",
                  stats: [
                    {
                      name: "intelligence",
                      num: 1,
                      details: "intelligence_details",
                    },
                  ],
                },
                {
                  name_set: "wisdom",
                  stats: [
                    {
                      name: "wisdom",
                      num: 1,
                      details: "wisdom_details",
                    },
                  ],
                },
              ]
            },
            {
              type: "custom",
              name: "skills",
              position: 8,
              select: 2,
              list: [
                {
                  name_set: "athletics",
                  skills: [
                    {
                      name: "athletics",
                      num: "Mastery",
                      details: "athletics_details",
                    },
                  ],
                },
                {
                  name_set: "acrobatics",
                  skills: [
                    {
                      name: "acrobatics",
                      num: "Mastery",
                      details: "acrobatics_details",
                    },
                  ],
                },
                {
                  name_set: "sleight_of_hand",
                  skills: [
                    {
                      name: "sleight_of_hand",
                      num: "Mastery",
                      details: "sleight_of_hand_details",
                    },
                  ],
                },
                {
                  name_set: "stealth",
                  skills: [
                    {
                      name: "stealth",
                      num: "Mastery",
                      details: "stealth_details",
                    },
                  ],
                },
                {
                  name_set: "investigation",
                  skills: [
                    {
                      name: "investigation",
                      num: "Mastery",
                      details: "investigation_details",
                    },
                  ],
                },
                {
                  name_set: "history",
                  skills: [
                    {
                      name: "history",
                      num: "Mastery",
                      details: "history_details",
                    },
                  ],
                },
                {
                  name_set: "religion",
                  skills: [
                    {
                      name: "religion",
                      num: "Mastery",
                      details: "religion_details",
                    },
                  ],
                },
                {
                  name_set: "arcana",
                  skills: [
                    {
                      name: "arcana",
                      num: "Mastery",
                      details: "arcana_details",
                    },
                  ],
                },
                {
                  name_set: "nature",
                  skills: [
                    {
                      name: "nature",
                      num: "Mastery",
                      details: "nature_details",
                    },
                  ],
                },
                {
                  name_set: "survival",
                  skills: [
                    {
                      name: "survival",
                      num: "Mastery",
                      details: "survival_details",
                    },
                  ],
                },
                {
                  name_set: "perception",
                  skills: [
                    {
                      name: "perception",
                      num: "Mastery",
                      details: "perception_details",
                    },
                  ],
                },
                {
                  name_set: "insight",
                  skills: [
                    {
                      name: "insight",
                      num: "Mastery",
                      details: "insight_details",
                    },
                  ],
                },
                {
                  name_set: "medicine",
                  skills: [
                    {
                      name: "medicine",
                      num: "Mastery",
                      details: "medicine_details",
                    },
                  ],
                },
                {
                  name_set: "animal_handling",
                  skills: [
                    {
                      name: "animal_handling",
                      num: "Mastery",
                      details: "animal_handling_details",
                    },
                  ],
                },
                {
                  name_set: "performance",
                  skills: [
                    {
                      name: "performance",
                      num: "Mastery",
                      details: "performance_details",
                    },
                  ],
                },
                {
                  name_set: "persuasion",
                  skills: [
                    {
                      name: "persuasion",
                      num: "Mastery",
                      details: "persuasion_details",
                    },
                  ],
                },
                {
                  name_set: "deception",
                  skills: [
                    {
                      name: "deception",
                      num: "Mastery",
                      details: "deception_details",
                    },
                  ],
                },
                {
                  name_set: "intimidation",
                  skills: [
                    {
                      name: "intimidation",
                      num: "Mastery",
                      details: "intimidation_details",
                    },
                  ],
                },
              ]
            },
            {
              level: 1,
              type: "custom",
              name: "languages",
              position: 10,
              select: 1,
              list: [
                {
                  name: lang.halfling.name,
                  details: lang.halfling.details,
                  proficiencies: {languages: [lang.halfling]}
                },
                {
                  name: lang.gnome.name,
                  details: lang.gnome.details,
                  proficiencies: {languages: [lang.gnome]}
                },
                {
                  name: lang.dwarf.name,
                  details: lang.dwarf.details,
                  proficiencies: {languages: [lang.dwarf]}
                },
                {
                  name: lang.elf.name,
                  details: lang.elf.details,
                  proficiencies: {languages: [lang.elf]}
                },
                {
                  name: lang.orc.name,
                  details: lang.orc.details,
                  proficiencies: {languages: [lang.orc]}
                },
                {
                  name: lang.dragon.name,
                  details: lang.dragon.details,
                  proficiencies: {languages: [lang.dragon]}
                },
                {
                  name: lang.giant.name,
                  details: lang.giant.details,
                  proficiencies: {languages: [lang.giant]}
                },
                {
                  name: lang.goblin.name,
                  details: lang.goblin.details,
                  proficiencies: {languages: [lang.goblin]}
                },
                {
                  name: lang.sylvan.name,
                  details: lang.sylvan.details,
                  proficiencies: {languages: [lang.sylvan]}
                },
                {
                  name: lang.undercommon.name,
                  details: lang.undercommon.details,
                  proficiencies: {languages: [lang.undercommon]}
                },
                {
                  name: lang.deep.name,
                  details: lang.deep.details,
                  proficiencies: {languages: [lang.deep]}
                },
                {
                  name: lang.primordial.name,
                  details: lang.primordial.details,
                  proficiencies: {languages: [lang.primordial]}
                },
                {
                  name: lang.sky.name,
                  details: lang.sky.details,
                  proficiencies: {languages: [lang.sky]}
                },
                {
                  name: lang.demonic.name,
                  details: lang.demonic.details,
                  proficiencies: {languages: [lang.demonic]}
                },
                {
                  name: lang.tiefling.name,
                  details: lang.tiefling.details,
                  proficiencies: {languages: [lang.tiefling]}
                },
              ]
            },
          ]
        },
      },

      gender: gender,
      backstory: backstory,

      color: {
        skin: [
          color[2][1],
          color[1][0],
          color[2][0],
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
          color[3][4],
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
        ],
        hair: [
          color[2][2],
          color[2][5],
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
          color[2][3],
          color[2][4],
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
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    // stats: { charisma: 2 },
    stats: [{ name: "charisma", num: 2, },],

    // qualities: { speed: 30, vision_night: 60 },
    qualities: [
      {name: "speed", num: 30,},
      {name: "vision_night", num: 60,},
    ],

    proficiencies: {
      weapons: [weaponry.dimple],
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
        keyword: "immunity",
        details: "magic_sleep_against",
      },
    ],
  },

  elf: {
    name: "elf",
    details: "elf_details",

    noimg_ethnos: true,
    // ethnos_preview: [390,-36],
    ethnos_preview: [390, 82],

    race_settings: {
      ethnos: {

        high_elf: {
          name: "high_elf",
          details: "high_elf_details",

          color: {
            skin: [
              color[2][1],
            ],
            eyes: [
              color[3][4],
              color[8][0],
              color[0][5],
            ],
            hair: [
              color[3][2],
            ],
          },

          // stats: {wisdom: 1,},
          stats: [{ name: "wisdom", num: 1, },],

          // qualities: {vision_night: 60,},
          qualities: [{name: "vision_night", num: 60,},],

          proficiencies: {
            weapons: [
              weaponry.long_swords,
              weaponry.short_swords,
              weaponry.long_bows,
              weaponry.short_bows,
            ],
          },

          // fines: [
          //   {
          //     type: "plus",
          //     keyword: "knowledge",
          //     details: "any_cantrip_wizard",
          //   },
          // ],

          settings: [
            {
              type: "custom",
              name: "spells_0",
              position: 3,
              select: 1,
              mana_min: 0,
              mana_max: 0,
              classes: ["wizard"],
              list: [
                // spells[0] wizard
                {
                  name_set: spells.friends[0].name,
                  spells: [{ spell: spells.friends }],
                },
                {
                  name_set: spells.message[0].name,
                  spells: [{ spell: spells.message }],
                },
                {
                  name_set: spells.mage_hand[0].name,
                  spells: [{ spell: spells.mage_hand }],
                },
                {
                  name_set: spells.mending[0].name,
                  spells: [{ spell: spells.mending }],
                },
                {
                  name_set: spells.prestidigitation[0].name,
                  spells: [{ spell: spells.prestidigitation }],
                },
                {
                  name_set: spells.dancing_lights[0].name,
                  spells: [{ spell: spells.dancing_lights }],
                },
                {
                  name_set: spells.light[0].name,
                  spells: [{ spell: spells.light, mod: mods.m[9],}],
                },
                {
                  name_set: spells.minor_illusion[0].name,
                  spells: [{ spell: spells.minor_illusion, mod: mods.m[9],}],
                },
                {
                  name_set: spells.true_strike[0].name,
                  spells: [{ spell: spells.true_strike }],
                },
                {
                  name_set: spells.blade_ward[0].name,
                  spells: [{ spell: spells.blade_ward }],
                },
                {
                  name_set: spells.acid_splash[0].name,
                  spells: [{ spell: spells.acid_splash, mod: mods.m[9],}],
                },
                {
                  name_set: spells.ray_of_frost[0].name,
                  spells: [{ spell: spells.ray_of_frost, mod: mods.m[10],}],
                },
                {
                  name_set: spells.chill_touch[0].name,
                  spells: [{ spell: spells.chill_touch, mod: mods.m[10],}],
                },
                {
                  name_set: spells.shocking_grasp[0].name,
                  spells: [{ spell: spells.shocking_grasp, mod: mods.m[10],}],
                },
                {
                  name_set: spells.fire_bolt[0].name,
                  spells: [{ spell: spells.fire_bolt, mod: mods.m[10],}],
                },
                {
                  name_set: spells.poison_spray[0].name,
                  spells: [{ spell: spells.poison_spray, mod: mods.m[9],}],
                },
              ],
            },
            {
              level: 1,
              type: "custom",
              name: "languages",
              position: 10,
              select: 1,
              list: [
                {
                  name: lang.halfling.name,
                  details: lang.halfling.details,
                  proficiencies: {languages: [lang.halfling]}
                },
                {
                  name: lang.gnome.name,
                  details: lang.gnome.details,
                  proficiencies: {languages: [lang.gnome]}
                },
                {
                  name: lang.dwarf.name,
                  details: lang.dwarf.details,
                  proficiencies: {languages: [lang.dwarf]}
                },
                {
                  name: lang.elf.name,
                  details: lang.elf.details,
                  proficiencies: {languages: [lang.elf]}
                },
                {
                  name: lang.orc.name,
                  details: lang.orc.details,
                  proficiencies: {languages: [lang.orc]}
                },
                {
                  name: lang.dragon.name,
                  details: lang.dragon.details,
                  proficiencies: {languages: [lang.dragon]}
                },
                {
                  name: lang.giant.name,
                  details: lang.giant.details,
                  proficiencies: {languages: [lang.giant]}
                },
                {
                  name: lang.goblin.name,
                  details: lang.goblin.details,
                  proficiencies: {languages: [lang.goblin]}
                },
                {
                  name: lang.sylvan.name,
                  details: lang.sylvan.details,
                  proficiencies: {languages: [lang.sylvan]}
                },
                {
                  name: lang.undercommon.name,
                  details: lang.undercommon.details,
                  proficiencies: {languages: [lang.undercommon]}
                },
                {
                  name: lang.deep.name,
                  details: lang.deep.details,
                  proficiencies: {languages: [lang.deep]}
                },
                {
                  name: lang.primordial.name,
                  details: lang.primordial.details,
                  proficiencies: {languages: [lang.primordial]}
                },
                {
                  name: lang.sky.name,
                  details: lang.sky.details,
                  proficiencies: {languages: [lang.sky]}
                },
                {
                  name: lang.demonic.name,
                  details: lang.demonic.details,
                  proficiencies: {languages: [lang.demonic]}
                },
                {
                  name: lang.tiefling.name,
                  details: lang.tiefling.details,
                  proficiencies: {languages: [lang.tiefling]}
                },
              ]
            },
          ],
        },

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

          // stats: {wisdom: 1,},
          stats: [{ name: "wisdom", num: 1, },],

          // qualities: {vision_night: 60,},
          qualities: [
            {name: "speed", num: 35,},
            {name: "vision_night", num: 60,},
          ],

          proficiencies: {
            weapons: [
              weaponry.long_swords,
              weaponry.short_swords,
              weaponry.long_bows,
              weaponry.short_bows,
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

          // stats: {charisma: 1,},
          stats: [{ name: "charisma", num: 1, },],

          // qualities: {vision_night: 120,},
          qualities: [{name: "vision_night", num: 120,},],

          proficiencies: {
            weapons: [
              weaponry.rapires,
              weaponry.short_swords,
              weaponry.hand_arbalets,
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

          charges: [
            {
              level: 3,
              name: "faerie_fire_0_slots",
              type: "long_rest",
              list: [
                ["", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              ],
            },
            {
              level: 5,
              name: "darkness_tiefling_slots",
              type: "long_rest",
              list: [
                ["", 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              ],
            },
          ],

          spells: [
            {
              level: 1,
              spell: spells.dancing_lights,
            },

            {
              level: 3,
              spell: spells.faerie_fire_0,
            },
            {
              level: 5,
              spell: spells.darkness_tiefling,
            },
          ],

          rare: "rare",

        },
      },

      gender: gender,
      backstory: backstory,

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
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 45,
        max: 65,
      },
    },

    // stats: {dexterity: 2,},
    stats: [{ name: "dexterity", num: 2, },],

    // qualities: {speed: 30,},
    qualities: [{name: "speed", num: 30,},],

    // skills: {perception: "mastery",},
    skills: [{name: "perception", num: "Mastery",},],

    proficiencies: {
      weapons: [weaponry.dimple],
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
        keyword: "immunity",
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
    // ethnos_preview: [390,-36],
    ethnos_preview: [390, 82],

    race_settings: {
      ethnos: {
        common: {
          name: "common",
        },
      },

      gender: gender,
      backstory: backstory,

      color: {
        skin: [
          color[1][1],
          color[0][0],
          color[0][1],
          color[0][2],
          color[0][3],
          color[0][4],
          color[0][5],
          color[0][6],
          color[1][0],
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
          color[9][1],
          color[0][0],
          color[0][6],
          color[1][3],
          color[8][0],
          color[3][3],
          color[7][3],
          color[11][3],
          color[12][3],
        ],
        hair: [
          color[9][5],
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
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 60,
        max: 90,
      },
    },

    // stats: { intelligence: 1, charisma: 2 },
    stats: [
      { name: "intelligence", num: 1, },
      { name: "charisma", num: 2, },
  ],

    // qualities: { speed: 30, vision_night: 60 },
    qualities: [
      {name: "speed", num: 30,},
      {name: "vision_night", num: 60,},
    ],

    charges: [
      {
        level: 3,
        name: "hellish_rebuke_tiefling_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 5,
        name: "darkness_tiefling_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
    ],

    proficiencies: {
      weapons: [weaponry.dimple],
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
        spell: spells.hellish_rebuke_tiefling,
      },

      {
        level: 5,
        spell: spells.darkness_tiefling,
      },
    ],
  },

  halforc:{
    name:"halforc",
    details:"halforc_details",

    noimg_ethnos: true,
    // ethnos_preview: [435,-42],
    ethnos_preview: [435, 96],

    race_settings: {
      ethnos: {
        common: {
          name: "common",
        },
      },

      gender: gender,
      backstory: backstory,

      color: {
        skin: [
          color[0][2],
          color[0][3],
          color[0][4],
          color[1][2],
          color[1][3],
          color[1][4],
          color[2][2],
          color[2][3],
          color[2][4],
          color[8][0],
          color[8][1],
          color[9][0],
          color[9][1],
        ],
        eyes: [
          color[0][5],
          color[1][5],
          color[2][5],
          color[10][5],
          color[11][5],
          color[12][5],
        ],
        hair: [
          color[0][6],
          color[1][6],
          color[2][6],
          color[10][6],
          color[11][6],
          color[12][6],
        ],
      },

      age: {
        min: 10,
        young: 14,
        mature: 25,
        old: 55,
        max: 75,
      },

      height: {
        min: 180,
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 80,
        max: 115,
      },
    },

    // stats: {strength: 2,constitution: 1,},
    stats: [
      { name: "strength", num: 2, },
      { name: "constitution", num: 1, },
  ],

    // skills: {intimidation: "mastery",},
    skills: [{name: "intimidation", num: "Mastery",},],

    // qualities: { speed: 30, vision_night: 60 },
    qualities: [
      {name: "speed", num: 30,},
      {name: "vision_night", num: 60,},
    ],

    proficiencies: {
      weapons: [weaponry.dimple],
      languages: [lang.common, lang.orc],
    },

    fines: [
      {
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        type: "plus",
        keyword: "persistence",
        details: "persistence_details",
      },
    ],
  },

  dragonborn:{
    name:"dragonborn",
    details:"dragonborn_details",

    noimg_ethnos: true,
    // ethnos_preview: [435,-42],
    ethnos_preview: [435, 96],

    race_settings: {
      ethnos: {

        brass_dragonborn: {

          name:"brass_dragonborn",
          details:"brass_dragonborn_details",

          color: {
            skin: [
              color[2][1],
            ],
            eyes: [
              color[3][0],
            ],
            hair: [
              color[2][6],
            ],
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
              spell: spells.fire_breath_line,
            },
          ],
        },

        golden_dragonborn: {

          name:"golden_dragonborn",
          details:"golden_dragonborn_details",

          color: {
            skin: [
              color[3][5],
            ],
            eyes: [
              color[3][4],
            ],
            hair: [
              color[2][6],
            ],
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
              spell: spells.fire_breath_cone,
            },
          ],
        },

        red_dragonborn: {

          name:"red_dragonborn",
          details:"red_dragonborn_details",

          color: {
            skin: [
              color[1][4],
            ],
            eyes: [
              color[1][3],
            ],
            hair: [
              color[1][5],
            ],
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
              spell: spells.fire_breath_cone,
            },
          ],
        },

        silver_dragonborn: {

          name:"silver_dragonborn",
          details:"silver_dragonborn_details",

          color: {
            skin: [
              color[8][0],
            ],
            eyes: [
              color[7][3],
            ],
            hair: [
              color[8][3],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "cold_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.cold_breath_cone,
            },
          ],
        },

        white_dragonborn: {

          name:"white_dragonborn",
          details:"white_dragonborn_details",

          color: {
            skin: [
              color[0][0],
            ],
            eyes: [
              color[7][3],
            ],
            hair: [
              color[8][3],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "cold_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.cold_breath_cone,
            },
          ],
        },

        blue_dragonborn: {

          name:"blue_dragonborn",
          details:"blue_dragonborn_details",

          color: {
            skin: [
              color[9][3],
            ],
            eyes: [
              color[3][3],
            ],
            hair: [
              color[3][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "electricity_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.electricity_breath_line,
            },
          ],
        },

        bronze_dragonborn: {

          name:"bronze_dragonborn",
          details:"bronze_dragonborn_details",

          color: {
            skin: [
              color[2][5],
            ],
            eyes: [
              color[3][3],
            ],
            hair: [
              color[3][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "electricity_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.electricity_breath_line,
            },
          ],
        },

        copper_dragonborn: {

          name:"copper_dragonborn",
          details:"copper_dragonborn_details",

          color: {
            skin: [
              color[2][3],
            ],
            eyes: [
              color[11][3],
            ],
            hair: [
              color[11][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "acid_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.acid_breath_line,
            },
          ],
        },

        black_dragonborn: {

          name:"black_dragonborn",
          details:"black_dragonborn_details",

          color: {
            skin: [
              color[0][6],
            ],
            eyes: [
              color[11][3],
            ],
            hair: [
              color[11][4],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "acid_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.acid_breath_line,
            },
          ],
        },

        green_dragonborn: {

          name:"green_dragonborn",
          details:"green_dragonborn_details",

          color: {
            skin: [
              color[5][4],
            ],
            eyes: [
              color[4][3],
            ],
            hair: [
              color[4][5],
            ],
          },
          fines: [
            {
              type: "resistance",
              keyword: "resistance",
              details: "poison_damage",
            },
          ],
          spells: [
            {
              level: 1,
              spell: spells.poison_breath_cone,
            },
          ],
        },

      },

      gender: gender,
      backstory: backstory,

      color: {
        skin: [],
        eyes: [],
        hair: [],
      },

      age: {
        min: 3,
        young: 10,
        mature: 15,
        old: 65,
        max: 85,
      },

      height: {
        min: 180,
        max: 210,
      },

      size:"size_medium",

      weight: {
        min: 80,
        max: 115,
      },
    },

    
    stats: [
      { name: "strength", num: 2, },
      { name: "charisma", num: 1, },
  ],

    // qualities: { speed: 30 },
    qualities: [{name: "speed", num: 30,},],

    proficiencies: {
      weapons: [weaponry.dimple],
      languages: [lang.common, lang.dragon],
    },

  },
};
