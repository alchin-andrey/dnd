// import race_page from "@/assets/catalog/page_data/race_page.js";

export default {
	namespaced: true,
	state: () => ({
		// race_page: race_page,
		shown_logo: false,
		shown_lang: false,
		shown_lvl: false,

		shown_ethnos: false,
		shown_gender: false,
		shown_skin_color: false,
		shown_eyes_color: false,
		shown_hair_color: false,
		shown_age: false,
		shown_height: false,
		shown_weight: false,
		shown_characteristics: false,
		shown_skills: false,
		shown_languages: false,

		shown_selection: false,
		shown_home: true,
		home_arr: [false, false],

		// skin_hower: null,
		// hair_hower: null,
		// eyes_hower: null,

		color_selected: {
			skin: null,
			hair: null,
			eyes: null,
		},

		shown_humman_lang: false,

		extra: {
			stats: null,
			skills: null,
			languages: null,
		},

		height_kof: 0.5,
		weight_kof: 0.5,
		age_kof: 0.5,
	}),
	getters: {},
	mutations: {
		CLOSE(state) {
			state.shown_logo = false;
			state.shown_lang = false;
			state.shown_lvl = false;
			state.shown_ethnos = false;
			state.shown_gender = false;
			state.shown_skin_color = false;
			state.shown_eyes_color = false;
			state.shown_hair_color = false;
			state.shown_age = false;
			state.shown_height = false;
			state.shown_weight = false;
			state.shown_characteristics = false;
			state.shown_skills = false;
			state.shown_languages = false;
			console.log("CLOSE");
		},

		SHOW_HOME(state) {
			console.log("SHOW_HOME");
			state.shown_selection = false;
			state.whtch_home = !state.whtch_home;
			state.shown_home = true;
		},

		GET_HOME_ARR(state) {
			let arr = state.home_arr;
			arr.splice(0, 1);
			arr.push(state.shown_selection);
			state.home_arr = arr;
			console.log("GET_HOME_ARR");
		},

    SHOW_SCROLL(state, name) {
			console.log("SHOW_SCROLL", name);
			state[name] = state[name] === false;
		},
	},
	actions: {
		shownHome({ commit }) {
      console.log(1);
			commit("SHOW_HOME");
			commit("CLOSE");
		},
	},
};
