// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import race from "@/assets/catalog/base_data/step1_races.js";
import classes from "@/assets/catalog/base_data/step2_classes.js";

export const useMainStore = defineStore({
	id: "MainStore",
	state: () => ({
		race: race,
    class: classes,
	}),
	getters: {
	},
});
