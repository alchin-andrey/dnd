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
			return 1 + Math.ceil(state.MY.level / 4);
		},

    MY_Subclass() {
      const class_subclasses = this.subclass_Find_Lvl;
      const subclass_save = this.MY.subclass_save[this.MY.class.name];
      if (class_subclasses) {
        return subclass_save ? subclass_save : class_subclasses.list[0];
      }
      return null;
		},

    level_Filter() {
      const lvl = this.MY.level;
      // return (item) => item?.filter((el) => lvl >= el.level);
      return (item) => item?.filter((el) => el.level ? lvl >= el.level : el);
      
    },

    // level_Filter: (state) => (item) => {
    //   console.log('level_Filter:', item);
    //   const lvl = state.MY.level;
    //   return item?.filter((el) => lvl >= el.level);
    // },

		ethnos_Setting(state) {
			return (name) =>
				state.MY.ethnos.settings?.find((item) => item.type == name);
		},

    subclass_Find() {
      const lvl = this.MY.level;
			return this.MY.class.settings?.find((item) => item.name == "subclass");
		},

    subclass_Find_Lvl() {
      const lvl = this.MY.level;
			return this.MY.class.settings?.find((item) => item.name == "subclass" && lvl >= item.level);
		},

		// class_Setting_Find_Lvl(state) {
		// 	return (name) =>
		// 		state.MY.class.settings?.find((item) => item.name == name && lvl >= item.level);
		// },

		class_Setting_Filter_Lvl(state) {
			return (name) =>
				state.MY.class.settings?.filter((item) => item.type == name && lvl >= item.level);
		},

    class_Specials(state) {
			return (name) =>
				state.MY.class.specials?.filter((item) => item.type == name);
		},

    class_Specials_Filter_Lvl(state) {
      const lvl = state.MY.level;
			return (name) =>
				state.MY.class.specials?.filter((item) => item.type == name && lvl >= item.level);
		},

    class_Specials_Find(state) {
			return (name) =>
				state.MY.class.specials?.find((item) => item.type == name);
		},


    proficiencies_Arr: (state) => (obj, kay) => {
			let arr = [];
			obj?.[kay] ? (arr = obj[kay].map((x) => x.name)) : null;
			return arr;
		},

    proficiencies_Any: (state) => (kay) => {
      const specials = state.class_Specials_Filter_Lvl("proficiencies");
      return specials?.some((el) =>  el?.[kay] == "any");
    },

		proficiencies_Arr_REC: (state) => (kay) => {
      const {languages_Custom_Arr_RE} = useLanguagesStore();

			let race_prof = state.proficiencies_Arr(state.MY.race.proficiencies, kay);
			let ethnos_prof = state.proficiencies_Arr(
				state.MY.ethnos.proficiencies,
				kay
			);
			let custom_prof = [];
			kay === "languages" ? custom_prof = languages_Custom_Arr_RE : null;
      const any =  state.proficiencies_Any(kay);
      const rec_prof = race_prof.concat(ethnos_prof).concat(custom_prof);
			return any ? [] : rec_prof;
		},

		proficiencies_Arr_Class: (state) => (kay) => {
			const class_prof = state.proficiencies_Arr(
				state.MY.class.proficiencies,
				kay
			);

      const subclass_prof = state.proficiencies_Arr(
				state.MY_Subclass?.proficiencies,
				kay
			);

      const any =  state.proficiencies_Any(kay);
			return any ? ['any'] : class_prof.concat(subclass_prof);
		},

    proficiencies_Arr_All: (state) => (kay) => {
      let rec_prof = state.proficiencies_Arr_REC(kay);
			let class_prof = state.proficiencies_Arr_Class(kay);
			return rec_prof.concat(class_prof);
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
