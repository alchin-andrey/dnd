<template>
  <img
    v-if="img_Char"
    :style="{ 
      height: hight_Char,
      left: left_Char 
      }"
    :src="img_Char"
    :alt="body_part"
  />
  
  <svg
    v-else
    :fill="placeholder_Color_Hex"
    :height="calc_Img"
    viewBox="0 0 197 400"
    xmlns="http://www.w3.org/2000/svg"
    v-html="placeholder[body_part]"
  ></svg>
</template>

<script>
import placeholder from "@/assets/catalog/base_data/_placeholder.js";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
export default {
  name: "RaceBody",
  props: {
    body_part: {
      type: String,
      default: null,
    },
    ethnos_name: {
      type: String,
      default: null,
    },
		mob_menu: {
			type: Boolean,
			default: false,
		},
  },
  data() {
    return {
      hower_link: `${this.body_part}_hower`,
      placeholder: placeholder,
    }
  },
  computed: {
    ...mapState(useMYStore, [
      "MY", 
      "MY_Race", 
      "MY_Ethnos",
      "MY_Class",
    ]),
    ...mapState(usePagesStore, ["race_page"]),
    ...mapState(useColorStore, ["color_Char_Сommon"]),
    ...mapState(useGenderStore, ["sex_Char_Body"]),

    growth_Char() {
      if (this.MY.height === null) {
      let max_height = this.MY_Race.race_settings.height.max
      let min_height = this.MY_Race.race_settings.height.min
        return (min_height + max_height) / 2;
      } else {
        return this.MY.height;
      }
    },

    Hower() {
      return this.race_page[this.hower_link]
    },

    ethnos_Char() {
      if(this.ethnos_name) {
        return this.MY_Race.noimg_ethnos ? "" : `/${this.ethnos_name}`;
      } else {
        return this.MY_Race.noimg_ethnos ? "" : `/${this.MY_Ethnos.name}`;
      }
    },

    color_Char_Body() {
      return this.color_Char_Сommon(this.body_part)
    },

    img_Char_Numb() {
      if(this.ethnos_name) {
        return this.MY_Race.race_settings.ethnos[this.ethnos_name].color[this.body_part][0].img;
      } else {
        return this.Hower ? this.Hower.img : this.color_Char_Body.img;
      }
    },

    img_Char() {
      let race = this.MY_Race.name;
      let ethnos = this.ethnos_Char;
      let img;
      let sex = this.sex_Char_Body;
      let body = this.body_part;
      let result;
      if (this.body_part == "class") {
        img = this.MY_Class.name;
      } else {
        img = this.img_Char_Numb;
      }
      try {
        result = require(`@/assets/img/characters/${race}${ethnos}/${sex}/${body}/${img}.png`);
      } catch (e) {
        if (e.code !== "MODULE_NOT_FOUND") {
          throw e;
        }
        result = null;
      }
      return result;
    },

    calc_Img() {
      if (
        this.race_page.shown.skin_color ||
        this.race_page.shown.eyes_color ||
        this.race_page.shown.hair_color
      ) {
        return `100%`;
      } else {
        return `calc(100% / 210 * ${this.growth_Char})`;
      }
    },

    hight_Char() {
      if(this.ethnos_name || this.mob_menu) {
        return `${this.MY_Race.ethnos_preview[0]}px`;
      } else {
        return this.calc_Img;
      }
    },

    left_Char() {
      if(this.ethnos_name || this.mob_menu) {
        return `${this.MY_Race.ethnos_preview[1]}px`;
        // return `120px`;
      } else {
        return `50%`;
      }
    },

    placeholder_Color_Hex() {
      if (this.ethnos_name && !this.img_Char) {
        return this.MY_Race.race_settings.ethnos[this.ethnos_name].color[this.body_part][0].hex;
      } else {
        let hex = this.Hower ? this.Hower.hex : this.color_Char_Body.hex;
      return hex;
      }
    },
  },

};
</script>

<style scoped>
</style>