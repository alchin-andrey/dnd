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
			return MYStore.level_Filter_Arr(MYStore.MY.race?.fines);
		},

		fines_Race_Ethnos_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.ethnos?.fines);
		},

    fines_Race_Backstory_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.backstory.fines);
		},

    fines_Race_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Race_Lvl("fines");
		},

    fines_Race_Param_No_Ethnos() {
      const race = this.fines_Race_Main_Arr;
      const backstory = this.fines_Race_Backstory_Arr;
      const race_custom = this.fines_Race_Custom_Arr;
			return [...race, ...backstory, ...race_custom];
		},

		fines_Race_Param() {
			const race = this.fines_Race_Main_Arr;
			const ethnos = this.fines_Race_Ethnos_Arr;
      const backstory = this.fines_Race_Backstory_Arr;
      const race_custom = this.fines_Race_Custom_Arr;
			return [...race, ...ethnos, ...backstory, ...race_custom];
		},

		fines_Class_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.class?.fines);
		},

    fines_Class_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Class_Lvl("fines");
		},

		fines_Class_Param() {
			const class_fines = this.fines_Class_Main_Arr;
      const custom_fines = this.fines_Class_Custom_Arr;
			return [...class_fines, ...custom_fines];
		},

    fines_All_Param() {
			const race_param = this.fines_Class_Main_Arr;
			const class_param = this.fines_Class_Custom_Arr;
			return [...race_param, ...class_param];
		},
    
	},

	actions: {},
});
