<template>
  <div
    class="sidebar_wrap"
    :class="{ sidebar_wrap_open: $root.race_page.shown_selection }"
  >
    <!-- Превью -->
    <my-selection-box :shown="$root.race_page.shown_logo">
      <Description />
    </my-selection-box>
    <!-- Превью -->

    <!-- Смена языка -->
    <my-selection-box :shown="$root.race_page.shown_lang">
      <my-selection-card
        v-for="item in $root.dic.lang"
        :key="item"
        @click="getLangSite(item.mark, item.icon)"
        :select_link="item.mark"
        :active_link="$root.dic.select_lang"
      >
        <LangCard :title="item.icon" :text="item.name" />
      </my-selection-card>
    </my-selection-box>
    <!-- Смена языка -->

    <!-- Этнос-->
    <my-selection-box :shown="$root.race_page.shown_ethnos">
      <EthnosChoice />
    </my-selection-box>
    <!-- Этнос -->

    <!-- Гендр -->
    <my-selection-box :shown="$root.race_page.shown_gender">
      <GenderChoiceStore />
    </my-selection-box>
    <!-- Гендр -->

    <!-- Цвет кожи -->
    <my-selection-box :shown="$root.race_page.shown_skin_color">
      <my-color-select body_part="skin" />
    </my-selection-box>
    <!-- Цвет кожи -->

    <!-- Цвет глаз -->
    <my-selection-box :shown="$root.race_page.shown_eyes_color">
      <my-color-select body_part="eyes" />
    </my-selection-box>
    <!-- Цвет глаз -->

    <!-- Цвет волос -->
    <my-selection-box :shown="$root.race_page.shown_hair_color">
      <my-color-select body_part="hair" />
    </my-selection-box>
    <!-- Цвет волос -->

    <!-- Уровень -->
    <my-selection-box :shown="$root.race_page.shown_lvl">
      <div class="flex_options">
        <MyRange v-model.number="$root.MY.level" lvl />
        <MyRangeSize lvl />
      </div>
    </my-selection-box>
    <!-- Уровень -->

    <!-- Возраст -->
    <my-selection-box :shown="$root.race_page.shown_age">
      <div class="flex_options">
        <MyRange v-model.number="$root.MY.age" age />
        <MyRangeSize age />
      </div>
    </my-selection-box>
    <!-- Возраст -->

    <!-- Рост -->
    <my-selection-box :shown="$root.race_page.shown_height">
      <div class="flex_options">
        <MyRange v-model.number="$root.MY.height" height />
        <mySizeGrowth />
      </div>
    </my-selection-box>
    <!-- Рост -->

    <!-- Вес -->
    <my-selection-box :shown="$root.race_page.shown_weight">
      <div class="flex_options">
        <MyRange v-model.number="$root.MY.weight" weight />
        <MyRangeSize weight />
      </div>
    </my-selection-box>
    <!-- Вес -->

    <!-- Характеристики -->
    <my-selection-box :shown="$root.race_page.shown_characteristics">
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
        <my-card-text text="stats_base_details"> </my-card-text>
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
      <my-card-text text="skills_details"> </my-card-text>
      <my-selection-card
        v-for="(val, name, i) in MY.skills"
        :key="name"
        @click="
          getExtraActiv(false, skills_Select.includes(name), name, 'skills')
        "
        :class="{ skill_marg: getSkillMarg(i, MY.skills, name) }"
        :active_boll_link="skills_Select.includes(name)"
      >
        <my-attribute :title="name" plus :numb="mastery" :icon="val.mod">
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
          skroll_list_closed: !race_page.shown_human_lang,
          skroll_list_open: race_page.shown_human_lang,
        }"
        v-vpshow="race_page.shown_human_lang"
        @click="showSkroll('shown_humman_lang')"
      >
        {{ Lang_Humman_Title }}
      </div>
      <transition name="scroll-fade">
        <div v-if="race_page.shown_human_lang" class="flex_gap-8">
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
</template>

<script>
// import Welcome from "@/components/Welcome.vue";

export default {
  // components: { Welcome },
  name: "RaceSettingsSelection",
  // data() {
  //   return {
  //     shown_welcome: true,
  //   };
  // },
  computed: {
    Stats_Keys() {
      return Object.keys(this.$root.MY.stats);
    },
  },
  methods: {
    getLangSite(name, icon) {
      this.$root.dic.select_lang = name;
      this.$root.dic.select_lang_icon = icon;
    },

    getSummNumb(name, item) {
      let i = 0;
      let activ_val = this.$root[`${name}_Activ_Obj`][item];
      if (activ_val) {
        i = activ_val;
      } else if ((this.$root.Race_Set_Obj || {})[`custom_${name}`]) {
        let extr_bool = this.$root[`${name}_Select`].includes(item);
        let increment = this.$root.Race_Set_Obj[`custom_${name}`][1];
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
  },
};
</script>

<style scoped>
.sidebar_wrap {
  height: 100%;
  display: flex;
  width: 0;
  transition: all 0.4s ease-in-out;
  position: relative;
}

.sidebar_wrap_open {
  width: 426px;
  /* padding: 32px 32px 32px 0; */
  transition: all 0.8s ease-in-out;
}

.flex_options {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
}

.ethnos_attributes {
  color: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0 0 26px 16px;
}
</style>
