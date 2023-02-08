import tools from "./kinds_tools.js";
import weapons from "./list_weapons.js";
import items from "./list_items.js";

export default {
  entertainer: {
    name: "back_entertainer",
    details: "back_entertainer_details",

    skills: [
        { name: "acrobatics", num: "Mastery", details: "acrobatics_details", },

        { name: "performance", num: "Mastery", details: "performance_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.disguise],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [[items.fan_gift, 1]],
        inventory_packs: [],
        gold: 15,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "free_bnb",
        details: "for_daily_performance",
      },
    ],

    settings: [
      {
        type: "custom",
        name: "tool",
        select: 1,
        list: [
          {
            equipment: [{ inventory: [[items.music_bagpipes, 1]] }],
            proficiencies: { tools: [tools.music_bagpipes] },
          },
          {
            equipment: [{ inventory: [[items.music_drums, 1]] }],
            proficiencies: { tools: [tools.music_drums] },
          },
          {
            equipment: [{ inventory: [[items.music_dulcimer, 1]] }],
            proficiencies: { tools: [tools.music_dulcimer] },
          },
          {
            equipment: [{ inventory: [[items.music_flute, 1]] }],
            proficiencies: { tools: [tools.music_flute] },
          },
          {
            equipment: [{ inventory: [[items.music_horn, 1]] }],
            proficiencies: { tools: [tools.music_horn] },
          },
          {
            equipment: [{ inventory: [[items.music_lute, 1]] }],
            proficiencies: { tools: [tools.music_lute] },
          },
          {
            equipment: [{ inventory: [[items.music_lyre, 1]] }],
            proficiencies: { tools: [tools.music_lyre] },
          },
          {
            equipment: [{ inventory: [[items.music_pan_flute, 1]] }],
            proficiencies: { tools: [tools.music_pan_flute] },
          },
          {
            equipment: [{ inventory: [[items.music_shawm, 1]] }],
            proficiencies: { tools: [tools.music_shawm] },
          },
          {
            equipment: [{ inventory: [[items.music_viol, 1]] }],
            proficiencies: { tools: [tools.music_viol] },
          },
        ],
      },
    ],
  },

  urchin: {
    name: "back_urchin",
    details: "back_urchin_details",

    skills: [
        { name: "sleight_of_hand", num: "Mastery", details: "sleight_of_hand_details", },
        { name: "stealth", num: "Mastery", details: "stealth_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.thief, tools.disguise],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.knife, 1],
          [items.map_urchin, 1],
          [items.pet_mouse, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 10,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "double_speed",
        details: "for_team_in_city",
      },
    ],
  },

  noble: {
    name: "back_noble",
    details: "back_noble_details",

    skills: [
        { name: "history", num: "Mastery", details: "history_details", },

        { name: "persuasion", num: "Mastery", details: "persuasion_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.fine_clothes, 1],
          [items.stamp_ring, 1],
          [items.scroll_lifeline, 1],
        ],
        inventory_packs: [],
        gold: 25,
      },
    ],

    settings: [
      {
        type: "custom",
        name: "legacy",
        select: 1,
        list: [
          {
            name: "nobelty",

            fines: [
              {
                type: "plus",
                keyword: "acceptance",
                details: "among_nobelty_and_good_treatment",
              },
            ],
          },
          {
            name: "servants",

            fines: [
              {
                type: "plus",
                keyword: "three_servants",
                details: "three_servants_details",
              },
            ],
          },
        ],
      },
      {
        level: 1,
        type: "languages",
        name: "languages",
        select: 1,
        filter: "no_used",
      },
      {
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {
            proficiencies: { tools: [tools.playing_dragon_chess] },
          },
          {
            proficiencies: { tools: [tools.playing_dragon_poker] },
          },
          {
            proficiencies: { tools: [tools.playing_dice] },
          },
        ],
      },
    ],
  }, // tools, items

  guild_artisan: {
    name: "back_guild_artisan",
    details: "back_guild_artisan_details",

    skills: [
        { name: "insight", num: "Mastery", details: "insight_details", },

        { name: "persuasion", num: "Mastery", details: "persuasion_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.guild_letter, 1],
          [items.travelers_clothes, 1],
        ],
        inventory_packs: [],
        gold: 15,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "free_bnb",
        details: "from_guildmates",
      },
      {
        type: "plus",
        keyword: "help_in_prison",
        details: "from_guildmates",
      },
      {
        type: "plus",
        keyword: "acceptance",
        details: "among_nobelty_and_good_treatment",
      },
      {
        type: "minus",
        keyword: "gold_5_month",
        details: "to_guild_fund",
      },
    ],

    settings: [
      {
        level: 1,
        type: "languages",
        name: "languages",
        select: 1,
        filter: "no_used",
      },
      {
        type: "custom",
        name: "tool",
        select: 1,
        list: [
          {
            equipment: [{ inventory: [[items.tools_alchemists_supplies, 1]] }],
            proficiencies: { tools: [tools.alchemists_supplies] },
          },
          {
            equipment: [{ inventory: [[items.tools_blacksmith, 1]] }],
            proficiencies: { tools: [tools.blacksmith] },
          },
          {
            equipment: [{ inventory: [[items.tools_brewer, 1]] }],
            proficiencies: { tools: [tools.brewer] },
          },
          {
            equipment: [
              { inventory: [[items.tools_calligraphers_supplies, 1]] },
            ],
            proficiencies: { tools: [tools.calligraphers_supplies] },
          },
          {
            equipment: [{ inventory: [[items.tools_carpenters_tools, 1]] }],
            proficiencies: { tools: [tools.carpenters_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_cartographers_tools, 1]] }],
            proficiencies: { tools: [tools.cartographers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_navigators_tools, 1]] }],
            proficiencies: { tools: [tools.navigators_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_cobblers_tools, 1]] }],
            proficiencies: { tools: [tools.cobblers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_cooks_tools, 1]] }],
            proficiencies: { tools: [tools.cooks_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_glassblowers_tools, 1]] }],
            proficiencies: { tools: [tools.glassblowers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_jewelers_tools, 1]] }],
            proficiencies: { tools: [tools.jewelers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_leatherworkers_tools, 1]] }],
            proficiencies: { tools: [tools.leatherworkers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_mason, 1]] }],
            proficiencies: { tools: [tools.mason] },
          },
          {
            equipment: [{ inventory: [[items.tools_painters_supplies, 1]] }],
            proficiencies: { tools: [tools.painters_supplies] },
          },
          {
            equipment: [{ inventory: [[items.tools_potters_tools, 1]] }],
            proficiencies: { tools: [tools.potters_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_tinkers_tools, 1]] }],
            proficiencies: { tools: [tools.tinkers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_weavers_tools, 1]] }],
            proficiencies: { tools: [tools.weavers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_woodcarvers_tools, 1]] }],
            proficiencies: { tools: [tools.woodcarvers_tools] },
          },
        ],
      },
    ],
  }, // items

  sailor: {
    name: "back_sailor",
    details: "back_sailor_details",

    skills: [
        { name: "athletics", num: "Mastery", details: "athletics_details", },

        { name: "perception", num: "Mastery", details: "perception_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.navigators_tools, tools.transport_water],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [weapons.club],
        inventory: [
          [items.silk_rope, 1],
          [items.talisman_sailor, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 10,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "free_ride",
        details: "on_water_transport",
      },
    ],
  }, // tools, items

  sage: {
    name: "back_sage",
    details: "back_sage_details",

    skills: [
        { name: "history", num: "Mastery", details: "history_details", },

        { name: "arcana", num: "Mastery", details: "arcana_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.ink, 1],
          [items.ink_pen, 1],
          [items.knife, 1],
          [items.letter_question, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 10,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "knowledge",
        details: "of_every_clue",
      },
    ],

    settings: [
      {
        level: 1,
        type: "languages",
        name: "languages",
        select: 2,
        filter: "no_used",
      },
    ],
  }, // items

  folk_hero: {
    name: "back_folk_hero",
    details: "back_folk_hero_details",

    skills: [
        { name: "survival", num: "Mastery", details: "survival_details", },

        { name: "animal_handling", num: "Mastery", details: "animal_handling_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.transport_ground],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.shovel, 1],
          [items.iron_pot, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 10,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "free_help_and_shelter",
        details: "from_commoners",
      },
    ],

    settings: [
      {
        type: "custom",
        name: "tool",
        select: 1,
        list: [
          {
            equipment: [{ inventory: [[items.tools_alchemists_supplies, 1]] }],
            proficiencies: { tools: [tools.alchemists_supplies] },
          },
          {
            equipment: [{ inventory: [[items.tools_blacksmith, 1]] }],
            proficiencies: { tools: [tools.blacksmith] },
          },
          {
            equipment: [{ inventory: [[items.tools_, 1]] }],
            proficiencies: { tools: [tools.brewer] },
          },
          {
            equipment: [
              { inventory: [[items.tools_calligraphers_supplies, 1]] },
            ],
            proficiencies: { tools: [tools.calligraphers_supplies] },
          },
          {
            equipment: [{ inventory: [[items.tools_carpenters_tools, 1]] }],
            proficiencies: { tools: [tools.carpenters_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_cartographers_tools, 1]] }],
            proficiencies: { tools: [tools.cartographers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_cobblers_tools, 1]] }],
            proficiencies: { tools: [tools.cobblers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_cooks_tools, 1]] }],
            proficiencies: { tools: [tools.cooks_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_glassblowers_tools, 1]] }],
            proficiencies: { tools: [tools.glassblowers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_jewelers_tools, 1]] }],
            proficiencies: { tools: [tools.jewelers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_leatherworkers_tools, 1]] }],
            proficiencies: { tools: [tools.leatherworkers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_mason, 1]] }],
            proficiencies: { tools: [tools.mason] },
          },
          {
            equipment: [{ inventory: [[items.tools_painters_supplies, 1]] }],
            proficiencies: { tools: [tools.painters_supplies] },
          },
          {
            equipment: [{ inventory: [[items.tools_potters_tools, 1]] }],
            proficiencies: { tools: [tools.potters_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_tinkers_tools, 1]] }],
            proficiencies: { tools: [tools.tinkers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_weavers_tools, 1]] }],
            proficiencies: { tools: [tools.weavers_tools] },
          },
          {
            equipment: [{ inventory: [[items.tools_woodcarvers_tools, 1]] }],
            proficiencies: { tools: [tools.woodcarvers_tools] },
          },
        ],
      },
    ],
  }, //items

  hermit: {
    name: "back_hermit",
    details: "back_hermit_details",

    skills: [
        { name: "religion", num: "Mastery", details: "religion_details", },

        { name: "medicine", num: "Mastery", details: "medicine_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.herbalists_tools],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.scroll_tube, 1],
          [items.blanket, 1],
          [items.clothes, 1],
          [items.tools_herbalists_tools, 1],
        ],
        inventory_packs: [],
        gold: 5,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "knowledge",
        details: "of_some_mystery",
      },
    ],

    settings: [
      {
        level: 1,
        type: "languages",
        name: "languages",
        select: 1,
        filter: "no_used",
      },
    ],
  }, // items

  criminal: {
    name: "back_criminal",
    details: "back_criminal_details",

    skills: [
        { name: "stealth", num: "Mastery", details: "stealth_details", },

        { name: "deception", num: "Mastery", details: "deception_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.thief],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.crowbar, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 15,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "connector",
        details: "with_criminals",
      },
    ],

    settings: [
      {
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {
            proficiencies: { tools: [tools.playing_dragon_chess] },
          },
          {
            proficiencies: { tools: [tools.playing_dragon_poker] },
          },
          {
            proficiencies: { tools: [tools.playing_dice] },
          },
        ],
      },
    ],
  },

  acolyte: {
    name: "back_acolyte",
    details: "back_acolyte_details",

    skills: [
        { name: "religion", num: "Mastery", details: "religion_details", },

        { name: "insight", num: "Mastery", details: "insight_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.holy_symbol, 1],
          [items.music_drums, 1],
          [items.incense, 1],
          [items.vestment, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 15,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "free_bnb",
        details: "in_holy_places",
      },
    ],

    settings: [
      {
        level: 1,
        type: "languages",
        name: "languages",
        select: 2,
        filter: "no_used",
      },
    ],
  },

  soldier: {
    name: "back_soldier",
    details: "back_soldier_details",

    skills: [
        { name: "athletics", num: "Mastery", details: "athletics_details", },

        { name: "intimidation", num: "Mastery", details: "intimidation_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.transport_ground],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.medal, 1],
          [items.trophey, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 10,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "respect",
        details: "to_your_war_position",
      },
    ],

    settings: [
      {
        type: "custom",
        name: "packs",
        select: 1,
        list: [
          {
            equipment: [{ inventory: [[items.playing_dragon_chess, 1]] }],
            proficiencies: { tools: [tools.playing_dragon_chess] },
          },
          {
            equipment: [{ inventory: [[items.playing_cards, 1]] }],
            proficiencies: { tools: [tools.playing_cards] },
          },
          {
            equipment: [{ inventory: [[items.playing_dice, 1]] }],
            proficiencies: { tools: [tools.playing_dice] },
          },
          {
            equipment: [{ inventory: [[items.playing_three_dragons, 1]] }],
            proficiencies: { tools: [tools.playing_three_dragons] },
          },
        ],
      },
    ],
  }, // items

  outlander: {
    name: "back_outlander",
    details: "back_outlander_details",

    skills: [
        { name: "athletics", num: "Mastery", details: "athletics_details", },

        { name: "survival", num: "Mastery", details: "survival_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.staff, 1],
          [items.hunting_trap, 1],
          [items.trophey_animal, 1],
          [items.travelers_clothes, 1],
        ],
        inventory_packs: [],
        gold: 10,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "able_to_remember",
        details: "of_maps_and_terrains",
      },
      {
        type: "plus",
        keyword: "able_to_find",
        details: "food_and_water",
      },
    ],

    settings: [
      {
        level: 1,
        type: "languages",
        name: "languages",
        select: 1,
        filter: "no_used",
      },
      {
        type: "custom",
        name: "tool",
        select: 1,
        list: [
          {
            proficiencies: { tools: [tools.music_bagpipes] },
          },
          {
            proficiencies: { tools: [tools.music_drums] },
          },
          {
            proficiencies: { tools: [tools.music_dulcimer] },
          },
          {
            proficiencies: { tools: [tools.music_flute] },
          },
          {
            proficiencies: { tools: [tools.music_horn] },
          },
          {
            proficiencies: { tools: [tools.music_lute] },
          },
          {
            proficiencies: { tools: [tools.music_lyre] },
          },
          {
            proficiencies: { tools: [tools.music_pan_flute] },
          },
          {
            proficiencies: { tools: [tools.music_shawm] },
          },
          {
            proficiencies: { tools: [tools.music_viol] },
          },
        ],
      },
    ],
  }, // items

  charlatan: {
    name: "back_charlatan",
    details: "back_charlatan_details",

    skills: [
        { name: "sleight_of_hand", num: "Mastery", details: "sleight_of_hand_details", },

        { name: "deception", num: "Mastery", details: "deception_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.disguise, tools.forgery],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.fine_clothes, 1],
          [items.disguise_kit, 1],
          [items.trick_set, 1],
        ],
        inventory_packs: [],
        gold: 15,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "second_identity",
        details: "with_all_docs",
      },
      {
        type: "plus",
        keyword: "able_to_falsificate",
        details: "docs_and_letters",
      },
    ],
  }, // tools, items

  spy: {
    name: "back_spy",
    details: "back_spy_details",

    skills: [
        { name: "stealth", num: "Mastery", details: "stealth_details", },

        { name: "deception", num: "Mastery", details: "deception_details", },
    ],

    proficiencies: {
      armor: [],
      weapons: [],
      tools: [tools.disguise],
      languages: [],
    },

    equipment: [
      {
        armor: [],
        weapon: [],
        inventory: [
          [items.crowbar, 1],
          [items.clothes, 1],
        ],
        inventory_packs: [],
        gold: 15,
      },
    ],

    fines: [
      {
        type: "plus",
        keyword: "connector",
        details: "with_criminals",
      },
    ],

    settings: [
      {
        type: "custom",
        name: "tool",
        select: 1,
        list: [
          {
            proficiencies: { tools: [tools.music_bagpipes] },
          },
          {
            proficiencies: { tools: [tools.music_drums] },
          },
          {
            proficiencies: { tools: [tools.music_dulcimer] },
          },
          {
            proficiencies: { tools: [tools.music_flute] },
          },
          {
            proficiencies: { tools: [tools.music_horn] },
          },
          {
            proficiencies: { tools: [tools.music_lute] },
          },
          {
            proficiencies: { tools: [tools.music_lyre] },
          },
          {
            proficiencies: { tools: [tools.music_pan_flute] },
          },
          {
            proficiencies: { tools: [tools.music_shawm] },
          },
          {
            proficiencies: { tools: [tools.music_viol] },
          },
        ],
      },
    ],
  },
};
