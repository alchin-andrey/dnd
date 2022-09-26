<template>
  <div class="flex_options">
  <div class="range_slider">
    <input
      :style="{
        'margin-bottom': Range_Margin,
        width: Range_Width,
      }"
      type="range"
      class="vertical"
      :min="min_range"
      :max="max_range"
      v-model.number="inputValue"
      step="1"
    />
    <div
      :style="{
        height: Range_Bottom,
      }"
      class="range_bottom"
    ></div>
    <div class="range_value">{{ t_Unit }}</div>
  </div>
<MyRangeSize lvl/>
</div>
</template>

<script>
export default {
  name: "MyRange",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    min_range: {
      type: Number,
      default: null,
    },
    max_range: {
      type: Number,
      default: null,
    },
    lvl: {
      type: Boolean,
      default: false,
    },
    // arr: {
    //   type: Array,
    //   default: [],
    // },
  },


  computed: {
    t_Unit() {
      if (this.lvl) {
        return `${this.inputValue}${this.t('level_unit')} ${this.t('level')}`;
      }

    },
    Range_Width() {
      return `calc((100vh - 64px) - ((100vh - 64px) / ${this.max_range} * ${this.min_range}))`;
    },
    Range_Margin() {
      return `calc(((100vh - 64px) - ((100vh - 64px) / ${this.max_range} * ${this.min_range})) / 2 - 172px - 1px)`;
    },
    Range_Bottom() {
      return `calc((100vh - 64px) / ${this.max_range} * ${this.min_range})`;
    },
  },
  watch: {
    // "$root.MY.race": {
    //   handler() {
    //     setTimeout(() => {
    //       this.inputValue = this.$root.MY.height + 1;
    //       this.$emit("update:modelValue", this.inputValue);
    //       this.inputValue = this.$root.MY.height - 1;
    //       this.$emit("update:modelValue", this.inputValue);
    //     }, 1);
    //   },
    //   immediate: true,
    // },
    modelValue: {
      handler() {
        this.inputValue = this.modelValue;
        // this.$root.race_page.height_kof = this.max_range - this.inputValue;
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit("update:modelValue", this.inputValue);
        // this.$root.race_page.height_kof = this.max_range - this.inputValue;
      },
    },
  },
};
</script>

<style scoped>

.passive {
  color: rgba(255, 255, 255, 0);
}

.range_slider {
  width: 344px;
  height: 1000vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

input[type="range"] {
  -webkit-appearance: none;
  height: 344px;
  background: transparent;
  cursor: pointer;
  -webkit-transform:rotate(-90deg);
  -moz-transform:rotate(-90deg);
  -ms-transform:rotate(-90deg);  
  transform:rotate(-90deg);  
  border-radius: 0 12px 12px 0;
  overflow: hidden;
}

::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.06);
  min-height: 344px;
}

::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 30px;
  min-height: 344px;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 0 0 100vh #ffffff;
  cursor: ns-resize;
  border: 0px;
  border-radius: 0 !important;
  box-sizing: border-box;
}

::-moz-range-track {
  background: rgba(255, 255, 255, 0.06);
  min-height: 344px;
}

::-moz-range-thumb {
  width: 30px;
  height: 344px;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 0 0 100vh #ffffff;
  cursor: ns-resize;
  border: 0px;
  border-radius: 0 !important;
  box-sizing: border-box;
}

::-ms-fill-lower {
  background: #ffffff;
}

::-ms-thumb {
  background: #fff;
  height: 344px;
  box-sizing: border-box;
}

::-ms-ticks-after {
  display: none;
}

::-ms-ticks-before {
  display: none;
}

::-ms-track {
  background: #ddd;
  color: transparent;
  width: 344px;
  border: none;
}

::-ms-tooltip {
  display: none;
}

.range_value {
  position: absolute;
  left: 16px;
  bottom: 11px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #000000;
  background-color: #ffffff;
}

.range_bottom {
  width: 344px;
  background-color: #ffffff;
}
</style>