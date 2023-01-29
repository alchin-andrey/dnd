import tools from "./kinds_tools.js";
import weapons from "./list_weapons.js";
import items from "./list_items.js";

export default {
  back: {
    name: "bayraktar",

    settings: [
      {
        type: "custom",
        position: 1,
        name: "step_background",
        select: 1,
        list: [
          {
            name: "back_entertainer",
            details: "back_entertainer_details",

            skills: [
              { name: "acrobatics", num: "Mastery", details: "acrobatics_details" },

              { name: "performance", num: "Mastery", details: "performance_details" },
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
          {
            name: "back_urchin",
            details: "back_urchin_details",

            skills: [
              { name: "sleight_of_hand", num: "Mastery", details: "sleight_of_hand_details" },
              { name: "stealth", num: "Mastery", details: "stealth_details" },
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
          {
            name: "back_noble",
            details: "back_noble_details",

            skills: [
              { name: "history", num: "Mastery", details: "history_details" },

              { name: "persuasion", num: "Mastery", details: "persuasion_details" },
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
          {
            name: "back_guild_artisan",
            details: "back_guild_artisan_details",

            skills: [
              { name: "insight", num: "Mastery", details: "insight_details" },

              { name: "persuasion", num: "Mastery", details: "persuasion_details" },
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
                    name_set: items.tools_alchemists_supplies.name,
                    equipment: [ { inventory: [[items.tools_alchemists_supplies, 1]] }, ],
                    proficiencies: { tools: [tools.alchemists_supplies] },
                  },
                  {
                    name_set: items.tools_blacksmith.name,
                    equipment: [{ inventory: [[items.tools_blacksmith, 1]] }],
                    proficiencies: { tools: [tools.blacksmith] },
                  },
                  {
                    name_set: items.tools_brewer.name,
                    equipment: [{ inventory: [[items.tools_brewer, 1]] }],
                    proficiencies: { tools: [tools.brewer] },
                  },
                  {
                    name_set: items.tools_calligraphers_supplies.name,
                    equipment: [
                      { inventory: [[items.tools_calligraphers_supplies, 1]] },
                    ],
                    proficiencies: { tools: [tools.calligraphers_supplies] },
                  },
                  {
                    name_set: items.tools_carpenters_tools.name,
                    equipment: [
                      { inventory: [[items.tools_carpenters_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.carpenters_tools] },
                  },
                  {
                    name_set: items.tools_cartographers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_cartographers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.cartographers_tools] },
                  },
                  {
                    name_set: items.tools_navigators_tools.name,
                    equipment: [
                      { inventory: [[items.tools_navigators_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.navigators_tools] },
                  },
                  {
                    name_set: items.tools_cobblers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_cobblers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.cobblers_tools] },
                  },
                  {
                    name_set: items.tools_cooks_tools.name,
                    equipment: [{ inventory: [[items.tools_cooks_tools, 1]] }],
                    proficiencies: { tools: [tools.cooks_tools] },
                  },
                  {
                    name_set: items.tools_glassblowers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_glassblowers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.glassblowers_tools] },
                  },
                  {
                    name_set: items.tools_jewelers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_jewelers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.jewelers_tools] },
                  },
                  {
                    name_set: items.tools_leatherworkers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_leatherworkers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.leatherworkers_tools] },
                  },
                  {
                    name_set: items.tools_mason.name,
                    equipment: [{ inventory: [[items.tools_mason, 1]] }],
                    proficiencies: { tools: [tools.mason] },
                  },
                  {
                    name_set: items.tools_painters_supplies.name,
                    equipment: [
                      { inventory: [[items.tools_painters_supplies, 1]] },
                    ],
                    proficiencies: { tools: [tools.painters_supplies] },
                  },
                  {
                    name_set: items.tools_potters_tools.name,
                    equipment: [
                      { inventory: [[items.tools_potters_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.potters_tools] },
                  },
                  {
                    name_set: items.tools_tinkers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_tinkers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.tinkers_tools] },
                  },
                  {
                    name_set: items.tools_weavers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_weavers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.weavers_tools] },
                  },
                  {
                    name_set: items.tools_woodcarvers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_woodcarvers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.woodcarvers_tools] },
                  },
                ],
              },
            ],
          },
          {
            name: "back_sailor",
            details: "back_sailor_details",

            skills: [
              { name: "athletics", num: "Mastery", details: "athletics_details" },

              { name: "perception", num: "Mastery", details: "perception_details" },
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
          },
          {
            name: "back_sage",
            details: "back_sage_details",

            skills: [
              { name: "history", num: "Mastery", details: "history_details" },

              { name: "arcana", num: "Mastery", details: "arcana_details" },
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
          },
          {
            name: "back_folk_hero",
            details: "back_folk_hero_details",

            skills: [
              { name: "survival", num: "Mastery", details: "survival_details" },

              { name: "animal_handling", num: "Mastery", details: "animal_handling_details" },
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
                    name_set: items.tools_alchemists_supplies.name,
                    equipment: [
                      { inventory: [[items.tools_alchemists_supplies, 1]] },
                    ],
                    proficiencies: { tools: [tools.alchemists_supplies] },
                  },
                  {
                    name_set: items.tools_blacksmith.name,
                    equipment: [{ inventory: [[items.tools_blacksmith, 1]] }],
                    proficiencies: { tools: [tools.blacksmith] },
                  },
                  {
                    name_set: items.tools_brewer.name,
                    equipment: [{ inventory: [[items.tools_brewer, 1]] }],
                    proficiencies: { tools: [tools.brewer] },
                  },
                  {
                    name_set: items.tools_calligraphers_supplies.name,
                    equipment: [
                      { inventory: [[items.tools_calligraphers_supplies, 1]] },
                    ],
                    proficiencies: { tools: [tools.calligraphers_supplies] },
                  },
                  {
                    name_set: items.tools_carpenters_tools.name,
                    equipment: [
                      { inventory: [[items.tools_carpenters_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.carpenters_tools] },
                  },
                  {
                    name_set: items.tools_cartographers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_cartographers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.cartographers_tools] },
                  },
                  {
                    name_set: items.tools_cobblers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_cobblers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.cobblers_tools] },
                  },
                  {
                    name_set: items.tools_cooks_tools.name,
                    equipment: [{ inventory: [[items.tools_cooks_tools, 1]] }],
                    proficiencies: { tools: [tools.cooks_tools] },
                  },
                  {
                    name_set: items.tools_glassblowers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_glassblowers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.glassblowers_tools] },
                  },
                  {
                    name_set: items.tools_jewelers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_jewelers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.jewelers_tools] },
                  },
                  {
                    name_set: items.tools_leatherworkers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_leatherworkers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.leatherworkers_tools] },
                  },
                  {
                    name_set: items.tools_mason.name,
                    equipment: [{ inventory: [[items.tools_mason, 1]] }],
                    proficiencies: { tools: [tools.mason] },
                  },
                  {
                    name_set: items.tools_painters_supplies.name,
                    equipment: [
                      { inventory: [[items.tools_painters_supplies, 1]] },
                    ],
                    proficiencies: { tools: [tools.painters_supplies] },
                  },
                  {
                    name_set: items.tools_potters_tools.name,
                    equipment: [
                      { inventory: [[items.tools_potters_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.potters_tools] },
                  },
                  {
                    name_set: items.tools_tinkers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_tinkers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.tinkers_tools] },
                  },
                  {
                    name_set: items.tools_weavers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_weavers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.weavers_tools] },
                  },
                  {
                    name_set: items.tools_woodcarvers_tools.name,
                    equipment: [
                      { inventory: [[items.tools_woodcarvers_tools, 1]] },
                    ],
                    proficiencies: { tools: [tools.woodcarvers_tools] },
                  },
                ],
              },
            ],
          },
          {
            name: "back_hermit",
            details: "back_hermit_details",

            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },

              { name: "medicine", num: "Mastery", details: "medicine_details" },
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
          },
          {
            name: "back_criminal",
            details: "back_criminal_details",

            skills: [
              { name: "stealth", num: "Mastery", details: "stealth_details" },

              { name: "deception", num: "Mastery", details: "deception_details" },
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
          {
            name: "back_acolyte",
            details: "back_acolyte_details",

            skills: [
              { name: "religion", num: "Mastery", details: "religion_details" },

              { name: "insight", num: "Mastery", details: "insight_details" },
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
          {
            name: "back_soldier",
            details: "back_soldier_details",

            skills: [
              { name: "athletics", num: "Mastery", details: "athletics_details" },

              { name: "intimidation", num: "Mastery", details: "intimidation_details" },
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
                    name_set: items.playing_dragon_chess.name,
                    equipment: [
                      { inventory: [[items.playing_dragon_chess, 1]] },
                    ],
                    proficiencies: { tools: [tools.playing_dragon_chess] },
                  },
                  {
                    name_set: items.playing_cards.name,
                    equipment: [{ inventory: [[items.playing_cards, 1]] }],
                    proficiencies: { tools: [tools.playing_cards] },
                  },
                  {
                    name_set: items.playing_dice.name,
                    equipment: [{ inventory: [[items.playing_dice, 1]] }],
                    proficiencies: { tools: [tools.playing_dice] },
                  },
                  {
                    name_set: items.playing_three_dragons.name,
                    equipment: [
                      { inventory: [[items.playing_three_dragons, 1]] },
                    ],
                    proficiencies: { tools: [tools.playing_three_dragons] },
                  },
                ],
              },
            ],
          },
          {
            name: "back_outlander",
            details: "back_outlander_details",

            skills: [
              { name: "athletics", num: "Mastery", details: "athletics_details" },

              { name: "survival", num: "Mastery", details: "survival_details" },
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
                    name_set: items.music_bagpipes.name,
                    proficiencies: { tools: [tools.music_bagpipes] },
                  },
                  {
                    name_set: items.music_drums.name,
                    proficiencies: { tools: [tools.music_drums] },
                  },
                  {
                    name_set: items.music_dulcimer.name,
                    proficiencies: { tools: [tools.music_dulcimer] },
                  },
                  {
                    name_set: items.music_flute.name,
                    proficiencies: { tools: [tools.music_flute] },
                  },
                  {
                    name_set: items.music_horn.name,
                    proficiencies: { tools: [tools.music_horn] },
                  },
                  {
                    name_set: items.music_lute.name,
                    proficiencies: { tools: [tools.music_lute] },
                  },
                  {
                    name_set: items.music_lyre.name,
                    proficiencies: { tools: [tools.music_lyre] },
                  },
                  {
                    name_set: items.music_pan_flute.name,
                    proficiencies: { tools: [tools.music_pan_flute] },
                  },
                  {
                    name_set: items.music_shawm.name,
                    proficiencies: { tools: [tools.music_shawm] },
                  },
                  {
                    name_set: items.music_viol.name,
                    proficiencies: { tools: [tools.music_viol] },
                  },
                ],
              },
            ],
          },
          {
            name: "back_charlatan",
            details: "back_charlatan_details",

            skills: [
              { name: "sleight_of_hand", num: "Mastery", details: "sleight_of_hand_details" },

              { name: "deception", num: "Mastery", details: "deception_details" },
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
          },
          {
            name: "back_spy",
            details: "back_spy_details",

            skills: [
              { name: "stealth", num: "Mastery", details: "stealth_details" },

              { name: "deception", num: "Mastery", details: "deception_details" },
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
                    name_set: items.music_bagpipes.name,
                    proficiencies: { tools: [tools.music_bagpipes] },
                  },
                  {
                    name_set: items.music_drums.name,
                    proficiencies: { tools: [tools.music_drums] },
                  },
                  {
                    name_set: items.music_dulcimer.name,
                    proficiencies: { tools: [tools.music_dulcimer] },
                  },
                  {
                    name_set: items.music_flute.name,
                    proficiencies: { tools: [tools.music_flute] },
                  },
                  {
                    name_set: items.music_horn.name,
                    proficiencies: { tools: [tools.music_horn] },
                  },
                  {
                    name_set: items.music_lute.name,
                    proficiencies: { tools: [tools.music_lute] },
                  },
                  {
                    name_set: items.music_lyre.name,
                    proficiencies: { tools: [tools.music_lyre] },
                  },
                  {
                    name_set: items.music_pan_flute.name,
                    proficiencies: { tools: [tools.music_pan_flute] },
                  },
                  {
                    name_set: items.music_shawm.name,
                    proficiencies: { tools: [tools.music_shawm] },
                  },
                  {
                    name_set: items.music_viol.name,
                    proficiencies: { tools: [tools.music_viol] },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "alignment",
        position: 2,
      },
      {
        type: "custom",
        position: 2,
        name: "main_feature",
        select: 1,
        list: [
          { name: "feature_taler" }, // рассказчик
          { name: "feature_gossip" }, // сплетник
          { name: "feature_flatterer" }, // льстец
          { name: "feature_witty" }, // остроумний
          { name: "feature_boastful" }, // хвастливьій
          { name: "feature_sarcastic" }, // саркастичний
          { name: "feature_vulgar" }, // пошлий
          { name: "feature_obscene" }, // похабний
          { name: "feature_toxic" }, // токсичний
          { name: "feature_coldblooded" }, // хладнокровний
          { name: "feature_schemer" }, // махинатор
          { name: "feature_conspirator" }, // конспиролог
          { name: "feature_fatalist" }, // фаталист
          { name: "feature_philosopher" }, // философ
          { name: "feature_erudite" }, // єрудированний
          { name: "feature_wise" }, // мудрий
          { name: "feature_industrious" }, // трудолюбивий
          { name: "feature_thoughtful" }, // задумчивий
          { name: "feature_silent" }, // молчаливий
          { name: "feature_closed" }, // замкнутьій
          { name: "feature_unsociable" }, // нелюдимий
          { name: "feature_injured" }, // травмированний
          { name: "feature_anxious" }, // тревожний
          { name: "feature_incredulous" }, // недоверчивий
          { name: "feature_vindictive" }, // злопамятний
          { name: "feature_vengeful" }, // мстительний
          { name: "feature_irascible" }, // вспильчивий
          { name: "feature_harmful" }, // вредний
          { name: "feature_cunning" }, // хитрий
          { name: "feature_approach" }, // підступний
          { name: "feature_cruel" }, // жорстокий
          { name: "feature_pitiless" }, // безжальний
          { name: "feature_rectilinear" }, // прямолинейний
          { name: "feature_rude" }, // грубий
          { name: "feature_high" }, // високомерний
          { name: "feature_haughty" }, // надменний
          { name: "feature_snob" }, // сноб
          { name: "feature_perfectionist" }, // перфекционист
          { name: "feature_neat" }, // чистюля
          { name: "feature_polite" }, // вежливий
          { name: "feature_peaceful" }, // миролюбний
          { name: "feature_generous" }, // щедрий
          { name: "feature_compassionate" }, // сердобольний
          { name: "feature_inquisitive" }, // любопитний
          { name: "feature_curious" }, // любознательний
          { name: "feature_serene" }, // безмятежний
          { name: "feature_clumsy" }, // неуклюжий
          { name: "feature_careless" }, // небрежний
          { name: "feature_fickle" }, // переменчивий
          { name: "feature_active" }, // активний
          { name: "feature_stubborn" }, // упорний
          { name: "feature_braver" }, // завзятий
          { name: "feature_competitive" }, // соревновательний
          { name: "feature_brave" }, // храбрий
          { name: "feature_adventurer" }, // авантюрист
          { name: "feature_rebel" }, // бунтарь
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "ideals",
        select: 1,
        list: [
          { name: "ideal_justice" }, // справедливість
          { name: "ideal_equality" }, // рівність
          { name: "ideal_independence" }, // незалежність
          { name: "ideal_liberty" }, // свобода
          { name: "ideal_freedom" }, // воля
          { name: "ideal_respect" }, // повага
          { name: "ideal_society" }, // суспільство
          { name: "ideal_thrive" }, // процвітання
          { name: "ideal_development" }, // розвиток
          { name: "ideal_knowledge" }, // знання
          { name: "ideal_logics" }, // логіка
          { name: "ideal_truth" }, // правда
          { name: "ideal_creativity" }, // творчість
          { name: "ideal_beauty" }, // краса
          { name: "ideal_nature" }, // природа
          { name: "ideal_harmony" }, // лагода
          { name: "ideal_family" }, // сімʼя
          { name: "ideal_friendship" }, // дружба
          { name: "ideal_team" }, // команда
          { name: "ideal_homeland" }, // батьківщина
          { name: "ideal_altruism" }, // альтруїзм
          { name: "ideal_mercy" }, // милосердя
          { name: "ideal_destiry" }, // доля
          { name: "ideal_faith" }, // віра
          { name: "ideal_traditions" }, // традиції
          { name: "ideal_duty" }, // обовʼязок
          { name: "ideal_honor" }, // честь
          { name: "ideal_revenge" }, // помста
          { name: "ideal_strength" }, // сила
          { name: "ideal_authority" }, // авторітет
          { name: "ideal_power" }, // влада
          { name: "ideal_glory" }, // слава
          { name: "ideal_career" }, // карʼєра
          { name: "ideal_melancholy" }, // користь
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "commitment",
        select: 1,
        list: [
          { name: "attachment_tool" }, // інструмент
          { name: "attachment_vehicle" }, // корабель або кінь або брічка
          { name: "attachment_corner" }, // свій куточок (майстерня)
          { name: "attachment_childhood" }, // дитинство
          { name: "attachment_school" }, // школа
          { name: "attachment_offender" }, // кривдник
          { name: "attachment_loss" }, // втрата
          { name: "attachment_savior" }, // рятівник
          { name: "attachment_leader" }, // лідер
          { name: "attachment_mentor" }, // наставник
          { name: "attachment_legacy" }, // спадок
          { name: "attachment_child" }, // дитина
          { name: "attachment_family" }, // сімʼя
          { name: "attachment_home" }, // дім
          { name: "attachment_bonds" }, // звʼязки
          { name: "attachment_friends" }, // друзі
          { name: "attachment_team" }, // команда
          { name: "attachment_organization" }, // організація
          { name: "attachment_homeland" }, // батьківщина
          { name: "attachment_nature" }, // природа
          { name: "attachment_love" }, // кохання
          { name: "attachment_gift" }, // подарунок
          { name: "attachment_fans" }, // прихильники
          { name: "attachment_students" }, // учні
          { name: "attachment_product" }, // плід праці
          { name: "attachment_title" }, // титул
          { name: "attachment_mistery" }, // загадка
          { name: "attachment_idol" }, // кумир
          { name: "attachment_artifact" }, // артефакт
          { name: "attachment_structure" }, // сакральна споруда
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "secret",
        select: 1,
        list: [
          { name: "secret_mistake" }, // жахлива помилка
          { name: "secret_setup" }, // підстава
          { name: "secret_crime" }, // злочин
          { name: "secret_trait" }, // зрада
          { name: "secret_owe" }, // борг
          { name: "secret_shame" }, // ганьба
          { name: "secret_exile" }, // вигнання
          { name: "secret_follower" }, // переслідувач
          { name: "secret_sick" }, // хвороба
          { name: "secret_pact" }, // угода
          { name: "secret_target" }, // мішень
          { name: "secret_plans" }, // коварні плани
          { name: "secret_prophesy" }, // пророцтво
        ],
      },
      {
        type: "custom",
        position: 2,
        name: "weakness",
        select: 1,
        list: [
          { name: "weakness_greed" }, // жадность
          { name: "weakness_lust" }, // похоть
          { name: "weakness_passion" }, // азарт
          { name: "weakness_dependance" }, // залежність
          { name: "weakness_spender" }, // транжира
          { name: "weakness_unreliability" }, // ненадежность
          { name: "weakness_cowardice" }, // трусость
          { name: "weakness_submissiveness" }, // покорність
          { name: "weakness_envy" }, // заздрість
          { name: "weakness_wrath" }, // гнів
          { name: "weakness_audacity" }, // дерзость
          { name: "weakness_uncompromise" }, // бескомпромісний
          { name: "weakness_pride" }, // гординя
          { name: "weakness_laziness" }, // лень
          { name: "weakness_belief" }, // доверчивость
          { name: "weakness_poormemory" }, // забивчівость
          { name: "weakness_carelessness" }, // беспечность
          { name: "weakness_recklessness" }, // безрассудство
          { name: "weakness_obsession" }, // одержимость
        ],
      },
    ],
  },
};
