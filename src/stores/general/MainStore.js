// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import backstories_srd from "@/assets/catalog/base_data/srd/list_backstories.js";
import races_srd from "@/assets/catalog/base_data/srd/step1_races.js";
import classes_srd from "@/assets/catalog/base_data/srd/step2_classes.js";

import backstories_phb from "@/assets/catalog/base_data/phb/list_backstories.js";
import races_phb from "@/assets/catalog/base_data/phb/step1_races_new.js";
import classes_phb from "@/assets/catalog/base_data/phb/step2_classes.js";

export const useMainStore = defineStore({
	id: "MainStore",
	state: () => ({
    backstories_srd,
		races_srd,
    classes_srd,

    backstories_phb,
		races_phb,
    classes_phb,

    srd: true,
    can_show_phb: true,
	}),

  persist: {
    paths: ['srd'],
  },
	getters: {

    backstories_Obj() {
      return this.srd ? this.backstories_srd : this.backstories_phb;
		},

    races_Obj() {
      return this.srd ? this.races_srd : this.races_phb;
		},

    classes_Obj() {
      return this.srd ? this.classes_srd : this.classes_phb;
		},

    backstories_Arr() {
			return Object.values(this.backstories_Obj);
		},

    race_Arr() {
			return Object.values(this.races_Obj);
		},

    race_Key() {
      return Object.keys(this.races_Obj);
    },

    class_Arr() {
			return Object.values(this.classes_Obj);
		},

    class_Key() {
      return Object.keys(this.classes_Obj);
    },
	},
});
