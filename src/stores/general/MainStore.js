// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import backstories_srd from "@/assets/catalog/base_data/srd/list_backstories.js";
import races_srd from "@/assets/catalog/base_data/srd/step1_races.js";
import classes_srd from "@/assets/catalog/base_data/srd/step2_classes.js";

import backstories_phb from "@/assets/catalog/base_data/phb/list_backstories.js";
import races_phb from "@/assets/catalog/base_data/phb/step1_races.js";
import classes_phb from "@/assets/catalog/base_data/phb/step2_classes.js";

export const useMainStore = defineStore({
	id: "MainStore",
	state: () => ({
    backstories_srd,
		races_srd,
    classes_srd,

    backstories_phb,
		races_phb,
    classes_phb,
	}),
	getters: {
    backstories_Arr() {
			return Object.values(this.backstories_srd);
		},

    race_Arr() {
			return Object.values(this.races_srd);
		},

    class_Arr() {
			return Object.values(this.classes_srd);
		},

    race_Key() {
      return Object.keys(this.races_srd);
    },

    class_Key() {
      return Object.keys(this.classes_srd);
    },
	},
});
