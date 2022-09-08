<template>
  <div class="range_slider">
    <input
    :style="{ 
      'margin-bottom': Range_Margin,
      'width': Range_Width 
          }"
      type="range"
      class="vertical"
      :min="min_range"
      :max="max_range"
      v-model.number="inputValue"
      step="1"
      orient="vertical"
    />
    <div 
    :style="{ 
      height: Range_Bottom,
          }"
    class="range_bottom"></div>
    <div class="range_value">{{ t_Unit }}</div>
  </div>
</template>

<script>
export default {
  name: "MyRange",
  data() {
    return {
      // minRange: '',
      // maxRange: '',
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
    // unit: {
    //   type: String,
    //   default: null,
    // },
    // value_range: {
    //   type: Number,
    //   default: null,
    // },
  },
  // mounted() {
  //       this.inputValue = this.value_Range;
  //   },

  computed: {
    // min_Range() {
    //   return this.$root.MY.race.settings.height.min;
    // },
    // max_Range() {
    //   return this.$root.MY.race.settings.height.max;
    // },
    // value_Range() {
    //   if (this.$root.MY.height) {
    //     return this.$root.MY.height;
    //   } else {
    //     return (this.min_Range + this.max_Range) / 2;
    //   }
    // },
    t_Unit() {
      return `${this.valueRange()} ${this.t("cm")}`;
    },
    Range_Margin() {
      console.log(this.min_range, this.max_range)
      return `calc((100vh - 64px - ((100vh - 64px) / 210 * ${this.min_range} - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * ${this.max_range}))) / 2 - 172px - 1px)`
    },
    Range_Width() {
      return `calc(100vh - 64px - ((100vh - 64px) / 210 * ${this.min_range} - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * ${this.max_range})))`
    },
    Range_Bottom() {
      return `calc((100vh - 64px) / 210 * ${this.min_range} - 30px)`
    }
  },
  watch: {
    // "$root.MY.race": {
    //   handler() {
    //     console.log('изменилось свойство b')
    //     this.inputValue = this.$root.MY.height;
    //   },
    //   immediate: true,
    // },
    // inputValue: {
    //   handler() {
    //     this.$root.MY.height = Number(this.inputValue);
    //   },
    //   immediate: true,
    // },

    modelValue: {
      handler() {
        // this.minRange = this.min_range;
        // this.maxRange = this.max_range;
        // console.log(this.modelValue, this.min_range, this.max_range)
        this.inputValue = this.modelValue;
      },
      immediate: true,
    },
    inputValue: {
      handler() {
        this.$emit("update:modelValue", this.inputValue);
      },
    },
  },
  methods: {
    valueRange() {
      if (this.$root.MY.height) {
        return this.$root.MY.height;
      } else {
        return (this.min_Range + this.max_Range) / 2;
      }
    },
  },
};
</script>

<style scoped>
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

input[type="range"].vertical {
  -webkit-appearance: none;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.06);
  min-height: 344px;
  border-radius: 0 12px 12px 0;
  overflow: hidden;
}

::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 30px;
  min-height: 344px;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 0 0 100vh #ffffff;
  cursor: ns-resize;
}

.slider::-moz-range-thumb {
  width: 30px;
  min-height: 344px;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 0 0 100vh #ffffff;
  cursor: ns-resize;
}

::-ms-fill-lower {
  background: #ffffff;
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
  height: calc((100vh - 64px) / 210 * 90 - 30px);
  background-color: #ffffff;
}

input[type="range"] {
  transform: rotate(270deg);
  /* margin-bottom: calc((100vh - 64px - ((100vh - 64px) / 210 * 90 - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * 120))) / 2 - 172px - 1px);
  width: calc(100vh - 64px - ((100vh - 64px) / 210 * 90 - 30px) - ((100vh - 64px) - ((100vh - 64px) / 210 * 120))); */
}
</style>