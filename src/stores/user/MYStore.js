// import { ref, computed } from "vue";
// import { watch, toRef } from 'vue';
import { acceptHMRUpdate, defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";
import { useBackstoriesStore } from "@/stores/modules/simple/BackstoriesStore";
import { usePagesStore } from "@/stores/user/PagesStore";

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

    Mastery_x2() {
			return this.Mastery * 2;
		},

		ethnos_Setting(state) {
			return (name) =>
				state.MY.ethnos.settings?.find((item) => item.type == name);
		},

		level_Filter_Arr: (state) => (item) => {
			const lvl = state.MY.level;
			let arr = item?.filter((el) => (el.level ? lvl >= el.level : el));
			return arr ? arr : [];
		},

    class_Specials_All() {
			const class_specials = this.level_Filter_Arr(this.MY.class.specials);
			const custom_specials = this.filter_Custom_Class_Lvl("specials");
			return [...class_specials, ...custom_specials];
		},

    class_Specials_Filter_Lvl: (store) => (name) => {
			return store.class_Specials_All?.filter((item) => item.type == name);
		},

		//NOTE - COMMON (stats, skills, languages, spells)
		COMMON_Custom_Arr_RE: (state) => (name) => {
			const { stats_Keys, stats_Activ_Arr_RE } = useStatsStore();
			const { skills_Keys, skills_Activ_Arr_RE } = useSkillsStore();
			const { languages_Keys, languages_Activ_Arr_RE } = useLanguagesStore();
			const { spells_Keys, spells_Activ_Arr_RE } = useSpellsStore();

			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];

			let ACTIV_ARR = [];
			if (name == "stats") {
				ACTIV_ARR = stats_Activ_Arr_RE;
			}
			if (name == "skills") {
				ACTIV_ARR = skills_Activ_Arr_RE;
			}
			if (name == "languages") {
				ACTIV_ARR = languages_Activ_Arr_RE;
			}
			if (name == "spells") {
				ACTIV_ARR = spells_Activ_Arr_RE;
			}

			let KEYS = [];
			if (name == "stats") {
				KEYS = stats_Keys;
			}
			if (name == "skills") {
				KEYS = skills_Keys;
			}
			if (name == "languages") {
				KEYS = languages_Keys;
			}
			if (name == "spells") {
				KEYS = spells_Keys;
			}

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

		select_Numb() {
			const lvl = this.MY.level;
			return (select) => (Array.isArray(select) ? select[lvl - 1] : select);
		},

    сustomm_Main_Settings_Ethnos_Arr() {
			return this.settingsClass("race", this.MY.ethnos?.settings, "custom");
		},

    сustomm_Backstory_Settings_Race_Arr() {
			return this.settingsClass("race", this.MY.backstory.settings, "custom");
		},

    сustomm_Settings_Race_Arr() {
      const main_custom = this.сustomm_Main_Settings_Ethnos_Arr;
      const backstories_custom = this.сustomm_Backstory_Settings_Race_Arr;
      return [...main_custom, ...backstories_custom];
    },

		сustomm_Main_Settings_Class_Arr() {
			return this.settingsClass("class", this.MY.class.settings, "custom");
		},

    сustomm_Feats_Settings_Class_Arr() {
      const FeatsStore = useFeatsStore();
			return this.settingsSelectList("class", FeatsStore.feats_Select_Arr, "custom");
		},

    сustomm_Settings_Class_Arr(stor) {
      const FeatsStore = useFeatsStore();
      const main_custom = stor.сustomm_Main_Settings_Class_Arr;
      const feats = FeatsStore.feats_Select_Arr;
      const feats_custom = stor.сustomm_Feats_Settings_Class_Arr;
      return () => [...main_custom, ...feats, ...feats_custom];
    },

    filter_Custom_Class_Lvl: (stor) => (name) => {
      return stor.filter_Custom_Lvl(stor.сustomm_Settings_Class_Arr(), name);
    },

    filter_Custom_Race_Lvl: (stor) => (name) => {
      return stor.filter_Custom_Lvl(stor.сustomm_Settings_Race_Arr, name);
    },

    filter_Custom_Lvl: (state) => (arr, name) => {
      let res_arr = [];
      arr.forEach(el => {
        el.select_list.forEach(sub_el => {
          const item_lvl = state.level_Filter_Arr(sub_el?.[name]);
          res_arr = res_arr.concat(item_lvl);
        });
      });
			return res_arr;
		},
	},
	//!SECTION - GETTERS

	//SECTION - //? ACTIONS
	actions: {
    сustommSettingsClassArr() {
      const FeatsStore = useFeatsStore();
      const main_custom = this.сustomm_Main_Settings_Class_Arr;
      const feats = FeatsStore.feats_Select_Arr;
      const feats_custom = this.сustomm_Feats_Settings_Class_Arr;
      return [...main_custom, ...feats, ...feats_custom];
    },

		settingsClass(page, settings_arr, type_str, per_id_link) {
			let new_arr = [];
			const link_type = per_id_link ? `${per_id_link}___${type_str}` : type_str;
			const sett_lvl = this.level_Filter_Arr(settings_arr);
			const sett_for_type = sett_lvl.filter((el) => el.type == type_str);
			const sett_select = this.MY[`_settings_${page}`][this.MY[page].name];

			let all_name = sett_for_type.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(all_name)];

			for (const item_name of uniqu_name) {
				const link_type_name = `${link_type}__${item_name}`;
				const sett_for_name = sett_for_type.filter((el) => el.name == item_name);

				sett_for_name?.forEach((item, i) => {
					const link_type_name_i = `${link_type_name}__${i}`;
					const select_numb = this.select_Numb(item.select);
					const select_arr = sett_select?.[link_type_name_i] ?? [];
					
					const list_lvl = this.level_Filter_Arr(item.list);

          const select_arr_lvl = this.level_Filter_Arr(select_arr);
          // const select_copy = [...select_arr_lvl];
          const select_not_null = select_arr_lvl.filter((el) => list_lvl.some(item => {
            if (item.name) {
              return item.name == el.name;
            } else {
              return item.name_set == el.name_set;
            }
          })); //NOTE - NEW

					const pass_arr_lvl = list_lvl.filter((el) => !select_not_null.includes(el));

					let select_list = [];
					for (let i = 0; i < select_numb; i += 1) {
						select_list.push(select_not_null[i] ?? pass_arr_lvl[i]);
					}

					new_arr.push({
						...item,
						id_link: link_type_name_i,
						select_list: select_list,
            list: list_lvl,
					});

					select_list.forEach((elem_list) => {
						if (elem_list.settings) {
							let redus = this.settingsClass(page, elem_list.settings, type_str, link_type_name_i);
							new_arr = new_arr.concat(redus);
						}
					});
				});
			}
			return new_arr;
		},

    settingsSelectList(page, arr, type_str) {
      let new_arr = [];
      arr.forEach(el => {
        el.select_list.forEach((elem_list) => {
          if (elem_list.settings) {
            let redus = this.settingsClass(page, elem_list.settings, type_str, el.id_link);
            new_arr = new_arr.concat(redus);
          }
        });
      });
      return new_arr;
    },

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
			const { stats_Activ_Arr_RE } = useStatsStore();
			const { skills_Activ_Arr_RE } = useSkillsStore();
			const { languages_Activ_Arr_RE } = useLanguagesStore();
			const { spells_Activ_Arr_RE } = useSpellsStore();
			const selekt = this.COMMON_Custom_Arr_RE(item);

			let active = null;
			if (item === "stats") {
				active = stats_Activ_Arr_RE.includes(name);
			}
			if (item === "skills") {
				active = skills_Activ_Arr_RE.includes(name);
			}
			if (item === "languages") {
				active = languages_Activ_Arr_RE.includes(name);
			}
			if (item === "spells") {
				active = spells_Activ_Arr_RE.includes(name);
			}

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
