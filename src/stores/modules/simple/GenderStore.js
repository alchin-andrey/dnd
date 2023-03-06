// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import gender from "@/assets/catalog/base_data/list_genders.js";
import { useMYStore } from "@/stores/user/MYStore";

export const useGenderStore = defineStore({
	id: "GenderStore",
	state: () => ({
		gender: gender,
	}),
	getters: {
		phisiological_Arr(state) {
			return state.gender.phisiological;
		},
		feel_Arr(state) {
			return state.gender.feel;
		},
		look_Arr(state) {
			return state.gender.look;
		},
    attraction_Arr(state) {
      return state.gender.attraction;
    },

    gender_Arr() {
      const MYStore = useMYStore();
      const phisiological = MYStore.MY.gender.phisiological;
      const feel = MYStore.MY.gender.feel;
      const look = MYStore.MY.gender.look;
      const attraction = MYStore.MY.gender.attraction;
      return [phisiological, feel, look, attraction];
    }
	},
});
