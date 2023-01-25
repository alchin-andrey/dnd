import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export const useFinesStore = defineStore({
	id: "FinesStore",
	state: () => ({
		fines: [],
	}),

	getters: {
    fines_Race_Lvl() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.race?.fines);
		},

		fines_Ethnos_Lvl() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.ethnos?.fines);
		},

		fines_Race_Param() {
			const race_fines = this.fines_Race_Lvl;
			const ethnos_fines = this.fines_Ethnos_Lvl;
			return race_fines.concat(ethnos_fines);
		},

		fines_Class_Lvl() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.class?.fines);
		},

    fines_Custom_Class_Lvl() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Class_Lvl("fines");
		},

		fines_Class_Param() {
			const class_fines = this.fines_Class_Lvl;
      const custom_fines = this.fines_Custom_Class_Lvl;
			return class_fines.concat(custom_fines);
		},
    
	},

	actions: {},
});
