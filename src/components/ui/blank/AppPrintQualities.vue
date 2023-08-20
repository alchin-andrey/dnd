<template>
  <div class="wrap-cell">
    <section class="title-head jbm-500-22">
      <div class="icon">
        <svg class="main_svg" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" v-html="atribute_icon[title]" />
      </div>
      <div class="cell-item">{{ t_Title }}</div>
    </section>

    <section class="flex-row-jc mr-t-32" v-if="shown_Fatigue">
      <AppPrintFating class="cell-size" classic />
    </section>

    <section class="flex-row-jc mr-t-8" v-if="shown_Saving">
      <AppPrintSavingTrows class="cell-size" classic />
    </section>

    <section class="int-600-72 numb" :class="{ 'mr-28': list_3 }" v-if="!title_numb && numb">
      {{ value_Numb }}
    </section>

    <section class="flex-vis" v-if="title_numb || hp_Dice">
      <div class="hp-text jbm-500-22" v-if="title_numb">{{ t_Temporary }}</div>
      <div class="visual">

        <div class="cube_zero" v-if="hp_Dice" v-for="n in cube_Numb_Zero" :key="n" />
      </div>
    </section>
  </div>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
  name: "AppPrintQualities",
  data() {
    return {
      atribute_icon: atribute_icon,
    };
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    numb: {
      type: Number,
      default: null,
    },
    title_numb: {
      type: Boolean,
      default: false,
    },
    list_3: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapState(useMYStore, ["MY"]),
    t_Title() {
      const str = this.t(this.title);
      if (this.title_numb) return `${str} ${this.numb}`
      else return str;
    },

    t_Temporary() {
      return `${this.t("temporary")}:`;
    },

    hp_Dice() {
      return this.title == "hp_dice"
    },

    value_Numb() {
      const unit = this.numb > 0 ? "+" : "";
      if (this.title == "initiative") return unit + this.numb
      if (this.hp_Dice) return `d${this.numb}`
      else return this.numb;
    },

    cube_Numb_Zero() {
      return this.MY.level;
    },

    shown_Fatigue() {
      return this.title == "fatigue"
    },

    shown_Saving() {
      return this.title == "saving_throws"
    },
  },
};
</script>

<style scoped>
.wrap-cell {
  height: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
}

.title-head {
  height: 36px;
  display: flex;
  align-items: center;
}

.cell-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.cell-size {
  width: 112px;
}

.icon {
  width: 36px;
  height: 36px;
  margin-right: 2px;
}

.main_svg {
  width: 36px;
  height: 36px;
  fill: black;
}

.numb {
  text-align: center;
  margin-top: 76px;
}

.mr-28 {
  margin-top: 28px;
}

.flex-vis {
  flex: 1 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;
}

.hp-text {
  flex-grow: 1;
  margin: 0 0 8px 38px;
}

.visual {
  display: flex;
  justify-self: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  gap: 4px;
}

.cube_zero {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid #000000;
}
</style>
