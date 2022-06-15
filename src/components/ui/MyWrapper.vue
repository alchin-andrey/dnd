<template>
  <div class="wrapper"
  :class="{ gap_8: gap_8 }">
    <slot></slot>
  </div>
  <div v-if="hr" class="hr"></div>
</template>

<script>
export default {
  name: "MyWrapper",
  props: {
    gap_8: {
      type: Boolean,
      default: false,
    },
    hr: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hr {
  height: 1px;
  margin: 26px 0;
  background: rgba(255, 255, 255, 0.2);
}
.gap_8 {
  gap: 8px;
}
</style>