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
    spells_Activ_Obj_RE(state) {
      const MYStore = useMYStore();
			let arr = [];
			let i = [];
			let j = [];
			MYStore.MY.race.spells ? (i = MYStore.MY.race.spells) : null;
			MYStore.MY.ethnos.spells ? (j = MYStore.MY.ethnos.spells) : null;
			i.concat(j).forEach((el) => arr.push(el.spell));
			return arr;
			// return i.concat(j);
		},

		spells_Activ_Arr_RE(state) {
			let arr = [];
			this.spells_Activ_Obj_RE.forEach((el) =>
				arr.push(el.find((x) => x.name).name)
			);
			return arr;
		},

		spells_Settings_Obj_RE(state) {
      const MYStore = useMYStore();
			let arr = [];
			let spells_settings = MYStore.ethnos_Setting("spells");
			if (spells_settings) {
				let mana_min = spells_settings.mana_min;
				let mana_max = spells_settings.mana_max;
				let classes = spells_settings.classes;
				for (let kay in state.spells) {
					for (let j = mana_min; j == mana_max; j++) {
						let name = state.spells[kay][j]?.name;
						if (name) {
							for (let i in classes) {
								let check = state.spells[kay][j].classes.includes(classes[i]);
								if (check) {
									let unique = !arr.includes(state.spells[kay]);
									if (unique) {
										arr.push(state.spells[kay]);
									}
								}
							}
						}
					}
				}
			}
			return arr;
		},

		spells_Pass_Obj_RE() {
			return this.spells_Settings_Obj_RE.filter(
				(el) => !this.spells_Activ_Obj_RE.includes(el)
			);
		},

		spells_Keys(state) {
			let arr = [];
			this.spells_Settings_Obj_RE.forEach((el) =>
				arr.push(el.find((x) => x.name).name)
			);
			return arr;
		},

		spells_Pass_Arr_RE(state) {
			let arr = [];
			this.spells_Pass_Obj_RE.forEach((el) =>
				arr.push(el.find((x) => x.name).name)
			);
			return arr;
		},

		spells_Pass_Arr_RE_ALL() {
			return this.spells_Keys.filter(
				(el) => !this.spells_Activ_Arr_RE.includes(el)
			);
		},

		spells_Custom_Arr_RE() {
      const MYStore = useMYStore();
			return MYStore.COMMON_Custom_Arr_RE("spells");
		},

		spells_Custom_Obj_RE() {
			let arr = [];
			let pass_obj = this.spells_Pass_Obj_RE;
			let cusstom_arr = this.spells_Custom_Arr_RE;
			for (let i in pass_obj) {
        for (let j in pass_obj[i]) {
				for (let item in cusstom_arr)
					if (pass_obj[i][j].name == cusstom_arr[item]) {
						arr.push(pass_obj[i]);
					}
        }
			}
			return arr;
		},
  },
  actions: {
    getCustomSelect_Spells_RE(name) {
      const MYStore = useMYStore();
			MYStore.getCustomSelect_COMMON_RE("spells", name);
		},
  }
});
