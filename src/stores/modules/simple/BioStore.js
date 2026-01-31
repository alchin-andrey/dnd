// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { safe, safeColor, safeList, line, stripPrefixes, blocksToText, attrsToString} from "@/utils/helpers";
// import list_prompts from "@/assets/catalog/base_data/list_prompts.js";
import { useMYStore } from "@/stores/user/MYStore";

import { useColorStore } from "@/stores/modules/simple/ColorStore";

import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";

import { useDicStore } from "@/stores/general/DicStore";

export const useBioStore = defineStore({
	id: "BioStore",
	// state: () => ({
  //  prompts: list_prompts,
	// }),
	getters: {
    rawAttributes() {
      const MYStore = useMYStore();
      const AlignmentStore = useAlignmentStore();
      const ProficienciesStore = useProficienciesStore();
      const ColorStore = useColorStore();
      const EquipStore = useEquipStore();

      // console.log('ColorStore:', ColorStore.skin_color_Char_Body)

      const weapons_no_unarmed = EquipStore.weapons_Equip_All_Name.filter(name => name !== 'unarmed')

      return {
        race: MYStore.MY_Race.name,
        ethnos: MYStore.MY_Ethnos.name,
        
        background: MYStore.MY_Backstory.name,
        languages: ProficienciesStore.proficiencies_RC_Params('languages'),

        gender: {
          phisiological: MYStore.MY.gender.phisiological,
          feel: MYStore.MY.gender.feel,
          look: MYStore.MY.gender.look,
          attraction: MYStore.MY.gender.attraction,
        },

        age: MYStore.MY.age,
        height: MYStore.MY.height,
        weight: MYStore.MY.weight,


        skin: {
          color_hex: ColorStore.skin_color_Char_Body.hex,
          color_name: ColorStore.skin_color_Char_Body.name,
        },
        eyes: {
          color_hex: ColorStore.eyes_color_Char_Body.hex,
          color_name: ColorStore.eyes_color_Char_Body.name,
        },
        hair: {
          color_hex: ColorStore.hair_color_Char_Body.hex,
          color_name: ColorStore.hair_color_Char_Body.name,
        },

        class: MYStore.MY_Class.name,
        subclass: MYStore.MY_Subclass?.name,
        level: MYStore.MY.level,

        tools: ProficienciesStore.proficiencies_RC_Params('tools'),
        weapons: weapons_no_unarmed,

        name: MYStore.MY.name,
        alignment: MYStore.MY.alignment,
        main_feature: AlignmentStore.MY_Main_Feature_Name,
        ideals: AlignmentStore.MY_Ideals_Name,
        commitment: AlignmentStore.MY_Commitment_Name,
        secret: AlignmentStore.MY_Secret_Name,
        weakness: AlignmentStore.MY_Weakness_Name,
      };
    },

    attrsBio() {
      const a = this.rawAttributes;
      return [
        [
          line("Race", `${safe(a.ethnos)} ${safe(a.race)}`),
          line("Background", stripPrefixes(a.background)),
          line("Languages", stripPrefixes(a.languages)),
        ],
        [
          line("Genger-phisiological", safe(a.gender.phisiological)),  
          line("Genger-feel", safe(a.gender.feel)),  
          line("Genger-look", safe(a.gender.look)),  
          line("Genger-attraction", safe(a.gender.attraction)),  
        ],
        [        
          line("Age", safe(a.age)),
          line("Height-cm", safe(a.height)),
          line("Weight-kg", safe(a.weight)),
        ],
        [
          line("Skin", `${safeColor(a.skin.color_hex)} (${safe(a.skin.color_name)})`),
          line("Eyes", `${safeColor(a.eyes.color_hex)} (${safe(a.eyes.color_name)})`),
          line("Hair", `${safeColor(a.hair.color_hex)} (${safe(a.hair.color_name)})`),
        ],
        [
          line("Class", safe(a.class)),
          line("Subclass", safe(a.subclass)),
          line("Level", safe(a.level)),
        ],
        // [
        //   ["Max stat", safe(a.stat)],
        //   ["Max skill", safe(a.skill)],
        // ],
        [
          line("Proficiencies/Tools", stripPrefixes(a.tools)),
          line("Weapons", safeList(a.weapons)),
        ],
        [
          line("Name", safe(a.name)),
          line("Alignment", safe(a.alignment)),
          line("Main feature", safe(a.main_feature)),
          line("Ideals", safe(a.ideals)),
          line("Commitment", safe(a.commitment)),
          line("Secret", safe(a.secret)),
          line("Weakness", safe(a.weakness)),
        ]
      ];
    },

    attrsStringBio() {
      return blocksToText(this.attrsBio);
      // return attrsToString(this.attrsBioFull);
    },

    
    attrsBioFull() {
      const a = this.rawAttributes;
      return [

        ["Race", `${safe(a.ethnos)} ${safe(a.race)}`],
        ["Background", stripPrefixes(a.background)],
        ["Languages", stripPrefixes(a.languages)],

        ["Genger-phisiological", safe(a.gender.phisiological)],  
        ["Genger-feel", safe(a.gender.feel)],  
        ["Genger-look", safe(a.gender.look)],  
        ["Genger-attraction", safe(a.gender.attraction)], 

        ["Age", safe(a.age)],
        ["Height-cm", safe(a.height)],
        ["Weight-kg", safe(a.weight)],

        ["Skin", `${safeColor(a.skin.color_hex)} (${safe(a.skin.color_name)})`],
        ["Eyes", `${safeColor(a.eyes.color_hex)} (${safe(a.eyes.color_name)})`],
        ["Hair", `${safeColor(a.hair.color_hex)} (${safe(a.hair.color_name)})`],

        ["Class", safe(a.class)],
        ["Subclass", safe(a.subclass)],
        ["Level", safe(a.level)],

        //   ["Max stat", safe(a.stat)],
        //   ["Max skill", safe(a.skill)],

        ["Proficiencies/Tools", stripPrefixes(a.tools)],
        ["Weapons", safeList(a.weapons)],
        
        ["Name", safe(a.name)],
        ["Alignment", safe(a.alignment)],
        ["Main feature", safe(a.main_feature)],
        ["Ideals", safe(a.ideals)],
        ["Commitment", safe(a.commitment)],
        ["Secret", safe(a.secret)],
        ["Weakness", safe(a.weakness)],
      ];
    },

	},

  actions: {
  }
});