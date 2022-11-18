import racePage from './modules/pageRace';

export default {
	namespaced: true,
  modules: {
    race_page: racePage,
  },
	state: () => ({
    main_page: {
      shown: {
        logo: false,
        lang: false,
        lvl: false,
      },
      shown_home: true,
    }
	}),

	getters: {
  },

	mutations: {
    // CLOSE_HEADER_SETING(state, name) {
		// 	state.main_page.shown[name] = false;
		// },
		//
    // OPEN_HEADER_SETING(state, name) {
		// 	state.main_page.shown[name] = true;
		// },

    CLOSE_SETING(state, {page, name}) {
      state[page].shown[name] = false;
		},

    OPEN_SETING(state, {page, name}) {
			state[page].shown[name] = true;
		},

		CLOSE_HOME(state) {
			state.main_page.shown_home = false;
		},

		OPEN_HOME(state) {
			state.main_page.shown_home = true;
		},

    SHOW_SCROLL(state, name) {
			state.main_page[name] = state.main_page[name] === false;
		},
	},
	actions: {

    showHederSetings({ commit, dispatch, state }, name){
      if (state.main_page.shown[name] === false) {
        dispatch("closeSetings", {page: "main_page"});
        dispatch("closeSetings", {page: "race_page"});
				// dispatch("closeRaceSetings");
        commit("OPEN_SETING", {page: "main_page", name: name});
				// commit("OPEN_HEADER_SETING", name);
				commit("CLOSE_HOME");
			} else {
				dispatch("goHome");
			}
		},

		show({ commit, dispatch, state, rootState }, {name, key}){
      let common = rootState.MY.MY.ethnos.name === "common";
			let ethnos_common = (name === "ethnos" && common);

      let color_length = rootState.MY.MY.race.settings.color[key]?.length === 0;
			let color_common = (name === `${key}_color` && color_length);
			if (ethnos_common || color_common) {
				return null;
			} else if (state.race_page.shown[name] === false) {
        dispatch("closeSetings", {page: "main_page"});
				dispatch("closeSetings", {page: "race_page"});
        commit("OPEN_SETING", {page: "race_page", name: name});
				// commit("OPEN_RACE_SETING", name);
				commit("CLOSE_HOME");

			} else {
				dispatch("goHome");
			}
		},

    goHome({ commit, dispatch }) {
      dispatch("closeSetings", {page: "main_page"});
      dispatch("closeSetings", {page: "race_page"});
			// dispatch("closeRaceSetings");
			commit("OPEN_HOME");
		},

    closeSetings({ commit, state }, data) {
      const obj = state[data.page].shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          // commit("CLOSE_HEADER_SETING", key);
          commit("CLOSE_SETING", {page: data.page, name: key});
        }
      }
		},
	},
};
