import tools from "@/assets/catalog/base_data/kinds_tools.js";
import weapons from "@/assets/catalog/base_data/list_weapons.js";
import items from "@/assets/catalog/base_data/list_items.js";
import lang from "@/assets/catalog/base_data/list_languages.js";

export default {

  urchin: {
    name: "back_urchin",
    details: "back_urchin_details",
    expanded: "back_urchin_expanded",

    skills: [
        { name: "sleight_of_hand", num: "Mastery", details: "sleight_of_hand_details", },
        { name: "stealth", num: "Mastery", details: "stealth_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.thief, tools.disguise],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.knife, 1],
          [items.map_urchin, 1],
          [items.pet_mouse, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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

  outlander: {
    name: "back_outlander",
    details: "back_outlander_details",
    expanded: "back_outlander_expanded",

    skills: [
        { name: "athletics", num: "Mastery", details: "athletics_details", },

        { name: "survival", num: "Mastery", details: "survival_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      //tools: [],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.staff, 1],
          [items.hunting_trap, 1],
          [items.trophey_animal, 1],
          [items.travelers_clothes, 1],
        ],
        //inventory_packs: [],
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
        type: "custom",
        name: "tool", 
        position: 9,
        select: 1,
        list: [
          {
            name_set: items.music_bagpipes.name,
            equipment: [{ inventory: [[items.music_bagpipes, 1]] }],
            proficiencies: { tools: [tools.music_bagpipes] },
          },
          {
            name_set: items.music_drums.name,
            equipment: [{ inventory: [[items.music_drums, 1]] }],
            proficiencies: { tools: [tools.music_drums] },
          },
          {
            name_set: items.music_dulcimer.name,
            equipment: [{ inventory: [[items.music_dulcimer, 1]] }],
            proficiencies: { tools: [tools.music_dulcimer] },
          },
          {
            name_set: items.music_flute.name,
            equipment: [{ inventory: [[items.music_flute, 1]] }],
            proficiencies: { tools: [tools.music_flute] },
          },
          {
            name_set: items.music_horn.name,
            equipment: [{ inventory: [[items.music_horn, 1]] }],
            proficiencies: { tools: [tools.music_horn] },
          },
          {
            name_set: items.music_lute.name,
            equipment: [{ inventory: [[items.music_lute, 1]] }],
            proficiencies: { tools: [tools.music_lute] },
          },
          {
            name_set: items.music_lyre.name,
            equipment: [{ inventory: [[items.music_lyre, 1]] }],
            proficiencies: { tools: [tools.music_lyre] },
          },
          {
            name_set: items.music_pan_flute.name,
            equipment: [{ inventory: [[items.music_pan_flute, 1]] }],
            proficiencies: { tools: [tools.music_pan_flute] },
          },
          {
            name_set: items.music_shawm.name,
            equipment: [{ inventory: [[items.music_shawm, 1]] }],
            proficiencies: { tools: [tools.music_shawm] },
          },
          {
            name_set: items.music_viol.name,
            equipment: [{ inventory: [[items.music_viol, 1]] }],
            proficiencies: { tools: [tools.music_viol] },
          },
        ],
      },
    ],
  }, // items

  hermit: {
    name: "back_hermit",
    details: "back_hermit_details",
    expanded: "back_hermit_expanded",

    skills: [
        { name: "religion", num: "Mastery", details: "religion_details", },

        { name: "medicine", num: "Mastery", details: "medicine_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.herbalists_tools],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.scroll_tube, 1],
          [items.blanket, 1],
          [items.clothes, 1],
          [items.tools_herbalists_tools, 1],
        ],
        //inventory_packs: [],
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
      // {
      //   level: 1,
      //   type: "languages",
      //   name: "languages",

      //   select: 1,
      //   filter: "no_used",
      // },
    ],
  }, // items

  sage: {
    name: "back_sage",
    details: "back_sage_details",
    expanded: "back_sage_expanded",

    skills: [
        { name: "history", num: "Mastery", details: "history_details", },

        { name: "arcana", num: "Mastery", details: "arcana_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      //tools: [],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.ink, 1],
          [items.ink_pen, 1],
          [items.knife, 1],
          [items.letter_question, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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
        type: "custom",
        name: "languages",
        position: 10,
        select: 2,
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
      // {
      //   level: 1,
      //   type: "languages",
      //   name: "languages",
      //   select: 2,
      //   filter: "no_used",
      // },
    ],
  }, // items

  acolyte: {
    name: "back_acolyte",
    details: "back_acolyte_details",
    expanded: "back_acolyte_expanded",

    skills: [
        { name: "religion", num: "Mastery", details: "religion_details", },

        { name: "insight", num: "Mastery", details: "insight_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      //tools: [],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.holy_symbol, 1],
          [items.music_drums, 1],
          [items.incense, 1],
          [items.vestment, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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
        type: "custom",
        name: "languages",
        position: 10,
        select: 2,
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
      // {
      //   level: 1,
      //   type: "languages",
      //   name: "languages",
      //   select: 2,
      //   filter: "no_used",
      // },
    ],
  },

  guild_artisan: {
    name: "back_guild_artisan",
    details: "back_guild_artisan_details",
    expanded: "back_guild_artisan_expanded",

    skills: [
        { name: "insight", num: "Mastery", details: "insight_details", },

        { name: "persuasion", num: "Mastery", details: "persuasion_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      //tools: [],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.guild_letter, 1],
          [items.travelers_clothes, 1],
        ],
        //inventory_packs: [],
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
      // {
      //   level: 1,
      //   type: "languages",
      //   name: "languages",
      //   select: 1,
      //   filter: "no_used",
      // },
      {
        type: "custom",
        name: "tool", 
        position: 9,
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
        ],
      },
    ],
  }, // items

  noble: {
    name: "back_noble",
    details: "back_noble_details",
    expanded: "back_noble_expanded",

    skills: [
        { name: "history", num: "Mastery", details: "history_details", },

        { name: "persuasion", num: "Mastery", details: "persuasion_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      //tools: [],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.fine_clothes, 1],
          [items.stamp_ring, 1],
          [items.scroll_lifeline, 1],
        ],
        //inventory_packs: [],
        gold: 25,
      },
    ],

    settings: [
      {
        type: "custom",
        name: "legacy",
        position: 2,
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
      // {
      //   level: 1,
      //   type: "languages",
      //   name: "languages",
      //   select: 1,
      //   filter: "no_used",
      // },
      {
        type: "custom",
        name: "player",
        position: 2,
        select: 1,
        list: [
          {
            name_set: tools.playing_dragon_chess.name,
            proficiencies: { tools: [tools.playing_dragon_chess] },
          },
          {
            name_set: tools.playing_dragon_poker.name,
            proficiencies: { tools: [tools.playing_dragon_poker] },
          },
          {
            name_set: tools.playing_dice.name,
            proficiencies: { tools: [tools.playing_dice] },
          },
        ],
      },
    ],
  }, // tools, items

  entertainer: {
    name: "back_entertainer",
    details: "back_entertainer_details",
    expanded: "back_entertainer_expanded",

    skills: [
        { name: "acrobatics", num: "Mastery", details: "acrobatics_details", },

        { name: "performance", num: "Mastery", details: "performance_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.disguise],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [[items.fan_gift, 1]],
        //inventory_packs: [],
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
        position: 9,
        select: 1,
        list: [
          {
            name_set: items.music_bagpipes.name,
            equipment: [{ inventory: [[items.music_bagpipes, 1]] }],
            proficiencies: { tools: [tools.music_bagpipes] },
          },
          {
            name_set: items.music_drums.name,
            equipment: [{ inventory: [[items.music_drums, 1]] }],
            proficiencies: { tools: [tools.music_drums] },
          },
          {
            name_set: items.music_dulcimer.name,
            equipment: [{ inventory: [[items.music_dulcimer, 1]] }],
            proficiencies: { tools: [tools.music_dulcimer] },
          },
          {
            name_set: items.music_flute.name,
            equipment: [{ inventory: [[items.music_flute, 1]] }],
            proficiencies: { tools: [tools.music_flute] },
          },
          {
            name_set: items.music_horn.name,
            equipment: [{ inventory: [[items.music_horn, 1]] }],
            proficiencies: { tools: [tools.music_horn] },
          },
          {
            name_set: items.music_lute.name,
            equipment: [{ inventory: [[items.music_lute, 1]] }],
            proficiencies: { tools: [tools.music_lute] },
          },
          {
            name_set: items.music_lyre.name,
            equipment: [{ inventory: [[items.music_lyre, 1]] }],
            proficiencies: { tools: [tools.music_lyre] },
          },
          {
            name_set: items.music_pan_flute.name,
            equipment: [{ inventory: [[items.music_pan_flute, 1]] }],
            proficiencies: { tools: [tools.music_pan_flute] },
          },
          {
            name_set: items.music_shawm.name,
            equipment: [{ inventory: [[items.music_shawm, 1]] }],
            proficiencies: { tools: [tools.music_shawm] },
          },
          {
            name_set: items.music_viol.name,
            equipment: [{ inventory: [[items.music_viol, 1]] }],
            proficiencies: { tools: [tools.music_viol] },
          },
        ],
      },
    ],
  },

  folk_hero: {
    name: "back_folk_hero",
    details: "back_folk_hero_details",
    expanded: "back_folk_hero_expanded",

    skills: [
        { name: "survival", num: "Mastery", details: "survival_details", },

        { name: "animal_handling", num: "Mastery", details: "animal_handling_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.transport_ground],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.shovel, 1],
          [items.iron_pot, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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
        position: 9,
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
        ],
      },
    ],
  }, //items

  soldier: {
    name: "back_soldier",
    details: "back_soldier_details",
    expanded: "back_soldier_expanded",

    skills: [
        { name: "athletics", num: "Mastery", details: "athletics_details", },

        { name: "intimidation", num: "Mastery", details: "intimidation_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.transport_ground],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.medal, 1],
          [items.trophey, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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
        name: "player",
        position: 2,
        select: 1,
        list: [
          {
            name_set: tools.playing_dragon_chess.name,
            proficiencies: { tools: [tools.playing_dragon_chess] },
            equipment: [{ inventory: [[items.playing_dragon_chess, 1]] }],
          },
          {
            name_set: tools.playing_dragon_poker.name,
            proficiencies: { tools: [tools.playing_dragon_poker] },
            equipment: [{ inventory: [[items.playing_dragon_poker, 1]] }],
          },
          {
            name_set: tools.playing_dice.name,
            proficiencies: { tools: [tools.playing_dice] },
            equipment: [{ inventory: [[items.playing_dice, 1]] }],
          },
        ],
      },
    ],
  }, // items

  sailor: {
    name: "back_sailor",
    details: "back_sailor_details",
    expanded: "back_sailor_expanded",

    skills: [
        { name: "athletics", num: "Mastery", details: "athletics_details", },

        { name: "perception", num: "Mastery", details: "perception_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.navigators_tools, tools.transport_water],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        weapon: [[weapons.club, 1]],
        inventory: [
          [items.silk_rope, 1],
          [items.talisman_sailor, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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

  criminal: {
    name: "back_criminal",
    details: "back_criminal_details",
    expanded: "back_criminal_expanded",

    skills: [
        { name: "stealth", num: "Mastery", details: "stealth_details", },

        { name: "deception", num: "Mastery", details: "deception_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.thief],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.crowbar, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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
        name: "player",
        position: 2,
        select: 1,
        list: [
          {
            name_set: tools.playing_dragon_chess.name,
            proficiencies: { tools: [tools.playing_dragon_chess] },
          },
          {
            name_set: tools.playing_dragon_poker.name,
            proficiencies: { tools: [tools.playing_dragon_poker] },
          },
          {
            name_set: tools.playing_dice.name,
            proficiencies: { tools: [tools.playing_dice] },
          },
        ],
      },
    ],
  },

  charlatan: {
    name: "back_charlatan",
    details: "back_charlatan_details",
    expanded: "back_charlatan_expanded",

    skills: [
        { name: "sleight_of_hand", num: "Mastery", details: "sleight_of_hand_details", },

        { name: "deception", num: "Mastery", details: "deception_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.disguise, tools.forgery],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.fine_clothes, 1],
          [items.disguise_kit, 1],
          [items.trick_set, 1],
        ],
        //inventory_packs: [],
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
    expanded: "back_spy_expanded",

    skills: [
        { name: "stealth", num: "Mastery", details: "stealth_details", },

        { name: "deception", num: "Mastery", details: "deception_details", },
    ],

    proficiencies: {
      //armor: [],
      //weapons: [],
      tools: [tools.disguise],
      //languages: [],
    },

    equipment: [
      {
        //armor: [],
        //weapon: [],
        inventory: [
          [items.crowbar, 1],
          [items.clothes, 1],
        ],
        //inventory_packs: [],
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
        position: 9,
        select: 1,
        list: [
          {
            name_set: items.music_bagpipes.name,
            equipment: [{ inventory: [[items.music_bagpipes, 1]] }],
            proficiencies: { tools: [tools.music_bagpipes] },
          },
          {
            name_set: items.music_drums.name,
            equipment: [{ inventory: [[items.music_drums, 1]] }],
            proficiencies: { tools: [tools.music_drums] },
          },
          {
            name_set: items.music_dulcimer.name,
            equipment: [{ inventory: [[items.music_dulcimer, 1]] }],
            proficiencies: { tools: [tools.music_dulcimer] },
          },
          {
            name_set: items.music_flute.name,
            equipment: [{ inventory: [[items.music_flute, 1]] }],
            proficiencies: { tools: [tools.music_flute] },
          },
          {
            name_set: items.music_horn.name,
            equipment: [{ inventory: [[items.music_horn, 1]] }],
            proficiencies: { tools: [tools.music_horn] },
          },
          {
            name_set: items.music_lute.name,
            equipment: [{ inventory: [[items.music_lute, 1]] }],
            proficiencies: { tools: [tools.music_lute] },
          },
          {
            name_set: items.music_lyre.name,
            equipment: [{ inventory: [[items.music_lyre, 1]] }],
            proficiencies: { tools: [tools.music_lyre] },
          },
          {
            name_set: items.music_pan_flute.name,
            equipment: [{ inventory: [[items.music_pan_flute, 1]] }],
            proficiencies: { tools: [tools.music_pan_flute] },
          },
          {
            name_set: items.music_shawm.name,
            equipment: [{ inventory: [[items.music_shawm, 1]] }],
            proficiencies: { tools: [tools.music_shawm] },
          },
          {
            name_set: items.music_viol.name,
            equipment: [{ inventory: [[items.music_viol, 1]] }],
            proficiencies: { tools: [tools.music_viol] },
          },
        ],
      },
    ],
  },
};
