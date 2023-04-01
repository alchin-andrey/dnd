import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";



export const useProficienciesStore = defineStore({
	id: 'ProficienciesStore',
	state: () => ({
    proficiencies: [
      "languages",
      "weapons",
      "armor",
      "tools"
    ],
	}),

  getters: {
      proficiencies_Any: (stor) => (kay) => {
        const MYStore = useMYStore();
        const specials = MYStore.class_Specials_Filter_Lvl("proficiencies");
        return specials?.some((el) =>  el?.[kay] == "any");
      },

      proficiencies_Arr: (stor) => (obj, kay) => {
        let arr = [];
        obj?.[kay] ? (arr = obj[kay].map((x) => x.name)) : null;
        return arr;
      },

      proficiencies_Arr_Setting: (stor) => (arr, kay) => {
        let custom_prof = [];
          arr?.forEach(el => {
            el.select_list.forEach(sub_el => {
              const prof_arr = stor.proficiencies_Arr(
                sub_el?.proficiencies, kay);
                custom_prof = custom_prof.concat(prof_arr);
              });
            });
        return custom_prof;
      },

      //NOTE - RACE
      proficiencies_Arr_Race: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY_Race.proficiencies, kay);
      },

      proficiencies_Arr_Ethnos: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY_Ethnos.proficiencies, kay);
      },

      proficiencies_Arr_Backstory: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY_Backstory.proficiencies, kay);
      },

      proficiencies_Arr_Setting_Race: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr_Setting(MYStore.сustomm_Settings_Race_Arr, kay);
      },

      proficiencies_Race_Params_All: (stor) => (kay) => {
        const race_prof = stor.proficiencies_Arr_Race(kay);
        const ethnos_prof = stor.proficiencies_Arr_Ethnos(kay);
        const backstory_prof = stor.proficiencies_Arr_Backstory(kay);
        const sett_prof = stor.proficiencies_Arr_Setting_Race(kay);
        return [...race_prof, ...ethnos_prof, ...backstory_prof, ...sett_prof];
      },

      // proficiencies_Race_Params: (stor) => (kay) => {
      //   return [...new Set(stor.proficiencies_Race_Params_All(kay))];
      // },

      //NOTE - CLASS
      proficiencies_Arr_Class: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY_Class.proficiencies, kay);
      },

      proficiencies_Arr_Setting_Class: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr_Setting(MYStore.сustomm_Settings_Class_Arr, kay);
      },

      proficiencies_Race_Params_All_or_Any: (stor) => (kay) => {
        const REC_prof = stor.proficiencies_Race_Params_All(kay);
        const any =  stor.proficiencies_Any(kay);
        return any ? [] : REC_prof;
      },
  
      proficiencies_Class_Params_All: (stor) => (kay) => {
        const class_prof = stor.proficiencies_Arr_Class(kay);
        const sett_prof = stor.proficiencies_Arr_Setting_Class(kay);
        const any =  stor.proficiencies_Any(kay);
        return any ? ['any'] : class_prof.concat(sett_prof);
      },

      proficiencies_RC_Params: (stor) => (kay) => {
        const unique_race = [...new Set(stor.proficiencies_Race_Params_All_or_Any(kay))];
        const unique_class = [...new Set(stor.proficiencies_Class_Params_All(kay))];
        const unique_class_without = unique_class.filter(
          (i) => !unique_race.includes(i)
        );
        return [...unique_class_without, ...unique_race];
      },

      //NOTE - ALL
      proficiencies_RC_Params_All: (stor) => (kay) => {
        let rec_prof = stor.proficiencies_Race_Params_All(kay);
        let class_prof = stor.proficiencies_Class_Params_All(kay);
        return rec_prof.concat(class_prof);
      },

      //NOTE - PAGE
      proficiencies_Page_Arr: (stor) => (name) => {
        const PagesStore = usePagesStore();
        if (PagesStore.pages.race_page) {
          return stor.proficiencies_Race_Params_All(name);
        } else if (PagesStore.pages.class_page) {
          return stor.proficiencies_RC_Params_All(name);
        } else {
          return stor.proficiencies_RC_Params_All(name);
        }
      },
  },
  
  actions: {
  }
});
