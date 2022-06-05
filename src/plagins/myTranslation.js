import { dic } from "@/assets/catalog/texts/dic.js";
export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    lang: "ru",
                };
            },
            methods: {
                t(x) {
                    console.log(x);
                    return dic[this.lang][x];
                },
            },
            mounted() {},
            // ...
        });
    },
};
