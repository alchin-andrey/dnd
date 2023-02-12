// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useDicStore } from "@/stores/general/DicStore";



export const useStatsStore = defineStore({
	id: 'StatsStore',
	state: () => ({
    stats: [
      "strength",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "charisma"
    ],

    stats_base_numb: [15, 14, 13, 12, 10, 8],

    stats_base_save: {
      // barbarian: null,
      // paladin: null,
      // bard: null,
      // rogue: null,
      // fighter: null,
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

		stats_Race_Page_Numb: (store) => (name) => {
			const RE = store.stats_RE_Numb(name);
			const custom = store.stats_Custom_RE_Numb(name);
			return RE + custom;
		},

    stats_Base_Arr(store) {
      const MYStore = useMYStore();
      let stats_arr_base = MYStore.MY.class.stats_base;
      let stats_arr_save = store.stats_base_save[MYStore.MY.class.name];
      return stats_arr_save ? stats_arr_save : stats_arr_base;
    },

    stats_Class_Page_Numb: (store) => (name) => {
      const MYStore = useMYStore();
      const REC = store.stats_Race_Page_Numb(name);
      let index = store.stats_Base_Arr.indexOf(name);
      const base = store.stats_base_numb[index];
      let custom_bonus = 0;
      const custom_stats = MYStore.filter_Custom_Class_Lvl("stats");
      custom_stats.forEach(el => el.name == name ? custom_bonus += el.num : null);
      return REC + base + custom_bonus;
    },

    stats_Mod: (store) => (name) => {
      let base_numb = store.stats_Class_Page_Numb(name);
      return Math.floor((base_numb - 10)/2);
    },

    stats_Saving_Arr() {
      const MYStore = useMYStore();
      let arr_save = [...MYStore.MY.class.saving];
      const specials_lvl = MYStore.class_Specials_Filter_Lvl("saving");
      specials_lvl?.forEach(el => el.saving.forEach(x => arr_save.push(x)));
      
      const save_custom = MYStore.filter_Custom_Class_Lvl("saving");
      arr_save = [...arr_save, ...save_custom];
      const uniqu_arr_save = [...new Set(arr_save)];
      return uniqu_arr_save;
    },

    stats_Save: (store) => (name) => {
      const MYStore = useMYStore();
      let save = store.stats_Saving_Arr.includes(name);
      return save ? MYStore.Mastery : null;
    },

    stats_Save_Mod: (store) => (name) => {
      let mod = store.stats_Mod(name);
      let save = store.stats_Save(name);
      return mod + save;
    },

    // stats_Base_Settings_Full_T() {
    //   const { t } = useDicStore();
    //   let base_arr = this.stats_Base_Arr;
    //   let arr = [];
    //   for (let kay in base_arr) {
    //     let index = base_arr.indexOf(base_arr[kay]);
    //     let numb = this.stats_base_numb[index];
    //     let str = t(base_arr[kay]).slice(0, 3);
    //     let new_Str = str[0].toUpperCase() + str.slice(1);
    //     arr.push(`${numb} ${new_Str}`);
    //   }
    //   return arr.map((n) => n).join(", ");
    // },

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
      let text = arr.map((n) => n).join(", ")
      return `${text}, ...`;
    },
  },
  
  actions: {
    getCustomSelect_Stats_RE(name) {
      const MYStore = useMYStore();
			MYStore.getCustomSelect_COMMON_RE("stats", name);
		},

  }
});
