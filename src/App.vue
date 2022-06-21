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
          :arr="Object.values(this.race)"
          :type="MY.race"
        >
        </my-slider>

        <div class="selection_menu">
          <my-selection
            @click="show('shown_ethnos')"
            :active="race_page.shown_ethnos"
            title="ethnos"
            :type="MY.ethnos.name"
            :rare="MY.ethnos.rare"
          ></my-selection>
          <my-selection
            @click="show('shown_gender')"
            :active="race_page.shown_gender"
            title="gender"
            :type="MY.gender.phisiological"
          ></my-selection>
          <my-selection
            @click="show('shown_skin_color')"
            :active="race_page.shown_skin_color"
            title="color_skin"
            :type="getCharColor('skin').name"
          >
          </my-selection>
          <my-selection
            @click="show('shown_eyes_color')"
            :active="race_page.shown_eyes_color"
            title="color_eyes"
            :type="getCharColor('eyes').name"
          >
          </my-selection>
          <my-selection
            @click="show('shown_hair_color')"
            :active="race_page.shown_hair_color"
            title="color_hair"
            :type="getCharColor('hair').name"
          >
          </my-selection>
        </div>

        <div class="selection_menu">
          <my-controller
            @click="show('shown_age')"
            :active="race_page.shown_age"
            title="age"
            :value="race_page.age"
            age
            note="Взрослый"
          ></my-controller>
          <my-controller
            @click="show('shown_growth')"
            :active="race_page.shown_growth"
            title="height"
            :value="race_page.growth"
            unit="cm"
            note="Маленький"
          ></my-controller>
          <my-controller
            @click="show('shown_weight')"
            :active="race_page.shown_weight"
            title="weight"
            :value="race_page.weight"
            unit="kg"
            note=""
          >
          </my-controller>
        </div>

        <div class="selection_menu">
          <my-selection
            v-if="MY.race.settings.custom_stats"
            @click="show('shown_characteristics')"
            :active="race_page.shown_characteristics"
            title="stats"
            type="Сил, Лов"
          ></my-selection>
          <my-selection
            v-if="MY.race.settings.custom_skills"
            @click="show('shown_skills')"
            :active="race_page.shown_skills"
            title="skills"
            type="Арк, Ана"
          >
          </my-selection>
          <my-selection
            v-if="MY.race.settings.custom_language"
            @click="show('shown_languages')"
            :active="race_page.shown_languages"
            title="languages"
            type="Акван"
          >
          </my-selection>
        </div>
        <!-- <button @click="plus()" type="">+1</button> -->
      </div>

      <my-button
        v-if="race_page.shown_home"
        numb="02"
        title="class"
      ></my-button>
      <my-button-back
        v-if="!race_page.shown_home"
        @click="showHome()"
      ></my-button-back>
    </div>
    <!-- Этнос-->
    <my-selection-box :shown="race_page.shown_ethnos">
      <div class="ethnos_attributes">
        <!-- Этнос_stats + qualities -->
        <my-wrapper v-if="MY.race.stats || MY.race.qualities">
          <my-attribute
            v-for="(val, name) in MY.race.stats"
            :key="name"
            :title="name"
            :type="`${name}_base`"
            plus
            :numb="val"
            :icon="name"
          >
          </my-attribute>
          <my-attribute
            v-for="(val, name) in MY.race.qualities"
            :key="name"
            :title="name"
            :numb="val"
            feet
            :icon="name"
          ></my-attribute>
        </my-wrapper>

        <!-- Этнос_stats + qualities -->

        <!-- Этнос_proficiencies -->
        <my-wrapper v-if="MY.race.proficiencies">
          <my-inventory
            v-for="(val, name) in MY.race.proficiencies"
            :key="name"
            :title="name"
            :item="getProficienciesItem(name)"
          >
          </my-inventory>
        </my-wrapper>
        <!-- Этнос_proficiencies -->

        <!-- Этнос_fines -->
        <my-wrapper v-if="MY.race.fines" gap_8>
          <my-fines
            v-for="item in MY.race.fines"
            :key="item"
            :icon="item.type"
            :title="item.keyword"
            :details="item.details"
          ></my-fines>
        </my-wrapper>
      </div>
      <!-- Этнос_fines -->

      <!-- Этнос_Карточка -->
      <EthnosCard/>
    </my-selection-box>
    <!-- Этнос -->

    <!-- Гендр -->
    <my-selection-box :shown="race_page.shown_gender">
      <Genders />
    </my-selection-box>
    <!-- Гендр -->

    <!-- Цвет кожи -->
    <my-selection-box :shown="race_page.shown_skin_color">
      <my-color-select body_part="skin"> </my-color-select>
    </my-selection-box>
    <!-- Цвет кожи -->

    <!-- Цвет глаз -->
    <my-selection-box :shown="race_page.shown_eyes_color">
      <my-color-select body_part="eyes"> </my-color-select>
    </my-selection-box>
    <!-- Цвет глаз -->

    <!-- Цвет волос -->
    <my-selection-box :shown="race_page.shown_hair_color">
      <my-color-select body_part="hair"> </my-color-select>
    </my-selection-box>
    <!-- Цвет волос -->

    <!-- Возраст -->
    <my-selection-box :shown="race_page.shown_age">
      <AgeWeight :value="race_page.age" :arr="race_page.age_arr" age />
    </my-selection-box>
    <!-- Возраст -->

    <!-- Рост -->
    <my-selection-box :shown="race_page.shown_growth">
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
    <my-selection-box :shown="race_page.shown_weight">
      <AgeWeight :value="race_page.weight" :arr="race_page.weight_arr" />
    </my-selection-box>
    <!-- Вес -->

    <!-- Характеристики -->
    <my-selection-box :shown="race_page.shown_characteristics">
      <div class="ethnos_attributes">
        <!-- Этнос_stats -->
        <my-wrapper v-if="MY.race.stats">
          <my-attribute
            v-for="(val, name) in MY.stats"
            :key="name"
            :title="name"
            :type="`${name}_base`"
            plus
            :numb="getParNumb('stats', name)"
            :icon="name"
          >
          </my-attribute>
        </my-wrapper>
        <!-- Этнос_stats -->
      </div>
      <my-selection-card
        v-for="name in getPasAttribute(MY.stats, 'stats')"
        :key="name"
        :class="{ selection_card_active: getParNumb('stats', name) > 0 }"
      >
        <my-attribute
          :title="name"
          :type="`${name}_base`"
          plus
          :numb="getParNumb('stats', name, MY.race.settings.custom_stats[1])"
          :icon="name"
        >
        </my-attribute>
        <my-card-text title="" :text="`${name}_details`"> </my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Характеристики -->

    <!-- Навыки -->
    <my-selection-box :shown="race_page.shown_skills">
      <div class="jbm-300">Навыки</div>
    </my-selection-box>
    <!-- Навыки -->

    <!-- Языки -->
    <my-selection-box :shown="race_page.shown_languages">
      <my-selection-card
        v-for="lang in languages"
        :key="lang"
        :active_link="lang.name"
        :select_link="getPasLang(languages, 'languages')[0].name"
        :basic="getProf_RE('languages').includes(lang)"
      >
        <my-card-text :title="lang.name" :text="lang.details"> </my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Языки -->
  </div>
  <!-- character -->
  <div class="represent">
    <div
      class="character"
      :class="{
        active_eyes: race_page.shown_eyes_color || race_page.shown_hair_color,
        active_skin: race_page.shown_skin_color,
      }"
    >
      <race-body body_part="skin"></race-body>

      <race-body body_part="eyes"></race-body>

      <race-body body_part="hair"></race-body>
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
  <div v-if="race_page.shown_home" class="sidebar_right">
    <!-- stats -->
    <my-wrapper hr>
      <my-attribute
        v-for="(val, name) in MY.stats"
        :key="name"
        :title="name"
        :type="`${name}_base`"
        plus
        :numb="getParNumb('stats', name)"
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
        :numb="getParNumb('qualities', name)"
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
        :item="getProf_Item(getProf_RE(name), 'name')"
      >
      </my-inventory>
    </my-wrapper>
    <!-- proficiencies -->

    <!-- fines -->
    <my-wrapper v-if="MY.race.fines || MY.ethnos.fines" gap_8 hr>
      <my-fines
        v-for="item in MY.race.fines"
        :key="item"
        :icon="item.type"
        :title="item.keyword"
        :details="item.details"
      ></my-fines>

      <my-fines
        v-for="item in MY.ethnos.fines"
        :key="item"
        :icon="item.type"
        :title="item.keyword"
        :details="item.details"
      ></my-fines>
    </my-wrapper>
    <!-- fines -->

    <!-- text -->
    <div class="story int-400">
      <div v-html="t(MY.race.details)"></div>
      <my-card-text
        v-if="MY.ethnos !== 'common'"
        :title="MY.ethnos.name"
        :text="MY.ethnos.details"
        :rare="MY.ethnos.rare"
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
import languages from "@/assets/catalog/base_data/languages.js";
import placeholder from "@/assets/catalog/base_data/placeholder.js";

import race_page from "@/assets/catalog/page_data/race_page.js";

import Genders from "@/components/Genders.vue";
import AgeWeight from "@/components/AgeWeight.vue";
import EthnosCard from "./components/EthnosCard.vue";

export default {
  name: "App",
  components: {
    Genders,
    AgeWeight,
    EthnosCard,
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
      languages: languages,
      placeholder: placeholder,

      race_page: race_page,

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

  created() {
    this.default_MY.race = Object.values(this.race)[0];
    this.default_MY.ethnos = Object.values(
      this.default_MY.race.settings.ethnos
    )[0];
    this.MY = this.default_MY;
    console.log();
  },

  computed: {
    All_Ethnos_Obj() {
      return this.MY.race.settings.ethnos;
    },
  },
  watch: {
    "MY.race": "getFunction",
  },

  methods: {
    getFunction() {
      this.getNewEthnos();
      this.closeEthnos();
      this.closePar("shown_characteristics", "custom_stats");
      this.closePar("shown_skills", "custom_skills");
      this.closePar("shown_languages", "custom_language");
    },

    getNewEthnos() {
      this.MY.ethnos = Object.values(this.MY.race.settings.ethnos)[0];
    },

    closeEthnos() {
      if (
        this.race_page.shown_ethnos === true &&
        this.MY.ethnos.name === "common"
      ) {
        this.race_page.shown_ethnos = false;
        this.race_page.shown_home = true;
      } else {
        this.race_page.shown_ethnos === true;
      }
    },

    closePar(name_1, name_2) {
      if (
        this.race_page[name_1] === true &&
        this.MY.race.settings[name_2] === undefined
      ) {
        this.race_page[name_1] = false;
        this.shown_home = true;
      } else {
        this.race_page[name_1] === true;
      }
    },

    plus() {
      this.weight++;
    },

    getActiveAttribute(obj, obj_2) {
      let arr = [];
      for (let kay in obj) {
        if (kay in obj_2) {
          arr.push(kay);
        }
      }
      return arr;
    },

    getPasAttribute(obj, name) {
      let arr = [];
      for (let kay in obj) {
        if (this.getParNumb(name, kay) === 0) {
          arr.push(kay);
        }
      }
      return arr;
    },

    close() {
      this.race_page.shown_ethnos = false;
      this.race_page.shown_gender = false;
      this.race_page.shown_skin_color = false;
      this.race_page.shown_eyes_color = false;
      this.race_page.shown_hair_color = false;
      this.race_page.shown_age = false;
      this.race_page.shown_growth = false;
      this.race_page.shown_weight = false;
      this.race_page.shown_characteristics = false;
      this.race_page.shown_skills = false;
      this.race_page.shown_languages = false;
    },

    show(name) {
      if (
        this.race_page[name] === "shown_ethnos" &&
        this.MY.ethnos.name === "common"
      ) {
        this.race_page[name] === false;
      } else if (this.race_page[name] === false) {
        this.close();
        this.race_page[name] = true;
        this.race_page.shown_home = false;
      } else {
        this.close();
        this.race_page.shown_home = true;
      }
    },

    showHome() {
      this.close();
      this.race_page.shown_home = true;
    },

    showMY() {
      console.log(this.MY);
    },

    hideRuler() {
      if (
        this.race_page.shown_skin_color ||
        this.race_page.shown_eyes_color ||
        this.race_page.shown_hair_color
      ) {
        return false;
      } else {
        return true;
      }
    },

    getCharColor(value) {
      if (this.MY.color[value] === null && this.MY.ethnos.name === "common") {
        return this.MY.race.settings.color[value][0];
      } else if (this.MY.color[value] === null) {
        return this.MY.ethnos.color[value][0];
      } else {
        return this.MY.color[value];
      }
    },

    getProficienciesItem(name) {
      let arr = [];
      for (let i in this.MY.race.proficiencies[name]) {
        arr.push(this.MY.race.proficiencies[name][i].name);
      }
      return arr;
    },

    getProficienciesEthnosItem(obj, name) {
      let arr = [];
      for (let i in this.All_Ethnos_Obj[obj].proficiencies[name]) {
        arr.push(this.All_Ethnos_Obj[obj].proficiencies[name][i].name);
      }
      return arr;
    },

    getProf_Item(obj, kay) {
      let arr = [];
      for (let i in obj) {
        arr.push(obj[i][kay]);
      }
      return arr;
    },

    getProfArr(obj, kay) {
      let arr = [];
      if ((obj.proficiencies || {})[kay]) {
        arr = Object.values(obj.proficiencies[kay]);
      }
      return arr;
    },

    getProf_RE(kay) {
      let i = this.getProfArr(this.MY.race, kay);
      let j = this.getProfArr(this.MY.ethnos, kay);
      return i.concat(j);
    },

    getPasLang(obj, kay) {
      return Object.values(obj).filter(
        (el) => !this.getProf_RE(kay).includes(el)
      );
    },

    getLang(value) {
      if (this.MY.race.settings.custom_language === undefined) {
        return this.MY.custom_language === null;
      } else {
        return this.MY.custom_language;
      }
    },

    getParNumb(par_1, par_2, numb) {
      let i = 0;
      let j = 0;
      numb === undefined ? (numb = 0) : (numb = numb);
      if (this.MY.race[par_1] === undefined) {
        i = 0;
      } else {
        this.MY.race[par_1][par_2] === undefined
          ? (i = 0)
          : (i = this.MY.race[par_1][par_2]);
      }
      if (this.MY.ethnos[par_1] === undefined) {
        j = 0;
      } else {
        this.MY.ethnos[par_1][par_2] === undefined
          ? (j = 0)
          : (j = this.MY.ethnos[par_1][par_2]);
      }
      i === 0 && j === 0 ? (numb = numb) : (numb = 0);
      return i + j + numb;
    },
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

.selection_card_active {
  border: 2px solid #ffffff;
  padding: 14px !important;
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
  max-width: 426px;
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
