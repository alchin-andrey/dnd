import { rage_expanded_15 } from "../texts/ua/spells.js";
import spells from "./list_spells.js";
import weaponry from "./kinds_weapons.js";
import armory from "./kinds_armor.js";

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
        initiative: 5,
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
        details: "without_speed_fee",
      },
    ],
  },

  war_caster: {
    name: "feat_war_caster",
    details: "feat_war_caster_details",

    condition: "spell_attribute",
    //Требования: Способность накладывать хотя бы одно заклинание

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
    //Требования: Сила 13 или выше

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
        keyword: "advantage_x3",
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
        details: "on_known_languages",
      },
    ],
  },

  martial_adept: {
    name: "feat_martial_adept",
    details: "feat_martial_adept_details",

    charges: [
      {
        name: "superiority_dice_feat",
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
    //Требования: Харизма 13 или выше

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

    proficiencies: [
      {
        weaponry: [weaponry.improvised],
      },
    ],

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

    proficiencies: [
      {
        armory: [armory.light],
      },
    ],
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

    proficiencies: [
      {
        armory: [armory.medium, armory.shields],
      },
    ],
  },

  heavily_armored: {
    name: "feat_heavily_armored",
    details: "feat_heavily_armored_details",

    stats: [
      {
        strength: 1,
      },
    ],

    proficiencies: [
      {
        armory: [armory.heavy],
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

  durable: {
    name: "feat_durable",
    details: "feat_durable_details",

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
    //Требования: Владение тяжелыми доспехами

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
    //Требования: Владение тяжелыми доспехами

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
          spell: spells.shield_push
        },
        {
          spell: spells.shield_block
        },
      ],
  },

  spell_sniper: {
    name: "feat_spell_sniper",
    details: "feat_spell_sniper_details",

    condition: "spells_make",
    //Требования: Способность накладывать хотя бы одно заклинание

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

      settings: 
      [
        {
            type: "spells",
            select: 1,
            filter: "mana_0",
        }
      ]
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

    spells:
    [
        {
            spell: spells.heavy_shot
        }
    ]
  },

  charger: {
    name: "feat_charger",
    details: "feat_charger_details",

    spells:
    [
        {
            spell: spells.charge_attack
        },
        {
            spell: spells.charge_push
        },
    ]
  },

  defensive_duelist: {
    name: "feat_defensive_duelist",
    details: "feat_defensive_duelist_details",

    condition: "dexterity > 12",
    //Требования: Ловкость 13 или выше

    fines: [
        {
          type: "plus",
          keyword: "mastery_bonus",
          details: "on_armor_finesse",
        },
      ],
  },





  example: {
    name: "feat_example",
    details: "feat_example_details",

    stats: [
      {
        //Если level отсутствует — применять для всех
        strength: 1,
        dexterity: 1,
        consitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
      },
      {
        level: 4,
        wisdom: 45,
        charisma: 21,
      },
    ],

    qualities: [
      {
        speed: 25,
        speed_bonus: 10,
        initiative: 2,
        armor_class: 2,
        mana1: 4,
        mana2: 3,
        mana3: 2,
        mana4: 1,
        mana5: 1,
        mana6: 1,
        mana7: 1,
        mana8: 1,
        mana9: 1,
        sorcery_points: 5,
        chi_points: 34,
        divine_channel: 2,
        supremacy_points: 6,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "advantage",
        details: "performace_deception_acting",
      },
      {
        level: 19,
        type: "plus",
        keyword: "mimicing",
        details: "other_creature_sound_1min",

        //условие - один из атрибутов MY
        condition: "this.$root.MY.if_no_heavy_armor", //необязательно

        // баф вьіраженньій в цифрах (или оба или ниодного)
        key: "speed_bonus",
        value: "15",
      },
    ],

    spells: [
      {
        spell: spells.rage,
      },
      {
        spell: spells.rage,
      },
      {
        level: 1,
        spell: spells.rage,
        charges: 5,
      },
    ],
  },
};
