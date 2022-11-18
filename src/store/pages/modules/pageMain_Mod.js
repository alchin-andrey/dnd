export default {
	// namespaced: true,
	state: () => ({
      shown: {
        logo: false,
        lang: false,
        lvl: false,
      },
      shown_home: true,
	}),

	getters: {
    Shown_Main_Selection(state) {
			const obj = state.shown;
			const values = Object.values(obj);
			return values.some((el) => el === true);
		},
  },

	mutations: {
		CLOSE_HOME(state) {
			state.shown_home = false;
		},

		OPEN_HOME(state) {
			state.shown_home = true;
		},
	},
	actions: {

    showMainSettings({ commit, dispatch, state }, name){
      if (state.shown[name] === false) {
        dispatch("closeSettings", {page: "main_page"});
        dispatch("closeSettings", {page: "race_page"});
        //Добавлять по мере
        commit("OPEN_SETING", {page: "main_page", name: name});
				commit("CLOSE_HOME");
			} else {
        dispatch("closeSettings", {page: "main_page"});
				commit("OPEN_HOME");
			}
		},

    showMainSettings_2({ commit, dispatch, state }, name){
      if (state.shown[name] === false) {
        dispatch("showSettings", {page: "race_page", name: name})
        dispatch("closeSettings", {page: "main_page"});
        dispatch("closeSettings", {page: "race_page"});
        commit("OPEN_SETING", {page: "main_page", name: name});
				commit("CLOSE_HOME");
			} else {
				dispatch("goHome");
			}
		},

    showMainSettings_1({ rootGetters, dispatch, rootState }, name){
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
