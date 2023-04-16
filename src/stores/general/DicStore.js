// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dic from "@/assets/catalog/texts/dic.js";

export const useDicStore = defineStore({
	id: "DicStore",
	state: () => ({
		dic: dic,
    select_lang: "ua_inrium",
	}),

  persist: {
    paths: ['select_lang'],
  },

	getters: {
		t: (stor) => (word) => {
			const lang = stor.select_lang;
			const t_word = stor.dic[lang][word];
			return t_word ? t_word : word;
		},

		T: (stor) => (str) => {
			const t_str = stor.t(str);
      if (t_str) {
        const T_str = t_str[0].toUpperCase() + t_str.slice(1);
        return T_str;
      }
		},
	},
});
