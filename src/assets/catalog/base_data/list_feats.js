import spells from "./list_spells.js";
import weaponry from "./kinds_weapons.js";
import armory from "./kinds_armor.js";
import tools from "./kinds_tools.js";

export default {
  actor: {
    name: "feat_actor",
    details: "feat_actor_details",

    stats: [
      {
        charisma: 1,
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
        strength: 1,
        dexterity: 1,
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

  alert: {
    name: "feat_alert",
    details: "feat_alert_details",

    stats: [
      {
        initiative_bonus: 5,
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

  war_caster: {
    name: "feat_war_caster",
    details: "feat_war_caster_details",

    condition: "spell_attribute",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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

  grappler: {
    name: "feat_grappler",
    details: "feat_grappler_details",

    condition: "strength > 12",
    //Требования: Сила 13 или вьіше

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

  lucky: {
    name: "feat_lucky",
    details: "feat_lucky_details",

    fines: [
      {
        type: "advantage",
        keyword: "advantage",
        details: "on_any_d20",
      },
    ],

    charges: [
      {
        name: "luck_slot",
        list: [
          ["d20", 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        ],
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

  observant: {
    name: "feat_observant",
    details: "feat_observant_details",

    stats: [
      {
        intelligence: 1,
        wisdom: 1,
        perception_passive: 5,
        investigation_passive: 5,
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

    settings: [
      {
        level: 1,
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
    ],
  },

  inspiring_leader: {
    name: "feat_inspiring_leader",
    details: "feat_inspiring_leader_details",

    condition: "charisma > 12",
    //Требования: Харизма 13 или вьіше

    spells: [
      {
        spell: spells.inspiration,
      },
    ],
  },

  savage_attacker: {
    name: "feat_savage_attacker",
    details: "feat_savage_attacker_details",

    fines: [
      {
        type: "advantage",
        keyword: "rethrow",
        details: "of_damage_dice_once_per_move",
      },
    ],
  },

  brawler: {
    name: "feat_brawler",
    details: "feat_brawler_details",

    stats: [
      {
        strength: 1,
        constitution: 1,
        weapon_unarmed_strike: "1d4",
      },
    ],

    proficiencies: 
      {
        weaponry: [weaponry.improvised],
      },
    

    spells: [
      {
        spell: spells.grapple,
      },
    ],
  },

  lightly_armored: {
    name: "feat_lightly_armored",
    details: "feat_lightly_armored_details",

    stats: [
      {
        strength: 1,
        dexterity: 1,
      },
    ],

    proficiencies: 
      {
        armory: [armory.light],
      },
    
  },

  moderately_armored: {
    name: "feat_moderately_armored",
    details: "feat_moderately_armored_details",

    stats: [
      {
        strength: 1,
        dexterity: 1,
      },
    ],

    proficiencies: 
      {
        armory: [armory.medium, armory.shields],
      },
    
  },

  heavily_armored: {
    name: "feat_heavily_armored",
    details: "feat_heavily_armored_details",

    stats: [
      {
        strength: 1,
      },
    ],

    proficiencies: 
      {
        armory: [armory.heavy],
      },
    
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

  tough: {
    name: "feat_tough",
    details: "feat_tough_details",

    stats: [
      {
        level: 4,
        hp_bonus: 8,
      },
      {
        level: 5,
        hp_bonus: 2,
      },
      {
        level: 6,
        hp_bonus: 2,
      },
      {
        level: 7,
        hp_bonus: 2,
      },
      {
        level: 8,
        hp_bonus: 2,
      },
      {
        level: 9,
        hp_bonus: 2,
      },
      {
        level: 10,
        hp_bonus: 2,
      },
      {
        level: 11,
        hp_bonus: 2,
      },
      {
        level: 12,
        hp_bonus: 2,
      },
      {
        level: 13,
        hp_bonus: 2,
      },
      {
        level: 14,
        hp_bonus: 2,
      },
      {
        level: 15,
        hp_bonus: 2,
      },
      {
        level: 16,
        hp_bonus: 2,
      },
      {
        level: 17,
        hp_bonus: 2,
      },
      {
        level: 18,
        hp_bonus: 2,
      },
      {
        level: 19,
        hp_bonus: 2,
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
        strength: 1,
        dexterity: 1,
      },
    ],

    settings: [
      {
        type: "proficiency_weapon",
        select: 4,
      },
    ],
  },

  medium_armor_master: {
    name: "feat_medium_armor_master",
    details: "feat_medium_armor_master_details",

    condition: "proficiency_armor_medium",
    //Требования: Владение тяжельіми доспехами

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

    condition: "proficiency_armor_heavy",
    //Требования: Владение тяжельіми доспехами

    stats: [
      {
        strength: 1,
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

  spell_sniper: {
    name: "feat_spell_sniper",
    details: "feat_spell_sniper_details",

    condition: "spells_make",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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
        type: "spells",
        select: 1,
        filter: "mana_0",
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

  defensive_duelist: {
    name: "feat_defensive_duelist",
    details: "feat_defensive_duelist_details",

    condition: "dexterity > 12",
    //Требования: Ловкость 13 или вьіше

    fines: [
      {
        type: "plus",
        keyword: "mastery_bonus",
        details: "on_armor_finesse",
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
        select: 3,
        list: [
          {
            skills: {
              name: "athletics", num: "Mastery"
            },
          },
          {
            skills: {
              name: "acrobatics", num: "Mastery"
            },
          },
          {
            skills: {
              name: "sleight_of_hand", num: "Mastery"
            },
          },
          {
            skills: {
              name: "stealth", num: "Mastery"
            },
          },
          {
            skills: {
              name: "investigation", num: "Mastery"
            },
          },
          {
            skills: {
              name: "history", num: "Mastery"
            },
          },
          {
            skills: {
              name: "religion", num: "Mastery"
            },
          },
          {
            skills: {
              name: "arcana", num: "Mastery"
            },
          },
          {
            skills: {
              name: "nature", num: "Mastery"
            },
          },
          {
            skills: {
              name: "survival", num: "Mastery"
            },
          },
          {
            skills: {
              name: "perception", num: "Mastery"
            },
          },
          {
            skills: {
              name: "insight", num: "Mastery"
            },
          },
          {
            skills: {
              name: "medicine", num: "Mastery"
            },
          },
          {
            skills: {
              name: "animal_hanging", num: "Mastery"
            },
          },
          {
            skills: {
              name: "performance", num: "Mastery"
            },
          },
          {
            skills: {
              name: "persuasion", num: "Mastery"
            },
          },
          {
            skills: {
              name: "deception", num: "Mastery"
            },
          },
          {
            skills: {
              intimidation: "mastery",
            },
          },
          {
            proficiencies: 
              {
                tools: [tools.alchemists_supplies],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.blacksmith],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.brewer],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.calligraphers_supplies],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.carpenters_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.cartographers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.cobblers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.cooks_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.disguise],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.glassblowers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.jewelers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.leatherworkers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.mason],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.navigators_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.painters_supplies],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.poisoner],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.potters_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.tinkers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.weavers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.woodcarvers_tools],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_bagpipes],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_drums],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_dulcimer],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_flute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_horn],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_lute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_lyre],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_pan_flute],
              },
            
          },
          {
            proficiencies: 
              {
                tools: [tools.music_shawm],
              },
            
          },
          {
            proficiencies: 
              {
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
        intelligence: 1,
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

  mobile: {
    name: "feat_mobile",
    details: "feat_mobile_details",

    stats: [
      {
        speed_bonus: 10,
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

  magic_initiate_cleric: {
    name: "feat_magic_initiate_cleric",
    details: "feat_magic_initiate_details_cleric",

    fines: [
      {
        type: "plus",
        keyword: "use_no_mana",
        details: "one_spell_cleric",
      },
    ],

    settings: [
      {
        type: "spells",
        name: "spells_0",
        select: 2,
        mana_min: 0,
        mana_max: 0,
        classes: ["cleric"],
      },
      {
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 1,
        mana_min: 1,
        mana_max: 1,
        classes: ["cleric"],
      },
    ],
  },

  magic_initiate_druid: {
    name: "feat_magic_initiate_druid",
    details: "feat_magic_initiate_details_druid",

    fines: [
      {
        type: "plus",
        keyword: "use_no_mana",
        details: "one_spell_druid",
      },
    ],

    settings: [
      {
        type: "spells",
        name: "spells_0",
        select: 2,
        mana_min: 0,
        mana_max: 0,
        classes: ["druid"],
      },
      {
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 1,
        mana_min: 1,
        mana_max: 1,
        classes: ["druid"],
      },
    ],
  },

  magic_initiate_warlock: {
    name: "feat_magic_initiate_warlock",
    details: "feat_magic_initiate_details_warlock",

    fines: [
      {
        type: "plus",
        keyword: "use_no_mana",
        details: "one_spell_warlock",
      },
    ],

    settings: [
      {
        type: "spells",
        name: "spells_0",
        select: 2,
        mana_min: 0,
        mana_max: 0,
        classes: ["warlock"],
      },
      {
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 1,
        mana_min: 1,
        mana_max: 1,
        classes: ["warlock"],
      },
    ],
  },

  magic_initiate_sorcerer: {
    name: "feat_magic_initiate_sorcerer",
    details: "feat_magic_initiate_details_sorcerer",

    fines: [
      {
        type: "plus",
        keyword: "use_no_mana",
        details: "one_spell_sorcerer",
      },
    ],

    settings: [
      {
        type: "spells",
        name: "spells_0",
        select: 2,
        mana_min: 0,
        mana_max: 0,
        classes: ["sorcerer"],
      },
      {
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 1,
        mana_min: 1,
        mana_max: 1,
        classes: ["sorcerer"],
      },
    ],
  },

  magic_initiate_wizard: {
    name: "feat_magic_initiate_wizard",
    details: "feat_magic_initiate_details_wizard",

    fines: [
      {
        type: "plus",
        keyword: "use_no_mana",
        details: "one_spell_wizard",
      },
    ],

    settings: [
      {
        type: "spells",
        name: "spells_0",
        select: 2,
        mana_min: 0,
        mana_max: 0,
        classes: ["wizard"],
      },
      {
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 1,
        mana_min: 1,
        mana_max: 1,
        classes: ["wizard"],
      },
    ],
  },

  magic_initiate_bard: {
    name: "feat_magic_initiate_bard",
    details: "feat_magic_initiate_details_bard",

    fines: [
      {
        type: "plus",
        keyword: "use_no_mana",
        details: "one_spell_bard",
      },
    ],

    settings: [
      {
        type: "spells",
        name: "spells_0",
        select: 2,
        mana_min: 0,
        mana_max: 0,
        classes: ["bard"],
      },
      {
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 1,
        mana_min: 1,
        mana_max: 1,
        classes: ["bard"],
      },
    ],
  },

  skulker: {
    name: "feat_skulker",
    details: "feat_skulker_details",

    condition: "dexterity > 12",
    //Требования: Ловкость 13 или вьіше

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

  ritual_caster_cleric: {
    name: "feat_ritual_caster_cleric",
    details: "feat_ritual_caster_details_cleric",

    condition: "intelligence > 12 || wisdom > 12",
    //Требования: Ловкость 13 или вьіше

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
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 2,
        mana_min: 1,
        mana_max: 1,
        classes: ["cleric"],
        cast_time: "ritual",
      },
    ],
  },

  ritual_caster_druid: {
    name: "feat_ritual_caster_druid",
    details: "feat_ritual_caster_details_druid",

    condition: "intelligence > 12 || wisdom > 12",
    //Требования: Ловкость 13 или вьіше

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
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 2,
        mana_min: 1,
        mana_max: 1,
        classes: ["druid"],
        cast_time: "ritual",
      },
    ],
  },

  ritual_caster_warlock: {
    name: "feat_ritual_caster_warlock",
    details: "feat_ritual_caster_details_warlock",

    condition: "intelligence > 12 || wisdom > 12",
    //Требования: Ловкость 13 или вьіше

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
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 2,
        mana_min: 1,
        mana_max: 1,
        classes: ["warlock"],
        cast_time: "ritual",
      },
    ],
  },

  ritual_caster_sorcerer: {
    name: "feat_ritual_caster_sorcerer",
    details: "feat_ritual_caster_details_sorcerer",

    condition: "intelligence > 12 || wisdom > 12",
    //Требования: Ловкость 13 или вьіше

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
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 2,
        mana_min: 1,
        mana_max: 1,
        classes: ["sorcerer"],
        cast_time: "ritual",
      },
    ],
  },

  ritual_caster_wizard: {
    name: "feat_ritual_caster_wizard",
    details: "feat_ritual_caster_details_wizard",

    condition: "intelligence > 12 || wisdom > 12",
    //Требования: Ловкость 13 или вьіше

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
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_once_a_day",
        select: 2,
        mana_min: 1,
        mana_max: 1,
        classes: ["wizard"],
        cast_time: "ritual",
      },
    ],
  },

  ritual_caster_bard: {
    name: "feat_ritual_caster_bard",
    details: "feat_ritual_caster_details_bard",

    condition: "intelligence > 12 || wisdom > 12",
    //Требования: Ловкость 13 или вьіше

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
        type: "spells",
        name: "spells_1",
        details: "no_mana_but_ritual",
        select: 2,
        mana_min: 1,
        mana_max: 1,
        classes: ["bard"],
        cast_time: "ritual",
      },
    ],
  },

  elemental_adept_sound: {
    name: "feat_elemental_adept_sound",
    details: "feat_elemental_adept_sound_details",

    condition: "spell_attribute",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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

    condition: "spell_attribute",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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

    condition: "spell_attribute",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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

    condition: "spell_attribute",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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

    condition: "spell_attribute",
    //Требования: Способность накладьівать хотя бьі одно заклинание

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

  durable: {
    name: "feat_durable",
    details: "feat_durable_details",

    stats: [
      {
        consitution: 1,
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

  resilient_strength: {
    name: "feat_resilient_strength",
    details: "strength_details",

    stats: [
      {
        strength: 1,
        strength_saving: 1,
      },
    ],
  },

  resilient_dexterity: {
    name: "feat_resilient_dexterity",
    details: "dexterity_details",

    stats: [
      {
        dexterity: 1,
        dexterity_saving: 1,
      },
    ],
  },

  resilient_constitution: {
    name: "feat_resilient_constitution",
    details: "constitution_details",

    stats: [
      {
        constitution: 1,
        constitution_saving: 1,
      },
    ],
  },

  resilient_intelligence: {
    name: "feat_resilient_intelligence",
    details: "intelligence_details",

    stats: [
      {
        intelligence: 1,
        intelligence_saving: 1,
      },
    ],
  },

  resilient_wisdom: {
    name: "feat_resilient_wisdom",
    details: "wisdom_details",

    stats: [
      {
        wisdom: 1,
        wisdom_saving: 1,
      },
    ],
  },

  resilient_charisma: {
    name: "feat_resilient_charisma",
    details: "charisma_details",

    stats: [
      {
        charisma: 1,
        charisma_saving: 1,
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

    spells:[
        {
            spell: spells.crossbow_shot,
        }
    ]
  },

  linguist: {
    name: "feat_linguist",
    details: "feat_linguist_details",

    stats: [
      {
        intelligence: 1,
      },
    ],

    spells: [
        {
            spell: spells.create_crypt,
        }
    ],

    settings: [
        {
          type: "languages",
          select: 3,
          filter: "no_used",
        }
      ],

    
  },
};
