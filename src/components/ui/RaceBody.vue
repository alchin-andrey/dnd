<template>
  <img
        v-if="Char_Img"
        :style="{ 
          height: Char_Hight,
          left: Char_Left 
          }"
        :src="Char_Img"
        :alt="body_part"
      />

      <svg
        v-if="!Char_Img"
        :fill="getCharColorHex(Hower)"
        :height="Calc_Img"
        viewBox="0 0 197 400"
        xmlns="http://www.w3.org/2000/svg"
        v-html="placeholder[body_part]"
      ></svg>
</template>

<script>
import placeholder from "@/assets/catalog/base_data/_placeholder.js";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useColorStore } from "@/stores/modules/ColorStore";
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
  },
  data() {
    return {
      hower_link: `${this.body_part}_hower`,
      placeholder: placeholder,
    }
  },
  computed: {
    ...mapState(useMYStore, ["MY"]),
    ...mapState(usePagesStore, ["race_page"]),
    ...mapState(useColorStore, ["color_Char_Сommon"]),

    All_Ethnos_Obj() {
			return this.MY.race.settings.ethnos;
		},

    growth_Char() {
      if (this.MY.height === null) {
      let max_height = this.MY.race.settings.height.max
      let min_height = this.MY.race.settings.height.min
        return (min_height + max_height) / 2;
      } else {
        return this.MY.height;
      }
    },

    Hower() {
      return this.race_page[this.hower_link]
    },

    Char_Ethnos() {
      if(this.ethnos_name) {
        return this.MY.race.noimg_ethnos ? "" : `/${this.ethnos_name}`;
      } else {
        return this.MY.race.noimg_ethnos ? "" : `/${this.MY.ethnos.name}`;
      }
    },

    color_Char_Body() {
      return this.color_Char_Сommon(this.body_part)
    },

    Char_Img_Numb() {
      if(this.ethnos_name) {
        return this.All_Ethnos_Obj[this.ethnos_name].color[this.body_part][0].img;
      } else {
        return this.Hower ? this.Hower.img : this.color_Char_Body.img;
      }
    },

    Char_Img() {
      let race = this.MY.race.name;
      let ethnos = this.Char_Ethnos;
      let phisiological = this.MY.gender.phisiological;
      let img = this.Char_Img_Numb;
      let sex;
      let body = this.body_part;
      let result;
      if (phisiological === "female" || phisiological === "demigirl") {
        sex = "female";
      } else {
        sex = "male";
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

    Calc_Img() {
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

    Char_Hight() {
      if(this.ethnos_name) {
        return `${this.MY.race.ethnos_preview[0]}px`;
      } else {
        return this.Calc_Img;
      }
    },

    Char_Left() {
      if(this.ethnos_name) {
        return `${this.MY.race.ethnos_preview[1]}px`;
      } else {
        return `50%`;
      }
    },
  },

  methods: {
    getCharColorHex(hower) {
      if (this.ethnos_name && !this.Char_Img) {
        return this.All_Ethnos_Obj[this.ethnos_name].color[this.body_part][0].hex;
      } else {
        let hex = hower ? hower.hex : this.color_Char_Body.hex;
      return hex;
      }
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.character img {
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
}

</style>