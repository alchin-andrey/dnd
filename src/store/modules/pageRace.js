import race_page from "@/assets/catalog/page_data/race_page.js";


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
	getters: {
    Shown_Selection(state) {
			const obj = state.race_page.shown;
			const values = Object.values(obj);
			return values.some(el => el === true);
		},
  },

	mutations: {
		PAGE(state, data) {
			state.race_page.shown[data.name] = data.bool;
		},

		NEG_PAGE(state, name) {
			state.race_page.shown[name] = !state.race_page.shown[name];
		},

		CLOSE_HOME(state) {
			state.race_page.shown_home = false;
		},

		OPEN_HOME(state) {
			state.race_page.shown_home = true;
		},

		CLOSE(state) {
			const obj = state.race_page.shown;
			const keys = Object.keys(obj);
			keys.forEach((key) => {
				state.race_page.shown[key] = false;
			});
		},

    SHOW_SCROLL(state, name) {
			state[name] = state[name] === false;
		},
	},
	actions: {
		go({}) {
			console.log(1);
			// console.log(rootGetters["MY/race"]);
			// console.log(t("languages_human"));
			// commit("MY/MY_RACE", null, { root: true });
		},

		show({ commit, dispatch, state, rootState }, name, key){
			let ethnos_common = (name === "ethnos" && rootState.MY.MY.ethnos.name === "common");
			let color_common = (
				name === `${key}_color` &&
				rootState.MY.MY.race.settings.color[key].length === 0
			);
			if (ethnos_common || color_common) {
				return null;
			} else if (state.race_page.shown[name] === false) {
				commit("CLOSE");
				commit("NEG_PAGE", name);
				commit("CLOSE_HOME");
				// commit("PAGE", {name:"home", bool: false});
			} else {
				dispatch("goHome");
			}
		},

		goHome({ commit }) {
			commit("CLOSE");
			commit("OPEN_HOME");
		},
	},
};
