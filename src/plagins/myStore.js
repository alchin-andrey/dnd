import dic from "@/assets/catalog/texts/dic.js";
export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    dic: dic,
                    lang: "ru",
                };
            },
            methods: {
                t(x) {
                    // console.log(x);
                    return dic[this.lang][x];
                },
            },
            mounted() {},
            // ...
        });
    },
};
