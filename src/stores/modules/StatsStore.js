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
    ],

    stats_base_numb: [15, 14, 13, 12, 10, 8],

    stats_base_save: {
      barbarian: null,
      paladin: null,
      bard: null,
      rogue: null,
      fighter: null,
    }
	}),

  getters: {
    stats_Keys() {
      const MYStore = useMYStore();
			return Object.keys(MYStore.MY.stats);
		},

    //NOTE - Race_Page
		stats_Activ_Obj_RE() {
      const MYStore = useMYStore();
			let i = MYStore.MY.race.stats;
			let j = MYStore.MY.ethnos.stats;
			return Object.assign({}, i, j);
		},

		stats_Activ_Arr_RE() {
			return Object.keys(this.stats_Activ_Obj_RE);
		},

		stats_Pass_Arr_RE(state) {
			return this.stats_Keys.filter(
				(el) => !this.stats_Activ_Arr_RE.includes(el)
			);
		},

		stats_Custom_Arr_RE() {
      const MYStore = useMYStore();
			return MYStore.COMMON_Custom_Arr_RE("stats");
		},

    //ANCHOR - NUMB
    stats_RE_Numb: (state) => (name) => {
			let option_value = state.stats_Activ_Obj_RE[name];
			return option_value ? option_value : 0;
		},

		stats_Custom_RE_Numb: (state) => (name) => {
      const MYStore = useMYStore();
			let settings_stats = MYStore.ethnos_Setting("stats");
			if (settings_stats) {
				let option_true = MYStore.COMMON_Custom_Arr_RE("stats").includes(name);
				if (option_true) {
					let increment = settings_stats.num;
					return increment;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		},

		stats_Race_Page_Numb: (state) => (name) => {
			const RE = state.stats_RE_Numb(name);
			const custom = state.stats_Custom_RE_Numb(name);
			return RE + custom;
		},

    stats_Base_Arr(state) {
      const MYStore = useMYStore();
      let stats_arr_base = MYStore.MY.class.stats_base;
      let stats_arr_save = state.stats_base_save[MYStore.MY.class.name];
      return stats_arr_save ? stats_arr_save : stats_arr_base;
    },

  },
  
  actions: {
    getCustomSelect_Stats_RE(name) {
      const MYStore = useMYStore();
			MYStore.getCustomSelect_COMMON_RE("stats", name);
		},

  }
});
