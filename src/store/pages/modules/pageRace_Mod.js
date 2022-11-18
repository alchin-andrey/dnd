export default {
	// namespaced: true,
	state: () => ({
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
		Shown_Race_Selection(state) {
			const obj = state.shown;
			const values = Object.values(obj);
			return values.some((el) => el === true);
		},
	},

	mutations: {
	},
	actions: {
    showRaceSetings({ commit, dispatch, state, rootState }, {name, key}){
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
				commit("CLOSE_HOME");

			} else {
				dispatch("goHome");
			}
		},
	},
};
