// import { race_page } from "@/assets/catalog/page_data/race_page.js";

export default {
	// namespaced: true,
	state: () => ({
		// race_page,
		shown: {
			ethnos: false,
			gender: false,
			skin_color: false,
			eyes_color: false,
			hair_color: false,
			age: false,
			height: false,
			weight: false,
			characteristics: false,
			skills: false,
			languages: false,
		},
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
	getters: {
		Shown_Selection(state) {
			const obj = state.shown;
			const values = Object.values(obj);
			return values.some((el) => el === true);
		},
	},

	mutations: {
		CLOSE_RACE_SETING(state, name) {
			state.shown[name] = false;
		},

		OPEN_RACE_SETING(state, name) {
			state.shown[name] = true;
		},
	},
	actions: {
		closeRaceSetings({ commit, state }) {
			const obj = state.shown;
			for (const [key, value] of Object.entries(obj)) {
				if (value) {
					commit("CLOSE_RACE_SETING", key);
				}
			}
		},
	},
};
