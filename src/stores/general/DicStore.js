// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dic from "@/assets/catalog/texts/dic.js";
import { useMYStore } from "@/stores/user/MYStore";

export const useDicStore = defineStore({
	id: "DicStore",
	state: () => ({
		dic: dic,
	}),
	getters: {
		t: (state) => (word) => {
      const MYStore = useMYStore();
			const lang = MYStore.MY.select_lang;
			const t_word = state.dic[lang][word];
			return t_word ? t_word : word;
		},

		T: (state) => (str) => {
			const t_str = state.t(str);
      if (t_str) {
        const T_str = t_str[0].toUpperCase() + t_str.slice(1);
        return T_str;
      }
		},
	},
});
