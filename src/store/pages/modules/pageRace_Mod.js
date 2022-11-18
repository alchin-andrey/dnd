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
    showRaceSettings({ rootGetters, dispatch, rootState }, name){
      // let ethnos_common = rootGetters["MY/MY_Race_Common"];
      let ethnos_common = rootState.MY.MY.ethnos.name === "common";
      let arr = name.split("_")[0];
      let color_length = rootState.MY.MY.race.settings.color[arr]?.length === 0;
			if (ethnos_common || color_length) {
				return null;
			} else {
        dispatch("showSettings", {page: "race_page", name: name});
			}
		},
	},
};
