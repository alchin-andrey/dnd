<template>
  <div class="column">
    <div class="column_title jbm-300">
      <div>{{ title }}</div>
    </div>
    <div class="column_link int-400">
      <div>{{ Number(value) }} {{ unit }}</div> 
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
      type: String,
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
};
</script>

<style scoped>
.column {
  height: 18px;
  display: flex;
  align-items: center;
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

title="Скорость"
        type="Пешком"
        :numb="speed"
        feet
        icon="speed"


 <!-- <my-attribute
        title="Анализ"
        type=""
        plus
        :numb="analysis"
        icon="analysis"
        cube_zero
      ></my-attribute>

      <my-attribute
        title="Внимательность"
        type=""
        plus
        :numb="attention"
        icon="attention"
        cube_zero
      ></my-attribute>

      <my-attribute
        title="Запугивание"
        type=""
        plus
        :numb="intimidation"
        icon="intimidation"
        cube_zero
      ></my-attribute> -->