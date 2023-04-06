// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import gender from "@/assets/catalog/base_data/list_genders.js";
import names from "@/assets/catalog/base_data/list_names.js";
import { useMYStore } from "@/stores/user/MYStore";
import { useDicStore } from "@/stores/general/DicStore";

export const useGenderStore = defineStore({
	id: "GenderStore",
	state: () => ({
		gender: gender,
    names: names,
    name_user: false,
	}),
	getters: {
		phisiological_Arr(state) {
			return state.gender.phisiological;
		},
		feel_Arr(state) {
			return state.gender.feel;
		},
		look_Arr(state) {
			return state.gender.look;
		},
    attraction_Arr(state) {
      return state.gender.attraction;
    },

    gender_Arr() {
      const MYStore = useMYStore();
      const phisiological = MYStore.MY.gender.phisiological;
      const feel = MYStore.MY.gender.feel;
      const look = MYStore.MY.gender.look;
      const attraction = MYStore.MY.gender.attraction;
      return [phisiological, feel, look, attraction];
    },

    sex_Char_Body() {
      const MYStore = useMYStore();
      const my_phisiological = MYStore.MY.gender.phisiological;
      const sex = this.phisiological_Arr.find(el => el.name == my_phisiological).body;
      return sex;
    },

    names_Arr() {
      const DicStore = useDicStore();
      const lang = DicStore.select_lang;
      const sex = this.sex_Char_Body;
      const arr = this.names[lang][sex];
      return arr;
    },

    // MY_Name() {
    //   if(!this.MY.name && this.MY.name !== '') {
    //     return this.getRandomName_();
    //   } else if(1) {
    //     const incl = this.names_Arr.includes(this.MY.name);
    //     if(!incl) return this.getRandomName_();
    //   }
    // }
	},

  actions: {
    getRandomName() {
      const MYStore = useMYStore();
      const arr = this.names_Arr;
      const random = arr[Math.floor(Math.random() * arr.length)];
      MYStore.MY.name = random;
    },

    // getRandomName_() {
    //   const arr = this.names_Arr;
    //   const random = arr[Math.floor(Math.random() * arr.length)];
    //   return random;
    // }
  }
});
