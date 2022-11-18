import MY from "@/assets/catalog/MY.js";
import MY_SAVE from "@/assets/catalog/MY_SAVE.js";
import MY_DEF from "@/assets/catalog/MY_DEF.js";

export default {
	namespaced: true,
	state: () => ({
		MY,
		MY_SAVE: MY_SAVE,
		MY_DEF: MY_DEF,
	}),
	getters: {
    //race_page
    MY_Race_Common(state){
			return state.MY.ethnos.name === "common";
		},

		MY_race(state){
			return state.MY.race
		},
	},
	mutations: {
		MY_DEF(state) {
			state.MY = state.MY_DEF;
		},
	},
	actions: {
		def({ commit }) {

		}
	},
};
