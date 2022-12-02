// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";

export const useMYStore_Part = defineStore({
	id: "MYStore_Part",
	state: () => ({
		MY: MY,
	}),
	getters: {
    COMMON_Custom_Arr_RE: (state) => (name) => {
      const LanguagesStore = useLanguagesStore();
      const StatsStore = useStatsStore();
      const SkillsStore = useSkillsStore();
			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];
      
      let ACTIV_ARR = [];
      if (name === 'languages') {ACTIV_ARR = [LanguagesStore][`${name}_Activ_Arr_RE`];}
      if (name === 'stats') {ACTIV_ARR = StatsStore[`${name}_Activ_Arr_RE`];}
      if (name === 'skills') {ACTIV_ARR = SkillsStore[`${name}_Activ_Arr_RE`];}

      let KEYS = [];
      if (name === 'languages') {KEYS = LanguagesStore[`${name}_Keys`];}
      if (name === 'stats') {KEYS = StatsStore[`${name}_Keys`];}
      if (name === 'skills') {KEYS = SkillsStore[`${name}_Keys`];}

			let pass_selected_arr = selected_arr.filter(el => !ACTIV_ARR.includes(el));
			const increment = state.option_Custom_RE_Quant(name);
			if (increment === 0) {
				return custom_arr;
			} else {
				if (pass_selected_arr.length === increment) {
					custom_arr = pass_selected_arr;
				} else if (pass_selected_arr.length < increment) {
					const activ_full_arr = ACTIV_ARR.concat(pass_selected_arr);
					let pass_arr = KEYS.filter(el => !activ_full_arr.includes(el));
					const i = increment - pass_selected_arr.length;
					custom_arr = pass_selected_arr.concat(pass_arr.slice(0, i));
				} else if (pass_selected_arr.length > increment) {
          const i = pass_selected_arr.length - increment;
					pass_selected_arr.splice(0, i);
          custom_arr = pass_selected_arr;
				}
				return custom_arr;
			}
		},

    option_Custom_RE_Quant: (state) => (name) => {
			let i = 0;
			const race_custom = state.MY.race.race_settings[`custom_${name}`];
			const ethnos_custom = state.MY.ethnos[`custom_${name}`];
			if (race_custom) {
				i += race_custom[0];
			}
			if (ethnos_custom) {
				i += ethnos_custom[0];
			}
			return i;
		},

	},
	actions: {
		getRaceObj(name) {
			this.MY.race = name;
		},

		getRaceName(name) {
			this.MY.race_name = name;
		},

		getEthnos() {
			this.MY.ethnos = Object.values(this.MY.race.race_settings.ethnos)[0];
		},

		getEthnosName() {
			this.MY.ethnos_name = Object.values(this.MY.race.race_settings.ethnos)[0].name;
		},

		getCustomSelect_RE(item, name) {
			const selekt = this.option_Custom_Arr_RE(item);
			const active = this[`${item}_Activ_Arr_RE`].includes(name);
			const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				this.MY.custom_selected_race_page[item] = arr;
			}
		},

	},
});
