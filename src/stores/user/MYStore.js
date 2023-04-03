// import { ref, computed } from "vue";
// import { watch, toRef } from 'vue';
import { acceptHMRUpdate, defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useMainStore } from "@/stores/general/MainStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";

import { useFeatsStore } from "@/stores/modules/FeatsStore";
// import { usePagesStore } from "@/stores/user/PagesStore";

export const useMYStore = defineStore({
	id: "MYStore",
	state: () => ({
		MY: MY,
	}),
  persist: true,

	//SECTION - GETTERS
	getters: {
    str_Upper: (stor) => (t_str) => {
			return `${t_str[0].toUpperCase()}${t_str.slice(1)}`;
		},

    MY_Backstory() {
      const MainStore = useMainStore();
      return MainStore.backstories_Arr.find(el => el.name == this.MY.backstory_name);
    },

    MY_Race() {
      const MainStore = useMainStore();
      return MainStore.race_Arr.find(el => el.name == this.MY.race_name);
    },

    ethnos_Arr() {
			return Object.values(this.MY_Race.race_settings.ethnos);
		},

    MY_Ethnos() {
      const name_save = this.MY.ethnos_name_save?.[this.MY.race_name];
      if (name_save) {
        return this.ethnos_Arr.find(el => el.name == name_save);
      } else {
        return this.ethnos_Arr[0];
      }
    },

    MY_Class() {
      const MainStore = useMainStore();
      return MainStore.class_Arr.find(el => el.name == this.MY.class_name);
    },
    
    MY_Subclass() {
      const сustomm = this.сustomm_Settings_Class_Arr;
      const subclass = сustomm.find(el => el.name == "subclass");
      return subclass?.select_list[0];
    },

		Mastery(state) {
			return 1 + Math.ceil(state.MY.level / 4);
		},

    Mastery_x2() {
			return this.Mastery * 2;
		},

    sort_Level: (state) => (start_arr) => {
      return start_arr.sort((a, b) => {
        const a_lvl = a.level ?? 1;
        const b_lvl = b.level ?? 1;
        return a_lvl - b_lvl;
      });
    },

    shown_Level_Dot: (store) => (item) => {
			let lvl = store.MY.level;
			return item.level == lvl && lvl !== 1;
		},

		level_Filter_Arr: (state) => (item) => {
			const lvl = state.MY.level;
			let arr = item?.filter((el) => (el.level ? lvl >= el.level : el));
			return arr ? arr : [];
		},

    class_Specials_All() {
			const class_specials = this.level_Filter_Arr(this.MY_Class.specials);
			const custom_specials = this.filter_Custom_Class_Lvl("specials");
			return [...class_specials, ...custom_specials];
		},

    class_Specials_Filter_Lvl: (store) => (name) => {
			return store.class_Specials_All?.filter((item) => item.type == name);
		},

		select_Numb() {
			const lvl = this.MY.level;
			return (select) => (Array.isArray(select) ? select[lvl - 1] : select);
		},

    сustomm_Main_Settings_Ethnos_Arr() {
			return this.settingsMainSelect("race", this.MY_Ethnos?.settings, "custom", "ethnos");
		},

    сustomm_Backstory_Settings_Race_Arr() {
			return this.settingsMainSelect("race", this.MY_Backstory.settings, "custom", "backstory");
		},

    сustomm_Settings_Race_Arr() {
      const main_custom = this.сustomm_Main_Settings_Ethnos_Arr;
      const backstories_custom = this.сustomm_Backstory_Settings_Race_Arr;
      return [...main_custom, ...backstories_custom];
    },

		сustomm_Main_Settings_Class_Arr() {
			return this.settingsMainSelect("class", this.MY_Class.settings, "custom");
		},

    сustomm_Feats_Settings_Class_Arr() {
      const FeatsStore = useFeatsStore();
			return this.settingsSelectList("class", FeatsStore.feats_Select_Arr, "custom");
		},

    сustomm_Settings_Class_Arr_Clean(stor) {
      const FeatsStore = useFeatsStore();
      const main_custom = stor.сustomm_Main_Settings_Class_Arr;
      const feats = FeatsStore.feats_Select_Arr;
      const feats_custom = stor.сustomm_Feats_Settings_Class_Arr;
      // console.log('feats_Condition:', FeatsStore.feats_Condition)
      // console.log('feats_Condition_Filter:', FeatsStore.feats_Condition_Filter)
      return [
        ...main_custom, 
        ...feats, 
        ...feats_custom
      ];
    },

    сustomm_Settings_Class_Arr() {
      const start_arr = this.сustomm_Settings_Class_Arr_Clean;
      const sort_arr_id = start_arr.sort((a, b) => a.id_link.length - b.id_link.length);
      const sort_arr_lvl = sort_arr_id.sort((a, b) => a.level - b.level);

      const filter_battle_style = this.filterSettings_NoUsed(sort_arr_lvl);
      const filter_only_mastery = this.filterSettings_OnlyMastery(filter_battle_style);

      return filter_only_mastery;
    },

    subclass_Name() {
      let res = null;
      this.сustomm_Settings_Class_Arr.forEach(el => {
        if(el.name == "subclass") {
          res = el.select_list.find(item => item.name).name;
        }
      });
      return res;
    },

    settings_Class_Arr() {
      const custom_class = this.сustomm_Settings_Class_Arr;
      const spells_sett = this.spells_Settings_Class_Arr;
      return [...custom_class, ...spells_sett];
    },

    filter_Custom_Race_Lvl: (stor) => (name) => {
      return stor.filter_Custom_Lvl(stor.сustomm_Settings_Race_Arr, name);
    },

    filter_Custom_Class_Lvl: (stor) => (name) => {
      return stor.filter_Custom_Lvl(stor.сustomm_Settings_Class_Arr, name);
    },

    filter_Custom_Lvl: (stor) => (arr, name) => {
      let res_arr = [];
        arr?.forEach(el => {
          el?.select_list.forEach(sub_el => {
            const item_lvl = stor.level_Filter_Arr(sub_el?.[name]);
            res_arr = res_arr.concat(item_lvl);
          });
        });
			return res_arr;
		},

    spells_Settings_Class_Arr() {
      const sett_class = this.level_Filter_Arr(this.MY_Class.settings);
      const sett_custom = this.filter_Custom_Lvl(this.сustomm_Main_Settings_Class_Arr, 'settings');
      const sett_all = [
        ...sett_class, 
        ...sett_custom
      ];
      const sett_spell = sett_all.filter((el) => el.type == 'spells');

      let all_name = sett_spell.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(all_name)];

      const sett_select = this.MY._settings_class[this.MY.class_name];
      let new_arr = [];
      for (const item_name of uniqu_name) {
				const link_name = item_name;
				const sett_for_name = sett_spell.filter((el) => el.name == item_name);
        sett_for_name?.forEach((item, i) => {
          const link_name_i = `many_spells___${link_name}__${i}`;
					const select_numb = this.select_spells_Numb(item); //NOTE - NEW_FOR_SPELL
					const select_arr = sett_select?.[link_name_i] ?? [];
          
          const list_lvl = this.settings_Spells_List(item); //NOTE - NEW_FOR_SPELL

					let select_list = [];
					for (let i = 0; i < select_numb; i += 1) {
						select_arr?.[i] ? select_list.push(select_arr[i]) : null;
					}

          new_arr.push({
						...item,
						id_link: link_name_i,
						select_list: select_list,
            list: list_lvl,
            select_numb: select_numb,
					});

        });
      }

      return new_arr;
    },

    Sel_Plus_CHA_Min1() {
      const StatsStore = useStatsStore();
			const mod = StatsStore.stats_Mod("charisma");
			return mod >= 1 ? mod : 1;
		},

    Sel_Plus_WIS_Min1() {
      const StatsStore = useStatsStore();
			const mod = StatsStore.stats_Mod("wisdom");
			return mod >= 1 ? mod : 1;
		},

    settings_Spells_List: (stor) => (item) => {
      const SpellsStore = useSpellsStore();
      const lvl = stor.MY.level;
      const mana_min = item.mana_min;
      const mana_max = Array.isArray(item.mana_max) ? item.mana_max[lvl - 1] : item.mana_max;
      
      const classes_filter_arr = item.filter.classes;
      const type_filter_arr = item.filter?.type;
      const cast_time_filter = item.filter?.cast_time;

      const extra_items = item.extra_items;
      const extra_items_lvl = stor.level_Filter_Arr(extra_items);

      const spell_arr = SpellsStore.spells_Arr;

      let arr = [];
      spell_arr.forEach(el => {
        const find_el = el.find((item, i) => mana_min <= i && i <= mana_max && item?.name && item?.type != "ability");
        if(find_el) {
          const class_verif_arr = find_el.classes.filter(item => classes_filter_arr.includes(item));
          
          const class_verif = class_verif_arr.length !== 0;
          const type_verif = type_filter_arr ? type_filter_arr.includes(find_el.type) : true;
          const cast_time_verif = cast_time_filter ? cast_time_filter == find_el.cast_time : true;
          if(class_verif && type_verif && cast_time_verif) {

            arr.push({
              name_set: find_el.name,
              spells: [{spell: el}],
            });
          }
        }
        });
      return [...arr, ...extra_items_lvl];
    },

	},
	//!SECTION - GETTERS

	//SECTION - //? ACTIONS
	actions: {
    select_spells_Numb(item) {
			const lvl = this.MY.level;
      const select_numb = Array.isArray(item.select) ? item.select[lvl - 1] : item.select;
      const foo_numb = item?.foo ? this[item.foo] : 0;
			return select_numb + foo_numb;
		},

		settingsMainSelect(page, settings_arr, type_str, per_id_link) {
      let new_arr = [];
			const sett_lvl = this.level_Filter_Arr(settings_arr);
			const sett_for_type = sett_lvl.filter((el) => el.type == type_str);
			let sett_select = this.MY[`_settings_${page}`][this.MY[`${page}_name`]];
      if (page == "alignment") {
        sett_select = this.MY._settings_alignment;
      }

			let all_name = sett_for_type.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(all_name)];

			for (const item_name of uniqu_name) {
				const link_name = per_id_link ? `${per_id_link}___${item_name}` : item_name;
				const sett_for_name = sett_for_type.filter((el) => el.name == item_name);

				sett_for_name?.forEach((item, i) => {
					const link_name_i = `${link_name}__${i}`;
					const select_numb = this.select_Numb(item.select);
					const select_arr = sett_select?.[link_name_i] ?? [];
					
					const list_lvl = this.level_Filter_Arr(item.list);

          const select_arr_lvl = this.level_Filter_Arr(select_arr);
          const select_not_null = select_arr_lvl.filter((el) => list_lvl.some(item => {
            if (item.name) {
              return item.name == el.name;
            } else {
              return item.name_set == el.name_set;
            }
          })); //NOTE - NEW

					const pass_arr_lvl = list_lvl.filter((el) => !select_not_null.some(item => {
            if (item.name) {
              return item.name == el.name;
            } else {
              return item.name_set == el.name_set;
            }
          })); //NOTE - NEW


          let count_list = 0;
          let count_save = 0;

					let select_list = [];
					for (let i = 0; i < select_numb; i++) {

            if(select_not_null[count_save]){
              select_list.push(select_not_null[count_save]);
              count_save ++;
            } else {
              select_list.push(pass_arr_lvl[count_list]);
              count_list++;
            }
					}

					new_arr.push({
						...item,
						id_link: link_name_i,
						select_list: select_list,
            list: list_lvl,
            select_numb: select_numb,
					});

					select_list.forEach((elem_list) => {
						if (elem_list?.settings) {
							let redus = this.settingsMainSelect(page, elem_list.settings, type_str, link_name_i);
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
            let redus = this.settingsMainSelect(page, elem_list.settings, type_str, el.id_link);
            new_arr = new_arr.concat(redus);
          }
        });
      });
      return new_arr;
    },

    filterSettings_NoUsed(arr) {
      const battle_style_arr = arr.filter(el => el.name == "battle_style");
      if(battle_style_arr.length !== 0) {
        let new_battle_style_arr = [];
        let select_item_all = [];
        battle_style_arr.forEach((el) => {
          let new_select_list = [];
            el.select_list.forEach(item => {
              const select_includ = select_item_all.some(sub_el => sub_el.name == item.name);
              const sett_select = this.MY._settings_class[this.MY.class_name];
              if(!select_includ && sett_select?.[el.id_link]) {
                new_select_list.push(item);
                select_item_all.push(item);
              } else {
                const list_filter = el.list.filter(item => !select_item_all.some(sub_el => sub_el.name == item.name));
                new_select_list.push(list_filter[0]);
                select_item_all.push(list_filter[0]);
              }
            });
          new_battle_style_arr.push({...el, select_list: new_select_list});
        });

        let new_arr = arr; //slice(0)
        new_battle_style_arr.forEach((el) => {
          const select_list_includ = select_item_all.filter(item => !el.select_list.some(sub_el => sub_el.name == item.name));
          const list_filter = el.list.filter(item => !select_list_includ.some(sub_el => sub_el.name == item.name));
          new_arr = new_arr.map((el_map) => (
            el_map.id_link === el.id_link
              ? {...el, list: list_filter}
              : el_map
          ));
        });
        return new_arr;
      }
    return arr;
    },

    filterSettings_OnlyMastery(arr) {
      const SkillsStore = useSkillsStore();
      const arr_for_filter = arr.filter(el => el.name == "skills" && el.filter == "only_mastery");

      if(arr_for_filter.length !== 0) {
        
        const arr_clean_sett = arr.filter(el => el.filter !== "only_mastery");

        const skills_mastery_sett = this.filter_Custom_Lvl(arr_clean_sett, "skills");
        const skills_mastery_param = SkillsStore.skills_Name_Class_Mastery_No_Settings;
        const skills_mastery = [...skills_mastery_sett, ...skills_mastery_param];

        const sett_select = this.MY._settings_class[this.MY.class_name];
        let new_arr = arr.slice(0);
        arr_for_filter.forEach(el => {
          const list_clean = el.list.filter(item => !item.skills);
          const list_filter = el.list.filter(item => skills_mastery.some(sub_el => sub_el.name == item.name_set));

          const list_new = [...list_clean, ...list_filter];
          let save_new = [];
          const save_skills = sett_select?.[el.id_link];
          if(save_skills) {
            const save_clean = save_skills.filter(item => !item.skills);
            const save_filter = save_skills.filter(item => skills_mastery.some(sub_el => sub_el.name == item.name_set));
            save_new = [...save_clean, ...save_filter];
          }
          const list_without_save = list_new.filter(item => !save_new.some(sub_el => sub_el.name_set == item.name_set));

          let count_list = 0;
          let count_save = 0;
          
          let new_select_list = [];
          el.select_list.forEach(item => {
            if(save_skills && save_new[count_save]) {
                new_select_list.push(save_new[count_save]);
                count_save ++;
              } else {
                new_select_list.push(list_without_save?.[count_list]);
                count_list ++;
              }
          });
          const select_list_clean = new_select_list.filter(el => el !== undefined);
          new_arr = new_arr.map((el_map) => (
            el_map.id_link === el.id_link
              ? {...el, list: list_new, select_list: select_list_clean}
              : el_map
          ));
        }); 
        return new_arr;
      }
      return arr;
    },
	},
});
//!SECTION - ACTIONS
