// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import languages from "@/assets/catalog/base_data/list_languages.js";

export const useLanguagesStore = defineStore({
	id: 'LanguagesStore',
	state: () => ({
    languages: languages
	}),
  getters: {
    languages_Arr_Humman() {
			let arr = [];
			for (let i in this.languages) {
				if (this.languages[i]?.human) {
					arr.push(this.languages[i].name);
				}
			}
			return arr;
		},

    languages_Arr_Not_Humman() {
			let arr = [];
			for (let i in this.languages) {
				if (!this.languages[i]?.human) {
					arr.push(this.languages[i].name);
				}
			}
			return arr;
		},
  },
});
