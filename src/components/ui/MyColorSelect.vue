<template>
  <my-selection-card passive colors_card>
    <div class="colors_box jbm-300" @mouseleave="hoverStop()">
      <div v-for="(val, i) in color" :key="i" class="colors_row">
        <my-color-block
          v-for="(val, j) in color[i]"
          :key="j"
          @mouseover="hoverColor(i, j)"
          @click="choiceColor(body_part, i, j)"
          :color="color[i][j].hex"
          :active_link="color[i][j].hex"
          :select_link="Char_Color.hex"
          :ethnos_color="getEthnosColor(color[i][j], body_part)"
          :race_color="getRaceColor(color[i][j], body_part)"
        >
        </my-color-block>
      </div>
    </div>
    <my-card-text-color
      :title="Hower ? Hower.name : Char_Color.name"
      :ethnos_color="
        Hower
          ? getEthnosColor(Hower, body_part)
          : getEthnosColor(Char_Color, body_part)
      "
      :race_color="
        Hower
          ? getRaceColor(Hower, body_part)
          : getRaceColor(Char_Color, body_part)
      "
    ></my-card-text-color>
  </my-selection-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MyColorSelect",
  props: {
    body_part: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      hower_link: `${this.body_part}_hower`,
    };
  },
  computed: {
    ...mapGetters(["color"]),

    Hower() {
      return this.$root.race_page[this.hower_link];
    },

    Char_Color() {
      if (
        this.$root.MY.color[this.body_part] === null &&
        this.$root.MY.ethnos.name === "common"
      ) {
        return this.$root.MY.race.settings.color[this.body_part][0];
      } else if (this.$root.MY.color[this.body_part] === null) {
        return this.$root.MY.ethnos.color[this.body_part][0];
      } else {
        return this.$root.MY.color[this.body_part];
      }
    },
  },
  methods: {
    hoverStop() {
      this.$root.race_page[this.hower_link] = null;
    },
    hoverColor(i, j) {
      console.log(this.color);
      this.$root.race_page[this.hower_link] = this.color[i][j];
    },
    choiceColor(value, i, j) {
      this.$root.race_page.color_selected[value] = this.color[i][j];
      this.$root.MY.color[value] = this.color[i][j];
    },
    getEthnosColor(obj, value) {
      if (this.$root.MY.ethnos.name === "common") {
        return false;
      } else {
        return this.$root.MY.ethnos.color[value].includes(obj);
      }
    },
    getRaceColor(obj, value) {
      return this.$root.MY.race.settings.color[value].includes(obj);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>