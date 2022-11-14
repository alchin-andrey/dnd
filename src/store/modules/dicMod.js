import dic from "@/assets/catalog/texts/dic.js";

export default {
    namespaced: true,
    state: () => ({
        dic: dic,

    }),
    getters: {
        Select_Lang (state) {
            return state.dic.select_lang
        },
    },
};
