import dic from "@/assets/catalog/texts/dic.js";
export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    dic_: dic,
                    // lang: dic.select_lang,
                };
            },

            computed: {
              t: (state) => (word) => {
                  let lang = state.dic_.select_lang;
                  let t_word = state.dic_[lang][word];
                  // return (x) => this.dic_[lang][x];
                  return t_word ? t_word : word;
              },

              T: (state) => (str) => {
                let t_str = state.t(str);
                return t_str.charAt(0).toUpperCase() + t_str.slice(1);
            },
          }
            
            // methods: {
            //     t(x) {
            //         let lang = this.dic_.select_lang;
            //         return this.dic_[lang][x];
            //     },

            //     T(str) {
            //       let t_str = this.t(str);
            //       return t_str.charAt(0).toUpperCase() + t_str.slice(1);
            //   },

            // },
            // mounted() {},
            // ...
        });
    },
};
