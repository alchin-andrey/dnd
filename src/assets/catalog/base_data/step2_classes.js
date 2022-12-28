import spells from "./list_spells.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tools from "./kinds_tools.js";
import armory from "./kinds_armor.js";
import weapons from "./list_weapons.js";
import armors from "./list_armor.js";
import packs from "./list_packs.js";
import items from "./list_items.js";
import langs from "./list_languages.js";

export const barbarian_rage_bonus = [
  0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4,
];

export default {
  //NOTE - Fighter -------------------------------------------------------------------------

  fighter: {
    name: "fighter",
    details: "fighter_details",

    hp_dice: 10,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.heavy, armory.shields],
      weapons: [weaponry.simple, weaponry.military],
      tools: [],
      languages: [],
    },

    saving: ["strength", "constitution"],
    stats_base: [
      "strength",
      "constitution",
      "dexterity",
      "charisma",
      "wisdom",
      "intelligence",
    ],
    spell_attribute: "intelligence",

    charges: [
      {
        level: 1,
        name: "second_wind_slots",
        list: [
          ["d10", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 2,
        name: "action_surge_slots",
        list: [
          ["", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.second_wind,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "battle_master",
            details: "battle_master_details",

            spell_attribute: "strength",

            charges: [
              {
                level: 3,
                name: "superiority_dice_slots",
                list: [
                  [
                    "d8",
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                  ],
                ],
              },
            ],

            settings: [
              {
                level: 3,
                type: "spells",
                name: "maneuvers",
                select: 3,
                list: [
                  spells.evasive_footwork,
                  spells.lunning_attack,
                  spells.maneuvering_attack,
                  spells.maneuver_menacing_attack,
                  spells.maneuver_feinting_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_trip_attack,
                  spells.maneuver_riposte,
                  spells.maneuver_distracting_strike,
                  spells.maneuver_parry,
                  spells.maneuver_goading_attack,
                  spells.maneuver_rally,
                  spells.maneuver_pushing_attack,
                  spells.maneuver_precision_attack,
                  spells.maneuver_commanders_strike,
                  spells.maneuver_sweeping_attack,
                ],
              },
              {
                level: 7,
                type: "spells",
                name: "maneuvers",
                select: 2,
                list: [
                  spells.evasive_footwork,
                  spells.lunning_attack,
                  spells.maneuvering_attack,
                  spells.maneuver_menacing_attack,
                  spells.maneuver_feinting_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_trip_attack,
                  spells.maneuver_riposte,
                  spells.maneuver_distracting_strike,
                  spells.maneuver_parry,
                  spells.maneuver_goading_attack,
                  spells.maneuver_rally,
                  spells.maneuver_pushing_attack,
                  spells.maneuver_precision_attack,
                  spells.maneuver_commanders_strike,
                  spells.maneuver_sweeping_attack,
                ],
              },
              {
                level: 10,
                type: "spells",
                name: "maneuvers",
                select: 2,
                list: [
                  spells.evasive_footwork,
                  spells.lunning_attack,
                  spells.maneuvering_attack,
                  spells.maneuver_menacing_attack,
                  spells.maneuver_feinting_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_trip_attack,
                  spells.maneuver_riposte,
                  spells.maneuver_distracting_strike,
                  spells.maneuver_parry,
                  spells.maneuver_goading_attack,
                  spells.maneuver_rally,
                  spells.maneuver_pushing_attack,
                  spells.maneuver_precision_attack,
                  spells.maneuver_commanders_strike,
                  spells.maneuver_sweeping_attack,
                ],
              },
              {
                level: 15,
                type: "spells",
                name: "maneuvers",
                select: 2,
                list: [
                  spells.evasive_footwork,
                  spells.lunning_attack,
                  spells.maneuvering_attack,
                  spells.maneuver_menacing_attack,
                  spells.maneuver_feinting_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_disarming_attack,
                  spells.maneuver_trip_attack,
                  spells.maneuver_riposte,
                  spells.maneuver_distracting_strike,
                  spells.maneuver_parry,
                  spells.maneuver_goading_attack,
                  spells.maneuver_rally,
                  spells.maneuver_pushing_attack,
                  spells.maneuver_precision_attack,
                  spells.maneuver_commanders_strike,
                  spells.maneuver_sweeping_attack,
                ],
              },
              {
                level: 3,
                type: "custom",
                name: "profinciencies",
                select: 1,
                list: [
                  {
                    proficiencies: [
                      {
                        tools: [tools.blacksmith],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.brewer],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.mason],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.alchemists_supplies],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.blacksmith],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.brewer],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.calligraphers_supplies],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.carpenters_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.cartographers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.cobblers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.cooks_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.disguise],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.glassblowers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.jewelers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.leatherworkers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.mason],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.navigators_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.painters_supplies],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.poisoner],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.potters_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.tinkers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.weavers_tools],
                      },
                    ],
                  },
                  {
                    proficiencies: [
                      {
                        tools: [tools.woodcarvers_tools],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "eldritch_knight",
            details: "eldritch_knight_details",

            spells: [
              {
                spell: spells.weapon_bond,
              },
              {
                spell: spells.call_bonbed_weapon,
              },
            ],

            charges: [
              {
                level: 1,
                name: "spell_slots",
                list: [
                  [
                    "[1]",
                    0,
                    0,
                    2,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                  ],
                  [
                    "[2]",
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                  ],
                  [
                    "[3]",
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    3,
                  ],
                  [
                    "[4]",
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                  ],
                ],
              },
            ],

            settings: [
              {
                level: 3,
                type: "spells",
                name: "spells_0",
                select: 2,
                mana_min: 0,
                mana_max: 0,
                classes: ["wizard"],
              },
              {
                level: 10,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["wizard"],
              },
              {
                level: 3, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 3,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 4, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 7, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 8, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
              },
              {
                level: 10, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 11, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 13, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 14, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
              },
              {
                level: 16, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 19, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
                filter: "type: [abjuration,evocation]",
              },
              {
                level: 20, // 0,0, 3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13
                type: "spells",
                name: "spells",
                select: 1,
                mana_min: 1,
                mana_max: "Num_Fighter_max_spell_slot",
                classes: ["wizard"],
              },
            ],
          },
          {
            name: "champion",
            details: "champion_details",

            fines: [
              {
                level: 3,
                type: "plus",
                keyword: "ctit_damage",
                details: "on_dice_19_20",
              },
            ],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "skills",
        select: 4,
        bonus: "mastery",
        list: [
          "acrobatics",
          "athletics",
          "perception",
          "survival",
          "intimidation",
          "history",
          "animal_hanging",
          "insight",
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "equipment",
        select: 1,
        list: [
          {
            equipment: [
              {
                level: 1,
                armor: [[armors.chainmail, 1]],
              },
            ],
          },
          {
            equipment: [
              {
                level: 1,
                armor: [[armors.leather, 1]],
                weapon: [[weapons.longbow, 1]],
                inventory: [
                  [items.arrow, 20],
                  [items.quiver, 20],
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapon",
        select: 2,
        list: [
          {
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.hand_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.heavy_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.longbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.blowgun, 1]],
                inventory: [[items.dart, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapon",
        select: 1,
        list: [
          {
            equipment: [{ weapon: [[weapons.handaxe, 2]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "inventory_packs",
        name: "packs",
        select: 1,
        list: [
          [packs.dungeoneers, 1],
          [packs.explorers, 1],
        ],
      },
      {
        level: 2,
        type: "custom",
        name: "battle_style",
        select: 1,
        list: [
          {
            name: "style_dueling",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_attack_signle_one_handed",
              },
            ],
          },
          {
            name: "style_protection",
            spells: [
              {
                level: 2,
                spell: spells.side_pary,
              },
            ],
          },
          {
            name: "style_defence",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_armor_if_armor",

                // when without heavy armor
                condition: "if_armor",
                key: "armor_bonus",
                value: 1,
              },
            ],
          },
          {
            name: "style_great_weapon",
            fines: [
              {
                level: 2,
                type: "advantage",
                keyword: "rethrow",
                details: "if_1_or_2_on_two_handed_weapon",
              },
            ],
          },
          {
            name: "style_double_weapon",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_damage_second_attack",
              },
            ],
          },
          {
            name: "style_archery",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "aim_bonus",
                details: "plus_2_on_ranged",
              },
            ],
          },
        ],
      },
    ],
  },

  //NOTE - Barbarian -------------------------------------------------------------------------

  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    hp_dice: 12,
    // x: hp_dice/2 + 1;
    // hp_max: hp_dice + con.mod + ( x + con.mod ) * ( lvl - 1 ) + hp_bonus
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    saving: ["strength", "constitution"],
    stats_base: [
      "strength", // 15
      "constitution", // 14
      "dexterity", // 13
      "charisma", // 12
      "wisdom", // 10
      "intelligence", // 8
    ],
    spell_attribute: "strength",

    qualities: [
      {
        level: 5,
        speed_bonus: 10,
      },
    ],

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_constitution",
      },
      {
        level: 2,
        type: "advantage",
        keyword: "advantage",
        details: "saving_dex_visible",
      },
      {
        level: 5,
        type: "plus",
        keyword: "speed_plus_10",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 7,
        type: "advantage",
        keyword: "advantage",
        details: "on_initiative",
      },
      {
        level: 7,
        type: "plus",
        keyword: "extra_movement",
        details: "rage_half_speed",
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
        details: "only_if_uncontious",
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

        strength_max: 24,
        strength: 4,

        constitution_max: 24,
        constitution: 4,
      },
    ],

    charges: [
      {
        level: 1,
        name: "rage_slots",
        list: [
          ["", 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, "inf"],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.rage,
      },
      {
        level: 2,
        spell: spells.reckless_attack,
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [[weapons.javelin, 4]],
        inventory_packs: [
          [packs.explorers, 1], // нужно как-то распаковьівать 😅
        ],
      },
    ],

    specials: [
      {
        level: 1,
        type: "armor_bonus",
        foo: "Num_CON",
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "berserker",
            details: "berserker_details",

            fines: [
              {
                level: 6,
                type: "resistance",
                keyword: "immunity",
                details: "charmed_while_raging",
              },
              {
                level: 6,
                type: "resistance",
                keyword: "immunity",
                details: "frightened_while_raging",
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.frenzy,
              },
              {
                level: 10,
                spell: spells.intimidating_presence,
              },
              {
                level: 14,
                spell: spells.retaliation,
              },
            ],
          },
          {
            name: "totem_warrior",
            details: "totem_warrior_details",

            equipment: [
              {
                level: 3,
                inventory: [[items.totem, 1]],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.beast_sense_ritual,
              },
              {
                level: 3,
                spell: spells.speak_with_animals_ritual,
              },
              {
                level: 10,
                spell: spells.commune_with_nature_ritual,
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                name: "totem_spirit",
                delails: "totem_spirit_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "near_friends_attack_in_rage",
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "resistance",
                        keyword: "resistance",
                        details: "any_damage_but_psy",
                      },
                    ],
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage",

                        condition: "if_no_heavy_armor",
                      },
                      {
                        type: "plus",
                        keyword: "rush",
                        details: "as_bonus_action",

                        condition: "if_no_heavy_armor",
                      },
                    ],
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        // when without heavy armor
                        condition: "if_no_heavy_armor",
                        key: "speed_bonus",
                        value: "15",
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    fines: [
                      {
                        type: "plus",
                        keyword: "long_jumps",
                        details: "in_rage",
                      },
                    ],
                  },
                ],
              },
              {
                level: 6,
                type: "custom",
                name: "totem_aspect",
                delails: "totem_aspect_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "plus",
                        keyword: "fast_tempo",
                        details: "while_following_prints",
                      },
                      {
                        type: "plus",
                        keyword: "normal_tempo",
                        details: "in_stealth",
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "plus",
                        keyword: "double_weight",
                        details: "weight_capacity_details",
                      },
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "str_check_on_move",
                      },
                    ],
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "to_see",
                        details: "one_mile_100f_details",
                      },
                      {
                        type: "advantage",
                        keyword: "no_disadvantage",
                        details: "on_perception_in_lowlight",
                      },
                    ],
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        type: "plus",
                        keyword: "double_speed",
                        details: "travel_elk",
                        key: "speed_bonus_x",
                        value: 2,
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    settings: [
                      {
                        level: 6,
                        type: "skills",
                        select: 1,
                        bonus: "mastery",
                        list: [
                          "athletics",
                          "acrobatics",
                          "stealth",
                          "survival",
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                level: 14,
                type: "custom",
                name: "totem_harmony",
                delails: "totem_aspect_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    spells: [
                      {
                        spell: spells.wolf_knock,
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage_bear",
                      },
                    ],
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "flight",
                        details: "as_walking_speed_in_rage",
                      },
                    ],
                  },
                  {
                    name: "elk",
                    spells: [
                      {
                        spell: spells.elk_knock,
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    spells: [
                      {
                        spell: spells.tiger_strike,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "skills",
        select: 2,
        bonus: "mastery",
        list: [
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
        type: "skills",
        select: 1,
        bonus: "mastery",
        list: [
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
        type: "skills",
        select: 1,
        bonus: "mastery",
        list: [
          "athletics",
          "insight",
          "survival",
          "intimidation",
          "nature",
          "animal_hanging",
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "weapons",
        select: 1,
        list: [
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
        type: "weapons",
        select: 1,
        list: [
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
  }, //20

  //NOTE - Paladin -------------------------------------------------------------------------

  paladin: {
    name: "paladin",
    details: "paladin_details",

    hp_dice: 10,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //lvl1 = (6+con)*1 + (10-6), lvl2 = (6+con)*2 + (10-6), lvl3 = (6+con)*3 + (10-6),
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light, armory.medium, armory.heavy, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    saving: ["wisdom", "charisma"],
    stats_base: [
      "strength", // 15
      "charisma", // 14
      "constitution", // 13
      "wisdom", // 12
      "dexterity", // 10
      "intelligence", // 8
    ],
    spell_attribute: "charisma",

    equipment: [
      {
        level: 1,
        armor: [[armors.chainmail, 1]],
        inventory: [[items.holy_symbol, 1]],
      },
    ],

    fines: [
      {
        level: 3,
        type: "plus",
        keyword: "immunity",
        details: "on_sick",
      },
    ],

    charges: [
      {
        level: 1,
        name: "divine_sense_slots",
        foo: "Num_CHA_Min0", //Str_Plus_CHA
        list: [
          ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 1,
        name: "divine_channel_slots",
        list: [
          ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 2,
        name: "spell_slots",
        list: [
          ["[1]", 0, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.divine_sense,
      },
      {
        level: 1,
        spell: spells.lay_on_hands,
      },
      {
        level: 2,
        spell: spells.paladin_divine_smite,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "oath_of_devotion",
            details: "oath_of_devotion_details",
            spells: [
              {
                level: 3,
                spell: spells.divine_channel_devotion_1,
              },
              {
                level: 3,
                spell: spells.divine_channel_devotion_2,
              },
              {
                level: 3,
                spell: spells.divine_channel_mana,
              },
              {
                level: 3,
                spell: spells.protection_from_evil_and_good,
              },
              {
                level: 3,
                spell: spells.sanctuary,
              },
            ],
          },
          {
            name: "oath_of_antients",
            details: "oath_of_antients_details",
            spells: [
              {
                level: 3,
                spell: spells.divine_channel_antients_1,
              },
              {
                level: 3,
                spell: spells.divine_channel_antients_2,
              },
              {
                level: 3,
                spell: spells.divine_channel_mana,
              },
              {
                level: 3,
                spell: spells.ensnaring_strike,
              },
              {
                level: 3,
                spell: spells.speak_with_animals,
              },
            ],
          },
          {
            name: "oath_of_vengence",
            details: "oath_of_vengence_details",
            spells: [
              {
                level: 3,
                spell: spells.divine_channel_vengence_1,
              },
              {
                level: 3,
                spell: spells.divine_channel_vengence_2,
              },
              {
                level: 3,
                spell: spells.divine_channel_mana,
              },
              {
                level: 3,
                spell: spells.hunters_mark,
              },
              {
                level: 3,
                spell: spells.bane,
              },
            ],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        name: "battle_style",
        select: 1,
        list: [
          {
            name: "style_dueling",
            fines: [
              {
                type: "plus",
                keyword: "bonus",
                details: "on_attack_signle_one_handed",
              },
            ],
          },
          {
            name: "style_protection",
            spells: [
              {
                spell: spells.side_pary,
              },
            ],
          },
          {
            name: "style_defence",
            fines: [
              {
                type: "plus",
                keyword: "bonus",
                details: "on_armor_if_armor",

                // when without heavy armor
                condition: "if_armor",
                key: "armor_bonus",
                value: 1,
              },
            ],
          },
          {
            name: "style_great_weapon",
            fines: [
              {
                type: "advantage",
                keyword: "rethrow",
                details: "if_1_or_2_on_two_handed_weapon",
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "skills",
        select: 2,
        bonus: "mastery",
        list: [
          "athletics",
          "insight",
          "intimidation",
          "medicine",
          "religion",
          "persuasion",
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "custom",
        name: "weapon",
        select: 2,
        list: [
          {
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.hand_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.heavy_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.longbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.blowgun, 1]],
                inventory: [[items.dart, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "weapons",
        select: 1,
        list: [
          [weapons.javelin, 5],
          [weapons.quarterstaff, 1],
          [weapons.mace, 1],
          [weapons.club, 1],
          [weapons.dagger, 1],
          [weapons.spear, 1],
          [weapons.light_hammer, 1],
          [weapons.greatclub, 1],
          [weapons.handaxe, 1],
          [weapons.sickle, 1],
        ],
      },
      {
        level: 1,
        type: "inventory_packs",
        name: "packs",
        select: 1,
        list: [
          [packs.priests, 1],
          [packs.explorers, 1],
        ],
      },
      {
        level: 2,
        type: "spells",
        name: "spells",
        select: "Str_05Lvl_Plus_CHA",
        mana_min: 1,
        mana_max: "Num_Paladin_max_spell_slot", // по
        classes: ["paladin"],
      },
    ],
  },

  //NOTE - Druid -------------------------------------------------------------------------

  druid: {
    name: "druid",
    details: "druid_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [
        weaponry.quarterstaffs,
        weaponry.maces,
        weaponry.darts,
        weaponry.clubs,
        weaponry.daggers,
        weaponry.spears,
        weaponry.javelins,
        weaponry.slings,
        weaponry.sickles,
        weaponry.scimitars,
      ],
      tools: [tools.herbalists_tools],
      languages: [langs.druid],
    },

    saving: ["intelligence", "wisdom"],
    stats_base: [
      "intelligence",
      "wisdom",
      "constitution",
      "dexterity",
      "charisma",
      "strength",
    ],
    spell_attribute: "wisdom",

    spells: [
      {
        level: 1,
        spell: spells.druid_message,
      },
      {
        level: 2,
        spell: spells.wild_shape,
      },
      {
        level: 1,
        spell: spells.wild_shape_heal,
      },
      {
        level: 2,
        spell: spells.find_familiar_druid,
      },
    ],

    fines: [
      {
        level: 1,
        type: "minus",
        keyword: "unability",
        details: "to_wear_metal_armor",
      },
      {
        level: 18,
        type: "plus",
        keyword: "aging_slow",
        details: "ten_times",
      },
      {
        level: 20,
        type: "plus",
        keyword: "ignoring",
        details: "free_spell_parts_in_wildshape",
      },
    ],

    charges: [
      {
        level: 2,
        name: "wild_shape_slots",
        list: [
          ["", 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "inf"],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    equipment: [
      {
        armor: [[armors.leather, 1]],
        inventory: [[items.focus, 1]],
        inventory_packs: [[packs.explorers, 1]],
      },
    ],

    settings: [
      {
        level: 2,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "circle_of_the_land_arctic",
            details: "circle_of_the_land_arctic_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.hold_person,
              },
              {
                level: 2,
                spell: spells.spike_growth,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_land_swamp",
            details: "circle_of_the_land_swamp_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.melfs_acid_arrow,
              },
              {
                level: 2,
                spell: spells.darkness,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_land_mountain",
            details: "circle_of_the_land_mountain_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.spider_climb,
              },
              {
                level: 2,
                spell: spells.spike_growth,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_land_forest",
            details: "circle_of_the_land_forest_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.barkskin,
              },
              {
                level: 2,
                spell: spells.spider_climb,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_land_grassland",
            details: "circle_of_the_land_grassland_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.pass_without_trace,
              },
              {
                level: 2,
                spell: spells.invisibility,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_land_coast",
            details: "circle_of_the_land_coast_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.mirror_image,
              },
              {
                level: 2,
                spell: spells.misty_step,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_land_underdark",
            details: "circle_of_the_land_underdark_details",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape,
              },
              {
                level: 2,
                spell: spells.spider_climb,
              },
              {
                level: 2,
                spell: spells.web,
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "restoring",
                details: "mana_slots_short_rest_lvl_05_up_to_5",
              },
              {
                level: 6,
                type: "plus",
                keyword: "no_speed_fee",
                details: "on_nonmagic_hard_area",
              },
              {
                level: 6,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_from_plants",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_enchantment_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_fear_from_fey_elemental",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "poison_against",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_sick",
              },
              {
                level: 14,
                type: "plus",
                keyword: "saving_wisdom",
                details: "on_any_animal_or_plant_attack",
              },
            ],

            settings: [
              {
                level: 2,
                type: "spells",
                name: "spells_0",
                select: 1,
                mana_min: 0,
                mana_max: 0,
                classes: ["druid"],
              },
            ],
          },
          {
            name: "circle_of_the_moon",
            details: "circle_of_the_moon",

            spells: [
              {
                level: 2,
                spell: spells.wild_shape_combat,
              },
              {
                level: 2,
                spell: spells.wild_shape_heal,
              },
              {
                level: 14,
                spell: spells.alter_self_druid,
              },
            ],

            fines: [
              {
                level: 6,
                type: "plus",
                keyword: "ignoring",
                details: "of_nonmagic_damage_immunity_wild_shape",
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "skills",
        select: 2,
        bonus: "mastery",
        list: [
          "perception",
          "survival",
          "arcana",
          "medicine",
          "animal_hanging",
          "nature",
          "insight",
          "religion",
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "weapon",
        select: 2,
        list: [
          {
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.dart, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            equipment: [
              {
                weapon: [[weapons.sling, 1]],
                inventory: [[items.bullet, 20]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "weapons",
        select: 1,
        list: [
          [weapons.scimitar, 1],
          [weapons.quarterstaff, 1],
          [weapons.mace, 1],
          [weapons.club, 1],
          [weapons.dagger, 1],
          [weapons.spear, 1],
          [weapons.light_hammer, 1],
          [weapons.javelin, 1],
          [weapons.greatclub, 1],
          [weapons.handaxe, 1],
          [weapons.sickle, 1],
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: 2, //2,2,2,3,3, 3,3,3,3,4, 4,4,4,4,4, 4,4,4,4,4
        mana_min: 0,
        mana_max: 0,
        classes: ["druid"],
      },
      {
        type: "spells",
        name: "spells",
        select: "Str_Druid_Spells", //WIS + lvl (min 1 spell)
        mana_min: 1,
        mana_max: "Num_Wizard_max_spell_slot",
        classes: ["wizard"],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  }, //Almost 20 (spells)

  //NOTE - Wizard -------------------------------------------------------------------------

  wizard: {
    name: "wizard",
    details: "wizard_details",

    hp_dice: 6,

    proficiencies: {
      armor: [],
      weapons: [
        weaponry.daggers,
        weaponry.darts,
        weaponry.slings,
        weaponry.quarterstaffs,
        weaponry.light_arbalets,
      ],
      tools: [],
      languages: [],
    },

    saving: ["intelligence", "wisdom"],
    stats_base: [
      "intelligence",
      "wisdom",
      "constitution",
      "dexterity",
      "charisma",
      "strength",
    ],
    spell_attribute: "intelligence",

    fines: [
      {
        level: 1,
        type: "plus",
        keyword: "restoring",
        details: "mana_slots_short_rest_lvl_05",
      },
      {
        level: 18,
        type: "plus",
        keyword: "use_wo_mana",
        details: "two_spells_1_and_2",
      },
      {
        level: 20,
        type: "plus",
        keyword: "use_wo_mana",
        details: "two_spells_3",
      },
    ],

    charges: [
      {
        level: 1,
        name: "spell_slots",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    equipment: [
      {
        inventory: [[items.spell_book, 1]],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.learn_spell,
      },
    ],

    settings: [
      {
        level: 2,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "school_of_evocation",
            details: "school_of_evocation_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_evocation",
              },
              {
                type: "plus",
                keyword: "save_ally",
                details: "one_plus_lvl_from_spell_evocation",
              },
              {
                level: 6,
                type: "plus",
                keyword: "min_half_damage",
                details: "from_cantrips",
              },
              {
                level: 10,
                type: "plus",
                keyword: "plus_INT",
                details: "to_damage_evocation",
              },
              {
                level: 14,
                type: "plus",
                keyword: "always_max_dmg",
                details: "from_evocation_1_to_5",
              },
            ],
            spells: [
              {
                level: 14,
                spell: spells.overload,
              },
            ],
          },
          {
            name: "school_of_conjuration",
            details: "school_of_conjuration_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_conjuration",
              },
            ],

            spells: [
              {
                spell: spells.small_conjuration,
              },
            ],
          },
          {
            name: "school_of_illusion",
            details: "school_of_illusion_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_illusion",
              },
            ],

            spells: [
              {
                spell: spells.small_illusion,
              },
            ],
          },
          {
            name: "school_of_necromancy",
            details: "school_of_necromancy_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_necromancy",
              },
              {
                type: "plus",
                keyword: "heal",
                details: "from_spell_kill_necromancy",
              },
            ],
          },
          {
            name: "school_of_abjuration",
            details: "school_of_abjuration_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_abjuration",
              },
            ],

            charges: [
              {
                level: 2,
                name: "magical_protection",
                list: [
                  [
                    "",
                    0,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                  ],
                ],
              },
            ],

            spells: [
              {
                spell: spells.magical_protection,
              },
            ],
          },
          {
            name: "school_of_enchantment",
            details: "school_of_enchantment_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_enchantment",
              },
            ],

            spells: [
              {
                spell: spells.hypnotic_look,
              },
            ],
          },
          {
            name: "school_of_transmutation",
            details: "school_of_transmutation_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_transmutation",
              },
            ],

            spells: [
              {
                spell: spells.small_alchemy,
              },
            ],
          },
          {
            name: "school_of_divination",
            details: "school_of_divination_details",

            fines: [
              {
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_divination",
              },
            ],

            spells: [
              {
                spell: spells.portent,
              },
            ],
          },
        ],
      },
      {
        type: "skills",
        name: "skills",
        select: 2,
        num: "mastery",
        list: [
          "investigation",
          "history",
          "arcana",
          "medicine",
          "insight",
          "religion",
        ],
      },
      {
        type: "weapons",
        name: "weapons",
        select: 1,
        list: [
          [weapons.quarterstaff, 1],
          [weapons.dagger, 1],
        ],
      },
      {
        type: "inventory",
        name: "inventory",
        select: 1,
        list: [[items.component_pouch], [items.focus]],
      },
      {
        type: "inventory_packs",
        name: "packs",
        select: 1,
        list: [
          [packs.scholars, 1],
          [packs.explorers, 1],
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: 3, //3,3,3,4,4, 4,4,4,4,5, 5,5,5,5,5, 5,5,5,5,5,
        mana_min: 0,
        mana_max: 0,
        classes: ["wizard"],
      },
      {
        type: "spells",
        name: "spells",
        select: "Str_Wizard_Spells", //6,8,10,12,14, 16,18,20,22,24, 26,28,30,32,34, 36,38,40,42,44
        mana_min: 1,
        mana_max: "Num_Wizard_max_spell_slot",
        classes: ["wizard"],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  },

  //NOTE - Bard -------------------------------------------------------------------------

  bard: {
    name: "bard",
    details: "bard_details",

    hp_dice: 8,
    // x: hp_dice/2 + 1;
    // hp_bonus: (x+con.mod)*lvl + hp_dice - x
    //regen: = lvl * hp_dice

    proficiencies: {
      armor: [armory.light],
      weapons: [
        weaponry.simple,
        weaponry.short_swords,
        weaponry.long_swords,
        weaponry.rapires,
        weaponry.hand_arbalets,
      ],
    },

    saving: ["dexterity", "charisma"],
    stats_base: [
      "charisma",
      "dexterity",
      "constitution",
      "wisdom",
      "intelligence",
      "strength",
    ],
    spell_attribute: "charisma",

    equipment: [
      {
        level: 1,
        armor: [[armors.leather, 1]],
        weapon: [[weapons.dagger, 1]],
      },
    ],

    specials: [
      {
        level: 2,
        type: "skills",
        foo: "Half_Mastery",
      },
    ],

    charges: [
      {
        level: 1,
        name: "bardic_inspiration_slots",
        foo: "Str_Level_5_10_15__Num_CHA_Min1",
        //Вы можете использовать это умение количество раз, равное модификатору вашей Харизмы, но как минимум один раз.
        //Ваша Кость бардовского вдохновения изменяется с ростом вашего уровня в этом классе. Изначально d6, она становится d8 на 5 уровне, d10 на 10 уровне и d12 на 15 уровне.
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        list: [
          ["[1]", 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
    ],

    spells: [
      {
        spell: spells.bardic_inspiration,
      },
      {
        level: 2,
        spell: spells.song_of_rest,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "spell_focus",
        details: "as_musical_instrument",
      },
      {
        level: 5,
        type: "plus",
        keyword: "restoring",
        details: "of_inspiration_slots_on_short_rest",
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "college_valor",
            details: "college_valor_details",

            proficiencies: {
              armor: [armory.medium, armory.shields],
              weapons: [weaponry.military],
            },

            fines: [
              {
                type: "plus",
                keyword: "spell_bardic_inspiration",
                details: "on_damage_and_ac",
              },
            ],
          },
          {
            name: "college_lore",
            details: "college_lore_details",

            settings: [
              {
                type: "skills",
                name: "skills",
                select: 3,
                num: "mastery",
              },
            ],
          },
        ],
      },
      {
        type: "skills",
        name: "skills",
        select: 3,
        num: "mastery",
        list: [
          "performance",
          "athletics",
          "acrobatics",
          "sleight_of_hand",
          "stealth",
          "arcana",
          "history",
          "investigation",
          "nature",
          "religion",
          "animal_hanging",
          "insight",
          "medicine",
          "perception",
          "survival",
          "deception",
          "intimidation",
          "persuasion",
        ],
      },
      {
        type: "custom",
        name: "proficiencies",
        select: 3,
        list: [
          {
            proficiencies: [
              {
                tools: [tools.music_bagpipes],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_drums],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_dulcimer],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_flute],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_horn],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_lute],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_lyre],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_pan_flute],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_shawm],
              },
            ],
          },
          {
            proficiencies: [
              {
                tools: [tools.music_viol],
              },
            ],
          },
        ],
      },
      {
        type: "weapons",
        name: "weapons",
        select: 1,
        list: [
          [weapons.rapier, 1],
          [weapons.longsword, 1],
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
      {
        type: "inventory_packs",
        name: "packs",
        select: 1,
        list: [
          [packs.diplomats, 1],
          [packs.entertainers, 1],
        ],
      },
      {
        type: "inventory",
        name: "tools",
        select: 1,
        list: [
          [items.music_lute, 1],
          [items.music_bagpipes, 1],
          [items.music_drums, 1],
          [items.music_dulcimer, 1],
          [items.music_flute, 1],
          [items.music_horn, 1],
          [items.music_lyre, 1],
          [items.music_pan_flute, 1],
          [items.music_shawm, 1],
          [items.music_viol, 1],
        ],
      },
      {
        level: 1,
        type: "spells",
        name: "spells_0",
        select: 2, //2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4
        mana_min: 0,
        mana_max: 0,
        classes: ["bard"],
      },
      {
        level: 4,
        type: "spells",
        name: "spells_0",
        select: 1, //2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4
        mana_min: 0,
        mana_max: 0,
        classes: ["bard"],
      },
      {
        level: 10,
        type: "spells",
        name: "spells_0",
        select: 1, //2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4
        mana_min: 0,
        mana_max: 0,
        classes: ["bard"],
      },
      {
        type: "spells",
        name: "spells",
        select: "Str_Bard_Spells", //4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22
        mana_min: 1,
        mana_max: "Num_Bard_max_spell_slot",
        classes: ["bard"],
      },
      {
        level: 3,
        type: "skills",
        name: "skills",
        select: 2,
        filter: "mastery",
        num: "mastery",
      },
      {
        level: 10,
        type: "skills",
        name: "skills",
        select: 2,
        filter: "mastery",
        num: "mastery",
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
    ],
  },

  //NOTE - Rogue -------------------------------------------------------------------------

  rogue: {
    name: "rogue",
    details: "rogue_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light],
      weapons: [
        weaponry.simple,
        weaponry.short_swords,
        weaponry.long_swords,
        weaponry.rapires,
        weaponry.hand_arbalets,
      ],
      tools: [tools.thief],
      languages: [lang.thieves],
    },

    saving: ["dexterity", "intelligence"],
    stats_base: [
      "dexterity",
      "charisma",
      "wisdom",
      "constitution",
      "strength",
      "intelligence",
    ],
    spell_attribute: "intelligence",

    equipment: [
      {
        level: 1,
        armor: [[armors.leather, 1]],
        weapon: [[weapons.dagger, 2]],
        inventory_packs: [[packs.thieves, 1]],
      },
    ],

    fines: [
      {
        level: 7,
        type: "plus",
        keyword: "fine_dodge",
        details: "from_aoe_effects",
      },
      {
        level: 11,
        type: "advantage",
        keyword: "min_10",
        details: "on_dice_mastery_skill",
      },
      {
        level: 14,
        type: "plus",
        keyword: "always_hear",
        details: "invisible_creatures_10f",
      },
      {
        level: 18,
        type: "plus",
        keyword: "no_advantage",
        details: "on_attacks_on_you",
      },
      {
        level: 20,
        type: "advantage",
        keyword: "min_20",
        details: "on_dice_d20",
      },
    ],

    stats: [
      {
        level: 15,
        //wisdom.save: "mastery", - подключить MY?
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.sneaky_attack,
      },
      {
        level: 2,
        spell: spells.cunning_action,
      },
      {
        level: 3,
        spell: spells.steady_aim,
      },
      {
        level: 5,
        spell: spells.uncanny_dodge,
      },
    ],

    specials: [
      {
        level: 15,
        type: "saving",
        saving: ["wisdom"],
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        name: "subclass",
        select: 1,
        list: [
          {
            name: "thief",
            details: "thief_details",

            spells: [
              {
                level: 3,
                spell: spells.fast_hands,
              },
            ],

            fines: [
              {
                level: 3,
                type: "plus",
                keyword: "climbing",
                details: "without_speed_fee",
              },
              {
                level: 3,
                type: "plus",
                keyword: "dex_bonus",
                details: "on_size_jumps",
              },
              {
                level: 9,
                type: "advantage",
                keyword: "advantage",
                details: "on_size_jumps",
              },
              {
                level: 13,
                type: "plus",
                keyword: "an_ability",
                details: "to_use_magic_items",
              },
              {
                level: 17,
                type: "plus",
                keyword: "bonus_move",
                details: "to_use_magic_items",
              },
            ],
          },
          {
            name: "assasin",
            details: "assasin_details",

            proficiencies: {
              tools: [tools.disguise, tools.poisoner],
            },

            fines: [
              {
                level: 3,
                type: "advantage",
                keyword: "advantage",
                details: "on_not_moved",
              },
              {
                level: 3,
                type: "plus",
                keyword: "double_damage",
                details: "on_sudden_attack",
              },
              {
                level: 17,
                type: "plus",
                keyword: "double_damage",
                details: "on_sudden_attack_extra",
              },
            ],

            spells: [
              {
                level: 9,
                spell: spells.fake_identity,
              },
              {
                level: 13,
                spell: spells.fake_presence,
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "skills",
        select: 4,
        bonus: "mastery",
        list: [
          "acrobatics",
          "investigation",
          "athletics",
          "perception",
          "performance",
          "intimidation",
          "sleight_of_hand",
          "deception",
          "insight",
          "stealth",
          "persuasion",
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            fines: [
              {
                type: "plus",
                keyword: "proficiency_bonus",
                details: "on_thieves_tools",
              },
            ],
          },
          {
            skills: [
              {
                sleight_of_hand: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                acrobatics: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                investigation: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                athletics: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                perception: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                performance: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                intimidation: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                acrobatics: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                deception: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                insight: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                stealth: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                persuasion: "mastery",
              },
            ],
          },
        ],
      },
      {
        level: 6,
        type: "custom",
        name: "skills",
        select: 2,
        list: [
          {
            fines: [
              {
                type: "plus",
                keyword: "proficiency_bonus",
                details: "on_thieves_tools",
              },
            ],
          },
          {
            skills: [
              {
                sleight_of_hand: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                acrobatics: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                investigation: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                athletics: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                perception: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                performance: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                intimidation: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                acrobatics: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                deception: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                insight: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                stealth: "mastery",
              },
            ],
          },
          {
            skills: [
              {
                persuasion: "mastery",
              },
            ],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
      },
      {
        level: 8,
        type: "feats",
      },
      {
        level: 12,
        type: "feats",
      },
      {
        level: 16,
        type: "feats",
      },
      {
        level: 19,
        type: "feats",
      },
      {
        level: 1,
        type: "weapons",
        select: 1,
        list: [
          [weapons.rapier, 1],
          [weapons.shortsword, 1],
        ],
      },
      {
        level: 1,
        type: "custom",
        name: "equipment",
        select: 1,
        list: [
          {
            name: "ranged_fight",
            weapon: [[weapons.shortbow, 1]],
            inventory: [
              [items.quiver, 1],
              [items.arrow, 20],
            ],
          },
          {
            name: "melee_fight",
            weapon: [[weapons.shortsword, 1]],
          },
        ],
      },
      {
        level: 1,
        type: "inventory_packs",
        name: "packs",
        select: 1,
        list: [
          [packs.burglars, 1],
          [packs.dungeoneers, 1],
          [packs.explorers, 1],
        ],
      },
    ],
  }, //20

  //NOTE - Cleric

  cleric: {
    name: "cleric",
    details: "cleric_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple],
      tools: [],
      languages: [],
    },

    saving: ["wisdom", "charisma"],
    stats_base: [
      "wisdom",
      "constitution",
      "dexterity",
      "strength",
      "intelligence",
      "charisma",
    ],
    spell_attribute: "wisdom",

    settings: [
      {
        level: 1,
        type: "skills",
        select: 2,
        bonus: "mastery",
        list: [
          "history",
          "medicine",
          "insight",
          "religion",
          "persuasion",
        ],
      },
    ],
  },
};
