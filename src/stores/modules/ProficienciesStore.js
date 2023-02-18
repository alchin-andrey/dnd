import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";



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
  
      proficiencies_Arr_Race: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY.race.proficiencies, kay);
      },

      proficiencies_Arr_Ethnos: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY.ethnos.proficiencies, kay);
      },

      proficiencies_Arr_Backstory: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY.backstory.proficiencies, kay);
      },

      proficiencies_Arr_Setting_Race: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr_Setting(MYStore.сustomm_Settings_Race_Arr, kay);
      },

      proficiencies_Race_Params: (stor) => (kay) => {
        const race_prof = stor.proficiencies_Arr_Race(kay);
        const ethnos_prof = stor.proficiencies_Arr_Ethnos(kay);
        const backstory_prof = stor.proficiencies_Arr_Backstory(kay);
        const sett_prof = stor.proficiencies_Arr_Setting_Race(kay);
        return [...race_prof, ...ethnos_prof, ...backstory_prof, ...sett_prof];
      },

      proficiencies_Arr_Setting: (stor) => (arr, kay) => {
        let custom_prof = [];
        arr.forEach(el => {
          el.select_list.forEach(sub_el => {
            const prof_arr = stor.proficiencies_Arr(
              sub_el?.proficiencies, kay);
              custom_prof = custom_prof.concat(prof_arr);
            });
          });
        return custom_prof;
      },

      proficiencies_Arr_Class: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr(MYStore.MY.class.proficiencies, kay);
      },

      proficiencies_Arr_Setting_Class: (stor) => (kay) => {
        const MYStore = useMYStore();
        return stor.proficiencies_Arr_Setting(MYStore.сustomm_Settings_Class_Arr(), kay);
      },

      proficiencies_Race_Params_Any: (stor) => (kay) => {
        const REC_prof = stor.proficiencies_Race_Params(kay);
        const any =  stor.proficiencies_Any(kay);
        return any ? [] : REC_prof;
      },
  
      proficiencies_Class_Params: (stor) => (kay) => {
        const class_prof = stor.proficiencies_Arr_Class(kay);
        const sett_prof = stor.proficiencies_Arr_Setting_Class(kay);
        const any =  stor.proficiencies_Any(kay);
        return any ? ['any'] : class_prof.concat(sett_prof);
      },
  
      proficiencies_Arr_All: (stor) => (kay) => {
        let rec_prof = stor.proficiencies_Race_Params(kay);
        let class_prof = stor.proficiencies_Class_Params(kay);
        return rec_prof.concat(class_prof);
      },
  },
  
  actions: {
  }
});
