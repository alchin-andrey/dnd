<template>
  <!-- <div> -->
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
          v-if="!img_Char"
          :fill="placeholder_Color_Hex"
          :height="calc_Img"
          viewBox="0 0 197 400"
          xmlns="http://www.w3.org/2000/svg"
          v-html="placeholder[body_part]"
        ></svg>
  <!-- </div> -->
</template>

<script>
import placeholder from "@/assets/catalog/base_data/_placeholder.js";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
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
    // blank_print: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      hower_link: `${this.body_part}_hower`,
      placeholder: placeholder,
    }
  },
  computed: {
    ...mapState(useMYStore, ["MY", "MY_Race"]),
    ...mapState(usePagesStore, ["race_page"]),
    ...mapState(useColorStore, ["color_Char_Сommon"]),

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
        return this.MY_Race.noimg_ethnos ? "" : `/${this.MY.ethnos.name}`;
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
      let race = this.MY.race_name;
      let ethnos = this.ethnos_Char;
      let phisiological = this.MY.gender.phisiological;
      let img;
      let sex;
      let body = this.body_part;
      let result;
      if (phisiological === "female" || phisiological === "demigirl") {
        sex = "female";
      } else {
        sex = "male";
      }
      if (this.body_part == "class") {
        img = this.MY.class_name;
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
      if(this.ethnos_name) {
        return `${this.MY_Race.ethnos_preview[0]}px`;
      } else {
        return this.calc_Img;
      }
    },

    left_Char() {
      if(this.ethnos_name) {
        return `${this.MY_Race.ethnos_preview[1]}px`;
      // } else if(this.blank_print) {
      //   return 0;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .character img {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.character svg {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-property: all, fill;
  transition-duration: 0.8s, 0.1s;
  transition-timing-function: ease-in-out;
} */

</style>