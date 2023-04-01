// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import backstories from "@/assets/catalog/base_data/list_backstories.js";
import race from "@/assets/catalog/base_data/step1_races.js";
import classes from "@/assets/catalog/base_data/step2_classes.js";

export const useMainStore = defineStore({
	id: "MainStore",
	state: () => ({
    backstories: backstories,
		race: race,
    class: classes,
	}),
	getters: {
    backstories_Arr() {
      const obj = this.backstories;
      let new_arr = [];
      for (const key in obj) {
        new_arr.push(obj[key]);
      }
			return new_arr;
		},
	},
});
