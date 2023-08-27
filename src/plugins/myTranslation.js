// import dic from "@/assets/catalog/texts/dic.js";

import { mapState } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
export default {
    install(Vue) {
        Vue.mixin({
            computed: {
              ...mapState(useDicStore, ["t", "T"]),
          }
        });
    },
};
