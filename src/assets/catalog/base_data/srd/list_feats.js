import spells from "@/assets/catalog/base_data/list_spells.js";
import weaponry from "@/assets/catalog/base_data/kinds_weapons.js";
import armory from "@/assets/catalog/base_data/kinds_armor.js";
import tools from "@/assets/catalog/base_data/kinds_tools.js";
import item from "@/assets/catalog/base_data/list_items.js";
import lang from "@/assets/catalog/base_data/list_languages.js";
import mods from "@/assets/catalog/base_data/list_spells_mods.js";

export default {
  
  grappler: {
    name: "feat_grappler",
    details: "feat_grappler_details",
    condition: "condition_strength_13plus",
    //Требования: Сила 13 или вьіше

    filter: {
      stats: [
        {
          name: "strength",
          min_num: 13,
        },
      ],
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

};
