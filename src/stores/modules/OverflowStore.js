import { defineStore } from "pinia";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";

export const useOverflowStore = defineStore({
	id: "OverflowStore",
	state: () => ({
		fines: [],
	}),

	getters: {
		...mapState(usePagesStore, [
			"pages",
			"race_page",
			"class_page",
			"page_Open",
		]),

		filter_List_Lvl: (stor) => (arr, name, kay) => {
      if(arr) {
        const MYStore = useMYStore();
        const ProficienciesStore = useProficienciesStore();
        let res_arr = [];
        arr.forEach((el) => {
          if (name == "proficiencies") {
            const prof_arr = ProficienciesStore.proficiencies_Arr(
              el?.proficiencies,
              kay
            );
            res_arr = res_arr.concat(prof_arr);
          } else {
            const item_lvl = MYStore.level_Filter_Arr(el?.[name]);
            res_arr = res_arr.concat(item_lvl);
          }
        });
        return res_arr;
      }
      return [];
		},

		overflow_Item_Menu: (stor) => (item) => {
			const ProficienciesStore = useProficienciesStore();
			let res = false;

			ProficienciesStore.proficiencies.forEach((key) => {
				const proff_arr = stor.filter_List_Lvl(
					item.select_list,
					"proficiencies",
					key
				);
				proff_arr.forEach((name) => {
					const new_res = stor.overflow_Prof(key, name, true);
					res = res ? true : new_res;
				});
			});

			if(item.select_list) {
				const name_custom_arr = item.select_list.filter( el => el.name_set == 'your_option');
				name_custom_arr.forEach((el) => {
					const new_res = !el.name_custom;
					res = res ? true : new_res;
				});
			}

			const spell_arr = stor.filter_List_Lvl(item.select_list, "spells");
			spell_arr.forEach((el) => {
				const new_res = stor.overflow_Spell(el, true);
				res = res ? true : new_res;
			});

			const stats_save_arr = stor.filter_List_Lvl(item.select_list, "saving");
			stats_save_arr.forEach((name) => {
				const new_res = stor.overflow_Stats_Save(name, true);
				res = res ? true : new_res;
			});

			const stats_arr = stor.filter_List_Lvl(item.select_list, "stats");
			stats_arr.forEach((el) => {
				const new_res = stor.overflow_Stats_Numb(el.name, true);
				res = res ? true : new_res;
			});

			const skills_arr = stor.filter_List_Lvl(item.select_list, "skills");
			skills_arr.forEach((el) => {
				const new_res = stor.overflow_Skills_Numb(el.name, true);
				res = res ? true : new_res;
			});

			return res;
		},

		//NOTE - Proficiencies
		overflow_Prof_Any_Name: (stor) => (key) => {
			const ProficienciesStore = useProficienciesStore();
			return ProficienciesStore.proficiencies_Page_Arr(key).includes("any");
		},

		overflow_Prof: (stor) => (key, name, active, select_list) => {
      const prof_select_arr = stor.filter_List_Lvl(select_list, "proficiencies", key);
      const select_true = prof_select_arr.includes(name);
			const ProficienciesStore = useProficienciesStore();
			const prof_arr = ProficienciesStore.proficiencies_Page_Arr(key);
			const any_name = stor.overflow_Prof_Any_Name(key);
			const name_times = prof_arr.reduce(
				(acc, el) => (el == name ? acc + 1 : acc),
				0
			);
			if (any_name) {
				return true;
			} else if ((active || select_list.length == 1 && select_true) && name_times <= 1) {
				return false;
			} else {
				return name_times >= 1;
			}
		},

		//NOTE - Spell
		overflow_Spell: (stor) => (item, active, select_list) => {
			const spell_select_arr = stor.filter_List_Lvl(select_list, "spells");
      const select_true = spell_select_arr.some(el => {
        const item_spell = item.spell.find(i => i.name);
        const el_spell = el.spell.find(i => i.name);
        return item_spell.name == el_spell.name && item.mod?.name_extra == el.mod?.name_extra;
      });

			const SpellsStore = useSpellsStore();
			const spell_arr = SpellsStore.spells_Page_All_Arr;
			const name_times = spell_arr.reduce((acc, el) => {
				const item_spell = item.spell.find((i) => i.name);
				const el_spell = el.spell.find((i) => i.name);
				if (
					item_spell.name == el_spell.name &&
					item.mod?.name_extra == el.mod?.name_extra
				) {
					return acc + 1;
				} else {
					return acc;
				}
			}, 0);
			if ((active || select_list.length == 1 && select_true) && name_times <= 1) { 
				return false;
			} else {
				return name_times >= 1;
			}
		},

		//NOTE - Stats_Save
		overflow_Stats_Save: (stor) => (name, active, select_list) => {
      const save_select_arr = stor.filter_List_Lvl(select_list, "saving");
      const select_true = save_select_arr.includes(name);
			const StatsStore = useStatsStore();
			const save_all_name = StatsStore.stats_Save_All_Page_Arr;
			const name_times = save_all_name.reduce(
				(acc, el) => (el == name ? acc + 1 : acc),
				0
			);
			if ((active || select_list.length == 1 && select_true) && name_times <= 1) {
				return false;
			} else {
				return name_times >= 1;
			}
		},

		//NOTE - Stats_Numb
		overflow_Stats_Numb: (stor) => (name, active, select_list) => {
      const stats_select_arr = stor.filter_List_Lvl(select_list, "stats");
      const select_true = stats_select_arr.some(el => el.name.includes(name));
			const StatsStore = useStatsStore();
			const stat_numb_full = StatsStore.stats_Numb_Full_Page(name);
			const max = StatsStore.stats_Base_Max(name);
			if ((active || select_list.length == 1 && select_true) && stat_numb_full == max) {
				return false;
			} else {
				return stat_numb_full >= max;
			}
		},

		//NOTE - Stats_Cube
		overflow_Stats_Cube: (stor) => (i, numb, name, active, select_list) => {
      const stats_select_arr = stor.filter_List_Lvl(select_list, "stats");
      const select_true = stats_select_arr.some(el => el.name.includes(name));
			const StatsStore = useStatsStore();
			const stat_numb_full = StatsStore.stats_Numb_Full_Page(name);
			const max = StatsStore.stats_Base_Max(name);
			let stat_numb = stat_numb_full;
			!(active || select_list.length == 1 && select_true) ? (stat_numb += numb) : null;
			const stat_numb_max = stat_numb < max ? stat_numb : max;
			const overflow_numb = stat_numb - stat_numb_max;
			return i - overflow_numb <= 0;
		},

		//NOTE - Skills_Numb
		overflow_Skills_Numb: (stor) => (name, active, select_list) => {
			const skills_select_arr = stor.filter_List_Lvl(select_list, "skills");
			const select_true = skills_select_arr.some(el => el.name.includes(name));
			const SkillsStore = useSkillsStore();
			const skills_name = SkillsStore.skills_Owner_Name_Page;
			const name_times = skills_name.reduce(
				(acc, el) => (el == name ? acc + 1 : acc),
				0
				);
			if ((active || select_list.length == 1 && select_true) && name_times <= 1) {
				return false;
			} else {
				return name_times >= 1;
			}
		},
	},

	actions: {},
});
