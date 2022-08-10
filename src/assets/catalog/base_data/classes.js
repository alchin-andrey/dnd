import spells from "./spells.js";
import lang from "./languages.js";
import weaponry from "./weaponry.js";
import tool from "./tools.js";
import armory from "./armory.js";
import weapons from "./weapons.js";

export default {
  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    HP_dice: 12,

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military],
    },

    saving: ["strength", "constitution"],

    levels: [
      //1
      {
        settings: {

          custom_skills: [

            2,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],

          equipment: [
            [weapons.greataxe],
            [weapons.handaxe]//x2
          ]
        },
        fines: [
          {
            type: "resistance",
            keyword: "no_armor_protection",
            details: "armor_constitution",
          },
        ],
        spells: [
          //spells.fury
        ],
      },
      //2
      {},
    ],

    subclass_level: 3,
    mastery_bonus: [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],

    settings: {
      subclasses: {},
    },
  },
};
