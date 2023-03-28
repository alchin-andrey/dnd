// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dic from "@/assets/catalog/texts/dic.js";

export const useDicStore = defineStore({
	id: "DicStore",
	state: () => ({
		dic: dic,
	}),
	getters: {
		t: (state) => (word) => {
			const lang = state.dic.select_lang;
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

		// T(state) {
		//   let lang_sel = state.dic.select_lang;
		//   return (name) => state.dic[lang_sel][name];
		// },

		Em_Icon(state) {
			return state.dic.lang.find((icon) => icon.mark === state.dic.select_lang)
				.icon;
		},

		Lang_Icon(state) {
			return require(`@/assets/img/icon/lang/icon_${state.dic.select_lang}.png`);
		},
	},
	actions: {
		// t(name) {
		// 	let lang_sel = this.dic.select_lang;
		// 	return this.dic[lang_sel][name];
		// },

		getLangSite(name, icon) {
			this.dic.select_lang = name;
			this.dic.select_lang_icon = icon;
		},
	},
});
