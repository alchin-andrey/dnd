import race_page from "@/assets/catalog/page_data/race_page.js";

export default {
	namespaced: true,
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

		CLOSE_HOME(state) {
			state.race_page.shown_home = false;
		},

		OPEN_HOME(state) {
			state.race_page.shown_home = true;
		},

    SHOW_SCROLL(state, name) {
			state[name] = state[name] === false;
		},
	},
	actions: {

		show({ commit, dispatch, state, rootState }, name, key){
      let common = rootState.MY.MY.ethnos.name === "common";
			let ethnos_common = (name === "ethnos" && common);

      let color_length = rootState.MY.MY.race.settings.color[key]?.length === 0;
			let color_common = (name === `${key}_color` && color_length);
			if (ethnos_common || color_common) {
				return null;
			} else if (state.race_page.shown[name] === false) {
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

    closeRaceSetings({ commit, state }) {
			const obj = state.race_page.shown;
      for (const [key, value] of Object.entries(obj)) {
        if (value) {
          commit("CLOSE_RACE_SETING", key);
        }
      }
		},

    go({}) {
			console.log(1);
			// console.log(rootGetters["MY/race"]);
			// console.log(t("languages_human"));
			// commit("MY/MY_RACE", null, { root: true });
			// commit("PAGE", {name:"home", bool: false});
		},
	},
};
