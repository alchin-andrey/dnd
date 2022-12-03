// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";

export const useStatsStore = defineStore({
	id: 'StatsStore',
	state: () => ({
    stats: [
      "strength",
      "strength",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "charisma"
    ]
	}),

  getters: {
    stats_Keys() {
      const MYStore = useMYStore();
			return Object.keys(MYStore.MY.stats);
		},

    // stats_Keys(state) {
		// 	return state.stats;
		// },

    stats_Activ_Obj_RE() {
      const MYStore = useMYStore();
			let i = MYStore.MY.race.stats;
			let j = MYStore.MY.ethnos.stats;
			return Object.assign({}, i, j);
		},

    stats_Activ_Arr_RE() {
			return Object.keys(this.stats_Activ_Obj_RE);
		},

    stats_Pass_Arr_RE() {
			return this.stats_Keys.filter(
				el => !this.stats_Activ_Arr_RE.includes(el)
			);
		},

    // stats_Custom_Arr_RE() {
    //   const MYStore = useMYStore();
    //   return MYStore.COMMON_Custom_Arr_RE('stats');
    // },

    stats_Custom_RE_Quant(state) {
      const MYStore = useMYStore();
			let i = 0;
			const race_custom = MYStore.MY.race.race_settings.custom_stats;
			const ethnos_custom = MYStore.MY.ethnos.custom_stats;
			if (race_custom) {
				i += race_custom[0];
			}
			if (ethnos_custom) {
				i += ethnos_custom[0];
			}
			return i;
		},

    stats_Custom_Arr_RE(state) {
      const MYStore = useMYStore();
			let custom_arr = [];
			const selected_arr = MYStore.MY.custom_selected_race_page.stats;

			const ACTIV_ARR = this.stats_Activ_Arr_RE;
			const KEYS = this.stats_Keys;

			let pass_selected_arr = selected_arr.filter(
				el => !ACTIV_ARR.includes(el)
			);
			const increment = state.stats_Custom_RE_Quant;
			if (increment === 0) {
				return custom_arr;
			} else {
				if (pass_selected_arr.length === increment) {
					custom_arr = pass_selected_arr;
				} else if (pass_selected_arr.length < increment) {
					const activ_full_arr = ACTIV_ARR.concat(pass_selected_arr);
					let pass_arr = KEYS.filter(el => !activ_full_arr.includes(el));
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

    stats_RE_Numb: state => name => {
			let option_value = state.stats_Activ_Obj_RE[name];
			return option_value ? option_value : 0;
		},

		stats_Custom_RE_Numb: state => name => {
      const MYStore = useMYStore();
			let custom_option = MYStore.MY.race.race_settings.custom_stats;
			if (custom_option) {
				let option_true = state.stats_Custom_Arr_RE.includes(name);
				if (option_true) {
					let increment = custom_option[1];
					return increment;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		},

		stats_Race_Page_Numb: state => name => {
			const RE = state.stats_RE_Numb(name);
			const custom = state.stats_Custom_RE_Numb(name);
			return RE + custom;
		},
  },
  actions: {
    // getCustomSelect_Stats_RE(name) {
    //   const MYStore = useMYStore();
		// 	MYStore.getCustomSelect_COMMON_RE("stats", name);
		// },

    getCustomSelect_Stats_RE(name) {
      const MYStore = useMYStore();
			const selekt = this.stats_Custom_Arr_RE;
			const active = this.stats_Activ_Arr_RE.includes(name);
			const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				MYStore.MY.custom_selected_race_page.stats = arr;
			}
		},
  }
});
