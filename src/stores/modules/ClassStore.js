// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import classes from "@/assets/catalog/base_data/step2_classes.js";

export const useClassStore = defineStore({
	id: "ClassStore",
	state: () => ({
		class: classes,
	}),
	getters: {
	},
});
