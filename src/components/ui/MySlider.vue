<template>
  <div class="numb jbm-300">
    <div>{{ numb }}</div>
  </div>
  <div class="title jbm-300">
    <div>{{ title }}</div>
  </div>
  <div class="main">
    <div>{{ arr }}</div>
  </div>
  <div class="arrows">
    <div><img alt="arrow_left" src="@/assets/img/icon/arrow_left.svg" /></div>
    <div><img alt="arrow_right" src="@/assets/img/icon/arrow_right.svg" /></div>
  </div>
</template>

<script>
export default {
  name: "MySlider",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    numb: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    arr: {
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
.numb {
  height: 18px;
}

.title {
  height: 18px;
  margin-top: 36px;
}

.main {
  height: 24px;
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

.arrows {
  margin-top: 18px;
  width: 52px;
  height: 18px;
  display: flex;
  justify-content: space-between;
}
.arrows img{
  cursor: pointer;
}
</style>