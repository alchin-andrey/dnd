<template>
  <div
    class="pasive_card"
    :class="{
      active_card: !passive && !basic,
      colors_card: colors_card,
      basic: basic,
      selection_card_active: get_Active,
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
    basic: {
      type: Boolean,
      default: false,
    },
    active_link: {
      type: String,
      default: null,
    },
    select_link: {
      type: String,
      default: null,
    },
    active_boll_link: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    get_Active() {
      console
      if (this.active_link !== null) {
        return this.active_link === this.select_link;
      } else if (this.active_boll_link) {
        return this.active_boll_link;
      } else {
        return null;
      }
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
  /* width: 394px; */
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(60px);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.colors_card {
  height: 100%;
  background: #000000;
}

.basic {
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 14px !important;
}

.selection_card_active {
  border: 2px solid #ffffff;
  padding: 14px !important;
}
</style>