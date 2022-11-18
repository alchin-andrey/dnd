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
        commit("OPEN_SETING", {page: "main_page", name: name});
				commit("CLOSE_HOME");
			} else {
				dispatch("goHome");
			}
		},
	},
};
