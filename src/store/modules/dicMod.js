import dic from "@/assets/catalog/texts/dic.js";

export default {
    namespaced: true,
    state: () => ({
        dic: dic,

    }),
    getters: {
        languages(state) {
            return state.lang;
        },
    },
};
