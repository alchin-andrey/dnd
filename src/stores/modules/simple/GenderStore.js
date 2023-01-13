// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import gender from "@/assets/catalog/base_data/list_genders.js";

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
	},
});
