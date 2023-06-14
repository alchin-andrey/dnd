// import { ref, computed } from "vue";
// import { mapState } from "pinia";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";


import alignment_lists from "@/assets/catalog/base_data/list_alignment.js";
import alignment_sett from "@/assets/catalog/base_data/step3_alignment.js";
import list_links from "@/assets/catalog/base_data/list_links.js";

export const useAlignmentStore = defineStore({
	id: "AlignmentStore",
	state: () => ({
		alignment_lists: alignment_lists,
    alignment_sett: alignment_sett,
    hero_links: list_links,

	}),

	getters: {
    сustomm_Main_Settings_Alignment_Arr() {
      const MYStore = useMYStore();
			return MYStore.settingsMainSelect("alignment", this.alignment_sett.back.settings, "custom");
		},

    alignment_Arr() {
      return this.alignment_lists.alignment;
    },

    alignment_Name: (stor) => (item) => {
      if(item.name_set) {
        return item.name_custom ? item.name_custom : item.name_set;
      } else {
        return item.name;
      }
    },

    MY_Main_Feature() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "main_feature");
      return name?.select_list[0];
    },

    MY_Main_Feature_Name() {
      return this.alignment_Name(this.MY_Main_Feature);
    },

    MY_Ideals() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "ideals");
      return name?.select_list[0];
    },

    MY_Ideals_Name() {
      return this.alignment_Name(this.MY_Ideals);
    },

    MY_Commitment() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "commitment");
      return name?.select_list[0];
    },

    MY_Commitment_Name() {
      return this.alignment_Name(this.MY_Commitment);
    },

    MY_Secret() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "secret");
      return name?.select_list[0];
    },

    MY_Secret_Name() {
      return this.alignment_Name(this.MY_Secret);
    },

    MY_Weakness() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "weakness");
      return name?.select_list[0];
    },

    MY_Weakness_Name() {
      return this.alignment_Name(this.MY_Weakness);
    },

    photo_Select() {
      const MYStore = useMYStore();
			return MYStore.MY.param.user_photo ? "your_image" : "standard";
		},

    photo_Link_Hero() {
      const MYStore = useMYStore();
      const GenderStore = useGenderStore();
      const race_name = MYStore.MY_Race.name;
			const class_name = MYStore.MY_Class.name;
			const sex = GenderStore.sex_Char_Body;
      const link_main = this.hero_links.none[race_name][sex];
      const link = this.hero_links[class_name]?.[race_name][sex];
			return link ?? link_main;
		},

    photo_Link_Pinterest() {
      const MYStore = useMYStore();
      const GenderStore = useGenderStore();
			const race_name = MYStore.MY_Race.name;
			const class_name = MYStore.MY_Class.name;
			const sex = GenderStore.sex_Char_Body;
			const main = 'https://ro.pinterest.com/search/pins/?q=dnd'
			const link = `${main}%20${race_name}%20${sex}%20${class_name}`
			return link;
		},

	},

	actions: {
  }
});
