// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useDicStore } from "@/stores/general/DicStore";

import spells from "@/assets/catalog/base_data/list_spells.js";
import mods from "@/assets/catalog/base_data/list_spells_mods.js";

export const useSpellsStore = defineStore({
	id: "SpellsStore",
	state: () => ({
		spells: spells,
    mods: mods,
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

    spells_Aim_Numb: (stor) => (name) => {
      const MYStore = useMYStore();
      const StatsStore = useStatsStore();
			const mastery = MYStore.Mastery;
			const stats_mod = StatsStore.stats_Mod(name);
			return mastery + stats_mod;
		},

    spells_Saving_Numb: (stor) => (name) => {
      const MYStore = useMYStore();
      const StatsStore = useStatsStore();
			const KOF = 8;
			const mastery = MYStore.Mastery;
			const stats_mod = StatsStore.stats_Mod(name);
			return KOF + mastery + stats_mod;
		},

		spells_For_Arr_Obj: (stor) => (arr_obj) => {
			let arr_spell = [];
			arr_obj.forEach((el) => arr_spell.push(el.spell));
			return arr_spell;
		},

    spells_Filter_Without: (stor) => (arr_filter, arr_main) => {
      return arr_filter.filter((el) => !arr_main.some(item => {
        const item_spell = item.spell.find(i => i.name);
        const el_spell = el.spell.find(i => i.name);
        return item_spell.name == el_spell.name && item.mod?.name_extra == el.mod?.name_extra;
      }));
		},

    spells_Filter_UniqueArr: (stor) => (start_arr) => {
      const res = start_arr.reduce((acc, el) => {
        const acc_spell = acc.find(item => {
          const item_spell = item.spell.find(i => i.name);
          const el_spell = el.spell.find(i => i.name);
          return item_spell.name == el_spell.name && item.mod?.name_extra == el.mod?.name_extra;
        });
        if (!acc_spell) {
          acc.push(el);
        }
        return acc;
      }, []);
			return res;
		},

    spells_filter_Ability: (stor) => (arr) => {
			return arr.filter((el) => {
          const abil = el.spell.find((item) => item.name).type == "ability";
          const i = el.spell.findIndex((item) => item.name);
          return abil && i == 0;
        });
		},

    spells_filter_Ability_Passive: (stor) => (arr) => {
			return arr.filter(
				(el) => el.spell.find((item) => item.name).cast_time == "none"
			);
		},

    spells_filter_Ability_Not_Passive: (stor) => (arr) => {
			return arr.filter(
				(el) => el.spell.find((item) => item.name).cast_time !== "none"
			);
		},

    spells_filter_Not_Ability: (stor) => (arr) => {
			return arr.filter((el) => {
        const abil = el.spell.find((item) => item.name).type == "ability";
        const i = el.spell.findIndex((item) => item.name);
        return !abil || i !== 0;
      });
		},

		spells_Race_Main_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY_Race?.spells);
			return spell_obj;
		},

		spells_Race_Ethnos_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY_Ethnos?.spells);
			return spell_obj;
		},

		spells_Custom_Race_Lvl() {
			const MYStore = useMYStore();
			let spell_arr = MYStore.filter_Custom_Race_Lvl("spells");
			return spell_arr;
		},

		spells_Race_Param_All() {
      const MYStore = useMYStore();
			const race = this.spells_Race_Main_Arr;
			const ethnos = this.spells_Race_Ethnos_Arr;
			const custom_race = this.spells_Custom_Race_Lvl;
      const race_param = [...race, ...ethnos, ...custom_race];
			return MYStore.sort_Level(race_param);
		},

		spells_Race_Param() {
      return this.spells_Filter_UniqueArr(this.spells_Race_Param_All);
		},

		spells_Class_Main_Arr() {
			const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY_Class?.spells);
			return spell_obj;
		},

		spells_Class_Custom_Arr() {
			const MYStore = useMYStore();
			let spell_arr = MYStore.filter_Custom_Class_Lvl("spells");
			return spell_arr;
		},

    // spells_Class_Settings_Many_Arr_All() {
    //   const MYStore = useMYStore();
    //   const arr = MYStore.spells_Settings_Class_Arr;
    //   const spell_arr = MYStore.filter_Custom_Lvl(arr, "spells")
		// 	return spell_arr;
    // },

    spells_Class_Settings_Many_Arr_Main() {
      const MYStore = useMYStore();
      const arr = MYStore.spells_Setting_Class_Arr_Main;
      const spell_arr = MYStore.filter_Custom_Lvl(arr, "spells")
			return spell_arr;
    },
		
    spells_Class_Settings_Many_Arr_Book() {
      const MYStore = useMYStore();
      const arr = MYStore.spells_Setting_Class_Arr_Book;
      const spell_arr = MYStore.filter_Custom_Lvl(arr, "spells")
			return spell_arr;
    },

    spells_Class_Settings_Many_Arr_Book_No_Select() {
      const MYStore = useMYStore();
      const arr = MYStore.spells_Setting_Class_Arr_Book;
      const spell_arr = MYStore.filter_Spell_List_Lvl(arr, "spells")
			return spell_arr;
    },

		spells_Class_Settings_Many_Arr_All() {
			const spell_main = this.spells_Class_Settings_Many_Arr_Main;
			const spell_book = this.spells_Class_Settings_Many_Arr_Book;
			return [...spell_main, ...spell_book];
    },

		spells_Class_Param_All() {
      const MYStore = useMYStore();
			const class_spells = this.spells_Class_Main_Arr;
			const custom_spells = this.spells_Class_Custom_Arr;
			const sett_many_spells_all = this.spells_Class_Settings_Many_Arr_All;
			const class_param = [...class_spells, ...custom_spells, ...sett_many_spells_all];
			return MYStore.sort_Level(class_param);
		},

		spells_Class_Param_All__Main() {
      const MYStore = useMYStore();
			const class_spells = this.spells_Class_Main_Arr;
			const custom_spells = this.spells_Class_Custom_Arr;
			const sett_many_spells_main = this.spells_Class_Settings_Many_Arr_Main;
			const class_param = [...class_spells, ...custom_spells, ...sett_many_spells_main];
			return MYStore.sort_Level(class_param);
		},

		spells_Class_Param_All__Book() {
      const MYStore = useMYStore();
			return MYStore.sort_Level(this.spells_Class_Settings_Many_Arr_Book);
		},

		spells_Class_Param_All__Book_No_Select() {
      const MYStore = useMYStore();
			return MYStore.sort_Level(this.spells_Class_Settings_Many_Arr_Book_No_Select);
		},

		// spells_Class_Param_All__Full() {
    //   const MYStore = useMYStore();
		// 	const spells_all_main = this.spells_Class_Param_All__Main;
		// 	const spells_all_book = this.spells_Class_Param_All__Book;
		// 	const class_param = [...spells_all_main, ...spells_all_book];
		// 	return MYStore.sort_Level(class_param);
		// },

		spells_Class_Param() {
			return this.spells_Filter_UniqueArr(this.spells_Class_Param_All);
		},

		spells_Class_Param__Main() {
			return this.spells_Filter_UniqueArr(this.spells_Class_Param_All__Main);
		},

		spells_Class_Param__Book() {
			return this.spells_Filter_UniqueArr(this.spells_Class_Param_All__Book);
		},

		spells_Class_Param__Book_No_Select() {
			return this.spells_Filter_UniqueArr(this.spells_Class_Param_All__Book_No_Select);
		},

		spells_Class_Param_without_Race_Param() {
			const race_spells = this.spells_Race_Param;
			const class_spells = this.spells_Class_Param;
      const filter_class_spells = this.spells_Filter_Without(class_spells, race_spells);
			return filter_class_spells;
		},

		spells_Class_Param_without_Race_Param__Main() {
			const race_spells = this.spells_Race_Param;
			const class_spells = this.spells_Class_Param__Main;
      const filter_class_spells = this.spells_Filter_Without(class_spells, race_spells);
			return filter_class_spells;
		},

		spells_RC_Param_All() {
			const race_spells_all = this.spells_Race_Param_All;
			const class_spells_all = this.spells_Class_Param_All;
			return [...race_spells_all, ...class_spells_all];
		},

		spells_RC_Param() {
      const MYStore = useMYStore();
			const race_spells = this.spells_Race_Param;
			const class_spells_includ = this.spells_Class_Param_without_Race_Param;
			const RC_param = [...race_spells, ...class_spells_includ]
			return MYStore.sort_Level(RC_param);
		},

		spells_Class_Param_All__Book_No_Select_without_All_Select() {
			const all_select = this.spells_RC_Param;
      const book_no_select = this.spells_Class_Param__Book_No_Select;
      const filter_class_spells = this.spells_Filter_Without(book_no_select, all_select);
			return filter_class_spells;
		},

		spells_RC_Param__Main() {
      const MYStore = useMYStore();
			const race_spells = this.spells_Race_Param;
			const class_spells_includ = this.spells_Class_Param_without_Race_Param__Main;
			const RC_param = [...race_spells, ...class_spells_includ]
			return MYStore.sort_Level(RC_param);
		},

    spells_RC_Param_Ability_Full() {
			return this.spells_filter_Ability(this.spells_RC_Param);
		},

    spells_RC_Param_Ability_Passive() {
			return this.spells_filter_Ability_Passive(this.spells_RC_Param_Ability_Full);
		},

    spells_RC_Param_Ability() {
			return this.spells_filter_Ability_Not_Passive(this.spells_RC_Param_Ability_Full);
		},

		spells_RC_Param_Manna() {
      const RC_mana = this.spells_filter_Not_Ability(this.spells_RC_Param);
      RC_mana.sort((a, b) => a.spell.length - b.spell.length);
      RC_mana.sort((a, b) => a.spell.findIndex((el) => el.name) - b.spell.findIndex((el) => el.name));
			return RC_mana;
		},

		spells_RC_Param_Manna__Main() {
      const RC_mana = this.spells_filter_Not_Ability(this.spells_RC_Param__Main);
      RC_mana.sort((a, b) => a.spell.length - b.spell.length);
      RC_mana.sort((a, b) => a.spell.findIndex((el) => el.name) - b.spell.findIndex((el) => el.name));
			return RC_mana;
		},

		spells_RC_Param_Manna__Book() {
      const RC_mana = this.spells_filter_Not_Ability(this.spells_Class_Param__Book);
      RC_mana.sort((a, b) => a.spell.length - b.spell.length);
      RC_mana.sort((a, b) => a.spell.findIndex((el) => el.name) - b.spell.findIndex((el) => el.name));
			return RC_mana;
		},

		spells_RC_Param_Manna__Book_No_Select() {
      // const RC_mana = this.spells_filter_Not_Ability(this.spells_Class_Param__Book_No_Select);
      const RC_mana = this.spells_filter_Not_Ability(this.spells_Class_Param_All__Book_No_Select_without_All_Select);
      RC_mana.sort((a, b) => a.spell.length - b.spell.length);
      RC_mana.sort((a, b) => a.spell.findIndex((el) => el.name) - b.spell.findIndex((el) => el.name));
			return RC_mana;
		},

    spell_RC_Param_Sort_ApAM__Main() {
      const abil_pass = this.spells_RC_Param_Ability_Passive;
      const abil = this.spells_RC_Param_Ability;
      
      const abil_ALL = [...abil_pass, ...abil];
      const abil_clean = abil_ALL.filter((el) => el.spell.find((item) => !item.slot_type));
      const abil_slot_type = abil_ALL.filter((el) => el.spell.find((item) => item.slot_type));
      abil_slot_type.sort((a, b) => {
        const a_slot = a.spell.find(el => el.name).slot_type;
        const b_slot = b.spell.find(el => el.name).slot_type;
        return a_slot.localeCompare(b_slot);
      });

      const manna = this.spells_RC_Param_Manna__Main;

      const spell_mod = manna.filter((el) => el.mod);
      
      const spell_mod_slot = spell_mod.filter((el) => el.mod.slot_type !== "0");
      spell_mod_slot.sort((a, b) => a.mod.slot_type.localeCompare(b.mod.slot_type));
      const spell_mod_0 = spell_mod.filter((el) => el.mod.slot_type == "0");

      const spell_clean = manna.filter((el) => !el.mod);
      return [
        ...abil_clean,
        ...abil_slot_type,
        ...spell_mod_slot,
        ...spell_mod_0,
        ...spell_clean,
      ];
    },

    spell_RC_Param_Sort_ApAM__Book() {
      const manna = this.spells_RC_Param_Manna__Book;

      const spell_mod = manna.filter((el) => el.mod);
      
      const spell_mod_slot = spell_mod.filter((el) => el.mod.slot_type !== "0");
      spell_mod_slot.sort((a, b) => a.mod.slot_type.localeCompare(b.mod.slot_type));
      const spell_mod_0 = spell_mod.filter((el) => el.mod.slot_type == "0");

      const spell_clean = manna.filter((el) => !el.mod);
      return [
        ...spell_mod_slot,
        ...spell_mod_0,
        ...spell_clean,
      ];
    },

    spell_RC_Param_Sort_ApAM__Book_No_Select() {
      const manna = this.spells_RC_Param_Manna__Book_No_Select;

      const spell_mod = manna.filter((el) => el.mod);
      
      const spell_mod_slot = spell_mod.filter((el) => el.mod.slot_type !== "0");
      spell_mod_slot.sort((a, b) => a.mod.slot_type.localeCompare(b.mod.slot_type));
      const spell_mod_0 = spell_mod.filter((el) => el.mod.slot_type == "0");

      const spell_clean = manna.filter((el) => !el.mod);
      return [
        ...spell_mod_slot,
        ...spell_mod_0,
        ...spell_clean,
      ];
    },

    spell_RC_Param_Sort_ApAM__Book_All() {
      const book_select = this.spell_RC_Param_Sort_ApAM__Book;
      const hr = ['hr'];
      const book_no_select = this.spell_RC_Param_Sort_ApAM__Book_No_Select;

      
      return [
        ...book_select,
        ...hr,
        ...book_no_select,
      ];
    },

		

		// spell_RC_Param_Sort_ApAM() {
    //   const abil_pass = this.spells_RC_Param_Ability_Passive;
    //   const abil = this.spells_RC_Param_Ability;
      
    //   const abil_ALL = [...abil_pass, ...abil];
    //   const abil_clean = abil_ALL.filter((el) => el.spell.find((item) => !item.slot_type));
    //   const abil_slot_type = abil_ALL.filter((el) => el.spell.find((item) => item.slot_type));
    //   abil_slot_type.sort((a, b) => {
    //     const a_slot = a.spell.find(el => el.name).slot_type;
    //     const b_slot = b.spell.find(el => el.name).slot_type;
    //     return a_slot.localeCompare(b_slot);
    //   });

    //   const manna = this.spells_RC_Param_Manna;

    //   const spell_mod = manna.filter((el) => el.mod);
      
    //   const spell_mod_slot = spell_mod.filter((el) => el.mod.slot_type !== "0");
    //   spell_mod_slot.sort((a, b) => a.mod.slot_type.localeCompare(b.mod.slot_type));
    //   const spell_mod_0 = spell_mod.filter((el) => el.mod.slot_type == "0");

    //   const spell_clean = manna.filter((el) => !el.mod);
    //   return [
    //     ...abil_clean,
    //     ...abil_slot_type,
    //     ...spell_mod_slot,
    //     ...spell_mod_0,
    //     ...spell_clean,
    //   ];
    // },

		//NOTE - PAGE
		spells_Page_All_Arr() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return this.spells_Race_Param_All;
			} else if (PagesStore.pages.class_page) {
				return this.spells_RC_Param_All;
			} else {
        return this.spells_RC_Param_All;
      }
		},

		spells_Page_Arr() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return this.spells_Race_Param;
			} else if (PagesStore.pages.class_page) {
				return this.spells_RC_Param;
			} else {
        return this.spells_RC_Param;
      }
		},
	},

	actions: {},
});
