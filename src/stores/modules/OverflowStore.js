import { defineStore } from "pinia";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

export const useOverflowStore = defineStore({
	id: "OverflowStore",
	state: () => ({
		fines: [],
	}),

	getters: {
    // ...mapState(useMYStore, ["MY", "level_Filter_Arr"]),
    ...mapState(usePagesStore, [
			"pages",
			"race_page",
			"class_page",
			"page_Open",
		]),
    // ...mapState(useProficienciesStore, [
    //   // "proficiencies",
    //   // "proficiencies_Arr",
    //   // "proficiencies_Page_Arr",
		// ]),

    filter_List_Lvl: (stor) => (arr, name, kay) => {
      const MYStore = useMYStore();
      const ProficienciesStore = useProficienciesStore();
			let res_arr = [];
			arr.forEach((el) => {
				if (name == "proficiencies") {
					const prof_arr = ProficienciesStore.proficiencies_Arr(el?.proficiencies, kay);
					res_arr = res_arr.concat(prof_arr);
				} else {
					const item_lvl = MYStore.level_Filter_Arr(el?.[name]);
					res_arr = res_arr.concat(item_lvl);
				}
			});
			return res_arr;
		},

		overflow_Item_Menu: (stor) => (item) => {
      const ProficienciesStore = useProficienciesStore();
      let res = false;
      ProficienciesStore.proficiencies.forEach(key => {
        const proff_arr = stor.filter_List_Lvl(item.select_list, "proficiencies", key);
        proff_arr.forEach(name => {
          const new_res = stor.overflow_Prof(key, name, true);
          res = res ? true : new_res;
        });
      });
			return res;
		},

    overflow_Prof_Any_Name: (stor) => (key) => {
      const ProficienciesStore = useProficienciesStore();
			return ProficienciesStore.proficiencies_Page_Arr(key).includes("any");
		},

		overflow_Prof: (stor) => (key, name, active) => {
      const ProficienciesStore = useProficienciesStore();
      const prof_arr = ProficienciesStore.proficiencies_Page_Arr(key);
      const any_name = stor.overflow_Prof_Any_Name(key);
			const name_times = prof_arr.reduce((acc, el) => (el == name ? acc + 1 : acc), 0);
			if (any_name) {
				return true;
      } else if (active && name_times <= 1) {
				return false;
			} else {
				return name_times >= 1;
			}
		},
	},

	actions: {},
});
