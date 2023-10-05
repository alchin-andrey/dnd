<template>
      <img
      v-if="img_Char"
      :class="anim_error_Char" 
      :style="{
        height: hight_Char,
        left: left_Char
        }"
      :src="img_Char"
      :alt="body_part"
      @click.stop
      @click="showPhotoSet()"
      draggable="false"
    />

    <div 
      v-else-if="show_Custom_Img"
      class="custom-img"  
      :class="anim_error_Back" 
      :style="stule_Img_Obj"
      @click.stop
      @click="showPhotoSet()"
    />
  
  <svg
    v-else-if="!img_Char && !MY.custom_photo"
    :fill="placeholder_Color_Hex"
    :height="calc_Img"
    viewBox="0 0 197 400"
    xmlns="http://www.w3.org/2000/svg"
    v-html="placeholder[body_part]"
  ></svg>
</template>

<script>
import placeholder from "@/assets/catalog/base_data/_placeholder.js";
import { mapState, mapActions } from "pinia";
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
		blank_print: {
			type: String,
			default: null,
		},
    blank_size: {
			type: String,
			default: null,
		},
    error: {
      type: Boolean,
			default: false,
    }
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
    ...mapState(usePagesStore, [
      "race_page", 
      "screen_Max",
      "setting_open",
      "site_settings", 
      "alignment_page",
      "errors",
    ]),
    ...mapState(useColorStore, ["color_Char_Сommon"]),
    ...mapState(useGenderStore, ["sex_Char_Body"]),

    show_Custom_Img() {
      return !this.img_Char && this.MY.custom_photo && this.body_part == 'skin'
    },

    anim_error_Char() {
        return {
          'animation--error-char-upload': this.error 
          && this.errors.file_photo 
          && !this.alignment_page.shown.photo,
          'pasive-img': this.error,
        }

      // if(this.body_part == 'skin') {
      //   const inc_color = ['1-2', '1-3', '1-4', '1-5']
      //   const red_body = inc_color.includes(this.color_Char_Body.img);
      //   const error_comp = this.error;
      //   const error_file = this.errors.file_photo;
      //   return {
      //     'animation--error-photo-upload': red_body && error_comp && error_file,
      //     'animation--error-char-upload': !red_body && error_comp && error_file,
      //     'pasive-img': !red_body && error_comp,
      //   }
      // }
    },

    anim_error_Back() {
        return {
          'animation--error-photo-upload': this.error 
          && this.errors.file_photo 
          && !this.alignment_page.shown.photo,
        }
    },

    stule_Img_Obj() {
      const pos = this.MY.param.sett_photo.position + '%';
      const back = !this.error ? `url(${this.MY.custom_photo})` : `transparent`;
			return {
				'background': back,

        'background-size': 'cover',
        'background-position': `${pos} ${pos}`,

        height: this.hight_Char,
        width: this.width_Custom_Char,
			}
		},

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
      return this.screen_Max ? this.race_page[this.hower_link] : false;
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
      if(
        this.MY.param.user_photo 
        && this.MY.custom_photo 
        && !this.ethnos_name
        ) {
        // if (this.body_part == "skin" && !this.MY.param.sett_photo.size_cover) return this.MY.custom_photo;
        // else return null;
        return null;
      }
      let race = this.MY_Race.name;
      let ethnos = this.ethnos_Char;
      let img;
      let sex = this.sex_Char_Body;
      let body = this.body_part;
      let result;
      if (this.body_part == "class") {
        img = this.MY_Class.name;
      } else {
        img = !this.error ? this.img_Char_Numb : '1-4';
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

    width_Custom_Char() {
      const screen_main = `(100vh - 64px)`;
      
      const screen_standard_print = `1825px`;
      const screen_standard_mini = `${1825/6}px`;
      const screen_oldschool_print = `890px`;
      const screen_oldschool_mini = `${890/6}px`;
      const screen_mob = `470px`;
      let kof = this.alignment_page.ratio_photo;
      if(!this.MY.param.sett_photo.size_cover) {
        kof = this.MY.param.sett_photo.ratio;
      };
      const sc_main_kof = `${screen_main} * ${kof}`

      const sc_standard_print_kof = `${screen_standard_print} * ${kof}`
      const sc_standard_mini_kof = `${screen_standard_mini} * ${kof}`
      const sc_oldschool_print_kof = `${screen_oldschool_print} * ${kof}`
      const sc_oldschool_mini_kof = `${screen_oldschool_mini} * ${kof}`
      const sc_mob_kof = `${screen_mob} * ${kof}`

      if (this.race_page.shown.skin_color) {
        return `calc(${sc_main_kof})`;
      } else if (
        this.race_page.shown.eyes_color ||
        this.race_page.shown.hair_color
      ) {
        return `calc(${sc_main_kof} * 2)`;
      } else if (this.blank_print == 'standard') {
        if (this.blank_size == 'mini') {
          return `calc(${sc_standard_mini_kof} * ${this.growth_Char} / 210)`
        } else {
          return `calc(${sc_standard_print_kof} * ${this.growth_Char} / 210)`
        } 
      } else if (this.blank_print == 'oldschool') {
        if (this.blank_size == 'mini') {
          return `calc(${sc_oldschool_mini_kof} * ${this.growth_Char} / 210)`
        } else {
          return `calc(${sc_oldschool_print_kof} * ${this.growth_Char} / 210)`
        }
      } else if (this.screen_Max) {
        return `calc(${sc_main_kof} * ${this.growth_Char} / 210)`
      } else {
        return `calc(${sc_mob_kof} * ${this.growth_Char} / 210)`
      }
    },

    // width_Custom_Char() {
    //   const screen_main = `(100vh - 64px)`;
    //   let screen_other = null;
    //   if (this.blank_print == 'standard') {
    //     if (this.blank_size == 'mini') {
    //       screen_other = `${1825/6}px`;
    //     } else {
    //       screen_other = `1825px`;
    //     } 
    //   } else if (this.blank_print == 'oldschool') {
    //     if (this.blank_size == 'mini') {
    //       screen_other = `${684/6}px`;
    //     } else {
    //       screen_other = `684px`;
    //     }
    //   } else if (this.screen_Max) {
    //     screen_other = screen_main;
    //   } else {
    //     screen_other = `470px`;
    //   }
    //   let kof = this.alignment_page.ratio_photo;
    //   if(!this.MY.param.sett_photo.size_cover) {
    //     kof = this.MY.param.sett_photo.ratio;
    //   };

    //   if (this.race_page.shown.skin_color) {
    //     return `calc(${screen_main} * ${kof})`;
    //   } else if (
    //     this.race_page.shown.eyes_color ||
    //     this.race_page.shown.hair_color
    //   ) {
    //     return `calc(${screen_main} * ${kof} * 2)`;
    //   } else {
    //     return `calc(${screen_other} * ${kof} * ${this.growth_Char} / 210)`
    //   }
    // },

    left_Char() {
      if(this.ethnos_name || this.mob_menu) {
        return `${this.MY_Race.ethnos_preview[1]}px`;
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

  methods: {
    ...mapActions(usePagesStore, ["showSettings__Alignment", "showMobParam", "showHome"]),

    showPhotoSet() {
      if (this.ethnos_name) {
        return null;
      } else if(this.mob_menu) {
        this.showMobParam();
      } else if (!this.setting_open) {
        this.showSettings__Alignment('photo');
      } else {
        this.showHome();
      }
    }
  }

};
</script>

<style scoped>
.custom-img {
  background-repeat: no-repeat;
	/* border-radius: 5%; */
  /* overflow: hidden; */
}

.pasive-img {
  opacity: 0;
}
</style>