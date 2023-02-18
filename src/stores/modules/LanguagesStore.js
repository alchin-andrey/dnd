// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import languages from "@/assets/catalog/base_data/list_languages.js";

import { useMYStore } from "@/stores/user/MYStore";

export const useLanguagesStore = defineStore({
	id: 'LanguagesStore',
	state: () => ({
    languages: languages
	}),

  getters: {
    languages_Arr_Humman(state) {
			let arr = [];
			for (let i in state.languages) {
				if (state.languages[i]?.human) {
					arr.push(state.languages[i].name);
				}
			}
			return arr;
		},

    languages_Arr_Not_Humman(state) {
			let arr = [];
			for (let i in state.languages) {
				if (!state.languages[i]?.human) {
					arr.push(state.languages[i].name);
				}
			}
			return arr;
		},

    languages_Keys(state) {
      let arr = [];
      for (let key in state.languages) {
        arr.push(state.languages[key].name)
      }
			return arr;
		},

		languages_Activ_Obj_RE(state) {
      const MYStore = useMYStore();
			let i = [];
			let j = [];
			if (MYStore.MY.race.proficiencies?.languages) {
				i = Object.values(MYStore.MY.race.proficiencies?.languages);
			}
			if (MYStore.MY.ethnos.proficiencies?.languages) {
				j = Object.values(MYStore.MY.ethnos.proficiencies?.languages);
			}
			return i.concat(j);
		},

		languages_Activ_Arr_RE() {
			let arr_obj = this.languages_Activ_Obj_RE;
			let arr = [];
			for (let indx in arr_obj) {
				arr.push(arr_obj[indx].name);
			}
			return arr;
		},

    languages_Pass_Arr_RE() {
			return this.languages_Keys.filter(
				(el) => !this.languages_Activ_Arr_RE.includes(el)
			);
		},

		languages_Custom_Arr_RE() {
      const MYStore = useMYStore();
			return MYStore.COMMON_Custom_Arr_RE("languages");
		},
  },

  actions: {
  }
});
