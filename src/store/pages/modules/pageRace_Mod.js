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
			stats: false,
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
    showRaceSettings({ state, dispatch, rootState }, name){
      const ethnos = name === "ethnos";
      const ethnos_common = rootState.MY.MY.ethnos.name === "common";
      const str = name.split("_")[0];
      
      const custom_ethnos = ethnos && ethnos_common;
      const color_length = rootState.MY.MY.race.settings.color[str]?.length === 0;
			if (custom_ethnos || color_length) {
				return null;
			} else {
        dispatch("showSettings", {page: "race_page", name: name});
			}
		},


    // closeSettings_Par({ state, dispatch, rootState }, name){
    //   const page_shown = state.shown[name] === true;
    //   const str_1 = name.split("_")[0];
    //   const str_2 = name.split("_")[1];
      
    //   const ethnos_common = rootState.MY.MY.ethnos.name === "common";
    //   let custom_ethnos = page_shown && ethnos_common;

          
    //   const color_length = rootState.MY.MY.race.settings.color[str]?.length === 0;
    //   let custom_color = page_shown && color_length;

    //   const null_par = rootState.MY.MY.race.settings[str_2] === undefined;
    //   let custom_par = page_shown && null_par;
    //   console.log('str:', str_1, str_2);
    //   console.log('custom_par:', rootState.MY.MY.race.settings[str_2]);
    //   if (custom_ethnos || custom_color || custom_par) {
		// 		dispatch("goHome");
		// 	}
    // },



    closeEthnos({ state, dispatch, rootState }) {
      const ethnos_show = state.shown.ethnos === true;
      const ethnos_common = rootState.MY.MY.ethnos.name === "common";
			if (ethnos_show && ethnos_common) {
				dispatch("goHome");
			}
		},

    closeColor({ state, dispatch, rootState }, name) {
      const color_page = state.shown[`${name}_color`] === true;
      const color_length = rootState.MY.MY.race.settings.color[name].length === 0;
			if (color_page && color_length) {
				dispatch("goHome");
			}
		},

    closePar({ state, dispatch, rootState }, name) {
      const page_shown = state.shown[name] === true;
      const null_race_par = rootState.MY.MY.race.settings[`custom_${name}`] === undefined;
      const null_ethnos_par = rootState.MY.MY.ethnos[`custom_${name}`] === undefined;
			if (page_shown && null_race_par && null_ethnos_par) {
				dispatch("goHome");
			}
		},
	},
};
