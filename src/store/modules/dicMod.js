import dic from "@/assets/catalog/texts/dic.js";

export default {
    namespaced: true,
    state: () => ({
        dic: dic,

    }),
    getters: {
        Em_Icon(state) {
          return state.dic.lang.find((icon) => icon.mark === state.dic.select_lang).icon;
        },

        Lang_Icon(state) {
          return require(`@/assets/img/icon/lang/icon_${state.dic.select_lang}.png`);
        },
    },
};
