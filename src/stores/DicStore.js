// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import dic from "@/assets/catalog/texts/dic.js";

export const useDicStore = defineStore({
	id: 'DicStore',
	state: () => ({
    dic: dic
	}),
  getters: {
    T() {
      let lang_sel = this.dic.select_lang;
      return (name) => this.dic[lang_sel][name];
    },

    Em_Icon() {
      return this.dic.lang.find((icon) => icon.mark === this.dic.select_lang).icon;
    },

    Lang_Icon(state) {
      console.log('Lang_Icon:', state.dic.select_lang)
      return require(`@/assets/img/icon/lang/icon_${state.dic.select_lang}.png`);
    },

  },
	actions: {
    t(name) {
      let lang_sel = this.dic.select_lang;
      return this.dic[lang_sel][name];
    },
	},
});
