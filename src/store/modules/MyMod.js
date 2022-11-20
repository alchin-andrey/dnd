import MY from "@/assets/catalog/MY.js";
import MY_SAVE from "@/assets/catalog/MY_SAVE.js";
import MY_DEF from "@/assets/catalog/MY_DEF.js";

export default {
	namespaced: true,
	state: () => ({
		MY,
		MY_SAVE: MY_SAVE,
		MY_DEF: MY_DEF,
	}),
	getters: {
		// newsPosts(state) {
		//     return state.posts.filter(post => post.type === 'news');
		// },
		// postById (state) {
		//     return (id) => state.posts.find(item => item.id === id);
		// }

		// MY_Race_Obj(state, getters, rootState) {
		// 	const obj = rootState.race.race;
		// 	const race_name = state.MY.race_name;
		// 	return obj[race_name];
		// },

		MY_Race_Stats(state) {
			return state.MY.race.stats;
		},

		MY_Etnos_Stats(state) {
			return state.MY.ethnos.stats;
		},

		MY_Stats(state) {
			return state.MY.stats;
		},

		MY_Race(state) {
			return state.MY.race;
		},

		race_Settings(state) {
			return state.MY.race.settings;
		},

		MY_Ethnos(state) {
			return state.MY.ethnos;
		},

		Stats_Keys(state) {
			return Object.keys(state.MY.stats);
		},

		Stats_Activ_Obj_RE(state) {
			let i = state.MY.race.stats;
			let j = state.MY.ethnos.stats;
			let obj = { key: 1, name: 2 };
			// obj = obj + i;
			// console.log('i:',i)
			// console.log('obj:', obj)
			// console.log('assign:', Object.assign({}, obj, i, j))
			return Object.assign({}, i, j);
		},

		Stats_Activ_RE(state, getters) {
			return Object.keys(getters.Stats_Activ_Obj_RE);
		},

		Stats_Pass_RE(state, getters) {
			return Object.keys(state.MY.stats).filter(
				(el) => !getters.Stats_Activ_RE.includes(el)
			);
		},

		//race_page
		MY_Race_Common(state) {
			return state.MY.ethnos.name === "common";
		},
	},
	mutations: {
		GET_ETHNOS(state) {
			state.MY.ethnos = Object.values(state.MY.race.settings.ethnos)[0];
		},

		CHANGE_STATS(state, { key, name, value }) {
			state.MY.stats[key][name] = value;
		},
	},
	actions: {

    zeroStatsNumb({ state, getters, commit }, name)  {
      const keys = getters.Stats_Keys;
			keys.forEach((key) => {
				commit("CHANGE_STATS", { key: key, name: name, value: 0 });
			});
    },

		getStatsNumb({ state, commit, dispatch }, name) {
			dispatch("zeroStatsNumb", name);
			const obj = state.MY[name].stats;
			if (obj) {
				for (const [key, value] of Object.entries(obj)) {
					commit("CHANGE_STATS", {
						key: key,
						name: name,
						value: value,
					});
				}
			}
		},

    getStatsNumb_Custom({ state, getters, commit, dispatch }, name) {
			dispatch("zeroStatsNumb", name);
			const arr = state.MY.custom_race.stats;
      if (arr) {
      arr.forEach((key) => {
        const increment = getters.race_Settings.custom_stats[1];
				commit("CHANGE_STATS", { key: key, name: name, value: increment });
			});
    }
		},
	},
};
