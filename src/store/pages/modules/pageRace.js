import {race_page} from "@/assets/catalog/page_data/race_page.js";

export default {
	// namespaced: true,
	state: () => ({
		race_page,
	}),
	getters: {
    Shown_Selection(state) {
			const obj = state.race_page.shown;
			const values = Object.values(obj);
			return values.some(el => el === true);
		},
  },

	mutations: {
    CLOSE_RACE_SETING(state, name) {
      console.log("CLOSE_RACE_SETING", name);
			state.race_page.shown[name] = false;
		},

    OPEN_RACE_SETING(state, name) {
      console.log("OPEN_RACE_SETING", name);
			state.race_page.shown[name] = true;
		},
	},
	actions: {
    closeRaceSetings({ commit, state }) {
      console.log("closeRaceSetings", state.race_page.shown)
			const obj = state.race_page.shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          commit("CLOSE_RACE_SETING", key);
        }
      }
		},
	},
};