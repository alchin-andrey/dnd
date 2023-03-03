// import { ref, computed } from "vue";
// import { mapState } from "pinia";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";


import alignment_lists from "@/assets/catalog/base_data/list_alignment.js";
import alignment_sett from "@/assets/catalog/base_data/step3_alignment.js";

export const useAlignmentStore = defineStore({
	id: "AlignmentStore",
	state: () => ({
		alignment_lists: alignment_lists,
    alignment_sett: alignment_sett,
	}),

	getters: {
    сustomm_Main_Settings_Alignment_Arr() {
      const MYStore = useMYStore();
			return MYStore.settingsMainSelect("alignment", this.alignment_sett.back.settings, "custom");
		},

    alignment_Arr() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      console.log('сustomm:', сustomm)
      return this.alignment_lists.alignment;
    },

    MY_Main_Feature() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "main_feature");
      return name?.select_list[0];
    },

    MY_Ideals() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "ideals");
      return name?.select_list[0];
    },

    MY_Commitment() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "commitment");
      return name?.select_list[0];
    },

    MY_Secret() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "secret");
      return name?.select_list[0];
    },

    MY_Weakness() {
      const сustomm = this.сustomm_Main_Settings_Alignment_Arr;
      const name = сustomm.find(el => el.name == "weakness");
      return name?.select_list[0];
    },

	},

	actions: {
  }
});
