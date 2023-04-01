import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export const useChargesStore = defineStore({
	id: "ChargesStore",
	state: () => ({
		fines: [],
	}),

	getters: {
    charges_Race_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.race.charges);
		},

		charges_Race_Ethnos_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.ethnos.charges);
		},

		charges_Race_Backstory_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Backstory.charges);
		},

    charges_Race_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Race_Lvl("charges");
		},

		charges_Race_Param_No_Ethnos() {
      const race = this.charges_Race_Main_Arr;
			const backstory = this.charges_Race_Backstory_Arr;
      const race_custom = this.charges_Race_Custom_Arr;
			return [...race, ...backstory, ...race_custom];
		},

		charges_Race_Param() {
			const race = this.charges_Race_Main_Arr;
			const ethnos = this.charges_Race_Ethnos_Arr;
			const backstory = this.charges_Race_Backstory_Arr;
      const race_custom = this.charges_Race_Custom_Arr;
			return [...race, ...ethnos, ...backstory, ...race_custom];
		},

		charges_Class_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Class.charges);
		},

    charges_Class_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Class_Lvl("charges");
		},

    charges_Class_Param() {
			const charges_class = this.charges_Class_Main_Arr;
			const charges_custom = this.charges_Class_Custom_Arr;
			return [...charges_class, ...charges_custom];
		},

    charges_All_Param() {
			const race_param = this.charges_Race_Param;
			const class_param = this.charges_Class_Param;
			return [...race_param, ...class_param];
		},

    charges_Class_Spell_Slots() {
      return this.charges_All_Param.find(el => el.name == "spell_slots");
    },

    charges_Class_Spell_Manna() {
      return this.charges_All_Param.filter(el => el.name == "spell_slots" || el.name == "arcanum_slots");
    }
	},

	actions: {},
});
