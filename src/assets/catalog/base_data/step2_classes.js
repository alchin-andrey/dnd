import spells from "./list_spells.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tools from "./kinds_tools.js";
import armory from "./kinds_armor.js";
import weapons from "./list_weapons.js";
import armors from "./list_armor.js";
import packs from "./list_packs.js";
import items from "./list_items.js";

export default {
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
        weapon: [
          [weapons.dagger, 2],
          [weapons.unarmed, 1],
        ],
        //inventory: [[items.arrow, 1]], - для отладки
        inventory_packs: [[packs.thieves, 1]],
      },
    ],

    charges: [
      {
        level: 20,
        name: "luck_slots",
        type: "short_rest",
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        ],
      },
    ],

    fines: [
      {
        level: 7,
        type: "resistance",
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
      {
        level: 20,
        spell: spells.rogue_luck,
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
        position: 0,
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
                details: "in_first_round",
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
                keyword: "double_damage_more",
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
          {
            name: "arcane_trickster",
            details: "arcane_trickster_details",

            spells: [
              {
                level: 3,
                spell: spells.mage_hand_rogue,
              },
              {
                level: 17,
                spell: spells.steal_spell,
              },
            ],

            charges: [
              {
                level: 3,
                name: "spell_slots",
                type: "long_rest",
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
              {
                level: 17,
                name: "spell_steal_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 9,
                type: "plus",
                keyword: "disadvantage",
                details: "on_saving_against_your_spells",
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                position: 3,
                name: "spells_0",
                select: [
                  2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                ],
                list: [
                  // spells[0] wizard
                  {
                    name_set: spells.acid_splash[0].name,
                    spells: [{ level: 3, spell: spells.acid_splash }],
                  },
                  {
                    name_set: spells.friends[0].name,
                    spells: [{ level: 3, spell: spells.friends }],
                  },
                  {
                    name_set: spells.blade_ward[0].name,
                    spells: [{ level: 3, spell: spells.blade_ward }],
                  },
                  {
                    name_set: spells.chill_touch[0].name,
                    spells: [{ level: 3, spell: spells.chill_touch }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ level: 3, spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.minor_illusion[0].name,
                    spells: [{ level: 3, spell: spells.minor_illusion }],
                  },
                  {
                    name_set: spells.true_strike[0].name,
                    spells: [{ level: 3, spell: spells.true_strike }],
                  },
                  {
                    name_set: spells.fire_bolt[0].name,
                    spells: [{ level: 3, spell: spells.fire_bolt }],
                  },
                  {
                    name_set: spells.dancing_lights[0].name,
                    spells: [{ level: 3, spell: spells.dancing_lights }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ level: 3, spell: spells.mending }],
                  },
                  {
                    name_set: spells.light[0].name,
                    spells: [{ level: 3, spell: spells.light }],
                  },
                  {
                    name_set: spells.message[0].name,
                    spells: [{ level: 3, spell: spells.message }],
                  },
                  {
                    name_set: spells.prestidigitation[0].name,
                    spells: [{ level: 3, spell: spells.prestidigitation }],
                  },
                  {
                    name_set: spells.shocking_grasp[0].name,
                    spells: [{ level: 3, spell: spells.shocking_grasp }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ level: 3, spell: spells.poison_spray }],
                  },
                ],
              },
              // {
              //   level: 3,
              //   type: "spells",
              //   position: 3,
              //   name: "spells_0",
              //   select: [
              //     2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
              //   ],
              //   mana_min: 0,
              //   mana_max: 0,
              //   classes: ["wizard"],
              // },
              {
                level: 3,
                type: "spells",
                position: 4,
                name: "spells",
                select: [
                  0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12,
                  13,
                ],
                mana_min: 1,
                mana_max: [
                  0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4,
                ],
                filter: { classes: ["wizard"], }
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
        select: 4,
        list: [
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
            name_set: "intimidation",
            skills: [
              {
                name: "intimidation",
                num: "Mastery",
                details: "intimidation_details",
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
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "stealth",
            skills: [
              { name: "stealth", num: "Mastery", details: "stealth_details" },
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
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
        select: [2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        filter: "only_mastery",
        list: [
          {
            name_set: packs.thieves.name,
            fines: [
              {
                type: "plus",
                keyword: "proficiency_bonus",
                details: "on_thieves_tools",
              },
            ],
          },
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
              { name: "stealth", num: "Mastery", details: "stealth_details" },
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
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
            ],
          },
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
            ],
          },
          {
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
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
        ],
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.rapier.name,
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            name_set: weapons.shortsword.name,
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name: "ranged_fight",

            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [
                  [items.quiver, 1],
                  [items.arrow, 20],
                ],
              },
            ],
          },
          {
            name: "melee_fight",

            equipment: [
              {
                weapon: [[weapons.shortsword, 1]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.burglars.name,
            equipment: [{ inventory_packs: [[packs.burglars, 1]] }],
          },
          {
            name_set: packs.dungeoneers.name,
            equipment: [{ inventory_packs: [[packs.dungeoneers, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
    ],
  }, //20

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

    equipment: [
      {
        level: 1,
        weapon: [[weapons.unarmed, 1]],
      },
    ],

    charges: [
      {
        level: 1,
        name: "second_wind_slots",
        type: "short_rest",
        list: [
          ["d10", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 2,
        name: "action_surge_slots",
        type: "short_rest",
        list: [
          ["", 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
        ],
      },
      {
        level: 9,
        name: "indomity_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
        ],
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.second_wind,
      },
      {
        level: 5,
        spell: spells.extra_attack_fighter,
      },
      {
        level: 5,
        spell: spells.indomity,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        position: 0,
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
                foo: "Str_Level_10_18",
                type: "short_rest",
                list: [
                  [
                    "",
                    0,
                    0,
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

            fines: [
              {
                level: 5,
                type: "plus",
                keyword: "plus_1_maneuver",
                details: "on_initiative_and_0_maneuver",
              },
            ],

            spells: [
              {
                level: 7,
                spell: spells.know_your_enemy,
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                position: 1,
                name: "maneuvers",
                select: [
                  0, 0, 3, 3, 3, 3, 5, 5, 5, 7, 7, 7, 7, 7, 9, 9, 9, 9, 9, 9,
                ],
                list: [
                  {
                    name_set: spells.maneuver_evasive_footwork[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_evasive_footwork }],
                  },
                  {
                    name_set: spells.maneuver_lunging_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_lunging_attack }],
                  },
                  {
                    name_set: spells.maneuver_maneuvering_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_maneuvering_attack }],
                  },
                  {
                    name_set: spells.maneuver_menacing_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_menacing_attack }],
                  },
                  {
                    name_set: spells.maneuver_feinting_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_feinting_attack }],
                  },
                  {
                    name_set: spells.maneuver_disarming_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_disarming_attack }],
                  },
                  {
                    name_set: spells.maneuver_trip_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_trip_attack }],
                  },
                  {
                    name_set: spells.maneuver_riposte[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_riposte }],
                  },
                  {
                    name_set: spells.maneuver_distracting_strike[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_distracting_strike }],
                  },
                  {
                    name_set: spells.maneuver_parry[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_parry }],
                  },
                  {
                    name_set: spells.maneuver_goading_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_goading_attack }],
                  },
                  {
                    name_set: spells.maneuver_rally[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_rally }],
                  },
                  {
                    name_set: spells.maneuver_pushing_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_pushing_attack }],
                  },
                  {
                    name_set: spells.maneuver_precision_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_precision_attack }],
                  },
                  {
                    name_set: spells.maneuver_commanders_strike[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_commanders_strike }],
                  },
                  {
                    name_set: spells.maneuver_sweeping_attack[0].name,
                    spells: [{ level: 3, spell: spells.maneuver_sweeping_attack }],
                  },
                ],
              },
              {
                level: 3,
                type: "custom",
                position: 9,
                name: "tools",
                select: 1,
                list: [
                  {
                    name_set: tools.alchemists_supplies.name,
                    proficiencies: { tools: [tools.alchemists_supplies] },
                  },
                  {
                    name_set: tools.blacksmith.name,
                    proficiencies: { tools: [tools.blacksmith] },
                  },
                  {
                    name_set: tools.brewer.name,
                    proficiencies: { tools: [tools.brewer] },
                  },
                  {
                    name_set: tools.calligraphers_supplies.name,
                    proficiencies: { tools: [tools.calligraphers_supplies] },
                  },
                  {
                    name_set: tools.carpenters_tools.name,
                    proficiencies: { tools: [tools.carpenters_tools] },
                  },
                  {
                    name_set: tools.cartographers_tools.name,
                    proficiencies: { tools: [tools.cartographers_tools] },
                  },
                  {
                    name_set: tools.cobblers_tools.name,
                    proficiencies: { tools: [tools.cobblers_tools] },
                  },
                  {
                    name_set: tools.cooks_tools.name,
                    proficiencies: { tools: [tools.cooks_tools] },
                  },
                  {
                    name_set: tools.disguise.name,
                    proficiencies: { tools: [tools.disguise] },
                  },
                  {
                    name_set: tools.glassblowers_tools.name,
                    proficiencies: { tools: [tools.glassblowers_tools] },
                  },
                  {
                    name_set: tools.jewelers_tools.name,
                    proficiencies: { tools: [tools.jewelers_tools] },
                  },
                  {
                    name_set: tools.leatherworkers_tools.name,
                    proficiencies: { tools: [tools.leatherworkers_tools] },
                  },
                  {
                    name_set: tools.mason.name,
                    proficiencies: { tools: [tools.mason] },
                  },
                  {
                    name_set: tools.navigators_tools.name,
                    proficiencies: { tools: [tools.navigators_tools] },
                  },
                  {
                    name_set: tools.painters_supplies.name,
                    proficiencies: { tools: [tools.painters_supplies] },
                  },
                  {
                    name_set: tools.poisoner.name,
                    proficiencies: { tools: [tools.poisoner] },
                  },
                  {
                    name_set: tools.potters_tools.name,
                    proficiencies: { tools: [tools.potters_tools] },
                  },
                  {
                    name_set: tools.tinkers_tools.name,
                    proficiencies: { tools: [tools.tinkers_tools] },
                  },
                  {
                    name_set: tools.weavers_tools.name,
                    proficiencies: { tools: [tools.weavers_tools] },
                  },
                  {
                    name_set: tools.woodcarvers_tools.name,
                    proficiencies: { tools: [tools.woodcarvers_tools] },
                  },
                ],
              },
            ],
          },
          {
            name: "eldritch_knight",
            details: "eldritch_knight_details",

            fines: [
              {
                level: 10,
                type: "advantage",
                keyword: "disadvantage",
                details: "on_spell_saving_after_hit",
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.weapon_bond,
              },
              {
                level: 3,
                spell: spells.call_bonbed_weapon,
              },
              {
                level: 7,
                spell: spells.bonus_attack_fighter,
              },
              {
                level: 15,
                spell: spells.arcane_charge,
              },
            ],

            charges: [
              {
                level: 1,
                name: "spell_slots",
                type: "long_rest",
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
                type: "custom",
                position: 3,
                name: "spells_0",
                select: [
                  2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                ],
                list: [
                  // spells[0] wizard
                  {
                    name_set: spells.acid_splash[0].name,
                    spells: [{ level: 3, spell: spells.acid_splash }],
                  },
                  {
                    name_set: spells.mage_hand[0].name,
                    spells: [{ level: 3, spell: spells.mage_hand }],
                  },
                  {
                    name_set: spells.friends[0].name,
                    spells: [{ level: 3, spell: spells.friends }],
                  },
                  {
                    name_set: spells.blade_ward[0].name,
                    spells: [{ level: 3, spell: spells.blade_ward }],
                  },
                  {
                    name_set: spells.chill_touch[0].name,
                    spells: [{ level: 3, spell: spells.chill_touch }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ level: 3, spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.minor_illusion[0].name,
                    spells: [{ level: 3, spell: spells.minor_illusion }],
                  },
                  {
                    name_set: spells.true_strike[0].name,
                    spells: [{ level: 3, spell: spells.true_strike }],
                  },
                  {
                    name_set: spells.fire_bolt[0].name,
                    spells: [{ level: 3, spell: spells.fire_bolt }],
                  },
                  {
                    name_set: spells.dancing_lights[0].name,
                    spells: [{ level: 3, spell: spells.dancing_lights }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ level: 3, spell: spells.mending }],
                  },
                  {
                    name_set: spells.light[0].name,
                    spells: [{ level: 3, spell: spells.light }],
                  },
                  {
                    name_set: spells.message[0].name,
                    spells: [{ level: 3, spell: spells.message }],
                  },
                  {
                    name_set: spells.prestidigitation[0].name,
                    spells: [{ level: 3, spell: spells.prestidigitation }],
                  },
                  {
                    name_set: spells.shocking_grasp[0].name,
                    spells: [{ level: 3, spell: spells.shocking_grasp }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ level: 3, spell: spells.poison_spray }],
                  },
                ],
              },
              {
                level: 3,
                type: "spells",
                position: 4,
                name: "spells",
                select: [
                  0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12,
                  13,
                ],
                mana_min: 1,
                mana_max: [
                  0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4,
                ],
                filter: { 
                  classes: ["wizard"],
                type: ["abjuration","evocation"],}
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
              {
                level: 15,
                type: "plus",
                keyword: "ctit_damage",
                details: "on_dice_18",
              },
              {
                level: 7,
                type: "plus",
                keyword: "proficiency_bonus_half",
                details: "on_mastery_str_dex_con_checks",
              },
            ],

            spells: [
              {
                level: 7,
                spell: spells.athletic_jump,
              },
              {
                level: 18,
                spell: spells.survivor,
              },
            ],

            settings: [
              {
                level: 10,
                type: "custom",
                position: 1,
                name: "battle_style",
                filter: "no_used",
                select: 1,
                list: [
                  {
                    name: "style_dueling",
                    fines: [
                      {
                        level: 10,
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
                        level: 10,
                        spell: spells.side_pary,
                      },
                    ],
                  },
                  {
                    name: "style_defence",
                    fines: [
                      {
                        level: 10,
                        type: "plus",
                        keyword: "bonus",
                        details: "on_armor_if_armor",
                      },
                    ],

                    specials: [
                      {
                        level: 10,
                        type: "armor",
                        armor_bonus: 1,
                      },
                    ],
                  },
                  {
                    name: "style_great_weapon",
                    fines: [
                      {
                        level: 10,
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
                        level: 10,
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
                        level: 10,
                        type: "plus",
                        keyword: "aim_bonus",
                        details: "plus_2_on_ranged",
                      },
                    ],

                    specials: [
                      {
                        level: 10,
                        type: "weapon_ranged",
                        aim_bonus: 2,
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
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
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
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
          {
            name_set: "history",
            skills: [
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
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
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 11,
        name: "armor_class",
        select: 1,
        list: [
          {
            name_set: armors.chainmail.name,
            equipment: [
              {
                level: 1,
                armor: [[armors.chainmail, 1]], // Condition - Str Base = 13
              },
            ],
            fines: [
              {
                type: "disadvantage",
                keyword: "disadvantage",
                details: "on_stealth",
              },
            ],
          },
          {
            name_set: armors.leather.name,
            equipment: [
              {
                level: 1,
                armor: [[armors.leather, 1]],
                weapon: [[weapons.longbow, 1]],
                inventory: [
                  [items.arrow, 20],
                  [items.quiver, 1],
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 2,
        list: [
          {
            name_set: items.shield.name,
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            name_set: weapons.greataxe.name,
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            name_set: weapons.halberd.name,
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            name_set: weapons.war_pick.name,
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            name_set: weapons.warhammer.name,
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            name_set: weapons.battleaxe.name,
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            name_set: weapons.glaive.name,
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            name_set: weapons.greatsword.name,
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            name_set: weapons.lance.name,
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            name_set: weapons.longsword.name,
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            name_set: weapons.whip.name,
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            name_set: weapons.shortsword.name,
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            name_set: weapons.maul.name,
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            name_set: weapons.morningstar.name,
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            name_set: weapons.pike.name,
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            name_set: weapons.rapier.name,
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            name_set: weapons.scimitar.name,
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            name_set: weapons.trident.name,
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            name_set: weapons.flail.name,
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
          {
            name_set: weapons.hand_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.hand_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.heavy_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.heavy_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.longbow.name,
            equipment: [
              {
                weapon: [[weapons.longbow, 1]],
                inventory: [
                  [items.arrow, 20],
                  [items.quiver, 1],
                ],
              },
            ],
          },
          {
            name_set: weapons.blowgun.name,
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
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 2]] }],
          },
          {
            name_set: weapons.light_crossbow.name,
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
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.dungeoneers.name,
            equipment: [{ inventory_packs: [[packs.dungeoneers, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        position: 1,
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
              },
            ],

            specials: [
              {
                level: 2,
                type: "armor",
                armor_bonus: 1,
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

            specials: [
              {
                level: 2,
                type: "weapon_ranged",
                aim_bonus: 2,
              },
            ],
          },
        ],
      },
    ],
  }, //20

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
        name: "speed",
        type: "bonus",
        num: 10,
        show: false,
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
        level: 13,
        type: "plus",
        keyword: "extra_dice_damage",
        details: "crit_hand_weapon",
      },
      {
        level: 17,
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
        level: 15,
        type: "plus",
        keyword: "rage_sustainability",
        details: "only_if_uncontious",
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
        name: "strength",
        num: 4,
      },
      {
        level: 20,
        name: "constitution",
        num: 4,
      },
    ],

    charges: [
      {
        level: 1,
        name: "rage_slots",
        type: "long_rest",
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
        weapon: [
          [weapons.javelin, 4],
          [weapons.unarmed, 1],
        ],
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
      {
        level: 20,
        type: "stat_max",
        name: "strength",
        num: 24,
      },
      {
        level: 20,
        type: "stat_max",
        name: "constitution",
        num: 24,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        position: 0,
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
                position: 1,
                name: "totem_spirit",
                delails: "totem_spirit_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        level: 3,
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
                        level: 3,
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
                        level: 3,
                        type: "advantage",
                        keyword: "advantage",
                        details: "on_dodging_in_rage",

                        condition: "if_no_heavy_armor",
                      },
                    ],

                    spells: [
                      {
                        level: 3,
                        spell: spells.quick_dash,
                      },
                    ],
                  },
                  {
                    name: "elk",

                    fines: [
                      {
                        level: 3,
                        type: "plus",
                        keyword: "speed_plus_15",
                        details: "if_no_heavy_armor_on_rage",
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    fines: [
                      {
                        level: 3,
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
                position: 1,
                name: "totem_aspect",
                delails: "totem_aspect_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        level: 6,
                        type: "plus",
                        keyword: "fast_tempo",
                        details: "while_following_prints",
                      },
                      {
                        level: 6,
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
                        level: 6,
                        type: "plus",
                        keyword: "double_weight",
                        details: "weight_capacity_details",
                      },
                      {
                        level: 6,
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
                        level: 6,
                        type: "plus",
                        keyword: "to_see",
                        details: "one_mile_100f_details",
                      },
                      {
                        level: 6,
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
                        level: 6,
                        type: "plus",
                        keyword: "double_speed",
                        details: "travel_elk",
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    settings: [
                      {
                        level: 6,
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
                            name_set: "survival",
                            skills: [
                              {
                                name: "survival",
                                num: "Mastery",
                                details: "survival_details",
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
                level: 14,
                type: "custom",
                position: 1,
                name: "totem_harmony",
                delails: "totem_aspect_details",
                select: 1,
                list: [
                  {
                    name: "wolf",
                    spells: [
                      {
                        level: 14,
                        spell: spells.wolf_knock,
                      },
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        level: 14,
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
                        level: 14,
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
                        level: 14,
                        spell: spells.elk_knock,
                      },
                    ],
                  },
                  {
                    name: "tiger",
                    spells: [
                      {
                        level: 14,
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
        type: "custom",
        position: 8,
        name: "skills",
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
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
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
        ],
      },
      {
        level: 3,
        type: "custom",
        position: 8,
        name: "skills",
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
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
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
        ],
      },
      {
        level: 10,
        type: "custom",
        position: 8,
        name: "skills",
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
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
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
        ],
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.greataxe.name,
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            name_set: weapons.halberd.name,
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            name_set: weapons.war_pick.name,
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            name_set: weapons.warhammer.name,
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            name_set: weapons.battleaxe.name,
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            name_set: weapons.glaive.name,
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            name_set: weapons.greatsword.name,
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            name_set: weapons.lance.name,
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            name_set: weapons.longsword.name,
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            name_set: weapons.whip.name,
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            name_set: weapons.shortsword.name,
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            name_set: weapons.maul.name,
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            name_set: weapons.morningstar.name,
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            name_set: weapons.pike.name,
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            name_set: weapons.rapier.name,
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            name_set: weapons.scimitar.name,
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            name_set: weapons.trident.name,
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            name_set: weapons.flail.name,
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
        ],
      },
    ],
  }, //20

  //NOTE - Monk

  monk: {
    name: "monk",
    details: "monk_details",

    hp_dice: 8,
    // x: hp_dice/2 + 1;
    // hp_max: hp_dice + con.mod + ( x + con.mod ) * ( lvl - 1 ) + hp_bonus
    //regen: = lvl * hp_dice

    proficiencies: {
      weapons: [weaponry.simple, weaponry.short_swords], // all ?
    },

    saving: ["strength", "dexterity"],
    stats_base: [
      "dexterity", // 15
      "wisdom", // 14
      "constitution", // 13
      "strength", // 12
      "charisma", // 10
      "intelligence", // 8
    ],
    spell_attribute: "wisdom",

    charges: [
      {
        level: 2,
        name: "chi_slots",
        type: "short_rest",
        list: [
          [
            "",
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
          ],
        ],
      },
    ],

    equipment: [
      {
        level: 1,
        weapon: [
          [weapons.dart, 10],
          [weapons.unarmed, 1],
        ],
      },
    ],

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_wisdom",
      },
      {
        level: 1,
        type: "plus",
        keyword: "bonus",
        details: "to_damage_fist_and_weapon",
      },
      {
        level: 2,
        type: "plus",
        keyword: "speed_plus_10",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 6,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 10,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 14,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 18,
        type: "plus",
        keyword: "speed_plus_5",
        details: "if_no_heavy_armor_applied",
      },
      {
        level: 6,
        type: "plus",
        keyword: "magical_unarmed_strike",
        details: "on_immunity_cheks",
      },
      {
        level: 7,
        type: "resistance",
        keyword: "fine_dodge",
        details: "from_aoe_effects",
      },
      {
        level: 9,
        type: "plus",
        keyword: "able_to_walk",
        details: "on_walls_and_water",
      },
      {
        level: 10,
        type: "resistance",
        keyword: "immunity",
        details: "on_sick",
      },
      {
        level: 10,
        type: "resistance",
        keyword: "immunity",
        details: "poison_against",
      },
      {
        level: 15,
        type: "resistance",
        keyword: "immunity",
        details: "aging_against",
      },
      {
        level: 15,
        type: "resistance",
        keyword: "immunity",
        details: "on_hunger_and_thirst",
      },
      {
        level: 20,
        type: "plus",
        keyword: "plus_4_chi",
        details: "on_initiative_throw",
      },
    ],

    spells: [
      {
        level: 1,
        spell: spells.unarmed_strike_bonus,
      },
      {
        level: 2,
        spell: spells.step_of_the_wind,
      },
      {
        level: 2,
        spell: spells.patient_defense,
      },
      {
        level: 2,
        spell: spells.flurry_of_blows,
      },
      {
        level: 2,
        spell: spells.dedicated_weapon,
      },
      {
        level: 3,
        spell: spells.deflect_missiles,
      },
      {
        level: 3,
        spell: spells.weapon_strike_bonus,
      },
      {
        level: 4,
        spell: spells.slow_fall,
      },
      {
        level: 4,
        spell: spells.quickened_healing,
      },
      {
        level: 5,
        spell: spells.extra_strike_monk,
      },
      {
        level: 5,
        spell: spells.stunning_strike,
      },
      {
        level: 5,
        spell: spells.focused_aim,
      },
      {
        level: 7,
        spell: spells.stillness_of_mind,
      },
      {
        level: 14,
        spell: spells.diamond_soul,
      },
      {
        level: 18,
        spell: spells.empty_body,
      },
      {
        level: 18,
        spell: spells.astral_projection_monk,
      },
    ],

    qualities: [
      {
        level: 2,
        name: "speed",
        type: "bonus",
        num: 10,
        show: false,
      },
      {
        level: 6,
        name: "speed",
        type: "bonus",
        num: 5,
        show: false,
      },
      {
        level: 10,
        sname: "speed",
        type: "bonus",
        num: 5,
        show: false,
      },
      {
        level: 14,
        name: "speed",
        type: "bonus",
        num: 5,
        show: false,
      },
      {
        level: 18,
        name: "speed",
        type: "bonus",
        num: 5,
        show: false,
      },
    ],

    specials: [
      {
        level: 1,
        type: "armor_bonus",
        foo: "Num_WIS",
      },
      {
        level: 1,
        type: "weapon",
        finesse: true,
        // Вьі можете использовать Ловкость вместо Сильі для бросков атак и урона ваших безоружньіх ударов и атак монашеским оружием. — Надо вьібирать большее.
      },
      {
        level: 1,
        type: "weapon",
        dice_foo: "Dic_14_56_118_1710_Lvl_or_Default",
        // MonkMartial 4,4,4,4,6, 6,6,6,6,6, 8,8,8,8,8, 8,10,10,10,10
        // Вьі можете использовать кость d4 вместо обьічной кости урона ваших безоружньіх ударов или атак монашеским оружием. єта кость увеличивается с вашим уровнем, как показано в колонке «боевьіе искусства».
      },
      {
        level: 13,
        type: "proficiencies",
        languages: "any",
        //Вьі понимаете речь на любом язьіке. Кроме того, все существа, способньіе понимать хотя бьі один язьік, понимают то, что вьі сказали.
      },
      {
        level: 14,
        type: "saving",
        saving: ["constitution", "intelligence", "wisdom", "charisma"],
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "way_of_the_open_hand",
            details: "way_of_the_open_hand_details",

            // proficiencies: {languages: [lang.halfling]},

            charges: [
              {
                level: 6,
                name: "wholeness_body_slots",
                type: "long_rest",
                list: [
                  [
                    "",
                    0,
                    0,
                    0,
                    0,
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
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.open_hand_tech_knock,
              },
              {
                level: 3,
                spell: spells.open_hand_tech_push,
              },
              {
                level: 3,
                spell: spells.open_hand_tech_confuse,
              },
              {
                level: 6,
                spell: spells.wholeness_of_body,
              },
              {
                level: 11,
                spell: spells.sanctuary_monk,
              },
              {
                level: 17,
                spell: spells.quivering_palm,
              },
            ],
          },
          {
            name: "way_of_the_shadow",
            details: "way_of_the_shadow_details",

            spells: [
              {
                level: 3,
                spell: spells.minor_illusion,
              },
              {
                level: 3,
                spell: spells.pass_without_trace_monk,
              },
              {
                level: 3,
                spell: spells.darkvision_monk,
              },
              {
                level: 3,
                spell: spells.silence_monk,
              },
              {
                level: 3,
                spell: spells.darkness_monk,
              },
              {
                level: 6,
                spell: spells.shadow_step,
              },
              {
                level: 11,
                spell: spells.cloak_of_shadows_monk,
              },
              {
                level: 17,
                spell: spells.opportunist,
              },
            ],
          },
          {
            name: "way_of_the_four_elements",
            details: "way_of_the_four_elements_details",

            spells: [
              {
                level: 3,
                spell: spells.element_bond,
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                position: 1,
                name: "practices",
                select: [
                  1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
                ],
                list: [
                  {
                    level: 3,
                    name_set: spells.water_whip[0].name,
                    spells: [{ level: 3, spell: spells.water_whip }],
                  },
                  {
                    level: 3,
                    name_set: spells.fire_snake_teeth[0].name,
                    spells: [{ level: 3, spell: spells.fire_snake_teeth }],
                  },
                  {
                    level: 3,
                    name_set: spells.ashing_strike[0].name,
                    spells: [{ level: 3, spell: spells.ashing_strike }],
                  },
                  {
                    level: 3,
                    name_set: spells.four_thunder_fist[0].name,
                    spells: [{ level: 3, spell: spells.four_thunder_fist }],
                  },
                  {
                    level: 3,
                    name_set: spells.gust_of_wind_monk[0].name,
                    spells: [{ level: 3, spell: spells.gust_of_wind_monk }],
                  },
                  {
                    level: 3,
                    name_set: spells.air_fist[0].name,
                    spells: [{ level: 3, spell: spells.air_fist }],
                  },
                  {
                    level: 3,
                    name_set: spells.form_river[0].name,
                    spells: [{ level: 3, spell: spells.form_river }],
                  },

                  {
                    level: 6,
                    name_set: spells.shatter_monk[0].name,
                    spells: [{ level: 6, spell: spells.shatter_monk }],
                  },
                  {
                    level: 6,
                    name_set: spells.hold_person_monk[0].name,
                    spells: [{ level: 6, spell: spells.hold_person_monk }],
                  },

                  {
                    level: 11,
                    name_set: spells.fly_monk[0].name,
                    spells: [ { level:11, spell: spells.fly_monk }, ],},
                  {
                    level: 11,
                    name_set: spells.fireball_monk[0].name,
                    spells: [ { level:11, spell: spells.fireball_monk }, ],},
                  {
                    level: 11,
                    name_set: spells.gaseous_form_monk[0].name,
                    spells: [ { level:11, spell: spells.gaseous_form_monk }, ],},

                  {
                    level: 17,
                    name_set: spells.cone_of_cold_monk[0].name,
                    spells: [ { level:17, spell: spells.cone_of_cold_monk }, ],},
                  {
                    level: 17,
                    name_set: spells.wall_of_stone_monk[0].name,
                    spells: [ { level:17, spell: spells.wall_of_stone_monk }, ],},
                  {
                    level: 17,
                    name_set: spells.stoneskin_monk[0].name,
                    spells: [ { level:17, spell: spells.stoneskin_monk }, ],},
                  {
                    level: 17,
                    name_set: spells.wall_of_fire_monk[0].name,
                    spells: [ { level:17, spell: spells.wall_of_fire_monk }, ],},
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
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
            name_set: "history",
            skills: [
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
          {
            name_set: "stealth",
            skills: [
              { name: "stealth", num: "Mastery", details: "stealth_details" },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 9,
        name: "tools",
        select: 1,
        list: [
          {
            name_set: tools.potters_tools.name,
            equipment: [{ inventory: [[items.tools_potters_tools, 1]] }],
            proficiencies: { tools: [tools.potters_tools] },
          },
          {
            name_set: tools.cooks_tools.name,
            equipment: [{ inventory: [[items.tools_cooks_tools, 1]] }],
            proficiencies: { tools: [tools.cooks_tools] },
          },
          {
            name_set: tools.brewer.name,
            equipment: [{ inventory: [[items.tools_brewer, 1]] }],
            proficiencies: { tools: [tools.brewer] },
          },
          {
            name_set: tools.alchemists_supplies.name,
            equipment: [{ inventory: [[items.tools_alchemists_supplies, 1]] }],
            proficiencies: { tools: [tools.alchemists_supplies] },
          },
          {
            name_set: tools.glassblowers_tools.name,
            equipment: [{ inventory: [[items.tools_glassblowers_tools, 1]] }],
            proficiencies: { tools: [tools.glassblowers_tools] },
          },
          {
            name_set: tools.jewelers_tools.name,
            equipment: [{ inventory: [[items.tools_jewelers_tools, 1]] }],
            proficiencies: { tools: [tools.jewelers_tools] },
          },
          {
            name_set: tools.weavers_tools.name,
            equipment: [{ inventory: [[items.tools_weavers_tools, 1]] }],
            proficiencies: { tools: [tools.weavers_tools] },
          },
          {
            name_set: tools.painters_supplies.name,
            equipment: [{ inventory: [[items.tools_painters_supplies, 1]] }],
            proficiencies: { tools: [tools.painters_supplies] },
          },
          {
            name_set: tools.calligraphers_supplies.name,
            equipment: [
              { inventory: [[items.tools_calligraphers_supplies, 1]] },
            ],
            proficiencies: { tools: [tools.calligraphers_supplies] },
          },
          {
            name_set: tools.cartographers_tools.name,
            equipment: [{ inventory: [[items.tools_cartographers_tools, 1]] }],
            proficiencies: { tools: [tools.cartographers_tools] },
          },
          {
            name_set: tools.navigators_tools.name,
            equipment: [{ inventory: [[items.tools_navigators_tools, 1]] }],
            proficiencies: { tools: [tools.navigators_tools] },
          },
          {
            name_set: tools.woodcarvers_tools.name,
            equipment: [{ inventory: [[items.tools_woodcarvers_tools, 1]] }],
            proficiencies: { tools: [tools.woodcarvers_tools] },
          },
          {
            name_set: tools.carpenters_tools.name,
            equipment: [{ inventory: [[items.tools_carpenters_tools, 1]] }],
            proficiencies: { tools: [tools.carpenters_tools] },
          },
          {
            name_set: tools.mason.name,
            equipment: [{ inventory: [[items.tools_mason, 1]] }],
            proficiencies: { tools: [tools.mason] },
          },
          {
            name_set: tools.blacksmith.name,
            equipment: [{ inventory: [[items.tools_blacksmith, 1]] }],
            proficiencies: { tools: [tools.blacksmith] },
          },
          {
            name_set: tools.tinkers_tools.name,
            equipment: [{ inventory: [[items.tools_tinkers_tools, 1]] }],
            proficiencies: { tools: [tools.tinkers_tools] },
          },
          {
            name_set: tools.leatherworkers_tools.name,
            equipment: [{ inventory: [[items.tools_leatherworkers_tools, 1]] }],
            proficiencies: { tools: [tools.leatherworkers_tools] },
          },
          {
            name_set: tools.cobblers_tools.name,
            equipment: [{ inventory: [[items.tools_cobblers_tools, 1]] }],
            proficiencies: { tools: [tools.cobblers_tools] },
          },
          {
            name_set: tools.music_dulcimer.name,
            proficiencies: {
              tools: [tools.music_dulcimer],
            },
          },
          {
            name_set: tools.music_flute.name,
            proficiencies: {
              tools: [tools.music_flute],
            },
          },
          {
            name_set: tools.music_horn.name,
            proficiencies: {
              tools: [tools.music_horn],
            },
          },
          {
            name_set: tools.music_lute.name,
            proficiencies: {
              tools: [tools.music_lute],
            },
          },
          {
            name_set: tools.music_lyre.name,
            proficiencies: {
              tools: [tools.music_lyre],
            },
          },
          {
            name_set: tools.music_pan_flute.name,
            proficiencies: {
              tools: [tools.music_pan_flute],
            },
          },
          {
            name_set: tools.music_shawm.name,
            proficiencies: {
              tools: [tools.music_shawm],
            },
          },
          {
            name_set: tools.music_viol.name,
            proficiencies: {
              tools: [tools.music_viol],
            },
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        details: "monk_weapons",
        select: 1,
        list: [
          {
            name_set: weapons.shortsword.name,
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            name_set: weapons.dart.name,
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            name_set: weapons.sling.name,
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
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.dungeoneers.name,
            equipment: [{ inventory_packs: [[packs.dungeoneers, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // 20 

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
        weapon: [[weapons.unarmed, 1]],
        inventory: [[items.holy_symbol, 1]],
      },
    ],

    fines: [
      {
        level: 1,
        type: "disadvantage",
        keyword: "disadvantage",
        details: "on_stealth",
      },
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
        type: "long_rest",
        foo: "Num_CHA_Min0", //Str_Plus_CHA
        list: [
          ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 3,
        name: "divine_channel_slots",
        type: "short_rest",
        list: [
          ["", 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 14,
        name: "cleansing_touch_slots",
        type: "long_rest",
        foo: "Num_CHA_Min1", //Str_Plus_CHA
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        level: 2,
        name: "spell_slots",
        type: "long_rest",
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
      {
        level: 3,
        spell: spells.divine_channel_mana,
      },
      {
        level: 5,
        spell: spells.extra_attack,
      },
      {
        level: 6,
        spell: spells.aura_of_protection,
      },
      {
        level: 10,
        spell: spells.aura_of_courage,
      },
      {
        level: 11,
        spell: spells.paladin_divine_smite_free,
      },
      {
        level: 14,
        spell: spells.cleansing_touch,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "oath_of_devotion",
            details: "oath_of_devotion_details",

            charges: [
              {
                level: 20,
                name: "holy_nimbus_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
            ],

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
                spell: spells.protection_from_evil_and_good,
              },
              {
                level: 3,
                spell: spells.sanctuary,
              },
              {
                level: 5,
                spell: spells.lesser_restoration,
              },
              {
                level: 5,
                spell: spells.zone_of_truth,
              },
              {
                level: 7,
                spell: spells.aura_of_devotion,
              },
              {
                level: 9,
                spell: spells.beacon_of_hope,
              },
              {
                level: 9,
                spell: spells.dispel_magic,
              },
              {
                level: 13,
                spell: spells.freedom_of_movement,
              },
              {
                level: 13,
                spell: spells.guardian_of_faith,
              },
              {
                level: 15,
                spell: spells.protection_from_evil_and_good_paladin,
              },
              {
                level: 17,
                spell: spells.flame_strike,
              },
              {
                level: 17,
                spell: spells.commune,
              },
              {
                level: 20,
                spell: spells.holy_nimbus,
              },
            ],
          },
          {
            name: "oath_of_antients",
            details: "oath_of_antients_details",

            charges: [
              {
                level: 15,
                name: "undying_sentinel_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
              {
                level: 20,
                name: "elder_champion_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 15,
                type: "resistance",
                keyword: "immunity",
                details: "aging_against",
              },
            ],

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
                spell: spells.ensnaring_strike,
              },
              {
                level: 3,
                spell: spells.speak_with_animals,
              },
              {
                level: 5,
                spell: spells.moonbeam,
              },
              {
                level: 5,
                spell: spells.misty_step,
              },
              {
                level: 7,
                spell: spells.aura_of_warding,
              },
              {
                level: 9,
                spell: spells.protection_from_energy,
              },
              {
                level: 9,
                spell: spells.plant_growth,
              },
              {
                level: 13,
                spell: spells.ice_storm,
              },
              {
                level: 13,
                spell: spells.stoneskin,
              },
              {
                level: 15,
                spell: spells.undying_sentinel,
              },
              {
                level: 17,
                spell: spells.tree_stride,
              },
              {
                level: 17,
                spell: spells.commune_with_nature,
              },
              {
                level: 20,
                spell: spells.elder_champion,
              },
            ],
          },
          {
            name: "oath_of_vengence",
            details: "oath_of_vengence_details",

            charges: [
              {
                level: 20,
                name: "avenging_angel_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
            ],

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
                spell: spells.hunters_mark,
              },
              {
                level: 3,
                spell: spells.bane,
              },
              {
                level: 5,
                spell: spells.misty_step,
              },
              {
                level: 5,
                spell: spells.hold_person,
              },
              {
                level: 7,
                spell: spells.relentless_avenger,
              },
              {
                level: 9,
                spell: spells.protection_from_energy,
              },
              {
                level: 9,
                spell: spells.haste,
              },
              {
                level: 13,
                spell: spells.banishment,
              },
              {
                level: 13,
                spell: spells.dimension_door,
              },
              {
                level: 15,
                spell: spells.soul_of_vengeance,
              },
              {
                level: 17,
                spell: spells.scrying,
              },
              {
                level: 17,
                spell: spells.hold_monster,
              },

              {
                level: 20,
                spell: spells.avenging_angel,
              },
            ],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        position: 2,
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
              },
            ],

            specials: [
              {
                level: 2,
                type: "armor",
                armor_bonus: 1,
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
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
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
            name_set: "intimidation",
            skills: [
              {
                name: "intimidation",
                num: "Mastery",
                details: "intimidation_details",
              },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
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
        ],
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 2,
        list: [
          {
            name_set: items.shield.name,
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            name_set: weapons.greataxe.name,
            equipment: [{ weapon: [[weapons.greataxe, 1]] }],
          },
          {
            name_set: weapons.halberd.name,
            equipment: [{ weapon: [[weapons.halberd, 1]] }],
          },
          {
            name_set: weapons.war_pick.name,
            equipment: [{ weapon: [[weapons.war_pick, 1]] }],
          },
          {
            name_set: weapons.warhammer.name,
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
          {
            name_set: weapons.battleaxe.name,
            equipment: [{ weapon: [[weapons.battleaxe, 1]] }],
          },
          {
            name_set: weapons.glaive.name,
            equipment: [{ weapon: [[weapons.glaive, 1]] }],
          },
          {
            name_set: weapons.greatsword.name,
            equipment: [{ weapon: [[weapons.greatsword, 1]] }],
          },
          {
            name_set: weapons.lance.name,
            equipment: [{ weapon: [[weapons.lance, 1]] }],
          },
          {
            name_set: weapons.longsword.name,
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            name_set: weapons.whip.name,
            equipment: [{ weapon: [[weapons.whip, 1]] }],
          },
          {
            name_set: weapons.shortsword.name,
            equipment: [{ weapon: [[weapons.shortsword, 1]] }],
          },
          {
            name_set: weapons.maul.name,
            equipment: [{ weapon: [[weapons.maul, 1]] }],
          },
          {
            name_set: weapons.morningstar.name,
            equipment: [{ weapon: [[weapons.morningstar, 1]] }],
          },
          {
            name_set: weapons.pike.name,
            equipment: [{ weapon: [[weapons.pike, 1]] }],
          },
          {
            name_set: weapons.rapier.name,
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            name_set: weapons.scimitar.name,
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            name_set: weapons.trident.name,
            equipment: [{ weapon: [[weapons.trident, 1]] }],
          },
          {
            name_set: weapons.flail.name,
            equipment: [{ weapon: [[weapons.flail, 1]] }],
          },
          {
            name_set: weapons.hand_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.hand_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.heavy_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.heavy_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.longbow.name,
            equipment: [
              {
                weapon: [[weapons.longbow, 1]],
                inventory: [
                  [items.arrow, 20],
                  [items.quiver, 1],
                ],
              },
            ],
          },
          {
            name_set: weapons.blowgun.name,
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
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.priests.name,
            equipment: [{ inventory_packs: [[packs.priests, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        level: 2,
        type: "spells",
        position: 4,
        name: "spells",
        select: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10],
        foo: "Sel_Plus_CHA_Min1",
        mana_min: 1,
        mana_max: [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
        filter: { classes: ["paladin"], }
      },
    ],
  }, // 20 , орім спелів сабкласів

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

    charges: [
      {
        level: 1,
        name: "divine_channel_slots",
        type: "short_rest",
        list: [
          ["", 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3],
        ],
      },
      {
        level: 10,
        name: "divine_intervention_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
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
        weapon: [[weapons.unarmed, 1]],
        inventory: [
          [items.shield, 1],
          [items.holy_symbol, 1],
        ],
      },
    ],

    spells: [
      {
        level: 2,
        spell: spells.divine_channel_undead,
      },
      {
        level: 2,
        spell: spells.divine_channel_mana,
      },
      {
        level: 10,
        spell: spells.divine_intervention,
      },
      {
        level: 1,
        spell: spells.prepare_shield,
      },
    ],

    settings: [
      {
        level: 1,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            //домен бури
            name: "domain_thunder",
            details: "domain_thunder_details",

            charges: [
              {
                level: 1,
                name: "thunder_wrath_slots",
                type: "long_rest",
                foo: "Num_WIS_Min1",
                list: [
                  [
                    "",
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
                    0,
                    0,
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 17,
                type: "plus",
                keyword: "flight",
                details: "as_walking_speed",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.thunder_wrath,
              },
              {
                level: 1,
                spell: spells.thunderwave,
              },
              {
                level: 1,
                spell: spells.fog_cloud,
              },
              {
                level: 2,
                spell: spells.divine_channel_wrath,
              },
              {
                level: 3,
                spell: spells.shatter,
              },
              {
                level: 3,
                spell: spells.gust_of_wind,
              },
              {
                level: 5,
                spell: spells.sleet_storm,
              },
              {
                level: 5,
                spell: spells.call_lightning,
              },
              {
                level: 6,
                spell: spells.thunder_strike,
              },
              {
                level: 7,
                spell: spells.control_water,
              },
              {
                level: 7,
                spell: spells.ice_storm,
              },
              {
                level: 8,
                spell: spells.divine_strike_sound,
              },
              {
                level: 9,
                spell: spells.insect_plague,
              },
              {
                level: 9,
                spell: spells.destructive_wave,
              },
            ],

            proficiencies: {
              armor: [armory.heavy],
              weapons: [weaponry.military],
            },

            settings: [
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                  {
                    name_set: armors.chainmail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.chainmail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            //домен войньі
            name: "domain_war",
            details: "domain_war_details",

            charges: [
              {
                level: 1,
                name: "inspired_attack_slots",
                type: "long_rest",
                foo: "Num_WIS_Min1",
                list: [
                  [
                    "",
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
                    0,
                    0,
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 17,
                type: "resistance",
                keyword: "resistance",
                details: "to_no_magic_weapon",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.inspired_attack,
              },
              {
                level: 1,
                spell: spells.divine_favor,
              },
              {
                level: 1,
                spell: spells.shield_of_faith,
              },
              {
                level: 2,
                spell: spells.divine_channel_directed_strike,
              },
              {
                level: 3,
                spell: spells.spiritual_weapon,
              },
              {
                level: 3,
                spell: spells.magic_weapon,
              },
              {
                level: 5,
                spell: spells.spirit_guardians,
              },
              {
                level: 5,
                spell: spells.crusaders_mantle,
              },
              {
                level: 6,
                spell: spells.divine_channel_war_god_bless,
              },
              {
                level: 7,
                spell: spells.stoneskin,
              },
              {
                level: 7,
                spell: spells.freedom_of_movement,
              },
              {
                level: 8,
                spell: spells.divine_strike_weapon,
              },
              {
                level: 9,
                spell: spells.flame_strike,
              },
              {
                level: 9,
                spell: spells.hold_monster,
              },
            ],

            proficiencies: {
              armor: [armory.heavy],
              weapons: [weaponry.military],
            },

            settings: [
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                  {
                    name_set: armors.chainmail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.chainmail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            //домен жизни
            name: "domain_life",
            details: "domain_life_details",

            fines: [
              {
                level: 1,
                type: "plus",
                keyword: "extra_healing",
                details: "two_plus_spell_level",
              },
              {
                level: 6,
                type: "plus",
                keyword: "heal",
                details: "self_two_plus_spell_level",
              },
              {
                level: 17,
                type: "advantage",
                keyword: "always_max_heal",
                details: "from_spells",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.bless,
              },
              {
                level: 1,
                spell: spells.cure_wounds,
              },
              {
                level: 2,
                spell: spells.divine_channel_save_life,
              },
              {
                level: 3,
                spell: spells.spiritual_weapon,
              },
              {
                level: 3,
                spell: spells.lesser_restoration,
              },

              {
                level: 5,
                spell: spells.revivify,
              },
              {
                level: 5,
                spell: spells.beacon_of_hope,
              },
              {
                level: 7,
                spell: spells.death_ward,
              },
              {
                level: 7,
                spell: spells.guardian_of_faith,
              },
              {
                level: 8,
                spell: spells.divine_strike_radiant,
              },
              {
                level: 9,
                spell: spells.mass_cure_wounds,
              },
              {
                level: 9,
                spell: spells.raise_dead,
              },
            ],

            proficiencies: {
              armor: [armory.heavy],
            },

            settings: [
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                  {
                    name_set: armors.chainmail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.chainmail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            //домен знания
            name: "domain_knowledge",
            details: "domain_knowledge_details",

            charges: [
              {
                level: 17,
                name: "cleric_see_past_slots",
                type: "short_rest",
                list: [
                  [
                    "",
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
                    1,
                    1,
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.identify,
              },
              {
                level: 1,
                spell: spells.command,
              },
              {
                level: 2,
                spell: spells.divine_channel_learn_tool,
              },
              {
                level: 3,
                spell: spells.suggestion,
              },
              {
                level: 3,
                spell: spells.augury,
              },
              {
                level: 5,
                spell: spells.nondetection,
              },
              {
                level: 5,
                spell: spells.speak_with_dead,
              },
              {
                level: 6,
                spell: spells.divine_channel_read_thoughts,
              },
              {
                level: 7,
                spell: spells.arcane_eye,
              },
              {
                level: 7,
                spell: spells.confusion,
              },
              {
                level: 8,
                spell: spells.cleric_extra_damage,
              },
              {
                level: 9,
                spell: spells.legend_lore,
              },
              {
                level: 9,
                spell: spells.scrying,
              },
              {
                level: 17,
                spell: spells.cleric_see_past,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                ],
              },
              {
                level: 1,
                type: "custom",
                position: 10,
                name: "languages",
                select: 2,
                list: [
                  {
                    name: lang.halfling.name,
                    details: lang.halfling.details,
                    proficiencies: { languages: [lang.halfling] },
                  },
                  {
                    name: lang.gnome.name,
                    details: lang.gnome.details,
                    proficiencies: { languages: [lang.gnome] },
                  },
                  {
                    name: lang.dwarf.name,
                    details: lang.dwarf.details,
                    proficiencies: { languages: [lang.dwarf] },
                  },
                  {
                    name: lang.elf.name,
                    details: lang.elf.details,
                    proficiencies: { languages: [lang.elf] },
                  },
                  {
                    name: lang.orc.name,
                    details: lang.orc.details,
                    proficiencies: { languages: [lang.orc] },
                  },
                  {
                    name: lang.dragon.name,
                    details: lang.dragon.details,
                    proficiencies: { languages: [lang.dragon] },
                  },
                  {
                    name: lang.giant.name,
                    details: lang.giant.details,
                    proficiencies: { languages: [lang.giant] },
                  },
                  {
                    name: lang.goblin.name,
                    details: lang.goblin.details,
                    proficiencies: { languages: [lang.goblin] },
                  },
                  {
                    name: lang.thieves.name,
                    details: lang.thieves.details,
                    proficiencies: { languages: [lang.thieves] },
                  },
                  {
                    name: lang.druid.name,
                    details: lang.druid.details,
                    proficiencies: { languages: [lang.druid] },
                  },
                  {
                    name: lang.animal.name,
                    details: lang.animal.details,
                    proficiencies: { languages: [lang.animal] },
                  },
                  {
                    name: lang.sylvan.name,
                    details: lang.sylvan.details,
                    proficiencies: { languages: [lang.sylvan] },
                  },
                  {
                    name: lang.undercommon.name,
                    details: lang.undercommon.details,
                    proficiencies: { languages: [lang.undercommon] },
                  },
                  {
                    name: lang.deep.name,
                    details: lang.deep.details,
                    proficiencies: { languages: [lang.deep] },
                  },
                  {
                    name: lang.primordial.name,
                    details: lang.primordial.details,
                    proficiencies: { languages: [lang.primordial] },
                  },
                  {
                    name: lang.sky.name,
                    details: lang.sky.details,
                    proficiencies: { languages: [lang.sky] },
                  },
                  {
                    name: lang.demonic.name,
                    details: lang.demonic.details,
                    proficiencies: { languages: [lang.demonic] },
                  },
                  {
                    name: lang.tiefling.name,
                    details: lang.tiefling.details,
                    proficiencies: { languages: [lang.tiefling] },
                  },
                ],
              },
              {
                level: 1,
                type: "custom",
                position: 8,
                name: "skills",
                select: 2,
                list: [
                  {
                    name_set: "history",
                    skills: [{ name: "history", num: "Mastery_x2" }],
                  },
                  {
                    name_set: "arcana",
                    skills: [{ name: "arcana", num: "Mastery_x2" }],
                  },
                  {
                    name_set: "nature",
                    skills: [{ name: "nature", num: "Mastery_x2" }],
                  },
                  {
                    name_set: "religion",
                    skills: [{ name: "religion", num: "Mastery_x2" }],
                  },
                ],
              },
            ],
          },
          {
            //домен обмана
            name: "domain_trickery",
            details: "domain_trickery_details",

            spells: [
              {
                level: 1,
                spell: spells.tricker_bless,
              },
              {
                level: 1,
                spell: spells.disguise_self,
              },
              {
                level: 1,
                spell: spells.charm_person,
              },
              {
                level: 2,
                spell: spells.divine_channel_mirror_image,
              },
              {
                level: 3,
                spell: spells.pass_without_trace,
              },
              {
                level: 3,
                spell: spells.mirror_image,
              },
              {
                level: 5,
                spell: spells.blink,
              },
              {
                level: 5,
                spell: spells.dispel_magic,
              },
              {
                level: 2,
                spell: spells.divine_channel_cloak_of_shadows,
              },
              {
                level: 7,
                spell: spells.dimension_door,
              },
              {
                level: 7,
                spell: spells.polymorph,
              },
              {
                level: 8,
                spell: spells.divine_strike_poison,
              },
              {
                level: 9,
                spell: spells.modify_memory,
              },
              {
                level: 9,
                spell: spells.dominate_person,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            //домен природьі
            name: "domain_nature",
            details: "domain_nature_details",

            spells: [
              {
                level: 2,
                spell: spells.divine_channel_charm_alimal_plant,
              },
              {
                level: 6,
                spell: spells.dampen_elements,
              },
              {
                level: 8,
                spell: spells.divine_strike_nature,
              },

              {
                level: 1,
                spell: spells.animal_friendship,
              },
              {
                level: 1,
                spell: spells.speak_with_animals,
              },
              {
                level: 3,
                spell: spells.barkskin,
              },
              {
                level: 3,
                spell: spells.spike_growth,
              },
              {
                level: 5,
                spell: spells.plant_growth,
              },
              {
                level: 5,
                spell: spells.wind_wall,
              },
              {
                level: 7,
                spell: spells.dominate_beast,
              },
              {
                level: 7,
                spell: spells.grasping_vine,
              },
              {
                level: 9,
                spell: spells.tree_stride,
              },
              {
                level: 9,
                spell: spells.insect_plague,
              },
            ],

            proficiencies: {
              armor: [armory.heavy],
            },

            settings: [
              {
                level: 1,
                type: "custom",
                position: 3,
                name: "spells_0",
                select: 1,
                list: [
                  //spells[0] druid
                  {
                    name_set: spells.shillelagh[0].name,
                    spells: [{ level: 1, spell: spells.shillelagh }],
                  },
                  {
                    name_set: spells.druidcraft[0].name,
                    spells: [{ level: 1, spell: spells.druidcraft }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ level: 1, spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ level: 1, spell: spells.mending }],
                  },
                  {
                    name_set: spells.resistance[0].name,
                    spells: [{ level: 1, spell: spells.resistance }],
                  },
                  {
                    name_set: spells.produce_flame[0].name,
                    spells: [{ level: 1, spell: spells.produce_flame }],
                  },
                  {
                    name_set: spells.thorn_whip[0].name,
                    spells: [{ level: 1, spell: spells.thorn_whip }],
                  },
                  {
                    name_set: spells.guidance[0].name,
                    spells: [{ level: 1, spell: spells.guidance }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ level: 1, spell: spells.poison_spray }],
                  },
                ],
              },
              {
                level: 1,
                type: "custom",
                position: 8,
                name: "skills",
                select: 1,
                list: [
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
                    name_set: "animal_handling",
                    skills: [
                      {
                        name: "animal_handling",
                        num: "Mastery",
                        details: "animal_handling_details",
                      },
                    ],
                  },
                ],
              },
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [{ level: 1, armor: [[armors.scalemail, 1]] }],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [{ level: 1, armor: [[armors.leather, 1]] }],
                  },
                  {
                    name_set: armors.chainmail.name,
                    equipment: [{ level: 1, armor: [[armors.chainmail, 1]] }],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            //домен света
            name: "domain_light",
            details: "domain_light_details",

            charges: [
              {
                level: 1,
                name: "warding_flare_slots",
                type: "long_rest",
                foo: "Num_WIS_Min1",
                list: [
                  [
                    "",
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
                    0,
                    0,
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.light,
              },
              {
                level: 1,
                spell: spells.warding_flare,
              },
              {
                level: 2,
                spell: spells.divine_channel_radiance_dawn,
              },
              {
                level: 8,
                spell: spells.cleric_extra_damage,
              },
              {
                level: 17,
                spell: spells.crown_of_light,
              },

              {
                level: 1,
                spell: spells.burning_hands,
              },
              {
                level: 1,
                spell: spells.faerie_fire_0,
              },
              {
                level: 3,
                spell: spells.scorching_ray,
              },
              {
                level: 3,
                spell: spells.flaming_sphere,
              },
              {
                level: 5,
                spell: spells.daylight,
              },
              {
                level: 5,
                spell: spells.fireball,
              },
              {
                level: 7,
                spell: spells.wall_of_fire,
              },
              {
                level: 7,
                spell: spells.guardian_of_faith,
              },
              {
                level: 9,
                spell: spells.scrying,
              },
              {
                level: 9,
                spell: spells.flame_strike,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                position: 11,
                name: "armor_class",
                select: 1,
                list: [
                  {
                    name_set: armors.scalemail.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.scalemail, 1]],
                      },
                    ],
                    fines: [
                      {
                        level: 1,
                        type: "disadvantage",
                        keyword: "disadvantage",
                        details: "on_stealth",
                      },
                    ],
                  },
                  {
                    name_set: armors.leather.name,
                    equipment: [
                      {
                        level: 1,
                        armor: [[armors.leather, 1]],
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
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
          {
            name_set: "history",
            skills: [
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
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
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.warhammer.name,
            equipment: [{ weapon: [[weapons.warhammer, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.light_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            name_set: weapons.dart.name,
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            name_set: weapons.shortbow.name,
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            name_set: weapons.sling.name,
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
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.priests.name,
            equipment: [{ inventory_packs: [[packs.priests, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 3,
        name: "spells_0",
        select: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        list: [
          //spells[0] cleric
          {
            name_set: spells.mending[0].name,
            spells: [{ level: 1, spell: spells.mending }],
          },
          {
            name_set: spells.light[0].name,
            spells: [{ level: 1, spell: spells.light }],
          },
          {
            name_set: spells.sacred_flame[0].name,
            spells: [{ level: 1, spell: spells.sacred_flame }],
          },
          {
            name_set: spells.resistance[0].name,
            spells: [{ level: 1, spell: spells.resistance }],
          },
          {
            name_set: spells.guidance[0].name,
            spells: [{ level: 1, spell: spells.guidance }],
          },
          {
            name_set: spells.spare_the_dying[0].name,
            spells: [{ level: 1, spell: spells.spare_the_dying }],
          },
          {
            name_set: spells.thaumaturgy[0].name,
            spells: [{ level: 1, spell: spells.thaumaturgy }],
          },
        ],
      },
      {
        level: 1,
        type: "spells",
        position: 4,
        name: "spells",
        select: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
        foo: "Sel_Plus_WIS_Min1",
        mana_min: 1,
        mana_max: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9],
        filter: { classes: ["cleric"], }
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // Almost 20 (spells)

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
      languages: [lang.druid],
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
        type: "short_rest",
        list: [
          ["", 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, "inf"],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
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
        weapon: [[weapons.unarmed, 1]],
        inventory: [[items.focus, 1]],
        inventory_packs: [[packs.explorers, 1]],
      },
    ],

    settings: [
      {
        level: 2,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "circle_of_the_land",
            details: "circle_of_the_land_details",

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
                type: "custom",
                position: 3,
                name: "spells_0",
                select: 1,
                list: [
                  //spells[0] druid
                  {
                    name_set: spells.shillelagh[0].name,
                    spells: [{ level: 2, spell: spells.shillelagh }],
                  },
                  {
                    name_set: spells.druidcraft[0].name,
                    spells: [{ level: 2, spell: spells.druidcraft }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ level: 2, spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ level: 2, spell: spells.mending }],
                  },
                  {
                    name_set: spells.resistance[0].name,
                    spells: [{ level: 2, spell: spells.resistance }],
                  },
                  {
                    name_set: spells.produce_flame[0].name,
                    spells: [{ level: 2, spell: spells.produce_flame }],
                  },
                  {
                    name_set: spells.thorn_whip[0].name,
                    spells: [{ level: 2, spell: spells.thorn_whip }],
                  },
                  {
                    name_set: spells.guidance[0].name,
                    spells: [{ level: 2, spell: spells.guidance }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ level: 2, spell: spells.poison_spray }],
                  },
                ],
              },
              {
                level: 3,
                type: "custom",
                position: 1,
                name: "favored_terrain",
                select: 1,
                list: [
                  {
                    name: "circle_of_the_land_arctic",
                    details: "circle_of_the_land_arctic_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.hold_person,
                      },
                      {
                        level: 3,
                        spell: spells.spike_growth,
                      },
                      {
                        level: 5,
                        spell: spells.slow,
                      },
                      {
                        level: 5,
                        spell: spells.sleet_storm,
                      },
                      {
                        level: 7,
                        spell: spells.ice_storm,
                      },
                      {
                        level: 7,
                        spell: spells.freedom_of_movement,
                      },
                      {
                        level: 9,
                        spell: spells.cone_of_cold,
                      },
                      {
                        level: 9,
                        spell: spells.commune_with_nature,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_swamp",
                    details: "circle_of_the_land_swamp_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.melfs_acid_arrow,
                      },
                      {
                        level: 3,
                        spell: spells.darkness,
                      },
                      {
                        level: 5,
                        spell: spells.stinking_cloud,
                      },
                      {
                        level: 5,
                        spell: spells.water_walk,
                      },
                      {
                        level: 7,
                        spell: spells.locate_creature,
                      },
                      {
                        level: 7,
                        spell: spells.freedom_of_movement,
                      },
                      {
                        level: 9,
                        spell: spells.scrying,
                      },
                      {
                        level: 9,
                        spell: spells.insect_plague,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_mountain",
                    details: "circle_of_the_land_mountain_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.spider_climb,
                      },
                      {
                        level: 3,
                        spell: spells.spike_growth,
                      },
                      {
                        level: 5,
                        spell: spells.lightning_bolt,
                      },
                      {
                        level: 5,
                        spell: spells.meld_into_stone,
                      },
                      {
                        level: 7,
                        spell: spells.stone_shape,
                      },
                      {
                        level: 7,
                        spell: spells.stoneskin,
                      },
                      {
                        level: 9,
                        spell: spells.wall_of_stone,
                      },
                      {
                        level: 9,
                        spell: spells.passwall,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_forest",
                    details: "circle_of_the_land_forest_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.barkskin,
                      },
                      {
                        level: 3,
                        spell: spells.spider_climb,
                      },
                      {
                        level: 5,
                        spell: spells.call_lightning,
                      },
                      {
                        level: 5,
                        spell: spells.plant_growth,
                      },
                      {
                        level: 7,
                        spell: spells.divination,
                      },
                      {
                        level: 7,
                        spell: spells.freedom_of_movement,
                      },
                      {
                        level: 9,
                        spell: spells.tree_stride,
                      },
                      {
                        level: 9,
                        spell: spells.commune_with_nature,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_grassland",
                    details: "circle_of_the_land_grassland_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.pass_without_trace,
                      },
                      {
                        level: 3,
                        spell: spells.invisibility,
                      },
                      {
                        level: 5,
                        spell: spells.daylight,
                      },
                      {
                        level: 5,
                        spell: spells.haste,
                      },
                      {
                        level: 7,
                        spell: spells.divination,
                      },
                      {
                        level: 7,
                        spell: spells.freedom_of_movement,
                      },
                      {
                        level: 9,
                        spell: spells.dream,
                      },
                      {
                        level: 9,
                        spell: spells.insect_plague,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_desert",
                    details: "circle_of_the_land_desert_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.blur,
                      },
                      {
                        level: 3,
                        spell: spells.silence,
                      },
                      {
                        level: 5,
                        spell: spells.protection_from_energy,
                      },
                      {
                        level: 5,
                        spell: spells.create_food_and_water,
                      },
                      {
                        level: 7,
                        spell: spells.hallucinatory_terrain,
                      },
                      {
                        level: 7,
                        spell: spells.blight,
                      },
                      {
                        level: 9,
                        spell: spells.wall_of_stone,
                      },
                      {
                        level: 3,
                        spell: spells.insect_plague,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_coast",
                    details: "circle_of_the_land_coast_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.mirror_image,
                      },
                      {
                        level: 3,
                        spell: spells.misty_step,
                      },
                      {
                        level: 5,
                        spell: spells.water_breathing,
                      },
                      {
                        level: 5,
                        spell: spells.water_walk,
                      },
                      {
                        level: 7,
                        spell: spells.control_water,
                      },
                      {
                        level: 7,
                        spell: spells.freedom_of_movement,
                      },
                      {
                        level: 9,
                        spell: spells.scrying,
                      },
                      {
                        level: 9,
                        spell: spells.conjure_elemental,
                      },
                    ],
                  },
                  {
                    name: "circle_of_the_land_underdark",
                    details: "circle_of_the_land_underdark_details",

                    spells: [
                      {
                        level: 3,
                        spell: spells.spider_climb,
                      },
                      {
                        level: 3,
                        spell: spells.web,
                      },
                      {
                        level: 5,
                        spell: spells.gaseous_form,
                      },
                      {
                        level: 5,
                        spell: spells.stinking_cloud,
                      },
                      {
                        level: 7,
                        spell: spells.greater_invisibility,
                      },
                      {
                        level: 7,
                        spell: spells.stone_shape,
                      },
                      {
                        level: 9,
                        spell: spells.insect_plague,
                      },
                      {
                        level: 9,
                        spell: spells.cloudkill,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "circle_of_the_moon",
            details: "circle_of_the_moon_details",

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
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
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
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
            ],
          },
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
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
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 2,
        list: [
          {
            name_set: items.shield.name,
            equipment: [{ inventory: [[items.shield, 1]] }],
            spells: [
              {
                spell: spells.prepare_shield,
              },
            ],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            name_set: weapons.light_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.dart.name,
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            name_set: weapons.shortbow.name,
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            name_set: weapons.sling.name,
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
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.scimitar.name,
            equipment: [{ weapon: [[weapons.scimitar, 1]] }],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 3,
        name: "spells_0",
        select: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        list: [
          //spells[0] druid
          {
            name_set: spells.shillelagh[0].name,
            spells: [{ level: 1, spell: spells.shillelagh }],
          },
          {
            name_set: spells.druidcraft[0].name,
            spells: [{ level: 1, spell: spells.druidcraft }],
          },
          {
            name_set: spells.ray_of_frost[0].name,
            spells: [{ level: 1, spell: spells.ray_of_frost }],
          },
          {
            name_set: spells.mending[0].name,
            spells: [{ level: 1, spell: spells.mending }],
          },
          {
            name_set: spells.resistance[0].name,
            spells: [{ level: 1, spell: spells.resistance }],
          },
          {
            name_set: spells.produce_flame[0].name,
            spells: [{ level: 1, spell: spells.produce_flame }],
          },
          {
            name_set: spells.thorn_whip[0].name,
            spells: [{ level: 1, spell: spells.thorn_whip }],
          },
          {
            name_set: spells.guidance[0].name,
            spells: [{ level: 1, spell: spells.guidance }],
          },
          {
            name_set: spells.poison_spray[0].name,
            spells: [{ level: 1, spell: spells.poison_spray }],
          },
        ],
      },
      {
        type: "spells",
        position: 4,
        name: "spells",
        select: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ],
        foo: "Sel_Plus_WIS_Min1",
        mana_min: 1,
        mana_max: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9],
        filter: { classes: ["druid"], }
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // Almost 20 (spells)

  // NOTE - Warlock

  warlock: {
    name: "warlock",
    details: "warlock_details",

    hp_dice: 8,

    proficiencies: {
      armor: [armory.light],
      weapons: [weaponry.simple],
      tools: [],
      languages: [],
    },

    saving: ["wisdom", "charisma"],
    stats_base: [
      "charisma",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "strength",
    ],
    spell_attribute: "charisma",

    charges: [
      {
        level: 1,
        name: "spell_slots",
        type: "short_rest",
        list: [
          ["[1]", 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[2]", 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[3]", 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[4]", 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
        ],
      },
      {
        level: 11,
        name: "arcanum_slots",
        type: "long_rest",
        list: [
          ["[6]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          ["[7]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          ["[8]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
          ["[9]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        ],
      },
      {
        level: 20,
        name: "inner_reserve_slots",
        type: "long_rest",
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        ],
      },
    ],

    spells: [
      {
        level: 20,
        spell: spells.restore_mana_warlock,
      },
    ],

    equipment: [
      {
        level: 1,
        armor: [[armors.leather, 1]],
        weapon: [
          [weapons.dagger, 2],
          [weapons.unarmed, 1],
        ],
      },
    ],

    settings: [
      {
        level: 1,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "archifey",
            details: "archifey_details",

            charges: [
              {
                level: 1,
                name: "fey_presence_slots",
                type: "short_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
              {
                level: 6,
                name: "misty_escape_slots",
                type: "short_rest",
                list: [
                  [
                    "",
                    0,
                    0,
                    0,
                    0,
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
                  ],
                ],
              },
              {
                level: 14,
                name: "dark_delirium_slots",
                type: "short_rest",
                list: [
                  [
                    "",
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
                    1,
                    1,
                    1,
                    1,
                    1,
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 10,
                type: "advantage",
                keyword: "immunity",
                details: "charm_against",
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.fey_presence,
              },
              {
                level: 6,
                spell: spells.misty_escape,
              },
              {
                level: 10,
                spell: spells.beguiling_defenses,
              },
              {
                level: 14,
                spell: spells.dark_delirium,
              },
            ],

            settings: [
              {
                type: "spells",
                position: 3,
                name: "spells",
                select: [
                  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14,
                  14, 15, 15,
                ],
                mana_min: 1,
                mana_max: [
                  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                ],
                filter: { classes: ["warlock"], },
                extra_items: [
                  // Архифея позволяет вам при изучении заклинаний колдуна вьібирать из более широкого списка. В ваш список заклинаний колдуна добавляются следующие заклинания.
                  {
                    level: 1,
                    name_set: spells.faerie_fire[1].name,
                    spells: [{ level: 1, spell: spells.faerie_fire,}],
                  },
                  {
                    level: 1,
                    name_set: spells.sleep[1].name,
                    spells: [{ level: 1, spell: spells.sleep,}],
                  },
                  {
                    level: 3,
                    name_set: spells.phantasmal_force[2].name,
                    spells: [{ level: 3, spell: spells.phantasmal_force,}],
                  },
                  {
                    level: 3,
                    name_set: spells.calm_emotions[2].name,
                    spells: [{ level: 3, spell: spells.calm_emotions,}],
                  },
                  {
                    level: 5,
                    name_set: spells.blink[3].name,
                    spells: [{ level: 5, spell: spells.blink,}],
                  },
                  {
                    level: 5,
                    name_set: spells.plant_growth[3].name,
                    spells: [{ level: 5, spell: spells.plant_growth,}],
                  },
                  {
                    level: 7,
                    name_set: spells.greater_invisibility[4].name,
                    spells: [{ level: 7, spell: spells.greater_invisibility,}],
                  },
                  {
                    level: 7,
                    name_set: spells.dominate_beast[4].name,
                    spells: [{ level: 7, spell: spells.dominate_beast,}],
                  },
                  {
                    level: 9,
                    name_set: spells.dominate_person[5].name,
                    spells: [{ level: 9, spell: spells.dominate_person,}],
                  },
                  {
                    level: 9,
                    name_set: spells.seeming[5].name,
                    spells: [{ level: 9, spell: spells.seeming,}],
                  },
                ],
              },
            ],
          },
          {
            name: "fiend",
            details: "fiend_details",

            fines: [
              {
                level: 10,
                type: "resistance",
                keyword: "resistance",
                details: "one_choose_every_short_rest",
              },
            ],

            charges: [
              {
                level: 1,
                name: "dark_ones_own_luck_slots",
                type: "short_rest",
                list: [
                  [
                    "d10",
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
                    1,
                  ],
                ],
              },
              {
                level: 14,
                name: "hurl_through_hell_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                level: 1,
                spell: spells.dark_ones_blessing,
              },
              {
                level: 6,
                spell: spells.dark_ones_own_luck,
              },
              {
                level: 14,
                spell: spells.hurl_through_hell,
              },
            ],

            settings: [
              {
                type: "spells",
                position:3,
                name: "spells",
                select: [
                  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14,
                  14, 15, 15,
                ],
                mana_min: 1,
                mana_max: [
                  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                ],
                filter: { classes: ["warlock"], },
                extra_items: [
                  // Исчадие позволяет вам при изучении заклинаний колдуна вьібирать из более широкого списка. В ваш список заклинаний колдуна добавляются следующие заклинания.
                  {
                    level: 1,
                    name_set: spells.burning_hands[1].name,
                    spells: [{ level: 1, spell: spells.burning_hands,}],
                  },
                  {
                    level: 1,
                    name_set: spells.command[1].name,
                    spells: [{ level: 1, spell: spells.command,}],
                  },
                  {
                    level: 3,
                    name_set: spells.blindness_deafness[2].name,
                    spells: [{ level: 3, spell: spells.blindness_deafness,}],
                  },
                  {
                    level: 3,
                    name_set: spells.scorching_ray[2].name,
                    spells: [{ level: 3, spell: spells.scorching_ray,}],
                  },
                  {
                    level: 5,
                    name_set: spells.stinking_cloud[3].name,
                    spells: [{ level: 5, spell: spells.stinking_cloud,}],
                  },
                  {
                    level: 5,
                    name_set: spells.fireball[3].name,
                    spells: [{ level: 5, spell: spells.fireball,}],
                  },
                  {
                    level: 7,
                    name_set: spells.wall_of_fire[4].name,
                    spells: [{ level: 7, spell: spells.wall_of_fire,}],
                  },
                  {
                    level: 7,
                    name_set: spells.fire_shield[4].name,
                    spells: [{ level: 7, spell: spells.fire_shield,}],
                  },
                  {
                    level: 9,
                    name_set: spells.flame_strike[5].name,
                    spells: [{ level: 9, spell: spells.flame_strike,}],
                  },
                  {
                    level: 9,
                    name_set: spells.hallow[5].name,
                    spells: [{ level: 9, spell: spells.hallow,}],
                  },
                ],
              },
            ],
          },
          {
            name: "great_old_one",
            details: "great_old_one_details",

            fines: [
              {
                level: 1,
                type: "plus",
                keyword: "able_to_speak",
                details: "telepatic_30f",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "immunity",
                details: "to_read_thoughts",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "resistance",
                details: "psychic_damage_against",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "damage_back",
                details: "psychic_w",
              },
            ],

            charges: [
              {
                level: 6,
                name: "entropic_ward_slots",
                type: "short_rest",
                list: [
                  [
                    "",
                    0,
                    0,
                    0,
                    0,
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
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 6,
                spell: spells.entropic_ward,
              },
              {
                level: 14,
                spell: spells.create_thrall,
              },
            ],

            settings: [
              {
                type: "spells",
                position: 3,
                name: "spells",
                select: [
                  2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14,
                  14, 15, 15,
                ],
                mana_min: 1,
                mana_max: [
                  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                ],
                filter: { classes: ["warlock"],},
                extra_items: [
                  // Ваш покравитель позволяет вам при изучении заклинаний колдуна вьібирать из более широкого списка. В ваш список заклинаний колдуна добавляются следующие заклинания.
                  {
                    level: 1,
                    name_set: spells.dissonant_whispers[1].name,
                    spells: [{ level: 1, spell: spells.dissonant_whispers,}],
                  },
                  {
                    level: 1,
                    name_set: spells.tashas_hideous_laughter[1].name,
                    spells: [{ level: 1, spell: spells.tashas_hideous_laughter,}],
                  },
                  {
                    level: 3,
                    name_set: spells.phantasmal_force[2].name,
                    spells: [{ level: 3, spell: spells.phantasmal_force,}],
                  },
                  {
                    level: 3,
                    name_set: spells.detect_thoughts[2].name,
                    spells: [{ level: 3, spell: spells.detect_thoughts,}],
                  },
                  {
                    level: 5,
                    name_set: spells.clairvoyance[3].name,
                    spells: [{ level: 5, spell: spells.clairvoyance,}],
                  },
                  {
                    level: 5,
                    name_set: spells.sending[3].name,
                    spells: [{ level: 5, spell: spells.sending,}],
                  },
                  {
                    level: 7,
                    name_set: spells.dominate_beast[4].name,
                    spells: [{ level: 7, spell: spells.dominate_beast,}],
                  },
                  {
                    level: 7,
                    name_set: spells.evards_black_tentacles[4].name,
                    spells: [{ level: 7, spell: spells.evards_black_tentacles,}],
                  },
                  {
                    level: 9,
                    name_set: spells.dominate_person[5].name,
                    spells: [{ level: 9, spell: spells.dominate_person,}],
                  },
                  {
                    level: 9,
                    name_set: spells.telekinesis[5].name,
                    spells: [{ level: 9, spell: spells.telekinesis,}],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 3,
        type: "custom",
        position: 2,
        name: "pact_item",
        select: 1,
        list: [
          {
            name: "pact_of_the_tome",
            details: "pact_of_the_tome_details",

            equipment: [
              {
                inventory: [[items.book_of_shadows, 1]],
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                position: 3,
                name: "spells_0",
                select: 3,
                list: [
                  {
                    name_set: spells.acid_splash[0].name,
                    spells: [{ level: 3, spell: spells.acid_splash }],
                  },
                  {
                    name_set: spells.mage_hand[0].name,
                    spells: [{ level: 3, spell: spells.mage_hand }],
                  },
                  {
                    name_set: spells.friends[0].name,
                    spells: [{ level: 3, spell: spells.friends }],
                  },
                  {
                    name_set: spells.shillelagh[0].name,
                    spells: [{ level: 3, spell: spells.shillelagh }],
                  },
                  {
                    name_set: spells.blade_ward[0].name,
                    spells: [{ level: 3, spell: spells.blade_ward }],
                  },
                  {
                    name_set: spells.vicious_mockery[0].name,
                    spells: [{ level: 3, spell: spells.vicious_mockery }],
                  },
                  {
                    name_set: spells.druidcraft[0].name,
                    spells: [{ level: 3, spell: spells.druidcraft }],
                  },
                  {
                    name_set: spells.chill_touch[0].name,
                    spells: [{ level: 3, spell: spells.chill_touch }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ level: 3, spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.minor_illusion[0].name,
                    spells: [{ level: 3, spell: spells.minor_illusion }],
                  },
                  {
                    name_set: spells.true_strike[0].name,
                    spells: [{ level: 3, spell: spells.true_strike }],
                  },
                  {
                    name_set: spells.eldritch_blast[0].name,
                    spells: [{ level: 3, spell: spells.eldritch_blast }],
                  },
                  {
                    name_set: spells.fire_bolt[0].name,
                    spells: [{ level: 3, spell: spells.fire_bolt }],
                  },
                  {
                    name_set: spells.dancing_lights[0].name,
                    spells: [{ level: 3, spell: spells.dancing_lights }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ level: 3, spell: spells.mending }],
                  },
                  {
                    name_set: spells.light[0].name,
                    spells: [{ level: 3, spell: spells.light }],
                  },
                  {
                    name_set: spells.sacred_flame[0].name,
                    spells: [{ level: 3, spell: spells.sacred_flame }],
                  },
                  {
                    name_set: spells.message[0].name,
                    spells: [{ level: 3, spell: spells.message }],
                  },
                  {
                    name_set: spells.resistance[0].name,
                    spells: [{ level: 3, spell: spells.resistance }],
                  },
                  {
                    name_set: spells.produce_flame[0].name,
                    spells: [{ level: 3, spell: spells.produce_flame }],
                  },
                  {
                    name_set: spells.thorn_whip[0].name,
                    spells: [{ level: 3, spell: spells.thorn_whip }],
                  },
                  {
                    name_set: spells.guidance[0].name,
                    spells: [{ level: 3, spell: spells.guidance }],
                  },
                  {
                    name_set: spells.spare_the_dying[0].name,
                    spells: [{ level: 3, spell: spells.spare_the_dying }],
                  },
                  {
                    name_set: spells.prestidigitation[0].name,
                    spells: [{ level: 3, spell: spells.prestidigitation }],
                  },
                  {
                    name_set: spells.thaumaturgy[0].name,
                    spells: [{ level: 3, spell: spells.thaumaturgy }],
                  },
                  {
                    name_set: spells.shocking_grasp[0].name,
                    spells: [{ level: 3, spell: spells.shocking_grasp }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ level: 3, spell: spells.poison_spray }],
                  },
                ],
              },
            ],
          },
          {
            name: "pact_of_the_blade",
            details: "pact_of_the_blade_details",

            spells: [
              {
                level: 3,
                spell: spells.create_weapon,
              },
              {
                level: 3,
                spell: spells.convert_weapon,
              },
            ],
          },
          {
            name: "pact_of_the_chain",
            details: "pact_of_the_chain_details",

            spells: [
              {
                level: 3,
                spell: spells.find_familiar_warlock,
              },
            ],
          },
          {
            name: "pact_of_the_talisman",
            details: "pact_of_the_talisman_details",

            charges: [
              {
                level: 3,
                name: "talisman_slots",
                type: "long_rest",
                list: [
                  [
                    "d4",
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    4,
                    4,
                    5,
                    5,
                    5,
                    5,
                    6,
                    6,
                    6,
                    6,
                  ],
                ],
              },
            ],

            equipment: [
              {
                inventory: [[items.talisman, 1]],
              },
            ],

            spells: [
              {
                level: 3,
                spell: spells.help_of_talisman_warlock,
              },
              {
                level: 3,
                spell: spells.create_talisman_warlock,
              },
            ],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        position: 2,
        name: "invocations",
        select: [0, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8],
        list: [
          {
            level: 2,
            name: "gaze_of_two_minds",

            spells: [
              {
                level: 2,
                spell: spells.gaze_of_two_minds,
              },
            ],
          },
          {
            level: 2,
            name: "thief_of_five_fates",

            spells: [
              {
                level: 2,
                spell: spells.bane_warlock,
              },
            ],
          },
          {
            level: 2,
            name: "eyes_of_the_rune_keeper",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "able_to_read",
                details: "any_texts",
              },
            ],
          },
          
          {
            level: 2,
            name: "armor_of_shadows",

            spells: [
              {
                level: 2,
                spell: spells.mage_armor_shadow,
              },
            ],
          },
          {
            level: 2,
            name: "devils_sight",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "able_to_see",
                details: "in_magic_darkness",
              },
            ],

            qualities: [
              {
                level: 2,
                name: "vision_night",
                num: 120,
                show: true,
              },
            ],
          },
          {
            level: 2,
            name: "beast_speech",

            spells: [
              {
                level: 2,
                spell: spells.speak_with_animals_warlock,
              },
            ],
          },
          {
            level: 2,
            name: "mask_of_many_faces",

            spells: [
              {
                level: 2,
                spell: spells.disguise_self_warlock,
              },
            ],
          },
          {
            level: 2,
            name: "fiendish_vigor",

            spells: [
              {
                level: 2,
                spell: spells.false_life_warlock,
              },
            ],
          },
          {
            level: 2,
            name: "beguiling_influence",

            skills: [
              {
                name: "deception",
                num: "Mastery",
              },
              {
                name: "persuasion",
                num: "Mastery",
              },
            ],
          },
          {
            level: 2,
            name: "eldritch_sight",

            spells: [
              {
                level: 2,
                spell: spells.detect_magic_warlock,
              },
            ],
          },
          {
            level: 2,
            name: "misty_visions",

            spells: [
              {
                level: 2,
                spell: spells.silent_image_warlock,
              },
            ],
          },
          {
            level: 2,
            condition: "condition_spell_eldritch_blast",
            name: "eldritch_spear",

            spells: [
              {
                level: 2,
                spell: spells.eldritch_blast_distant,
              },
            ],
          },
          {
            level: 2,
            condition: "condition_spell_eldritch_blast",
            name: "agonizing_blast",

            spells: [
              {
                level: 2,
                spell: spells.eldritch_blast_damage,
              },
            ],
          },
          {
            level: 2,
            condition: "condition_spell_eldritch_blast",
            name: "repelling_blast",

            spells: [
              {
                level: 2,
                spell: spells.eldritch_blast_push,
              },
            ],
          },
          {
            level: 2,
            condition: "condition_pact_of_the_tome",
            name: "book_of_antient_secrets",

            spells: [
              {
                level: 2,
                spell: spells.learn_ritual,
              },
            ],
          },
          {
            level: 2,
            condition: "condition_pact_of_the_chain",
            name: "voice_of_the_chain_master",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "able_to_speak",
                details: "through_familiar",
              },
            ],
          },
          {
            level: 5,
            condition: "condition_pact_of_the_blade",
            name: "thirsting_blade",

            spells: [
              {
                level: 5,
                spell: spells.extra_attack_warlock,
              },
            ],
          },
          {
            level: 12,
            condition: "condition_pact_of_the_blade",
            name: "lifedrinker",

            spells: [
              {
                level: 12,
                spell: spells.lifedrinker,
              },
            ],
          },
          {
            level: 5,
            name: "sign_of_ill_omen",

            spells: [
              {
                level: 5,
                spell: spells.bestow_curse_warlock,
                //Вьі можете один раз сотворить заклинание, используя ячейку заклинаний колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.
              },
            ],
          },
          {
            level: 5,
            name: "one_with_shadows",

            spells: [
              {
                level: 5,
                spell: spells.dissapear,
              },
            ],
          },
          {
            level: 5,
            name: "mire_the_mind",

            spells: [
              {
                level: 5,
                spell: spells.slow_warlock,
                //Вьі можете один раз сотворить заклинание, используя ячейку заклинаний колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.
              },
            ],
          },
          {
            level: 7,
            name: "bewitching_whispers",


            spells: [
              {
                level: 7,
                spell: spells.compulsion_warlock,
                // Вьі можете один раз сотворить заклинание принуждение, используя ячейку заклинаний колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.
              },
            ],
          },
          {
            level: 7,
            name: "sculptor_of_flesh",

            spells: [
              {
                level: 7,
                spell: spells.polymorph_warlock,
                // Вьі можете один раз сотворить заклинание, используя ячейку заклинаний колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.
              },
            ],
          },
          {
            level: 7,
            name: "dreadful_word",
            spells: [
              {
                level: 7,
                spell: spells.confusion_warlock,
                // Вьі можете один раз сотворить заклинание, используя ячейку заклинаний колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.
              },
            ],
          },
          {
            level: 9,
            name: "ascendant_step",
            spells: [
              {
                level: 9,
                spell: spells.levitate_warlock,
                // Вьі можете неограниченно накладьівать на себя заклинание левитация [levitate], не тратя ячейки заклинаний и материальньіе компонентьі.
              },
            ],
          },
          {
            level: 9,
            name: "whispers_of_the_grave",
            spells: [
              {
                level: 9,
                spell: spells.speak_with_dead_warlock,
                // Вьі можете неограниченно накладьівать на себя заклинание, не тратя ячейки заклинаний и материальньіе компонентьі.
              },
            ],
          },
          {
            level: 9,
            name: "overworldly_leap",
            spells: [
              {
                level: 9,
                spell: spells.jump_warlock,
                // Вьі можете неограниченно накладьівать на себя заклинание, не тратя ячейки заклинаний и материальньіе компонентьі.
              },
            ],
          },
          {
            level: 9,
            name: "minions_of_chaos",

            spells: [
              {
                level: 9,
                spell: spells.conjure_elemental_warlock,
                // Вьі можете один раз сотворить заклинание, используя ячейку заклинаний колдуна. Вьі не можете сделать єто повторно, пока не окончите продолжительньій отдьіх.
              },
            ],
          },
          {
            level: 15,
            name: "witch_sight",

            fines: [
              {
                level: 15,
                type: "plus",
                keyword: "able_to_see",
                details: "illusion_shifters_30f",
              },
            ],
          },
          {
            level: 15,
            name: "visions_of_distant_realms",

            spells: [
              {
                level: 15,
                spell: spells.arcane_eye_warlock,
                // Вьі можете неограниченно накладьівать на себя заклинание, не тратя ячейки заклинаний и материальньіе компонентьі.
              },
            ],
          },
          {
            level: 15,
            name: "master_of_myriad_forms",
            
            spells: [
              {
                level: 15,
                spell: spells.alter_self_warlock,
                // Вьі можете неограниченно накладьівать на себя заклинание, не тратя ячейки заклинаний и материальньіе компонентьі.
              },
            ],
          },
          {
            level: 15,
            name: "chains_of_carceri",
            spells: [
              {
                level: 15,
                spell: spells.hold_monster_warlock,
              },
            ],
          },

          // Не каноничньіе, как оказалось
          // {
          //   level: 2,
          //   condition: "condition_pact_of_the_tome",
          //   name: "aspect_of_the_moon",

          //   fines: [
          //     {
          //       type: "plus",
          //       keyword: "none",
          //       details: "sleep",
          //     },
          //     {
          //       type: "resistance",
          //       keyword: "immunity",
          //       details: "sleep_against",
          //     },
          //   ],
          // },
          // {
          //   level: 2,
          //   condition: "condition_pact_of_the_chain",
          //   name: "gift_of_the_ever_living_ones",

          //   fines: [
          //     {
          //       type: "advantage",
          //       keyword: "always_max_heal",
          //       details: "if_familiar_is_in_100f",
          //     },
          //   ],
          // },
          // {
          //   level: 2,
          //   condition: "condition_pact_of_the_chain",
          //   name: "investment_of_the_chain_master",

          //   spells: [
          //     {
          //       level: 2,
          //       spell: spells.investment_of_the_chain_master,
          //     }
          //   ]
          // },
          // {
          //   level: 2,
          //   condition: "condition_spell_eldritch_blast",
          //   name: "lance_of_lethargy",

          //   spells: [
          //     {
          //       level: 2,
          //       spell: spells.eldritch_blast_slow,
          //     }
          //   ]
          // },
          // {
          //   level: 2,
          //   condition: "condition_pact_of_the_talisman",
          //   name: "rebuke_of_the_talisman",

          //   spells: [
          //     {
          //       level: 2,
          //       spell: spells.rebuke_of_the_talisman,
          //     }
          //   ],
          // },
          // {
          //   level: 2,
          //   name: "eldritch_mind",

          //   fines: [
          //     {
          //       type: "advantage",
          //       keyword: "advantage",
          //       details: "on_concentration",
          //     },
          //   ],
          // },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
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
            name_set: "intimidation",
            skills: [
              {
                name: "intimidation",
                num: "Mastery",
                details: "intimidation_details",
              },
            ],
          },
          {
            name_set: "history",
            skills: [
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
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
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.light_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            name_set: weapons.dart.name,
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            name_set: weapons.shortbow.name,
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            name_set: weapons.sling.name,
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
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            name_set: weapons.light_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.dart.name,
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            name_set: weapons.shortbow.name,
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            name_set: weapons.sling.name,
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
        type: "custom",
        position: 14,
        name: "equipment",
        select: 1,
        list: [
          {
            name_set: items.component_pouch.name,
            equipment: [{ inventory: [[items.component_pouch, 1]] }],
          },
          {
            name_set: items.focus.name,
            equipment: [{ inventory: [[items.focus, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.scholars.name,
            equipment: [{ inventory_packs: [[packs.scholars, 1]] }],
          },
          {
            name_set: packs.dungeoneers.name,
            equipment: [{ inventory_packs: [[packs.dungeoneers, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 3,
        name: "spells_0",
        select: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        list: [
          //spells[0] warlock
          {
            name_set: spells.mage_hand[0].name,
            spells: [{ level: 1, spell: spells.mage_hand }],
          },
          {
            name_set: spells.friends[0].name,
            spells: [{ level: 1, spell: spells.friends }],
          },
          {
            name_set: spells.blade_ward[0].name,
            spells: [{ level: 1, spell: spells.blade_ward }],
          },
          {
            name_set: spells.chill_touch[0].name,
            spells: [{ level: 1, spell: spells.chill_touch }],
          },
          {
            name_set: spells.minor_illusion[0].name,
            spells: [{ level: 1, spell: spells.minor_illusion }],
          },
          {
            name_set: spells.true_strike[0].name,
            spells: [{ level: 1, spell: spells.true_strike }],
          },
          {
            name_set: spells.eldritch_blast[0].name,
            spells: [{ level: 1, spell: spells.eldritch_blast }],
          },
          {
            name_set: spells.prestidigitation[0].name,
            spells: [{ level: 1, spell: spells.prestidigitation }],
          },
          {
            name_set: spells.poison_spray[0].name,
            spells: [{ level: 1, spell: spells.poison_spray }],
          },
        ],
      },
      {
          level: 11,
          type: "spells",
          position: 4,
          name: "arcanum_6",
          select: 1,
          mana_min: 6,
          mana_max: 6,
          filter: { classes: ["warlock"], }
      },
      {
          level: 13,
          type: "spells",
          position: 4,
          name: "arcanum_7",
          select: 1,
          mana_min: 7,
          mana_max: 7,
          filter: { classes: ["warlock"], }
      },
      {
          level: 15,
          type: "spells",
          position: 4,
          name: "arcanum_8",
          select: 1,
          mana_min: 8,
          mana_max: 8,
          filter: { classes: ["warlock"], }
      },
      {
          level: 17,
          type: "spells",
          position: 4,
          name: "arcanum_9",
          select: 1,
          mana_min: 9,
          mana_max: 9,
          filter: { classes: ["warlock"], }
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // 20 без Арканумов, воззваний, заклинаний

  //NOTE - sorcerer

  sorcerer: {
    name: "sorcerer",
    details: "sorcerer_details",

    hp_dice: 6,

    proficiencies: {
      weapons: [
        weaponry.quarterstaffs,
        weaponry.daggers,
        weaponry.light_arbalets,
        weaponry.darts,
        weaponry.slings,
      ],
    },

    saving: ["constitution", "charisma"],
    stats_base: [
      "charisma",
      "dexterity",
      "constitution",
      "wisdom",
      "intelligence",
      "strength",
    ],
    spell_attribute: "charisma",

    charges: [
      {
        level: 2,
        name: "sorcery_slots",
        type: "long_rest",
        list: [
          [
            "",
            0,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
          ],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
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
        level: 1,
        weapon: [
          [weapons.dagger, 2],
          [weapons.unarmed, 1],
        ],
      },
    ],

    fines: [
      {
        level: 20,
        type: "plus",
        keyword: "short_rest",
        details: "to_restore_4_sorcery_points",
      },
    ],

    spells: [
      {
        level: 2,
        spell: spells.sorcery_to_mana,
      },
      {
        level: 2,
        spell: spells.mana_to_sorcery,
      },
      {
        level: 5,
        spell: spells.magical_direction,
      },
    ],

    settings: [
      {
        level: 1,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "sorcerer_dragon_blood",
            details: "sorcerer_dragon_blood_details",

            proficiencies: {
              languages: [lang.dragon],
            },

            hp_bonus: [1, 1],

            fines: [
              {
                level: 1,
                type: "resistance",
                keyword: "no_armor_protection",
                details: "plus_3_armor",
              },
              {
                level: 1,
                type: "plus",
                keyword: "proficiency_bonus",
                details: "to_charisma_dragon",
              },
            ],

            specials: [
              {
                level: 1,
                type: "armor_bonus",
                armor_bonus: 3,
              },
            ],

            spells: [
              {
                level: 14,
                spell: spells.dragon_wings,
              },
              {
                level: 18,
                spell: spells.dragon_presence,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                position: 1,
                name: "dragon_ancestor",
                select: 1,
                list: [
                  {
                    name: "red_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_fire,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_fire,
                      },
                    ],
                  },
                  {
                    name: "brass_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_fire,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_fire,
                      },
                    ],
                  },
                  {
                    name: "golden_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_fire,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_fire,
                      },
                    ],
                  },
                  {
                    name: "silver_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_cold,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_cold,
                      },
                    ],
                  },
                  {
                    name: "white_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_cold,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_cold,
                      },
                    ],
                  },
                  {
                    name: "blue_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_electricity,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_electricity,
                      },
                    ],
                  },
                  {
                    name: "bronze_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_electricity,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_electricity,
                      },
                    ],
                  },
                  {
                    name: "copper_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_acid,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_acid,
                      },
                    ],
                  },
                  {
                    name: "black_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_acid,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_acid,
                      },
                    ],
                  },
                  {
                    name: "green_dragonborn_sorcerer",

                    spells: [
                      {
                        level: 6,
                        spell: spells.elemental_affinity_poison,
                      },
                      {
                        level: 6,
                        spell: spells.dragon_resistanse_poison,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "sorcerer_wild_magic",
            details: "sorcerer_wild_magic_details",

            charges: [
              {
                level: 2,
                name: "wild_magic_surge_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.wild_magic_surge,
              },
              {
                level: 6,
                spell: spells.bend_luck,
              },
            ],

            fines: [
              {
                level: 1,
                type: "plus",
                keyword: "random_magic_effect",
                details: "on_casting_spell_mana_and_used_chaos",
              },
              {
                level: 14,
                type: "advantage",
                keyword: "advantage",
                details: "on_random_magic_effect",
              },
              {
                level: 18,
                type: "plus",
                keyword: "extra_dice_damage",
                details: "on_max_dice_result_in_spell",
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
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
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
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
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
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
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.light_crossbow.name,
            equipment: [
              {
                weapon: [[weapons.light_crossbow, 1]],
                inventory: [[items.bolt, 20]],
              },
            ],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.handaxe.name,
            equipment: [{ weapon: [[weapons.handaxe, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
          {
            name_set: weapons.dart.name,
            equipment: [
              {
                weapon: [[weapons.dart, 10]],
              },
            ],
          },
          {
            name_set: weapons.shortbow.name,
            equipment: [
              {
                weapon: [[weapons.shortbow, 1]],
                inventory: [[items.arrow, 20]],
              },
            ],
          },
          {
            name_set: weapons.sling.name,
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
        type: "custom",
        position: 13,
        name: "inventory",
        select: 1,
        list: [
          {
            name_set: items.component_pouch.name,
            equipment: [{ inventory: [[items.component_pouch, 1]] }],
          },
          {
            name_set: items.focus.name,
            equipment: [{ inventory: [[items.focus, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.dungeoneers.name,
            equipment: [{ inventory_packs: [[packs.dungeoneers, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 3,
        name: "spells_0",
        select: [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        list: [
          //spells[0] sorcerer
          {
            name_set: spells.acid_splash[0].name,
            spells: [{ level: 1, spell: spells.acid_splash }],
          },
          {
            name_set: spells.mage_hand[0].name,
            spells: [{ level: 1, spell: spells.mage_hand }],
          },
          {
            name_set: spells.friends[0].name,
            spells: [{ level: 1, spell: spells.friends }],
          },
          {
            name_set: spells.blade_ward[0].name,
            spells: [{ level: 1, spell: spells.blade_ward }],
          },
          {
            name_set: spells.chill_touch[0].name,
            spells: [{ level: 1, spell: spells.chill_touch }],
          },
          {
            name_set: spells.ray_of_frost[0].name,
            spells: [{ level: 1, spell: spells.ray_of_frost }],
          },
          {
            name_set: spells.minor_illusion[0].name,
            spells: [{ level: 1, spell: spells.minor_illusion }],
          },
          {
            name_set: spells.true_strike[0].name,
            spells: [{ level: 1, spell: spells.true_strike }],
          },
          {
            name_set: spells.fire_bolt[0].name,
            spells: [{ level: 1, spell: spells.fire_bolt }],
          },
          {
            name_set: spells.dancing_lights[0].name,
            spells: [{ level: 1, spell: spells.dancing_lights }],
          },
          {
            name_set: spells.mending[0].name,
            spells: [{ level: 1, spell: spells.mending }],
          },
          {
            name_set: spells.light[0].name,
            spells: [{ level: 1, spell: spells.light }],
          },
          {
            name_set: spells.message[0].name,
            spells: [{ level: 1, spell: spells.message }],
          },
          {
            name_set: spells.prestidigitation[0].name,
            spells: [{ level: 1, spell: spells.prestidigitation }],
          },
          {
            name_set: spells.shocking_grasp[0].name,
            spells: [{ level: 1, spell: spells.shocking_grasp }],
          },
          {
            name_set: spells.poison_spray[0].name,
            spells: [{ level: 1, spell: spells.poison_spray }],
          },
        ],
      },
      {
        level: 1,
        type: "spells",
        position: 4,
        name: "spells",
        select: [
          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15,
          15,
        ],
        mana_min: 1,
        mana_max: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9],
        filter: { classes: ["sorcerer"], }
      },
      {
        level: 3,
        type: "custom",
        position: 1,
        name: "metamagic",
        select: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
        list: [
          {
            name_set: spells.metamagic_careful[0].name,
            spells: [{ level: 3, spell: spells.metamagic_careful }],
          },
          {
            name_set: spells.metamagic_distant[0].name,
            spells: [{ level: 3, spell: spells.metamagic_distant }],
          },
          {
            name_set: spells.metamagic_empowered[0].name,
            spells: [{ level: 3, spell: spells.metamagic_empowered }],
          },
          {
            name_set: spells.metamagic_extended[0].name,
            spells: [{ level: 3, spell: spells.metamagic_extended }],
          },
          {
            name_set: spells.metamagic_heightened[0].name,
            spells: [{ level: 3, spell: spells.metamagic_heightened }],
          }, // непреодолимое
          {
            name_set: spells.metamagic_quickened[0].name,
            spells: [{ level: 3, spell: spells.metamagic_quickened }],
          },
          {
            name_set: spells.metamagic_subtle[0].name,
            spells: [{ level: 3, spell: spells.metamagic_subtle }],
          }, // неуловимое
          {
            name_set: spells.metamagic_transmuted[0].name,
            spells: [{ level: 3, spell: spells.metamagic_transmuted }],
          },
          {
            name_set: spells.metamagic_twinned[0].name,
            spells: [{ level: 3, spell: spells.metamagic_twinned }],
          },

          {
            name_set: spells.metamagic_seeking[0].name,
            spells: [{ level: 3, spell: spells.metamagic_seeking }],
          },
        ],
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // 20

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
        type: "long_rest",
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
        weapon: [[weapons.unarmed, 1]],
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
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "school_of_evocation",
            details: "school_of_evocation_details",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_evocation",
              },
              {
                level: 2,
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

            charges: [
              {
                level: 6,
                name: "movement_slots",
                type: "long_rest",
                list: [
                  [
                    "",
                    0,
                    0,
                    0,
                    0,
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
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_conjuration",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_concentration_damage",
              },
              {
                level: 14,
                type: "plus",
                keyword: "hp_30",
                details: "on_conjuration_creatures",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.small_conjuration,
              },
              {
                level: 6,
                spell: spells.safe_movement,
              },
              {
                level: 6,
                spell: spells.swap,
              },
            ],
          },
          {
            name: "school_of_illusion",
            details: "school_of_illusion_details",

            charges: [
              {
                level: 10,
                name: "self_illusion_slots",
                type: "short_rest",
                list: [
                  [
                    "",
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

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_illusion",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.minor_illusion,
              },
              {
                level: 6,
                spell: spells.transform_illusion,
              },
              {
                level: 10,
                spell: spells.self_illusion,
              },
              {
                level: 14,
                spell: spells.illusory_reality,
              },
            ],
          },
          {
            name: "school_of_necromancy",
            details: "school_of_necromancy_details",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_necromancy",
              },
              {
                level: 2,
                type: "plus",
                keyword: "heal",
                details: "from_spell_kill_necromancy",
              },
              {
                level: 6,
                type: "plus",
                keyword: "health_bonus",
                details: "lvl_to_animated_undead",
              },
              {
                level: 6,
                type: "plus",
                keyword: "mastery_bonus",
                details: "to_damage_to_animated_undead",
              },
              {
                level: 10,
                type: "resistance",
                keyword: "resistance",
                details: "on_necrotic_damage",
              },
              {
                level: 10,
                type: "plus",
                keyword: "immunity",
                details: "on_hp_reduction",
              },
            ],

            // Каждьій раз, когда вьі создаете нежить, используя заклинание школьі Некромантии, она получает дополнительньіе преимущества: -Максимум хитов создаваемой нежити увеличивается на значение, равное вашему уровню волшебника. -Создаваемьіе существа добавляют ваш бонус мастерства к броскам урона оружием.
            spells: [
              {
                level: 6,
                spell: spells.animate_dead_wizard,
              },
              {
                level: 14,
                spell: spells.control_undead,
              },
            ],
          },
          {
            name: "school_of_abjuration",
            details: "school_of_abjuration_details",

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_abjuration",
              },
              {
                level: 10,
                type: "plus",
                keyword: "mastery_bonus",
                details: "on_check_bjuration",
              },
              {
                level: 14,
                type: "advantage",
                keyword: "advantage",
                details: "on_saving_spells",
              },
              {
                level: 14,
                type: "resistance",
                keyword: "resistance",
                details: "on_damage_spells",
              },
            ],

            charges: [
              {
                level: 2,
                name: "magical_protection_slots",
                type: "long_rest",
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
                level: 2,
                spell: spells.magical_protection,
              },
            ],
          },
          {
            name: "school_of_enchantment",
            details: "school_of_enchantment_details",

            charges: [
              {
                level: 6,
                name: "instinct_charm_slots",
                type: "long_rest",
                list: [
                  [
                    "",
                    0,
                    0,
                    0,
                    0,
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
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_enchantment",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.hypnotic_look,
              },
              {
                level: 6,
                spell: spells.instinct_charm,
              },
              {
                level: 10,
                spell: spells.powerful_charm,
              },
              {
                level: 14,
                spell: spells.false_memories,
              },
              {
                level: 14,
                spell: spells.erase_memories,
              },
            ],
          },
          {
            name: "school_of_transmutation",
            details: "school_of_transmutation_details",

            charges: [
              {
                level: 10,
                name: "polymorph_slots",
                type: "short_rest",
                list: [
                  [
                    "",
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
              {
                level: 14,
                name: "genius_slots",
                type: "long_rest",
                list: [
                  [
                    "",
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
                    1,
                    1,
                    1,
                    1,
                    1,
                  ],
                ],
              },
            ],

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_transmutation",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.small_alchemy,
              },
              {
                level: 6,
                spell: spells.transmutation_stone,
              },
              // Вьі можете накладьівать превращение [polymorph], не тратя ячейку заклинаний. Когда вьі так поступаете, вьі можете вьібрать в качестве цели только себя и превратиться можете в зверя, Показатель опасности которого не больше 1. Активировав превращение подобньім путем один раз, вьі не можете делать єто еще раз до завершения короткого или продолжительного отдьіха, хотя вьі можете накладьівать єто заклинание обьічньім способом, за ячейки заклинаний.
              {
                level:10,
                spell: spells.polymorph,
              },
              {
                level:10,
                spell: spells.polymorph_wizard,
              },
              {
                level: 14,
                spell: spells.big_transformation,
              },
              {
                level:14,
                spell: spells.raise_dead_wizard,
              },
              {
                level: 14,
                spell: spells.return_youth,
              },
              {
                level: 14,
                spell: spells.panacea,
              },
            ],
          },
          {
            name: "school_of_divination",
            details: "school_of_divination_details",

            charges: [
              {
                level: 10,
                name: "third_eye_slots",
                type: "short_rest",
                list: [
                  [
                    "",
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

            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "twice_less",
                details: "gold_and_time_divination",
              },
            ],

            spells: [
              {
                level: 2,
                spell: spells.portent,
              },
              {
                level: 6,
                spell: spells.divination_expert,
              },
              {
                level: 10,
                spell: spells.third_eye,
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        position: 8,
        name: "skills",
        select: 2,
        list: [
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
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
        ],
      },
      {
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
        ],
      },
      {
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.scholars.name,
            equipment: [{ inventory_packs: [[packs.scholars, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        type: "custom",
        position: 13,
        name: "inventory",
        select: 1,
        list: [
          {
            name_set: items.component_pouch.name,
            equipment: [{ inventory: [[items.component_pouch, 1]] }],
          },
          {
            name_set: items.focus.name,
            equipment: [{ inventory: [[items.focus, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 3,
        name: "spells_0",
        select: [3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        list: [
          // spells[0] wizard
          {
            name_set: spells.acid_splash[0].name,
            spells: [{ level: 1, spell: spells.acid_splash }],
          },
          {
            name_set: spells.mage_hand[0].name,
            spells: [{ level: 1, spell: spells.mage_hand }],
          },
          {
            name_set: spells.friends[0].name,
            spells: [{ level: 1, spell: spells.friends }],
          },
          {
            name_set: spells.blade_ward[0].name,
            spells: [{ level: 1, spell: spells.blade_ward }],
          },
          {
            name_set: spells.chill_touch[0].name,
            spells: [{ level: 1, spell: spells.chill_touch }],
          },
          {
            name_set: spells.ray_of_frost[0].name,
            spells: [{ level: 1, spell: spells.ray_of_frost }],
          },
          {
            name_set: spells.minor_illusion[0].name,
            spells: [{ level: 1, spell: spells.minor_illusion }],
          },
          {
            name_set: spells.true_strike[0].name,
            spells: [{ level: 1, spell: spells.true_strike }],
          },
          {
            name_set: spells.fire_bolt[0].name,
            spells: [{ level: 1, spell: spells.fire_bolt }],
          },
          {
            name_set: spells.dancing_lights[0].name,
            spells: [{ level: 1, spell: spells.dancing_lights }],
          },
          {
            name_set: spells.mending[0].name,
            spells: [{ level: 1, spell: spells.mending }],
          },
          {
            name_set: spells.light[0].name,
            spells: [{ level: 1, spell: spells.light }],
          },
          {
            name_set: spells.message[0].name,
            spells: [{ level: 1, spell: spells.message }],
          },
          {
            name_set: spells.prestidigitation[0].name,
            spells: [{ level: 1, spell: spells.prestidigitation }],
          },
          {
            name_set: spells.shocking_grasp[0].name,
            spells: [{ level: 1, spell: spells.shocking_grasp }],
          },
          {
            name_set: spells.poison_spray[0].name,
            spells: [{ level: 1, spell: spells.poison_spray }],
          },
        ],
      },
      {
        type: "spells",
        position: 4,
        name: "spells",
        select: [
          6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
          42, 44,
        ],
        mana_min: 1,
        mana_max: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9],
        filter: { classes: ["wizard"], }
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // 20

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
        weapon: [
          [weapons.dagger, 1],
          [weapons.unarmed, 1],
        ],
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
        type: "long_rest",
        foo: "Str_Level_5_10_15__Num_CHA_Min1__Typ_5_Lvl",
        //Ваша Кость бардовского вдохновения изменяется с ростом вашего уровня в єтом классе. Она становится к8 на 5 уровне, к10 на 10 уровне и к12 на 15 уровне.
        //Вьі можете использовать єто умение количество раз, равное модификатору вашей Харизмьі, но как минимум один раз.
        //Ваша Кость бардовского вдохновения изменяется с ростом вашего уровня в єтом классе. Изначально d6, она становится d8 на 5 уровне, d10 на 10 уровне и d12 на 15 уровне.
        list: [
          ["", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
      },
      {
        level: 1,
        name: "spell_slots",
        type: "long_rest",
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
      {
        level: 6,
        spell: spells.countercharm,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "spell_focus",
        details: "as_musical_instrument",
      },
      {
        level: 2,
        type: "plus",
        keyword: "proficiency_bonus_half",
        details: "on_mastery_checks",
      },
      {
        level: 5,
        type: "plus",
        keyword: "restoring",
        details: "of_inspiration_slots_on_short_rest",
      },
      {
        level: 5,
        type: "plus",
        keyword: "plus_1_insptiration",
        details: "on_initiative_and_0_inspiration",
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        position: 0,
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
                level: 3,
                type: "plus",
                keyword: "spell_bardic_inspiration",
                details: "on_damage_and_ac",
              },
            ],

            spells: [
              {
                level: 6,
                spell: spells.extra_attack,
              },
              {
                level: 14,
                spell: spells.bonus_attack,
              },
            ],

            settings: [
              {
                level: 6,
                type: "spells",
                position: 4,
                name: "spells",
                select: [
                  0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                ],
                mana_min: 0,
                mana_max: [
                  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9,
                ],
                filter: { classes: ["bard"], }
              },
            ],
          },
          {
            name: "college_lore",
            details: "college_lore_details",

            spells: [
              {
                level: 3,
                spell: spells.cutting_word,
              },
              {
                level: 14,
                spell: spells.peerless_skill,
              },
            ],

            settings: [
              {
                level: 3,
                type: "custom",
                position: 8,
                name: "skills",
                select: 3,
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
                ],
              },
              {
                level: 6,
                type: "spells",
                position: 4,
                name: "magic_mistery",
                select: [
                  0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                ],
                mana_min: 0,
                mana_max: [
                  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9,
                ],
                filter: { classes: [
                  "artificer",
                  "cleric",
                  "druid",
                  "paladin",
                  "sorcerer",
                  "warlock",
                  "wizard",
                ], }
              },
            ],
          },
        ],
      },
      {
        type: "custom",
        position: 8,
        name: "skills",
        select: 3,
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
              { name: "stealth", num: "Mastery", details: "stealth_details" },
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
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
            ],
          },
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
            ],
          },
          {
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
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
        ],
      },
      {
        type: "custom",
        position: 9,
        name: "tools",
        select: 3,
        list: [
          {
            name_set: tools.music_bagpipes.name,
            proficiencies: {
              tools: [tools.music_bagpipes],
            },
          },
          {
            name_set: tools.music_drums.name,
            proficiencies: {
              tools: [tools.music_drums],
            },
          },
          {
            name_set: tools.music_dulcimer.name,
            proficiencies: {
              tools: [tools.music_dulcimer],
            },
          },
          {
            name_set: tools.music_flute.name,
            proficiencies: {
              tools: [tools.music_flute],
            },
          },
          {
            name_set: tools.music_horn.name,
            proficiencies: {
              tools: [tools.music_horn],
            },
          },
          {
            name_set: tools.music_lute.name,
            proficiencies: {
              tools: [tools.music_lute],
            },
          },
          {
            name_set: tools.music_lyre.name,
            proficiencies: {
              tools: [tools.music_lyre],
            },
          },
          {
            name_set: tools.music_pan_flute.name,
            proficiencies: {
              tools: [tools.music_pan_flute],
            },
          },
          {
            name_set: tools.music_shawm.name,
            proficiencies: {
              tools: [tools.music_shawm],
            },
          },
          {
            name_set: tools.music_viol.name,
            proficiencies: {
              tools: [tools.music_viol],
            },
          },
        ],
      },
      {
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: weapons.rapier.name,
            equipment: [{ weapon: [[weapons.rapier, 1]] }],
          },
          {
            name_set: weapons.longsword.name,
            equipment: [{ weapon: [[weapons.longsword, 1]] }],
          },
          {
            name_set: weapons.quarterstaff.name,
            equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
          },
          {
            name_set: weapons.mace.name,
            equipment: [{ weapon: [[weapons.mace, 1]] }],
          },
          {
            name_set: weapons.club.name,
            equipment: [{ weapon: [[weapons.club, 1]] }],
          },
          {
            name_set: weapons.dagger.name,
            equipment: [{ weapon: [[weapons.dagger, 1]] }],
          },
          {
            name_set: weapons.spear.name,
            equipment: [{ weapon: [[weapons.spear, 1]] }],
          },
          {
            name_set: weapons.light_hammer.name,
            equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
          },
          {
            name_set: weapons.javelin.name,
            equipment: [{ weapon: [[weapons.javelin, 1]] }],
          },
          {
            name_set: weapons.greatclub.name,
            equipment: [{ weapon: [[weapons.greatclub, 1]] }],
          },
          {
            name_set: weapons.sickle.name,
            equipment: [{ weapon: [[weapons.sickle, 1]] }],
          },
        ],
      },
      {
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.diplomats.name,
            equipment: [{ inventory_packs: [[packs.diplomats, 1]] }],
          },
          {
            name_set: packs.entertainers.name,
            equipment: [{ inventory_packs: [[packs.entertainers, 1]] }],
          },
        ],
      },
      {
        type: "custom",
        position: 12,
        name: "tool",
        select: 1,
        list: [
          {
            name_set: items.music_lute.name,
            equipment: [{ inventory: [[items.music_lute, 1]] }],
          },
          {
            name_set: items.music_bagpipes.name,
            equipment: [{ inventory: [[items.music_bagpipes, 1]] }],
          },
          {
            name_set: items.music_drums.name,
            equipment: [{ inventory: [[items.music_drums, 1]] }],
          },
          {
            name_set: items.music_dulcimer.name,
            equipment: [{ inventory: [[items.music_dulcimer, 1]] }],
          },
          {
            name_set: items.music_flute.name,
            equipment: [{ inventory: [[items.music_flute, 1]] }],
          },
          {
            name_set: items.music_horn.name,
            equipment: [{ inventory: [[items.music_horn, 1]] }],
          },
          {
            name_set: items.music_lyre.name,
            equipment: [{ inventory: [[items.music_lyre, 1]] }],
          },
          {
            name_set: items.music_pan_flute.name,
            equipment: [{ inventory: [[items.music_pan_flute, 1]] }],
          },
          {
            name_set: items.music_shawm.name,
            equipment: [{ inventory: [[items.music_shawm, 1]] }],
          },
          {
            name_set: items.music_viol.name,
            equipment: [{ inventory: [[items.music_viol, 1]] }],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 3,
        name: "spells_0",
        select: [2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        list: [
          // spells[0] bard
          {
            name_set: spells.mage_hand[0].name,
            spells: [{ level: 1, spell: spells.mage_hand }],
          },
          {
            name_set: spells.friends[0].name,
            spells: [{ level: 1, spell: spells.friends }],
          },
          {
            name_set: spells.blade_ward[0].name,
            spells: [{ level: 1, spell: spells.blade_ward }],
          },
          {
            name_set: spells.vicious_mockery[0].name,
            spells: [{ level: 1, spell: spells.vicious_mockery }],
          },
          {
            name_set: spells.minor_illusion[0].name,
            spells: [{ level: 1, spell: spells.minor_illusion }],
          },
          {
            name_set: spells.true_strike[0].name,
            spells: [{ level: 1, spell: spells.true_strike }],
          },
          {
            name_set: spells.dancing_lights[0].name,
            spells: [{ level: 1, spell: spells.dancing_lights }],
          },
          {
            name_set: spells.mending[0].name,
            spells: [{ level: 1, spell: spells.mending }],
          },
          {
            name_set: spells.light[0].name,
            spells: [{ level: 1, spell: spells.light }],
          },
          {
            name_set: spells.message[0].name,
            spells: [{ level: 1, spell: spells.message }],
          },
          {
            name_set: spells.prestidigitation[0].name,
            spells: [{ level: 1, spell: spells.prestidigitation }],
          },
        ],
      },
      {
        level: 1,
        type: "spells",
        position: 4,
        name: "spells",
        select: [
          4, 5, 6, 7, 8, 7, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 14,
          14,
        ],
        mana_min: 1,
        mana_max: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9],
        filter: { classes: ["bard"],}
      },
      {
        level: 10,
        type: "spells",
        position: 4,
        name: "magic_mistery",
        select: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 4, 4, 4, 4, 6, 6, 6],
        mana_min: 0,
        mana_max: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 9],
        filter: { classes: [
          "artificer",
          "cleric",
          "druid",
          "paladin",
          "sorcerer",
          "warlock",
          "wizard",
        ],}
      },
      {
        level: 3,
        type: "custom",
        position: 8,
        name: "skills",
        select: [2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        filter: "only_mastery",
        // На третьем уровне вьіберите 2 навьіка из тех, которьіми вьі владеете. Ваш бонус мастерства для єтих навьіков удваивается. На 10 уровне вьі можете вьібрать еще 2 навьіка и получить для них єто преимущество.
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
              { name: "stealth", num: "Mastery", details: "stealth_details" },
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
              { name: "history", num: "Mastery", details: "history_details" },
            ],
          },
          {
            name_set: "religion",
            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },
            ],
          },
          {
            name_set: "arcana",
            skills: [
              { name: "arcana", num: "Mastery", details: "arcana_details" },
            ],
          },
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
            ],
          },
          {
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
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
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "medicine",
            skills: [
              { name: "medicine", num: "Mastery", details: "medicine_details" },
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
        ],
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // 20

  //NOTE - Ranger

  ranger: {
    name: "ranger",
    details: "ranger_details",

    hp_dice: 10,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military],
    },

    saving: ["strength", "dexterity"],
    stats_base: [
      "dexterity",
      "strength",
      "wisdom",
      "constitution",
      "intelligence",
      "charisma",
    ],
    spell_attribute: "wisdom",

    equipment: [
      {
        level: 1,
        weapon: [[weapons.longbow, 1]],
        inventory: [
          [items.arrow, 20],
          [items.quiver, 1],
        ],
      },
      {
        level: 2,
        inventory: [[items.focus, 1]],
      },
    ],

    charges: [
      {
        level: 2,
        name: "spell_slots",
        type: "long_rest",
        list: [
          ["[1]", 0, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          ["[2]", 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[3]", 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          ["[4]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3],
          ["[5]", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
        ],
      },
    ],

    fines: [
      {
        level: 8,
        type: "plus",
        keyword: "no_speed_fee",
        details: "on_nonmagic_hard_area",
      },
      {
        level: 8,
        type: "advantage",
        keyword: "advantage",
        details: "on_saving_from_plants",
      },
      {
        level: 18,
        type: "advantage",
        keyword: "no_disadvantage",
        details: "on_attacking_invisible",
      },
      {
        level: 18,
        type: "plus",
        keyword: "knowledge",
        details: "of_all_invisible_30",
      },
    ],

    spells: [
      {
        level: 5,
        spell: spells.extra_attack,
      },
      {
        level: 14,
        spell: spells.disappearance,
      },
      {
        level: 20,
        spell: spells.enemy_killer,
      },
    ],

    settings: [
      {
        level: 3,
        type: "custom",
        position: 0,
        name: "subclass",
        select: 1,
        list: [
          {
            name: "hunter",
            details: "hunter_details",

            settings: [
              {
                level: 3,
                type: "custom",
                position: 1,
                name: "prey",
                select: 1,
                list: [
                  {
                    name_set: spells.horde_breaker[0].name,
                    spells: [
                      {
                        level: 3,
                        spell: spells.horde_breaker,
                      },
                    ],
                  },
                  {
                    name_set: spells.giant_killer[0].name,
                    spells: [
                      {
                        level: 3,
                        spell: spells.giant_killer,
                      },
                    ],
                  },
                  {
                    name_set: spells.colossus_slayer[0].name,
                    spells: [
                      {
                        level: 3,
                        spell: spells.colossus_slayer,
                      },
                    ],
                  },
                ],
              },
              {
                level: 7,
                type: "custom",
                position: 1,
                name: "style_defence",
                select: 1,
                list: [
                  {
                    name: "protection_from_multiattack",
                    fines: [
                      {
                        level: 7,
                        type: "plus",
                        keyword: "plus_4_armor",
                        details: "on_next_attacks",
                      },
                    ],
                  },
                  {
                    name: "run_from_horde",
                    fines: [
                      {
                        level: 7,
                        type: "advantage",
                        keyword: "disadvantage",
                        details: "on_attacking_invisible",
                      },
                    ],
                  },
                  {
                    name: "steel_will",
                    fines: [
                      {
                        level: 7,
                        type: "advantage",
                        keyword: "advantage",
                        details: "fear_against",
                      },
                    ],
                  },
                ],
              },
              {
                level: 11,
                type: "custom",
                position: 1,
                name: "multiattack",
                select: 1,
                list: [
                  {
                    name_set: spells.whirlwind_attack[0].name,
                    spells: [
                      {
                        level: 11,
                        spell: spells.whirlwind_attack,
                      },
                    ],
                  },
                  {
                    name_set: spells.volley[0].name,
                    spells: [
                      {
                        level: 11,
                        spell: spells.volley,
                      },
                    ],
                  },
                ],
              },
              {
                level: 15,
                type: "custom",
                position: 1,
                name: "style_protection",
                select: 1,
                list: [
                  {
                    name: "evasiveness",
                    fines: [
                      {
                        level: 15,
                        type: "resistance",
                        keyword: "fine_dodge",
                        details: "from_aoe_effects",
                      },
                    ],
                  },
                  {
                    name_set: spells.uncanny_dodge[0].name,
                    spells: [
                      {
                        level: 15,
                        spell: spells.uncanny_dodge,
                      },
                    ],
                  },
                  {
                    name_set: spells.stand_against_the_tide[0].name,
                    spells: [
                      {
                        level: 15,
                        spell: spells.stand_against_the_tide,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "beastmaster",
            details: "beastmaster_details",

            settings: [
              {
                level: 3,
                type: "custom",
                position: 1,
                name: "companion",
                select: 1,
                list: [
                  {
                    name_set: spells.rangers_companion[0].name,
                    spells: [
                      {
                        level: 3,
                        spell: spells.rangers_companion,
                      },
                    ],
                  },
                  {
                    name_set: spells.primal_companion[0].name,
                    spells: [
                      {
                        level: 3,
                        spell: spells.primal_companion,
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
        type: "custom",
        position: 2,
        name: "favor",
        select: 1,
        list: [
          {
            name: "favored_enemy",
            details: "favored_enemy_details",

            settings: [
              {
                level: 1,
                type: "custom",
                position: 2,
                name: "favored_enemy",
                select: [
                  1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3,
                ],
                list: [
                  {
                    name: "aberrations",
                    details: "aberrations_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_aberrations_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_aberrations_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.deep],
                    },
                  },
                  {
                    name: "beasts",
                    details: "beasts_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_beasts_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_beasts_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.animal],
                    },
                  },
                  {
                    name: "celestials",
                    details: "celestials_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_celestials_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_celestials_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.sky],
                    },
                  },
                  {
                    name: "constructs",
                    details: "constructs_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_constructs_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_constructs_against",
                      },
                    ],
                  },
                  {
                    name: "dragons",
                    details: "dragons_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_dragons_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_dragons_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.dragon],
                    },
                  },
                  {
                    name: "elementals",
                    details: "elementals_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_elementals_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_elementals_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.primordial],
                    },
                  },
                  {
                    name: "feys",
                    details: "feys_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_feys_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_feys_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.sylvan],
                    },
                  },
                  {
                    name: "fiends",
                    details: "fiends_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_fiends_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_fiends_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.demonic, lang.tiefling],
                    },
                  },
                  {
                    name: "giants",
                    details: "giants_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_giants_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_giants_against",
                      },
                    ],

                    proficiencies: {
                      languages: [lang.giant],
                    },
                  },
                  {
                    name: "monstrosities",
                    details: "monstrosities_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_monstrosities_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_monstrosities_against",
                      },
                    ],
                  },
                  {
                    name: "oozes",
                    details: "oozes_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_oozes_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_oozes_against",
                      },
                    ],
                  },
                  {
                    name: "plants",
                    details: "plants_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_plants_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_plants_against",
                      },
                    ],
                  },
                  {
                    name: "undeads",
                    details: "undeads_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_undeads_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_undeads_against",
                      },
                    ],
                  },
                  {
                    name: "two_other_races",
                    details: "two_other_races_details",

                    fines: [
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "wisdom_two_other_races_against",
                      },
                      {
                        level:1,
                        type: "advantage",
                        keyword: "advantage",
                        details: "intelligence_two_other_races_against",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "favored_foe",
            details: "favored_foe_details",

            charges: [
              {
                level: 1,
                name: "favored_foe_slots",
                type: "long_rest",
                foo: "Num_Mastery",
                list: [
                  [
                    "",
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
                    0,
                    0,
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 1,
                spell: spells.favored_foe,
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 2,
        name: "exploration",
        select: 1,
        list: [
          {
            name: "natural_explorer",
            details: "natural_explorer_details",

            settings: [
              {
                level: 1,
                type: "custom",
                position: 2,
                name: "favored_terrain",
                select: [
                  1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                ],
                list: [
                  {
                    name: "arctic",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_arctic",
                      },
                      {
                        type: "plus",
                        keyword: "travel_arctic",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "coast",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_coast",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_coast",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "desert",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_desert",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_desert",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "forest_terrain",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_forest",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_forest",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "grassland",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_grassland",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_grassland",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "mountain_terrain",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_mountain",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_mountain",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "swamp",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_swamp",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_swamp",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                  {
                    name: "underdark",

                    fines: [
                      {
                        level:1,
                        type: "plus",
                        keyword: "proficiency_bonus",
                        details: "intelligence_wisdom_underdark",
                      },
                      {
                        level:1,
                        type: "plus",
                        keyword: "travel_underdark",
                        details: "terrain_advantages",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "deft_explorer",
            details: "deft_explorer_details",

            qualities: [
              {
                level: 6,
                name: "speed",
                type: "bonus",
                num: 5,
                show: true,
              },
            ],

            fines: [
              {
                level: 6,
                type: "plus",
                keyword: "climbing_and_swimming",
                details: "without_speed_fee",
              },
              {
                level: 10,
                type: "plus",
                keyword: "exhaust_rediction",
                details: "in_short_rest",
              },
            ],

            charges: [
              {
                level: 10,
                name: "tireless_slots",
                type: "long_rest",
                foo: "Num_Mastery",
                list: [
                  [
                    "",
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
                    0,
                    0,
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 10,
                spell: spells.tireless,
              },
            ],

            settings: [
              {
                level: 1,
                type: "custom",
                position: 8,
                name: "skills",
                select: 1,
                filter: "only_mastery",
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
                ],
              },
              {
                level: 1,
                type: "custom",
                position: 10,
                name: "languages",
                select: 2,
                list: [
                  {
                    name: lang.halfling.name,
                    details: lang.halfling.details,
                    proficiencies: { languages: [lang.halfling] },
                  },
                  {
                    name: lang.gnome.name,
                    details: lang.gnome.details,
                    proficiencies: { languages: [lang.gnome] },
                  },
                  {
                    name: lang.dwarf.name,
                    details: lang.dwarf.details,
                    proficiencies: { languages: [lang.dwarf] },
                  },
                  {
                    name: lang.elf.name,
                    details: lang.elf.details,
                    proficiencies: { languages: [lang.elf] },
                  },
                  {
                    name: lang.orc.name,
                    details: lang.orc.details,
                    proficiencies: { languages: [lang.orc] },
                  },
                  {
                    name: lang.dragon.name,
                    details: lang.dragon.details,
                    proficiencies: { languages: [lang.dragon] },
                  },
                  {
                    name: lang.giant.name,
                    details: lang.giant.details,
                    proficiencies: { languages: [lang.giant] },
                  },
                  {
                    name: lang.goblin.name,
                    details: lang.goblin.details,
                    proficiencies: { languages: [lang.goblin] },
                  },
                  {
                    name: lang.thieves.name,
                    details: lang.thieves.details,
                    proficiencies: { languages: [lang.thieves] },
                  },
                  {
                    name: lang.druid.name,
                    details: lang.druid.details,
                    proficiencies: { languages: [lang.druid] },
                  },
                  {
                    name: lang.animal.name,
                    details: lang.animal.details,
                    proficiencies: { languages: [lang.animal] },
                  },
                  {
                    name: lang.sylvan.name,
                    details: lang.sylvan.details,
                    proficiencies: { languages: [lang.sylvan] },
                  },
                  {
                    name: lang.undercommon.name,
                    details: lang.undercommon.details,
                    proficiencies: { languages: [lang.undercommon] },
                  },
                  {
                    name: lang.deep.name,
                    details: lang.deep.details,
                    proficiencies: { languages: [lang.deep] },
                  },
                  {
                    name: lang.primordial.name,
                    details: lang.primordial.details,
                    proficiencies: { languages: [lang.primordial] },
                  },
                  {
                    name: lang.sky.name,
                    details: lang.sky.details,
                    proficiencies: { languages: [lang.sky] },
                  },
                  {
                    name: lang.demonic.name,
                    details: lang.demonic.details,
                    proficiencies: { languages: [lang.demonic] },
                  },
                  {
                    name: lang.tiefling.name,
                    details: lang.tiefling.details,
                    proficiencies: { languages: [lang.tiefling] },
                  },
                ],
              },
              // {
              //   level: 1,
              //   type: "languages",
              //   position: 10,
              //   name: "languages",
              //   select: 2,
              //   filter: "no_used",
              // },
            ],
          },
        ],
      },
      {
        level: 2,
        type: "custom",
        position: 2,
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
            name: "style_defence",
            fines: [
              {
                level: 2,
                type: "plus",
                keyword: "bonus",
                details: "on_armor_if_armor",
              },
            ],

            specials: [
              {
                level:2,
                type: "armor",
                armor_bonus: 1,
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

            specials: [
              {
                level: 2,
                type: "weapon_ranged",
                aim_bonus: 2,
              },
            ],
          },
        ],
      },
      {
        level: 3,
        type: "custom",
        position: 2,
        name: "primal_sense",
        select: 1,
        list: [
          {
            name: "primal_knowledge",
            spells: [
              {
                level: 3,
                spell: spells.primeval_awareness_favored,
              },
            ],
          },
          {
            //Вьі можете единождьі применить каждое из єтих заклинаний без использования ячеек заклинания. Как только вьі используете заклинание таким образом, вьі больше не сможете сделать єто повторно до окончания продолжительного отдьіха.
            name: "true_sense",
            details: "true_sense_details",
            spells: [
              {
                level: 3,
                spell: spells.speak_with_animals_ranger,
              },
              {
                level: 5,
                spell: spells.beast_sense_ranger,
              },
              {
                level:9,
                spell:spells.speak_with_plants_ranger,
              },
              {
                level:13,
                spell:spells.locate_creature_ranger,
              },
              {
                level: 17,
                spell: spells.commune_with_nature_ranger,
              },
            ],
          },
        ],
      },
      {
        level: 10,
        type: "custom",
        position: 2,
        name: "disguise",
        select: 1,
        list: [
          {
            name_set: "spell_disguise_on_sight",
            spells: [
              {
                level: 10,
                spell: spells.disguise_on_sight,
              },
            ],
          },
          {
            name_set: "spell_disguise_nature",
            charges: [
              {
                level: 10,
                name: "disguise_nature_slots",
                type: "long_rest",
                foo: "Num_Mastery",
                list: [
                  [
                    "",
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
                    0,
                    0,
                  ],
                ],
              },
            ],

            spells: [
              {
                level: 10,
                spell: spells.disguise_nature,
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 8,
        name: "skills",
        select: 3,
        list: [
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
            name_set: "survival",
            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },
            ],
          },
          {
            name_set: "nature",
            skills: [
              { name: "nature", num: "Mastery", details: "nature_details" },
            ],
          },
          {
            name_set: "insight",
            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },
            ],
          },
          {
            name_set: "stealth",
            skills: [
              { name: "stealth", num: "Mastery", details: "stealth_details" },
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
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 11,
        name: "armor_class",
        select: 1,
        list: [
          {
            name_set: armors.scalemail.name,
            equipment: [
              {
                level: 1,
                armor: [[armors.scalemail, 1]],
              },
            ],
            fines: [
              {
                level: 1,
                type: "disadvantage",
                keyword: "disadvantage",
                details: "on_stealth",
              },
            ],
          },
          {
            name_set: armors.leather.name,
            equipment: [
              {
                level: 1,
                armor: [[armors.leather, 1]],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 12,
        name: "weapons",
        select: 1,
        list: [
          {
            name_set: "shortsword_2",
            equipment: [
              {
                weapon: [[weapons.shortsword, 2]],
              },
            ],
          },
          {
            name: "two_simple_weapons",
            settings: [
              {
                type: "custom",
                position: 12,
                name: "weapons",
                select: 1,
                list: [
                  {
                    name_set: weapons.quarterstaff.name,
                    equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
                  },
                  {
                    name_set: weapons.mace.name,
                    equipment: [{ weapon: [[weapons.mace, 1]] }],
                  },
                  {
                    name_set: weapons.club.name,
                    equipment: [{ weapon: [[weapons.club, 1]] }],
                  },
                  {
                    name_set: weapons.dagger.name,
                    equipment: [{ weapon: [[weapons.dagger, 1]] }],
                  },
                  {
                    name_set: weapons.spear.name,
                    equipment: [{ weapon: [[weapons.spear, 1]] }],
                  },
                  {
                    name_set: weapons.light_hammer.name,
                    equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
                  },
                  {
                    name_set: weapons.javelin.name,
                    equipment: [{ weapon: [[weapons.javelin, 1]] }],
                  },
                  {
                    name_set: weapons.greatclub.name,
                    equipment: [{ weapon: [[weapons.greatclub, 1]] }],
                  },
                  {
                    name_set: weapons.handaxe.name,
                    equipment: [{ weapon: [[weapons.handaxe, 1]] }],
                  },
                  {
                    name_set: weapons.sickle.name,
                    equipment: [{ weapon: [[weapons.sickle, 1]] }],
                  },
                ],
              },
              {
                type: "custom",
                position: 12,
                name: "weapons",
                select: 1,
                list: [
                  {
                    name_set: weapons.quarterstaff.name,
                    equipment: [{ weapon: [[weapons.quarterstaff, 1]] }],
                  },
                  {
                    name_set: weapons.mace.name,
                    equipment: [{ weapon: [[weapons.mace, 1]] }],
                  },
                  {
                    name_set: weapons.club.name,
                    equipment: [{ weapon: [[weapons.club, 1]] }],
                  },
                  {
                    name_set: weapons.dagger.name,
                    equipment: [{ weapon: [[weapons.dagger, 1]] }],
                  },
                  {
                    name_set: weapons.spear.name,
                    equipment: [{ weapon: [[weapons.spear, 1]] }],
                  },
                  {
                    name_set: weapons.light_hammer.name,
                    equipment: [{ weapon: [[weapons.light_hammer, 1]] }],
                  },
                  {
                    name_set: weapons.javelin.name,
                    equipment: [{ weapon: [[weapons.javelin, 1]] }],
                  },
                  {
                    name_set: weapons.greatclub.name,
                    equipment: [{ weapon: [[weapons.greatclub, 1]] }],
                  },
                  {
                    name_set: weapons.handaxe.name,
                    equipment: [{ weapon: [[weapons.handaxe, 1]] }],
                  },
                  {
                    name_set: weapons.sickle.name,
                    equipment: [{ weapon: [[weapons.sickle, 1]] }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "custom",
        position: 13,
        name: "pack",
        select: 1,
        list: [
          {
            name_set: packs.dungeoneers.name,
            equipment: [{ inventory_packs: [[packs.dungeoneers, 1]] }],
          },
          {
            name_set: packs.explorers.name,
            equipment: [{ inventory_packs: [[packs.explorers, 1]] }],
          },
        ],
      },
      {
        level: 3,
        type: "spells",
        position: 4,
        name: "spells",
        select: [
          0, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 11,
        ],
        mana_min: 1,
        mana_max: [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5],
        filter: { classes: ["ranger"],}
      },
      {
        level: 4,
        type: "feats",
        position: 7,
      },
      {
        level: 8,
        type: "feats",
        position: 7,
      },
      {
        level: 12,
        type: "feats",
        position: 7,
      },
      {
        level: 16,
        type: "feats",
        position: 7,
      },
      {
        level: 19,
        type: "feats",
        position: 7,
      },
    ],
  }, // 20
};
