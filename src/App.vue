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
            @click="show('shown_skin_color', 'skin')"
            :active="race_page.shown_skin_color"
            title="color_skin"
            :type="getCharColor('skin').name"
          >
          </my-selection>
          <my-selection
            @click="show('shown_eyes_color', 'eyes')"
            :active="race_page.shown_eyes_color"
            title="color_eyes"
            :type="getCharColor('eyes').name"
          >
          </my-selection>
          <my-selection
            @click="show('shown_hair_color', 'hair')"
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
            :type_arr="race_page.extra.stats"
          ></my-selection>
          <my-selection
            v-if="MY.race.settings.custom_skills"
            @click="show('shown_skills')"
            :active="race_page.shown_skills"
            title="skills"
            :type_arr="race_page.extra.skills"
          >
          </my-selection>
          <my-selection
            v-if="MY.race.settings.custom_languages || MY.ethnos.custom_languages"
            @click="show('shown_languages')"
            :active="race_page.shown_languages"
            title="languages"
            :type_arr="Lang_Extra"
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
      <EthnosChoice />
    </my-selection-box>
    <!-- Этнос -->

    <!-- Гендр -->
    <my-selection-box :shown="race_page.shown_gender">
      <GenderChoice />
    </my-selection-box>
    <!-- Гендр -->

    <!-- Цвет кожи -->
    <my-selection-box :shown="race_page.shown_skin_color">
      <my-color-select body_part="skin" />
    </my-selection-box>
    <!-- Цвет кожи -->

    <!-- Цвет глаз -->
    <my-selection-box :shown="race_page.shown_eyes_color">
      <my-color-select body_part="eyes" />
    </my-selection-box>
    <!-- Цвет глаз -->

    <!-- Цвет волос -->
    <my-selection-box :shown="race_page.shown_hair_color">
      <my-color-select body_part="hair" />
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

        <div class="size_growth jbm-300">
          <div class="skale">
            <div class="skale_numb_top">210</div>
          </div>

          <div class="skale">
            <div class="skale_numb_top">180</div>
          </div>

          <div class="skale">
            <div class="skale_numb_top">150</div>
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
            <div class="skale_numb_down">0</div>
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
        <my-wrapper>
          <my-attribute
            v-for="name in Stats_Keys"
            :key="name"
            :title="name"
            :type="`${name}_base`"
            plus
            :numb="getSummNumb('stats', name)"
            :icon="name"
          >
          </my-attribute>
        </my-wrapper>
        <my-card-text :text="'stats_base_details'"> </my-card-text>
      </div>
      <my-selection-card
        v-for="name in Stats_Pass"
        :key="name"
        @click="
          getExtraActiv(
            Stats_Activ.includes(name),
            stats_Select.includes(name),
            name,
            'stats'
          )
        "
        :active_boll_link="stats_Select.includes(name)"
      >
        <my-attribute
          :title="name"
          :type="`${name}_base`"
          plus
          :numb="Race_Set_Obj.custom_stats[1]"
          :icon="name"
        >
        </my-attribute>
        <my-card-text title="" :text="`${name}_details`"> </my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Характеристики -->

    <!-- Навыки -->
    <my-selection-box :shown="race_page.shown_skills">
      <my-card-text :text="'skills_details'"> </my-card-text>
      <my-selection-card
        v-for="(val, name, i) in MY.skills"
        :key="name"
         @click="
          getExtraActiv(
            false,
            skills_Select.includes(name),
            name,
            'skills'
          )
        "
        :class="{ skill_marg: getSkillMarg(i, MY.skills, name) }"
        :active_boll_link="skills_Select.includes(name)"
      >
        <my-attribute
          :title="name"
          :type="val.mod"
          plus
          :numb="Race_Set_Obj.custom_skills[1]"
          :icon="val.mod"
        >
        </my-attribute>
        <my-card-text title="" :text="`${name}_details`"> </my-card-text>
      </my-selection-card>
    </my-selection-box>
    <!-- Навыки -->

    <!-- Языки -->
    <my-selection-box :shown="race_page.shown_languages">
      <my-selection-card
        v-for="lang in Lang_Not_Humman"
        :key="lang"
        @click="
          getExtraActiv(
            Lang_Activ.includes(lang),
            Lang_Select.includes(lang),
            lang,
            'languages'
          )
        "
        :active_boll_link="Lang_Select.includes(lang)"
        :basic="Lang_Activ.includes(lang)"
      >
        <my-card-text :title="lang.name" :text="lang.details"> </my-card-text>
      </my-selection-card>

      <div
        class="skroll_list jbm-300"
        :class="{
          skroll_list_closed: !race_page.shown_humman_lang,
          skroll_list_open: race_page.shown_humman_lang,
        }"
        v-vpshow="race_page.shown_humman_lang"
        @click="showSkroll('shown_humman_lang')"
      >
        {{ t("languages_human") }}
      </div>
      <transition name="slide-fade">
        <div v-if="race_page.shown_humman_lang" class="flex_gap-8">
          <my-selection-card
            v-for="lang in Lang_Humman"
            :key="lang"
            @click="
              getExtraActiv(
                Lang_Activ.includes(lang),
                Lang_Select.includes(lang),
                lang,
                'languages'
              )
            "
            :active_boll_link="Lang_Select.includes(lang)"
            :basic="Lang_Activ.includes(lang)"
          >
            <my-card-text :title="lang.name" :text="lang.details">
            </my-card-text>
          </my-selection-card>
        </div>
      </transition>
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
      <div class="size jbm-300" v-if="hideRuler()">
        <!-- <div class="skale_division_top">
          <div class="skale_numb_top"></div>
          <div class="skale_division_top division_off">
            <div class=""></div>
          </div>
        </div> -->

        <div class="skale">
          <div class="skale_numb_top">210</div>
          <div class="skale_division division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="skale_numb_top">180</div>
          <div class="skale_division division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="skale_numb_top">150</div>
          <div class="skale_division division_off">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="skale_numb_top">120</div>
          <div class="skale_division division_filling_back">
            <div class="division_filling_front"></div>
          </div>
        </div>

        <div class="skale">
          <div class="skale_numb_top">90</div>
          <div class="skale_division division_active">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="skale_numb_top"></div>
          <div class="skale_division division_active">
            <div class=""></div>
          </div>
        </div>

        <div class="skale">
          <div class="skale_numb_down">0</div>
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
        v-for="name in Stats_Keys"
        :key="name"
        :title="name"
        :type="`${name}_base`"
        plus
        :numb="getSummNumb('stats', name)"
        :icon="name"
      >
      </my-attribute>
    </my-wrapper>
    <!-- stats -->

    <!-- attributes_race -->
    <my-wrapper hr v-if="Skills_All_Chose.length !== 0">
      <my-attribute
        v-for="name in Skills_All_Chose"
        :key="name"
        :title="name"
        :type="MY.skills[name].mod"
        plus
        :numb="getSummNumb('skills', name)"
        :icon="MY.skills[name].mod"
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
        :item="getProf_REX(name)"
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
        v-if="MY.ethnos.name !== 'common'"
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

import EthnosChoice from "@/components/EthnosChoice.vue";
import GenderChoice from "@/components/GenderChoice.vue";
import AgeWeight from "@/components/AgeWeight.vue";

export default {
  name: "App",
  components: {
    EthnosChoice,
    GenderChoice,

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
    this.getExtra(this.Stats_Pass, "stats");
      this.getExtra(this.Skills_Pass, "skills");
      this.getExtra(this.Lang_Pass, "languages");
    console.log();
  },

  computed: {
    Race_Set_Obj() {
      return this.MY.race.settings;
    },

    All_Ethnos_Obj() {
      return this.MY.race.settings.ethnos;
    },

    Lang_Not_Humman() {
      let arr = [];
      for (let i in this.languages) {
        if (!(this.languages || {})[i].human) {
          arr.push(this.languages[i]);
        }
      }
      return arr;
    },

    Lang_Humman() {
      let arr = [];
      for (let i in this.languages) {
        if ((this.languages || {})[i].human) {
          arr.push(this.languages[i]);
        }
      }
      return arr;
    },

    Lang_Activ() {
      let i = [];
      let j = [];
      if ((this.MY.race.proficiencies || {}).languages) {
        i = Object.values(this.MY.race.proficiencies.languages);
      }
      if ((this.MY.ethnos.proficiencies || {}).languages) {
        j = Object.values(this.MY.ethnos.proficiencies.languages);
      }
      return i.concat(j);
    },

    Lang_Pass() {
      return Object.values(this.languages).filter(
        (el) => !this.Lang_Activ.includes(el)
      );
    },

    Lang_Select() {
      return this.race_page.extra.languages;
    },

    Lang_Extra() {
      let arr = [];
      let obj = this.race_page.extra.languages;
      for (let i in obj) {
        arr.push(obj[i].name);
      }
      return arr;
    },

    Stats_Keys() {
      return Object.keys(this.MY.stats);
    },

    stats_Activ_Obj() {
      let i = this.MY.race.stats;
      let j = this.MY.ethnos.stats;
      let arr = Object.assign({}, i, j);
      return arr;
    },

    Stats_Activ() {
      return Object.keys(this.stats_Activ_Obj);
    },

    Stats_Pass() {
      return Object.keys(this.MY.stats).filter(
        (el) => !this.Stats_Activ.includes(el)
      );
    },

    stats_Select() {
      return this.race_page.extra.stats;
    },

    skills_Activ_Obj() {
      let i = this.MY.race.skills;
      let j = this.MY.ethnos.skills;
      let arr = Object.assign({}, i, j);
      return arr;
    },

    Skills_Activ() {
      return Object.keys(this.skills_Activ_Obj);
    },

    Skills_Pass() {
      return Object.keys(this.MY.skills).filter(
        (el) => !this.Skills_Activ.includes(el)
      );
    },

    skills_Select() {
      return this.race_page.extra.skills;
    },

    Skills_All_Chose() {
      return this.Skills_Activ.concat(this.skills_Select);
    },
  },
  watch: {
    "MY.race": "getFunction",
    "race_page.shown_languages": function (val, oldVal) {
      this.race_page.shown_humman_lang = false;
    },
    "MY.ethnos": "getFunction_2",
  },

  methods: {
    getFunction() {
      this.getNewEthnos();
      this.closeEthnos();
      this.closeColor('skin');
      this.closeColor('eyes');
      this.closeColor('hair');
      this.closePar("shown_characteristics", "custom_stats");
      this.closePar("shown_skills", "custom_skills");
      this.closePar("shown_languages", "custom_languages");
      this.getExtra(this.Stats_Pass, "stats");
      this.getExtra(this.Skills_Pass, "skills");
      this.getExtra(this.Lang_Pass, "languages");
    },

    getFunction_2() {
      this.getExtra_Ethnos(this.Stats_Pass, "stats");
      this.getExtra_Ethnos(this.Skills_Pass, "skills");
      this.getExtra_Ethnos(this.Lang_Pass, "languages");
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

    closeColor(name) {
      if (
        this.race_page[`shown_${name}_color`] === true &&
        this.MY.race.settings.color[name].length === 0
      ) {
        this.race_page[`shown_${name}_color`] = false;
        this.race_page.shown_home = true;
      } else {
        this.race_page[`shown_${name}_color`] === true;
      }
    },

    closePar(name_1, name_2) {
      if (
        this.race_page[name_1] === true &&
        this.MY.race.settings[name_2] === undefined
      ) {
        this.race_page[name_1] = false;
        this.race_page.shown_home = true;
      } else {
        this.race_page[name_1] === true;
      }
    },

    plus() {
      this.weight++;
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

    show(name, key) {
      if (name === "shown_ethnos" && this.MY.ethnos.name === "common") {
        this.race_page[name] === false;
      } else if (name === `shown_${key}_color` && this.MY.race.settings.color[key].length === 0) {
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

    showSkroll(name) {
      if (this.race_page[name] === false) {
        this.race_page[name] = true;
      } else {
        this.race_page[name] = false;
      }
    },

    showMY() {
      console.log(this.MY, this.race_page);
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
      if ((obj || {})[kay]) {
        arr = Object.values(obj[kay]);
      }
      return arr;
    },

    getProf_REX(kay) {
      let i = this.getProfArr(this.MY.race.proficiencies, kay);
      let j = this.getProfArr(this.MY.ethnos.proficiencies, kay);
      let k = this.getProfArr(this.race_page.extra, kay);
      return i.concat(j).concat(k);
    },

    getParNumb(par_1, par_2) {
      let i = 0;
      let j = 0;
      if (((this.MY.race || {})[par_1] || {})[par_2]) {
        i = this.MY.race[par_1][par_2];
      };
      if (((this.MY.ethnos || {})[par_1] || {})[par_2]) {
        j = this.MY.ethnos[par_1][par_2];
      };
      return i + j;
    },

    getSummNumb(name, item) {
      let i = 0;
      let activ_val = this[`${name}_Activ_Obj`][item];
      if (activ_val) {
        i = activ_val;
      } else if ((this.Race_Set_Obj || {})[`custom_${name}`]) {
        let extr_bool = this[`${name}_Select`].includes(item);
        let increment = this.Race_Set_Obj[`custom_${name}`][1];
        if (extr_bool) {
          i = increment;
        } else {
          i = 0;
        }
      } else {
        i = 0;
      }
      return i;
    },

    getExtra(arr_obj, name) {
      let arr = [];
      if ((this.Race_Set_Obj || {})[`custom_${name}`]) {
        let i = this.Race_Set_Obj[`custom_${name}`][0];
        arr = arr_obj.slice(0, i);
      }
      if ((this.MY.ethnos || {})[`custom_${name}`]) {
        let i = this.MY.ethnos[`custom_${name}`][0];
        arr = arr_obj.slice(0, i);
      }
      this.race_page.extra[name] = arr;
    },

    getExtra_Ethnos(arr_obj, name) {
      let arr = [];
      let race_custom = (this.Race_Set_Obj || {})[`custom_${name}`];
      let ethnos_custom = (this.MY.ethnos || {})[`custom_${name}`];
      if (ethnos_custom) {
        let i = ethnos_custom[0];
        arr = arr_obj.slice(0, i);
        this.race_page.extra[name] = arr;
      } else if(!race_custom && !ethnos_custom) {
        this.race_page.extra[name] = arr;
      } else {
        return null
      }
    },

    getExtraActiv(active, selekt, item, name) {
      if (active || selekt) {
        return null;
      } else {
        let arr = this.race_page.extra[name];
        arr.splice(0, 1);
        arr.push(item);
        return (this.race_page.extra[name] = arr);
      }
    },

    getSelectLang() {
      if (this.race_page.extra.languages) {
        return this.race_page.extra.languages;
      } else {
        return this.Lang_Pass[0].name;
      }
    },

    getSkillMarg(i, name, k) {
      if (i === 0) {
        return true
      }
      let obj = Object.values(name)
      if (obj[i].mod !== obj[i - 1].mod) {
        return true
      }
      return false
    },
  },
};
</script>

<style>
body {
  background-color: #0e1518;
}

.skill_marg {
  margin-top: 26px;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* .skale_division_top {
  width: 1px;
  height: 32px;
  flex: 1 1 auto;
} */

.division_off {
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.3;
}

.division_active {
  background: #ffffff;
}

.division_filling_back {
  background: rgba(255, 255, 255, 0.4);
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end; */
}

.division_filling_front {
  background: #ffffff;
  height: calc(100% / 30 * (30 - 20));
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
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
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

.size {
  /* width: 35px; */
  /* font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300; */
  font-size: 11.45px;
  /* line-height: 18px; */
  /* text-align: right; */
  /* letter-spacing: 0.06em;
  color: #ffffff; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  height: 100%;
  /* background-color: transparent; */
  padding-top: 4px;
  /* padding-top: 36px;
  margin-right: 32px; */
  /* position: absolute;
  right: 0;
  bottom: 32px; */
  /* text-align: end; */
  position: relative;
}

.size::after {
  content: '';
  position: absolute;
  top: -32px;
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0.3;
}

.size_growth {
  /* width: 42px; */
  /* font-family: "JetBrains Mono";
  font-style: normal;
  font-weight: 300; */
  font-size: 11.45px;
  /* line-height: 18px;
  text-align: right;
  letter-spacing: 0.06em;
  color: #ffffff; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  height: 100%;
  /* background-color: transparent; */
  padding-top: 4px;
  /* text-align: end; */
  position: relative;
}

.skale {
  height: 100%;
  display: flex;
  gap: 0 12px
}

.skale_numb_down {
  /* text-align: end; */
  margin-bottom: -4px;
  align-self: flex-end;
  flex: 1 1 auto;
}

.skale_numb_top {
  /* text-align: end; */
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

.skroll_list {
  position: relative;
  padding-left: 16px;
  height: 18px;
  margin: 34px 0;
  cursor: pointer;
}

.flex_gap-8 {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skroll_list_closed::after {
  position: absolute;
  content: url(@/assets/img/icon/arrow_down_small.svg);
  top: 0px;
  right: 16px;
}

.skroll_list_open::after {
  position: absolute;
  content: url(@/assets/img/icon/arrow_top_small.svg);
  top: 0px;
  right: 16px;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.8, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
/* -------------slider-grwwth------------------- */
</style>
