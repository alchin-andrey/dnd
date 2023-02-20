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
		spells_For_Arr_Obj: (state) => (arr_obj) => {
			let arr_spell = [];
			arr_obj.forEach((el) => arr_spell.push(el.spell));
			return arr_spell;
		},

		spells_Race_Main_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.race?.spells);
			return this.spells_For_Arr_Obj(spell_obj);
		},

		spells_Race_Ethnos_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.spells);
			return this.spells_For_Arr_Obj(spell_obj);
		},

		spells_Custom_Race_Lvl() {
			const MYStore = useMYStore();
			let spell_arr = MYStore.filter_Custom_Race_Lvl("spells");
			return this.spells_For_Arr_Obj(spell_arr);
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
			return this.spells_For_Arr_Obj(spell_obj);
		},

		spells_Class_Custom_Arr() {
			const MYStore = useMYStore();
			let spell_arr = MYStore.filter_Custom_Class_Lvl("spells");
			return this.spells_For_Arr_Obj(spell_arr);
		},

		spells_Class_Param_All() {
			const class_spells = this.spells_Class_Main_Arr;
			const custo_spells = this.spells_Class_Custom_Arr;
			return [...class_spells, ...custo_spells];
		},

		spells_Class_Param() {
			return [...new Set(this.spells_Class_Param_All)];
		},

		spells_Class_Param_without_Race_Param() {
			const race_spells = this.spells_Race_Param;
			const class_spells = this.spells_Class_Param;
			return class_spells.filter((el) => !race_spells.includes(el));
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
