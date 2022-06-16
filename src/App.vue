<template>
  <div class="sidebar_left">
    <div class="chapter">
      <div class="main_chapter">
        <div class="logo" @click="showMY()">
          <img alt="logo" src="@/assets/img/logo.svg" />
        </div>

        <my-slider
          numb="01"
          title="race"
          :arr="Object.keys(this.race)"
          :type="MY.race"
        >
        </my-slider>

        <div class="delimiter"></div>

        <div class="selection_menu">
          <my-selection
            @click="show('shown_ethnos')"
            :active="shown_ethnos"
            title="ethnos"
            :type="t(MY.ethnos)"
            :rare="getEthnosObj().rare"
          ></my-selection>
          <my-selection
            @click="show('shown_gender')"
            :active="shown_gender"
            title="gender"
            :type="getGenderName()"
          ></my-selection>
          <my-selection
            @click="show('shown_skin_color')"
            :active="shown_skin_color"
            title="color_skin"
            :type="t(getCharColor('skin').name)"
          >
          </my-selection>
          <my-selection
            @click="show('shown_eyes_color')"
            :active="shown_eyes_color"
            title="color_eyes"
            :type="t(getCharColor('eyes').name)"
          >
          </my-selection>
          <my-selection
            @click="show('shown_hair_color')"
            :active="shown_hair_color"
            title="color_hair"
            :type="t(getCharColor('hair').name)"
          >
          </my-selection>
        </div>

        <div class="selection_menu">
          <my-controller
            @click="show('shown_age')"
            :active="shown_age"
            title="age"
            :value="age"
            age
            note="Взрослый"
          ></my-controller>
          <my-controller
            @click="show('shown_growth')"
            :active="shown_growth"
            title="height"
            :value="growth"
            unit="cm"
            note="Маленький"
          ></my-controller>
          <my-controller
            @click="show('shown_weight')"
            :active="shown_weight"
            title="weight"
            :value="weight"
            unit="kg"
            note=""
          >
          </my-controller>
        </div>

        <div class="selection_menu">
          <my-selection
            @click="show('shown_characteristics')"
            :active="shown_characteristics"
            title="stats"
            type="Сил, Лов"
          ></my-selection>
          <my-selection
            @click="show('shown_skills')"
            :active="shown_skills"
            title="skills"
            type="Арк, Ана"
          >
          </my-selection>
          <my-selection
            @click="show('shown_languages')"
            :active="shown_languages"
            title="languages"
            type="Акван"
          >
          </my-selection>
        </div>
      </div>

      <my-button v-if="shown_home" numb="02" title="Класс"></my-button>
      <my-button-back v-if="!shown_home" @click="showHome()"></my-button-back>
    </div>
    <!-- Этнос-->
    <my-selection-box :shown="shown_ethnos">
      <div class="ethnos_attributes">
        <!-- Этнос_stats + qualities -->
        <my-wrapper>
          <my-attribute
            v-for="n in getActiveAttribute(MY.stats, getRaceObj())"
            :key="n"
            :title="n"
            :type="`${n}_base`"
            plus
            :numb="getRaceObj()[n]"
            :icon="n"
          >
          </my-attribute>
          <my-attribute
            v-for="n in getActiveAttribute(MY.qualities, getRaceObj())"
            :key="n"
            :title="n"
            :numb="getRaceObj()[n]"
            feet
            :icon="n"
          ></my-attribute>
        </my-wrapper>

        <!-- Этнос_stats + qualities -->

        <!-- Этнос_proficiencies -->
        <my-wrapper>
          <my-inventory
            v-for="(val, name) in getRaceObj().proficiencies"
            :key="name"
            :title="name"
            :item="getProficienciesItem(name)"
          >
          </my-inventory>
        </my-wrapper>
        <!-- Этнос_proficiencies -->

        <!-- Этнос_fines -->
        <my-wrapper gap_8>
          <my-fines
            v-for="item in getRaceObj().fines"
            :key="item"
            :icon="item.type"
            :title="item.keyword"
            :details="item.details"
          ></my-fines>
        </my-wrapper>
      </div>
      <!-- Этнос_fines -->

      <!-- Этнос_Карточка -->
      <div class="ethnos_cards_menu">
        <my-selection-card
          v-for="(val, ethnos) in getAllEthnosObj()"
          :key="ethnos"
          @click="ethnosName(ethnos)"
          :class="{ selection_card_active: MY.ethnos === ethnos }"
        >
          <div
            class="char_back"
            :style="{
              'background-image': `url(${require('@/assets/img/characters/halfling/ethhnos/image.png')})`,
            }"
          >
            <img :src="getCharEthnosImg('skin', ethnos)" alt="skin" />

            <img :src="getCharEthnosImg('hair', ethnos)" alt="hair" />

            <img :src="getCharEthnosImg('eyes', ethnos)" alt="eyes" />
          </div>

          <!-- Этнос_Карточка_stats -->
          <my-wrapper>
            <my-attribute
              v-for="n in getActiveAttribute(
                MY.stats,
                getAllEthnosObj()[ethnos]
              )"
              :key="n"
              :title="n"
              :type="`${n}_base`"
              plus
              :numb="getAllEthnosObj()[ethnos][n]"
              :icon="n"
            >
            </my-attribute>
          </my-wrapper>
          <!-- Этнос_Карточка_stats -->

          <!-- Этнос_Карточка_fines -->
          <my-wrapper gap_8>
            <my-fines
              v-for="item in getAllEthnosObj()[ethnos].fines"
              :key="item"
              :icon="item.type"
              :title="item.keyword"
              :details="item.details"
            ></my-fines>
          </my-wrapper>
          <!-- Этнос_Карточка_fines -->

          <my-card-text
            :title="getAllEthnosObj()[ethnos].name"
            :text="t(getAllEthnosObj()[ethnos].details)"
            :rare="getAllEthnosObj()[ethnos].rare"
          >
          </my-card-text>
        </my-selection-card>
        <!-- Этнос_Карточка -->
      </div>
    </my-selection-box>
    <!-- Этнос -->

    <!-- Гендр -->
    <my-selection-box :shown="shown_gender">
      <Genders />
    </my-selection-box>
    <!-- Гендр -->

    <!-- Цвет кожи -->
    <my-selection-box :shown="shown_skin_color">
      <my-selection-card passive colors_card>
        <div class="colors_box jbm-300" @mouseleave="hoverStop('skin_hower')">
          <div v-for="(val, i) in color" :key="i" class="colors_row">
            <my-color-block
              v-for="(val, j) in color[i]"
              :key="j"
              @mouseover="hoverColor('skin_hower', color, i, j)"
              @click="choiceColor('skin', color, i, j)"
              :color="color[i][j].hex"
              :active_link="color[i][j].hex"
              :select_link="getCharColor('skin').hex"
              :ethnos_color="getEthnosColor(color[i][j], 'skin')"
              :race_color="getRaceColor(color[i][j], 'skin')"
            >
            </my-color-block>
          </div>
        </div>
        <my-card-text-color
          :title="skin_hower ? skin_hower.name : getCharColor('skin').name"
          :ethnos_color="skin_hower
              ? getEthnosColor(skin_hower, 'skin')
              : getEthnosColor(getCharColor('skin'), 'skin')"
          :race_color="skin_hower
              ? getRaceColor(skin_hower, 'skin')
              : getRaceColor(getCharColor('skin'), 'skin')"
        ></my-card-text-color>
      </my-selection-card>
    </my-selection-box>
    <!-- Цвет кожи -->

    <!-- Цвет глаз -->
    <my-selection-box :shown="shown_eyes_color">
      <my-selection-card passive colors_card>
        <div class="colors_box jbm-300" @mouseleave="hoverStop('eyes_hower')">
          <div v-for="(val, i) in color" :key="i" class="colors_row">
            <my-color-block
              v-for="(val, j) in color[i]"
              :key="j"
              @mouseover="hoverColor('eyes_hower', color, i, j)"
              @click="choiceColor('eyes', color, i, j)"
              :color="color[i][j].hex"
              :active_link="color[i][j].hex"
              :select_link="getCharColor('eyes').hex"
              :ethnos_color="getEthnosColor(color[i][j], 'eyes')"
              :race_color="getRaceColor(color[i][j], 'eyes')"
            >
            </my-color-block>
          </div>
        </div>
        <my-card-text-color
          :title="eyes_hower ? eyes_hower.name : getCharColor('eyes').name"
          :ethnos_color="eyes_hower
              ? getEthnosColor(eyes_hower, 'eyes')
              : getEthnosColor(getCharColor('eyes'), 'eyes')"
          :race_color="eyes_hower
              ? getRaceColor(eyes_hower, 'eyes')
              : getRaceColor(getCharColor('eyes'), 'eyes')"
        ></my-card-text-color>
      </my-selection-card>
    </my-selection-box>
    <!-- Цвет глаз -->

    <!-- Цвет волос -->
    <my-selection-box :shown="shown_hair_color">
      <my-selection-card passive colors_card>
        <div class="colors_box jbm-300" @mouseleave="hoverStop('hair_hower')">
          <div v-for="(val, i) in color" :key="i" class="colors_row">
            <my-color-block
              v-for="(val, j) in color[i]"
              :key="j"
              @mouseover="hoverColor('hair_hower', color, i, j)"
              @click="choiceColor('hair', color, i, j)"
              :color="color[i][j].hex"
              :active_link="color[i][j].hex"
              :select_link="getCharColor('hair').hex"
              :ethnos_color="getEthnosColor(color[i][j], 'hair')"
              :race_color="getRaceColor(color[i][j], 'hair')"
            >
            </my-color-block>
          </div>
        </div>
        <my-card-text-color
          :title="hair_hower ? hair_hower.name : getCharColor('hair').name"
          :ethnos_color="hair_hower
            ? getEthnosColor(hair_hower, 'hair')
            : getEthnosColor(getCharColor('hair'), 'hair')"
          :race_color="hair_hower
            ? getRaceColor(hair_hower, 'hair')
            : getRaceColor(getCharColor('hair'), 'hair')"
        ></my-card-text-color>
      </my-selection-card>
    </my-selection-box>
    <!-- Цвет волос -->

    <!-- Возраст -->
    <my-selection-box :shown="shown_age">
      <AgeWeight :value="age" :arr="age_arr" age />
    </my-selection-box>
    <!-- Возраст -->

    <!-- Рост -->
    <my-selection-box :shown="shown_growth">
      <div class="flex_options">
        <div class="slider_growth_back">
          <div class="slider_growth">
            <div class="slider_knob"></div>
            <div class="slider_value">100 см</div>
          </div>
        </div>

        <div class="size_growth">
          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_top">120</div>
          </div>

          <div class="skale">
            <div class="skale_numb_top">90</div>
          </div>

          <div class="skale">
            <div class="skale_numb_top"></div>
          </div>

          <div class="skale">
            <div class="skale_numb_down"></div>
          </div>
        </div>
      </div>
    </my-selection-box>
    <!-- Рост -->

    <!-- Вес -->
    <my-selection-box :shown="shown_weight">
      <AgeWeight :value="weight" :arr="weight_arr" />
    </my-selection-box>
    <!-- Вес -->

    <!-- Характеристики -->
    <my-selection-box :shown="shown_characteristics">
      <div class="jbm-300">Характеристики</div>
    </my-selection-box>
    <!-- Характеристики -->

    <!-- Навыки -->
    <my-selection-box :shown="shown_skills">
      <div class="jbm-300">Навыки</div>
    </my-selection-box>
    <!-- Навыки -->

    <!-- Языки -->
    <my-selection-box :shown="shown_languages">
      <div class="jbm-300">Языки</div>
    </my-selection-box>
    <!-- Языки -->
  </div>
  <!-- character -->
  <div class="represent">
    <div
      class="character"
      :class="{
        active_eyes: shown_eyes_color || shown_hair_color,
        active_skin: shown_skin_color,
      }"
    >
      <img
        :style="{ height: `${calcImg()}` }"
        :src="getCharImg('skin', skin_hower)"
        alt="skin"
      />

      <img
        :style="{ height: `${calcImg()}` }"
        :src="getCharImg('hair', hair_hower)"
        alt="hair"
      />

      <img
        :style="{ height: `${calcImg()}` }"
        :src="getCharImg('eyes', eyes_hower)"
        alt="eyes"
      />
    </div>
    <transition name="slide-fade">
      <div class="size" v-if="hideRuler()">
        <div class="skale_division_top">
          <div class="division_numb_top"></div>
          <div class="skale_division_top division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_top">210</div>
          <div class="skale_division division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_top">180</div>
          <div class="skale_division division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_top">150</div>
          <div class="skale_division division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_top">120</div>
          <div class="skale_division division_filling_back">
            <div class="division_filling_front"></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_top">90</div>
          <div class="skale_division division_active">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_top"></div>
          <div class="skale_division division_active">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="division_numb_down">0</div>
          <div class="skale_division division_active">
            <div class=""></div>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <!-- sidebar_right -->
  <div v-if="shown_home" class="sidebar_right">
    <!-- stats -->
    <my-wrapper hr>
      <my-attribute
        v-for="(val, name) in MY.stats"
        :key="name"
        :title="name"
        :type="`${name}_base`"
        plus
        :numb="getNumbStats(name)"
        :icon="name"
      >
      </my-attribute>
    </my-wrapper>
    <!-- stats -->

    <!-- attributes_race -->
    <my-wrapper hr>
      <my-attribute
        v-for="item in attributes_race"
        :key="item"
        :title="item.name"
        plus
        :numb="item.value"
        :icon="item.icon"
        cube_zero
      ></my-attribute>
    </my-wrapper>
    <!-- attributes_race -->

    <!-- qualities -->
    <my-wrapper hr>
      <my-attribute
        v-for="(val, name) in MY.qualities"
        :key="name"
        :title="name"
        :numb="getNumbStats(name)"
        feet
        :icon="name"
      ></my-attribute>
    </my-wrapper>
    <!-- qualities -->

    <!-- proficiencies -->
    <my-wrapper gap_8 hr>
      <my-inventory
        v-for="(val, name) in MY.proficiencies"
        :key="name"
        :title="name"
        :item="getProficienciesItem(name)"
      >
      </my-inventory>
    </my-wrapper>
    <!-- proficiencies -->

    <!-- fines -->
    <my-wrapper gap_8 hr>
      <my-fines
        v-for="item in getRaceObj().fines"
        :key="item"
        :icon="item.type"
        :title="item.keyword"
        :details="item.details"
      ></my-fines>

      <my-fines
        v-for="item in getEthnosObj().fines"
        :key="item"
        :icon="item.type"
        :title="item.keyword"
        :details="item.details"
      ></my-fines>
    </my-wrapper>
    <!-- fines -->

    <!-- text -->
    <div class="story int-400">
      <div v-html="t(getRaceObj().details)"></div>
      <my-card-text
        :title="getEthnosObj().name"
        :text="t(getEthnosObj().details)"
        :rare="getEthnosObj().rare"
      >
      </my-card-text>
    </div>
  </div>
</template>

<script>
import MY from "@/assets/catalog/MY.js";
import default_MY from "@/assets/catalog/default_MY.js";

import color from "@/assets/catalog/base_data/colors.js";
import genders from "@/assets/catalog/base_data/genders.js";
import race from "@/assets/catalog/base_data/races.js";
import clas from "@/assets/catalog/base_data/classes.js";
import past from "@/assets/catalog/base_data/pasts.js";

import Genders from "@/components/Genders.vue";
import AgeWeight from "@/components/AgeWeight.vue";

export default {
  name: "App",
  components: {
    Genders,
    AgeWeight,
  },
  data() {
    return {
      MY: MY,
      default_MY: default_MY,

      genders: genders,
      color: color,
      race: race,
      clas: clas,
      past: past,

      shown_ethnos: false,
      shown_gender: false,
      shown_skin_color: false,
      shown_eyes_color: false,
      shown_hair_color: false,
      shown_age: false,
      shown_growth: false,
      shown_weight: false,
      shown_characteristics: false,
      shown_skills: false,
      shown_languages: false,

      shown_home: true,

      skin_hower: null,
      hair_hower: null,
      eyes_hower: null,

      active: false,

      age_arr: [0, 20, "x", "x", 75, "x", "x", 130, 150],
      weight_arr: [0, "x", "x", 15, 20],

      age: 34,
      growth: 100,
      weight: 15,

      attributes_race: [
        {
          name: "Акробатика",
          value: 2,
          icon: "dexterity",
        },
        {
          name: "Анализ",
          value: 2,
          icon: "intelligence",
        },
      ],
    };
  },
  //  watch: {
  //   MY: {
  //     handler(newQuestion) {

  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    getActiveAttribute(obj, obj_2) {
      let arr = [];
      for (let kay in obj) {
        if (kay in obj_2) {
          arr.push(kay);
        }
      }
      return arr;
    },

    getProficienciesItem(name) {
      let arr = [];
      for (let i in this.getRaceObj().proficiencies[name]) {
        arr.push(this.getRaceObj().proficiencies[name][i].name);
      }
      return arr;
    },

    getNewEthnos() {
      this.MY.ethnos = Object.keys(this.race[this.MY.race].settings.ethnos)[0];
    },

    getGenderName() {
      if (this.MY.gender.feel === this.genders.feel.cisgender) {
        return this.t(this.MY.gender.phisiological);
      } else {
        return `${this.t(this.MY.gender.phisiological)} *`;
      }
    },

    ethnosName(name) {
      this.MY.ethnos = name;
    },

    goTo(route) {
      this.$router.push(route);
    },

    close() {
      this.shown_ethnos = false;
      this.shown_gender = false;
      this.shown_skin_color = false;
      this.shown_eyes_color = false;
      this.shown_hair_color = false;
      this.shown_age = false;
      this.shown_growth = false;
      this.shown_weight = false;
      this.shown_characteristics = false;
      this.shown_skills = false;
      this.shown_languages = false;
    },

    show(name) {
      if (this[name] === false) {
        this.close();
        this[name] = true;
        this.shown_home = false;
      } else {
        this.close();
        this.shown_home = true;
      }
    },

    showHome() {
      this.close();
      this.shown_home = true;
    },

    showMY() {
      console.log(this.MY);
      console.log(
        this.getCharColor("skin") == this.getEthnosObj().settings.color.skin
      );
    },

    choiceColor(name, obj, i, j) {
      this.MY.color[name] = obj[i][j];
    },

    hoverStop(name) {
      this[name] = null;
    },

    hoverColor(name, obj, i, j) {
      this[name] = obj[i][j];
    },

    hideRuler() {
      if (
        this.shown_skin_color ||
        this.shown_eyes_color ||
        this.shown_hair_color
      ) {
        return false;
      } else {
        return true;
      }
    },

    getCharColor(value) {
      if (this.MY.color[value] === null) {
        return this.getEthnosObj().settings.color[value];
      } else {
        return this.MY.color[value];
      }
    },

    getCharImg(value, hower) {
      let race = this.MY.race;
      let ethnos = this.MY.ethnos;
      let phisiological = this.MY.gender.phisiological;
      let img = hower ? hower.img : this.getCharColor(value).img;
      let sex;
      if (phisiological === "female" || phisiological === "demigirl") {
        sex = "female";
      } else {
        sex = "male";
      }
      return require(`@/assets/img/characters/${race}/${ethnos}/${sex}/${value}/${img}.png`);
    },

    getCharEthnosImg(value, ethnos_name) {
      let race = this.MY.race;
      let ethnos = ethnos_name;
      let phisiological = this.MY.gender.phisiological;
      let img = this.getAllEthnosObj()[ethnos_name].settings.color[value].img;
      let sex;
      if (phisiological === "female" || phisiological === "demigirl") {
        sex = "female";
      } else {
        sex = "male";
      }
      return require(`@/assets/img/characters/${race}/${ethnos}/${sex}/${value}/${img}.png`);
    },

    getEthnosColor(obj, value) {
      return obj === this.getEthnosObj().settings.color[value];
    },

    getRaceColor(obj, value) {
      return this.getRaceObj().settings.color[value].includes(obj);
    },

    calcImg() {
      if (
        this.shown_skin_color ||
        this.shown_eyes_color ||
        this.shown_hair_color
      ) {
        return `100%`;
      } else {
        return `calc(100% / 700 * (300 + 3.2 * 10))`;
      }
    },

    getNumbStats(name) {
      let i = 0;
      let j = 0;
      this.getRaceObj()[name] === undefined
        ? (i = 0)
        : (i = this.getRaceObj()[name]);
      this.getEthnosObj()[name] === undefined
        ? (j = 0)
        : (j = this.getEthnosObj()[name]);
      return i + j;
    },

    getRaceObj() {
      return this.race[this.MY.race];
    },

    getAllEthnosObj() {
      return this.getRaceObj().settings.ethnos;
    },

    getEthnosObj() {
      if (this.getAllEthnosObj()[this.MY.ethnos] == undefined) {
        return null;
      } else {
        return this.getAllEthnosObj()[this.MY.ethnos];
      }
    },
  },

  computed: {
    // getColor() {
    //   let arr = [];
    //   for (let i in this.color) {
    //     for (let j in this.color[i]) {
    //       arr.push(this.color[i][j]);
    //     }
    //   }
    //   return arr;
    // },
  },

  created() {
    this.default_MY.race = Object.keys(this.race)[0];
    this.default_MY.ethnos = Object.keys(
      this.race[this.default_MY.race].settings.ethnos
    )[0];
    // this.default_MY.color =
    //   this.race[this.default_MY.race].settings.ethnos[
    //     this.default_MY.ethnos
    //   ].settings.color;
    this.MY = this.default_MY;
    console.log();
  },
};
</script>

<style>
body {
  background-color: #0e1518;
}

#app {
  /*font-family: 'JetBrains Mono', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}

.jbm-300 {
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 10.95px;
  line-height: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
}

.int-400 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.sidebar_left {
  min-height: 100%;
  display: flex;
  outline: 2px solid rgba(255, 255, 255, 0.1);
}

.chapter {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main_chapter {
  width: 320px;
  padding-left: 32px;
  flex: 1 1 auto;
}

.logo {
  height: 32px;
  margin: 32px 0 18px 0;
}

.delimiter {
  width: 256px;
  height: 1px;
  margin: 40px 0;
  background: rgba(255, 255, 255, 0.2);
}

.selection_menu {
  width: 256px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 34px;
}

.ethnos_attributes {
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0 0 26px 16px;
}

.ethnos_cards_menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.selection_card_active {
  border: 2px solid #ffffff;
  padding: 14px !important;
}

.char_back {
  width: 100%;
  height: 120px;
  background: #0e1518;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.char_back img {
  height: 300px;
  position: absolute;
  top: 16px;
  left: 0;
}

/* ---------------------characters----------------------*/

.represent {
  padding: 32px;
  flex: 1 1 auto;
  display: flex;
  position: relative;
  overflow: hidden;
}

.character {
  width: 100%;
  height: 100%;
  position: relative;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

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

.active_eyes {
  align-self: flex-start;
  height: 200%;
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.active_skin {
  align-self: flex-start;
  transition-property: all;
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
}

.size {
  width: 35px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  height: 100%;
  background-color: transparent;
  position: absolute;
  right: 0;
  padding-top: 36px;
  bottom: 32px;
}

.skale {
  height: 100%;
  display: flex;
}

.division_numb_down {
  margin-right: 12px;
  margin-bottom: -4px;
  align-self: flex-end;
}

.division_numb_top {
  margin-right: 12px;
  margin-top: -4px;
}

.skale_division {
  width: 1px;
  /* min-height: 96px; */
  flex: 1 1 auto;
}

.skale_division_top {
  width: 1px;
  height: 32px;
  flex: 1 1 auto;
}

.division_off {
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.3;
}

.division_active {
  background: #ffffff;
}

.division_filling_back {
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.division_filling_front {
  background: #ffffff;
  height: calc(100% / 30 * 10);
}

/* ---------------------sidebar_right----------------------*/

.sidebar_right {
  /* width: 426px; */
  min-width: 426px;
  padding: 32px;
  overflow-y: scroll;
}

/* .sidebar_right::-webkit-scrollbar {
  width: 20px;
  background-color: #0E1518;
}

.sidebar_right::-webkit-scrollbar-thumb {
  border-radius: 3px;
  border: 8px solid #0E1518;
  background-color: #ffffff;
}

.sidebar_right::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: #0E1518;
  margin: 25px;
} */

.sidebar_right::-webkit-scrollbar {
  width: 0;
}

.story {
  max-width: 362px;
  color: rgba(255, 255, 255, 0.4);
  text-align: start;
}

.story h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-top: 25px;
  margin-bottom: 5px;
}

.colors_box {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  gap: 2px;
}

.colors_row {
  display: flex;
  flex: 1 1 auto;
  height: 100%;
  gap: 2px;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

/* -------------slider-grwwth------------------- */

.slider_growth_back {
  width: 344px;
  height: calc(100% / 700 * 396);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}
.slider_growth {
  width: 100%;
  height: calc(100% / 396 * (300 + 3.2 * 10));
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.slider_knob {
  width: 96px;
  height: 6px;
  background: #0e1518;
  opacity: 0.2;
  border-radius: 4px;
  margin: 0 auto;
  cursor: ns-resize;
}

.slider_value {
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
}

.flex_options {
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.size_growth {
  width: 42px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: end;
  gap: 4px;
  background-color: transparent;
  height: 100%;
  padding-top: 4px;
}

.skale {
  height: 100%;
  display: flex;
}

.skale_numb_down {
  text-align: end;
  margin-bottom: -4px;
  align-self: flex-end;
  flex: 1 1 auto;
}

.skale_numb_top {
  text-align: end;
  margin-top: -4px;
  align-self: flex-start;
  flex: 1 1 auto;
}

.slider_age_back {
  width: 344px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.slider_age {
  width: 100%;
  height: calc(100% / 150 * 34);
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.size_age {
  width: 42px;
  font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300;
  font-size: 11.45px;
  line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  text-align: end;
  background-color: transparent;
  height: 100%;
}

.slider_weight_back {
  width: 344px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.slider_weight {
  width: 100%;
  height: calc(100% / 20 * 18);
  background: #ffffff;
  padding: 12px 16px 11px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* -------------slider-grwwth------------------- */
</style>
