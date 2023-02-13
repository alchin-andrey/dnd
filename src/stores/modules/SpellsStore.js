// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useDicStore } from "@/stores/general/DicStore";

import spells from "@/assets/catalog/base_data/list_spells.js";

export const useSpellsStore = defineStore({
	id: 'SpellsStore',
	state: () => ({
    spells: spells,
	}),

  getters: {
    spells_For_Arr_Obj: (state) => (arr_obj) => {
      let arr_spell = [];
      arr_obj.forEach((el) => arr_spell.push(el.spell));
			return arr_spell;
		},

    spells_Race_Lvl() {
      const MYStore = useMYStore();
      const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.race?.spells);
			return this.spells_For_Arr_Obj(spell_obj);
		},

		spells_Ethnos_Lvl() {
      const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.spells);
      return this.spells_For_Arr_Obj(spell_obj);
		},

    spells_Activ_Obj_RE() {
			const race_spells = this.spells_Race_Lvl;
			const ethnos_spells = this.spells_Ethnos_Lvl;
			return race_spells.concat(ethnos_spells);
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
					for (let j = mana_min; j <= mana_max; j++) {
						let name = state.spells[kay][j]?.name;
						if (name) {
							for (let i in classes) {
								let check = state.spells[kay][j].classes.includes(classes[i]);
                let not_ability = state.spells[kay][j].type != "ability";
								if (check && not_ability) {
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

    spells_Pass_Obj_RE_Sort() {
      const { t } = useDicStore();
      if (this.spells_Pass_Obj_RE) {
        return this.spells_Pass_Obj_RE.sort((x, y) => t(x[0].name).localeCompare(t(y[0].name)));
      }
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

    spells_Race_Param() {
			const RE_spells = this.spells_Activ_Obj_RE;
			const custom_spells = this.spells_Custom_Obj_RE;
			return RE_spells.concat(custom_spells);
		},

    spells_Class_Lvl() {
      const MYStore = useMYStore();
      const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.class?.spells);
			return this.spells_For_Arr_Obj(spell_obj);
		},

    spells_Custom_Class_Lvl() {
      const MYStore = useMYStore();
      let spell_arr = MYStore.filter_Custom_Class_Lvl("spells");
      // console.log('spell_arr:', spell_arr)
			return this.spells_For_Arr_Obj(spell_arr);
		},

    spells_Class_Param() {
			const class_spells = this.spells_Class_Lvl;
			const custo_spells = this.spells_Custom_Class_Lvl;
			// console.log('custo_spells:', custo_spells)
			return class_spells.concat(custo_spells);
		},

    spells_RC_Param() {
      const race_spells = this.spells_Race_Param;
			const class_spells = this.spells_Class_Param;
			return race_spells.concat(class_spells);
    }


  },
  
  actions: {
    getCustomSelect_Spells_RE(name) {
      const MYStore = useMYStore();
			MYStore.getCustomSelect_COMMON_RE("spells", name);
		},
  }
});
