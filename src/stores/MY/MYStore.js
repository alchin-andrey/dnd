// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
// import { usePagesStore } from "@/stores/pages/PagesStore";

export const useMYStore = defineStore({
	id: "MYStore",
	state: () => ({
		MY: MY,
	}),
	//SECTION - GETTERS
	getters: {
		Mastery(state) {
			return Math.ceil(state.MY.level / 4);
		},

		ethnos_Setting(state) {
			return (name) =>
				state.MY.ethnos.settings?.find((item) => item.type == name);
		},

		//NOTE - COMMON (stats, skills, languages, spells)
		COMMON_Custom_Arr_RE: (state) => (name) => {
      const {stats_Keys, stats_Activ_Arr_RE} = useStatsStore();
      const {skills_Keys, skills_Activ_Arr_RE} = useSkillsStore();
      const {languages_Keys, languages_Activ_Arr_RE} = useLanguagesStore();
      const {spells_Keys, spells_Activ_Arr_RE} = useSpellsStore();

			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];

			let ACTIV_ARR = [];
      if (name == 'stats') {ACTIV_ARR = stats_Activ_Arr_RE;}
      if (name == 'skills') {ACTIV_ARR = skills_Activ_Arr_RE;}
      if (name == 'languages') {ACTIV_ARR = languages_Activ_Arr_RE;}
      if (name == 'spells') {ACTIV_ARR = spells_Activ_Arr_RE;}
			
      let KEYS = [];
      if (name == 'stats') {KEYS = stats_Keys;}
      if (name == 'skills') {KEYS = skills_Keys;}
      if (name == 'languages') {KEYS = languages_Keys;}
      if (name == 'spells') {KEYS = spells_Keys;}

			let pass_selected_arr = selected_arr.filter(
				(el) => !ACTIV_ARR.includes(el)
			);
			const increment = state.option_Custom_RE_Quant(name);
			if (increment === 0) {
				return custom_arr;
			} else {
				if (pass_selected_arr.length === increment) {
					custom_arr = pass_selected_arr;
				} else if (pass_selected_arr.length < increment) {
					const activ_full_arr = ACTIV_ARR.concat(pass_selected_arr);
					let pass_arr = KEYS.filter((el) => !activ_full_arr.includes(el));
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
			const ethnos_settings = state.ethnos_Setting(name);
			return ethnos_settings ? ethnos_settings.select : 0;
		},
	},
	//!SECTION - GETTERS

	//SECTION - //? ACTIONS
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
			this.MY.ethnos_name = Object.values(
				this.MY.race.race_settings.ethnos
			)[0].name;
		},
    
    //NOTE - COMMON (stats, skills, languages, spells)
		getCustomSelect_COMMON_RE(item, name) {
      const {stats_Activ_Arr_RE} = useStatsStore();
      const {skills_Activ_Arr_RE} = useSkillsStore();
      const {languages_Activ_Arr_RE} = useLanguagesStore();
      const {spells_Activ_Arr_RE} = useSpellsStore();
			const selekt = this.COMMON_Custom_Arr_RE(item);

			let active = null;
      if (item === 'stats') {active = stats_Activ_Arr_RE.includes(name);}
      if (item === 'skills') {active = skills_Activ_Arr_RE.includes(name);}
      if (item === 'languages') {active = languages_Activ_Arr_RE.includes(name);}
      if (item === 'spells') {active = spells_Activ_Arr_RE.includes(name);}

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
//!SECTION - ACTIONS
