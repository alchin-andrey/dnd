// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { safe, safeColor, safeList, line, stripPrefixes, blocksToText, attrsToString} from "@/utils/helpers";
// import list_prompts from "@/assets/catalog/base_data/list_prompts.js";
import { useMYStore } from "@/stores/user/MYStore";

import { useColorStore } from "@/stores/modules/simple/ColorStore";

import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";

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
      const StatsStore = useStatsStore();
      const SkillsStore = useSkillsStore();

      // console.log('t_skill_Arr:', SkillsStore.skills_Keys)

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

        max_stats_names: StatsStore.stats_Mod_Max_Name_Arr,
        max_skills_names: SkillsStore.skills_Max_Name_Arr,

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
          line("Background", stripPrefixes(a.background, 'back_')),
          line("Languages", stripPrefixes(a.languages, 'lang_')),
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
        [
          line("Max stat", safeList(a.max_stats_names.length <= 2 ? a.max_stats_names : [] )),
          line("Max skill", safeList(a.max_skills_names.length <= 2 ? a.max_skills_names : [] )),
        ],
        [
          line("Proficiencies/Tools", stripPrefixes(a.tools, 'tool_')),
          line("Weapons", safeList(a.weapons)),
        ],
        [
          line("Name", safe(a.name)),
          line("Alignment", safe(a.alignment)),
          line("Main feature", stripPrefixes(a.main_feature, 'feature_')),
          line("Ideals", stripPrefixes(a.ideals, 'ideal_')),
          line("Commitment", stripPrefixes(a.commitment, 'attachment_')),
          line("Secret", stripPrefixes(a.secret, 'secret_')),
          line("Weakness", stripPrefixes(a.weakness, 'weakness_')),
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
        ["Background", stripPrefixes(a.background, 'back_')],
        ["Languages", stripPrefixes(a.languages, 'lang_')],

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

        ["Max stat", safeList(a.max_stats_names.length <= 2 ? a.max_stats_names : [] )],
        ["Max skill", safeList(a.max_skills_names.length <= 2 ? a.max_skills_names : [] )],

        ["Proficiencies/Tools", stripPrefixes(a.tools, 'tool_')],
        ["Weapons", safeList(a.weapons)],
        
        ["Name", safe(a.name)],
        ["Alignment", safe(a.alignment)],
        ["Main feature", stripPrefixes(a.main_feature, 'feature_')],
        ["Ideals", stripPrefixes(a.ideals, 'ideal_')],
        ["Commitment", stripPrefixes(a.commitment, 'attachment_')],
        ["Secret", stripPrefixes(a.secret, 'secret_')],
        ["Weakness", stripPrefixes(a.weakness, 'weakness_')],
      ];
    },

	},

  actions: {
  }
});