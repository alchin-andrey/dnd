// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dic from "@/assets/catalog/texts/dic.js";

export const useDicStore = defineStore({
	id: 'DicStore',
	state: () => ({
    dic: dic
	}),
  getters: {
    T(state) {
      let lang_sel = state.dic.select_lang;
      return (name) => state.dic[lang_sel][name];
    },

    Em_Icon(state) {
      return state.dic.lang.find((icon) => icon.mark === state.dic.select_lang).icon;
    },

    Lang_Icon(state) {
      return require(`@/assets/img/icon/lang/icon_${state.dic.select_lang}.png`);
    },

  },
	actions: {
    t(name) {
      let lang_sel = this.dic.select_lang;
      return this.dic[lang_sel][name];
    },

    getLangSite(name, icon) {
			this.dic.select_lang = name;
			this.dic.select_lang_icon = icon;
		},
	},
});
