// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useDicStore } from "@/stores/general/DicStore";

import spells from "@/assets/catalog/base_data/list_spells.js";

export const useSpellsStore = defineStore({
	id: "SpellsStore",
	state: () => ({
		spells: spells,
	}),

	getters: {
    spells_Arr() {
      const obj = this.spells;
      let new_arr = [];
      for (const key in obj) {
        new_arr.push(obj[key]);
      }
			return new_arr;
		},

		spells_For_Arr_Obj: (stor) => (arr_obj) => {
			let arr_spell = [];
			arr_obj.forEach((el) => arr_spell.push(el.spell));
			return arr_spell;
		},

    spells_Filter_Without: (stor) => (arr_filter, arr_main) => {
      return arr_filter.filter((el) => !arr_main.some(item => {
        return item.spell.find(i => i.name).name == el.spell.find(i => i.name).name;
      }));
		},

    spells_filter_Ability: (stor) => (arr) => {
			return arr.filter(
				(el) => el.spell.find((item) => item.name).type == "ability"
			);
		},
    
    spells_filter_Not_Ability: (stor) => (arr) => {
			return arr.filter(
				(el) => el.spell.find((item) => item.name).type !== "ability"
			);
		},

		spells_Race_Main_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.race?.spells);
			return spell_obj;
		},

		spells_Race_Ethnos_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.spells);
			return spell_obj;
		},

		spells_Custom_Race_Lvl() {
			const MYStore = useMYStore();
			let spell_arr = MYStore.filter_Custom_Race_Lvl("spells");
			return spell_arr;
		},

		spells_Race_Param_All() {
			const race = this.spells_Race_Main_Arr;
			const ethnos = this.spells_Race_Ethnos_Arr;
			const custom_race = this.spells_Custom_Race_Lvl;
			return [...race, ...ethnos, ...custom_race];
		},

		spells_Race_Param() {
			return [...new Set(this.spells_Race_Param_All)];
		},

		spells_Class_Main_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.class?.spells);
			return spell_obj;
		},

		spells_Class_Custom_Arr() {
			const MYStore = useMYStore();
			let spell_arr = MYStore.filter_Custom_Class_Lvl("spells");
			return spell_arr;
		},

    spells_Class_Settings_Many_Arr() {
      const MYStore = useMYStore();
      const arr = MYStore.spells_Settings_Class_Arr;
      const spell_arr = MYStore.filter_Custom_Lvl(arr, "spells")
      // let spell_arr = [];
      // arr.forEach(el => {
      //   el.select_list.forEach(sub_el => {
      //     const item_lvl = MYStore.level_Filter_Arr(sub_el?.[spells]);
      //     spell_arr = spell_arr.concat(item_lvl);
      //   });
      // });
			return spell_arr;
    },

		spells_Class_Param_All() {
			const class_spells = this.spells_Class_Main_Arr;
			const custo_spells = this.spells_Class_Custom_Arr;
			const sett_many_spells = this.spells_Class_Settings_Many_Arr;
			return [...class_spells, ...custo_spells, ...sett_many_spells];
		},

		spells_Class_Param() {
			return [...new Set(this.spells_Class_Param_All)];
		},

		spells_Class_Param_without_Race_Param() {
			const race_spells = this.spells_Race_Param;
			const class_spells = this.spells_Class_Param;
      const filter_class_spells = this.spells_Filter_Without(class_spells, race_spells);
			return filter_class_spells;
		},

		spells_RC_Param_All() {
			const race_spells_all = this.spells_Race_Param_All;
			const class_spells_all = this.spells_Class_Param_All;
			return [...race_spells_all, ...class_spells_all];
		},

		spells_RC_Param() {
			const race_spells = this.spells_Race_Param;
			const class_spells_includ = this.spells_Class_Param_without_Race_Param;
			return [...race_spells, ...class_spells_includ];
		},

    spells_RC_Param_Ability() {
			return this.spells_filter_Ability(this.spells_RC_Param);
		},

		spells_RC_Param_Manna() {
			return this.spells_filter_Not_Ability(this.spells_RC_Param);
		},

		//NOTE - PAGE
		spells_Page_All_Arr() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return this.spells_Race_Param_All;
			} else if (PagesStore.pages.class_page) {
				return this.spells_RC_Param_All;
			} else {
        return [];
      }
		},

		spells_Page_Arr() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return this.spells_Race_Param;
			} else if (PagesStore.pages.class_page) {
				return this.spells_RC_Param;
			} else {
        return [];
      }
		},
	},

	actions: {},
});
