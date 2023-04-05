// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import backstories from "@/assets/catalog/base_data/srd/list_backstories.js";
import race from "@/assets/catalog/base_data/srd/step1_races.js";
import classes from "@/assets/catalog/base_data/srd/step2_classes.js";

export const useMainStore = defineStore({
	id: "MainStore",
	state: () => ({
    backstories: backstories,
		race: race,
    class: classes,
	}),
	getters: {
    backstories_Arr() {
			return Object.values(this.backstories);
		},

    race_Arr() {
			return Object.values(this.race);
		},

    class_Arr() {
			return Object.values(this.class);
		},

    race_Key() {
      return Object.keys(this.race);
    },

    class_Key() {
      return Object.keys(this.class);
    },
	},
});
