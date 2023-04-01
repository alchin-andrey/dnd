// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useDicStore } from "@/stores/general/DicStore";

export const useStatsStore = defineStore({
	id: "StatsStore",
	state: () => ({
		stats: [
			"strength",
			"dexterity",
			"constitution",
			"intelligence",
			"wisdom",
			"charisma",
		],

		stats_base_numb: [15, 14, 13, 12, 10, 8],

    stats_link: {},

		stats_base_save: {
			// barbarian: null,
			// paladin: null,
			// bard: null,
			// rogue: null,
			// fighter: null,
		},

		stats_base_hower: {
			// barbarian: null,
			// paladin: null,
			// bard: null,
			// rogue: null,
			// fighter: null,
		},
	}),

	getters: {
		stats_Keys() {
			return this.stats;
		},

		stats_Full_Name: (stor) => (str) => {
			if(str == 'st') return 'strength';
			if(str == 'de') return 'dexterity';
			if(str == 'co') return 'constitution';
			if(str == 'in') return 'intelligence';
			if(str == 'wi') return 'wisdom';
			if(str == 'ch') return 'charisma';
		},

		stats_Numb_Bonus: (stor) => (arr_all, name) => {
			const filter_name = arr_all.filter((el) => el.name == name);
			return filter_name.reduce((acc, el) => acc + el.num, 0);
		},

		stats_Race_Page() {
			const MYStore = useMYStore();
			const race = MYStore.level_Filter_Arr(MYStore.MY_Race?.stats);
			const ethnos = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.stats);
			const backstory = MYStore.level_Filter_Arr(MYStore.MY_Backstory?.stats);
			const race_custom = MYStore.filter_Custom_Race_Lvl("stats");
			return [...race, ...ethnos, ...backstory, ...race_custom];
		},

		stats_Race_Page_Numb: (stor) => (name) => {
			return stor.stats_Numb_Bonus(stor.stats_Race_Page, name);
		},

		stats_Base_Arr(stor) {
			const MYStore = useMYStore();
			let stats_arr_base = MYStore.MY_Class.stats_base;
			let stats_arr_save = stor.stats_base_save[MYStore.MY.class_name];
			return stats_arr_save ? stats_arr_save : stats_arr_base;
		},

		stats_Base_Hower_Arr(stor) {
      const MYStore = useMYStore();
			let stats_base_arr = this.stats_Base_Arr;
			let stats_hower_arr = stor.stats_base_hower[MYStore.MY.class_name];
			return stats_hower_arr ? stats_hower_arr : stats_base_arr;
		},

		stats_Base_Max: (stor) => (name) => {
			const MYStore = useMYStore();
			let max = 20;
			const specials = MYStore.class_Specials_Filter_Lvl("stat_max");
			specials.forEach((el) => {
				if (el.name == name) {
					max = Math.max(max, el.num);
				}
			});
			return max;
		},

		stats_Class_Page() {
			const MYStore = useMYStore();
			const class_main = MYStore.level_Filter_Arr(MYStore.MY_Class?.stats);
			const class_custom = MYStore.filter_Custom_Class_Lvl("stats");
			return [...class_main, ...class_custom];
		},

		stats_RC_Page() {
			const race_stats = this.stats_Race_Page;
			const class_stats = this.stats_Class_Page;
			return [...race_stats, ...class_stats];
		},

		stats_Class_Page_Numb_Full: (stor) => (name) => {
			const index = stor.stats_Base_Arr.indexOf(name);
			const BASE = stor.stats_base_numb[index];
			const RC_bonus_numb = stor.stats_Numb_Bonus(stor.stats_RC_Page, name);
			return BASE + RC_bonus_numb;
		},

		stats_Class_Page_Numb: (stor) => (name) => {
			const res = stor.stats_Class_Page_Numb_Full(name);
			const max = stor.stats_Base_Max(name);
			return res < max ? res : max;
		},

		stats_Class_Page_Numb_Overflow: (stor) => (name) => {
			const base_numb_full = stor.stats_Class_Page_Numb_Full(name);
			const base_numb = stor.stats_Class_Page_Numb(name);
			return base_numb_full - base_numb;
		},

		stats_Saving_Arr_AllName() {
			const MYStore = useMYStore();
			let arr_save = [...MYStore.MY_Class.saving];
			const specials_lvl = MYStore.class_Specials_Filter_Lvl("saving");
			specials_lvl?.forEach((el) => el.saving.forEach((x) => arr_save.push(x)));

			const save_custom = MYStore.filter_Custom_Class_Lvl("saving");
			const arr_save_all = [...arr_save, ...save_custom];
			return arr_save_all;
		},

		stats_Saving_Arr() {
			return [...new Set(this.stats_Saving_Arr_AllName)];
		},

		stats_Base_Settings_Full_T() {
      const { t } = useDicStore();
      let base_arr = this.stats_Base_Arr;
      let arr = [];
      for (let kay in base_arr) {
        let index = base_arr.indexOf(base_arr[kay]);
        let numb = this.stats_base_numb[index];
        let str = t(base_arr[kay]).slice(0, 3);
        let new_Str = str[0].toUpperCase() + str.slice(1);
        arr.push(`${numb} ${new_Str}`);
      }
      return arr.map((n) => n).join(", ");
		},

		stats_Base_Settings_Two_T() {
			const { t } = useDicStore();
			let base_arr = this.stats_Base_Arr;
			let arr = [];
			for (let i = 0; i < 2; i++) {
				let index = base_arr.indexOf(base_arr[i]);
				let numb = this.stats_base_numb[index];
				let str = t(base_arr[i]).slice(0, 3);
				let new_Str = str[0].toUpperCase() + str.slice(1);
				arr.push(`${numb} ${new_Str}`);
			}
			let text = arr.map((n) => n).join(", ");
			return `${text}, ...`;
		},

    // NOTE - Calculations
    stats_Base_Obj() {
      const str = this.stats_Numb("strength");
      const dex = this.stats_Numb("dexterity");
      const con = this.stats_Numb("constitution");
      const int = this.stats_Numb("intelligence");
      const wis = this.stats_Numb("wisdom");
      const chr = this.stats_Numb("charisma");
      return {st: str, de: dex, co: con, in: int, wi: wis, ch: chr,}
    },

    stats_Numb: (stor) => (name) => {
			return stor.stats_link[name] ?? stor.stats_Numb_Page(name);
		},

    stats_Numb_Full: (stor) => (name) => {
			return stor.stats_Numb_Full_Page(name);
		},

    stats_Mod: (stor) => (name) => {
			const base_numb = stor.stats_link[name] ?? stor.stats_Numb_Page(name);
			return Math.floor((base_numb - 10) / 2);
		},

    stats_Save: (stor) => (name) => {
			const MYStore = useMYStore();
			// let save = stor.stats_Saving_Arr.includes(name);
			let save = stor.stats_Save_Page_Arr.includes(name);
			return save ? MYStore.Mastery : null;
		},

		stats_Save_Mod: (stor) => (name) => {
			let mod = stor.stats_Mod(name);
			let save = stor.stats_Save(name);
			return mod + save;
		},

		//NOTE - PAGE
		stats_Save_All_Page_Arr() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return [];
			} else if (PagesStore.pages.class_page) {
				return this.stats_Saving_Arr_AllName;
			} else {
				return this.stats_Saving_Arr_AllName;
			}
		},

		stats_Save_Page_Arr() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return [];
			} else if (PagesStore.pages.class_page) {
				return this.stats_Saving_Arr;
			} else {
				return this.stats_Saving_Arr;
			}
		},

		stats_Numb_Full_Page: (stor) => (name) => {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return 10;
			} else if (PagesStore.pages.class_page) {
				return stor.stats_Class_Page_Numb_Full(name);
			} else {
				return stor.stats_Class_Page_Numb_Full(name);
			}
		},

		stats_Numb_Page: (stor) => (name) => {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return 10;
			} else if (PagesStore.pages.class_page) {
				return stor.stats_Class_Page_Numb(name);
			} else {
				return stor.stats_Class_Page_Numb(name);
			}
		},
	},

	actions: {},
});
