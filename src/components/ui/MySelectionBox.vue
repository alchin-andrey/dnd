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
  padding-top: 32px;
  overflow-y: scroll;
}

.selection_box::-webkit-scrollbar {
  width: 0;
}
</style>