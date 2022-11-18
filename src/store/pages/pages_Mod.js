import mainPage from './modules/pageMain_Mod';
import racePage from './modules/pageRace_Mod';

export default {
	namespaced: true,
  modules: {
    main_page: mainPage,
    race_page: racePage,
  },

  state: () => ({
		pages: {
      race: true,
      clas: false
    }
	}),

	getters: {
    activePage( state ) {
      const obj = state[page].shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          return key;
        }
      }
		},
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
    closeSettings({ commit, state }, {page}) {
      const obj = state[page].shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          commit("CLOSE_SETING", {page: page, name: key});
        }
      }
		},

    closeAllSetting({ dispatch }, page) {
      dispatch("closeSettings", {page: "main_page"});
      dispatch("closeSettings", {page: page});
    },

    closeAllSetting_1({ dispatch }) {
      dispatch("closeSettings", {page: "main_page"});
      dispatch("closeSettings", {page: "race_page"});
    },

    goSetting({ commit, dispatch }, {page, name}) {
      dispatch("closeAllSetting", page);
      commit("OPEN_SETING", {page: page, name: name});
      commit("CLOSE_HOME");
    },

    goHome({ commit, dispatch }, page) {
      dispatch("closeAllSetting", page);
			commit("OPEN_HOME");
		},

    showSettings({ dispatch, state }, {page, name}){
			if (state[page].shown[name] === false) {
        dispatch("goSetting", {page: page, name: name});
			} else {
				dispatch("goHome", page);
			}
    },
	},
};
