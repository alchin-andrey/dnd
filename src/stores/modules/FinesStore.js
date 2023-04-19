import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export const useFinesStore = defineStore({
	id: "FinesStore",
	state: () => ({
		fines: [],
	}),

	getters: {
    fines_Race_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Race?.fines);
		},

		fines_Race_Ethnos_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Ethnos?.fines);
		},

    fines_Race_Backstory_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Backstory.fines);
		},

    fines_Race_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Race_Lvl("fines");
		},

    // fines_Race_Param_No_Ethnos() {
    //   const race = this.fines_Race_Main_Arr;
    //   const backstory = this.fines_Race_Backstory_Arr;
    //   const race_custom = this.fines_Race_Custom_Arr;
		// 	return [...race, ...backstory, ...race_custom];
		// },

		fines_Race_Param() {
      const MYStore = useMYStore();
			const race = this.fines_Race_Main_Arr;
			const ethnos = this.fines_Race_Ethnos_Arr;
      const backstory = this.fines_Race_Backstory_Arr;
      const race_custom = this.fines_Race_Custom_Arr;

      const race_param = [...race, ...ethnos, ...backstory, ...race_custom];
			return MYStore.sort_Level(race_param);
		},

		fines_Class_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Class?.fines);
		},

    fines_Class_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Class_Lvl("fines");
		},

		fines_Class_Param() {
      const MYStore = useMYStore();
			const class_fines = this.fines_Class_Main_Arr;
      const custom_fines = this.fines_Class_Custom_Arr;

      const class_param = [...class_fines, ...custom_fines];
			return MYStore.sort_Level(class_param);
		},

    fines_All_Param() {
			const race_param = this.fines_Race_Param;
			const class_param = this.fines_Class_Param;
			return [...race_param, ...class_param];
		},
    
	},

	actions: {},
});
