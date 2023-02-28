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
      return this.alignment_lists.alignment;
    }

	},

	actions: {
  }
});
