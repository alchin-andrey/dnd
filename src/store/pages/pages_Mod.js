import mainPage from "./modules/pageMain_Mod";
import racePage from "./modules/pageRace_Mod";

export default {
	namespaced: true,
	modules: {
		main_page: mainPage,
		race_page: racePage,
	},

	state: () => ({
		pages: {
			race_page: true,
			clas_page: false,
		},
		shown_home: true,
	}),

	getters: {
		activePage(state) {
			const obj = state.pages;
			for (const [key, value] of Object.entries(obj)) {
				if (value) {
					return key;
				}
			}
		},
	},

	mutations: {
		CLOSE_HOME(state) {
			state.shown_home = false;
		},

		OPEN_HOME(state) {
			state.shown_home = true;
		},

		CLOSE_SETING(state, { page, name }) {
			state[page].shown[name] = false;
		},

		OPEN_SETING(state, { page, name }) {
			state[page].shown[name] = true;
		},

		SHOW_SCROLL(state, { page, name }) {
			state[page][name] = state[page][name] === false;
		},
	},
	actions: {
		closeSettings({ commit, state }, { page }) {
			const obj = state[page].shown;
			for (const [key, value] of Object.entries(obj)) {
				if (value) {
					commit("CLOSE_SETING", { page: page, name: key });
				}
			}
		},

		closeAllSetting({ getters, dispatch }) {
      const active_page = getters.activePage;
			dispatch("closeSettings", { page: "main_page" });
			dispatch("closeSettings", { page: active_page });
		},

		goHome({ getters, commit, dispatch }) {
			const active_page = getters.activePage;
			dispatch("closeAllSetting", active_page);
			commit("OPEN_HOME");
		},

		showSettings({ commit, getters, dispatch, state }, { page, name }) {
			const active_page = getters.activePage;
			let chapter = page === "main_page" ? page : active_page;
			if (state[page].shown[name] === false) {
				dispatch("closeAllSetting");
				commit("OPEN_SETING", { page: chapter, name: name });
				commit("CLOSE_HOME");
			} else {
				dispatch("goHome");
			}
		},
	},
};
