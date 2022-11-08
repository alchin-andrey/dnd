// import MY from "@/assets/catalog/MY.js";
import MY_default from "@/assets/catalog/default_MY.js";
import { MY, MY_save, MY_def } from "@/assets/catalog/user.js";
import races from "@/assets/catalog/base_data/step1_races";
import getters from "@/store/gender/getters";

// const MY = Base;
// const MY_save = user;

import {TEST, TEST as TEST_2} from "@/assets/catalog/test.js";
import store from "@/store";
const TEST_MY = TEST;
const TEST_DEF = TEST_2;

export default {
	namespaced: true,
	state: () => ({
		MY_us: MY,
		MY_save: MY_save,
		MY_def: MY_def,
		test_1: TEST_MY,
		test_2: TEST_DEF
	}),
	getters: {
		race(state){
			return state.MY_us.race
		},
		defaul(state){
			return state.MY_def
		}
	},
	mutations: {
		TEST_1_CHANGE(state) {
			console.log("TEST_1_CHANGE");
			console.log("test_1 до", state.test_1);
			console.log("test_2 до", state.test_2);
			state.test_1.value = 7;
			console.log("test_1 после", state.test_1);
			console.log("test_2 после", state.test_2);
		},

    MY_RACE(state) {
			console.log("MY_RACE");
			// console.log("test_1 до", state.MY_us, state.MY_save, state.MY_def);
			state.MY_us.race = 7;
			// console.log("test_1 до", state.MY_us, state.MY_save, state.MY_def);
		},

		MY_DEF(state) {
			// console.log("MY_save до", state.MY_save.race, state.MY_def);
			state.MY_us = state.MY_save;
			// console.log("MY_save после", state.MY_save.race, state.MY_def);
		},
	},
	actions: {
		def({ commit }) {
			RR;
		}
	},
};
