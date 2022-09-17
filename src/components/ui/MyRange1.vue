<template>
  <div class="range_slider">
    <input

      type="range"
      class="vertical range-slider"
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
      class="range_bottom"
    ></div>
    <div class="range_value">{{ t_Unit }}</div>
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
    }
  },


  computed: {
    t_Unit() {
      if (this.lvl) {
        return `${this.inputValue}${this.t('level_unit')} ${this.t('level')}`;
      }

    },
    // Range_Width() {
    //   return `calc(100vh - 64px - ((100vh - 64px) / ${this.max_range} * ${this.min_range} - 30px) - ((100vh - 64px) - ((100vh - 64px) / 20 * ${this.max_range})))`;
    // },
    // Range_Margin() {
    //   console.log(this.min_range, this.max_range);
    //   return `calc((100vh - 64px - ((100vh - 64px) / ${this.max_range} * ${this.min_range} - 30px) - ((100vh - 64px) - ((100vh - 64px) / ${this.max_range} * ${this.max_range}))) / 2 - 172px)`;
    // },
    Range_Bottom() {
      return `calc((100vh - 64px) / ${this.max_range} * ${this.min_range} - 30px)`;
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
.range_slider {
  width: 344px;
  height: 100%;
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
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
  height: calc(100%);
  width: 100%;
  /* background: transparent; */
  cursor: pointer;
  border-radius: 0 12px 12px 0;
  overflow: hidden;
}

.range-slider input[type=range][orient=vertical]::-webkit-slider-runnable-track, .range-slider input[type=range][orient=vertical]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.range-slider input[type=range][orient=vertical]::-webkit-slider-runnable-track {
  border: none;
  background: #343440;
  width: 4px;
  border-color: #343440;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #3D3D4A;
}
.range-slider input[type=range][orient=vertical]::-moz-range-track {
  border: none;
  background: #343440;
  width: 4px;
  border-color: #343440;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #3D3D4A;
}
.range-slider input[type=range][orient=vertical]::-ms-track {
  border: none;
  background: #343440;
  width: 4px;
  border-color: #343440;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #3D3D4A;
  color: transparent;
  height: 100%;
}
.range-slider input[type=range][orient=vertical]::-ms-fill-lower, .range-slider input[type=range][orient=vertical]::-ms-fill-upper, .range-slider input[type=range][orient=vertical]::-ms-tooltip {
  display: none;
}
.range-slider input[type=range][orient=vertical]::-webkit-slider-thumb {
  width: 30px;
  height: 30px;
  opacity: 0;
}
.range-slider input[type=range][orient=vertical]::-moz-range-thumb {
  width: 30px;
  height: 30px;
  opacity: 0;
}
.range-slider input[type=range][orient=vertical]::-ms-thumb {
  width: 30px;
  height: 30px;
  opacity: 0;
}







/* ::-webkit-slider-runnable-track {
  background: rgba(255, 255, 255, 0.06);
width: 100%;
}

::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 30px;
  width: 100%;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 100vh 0px 100vh #ffffff;
  cursor: ns-resize;
  border: 0px;
  border-radius: 0 !important;
  box-sizing: border-box;
}

::-moz-range-track {
  background: rgba(255, 255, 255, 0.06);
  width: 100%;
}

::-moz-range-thumb {
  height: 30px;
  width: 100%;
  background: url("@/assets/img/icon/slide_knob.svg") center center no-repeat;
  background-color: #ffffff;
  box-shadow: -100vh 100vh 0px 100vh #ffffff;
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
  width: 100%;
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
  width: 1000%;
  border: none;
}

::-ms-tooltip {
  display: none;
} */


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