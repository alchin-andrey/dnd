<template>
  <div class="column" :class="{ active_link: active}">
    <div class="column_title jbm-300" @click.stop>
      <div>{{ title }}</div>
    </div>
    <div class="column_link int-400 hover">
      <div>{{value}} {{age ? getAgeUnits(value) : unit}}</div> 
      <div class="note">{{ note }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyController",
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    value: {
      type: Number,
      default: null,
    },
    unit: {
      type: String,
      default: null,
    },
    note: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    age: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    modelValue: {
      handler() {
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
        getAgeUnits(numb) {
      let mod10 = Math.abs(numb % 10);
      let mod100 = Math.abs(numb % 100);
      if (mod100 > 10 && mod100 < 20) {
        return 'лет'
      } else if (mod10 >= 2 && mod10 <= 4) {
        return 'года'
      } else if (mod10 === 1) {
        return 'год'
      } else {
        return 'лет'
      }
    },
  },
};
</script>

<style scoped>
.column {
  height: 18px;
  display: flex;
  align-items: center;
  position: relative;
}

.hover:hover::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  left: -165px;
  top: calc(50% - 1px);
  background: #FFFFFF;
}

.active_link:before {
  content: '';
  position: absolute;
  width: 35px;
  height: 2px;
  left: -39px;
  top: calc(50% - 1px);
  background: #FFFFFF;
}

.column_title {
  width: 120px;
}

.column_link {
  width: 110px;
  margin-left: 4px;
  position: relative;
  display: flex;
  cursor: pointer;
}

.note {
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.2);
}

.column_link::after {
  content: url(@/assets/img/icon/arrow_slider.svg);
  position: absolute;
  right: -22px;
  top: -2px;
  cursor: ew-resize;
}
</style>