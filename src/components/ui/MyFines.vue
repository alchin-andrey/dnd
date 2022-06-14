<template>
  <div class="column">
    <div class="icon">
      <img :src="getIcon(icon)" :alt="icon" />
    </div>
    <div class="text int-400">
      <span
        :class="{
          positive: title !== 'disadvantage',
          negative: title === 'disadvantage',
        }"
        >{{ t(title) }}</span
      >
      {{ t(details) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFines",
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
    title: {
      type: String,
      default: null,
    },
    details: {
      type: String,
      default: null,
    },
    icon: {
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
  methods: {
    getIcon(name) {
      return require(`@/assets/img/icon/fines/${name}.svg`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  display: flex;
  min-height: 18px;
}

.text {
  margin-left: 4px;
  padding: 2px 0 1px 0;
  text-align: start;
}

.text:first-letter {
  text-transform: uppercase;
}

.positive {
  color: #05ff00;
}

.negative {
  color: #ff0000;
}
</style>