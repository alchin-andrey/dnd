import racePage from './modules/pageRace';

// import main from "@/assets/catalog/page_data/race_page.js";

import { main_page } from "@/assets/catalog/page_data/race_page.js";

export default {
	namespaced: true,
  modules: {
    race_page: racePage,
  },
	state: () => ({
    main_page,
    // main: {
    //   shown: {
    //     logo: false,
    //     lang: false,
    //     lvl: false,
    //   },
    //   shown_home: true,
    // }
	}),

	getters: {
  },

	mutations: {
    CLOSE_HEADER_SETING(state, name) {
      console.log("CLOSE_HEADER_SETING", name);
			state.main_page.shown[name] = false;
		},

    OPEN_HEADER_SETING(state, name) {
      console.log("OPEN_HEADER_SETING", name);
			state.main_page.shown[name] = true;
		},

		CLOSE_HOME(state) {
			state.main_page.shown_home = false;
		},

		OPEN_HOME(state) {
			state.main_page.shown_home = true;
		},

    SHOW_SCROLL(state, name) {
			state[name] = state[name] === false;
		},
	},
	actions: {

    showHederSetings({ commit, dispatch, state }, name){
      console.log("showHederSetings", state)
      if (state.main_page.shown[name] === false) {
        dispatch("closeHederSetings");
				dispatch("closeRaceSetings");
				commit("OPEN_HEADER_SETING", name);
				commit("CLOSE_HOME");
			} else {
				dispatch("closeHederSetings");
        commit("OPEN_HOME");
			}
		},

		show({ commit, dispatch, state, rootState }, name, key){
      console.log("state.kof", state.kof)
      console.log("state", state.race_page)
      let common = rootState.MY.MY.ethnos.name === "common";
			let ethnos_common = (name === "ethnos" && common);

      let color_length = rootState.MY.MY.race.settings.color[key]?.length === 0;
			let color_common = (name === `${key}_color` && color_length);
			if (ethnos_common || color_common) {
				return null;
			} else if (state.race_page.race_page.shown[name] === false) {
				dispatch("closeRaceSetings");
				commit("OPEN_RACE_SETING", name);
				commit("CLOSE_HOME");

			} else {
				dispatch("goHome");
			}
		},

    goHome({ commit, dispatch }) {
			dispatch("closeRaceSetings");
			commit("OPEN_HOME");
		},

    closeHederSetings({ commit, state }) {
      console.log("closeHederSetings")
			const obj = state.main_page.shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          commit("CLOSE_HEADER_SETING", key);
        }
      }
		},
	},
};