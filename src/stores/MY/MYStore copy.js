// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
// import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { usePagesStore } from "@/stores/pages/PagesStore";

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

		//SECTION - COMMON
		//NOTE - COMMON (stats, skills, languages, spells)
		COMMON_Custom_Arr_RE: (state) => (name) => {
      const {stats_Keys, stats_Activ_Arr_RE} = useStatsStore();
      console.log('stats_Activ_Arr_RE:', stats_Activ_Arr_RE)

			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];
			let ACTIV_ARR = state[`${name}_Activ_Arr_RE`];
      if (name === 'stats') {ACTIV_ARR = stats_Activ_Arr_RE;}
			
      let KEYS = state[`${name}_Keys`];
      if (name === 'stats') {KEYS = stats_Keys;}

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
		//!NOTE - COMMON (stats, skills, languages)
		//!SECTION - COMMON

		//SECTION - STATS
		// stats_Keys(state) {
		// 	return Object.keys(state.MY.stats);
		// },

		// stats_Activ_Obj_RE(state) {
		// 	let i = state.MY.race.stats;
		// 	let j = state.MY.ethnos.stats;
		// 	return Object.assign({}, i, j);
		// },

		// stats_Activ_Arr_RE() {
		// 	return Object.keys(this.stats_Activ_Obj_RE);
		// },

		// stats_Pass_Arr_RE(state) {
		// 	return this.stats_Keys.filter(
		// 		(el) => !this.stats_Activ_Arr_RE.includes(el)
		// 	);
		// },

		// stats_Custom_Arr_RE() {
		// 	return this.COMMON_Custom_Arr_RE("stats");
		// },

    // stats_Base_Arr() {
    //   const PagesStore = usePagesStore();
    //   let stats_arr_base = this.MY.class.stats_base;
    //   let stats_arr_save = PagesStore.class_page.stats_base_save[this.MY.class.name];
    //   return stats_arr_save ? stats_arr_save : stats_arr_base;
    // },

		//ANCHOR - STATS (NUMB)
		// stats_RE_Numb: (state) => (name) => {
		// 	let option_value = state.stats_Activ_Obj_RE[name];
		// 	return option_value ? option_value : 0;
		// },

		// stats_Custom_RE_Numb: (state) => (name) => {
		// 	let settings_stats = state.ethnos_Setting("stats");
		// 	if (settings_stats) {
		// 		let option_true = state.COMMON_Custom_Arr_RE("stats").includes(name);
		// 		if (option_true) {
		// 			let increment = settings_stats.num;
		// 			return increment;
		// 		} else {
		// 			return 0;
		// 		}
		// 	} else {
		// 		return 0;
		// 	}
		// },

		// stats_Race_Page_Numb: (state) => (name) => {
		// 	const RE = state.stats_RE_Numb(name);
		// 	const custom = state.stats_Custom_RE_Numb(name);
		// 	return RE + custom;
		// },
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
				(el) => !this.skills_Activ_Arr_RE.includes(el)
			);
		},

		skills_All_RE() {
			return this.skills_Activ_Arr_RE.concat(this.skills_Custom_Arr_RE);
		},

		skills_Custom_Arr_RE() {
			return this.COMMON_Custom_Arr_RE("skills");
		},
		//!SECTION - SKILLS

		//SECTION - //LANGUEGES
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

    languages_Pass_Arr_RE() {
			return this.languages_Keys.filter(
				(el) => !this.languages_Activ_Arr_RE.includes(el)
			);
		},


		languages_Custom_Arr_RE() {
			return this.COMMON_Custom_Arr_RE("languages");
		},
		//!SECTION - LANGUEGES
		//SECTION  - SPELLS

		// spells_Keys(state) {
		//   const { spells } = useSpellsStore();
		//   let arr = [];
		// 	for (let key in spells) {
		// 		arr.push(spells[key].find(item => item.name).name);
		// 	}
		// 	return arr;
		// },

		spells_Activ_Obj_RE(state) {
			let arr = [];
			let i = [];
			let j = [];
			state.MY.race.spells ? (i = state.MY.race.spells) : null;
			state.MY.ethnos.spells ? (j = state.MY.ethnos.spells) : null;
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

		spells_Settings_Obj_RE() {
			const { spells } = useSpellsStore();
			let arr = [];
			let spells_settings = this.ethnos_Setting("spells");
			if (spells_settings) {
				let mana_min = spells_settings.mana_min;
				let mana_max = spells_settings.mana_max;
				let classes = spells_settings.classes;
				for (let kay in spells) {
					for (let j = mana_min; j == mana_max; j++) {
						let name = spells[kay][j]?.name;
						if (name) {
							for (let i in classes) {
								let check = spells[kay][j].classes.includes(classes[i]);
								if (check) {
									let unique = !arr.includes(spells[kay]);
									if (unique) {
										arr.push(spells[kay]);
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
			return this.COMMON_Custom_Arr_RE("spells");
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

		//!SECTION - SPELLS
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

		getCustomSelect_COMMON_RE(item, name) {
      const {stats_Activ_Arr_RE} = useStatsStore();
			const selekt = this.COMMON_Custom_Arr_RE(item);
			// let active = this[`${item}_Activ_Arr_RE`].includes(name);
			let active = null;
      if (item === 'stats') {active = stats_Activ_Arr_RE.includes(name);}



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

		// getCustomSelect_Stats_RE(name) {
		// 	this.getCustomSelect_COMMON_RE("stats", name);
		// },

		getCustomSelect_Skills_RE(name) {
			this.getCustomSelect_COMMON_RE("skills", name);
		},

		getCustomSelect_Languages_RE(name) {
			this.getCustomSelect_COMMON_RE("languages", name);
		},

		getCustomSelect_Spells_RE(name) {
			this.getCustomSelect_COMMON_RE("spells", name);
		},
	},
});
//!SECTION - ACTIONS
