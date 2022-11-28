// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import color from "@/assets/catalog/base_data/_colors.js";

import { useMYStore } from "@/stores/MY/MYStore";

export const useColorStore = defineStore({
	id: "ColorStore",
	state: () => ({
		color: color,
	}),
	getters: {
    Char_Color() {
      const MYStore = useMYStore();
      if (
        MYStore.MY.color[this.body_part] === null &&
        MYStore.MY.ethnos.name === "common"
      ) {
        return MYStore.MY.race.settings.color[this.body_part][0];
      } else if (MYStore.MY.color[this.body_part] === null) {
        return MYStore.MY.ethnos.color[this.body_part][0];
      } else {
        return MYStore.MY.color[this.body_part];
      }
    },
    
	},
  actions: {

  },
});
