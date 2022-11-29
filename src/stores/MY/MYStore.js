// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
// import { useStatsStore } from "@/stores/modules/StatsStore";
// import { useSkillsStore } from "@/stores/modules/SkillsStore";

export const useMYStore = defineStore({
	id: "MYStore",
	state: () => ({
		MY: MY,
	}),
	//SECTION - GETTERS
	getters: {
		//SECTION - COMMON
		//NOTE - COMMON (stats, skills, languages)
		COMMON_Custom_Arr_RE: state => name => {
			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];
			const ACTIV_ARR = state[`${name}_Activ_Arr_RE`];
			const KEYS = state[`${name}_Keys`];
			let pass_selected_arr = selected_arr.filter(
				el => !ACTIV_ARR.includes(el)
			);
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

		option_Custom_RE_Quant: state => name => {
			let i = 0;
			const race_custom = state.MY.race.settings[`custom_${name}`];
			const ethnos_custom = state.MY.ethnos[`custom_${name}`];

			if (race_custom) {
				i += race_custom[0];
			}
			if (ethnos_custom) {
				i += ethnos_custom[0];
			}
			return i;
		},
		//!NOTE - COMMON (stats, skills, languages)
		//!SECTION - COMMON

		//SECTION - STATS
		stats_Keys(state) {
			return Object.keys(state.MY.stats);
		},

		stats_Activ_Obj_RE(state) {
			let i = state.MY.race.stats;
			let j = state.MY.ethnos.stats;
			return Object.assign({}, i, j);
		},

		stats_Activ_Arr_RE() {
			return Object.keys(this.stats_Activ_Obj_RE);
		},

		stats_Pass_Arr_RE(state) {
			return this.stats_Keys.filter(
				el => !this.stats_Activ_Arr_RE.includes(el)
			);
		},

		stats_Custom_Arr_RE() {
			return this.COMMON_Custom_Arr_RE("stats");
		},

		//ANCHOR - STATS (NUMB)
		stats_RE_Numb: state => name => {
			let option_value = state.stats_Activ_Obj_RE[name];
			return option_value ? option_value : 0;
		},

		stats_Custom_RE_Numb: state => name => {
			let custom_option = state.MY.race.settings.custom_stats;
			if (custom_option) {
				let option_true = state.COMMON_Custom_Arr_RE("stats").includes(name);
				if (option_true) {
					let increment = custom_option[1];
					return increment;
				} else {
					return 0;
				}
			} else {
				return 0;
			}
		},

		stats_Race_Page_Numb: state => name => {
			const RE = state.stats_RE_Numb(name);
			const custom = state.stats_Custom_RE_Numb(name);
			return RE + custom;
		},
		//!ANCHOR - STATS (NUMB)

		//!SECTION - STATS

		//SECTION  - SKILLS
		skills_Keys(state) {
			return Object.keys(state.MY.skills);
		},

		skills_Activ_Obj_RE(state) {
			let i = state.MY.race.skills;
			let j = state.MY.ethnos.skills;
			return Object.assign({}, i, j);
		},

		skills_Activ_Arr_RE() {
			return Object.keys(this.skills_Activ_Obj_RE);
		},

		skills_Pass_Arr_RE() {
			return this.skills_Keys.filter(
				el => !this.skills_Activ_Arr_RE.includes(el)
			);
		},

		skills_All_RE() {
			return this.skills_Activ_Arr_RE.concat(this.skills_Custom_Arr_RE);
		},

		skills_Custom_Arr_RE() {
			return this.COMMON_Custom_Arr_RE("skills");
		},
		//!SECTION - SKILLS

		//SECTION - LANGUEGES
		languages_Keys(state) {
			const { languages } = useLanguagesStore();
			let arr = [];
			for (let key in languages) {
				arr.push(languages[key].name);
			}
			return arr;
		},

		languages_Activ_Obj_RE(state) {
			let i = [];
			let j = [];
			if (state.MY.race.proficiencies?.languages) {
				i = Object.values(state.MY.race.proficiencies?.languages);
			}
			if (state.MY.ethnos.proficiencies?.languages) {
				j = Object.values(state.MY.ethnos.proficiencies?.languages);
			}
			return i.concat(j);
		},

		languages_Activ_Arr_RE() {
			let arr_obj = this.languages_Activ_Obj_RE;
			let arr = [];
			for (let indx in arr_obj) {
				arr.push(arr_obj[indx].name);
			}
			return arr;
		},

		languages_Custom_Arr_RE() {
			return this.COMMON_Custom_Arr_RE("languages");
		},
		//!SECTION - LANGUEGES
	},
	//!SECTION - GETTERS

	//SECTION - ACTIONS
	actions: {
		getRaceObj(name) {
			this.MY.race = name;
		},

		getRaceName(name) {
			this.MY.race_name = name;
		},

		getEthnos() {
			this.MY.ethnos = Object.values(this.MY.race.settings.ethnos)[0];
		},

		getEthnosName() {
			this.MY.ethnos_name = Object.values(this.MY.race.settings.ethnos)[0].name;
		},

		getCustomSelect_COMMON_RE(item, name) {
			const selekt = this.COMMON_Custom_Arr_RE(item);
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

		getCustomSelect_Stats_RE(name) {
			this.getCustomSelect_COMMON_RE("stats", name);
		},

		getCustomSelect_Skills_RE(name) {
			this.getCustomSelect_COMMON_RE("skills", name);
		},

		getCustomSelect_Languages_RE(name) {
			this.getCustomSelect_COMMON_RE("languages", name);
		},
	},
});
//!SECTION - ACTIONS
