import dic from "@/assets/catalog/texts/dic.js";
export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    dic: dic,
                    // lang: dic.select_lang,
                };
            },
            methods: {
                t(x) {
                    // console.log(x);
                    let lang = this.dic.select_lang;
                    return this.dic[lang][x];
                    // return this.dic[this.lang][x];
                },
            },
            // mounted() {},
            // ...
        });
    },
};
