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
    showRaceSetings({ commit, dispatch, state, rootState }, {name, key}){
      console.log("showRace", name, key)
      let common = rootState.MY.MY.ethnos.name === "common";
			let ethnos_common = (name === "ethnos" && common);

      let color_length = rootState.MY.MY.race.settings.color[key]?.length === 0;
			let color_common = (name === `${key}_color` && color_length);
			if (ethnos_common || color_common) {
				return null;
			} else if (state.shown[name] === false) {
        dispatch("closeSetings", {page: "main_page"});
				dispatch("closeSetings", {page: "race_page"});
        commit("OPEN_SETING", {page: "race_page", name: name});
				// commit("OPEN_RACE_SETING", name);
				commit("CLOSE_HOME");

			} else {
				dispatch("goHome");
			}
		},

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
