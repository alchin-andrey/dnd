// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";

import { barbarian_rage_bonus } from "@/assets/catalog/base_data/step2_classes.js";
import spells from "@/assets/catalog/base_data/list_spells.js";

export const useSpellsStore = defineStore({
	id: 'SpellsStore',
	state: () => ({
    spells: spells,
	}),

  getters: {
    MY_Level() {
      const MYStore = useMYStore();
      return MYStore.MY.level;
    },

    //SECTION - STR
		Str_X_Level_5_11_17: (state) => (spell) => {
			let str = spell.impact_size_str;
			let lvl = state.MY_Level;
			let kof = null;
			if (lvl < 5) {
				kof = 1;
			} else if (lvl < 11) {
				kof = 2;
			} else if (lvl < 17) {
				kof = 3;
			} else {
				kof = 4;
			}
			let res = str + kof;
			return res;
			//return to: impact_size_str
			//1lvl = 1×, 5lvl = 2×, 11lvl = 3×, 17lvl = 4×
			//Example: 1× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
		},
  //!SECTION - STR
  },
  actions: {

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
