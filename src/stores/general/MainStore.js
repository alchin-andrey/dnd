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
    obj_To_Arr: (stor) => (obj) => {
      let new_arr = [];
      for (const key in obj) {
        new_arr.push(obj[key]);
      }
			return new_arr;
    },

    backstories_Arr() {
			return this.obj_To_Arr(this.backstories);
		},

    race_Arr() {
			return this.obj_To_Arr(this.race);
		},

    class_Arr() {
			return this.obj_To_Arr(this.class);
		},

    race_Key() {
      return Object.keys(this.race);
    },

    class_Key() {
      return Object.keys(this.class);
    },
	},
});
