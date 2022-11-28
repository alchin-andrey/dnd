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
    // color_Char_Сommon: (store) => (body_part) => {
    //   console.log('color_Char_Body_pinia:')
    //   const MYStore = useMYStore();
    //   if (
    //     MYStore.MY.color_selected[body_part] === null &&
    //     MYStore.MY.ethnos.name === "common"
    //   ) {
    //     return MYStore.MY.race.settings.color[body_part][0];
    //   } else if (MYStore.MY.color_selected[body_part] === null) {
    //     return MYStore.MY.ethnos.color[body_part][0];
    //   } else {
    //     return MYStore.MY.color_selected[body_part];
    //   }
    // },

    color_Char_Сommon: (store) => (body_part) => {
      const MYStore = useMYStore();
      if (MYStore.MY.race.settings.color[body_part].length == 0) {
        return MYStore.MY.ethnos.color[body_part][0];
      } else if (
        MYStore.MY.color_selected[body_part] === null &&
        MYStore.MY.ethnos.name === "common" 
      ) {
        return MYStore.MY.race.settings.color[body_part][0];
      } else if (MYStore.MY.color_selected[body_part] === null) {
        return MYStore.MY.ethnos.color[body_part][0];
      } else {
        return MYStore.MY.color_selected[body_part];
      }
    },

    skin_color_Char_Body() {
      return this.color_Char_Сommon("skin")
    },

    eyes_color_Char_Body() {
      return this.color_Char_Сommon("eyes")
    },

    hair_color_Char_Body() {
      return this.color_Char_Сommon("hair")
    },



	},
  actions: {

  },
});
