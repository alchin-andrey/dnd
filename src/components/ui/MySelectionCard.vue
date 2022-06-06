<template>
  <div
    class="pasive_card"
    :class="{ 
      active_card: !passive,
      colors_card: colors_card,
      }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MySelectionCard",
  props: {
    passive: {
      type: Boolean,
      default: false,
    },
    colors_card: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.active_card {
  cursor: pointer;
}

.active_card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.pasive_card {
  padding: 16px;
  width: 394px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.colors_card {
  background: #000000;
}

</style>