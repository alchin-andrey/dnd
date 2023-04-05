import tools from "./kinds_tools.js";
import weapons from "./list_weapons.js";
import items from "./list_items.js";
import lang from "./list_languages.js";

export default {

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
      //   level: 1,
      //   type: "languages",
      //   name: "languages",
      //   select: 2,
      //   filter: "no_used",
      // },
    ],
    
  },

};
