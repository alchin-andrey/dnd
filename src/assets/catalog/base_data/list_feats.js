import spells from "./list_spells.js";
import weaponry from "./kinds_weapons.js";
import armory from "./kinds_armor.js";
import tools from "./kinds_tools.js";
import item from "./list_items.js";
import lang from "./list_languages.js";

export default {

  actor: {
    name: "feat_actor",
    details: "feat_actor_details",

    stats: [
      {
        name: "charisma",
        num: 1,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "advantage",
        details: "performace_deception_acting",
      },
      {
        type: "plus",
        keyword: "mimicing",
        details: "other_creature_sound_1min",
      },
    ],
  },

  athlete: {
    name: "feat_athlete",
    details: "feat_athlete_details",

    stats: [
      {
        name: "strength",
        num: 1,
      },
      {
        name: "dexterity",
        num: 1,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "quicko",
        details: "getting_up",
      },
      {
        type: "plus",
        keyword: "climbing",
        details: "without_speed_fee",
      },
      {
        type: "plus",
        keyword: "short_run",
        details: "on_size_jupms",
      },
    ],
  },

  mobile: {
    name: "feat_mobile",
    details: "feat_mobile_details",

    qualities: [
      {
        name: "speed",
        type: "bonus",
        num:  10,
        show: true,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "no_fee",
        details: "on_hard_area_dash",
      },
      {
        type: "plus",
        keyword: "no_provocation",
        details: "in_this_move_after_attack",
      },
    ],
  },

  skulker: {
    name: "feat_skulker",
    details: "feat_skulker_details",
    condition: "condition_dexterity_13plus",
    //Требования: Ловкость 13 или вьіше

    filter:{
      stats: [
        {
          name: "dexterity",
          min_num: 13,
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "ability_to_hide",
        details: "if_small_cover",
      },
      {
        type: "plus",
        keyword: "no_reveal",
        details: "if_missed",
      },
      {
        type: "plus",
        keyword: "no_disadvantage",
        details: "on_perception_sight",
      },
    ],
  },

  dungeon_delver: {
    name: "feat_dungeon_delver",
    details: "feat_dungeon_delver_details",

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_hidden_doors",
      },
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_trap_evasion",
      },
      {
        type: "resistance",
        keyword: "resistance",
        details: "on_trap_damage",
      },
      {
        type: "plus",
        keyword: "no_fee",
        details: "on_passive_perception_on_quick_move",
      },
    ],
  },

  observant: {
    name: "feat_observant",
    details: "feat_observant_details",

    stats: [
      {
        name: "intelligence",
        num: 1,
      },
      {
        name: "wisdom",
        num: 1,
      },
    ],

    skills_passive: [
      {
        name: "perception_passive",
        type: "bonus",
        num: 5,
        show: true,
      },
      {
        name: "investigation_passive",
        type: "bonus",
        num: 5,
        show: true,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "lips_read",
        details: "known_languages",
      },
    ],
  },

  alert: {
    name: "feat_alert",
    details: "feat_alert_details",

    qualities: [
      {
        name: "initiative",
        type: "bonus",
        num: 5,
        show: true,
      },
    ],

    fines: [
      {
        type: "advantage",
        keyword: "immunity",
        details: "on_sudden",
      },
      {
        type: "advantage",
        keyword: "no_advantage",
        details: "on_stealth_attacks",
      },
    ],
  },

  lucky: {
    name: "feat_lucky",
    details: "feat_lucky_details",

    spells: [
      {
        spell: spells.luck_feat,
      }
    ],

    charges: [
      {
        name: "lucky_slots",
        type: "long_rest",
        list: [
          ["d20", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        ],
      },
    ],
  },

  tough: {
    name: "feat_tough",
    details: "feat_tough_details",

    hp_bonus: [1, 2],
  },

  durable: {
    name: "feat_durable",
    details: "feat_durable_details",

    stats: [
      {
        name: "constitution",
        num: 1,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "double_CON",
        details: "on_regen_min_2",
      },
    ],
  },

  resilient: {
    name: "feat_resilient",
    details: "feat_resilient_details",

    settings: [
      {
        type: "custom",
        name: "stats",
        position:7,
        select: 1,
        list: [
          {
            name: "feat_resilient_strength",
            details: "strength_details",
            saving: ["strength"],
            stats: [{ name: "strength", num: 1 }],
          },
          {
            name: "feat_resilient_dexterity",
            details: "dexterity_details",
            saving: ["dexterity"],
            stats: [{ name: "dexterity", num: 1 }],
          },
          {
            name: "feat_resilient_constitution",
            details: "constitution_details",
            saving: ["constitution"],
            stats: [{ name: "constitution", num: 1 }],
          },
          {
            name: "feat_resilient_intelligence",
            details: "intelligence_details",
            saving: ["intelligence"],
            stats: [{ name: "intelligence", num: 1 }],
          },
          {
            name: "feat_resilient_wisdom",
            details: "wisdom_details",
            saving: ["wisdom"],
            stats: [{ name: "wisdom", num: 1 }],
          },
          {
            name: "feat_resilient_charisma",
            details: "charisma_details",
            saving: ["charisma"],
            stats: [{ name: "charisma", num: 1 }],
          },
        ],
      },
    ],
  },

  skilled: {
    name: "feat_skilled",
    details: "feat_skilled_details",

    settings: [
      {
        type: "custom",
        name: "proficiencies",
        position: 8,
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
          {
            name_set: tools.alchemists_supplies.name,
            proficiencies: {
              tools: [tools.alchemists_supplies],
            },
          },
          {
            name_set: tools.blacksmith.name,
            proficiencies: {
              tools: [tools.blacksmith],
            },
          },
          {
            name_set: tools.brewer.name,
            proficiencies: {
              tools: [tools.brewer],
            },
          },
          {
            name_set: tools.calligraphers_supplies.name,
            proficiencies: {
              tools: [tools.calligraphers_supplies],
            },
          },
          {
            name_set: tools.carpenters_tools.name,
            proficiencies: {
              tools: [tools.carpenters_tools],
            },
          },
          {
            name_set: tools.cartographers_tools.name,
            proficiencies: {
              tools: [tools.cartographers_tools],
            },
          },
          {
            name_set: tools.cobblers_tools.name,
            proficiencies: {
              tools: [tools.cobblers_tools],
            },
          },
          {
            name_set: tools.cooks_tools.name,
            proficiencies: {
              tools: [tools.cooks_tools],
            },
          },
          {
            name_set: tools.disguise.name,
            proficiencies: {
              tools: [tools.disguise],
            },
          },
          {
            name_set: tools.glassblowers_tools.name,
            proficiencies: {
              tools: [tools.glassblowers_tools],
            },
          },
          {
            name_set: tools.jewelers_tools.name,
            proficiencies: {
              tools: [tools.jewelers_tools],
            },
          },
          {
            name_set: tools.leatherworkers_tools.name,
            proficiencies: {
              tools: [tools.leatherworkers_tools],
            },
          },
          {
            name_set: tools.mason.name,
            proficiencies: {
              tools: [tools.mason],
            },
          },
          {
            name_set: tools.navigators_tools.name,
            proficiencies: {
              tools: [tools.navigators_tools],
            },
          },
          {
            name_set: tools.painters_supplies.name,
            proficiencies: {
              tools: [tools.painters_supplies],
            },
          },
          {
            name_set: tools.poisoner.name,
            proficiencies: {
              tools: [tools.poisoner],
            },
          },
          {
            name_set: tools.potters_tools.name,
            proficiencies: {
              tools: [tools.potters_tools],
            },
          },
          {
            name_set: tools.tinkers_tools.name,
            proficiencies: {
              tools: [tools.tinkers_tools],
            },
          },
          {
            name_set: tools.weavers_tools.name,
            proficiencies: {
              tools: [tools.weavers_tools],
            },
          },
          {
            name_set: tools.woodcarvers_tools.name,
            proficiencies: {
              tools: [tools.woodcarvers_tools],
            },
          },
          {
            name_set: tools.poisoner.name,
            proficiencies: {
              tools: [tools.poisoner],
            },
          },
          {
            name_set: tools.thief.name,
            proficiencies: {
              tools: [tools.thief],
            },
          },
          {
            name_set: tools.transport_ground.name,
            proficiencies: {
              tools: [tools.transport_ground],
            },
          },
          {
            name_set: tools.transport_water.name,
            proficiencies: {
              tools: [tools.transport_water],
            },
          },
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
    ],
  },

  keen_mind: {
    name: "feat_keen_mind",
    details: "feat_keen_mind_details",

    stats: [
      {
        name: "intelligence",
        num: 1,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "always",
        details: "know_north",
      },
      {
        type: "plus",
        keyword: "always",
        details: "know_time",
      },
      {
        type: "plus",
        keyword: "clear_memory",
        details: "about_xp_1month",
      },
    ],
  },

  linguist: {
    name: "feat_linguist",
    details: "feat_linguist_details",

    stats: [
      {
        name: "intelligence",
        num: 1,
      },
    ],

    spells: [
      {
        spell: spells.create_crypt,
      },
    ],

    settings: [
      {
        type: "custom",
        name: "languages",
        position: 10,
        select: 3,
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
            name: lang.thieves.name,
            details: lang.thieves.details,
            proficiencies: {languages: [lang.thieves]}
          },
          {
            name: lang.druid.name,
            details: lang.druid.details,
            proficiencies: {languages: [lang.druid]}
          },
          {
            name: lang.animal.name,
            details: lang.animal.details,
            proficiencies: {languages: [lang.animal]}
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
      // {
      //   type: "languages",
      //   name: "languages",
      //   position: 10,
      //   select: 3,
      //   filter: "no_used",
      // },
    ],
  },

  inspiring_leader: {
    name: "feat_inspiring_leader",
    details: "feat_inspiring_leader_details",
    condition: "condition_charisma_13plus",
    //Требования: Харизма 13 или вьіше

    filter:{
      stats: [
        {
          name: "charisma",
          min_num: 13,
        },
      ]
    },

    spells: [
      {
        spell: spells.inspiration,
      },
    ],
  },

  healer: {
    name: "feat_healer",
    details: "feat_healer_details",

    fines: [
      {
        type: "plus",
        keyword: "plus_1_to_hp",
        details: "on_use_of_medical_tools",
      },
    ],

    spells: [
      {
        spell: spells.healer_tooling,
      },
    ],
  },

  //NOTE - Armor

  lightly_armored: {
    name: "feat_lightly_armored",
    details: "feat_lightly_armored_details",

    stats: [
      {
        name: "strength",
        num: 1,
      },
      {
        name: "dexterity",
        num: 1,
      },
    ],

    proficiencies: {
      armor: [armory.light],
    },
  },

  moderately_armored: {
    name: "feat_moderately_armored",
    details: "feat_moderately_armored_details",

    stats: [
      {
        name: "strength",
        num: 1,
      },
      {
        name: "dexterity",
        num: 1,
      },
    ],

    proficiencies: {
      armor: [armory.medium, armory.shields],
    },
  },

  heavily_armored: {
    name: "feat_heavily_armored",
    details: "feat_heavily_armored_details",

    stats: [
      {
        name: "strength",
        num: 1,
      },
    ],

    proficiencies: {
      armor: [armory.heavy],
    },
  },

  medium_armor_master: {
    name: "feat_medium_armor_master",
    details: "feat_medium_armor_master_details",
    condition: "condition_proficiency_armor_medium",
    //Требования: Владение тяжельіми доспехами

    filter:{
      proficiencies: {
        armor: [armory.medium.name],
      },
    },

    fines: [
      {
        type: "plus",
        keyword: "no_fee",
        details: "on_stealth_in_medium_armor",
      },
      {
        type: "plus",
        keyword: "bonus",
        details: "on_medium_armor",
      },
    ],
  },

  heavy_armor_master: {
    name: "feat_heavy_armor_master",
    details: "feat_heavy_armor_master_details",
    condition: "condition_proficiency_armor_heavy",
    //Требования: Владение тяжельіми доспехами

    filter:{
      proficiencies: {
        armor: [armory.heavy.name],
      },
    },

    stats: [
      {
        name: "strength",
        num: 1,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "damage_reduction",
        details: "on_3_in_heavy_armor",
      },
    ],
  },

  shield_master: {
    name: "feat_shield_master",
    details: "feat_shield_master_details",

    fines: [
      {
        type: "plus",
        keyword: "bonus",
        details: "on_dex_check_in_shield",
      },
    ],

    spells: [
      {
        spell: spells.shield_push,
      },
      {
        spell: spells.shield_block,
      },
    ],
  },

  //NOTE - Weapon

  defensive_duelist: {
    name: "feat_defensive_duelist",
    details: "feat_defensive_duelist_details",
    condition: "condition_dexterity_13plus",
    //Требования: Ловкость 13 или вьіше

    filter:{
      stats: [
        {
          name: "dexterity",
          min_num: 13,
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "mastery_bonus",
        details: "on_armor_finesse",
      },
    ],
  },

  great_weapon_master: {
    name: "feat_great_weapon_master",
    details: "feat_great_weapon_master_details",

    spells: [
      {
        spell: spells.extra_strike,
      },
      {
        spell: spells.heavy_strike,
      },
    ],
  },

  polearm_master: {
    name: "feat_polearm_master",
    details: "feat_polearm_master_details",

    fines: [
      {
        type: "plus",
        keyword: "provoked_attack",
        details: "on_polearm_reach",
      },
    ],

    spells: [
      {
        spell: spells.polearm_strike,
      },
    ],
  },

  weapon_master: {
    name: "feat_weapon_master",
    details: "feat_weapon_master_details",

    stats: [
      {
        name: "strength",
        num: 1,
      },
    ],

    settings: [
      {
        type: "custom",
        name: "proficiencies",
        position: 9,
        select: 4,
        list: [
          {
            name_set: weaponry.battle_axes.name,
            proficiencies: {
              weapons: [weaponry.battle_axes],
            },
          },
          {
            name_set: weaponry.battle_hammers.name,
            proficiencies: {
              weapons: [weaponry.battle_hammers],
            },
          },
          {
            name_set: weaponry.clubs.name,
            proficiencies: {
              weapons: [weaponry.clubs],
            },
          },
          {
            name_set: weaponry.clubs.name,
            proficiencies: {
              weapons: [weaponry.clubs],
            },
          },
          {
            name_set: weaponry.daggers.name,
            proficiencies: {
              weapons: [weaponry.daggers],
            },
          },
          {
            name_set: weaponry.darts.name,
            proficiencies: {
              weapons: [weaponry.darts],
            },
          },
          {
            name_set: weaponry.hand_arbalets.name,
            proficiencies: {
              weapons: [weaponry.hand_arbalets],
            },
          },
          {
            name_set: weaponry.hand_axes.name,
            proficiencies: {
              weapons: [weaponry.hand_axes],
            },
          },
          {
            name_set: weaponry.javelins.name,
            proficiencies: {
              weapons: [weaponry.javelins],
            },
          },
          {
            name_set: weaponry.light_arbalets.name,
            proficiencies: {
              weapons: [weaponry.light_arbalets],
            },
          },
          {
            name_set: weaponry.light_hammers.name,
            proficiencies: {
              weapons: [weaponry.light_hammers],
            },
          },
          {
            name_set: weaponry.long_bows.name,
            proficiencies: {
              weapons: [weaponry.long_bows],
            },
          },
          {
            name_set: weaponry.long_swords.name,
            proficiencies: {
              weapons: [weaponry.long_swords],
            },
          },
          {
            name_set: weaponry.maces.name,
            proficiencies: {
              weapons: [weaponry.maces],
            },
          },
          {
            name_set: weaponry.quarterstaffs.name,
            proficiencies: {
              weapons: [weaponry.quarterstaffs],
            },
          },
          {
            name_set: weaponry.rapires.name,
            proficiencies: {
              weapons: [weaponry.rapires],
            },
          },
          {
            name_set: weaponry.scimitars.name,
            proficiencies: {
              weapons: [weaponry.scimitars],
            },
          },
          {
            name_set: weaponry.short_bows.name,
            proficiencies: {
              weapons: [weaponry.short_bows],
            },
          },
          {
            name_set: weaponry.short_swords.name,
            proficiencies: {
              weapons: [weaponry.short_swords],
            },
          },
          {
            name_set: weaponry.sickles.name,
            proficiencies: {
              weapons: [weaponry.sickles],
            },
          },
          {
            name_set: weaponry.slings.name,
            proficiencies: {
              weapons: [weaponry.slings],
            },
          },
          {
            name_set: weaponry.spears.name,
            proficiencies: {
              weapons: [weaponry.spears],
            },
          },
        ],
      },
    ],
  },  

  dual_wielder: {
    name: "feat_dual_wielder",
    details: "feat_dual_wielder_details",

    fines: [
      {
        type: "plus",
        keyword: "bonus",
        details: "on_armor_if_two_weapons",
      },
      {
        type: "plus",
        keyword: "use_of_two_weapons",
        details: "without_speed_fee",
      },
      {
        type: "plus",
        keyword: "quick_take",
        details: "of_two_weapons",
      },
    ],
  },

  crossbow_expert: {
    name: "feat_crossbow_expert",
    details: "feat_crossbow_expert_details",

    fines: [
      {
        type: "plus",
        keyword: "ignoring",
        details: "recharge_on_arbalets",
      },
      {
        type: "plus",
        keyword: "no_disadvantage",
        details: "near_target_arbalet",
      },
    ],

    spells: [
      {
        spell: spells.crossbow_shot,
      },
    ],
  },
  
  sharpshooter: {
    name: "feat_sharpshooter",
    details: "feat_sharpshooter_details",

    fines: [
      {
        type: "plus",
        keyword: "no_fee",
        details: "on_shots_in_max_distance",
      },
      {
        type: "plus",
        keyword: "ignoring",
        details: "on_covers",
      },
    ],

    spells: [
      {
        spell: spells.heavy_shot,
      },
    ],
  },

  //NOTE - Fight

  

  martial_adept: {
    name: "feat_martial_adept",
    details: "feat_martial_adept_details",

    charges: [
      {
        name: "superiority_dice_slots_feat",
        type: "short_rest",
        list: [
          ["", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
      },
    ],

    //TODO - fix list
    settings: [
      {
        level: 1,
        type: "custom",
        name: "maneuvers",
        position: 2,
        select: 2,
        list: [
          {
            name_set: spells.maneuver_evasive_footwork[0].name,
            spells: [{ spell: spells.maneuver_evasive_footwork }],
          },
          {
            name_set: spells.maneuver_lunging_attack[0].name,
            spells: [{ spell: spells.maneuver_lunging_attack }],
          },
          {
            name_set: spells.maneuver_maneuvering_attack[0].name,
            spells: [{ spell: spells.maneuver_maneuvering_attack }],
          },
          {
            name_set: spells.maneuver_menacing_attack[0].name,
            spells: [{ spell: spells.maneuver_menacing_attack }],
          },
          {
            name_set: spells.maneuver_feinting_attack[0].name,
            spells: [{ spell: spells.maneuver_feinting_attack }],
          },
          {
            name_set: spells.maneuver_disarming_attack[0].name,
            spells: [{ spell: spells.maneuver_disarming_attack }],
          },
          {
            name_set: spells.maneuver_trip_attack[0].name,
            spells: [{ spell: spells.maneuver_trip_attack }],
          },
          {
            name_set: spells.maneuver_riposte[0].name,
            spells: [{ spell: spells.maneuver_riposte }],
          },
          {
            name_set: spells.maneuver_distracting_strike[0].name,
            spells: [{ spell: spells.maneuver_distracting_strike }],
          },
          {
            name_set: spells.maneuver_parry[0].name,
            spells: [{ spell: spells.maneuver_parry }],
          },
          {
            name_set: spells.maneuver_goading_attack[0].name,
            spells: [{ spell: spells.maneuver_goading_attack }],
          },
          {
            name_set: spells.maneuver_rally[0].name,
            spells: [{ spell: spells.maneuver_rally }],
          },
          {
            name_set: spells.maneuver_pushing_attack[0].name,
            spells: [{ spell: spells.maneuver_pushing_attack }],
          },
          {
            name_set: spells.maneuver_precision_attack[0].name,
            spells: [{ spell: spells.maneuver_precision_attack }],
          },
          {
            name_set: spells.maneuver_commanders_strike[0].name,
            spells: [{ spell: spells.maneuver_commanders_strike }],
          },
          {
            name_set: spells.maneuver_sweeping_attack[0].name,
            spells: [{ spell: spells.maneuver_sweeping_attack }],
          },
        ],
      },
    ],
  },

  grappler: {
    name: "feat_grappler",
    details: "feat_grappler_details",
    condition: "condition_strength_13plus",
    //Требования: Сила 13 или вьіше

    filter:{
      stats: [
        {
          name: "strength",
          min_num: 13,
        },
      ]
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_attack_grapple",
      },
      {
        type: "plus",
        keyword: "restrain",
        details: "creature_on_addititonal_grapple",
      },
    ],
  },

  brawler: {
    name: "feat_brawler",
    details: "feat_brawler_details",

    fines: [
      {
        type: "plus",
        keyword: "damage_increase",
        details: "of_unarmed_strike",
      },
    ],

    stats: [
      {
        name: "strength",
        num: 1,
      },
      {
        name: "constitution",
        num: 1,
      },
    ],

    specials: [
      {
        type: "weapon",
        dice_foo: "Dic_14_Lvl_or_Default",
        //weapon_unarmed_strike: "1d4",
      },
    ],

    proficiencies: {
      weapons: [weaponry.improvised],
    },

    spells: [
      {
        spell: spells.grapple,
      },
    ],
  },

  charger: {
    name: "feat_charger",
    details: "feat_charger_details",

    spells: [
      {
        spell: spells.charge_attack,
      },
      {
        spell: spells.charge_push,
      },
    ],
  },

  savage_attacker: {
    name: "feat_savage_attacker",
    details: "feat_savage_attacker_details",

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "of_damage_dice_once_per_move",
      },
    ],
  },

  sentinel: {
    name: "feat_sentinel",
    details: "feat_sentinel_details",

    fines: [
      {
        type: "plus",
        keyword: "provocation",
        details: "on_disengage",
      },
      {
        type: "plus",
        keyword: "provocation",
        details: "on_ally_attack",
      },
      {
        type: "plus",
        keyword: "stopka",
        details: "creature_affected_provoked_attack",
      },
    ],
  },

  mounted_combatant: {
    name: "feat_mounted_combatant",
    details: "feat_mounted_combatant_details",

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_mounted_attack",
      },
      {
        type: "resistance",
        keyword: "redirect_attack",
        details: "from_mount_on_self",
      },
      {
        type: "resistance",
        keyword: "reduce_damage",
        details: "on_mount_save_dex",
      },
    ],
  },

  mage_slayer: {
    name: "feat_mage_slayer",
    details: "feat_mage_slayer_details",

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_save_spells_near",
      },
      {
        type: "plus",
        keyword: "disadvantage",
        details: "on_concentration_to_attacked_creature",
      },
      {
        type: "plus",
        keyword: "provocation",
        details: "on_casting_near",
      },
    ],
  },

  // NOTE - magic

  magic_initiate: {
    name: "feat_magic_initiate",
    details: "feat_magic_initiate_details",

    settings: [
      {
        type: "custom",
        name: "magic_class",
        select: 1,
        position: 2,
        list: [
          {
            name: "feat_magic_initiate_cleric",
            details: "feat_magic_initiate_details_cleric",

            charges: [
              {
                name: "spell_cleric",
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

            // fines: [
            //   {
            //     type: "plus",
            //     keyword: "use_no_mana",
            //     details: "one_spell_cleric",
            //   },
            // ],

            settings: [
              {
                type: "custom",
                name: "spells_0",
                position: 3,
                select: 2,
                list: [
                  //spells[0] cleric
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ spell: spells.mending }],
                  },
                  {
                    name_set: spells.light[0].name,
                    spells: [{ spell: spells.light }],
                  },
                  {
                    name_set: spells.sacred_flame[0].name,
                    spells: [{ spell: spells.sacred_flame }],
                  },
                  {
                    name_set: spells.resistance[0].name,
                    spells: [{ spell: spells.resistance }],
                  },
                  {
                    name_set: spells.guidance[0].name,
                    spells: [{ spell: spells.guidance }],
                  },
                  {
                    name_set: spells.spare_the_dying[0].name,
                    spells: [{ spell: spells.spare_the_dying }],
                  },
                  {
                    name_set: spells.thaumaturgy[0].name,
                    spells: [{ spell: spells.thaumaturgy }],
                  },
                ]
              },
              {
                // TODO - Apply alterations
                // выберите одно заклинание 1 уровня из этого же списка. Вы узнаёте это заклинание и можете накладывать его на минимально возможном уровне. После использования заклинания вы должны закончить продолжительный отдых, прежде чем сможете снова использовать его этой чертой.
                //Базовая характеристика для этих заклинаний зависит от выбранного класса:
                //Харизма для барда колдуна и чародея;
                //Интеллект для волшебника;
                //Мудрость для друида и жреца.
                type: "custom",
                name: "spells_1",
                position: 4,
                select: 1,
                list: [
                  //spells[1] cleric
                  {
                    name_set: spells.bless[0].name,
                    spells: [{ spell: spells.bless }],
                  },
                  {
                    name_set: spells.protection_from_evil_and_good[0].name,
                    spells: [{ spell: spells.protection_from_evil_and_good }],
                  },
                  {
                    name_set: spells.healing_word[0].name,
                    spells: [{ spell: spells.healing_word }],
                  },
                  {
                    name_set: spells.cure_wounds[0].name,
                    spells: [{ spell: spells.cure_wounds }],
                  },
                  {
                    name_set: spells.inflict_wounds[0].name,
                    spells: [{ spell: spells.inflict_wounds }],
                  },
                  {
                    name_set: spells.guiding_bolt[0].name,
                    spells: [{ spell: spells.guiding_bolt }],
                  },
                  {
                    name_set: spells.detect_poison_and_disease[0].name,
                    spells: [{ spell: spells.detect_poison_and_disease }],
                  },
                  {
                    name_set: spells.detect_evil_and_good[0].name,
                    spells: [{ spell: spells.detect_evil_and_good }],
                  },
                  {
                    name_set: spells.detect_magic[0].name,
                    spells: [{ spell: spells.detect_magic }],
                  },
                  {
                    name_set: spells.purify_food_and_drink[0].name,
                    spells: [{ spell: spells.purify_food_and_drink }],
                  },
                  {
                    name_set: spells.bane[0].name,
                    spells: [{ spell: spells.bane }],
                  },
                  {
                    name_set: spells.command[0].name,
                    spells: [{ spell: spells.command }],
                  },
                  {
                    name_set: spells.create_or_destroy_water[0].name,
                    spells: [{ spell: spells.create_or_destroy_water }],
                  },
                  {
                    name_set: spells.sanctuary[0].name,
                    spells: [{ spell: spells.sanctuary }],
                  },
                  {
                    name_set: spells.shield_of_faith[0].name,
                    spells: [{ spell: spells.shield_of_faith }],
                  },
                ]
              },
            ],
          },
          {
            name: "feat_magic_initiate_druid",
            details: "feat_magic_initiate_details_druid",

            charges: [
              {
                name: "spell_druid",
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

            // fines: [
            //   {
            //     type: "plus",
            //     keyword: "use_no_mana",
            //     details: "one_spell_druid",
            //   },
            // ],

            settings: [
              {
                type: "custom",
                name: "spells_0",
                position: 3,
                select: 2,
                list: [
                  //spells[0] druid
                  {
                    name_set: spells.shillelagh[0].name,
                    spells: [{ spell: spells.shillelagh }],
                  },
                  {
                    name_set: spells.druidcraft[0].name,
                    spells: [{ spell: spells.druidcraft }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ spell: spells.mending }],
                  },
                  {
                    name_set: spells.resistance[0].name,
                    spells: [{ spell: spells.resistance }],
                  },
                  {
                    name_set: spells.produce_flame[0].name,
                    spells: [{ spell: spells.produce_flame }],
                  },
                  {
                    name_set: spells.thorn_whip[0].name,
                    spells: [{ spell: spells.thorn_whip }],
                  },
                  {
                    name_set: spells.guidance[0].name,
                    spells: [{ spell: spells.guidance }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ spell: spells.poison_spray }],
                  },
                ]
              },
              // {
              //   type: "spells",
              //   name: "spells_0",
              //   position: 3,
              //   select: 2,
              //   mana_min: 0,
              //   mana_max: 0,
              //   classes: ["druid"],
              // },
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 1,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["druid"], }
                //TODO - поставить на заклинании какую-то метку?
              },
            ],
          },
          {
            name: "feat_magic_initiate_warlock",
            details: "feat_magic_initiate_details_warlock",

            charges: [
              {
                name: "spell_warlock",
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

            // fines: [
            //   {
            //     type: "plus",
            //     keyword: "use_no_mana",
            //     details: "one_spell_warlock",
            //   },
            // ],

            settings: [
              {
                type: "custom",
                name: "spells_0",
                position: 3,
                select: 2,
                list: [
                  //spells[0] warlock
                  {
                    name_set: spells.mage_hand[0].name,
                    spells: [{ spell: spells.mage_hand }],
                  },
                  {
                    name_set: spells.friends[0].name,
                    spells: [{ spell: spells.friends }],
                  },
                  {
                    name_set: spells.blade_ward[0].name,
                    spells: [{ spell: spells.blade_ward }],
                  },
                  {
                    name_set: spells.chill_touch[0].name,
                    spells: [{ spell: spells.chill_touch }],
                  },
                  {
                    name_set: spells.minor_illusion[0].name,
                    spells: [{ spell: spells.minor_illusion }],
                  },
                  {
                    name_set: spells.true_strike[0].name,
                    spells: [{ spell: spells.true_strike }],
                  },
                  {
                    name_set: spells.eldritch_blast[0].name,
                    spells: [{ spell: spells.eldritch_blast }],
                  },
                  {
                    name_set: spells.prestidigitation[0].name,
                    spells: [{ spell: spells.prestidigitation }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ spell: spells.poison_spray }],
                  },
                ]
              },
              // {
              //   type: "spells",
              //   name: "spells_0",
              //   position: 3,
              //   select: 2,
              //   mana_min: 0,
              //   mana_max: 0,
              //   classes: ["warlock"],
              // },
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 1,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["warlock"],}
                //TODO - поставить на заклинании какую-то метку?
              },
            ],
          },
          {
            name: "feat_magic_initiate_sorcerer",
            details: "feat_magic_initiate_details_sorcerer",

            charges: [
              {
                name: "spell_sorcerer",
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

            // fines: [
            //   {
            //     type: "plus",
            //     keyword: "use_no_mana",
            //     details: "one_spell_sorcerer",
            //   },
            // ],

            settings: [
              {
                type: "custom",
                name: "spells_0",
                position: 3,
                select: 2,
                list: [
                  //spells[0] sorcerer
                  {
                    name_set: spells.acid_splash[0].name,
                    spells: [{ spell: spells.acid_splash }],
                  },
                  {
                    name_set: spells.mage_hand[0].name,
                    spells: [{ spell: spells.mage_hand }],
                  },
                  {
                    name_set: spells.friends[0].name,
                    spells: [{ spell: spells.friends }],
                  },
                  {
                    name_set: spells.blade_ward[0].name,
                    spells: [{ spell: spells.blade_ward }],
                  },
                  {
                    name_set: spells.chill_touch[0].name,
                    spells: [{ spell: spells.chill_touch }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.minor_illusion[0].name,
                    spells: [{ spell: spells.minor_illusion }],
                  },
                  {
                    name_set: spells.true_strike[0].name,
                    spells: [{ spell: spells.true_strike }],
                  },
                  {
                    name_set: spells.fire_bolt[0].name,
                    spells: [{ spell: spells.fire_bolt }],
                  },
                  {
                    name_set: spells.dancing_lights[0].name,
                    spells: [{ spell: spells.dancing_lights }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ spell: spells.mending }],
                  },
                  {
                    name_set: spells.light[0].name,
                    spells: [{ spell: spells.light }],
                  },
                  {
                    name_set: spells.message[0].name,
                    spells: [{ spell: spells.message }],
                  },
                  {
                    name_set: spells.prestidigitation[0].name,
                    spells: [{ spell: spells.prestidigitation }],
                  },
                  {
                    name_set: spells.shocking_grasp[0].name,
                    spells: [{ spell: spells.shocking_grasp }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ spell: spells.poison_spray }],
                  },
                ]
              },
              // {
              //   type: "spells",
              //   name: "spells_0",
              //   position: 3,
              //   select: 2,
              //   mana_min: 0,
              //   mana_max: 0,
              //   classes: ["sorcerer"],
              // },
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 1,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["sorcerer"], }
                //TODO - поставить на заклинании какую-то метку?
              },
            ],
          },
          {
            name: "feat_magic_initiate_wizard",
            details: "feat_magic_initiate_details_wizard",

            charges: [
              {
                name: "spell_wizard",
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

            // fines: [
            //   {
            //     type: "plus",
            //     keyword: "use_no_mana",
            //     details: "one_spell_wizard",
            //   },
            // ],

            settings: [
              {
                level: 3,
                type: "custom",
                position: 3,
                name: "spells_0",
                select: 2,
                list: [
                  // spells[0] wizard
                  {
                    name_set: spells.acid_splash[0].name,
                    spells: [{ spell: spells.acid_splash }],
                  },
                  {
                    name_set: spells.mage_hand[0].name,
                    spells: [{ spell: spells.mage_hand }],
                  },
                  {
                    name_set: spells.friends[0].name,
                    spells: [{ spell: spells.friends }],
                  },
                  {
                    name_set: spells.blade_ward[0].name,
                    spells: [{ spell: spells.blade_ward }],
                  },
                  {
                    name_set: spells.chill_touch[0].name,
                    spells: [{ spell: spells.chill_touch }],
                  },
                  {
                    name_set: spells.ray_of_frost[0].name,
                    spells: [{ spell: spells.ray_of_frost }],
                  },
                  {
                    name_set: spells.minor_illusion[0].name,
                    spells: [{ spell: spells.minor_illusion }],
                  },
                  {
                    name_set: spells.true_strike[0].name,
                    spells: [{ spell: spells.true_strike }],
                  },
                  {
                    name_set: spells.fire_bolt[0].name,
                    spells: [{ spell: spells.fire_bolt }],
                  },
                  {
                    name_set: spells.dancing_lights[0].name,
                    spells: [{ spell: spells.dancing_lights }],
                  },
                  {
                    name_set: spells.mending[0].name,
                    spells: [{ spell: spells.mending }],
                  },
                  {
                    name_set: spells.light[0].name,
                    spells: [{ spell: spells.light }],
                  },
                  {
                    name_set: spells.message[0].name,
                    spells: [{ spell: spells.message }],
                  },
                  {
                    name_set: spells.prestidigitation[0].name,
                    spells: [{ spell: spells.prestidigitation }],
                  },
                  {
                    name_set: spells.shocking_grasp[0].name,
                    spells: [{ spell: spells.shocking_grasp }],
                  },
                  {
                    name_set: spells.poison_spray[0].name,
                    spells: [{ spell: spells.poison_spray }],
                  },
                ],
              },
              // {
              //   type: "spells",
              //   name: "spells_0",
              //   position: 3,
              //   select: 2,
              //   mana_min: 0,
              //   mana_max: 0,
              //   classes: ["wizard"],
              // },
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 1,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["wizard"], }
                //TODO - поставить на заклинании какую-то метку?
              },
            ],
          },
          {
            name: "feat_magic_initiate_bard",
            details: "feat_magic_initiate_details_bard",

            charges: [
              {
                name: "spell_bard",
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

            // fines: [
            //   {
            //     type: "plus",
            //     keyword: "use_no_mana",
            //     details: "one_spell_bard",
            //   },
            // ],

            settings: [
              {
              level: 3,
              type: "custom",
              position: 3,
              name: "spells_0",
              select: 2,
              list: [
                // spells[0] bard
                {
                  name_set: spells.mage_hand[0].name,
                  spells: [{ spell: spells.mage_hand }],
                },
                {
                  name_set: spells.friends[0].name,
                  spells: [{ spell: spells.friends }],
                },
                {
                  name_set: spells.blade_ward[0].name,
                  spells: [{ spell: spells.blade_ward }],
                },
                {
                  name_set: spells.vicious_mockery[0].name,
                  spells: [{ spell: spells.vicious_mockery }],
                },
                {
                  name_set: spells.minor_illusion[0].name,
                  spells: [{ spell: spells.minor_illusion }],
                },
                {
                  name_set: spells.true_strike[0].name,
                  spells: [{ spell: spells.true_strike }],
                },
                {
                  name_set: spells.dancing_lights[0].name,
                  spells: [{ spell: spells.dancing_lights }],
                },
                {
                  name_set: spells.mending[0].name,
                  spells: [{ spell: spells.mending }],
                },
                {
                  name_set: spells.light[0].name,
                  spells: [{ spell: spells.light }],
                },
                {
                  name_set: spells.message[0].name,
                  spells: [{ spell: spells.message }],
                },
                {
                  name_set: spells.prestidigitation[0].name,
                  spells: [{ spell: spells.prestidigitation }],
                },
              ],
              },
              // {
              //   type: "spells",
              //   name: "spells_0",
              //   position: 3,
              //   select: 2,
              //   mana_min: 0,
              //   mana_max: 0,
              //   classes: ["bard"],
              // },
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 1,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["bard"], }
                //TODO - поставить на заклинании какую-то метку?
              },
            ],
          },
        ],
      },
    ],
  },

  ritual_caster: {
    name: "feat_ritual_caster",
    details: "feat_ritual_caster_details",
    condition: "condition_intelligence_or_wisdom_13plus",
    //Требования: Интеллект или Мудрость 13 или выше

    filter:{
      stats: [
        {
          name: "intelligence",
          min_num: 13,
        },
        {
          name: "wisdom",
          min_num: 13,
        },
      ]
    },

    spells: [
      {
        spell: spells.learn_ritual,
      },
    ],

    equipment: [
      {
        inventory: [[item.ritual_book, 1]],
      },
    ],

    settings: [
      {
        type: "custom",
        name: "magic_class",
        select: 1,
        position: 2,
        list: [
          {
            name: "feat_ritual_caster_cleric",
            details: "feat_ritual_caster_details_cleric",

            settings: [
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 2,
                mana_min: 1,
                mana_max: 1,
                filter: { 
                  classes: ["cleric"],
                  cast_time: "ritual",
                }
              },
            ],
          },
          {
            name: "feat_ritual_caster_druid",
            details: "feat_ritual_caster_details_druid",

            settings: [
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 2,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["druid"],
                cast_time: "ritual", }
              },
            ],
          },
          {
            name: "feat_ritual_caster_warlock",
            details: "feat_ritual_caster_details_warlock",

            settings: [
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 2,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["warlock"],
                cast_time: "ritual",}
              },
            ],
          },
          {
            name: "feat_ritual_caster_sorcerer",
            details: "feat_ritual_caster_details_sorcerer",

            settings: [
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 2,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["sorcerer"],
                cast_time: "ritual",}
              },
            ],
          },
          {
            name: "feat_ritual_caster_wizard",
            details: "feat_ritual_caster_details_wizard",

            settings: [
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 2,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["wizard"],
                cast_time: "ritual",}
              },
            ],
          },
          {
            name: "feat_ritual_caster_bard",
            details: "feat_ritual_caster_details_bard",

            settings: [
              {
                type: "spells",
                name: "spells_1",
                details: "no_mana_but_once_a_day",
                position: 4,
                select: 2,
                mana_min: 1,
                mana_max: 1,
                filter: { classes: ["bard"],
                cast_time: "ritual", }
              },
            ],
          },
        ],
      },
    ],
  },

  war_caster: {
    name: "feat_war_caster",
    details: "feat_war_caster_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_con_save_while_concentrating",
      },
      {
        type: "plus",
        keyword: "use_somatic",
        details: "in_taken_hands",
      },
      {
        type: "plus",
        keyword: "cast_reaction",
        details: "for_spells_action",
      },
    ],
  },

  spell_sniper: {
    name: "feat_spell_sniper",
    details: "feat_spell_sniper_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "double_range",
        details: "on_spells_with_aim",
      },
      {
        type: "plus",
        keyword: "ignoring",
        details: "on_covers_spells",
      },
    ],

    settings: [
      {
        type: "custom",
        name: "spells_0",
        position: 3,
        select: 1,
        list:[
          {
            name_set: spells.eldritch_blast[0].name,
            spells: [{spell:spells.eldritch_blast}],
          },
          {
            name_set: spells.fire_bolt[0].name,
            spells: [{spell:spells.fire_bolt}]
          },
          {
            name_set: spells.ray_of_frost[0].name,
            spells: [{spell:spells.ray_of_frost}]
          },
          {
            name_set: spells.shocking_grasp[0].name,
            spells: [{spell:spells.shocking_grasp}]
          },
          {
            name_set: spells.thorn_whip[0].name,
            spells: [{spell:spells.thorn_whip}]
          },
        ]
      },
    ],
  },

  elemental_adept_sound: {
    name: "feat_elemental_adept_sound",
    details: "feat_elemental_adept_sound_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "ignoring",
        details: "of_resistanse_sound",
      },
      {
        type: "plus",
        keyword: "two_min",
        details: "on_damage_dice_of_sound",
      },
    ],
  },

  elemental_adept_acid: {
    name: "feat_elemental_adept_acid",
    details: "feat_elemental_adept_acid_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "ignoring",
        details: "of_resistanse_acid",
      },
      {
        type: "plus",
        keyword: "two_min",
        details: "on_damage_dice_of_acid",
      },
    ],
  },

  elemental_adept_fire: {
    name: "feat_elemental_adept_fire",
    details: "feat_elemental_adept_fire_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "ignoring",
        details: "of_resistanse_fire",
      },
      {
        type: "plus",
        keyword: "two_min",
        details: "on_damage_dice_of_fire",
      },
    ],
  },

  elemental_adept_cold: {
    name: "feat_elemental_adept_cold",
    details: "feat_elemental_adept_cold_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "ignoring",
        details: "of_resistanse_cold",
      },
      {
        type: "plus",
        keyword: "two_min",
        details: "on_damage_dice_of_cold",
      },
    ],
  },

  elemental_adept_electricity: {
    name: "feat_elemental_adept_electricity",
    details: "feat_elemental_adept_electricity_details",
    condition: "condition_spellcasting",
    //Требования: Способность накладьівать хотя бьі одно заклинание

    filter:{
      spells_exception: [
        {
          type: "ability",
        },
      ]
    },

    fines: [
      {
        type: "plus",
        keyword: "ignoring",
        details: "of_resistanse_electricity",
      },
      {
        type: "plus",
        keyword: "two_min",
        details: "on_damage_dice_of_electricity",
      },
    ],
  },
};
