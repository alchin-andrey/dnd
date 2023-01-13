// import dic from "@/assets/catalog/texts/dic.js";

import { mapState } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
export default {
    install(Vue) {
        Vue.mixin({
            // data() {
            //     return {
            //         dic_: dic,
            //     };
            // },

            computed: {
              ...mapState(useDicStore, ["t", "T"]),

            //   t: (state) => (word) => {
            //       let lang = state.dic_.select_lang;
            //       let t_word = state.dic_[lang][word];
            //       return t_word ? t_word : word;
            //   },

            //   T: (state) => (str) => {
            //     let t_str = state.t(str);
            //     return t_str.charAt(0).toUpperCase() + t_str.slice(1);
            // },
          }
        });
    },
};
