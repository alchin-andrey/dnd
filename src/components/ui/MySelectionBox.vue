<template>
  <div v-if="shown" class="selection_box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MySelectionBox",
  props: {
    shown: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.selection_box {
  width: 426px;
  padding: 32px 0 28px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}

.selection_box::-webkit-scrollbar {
  width: 0;
}
</style>