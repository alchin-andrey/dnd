import mainPage from './modules/pageMain_Mod';
import racePage from './modules/pageRace_Mod';

export default {
	namespaced: true,
  modules: {
    main_page: mainPage,
    race_page: racePage,
  },

	getters: {
  },

	mutations: {
    CLOSE_SETING(state, {page, name}) {
      state[page].shown[name] = false;
		},

    OPEN_SETING(state, {page, name}) {
			state[page].shown[name] = true;
		},

    SHOW_SCROLL(state, {page, name}) {
			state[page][name] = state[page][name] === false;
		},
	},
	actions: {
    goHome({ commit, dispatch }) {
      dispatch("closeSetings", {page: "main_page"});
      dispatch("closeSetings", {page: "race_page"});
			commit("OPEN_HOME");
		},

    closeSetings({ commit, state }, data) {
      const obj = state[data.page].shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          commit("CLOSE_SETING", {page: data.page, name: key});
        }
      }
		},
	},
};
