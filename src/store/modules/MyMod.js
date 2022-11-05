// import MY from "@/assets/catalog/MY.js";
import MY_default from "@/assets/catalog/default_MY.js";
import { MY, MY_save, MY_def } from "@/assets/catalog/user.js";
import races from "@/assets/catalog/base_data/step1_races";
import getters from "@/store/gender/getters";

// const MY = Base;
// const MY_save = user;

export default {
	namespaced: true,
	state: () => ({
		MY_us: MY,
		MY_save: MY_save,
		MY_def: MY_def,
	}),
	getters: {
		race(state){
			console.log("MY_save до", state.MY_us, state.MY_save, state.MY_def);
			console.log("MY/race", state.MY_us.race);
			return state.MY_us.race
		},
		defaul(state){
			return state.MY_def
		}
	},
	mutations: {
    MY_RACE(state) {
			console.log("MY_RACE");
			console.log("MY_save до", state.MY_us, state.MY_save, state.MY_def);
			state.MY_us.race = 7;
			console.log("MY_save до", state.MY_us, state.MY_save, state.MY_def);
		},
		MY_DEF(state) {
			console.log("MY_save до", state.MY_save.race, state.MY_def);
			state.MY_us = state.MY_save;
			console.log("MY_save после", state.MY_save.race, state.MY_def);
		},
	},
	actions: {
		def({ commit }) {
			commit("MY_DEF");
		}
	},
};
