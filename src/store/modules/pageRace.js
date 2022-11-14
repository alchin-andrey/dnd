import race_page from "@/assets/catalog/page_data/race_page.js";

import { t } from "@/plagins/myFunction.js"


export default {
	namespaced: true,
	state: () => ({
		race_page,
		// logo: false,
		// lang: false,
		// lvl: false,
		//
		// ethnos: false,
		// gender: false,
		// skin_color: false,
		// eyes_color: false,
		// hair_color: false,
		// age: false,
		// height: false,
		// weight: false,
		// characteristics: false,
		// skills: false,
		// languages: false,
		//
		// selection: false,
		// home: true,
		// home_arr: [false, false],
		//
		// color_selected: {
		// 	skin: null,
		// 	hair: null,
		// 	eyes: null,
		// },
		//
		// shown_humman_lang: false,
		//
		// extra: {
		// 	stats: null,
		// 	skills: null,
		// 	languages: null,
		// },
		//
		// height_kof: 0.5,
		// weight_kof: 0.5,
		// age_kof: 0.5,
	}),
	getters: {},
	mutations: {

		PAGE(state, name, bool) {
			state.race_page[name] = bool
		},


		SHOW(name, key) {
			if (name === "ethnos" && this.MY.ethnos.name === "common") {
				this.race_page.shown_selection = false;
				this.getHomeArr();
				this.race_page[name] = false;
			} else if (
				name === `${key}_color` &&
				this.MY.race.settings.color[key].length === 0
			) {
				this.race_page.shown_selection = false;
				this.getHomeArr();
				this.race_page[name] = false;
			} else if (this.race_page[name] === false) {
				this.close();
				this.race_page.shown_selection = true;
				this.getHomeArr();
				this.race_page[name] = true;
				this.race_page.shown_home = false;
			} else {
				this.race_page.shown_selection = false;
				this.getHomeArr();
				this.close();
				this.race_page.shown_home = true;
			}
		},

		SHOW_HOME(state) {
			console.log("SHOW_HOME");
			state.selection = false;
			state.whtch_home = !state.whtch_home;
			// this.commit("race_page/CLOSE");
			state.home = true;
		},

		CLOSE(state) {
			state.logo = false;
			state.lang = false;
			state.lvl = false;
			state.ethnos = false;
			state.gender = false;
			state.skin_color = false;
			state.eyes_color = false;
			state.hair_color = false;
			state.age = false;
			state.height = false;
			state.weight = false;
			state.characteristics = false;
			state.skills = false;
			state.languages = false;
			console.log("CLOSE");
		},

		// GET_HOME_ARR(state) {
		// 	let arr = state.race_page.shown_home_arr;
		// 	arr.splice(0, 1);
		// 	arr.push(state.race_page.shown_selection);
		// 	state.race_page.shown_home_arr = arr;
		// 	console.log("GET_HOME_ARR");
		// },

    SHOW_SCROLL(state, name) {
			console.log("SHOW_SCROLL", name);
			state[name] = state[name] === false;
		},
	},
	actions: {
		go({ commit, rootGetters }) {
			console.log(1);
			// console.log(rootGetters["MY/race"]);
			// console.log(t("languages_human"));
			// commit("MY/MY_RACE", null, { root: true });
		},

		show({ commit, state, rootState, rootGetters }, name){
			let ethnos_common = (name === "ethnos" && rootState.MY.MY.ethnos.name === "common");
			let color_common = (
				name === `${key}_color` &&
				rootState.MY.MY.race.settings.color[key].length === 0
			);
			if (ethnos_common || color_common) {
				return null
			} else if (state.race_page[name] === false) {
				commit("CLOSE");
				// this.close();
				commit("PAGE", "selection", true);
				// this.race_page.shown_selection = true;
				commit("PAGE", name, true);
				// this.race_page[name] = true;
				commit("PAGE", "home", false);
				// this.race_page.shown_home = false;
			} else {
				this.race_page.shown_selection = false;
				commit("CLOSE");
				// this.close();
				this.race_page.shown_home = true;
			}
		},

		goHome({ commit, rootGetters }) {
      console.log(1);
			commit("SHOW_HOME");
			commit("CLOSE");
		},
	},
};
