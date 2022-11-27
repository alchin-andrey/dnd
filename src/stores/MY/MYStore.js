// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";

export const useMYStore = defineStore({
	id: "MYStore",
	state: () => ({
		MY: MY,
	}),
	getters: {
		race_Settings(state) {
			return state.MY.race.settings;
		},

		ethnos_Settings(state) {
			return state.MY.ethnos;
		},

		// SECTION //^ STATS GETTERS
		MY_Stats(state) {
			return state.MY.stats;
		},

		MY_Race_Stats(state) {
			return state.MY.race.stats;
		},

		MY_Etnos_Stats(state) {
			return state.MY.ethnos.stats;
		},

		stats_Keys(state) {
			return Object.keys(state.MY.stats);
		},

		stats_Activ_Obj_RE(state) {
			let i = state.MY.race.stats;
			let j = state.MY.ethnos.stats;
			return Object.assign({}, i, j);
		},

		stats_Activ_Arr_RE() {
			return Object.keys(this.stats_Activ_Obj_RE);
		},

		stats_Pass_Arr_RE(state) {
			return this.stats_Keys.filter(
				el => !this.stats_Activ_Arr_RE.includes(el)
			);
		},

		// custom_RE_Quant: state => name => {
		// 	let i = 0;
		// 	const race_custom = state.MY.race.settings[`custom_${name}`];
		// 	const ethnos_custom = state.MY.race.ethnos[`custom_${name}`];
		// 	if (race_custom) {
		// 		i += race_custom[0];
		// 	}
		// 	if (ethnos_custom) {
		// 		i += ethnos_custom[0];
		// 	}
		// 	return i;
		// },

    stats_Custom_RE_Quant(state) {
			let i = 0;
			const race_custom = state.MY.race.settings.custom_stats;
			const ethnos_custom = state.MY.race.settings.ethnos.custom_stats;
			if (race_custom) {
				i += race_custom[0];
			}
			if (ethnos_custom) {
				i += ethnos_custom[0];
			}
			return i;
		},

		stats_Custom_Arr_RE(state) {
			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page.stats;
			const activ_arr = this.stats_Activ_Arr_RE;
			let pass_selected_arr = selected_arr.filter(el => !activ_arr.includes(el));
      let pass_arr = this.stats_Keys.filter(el => !activ_arr.includes(el));
			const increment = this.stats_Custom_RE_Quant;
			if (increment === 0) {
				return custom_arr;
			} else {
				if (pass_selected_arr.length === increment) {
					custom_arr = pass_selected_arr;
				} else if (pass_selected_arr.length < increment) {
					const activ_full_arr = activ_arr.concat(pass_selected_arr);
					pass_arr = this.stats_Keys.filter(el => !activ_full_arr.includes(el));
					const i = increment - pass_selected_arr.length;
					custom_arr = pass_selected_arr.concat(pass_arr.slice(0, i));
				} else if (pass_selected_arr.length > increment) {
          const i = pass_selected_arr.length - increment;
					pass_selected_arr.splice(0, i);
          custom_arr = pass_selected_arr;
				}
				return custom_arr;
			}
		},

		// stats_Custom_Arr_RE: (state) => (name) => {
		//   let custom_arr = [];
		//   let selected_arr = state.MY.custom_selected_race_page[name];
		//   let activ_arr = this.stats_Activ_Arr_RE;
		// 	let pass_arr = this.stats_Pass_Arr_RE;
		//   const increment = this.custom_RE_Quant(name);
		//   if (increment === 0) {
		//     return custom_arr;
		//   } else {
		//     if (selected_arr.length === increment) {
		//       custom_arr = selected_arr;
		//     } else if (selected_arr.length < increment) {
		//       activ_arr = activ_arr.push(selected_arr);
		//       pass_arr = this.stats_Keys.filter((el) => !activ_full_arr.includes(el));
		//       const i = increment - selected_arr.length;
		//       custom_arr = selected_arr.push(pass_arr.slice(0, i));
		//     } else if (selected_arr.length > increment) {
		//       selected_arr = selected_arr.splice(0, increment);
		//       activ_arr = activ_arr.push(selected_arr);
		//       pass_arr = this.stats_Keys.filter((el) => !activ_full_arr.includes(el));
		//       const i = increment;
		//       custom_arr = selected_arr.push(pass_arr.slice(0, i));
		//     }
		//     return custom_arr;
		//   }
		// },

		stats_RE_Numb: state => name => {
			let stats_name = this.stats_Activ_Obj_RE[name];
			return stats_name ? stats_name : 0;
		},

		stats_Custom_RE_Numb: state => name => {
			let custom_stats = state.MY.race.settings.custom_stats;
			if (custom_stats) {
				let stats_true = state.MY.custom_race.stats.includes(name);
				if (stats_true) {
					let increment = custom_stats[1];
					return increment;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		},
	},
	actions: {
		getRaceObj(name) {
			this.MY.race = name;
		},

		getRaceName(name) {
			this.MY.race_name = name;
		},

		getEthnos() {
			this.MY.ethnos = Object.values(this.MY.race.settings.ethnos)[0];
		},

		getEthnosName() {
			this.MY.ethnos_name = Object.values(this.MY.race.settings.ethnos)[0].name;
		},

		getCustomRE(name) {
			const arr_free = this[`${name}_Pass_Arr_RE`];
			let arr = [];
			const race_custom = this.MY.race.settings[`custom_${name}`];
			const ethnos_custom = this.MY.race.ethnos[`custom_${name}`];
			if (race_custom) {
				let i = race_custom[0];
				arr = arr_free.slice(0, i);
			}
			if (ethnos_custom) {
				let i = ethnos_custom[0];
				arr = arr_free.slice(0, i);
			}
			this.MY.custom_race[name] = arr;
		},

		getCustomActi_Pinia(item, name) {
			const selekt = this.stats_Custom_Arr_RE;
			const active = this.stats_Activ_Arr_RE.includes(name);
			const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				this.MY.custom_selected_race_page[item] = arr;
			}
		},

		// SECTION //^ STATS ACTIONS
	},
});
