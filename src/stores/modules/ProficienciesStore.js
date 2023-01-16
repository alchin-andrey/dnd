import { defineStore } from "pinia";
// import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useDicStore } from "@/stores/general/DicStore";
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
    // ...mapState(useMYStore, ["MY", "level_Filter_Arr", "MY_Subclass"]),

      proficiencies_Any: (state) => (kay) => {
        const MYStore = useMYStore();
        const specials = MYStore.class_Specials_Filter_Lvl("proficiencies");
        return specials?.some((el) =>  el?.[kay] == "any");
      },

      proficiencies_Arr: (state) => (obj, kay) => {
        let arr = [];
        obj?.[kay] ? (arr = obj[kay].map((x) => x.name)) : null;
        return arr;
      },
  
      proficiencies_Arr_Race: (state) => (kay) => {
        const MYStore = useMYStore();
        return state.proficiencies_Arr(MYStore.MY.race.proficiencies, kay);
      },

      proficiencies_Arr_Ethnos: (state) => (kay) => {
        const MYStore = useMYStore();
        return state.proficiencies_Arr(MYStore.MY.ethnos.proficiencies, kay);
      },

      proficiencies_Arr_Custom: (state) => (kay) => {
        const LanguagesStore = useLanguagesStore();
        return kay === "languages" ? LanguagesStore.languages_Custom_Arr_RE : [];
      },

      proficiencies_Race_Params: (state) => (kay) => {
        const race_prof = state.proficiencies_Arr_Race(kay);
        const ethnos_prof = state.proficiencies_Arr_Ethnos(kay);
        const custom_prof = state.proficiencies_Arr_Custom(kay);

        return race_prof.concat(ethnos_prof).concat(custom_prof);
      },
      
      proficiencies_Race_Params_Any: (state) => (kay) => {
        const REC_prof = state.proficiencies_Race_Params(kay);
        const any =  state.proficiencies_Any(kay);
        return any ? [] : REC_prof;
      },
  
      proficiencies_Arr_Class: (state) => (kay) => {
        const MYStore = useMYStore();
        const class_prof = state.proficiencies_Arr(
          MYStore.MY.class.proficiencies,
          kay
        );
  
        const subclass_prof = state.proficiencies_Arr(
          MYStore.MY_Subclass?.proficiencies,
          kay
        );
  
        const any =  state.proficiencies_Any(kay);
        return any ? ['any'] : class_prof.concat(subclass_prof);
      },
  
      proficiencies_Arr_All: (state) => (kay) => {
        let rec_prof = state.proficiencies_Race_Params(kay);
        let class_prof = state.proficiencies_Arr_Class(kay);
        return rec_prof.concat(class_prof);
      },

  },
  
  actions: {
  }
});
