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

    stats_Custom_Arr_RE() {
      const MYStore = useMYStore();
      return MYStore.COMMON_Custom_Arr_RE('stats');
    },
  },
  actions: {
    
  }
});
