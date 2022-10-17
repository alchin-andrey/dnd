import spells from "./list_spells.js";
import lang from "./list_languages.js";
import weaponry from "./kinds_weapons.js";
import tool from "./kinds_tools.js";
import armory from "./kinds_armor.js";
import weapons from "./list_weapons.js";
import MY from "@/assets/catalog/MY.js"
import packs from "./list_packs.js";
import items from "./list_items.js";

const barbarian_rage =       [0, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 99];
const barbarian_rage_bonus = [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];

export default {
  barbarian: {
    name: "barbarian",
    details: "barbarian_details",

    saving: ["strength", "constitution"],
    spell_attribute: "strength", // уточнить

    hp_dice: 12,
    hp_bonus: [12,7],
    regen: [MY.level,12],

    proficiencies: {
      armor: [armory.light, armory.medium, armory.shields],
      weapons: [weaponry.simple, weaponry.military], // all ?
    },

    fines: [
      {
        level: 1,
        type: "resistance",
        keyword: "no_armor_protection",
        details: "armor_constitution",
        
        // when without heavy armor
        condition: "if_no_heavy_armor",
        key: "armor_bonus",
        value: "MY.stats.constitution.mod",
      },
      {
        level: 2,
        type: "plus",
        keyword: "advantage",
        details: "saving_dex_visible",
      },
      {
        level: 5,

        // when without heavy armor
        condition: "if_no_heavy_armor",
        key: "speed_bonus",
        value: "10",
      },
      {
        level: 7,
        type: "plus",
        keyword: "advantage",
        details: "on_initiative",
      },
      {
        level: 7,
        type: "plus",
        keyword: "extra_movement",
        details: "rage_half_speed",
        // приписать к заклинанию Ярость?
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
        // приписать к заклинанию Ярость?
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
        // убрать из заклинания Ярость?
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
        strength: 4,
        constitution: 4, 
      }
    ], 

    spells: [
      {
        level: 1,
        spell: spells.rage,
        charges: barbarian_rage[MY.level] // Проверить привязку к уровню
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
        ],
        item: [
          [packs.explorers,1],
        ],
      },
    ],



    settings: {
      skills: [
        {
          level: 1,
          skills: [
            2,
            "mastery",

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
          skills: [
            1,
            "mastery",

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
          skills: [
            1,
            "mastery",

            "athletics",
            "insight",
            "survival",
            "intimidation",
            "nature",
            "animal_hanging",
          ],
        },
      ],

      feats: {
        // Cделать единым для всех
        // level 4, 8, 12, 16 и 19
      },

      equipment: [
        {
          level: 1,
          weapon: [
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
          weapon: [
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

      subclasses: {
        berserker: {
          name: "berserker",
          details: "berserker_details",

          spells:[
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
            }
          ],

          fines: [
            {
              level: 6,
              type: "resistance",
              keyword: "immunity",
              details: "charmed_or_frightened_while_raging",
            },
          ]

        },

        totem_warrior: {
          name: "totem_warrior",
          details: "totem_warrior_details",

          equipment: [
            {
              level: 3,
              item: [
                [items.totem,1],
              ],
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
            }
          ],

          settings: {
            custom: [
              {
                level: 3,
                name: "totem_spirit",
                delails: "totem_spirit_details",
                list: [
                  {
                    name: "wolf",
                    fines: [
                      {
                        type: "plus",
                        keyword: "advantage",
                        details: "near_friends_attack_in_rage",
                      },
                    ]
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "resistance",
                        keyword: "resistance",
                        details: "any_damage_but_psy",
                      }
                    ]
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "resistance",
                        keyword: "advantage",
                        details: "on_dodging_in_rage",

                        condition: "if_no_heavy_armor",
                      },
                      {
                        type: "plus",
                        keyword: "rush",
                        details: "as_bonus_action",

                        condition: "if_no_heavy_armor",
                      }
                    ]
                  },
                  {
                    name: "elk",
                    fines: [
                      {
                        // when without heavy armor
                        condition: "if_no_heavy_armor",
                        key: "speed_bonus",
                        value: "15",
                      }
                    ]
                  },
                  {
                    name: "tiger",
                    fines: [
                      {
                        type: "plus",
                        keyword: "long_jumps",
                        details: "in_rage",
                      }
                    ]
                  }
                ]
              },
              {
                level: 6,
                name: "totem_aspect",
                delails: "totem_aspect_details",
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
                      }
                    ]
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
                        type: "plus",
                        keyword: "advantage",
                        details: "str_check_on_move",
                      }
                    ]
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
                        type: "plus",
                        keyword: "no_disadvantage",
                        details: "on_perception_in_lowlight",
                      }
                    ]
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
                      }
                    ]
                  },
                  {
                    name: "tiger",
                    settings: {
                      skills: [
                        {
                          skills: [
                            1,
                            "mastery",
                
                            "athletics",
                            "acrobatics",
                            "stealth",
                            "survival"
                          ],
                        },
                      ],
                    }
                  }
                ]
              },
              {
                level: 14,
                name: "totem_harmony",
                delails: "totem_aspect_details",
                list: [
                  {
                    name: "wolf",
                    spells: [
                      {
                        spell: spells.wolf_knock,
                      }
                    ],
                  },
                  {
                    name: "bear",
                    fines: [
                      {
                        type: "resistance",
                        keyword: "advantage",
                        details: "on_dodging_in_rage_bear",
                      }
                    ]
                  },
                  {
                    name: "eagle",
                    fines: [
                      {
                        type: "plus",
                        keyword: "flight",
                        details: "as_walking_speed_in_rage",
                      }
                    ],
                  },
                  {
                    name: "elk",
                    spells: [
                      {
                        spell: spells.elk_knock,
                      }
                    ]
                  },
                  {
                    name: "tiger",
                    spells: [
                      {
                        spell: spells.tiger_strike,
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
      },
    },
  },

}