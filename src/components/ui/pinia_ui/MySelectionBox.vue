<template>
  <div
  class="sidebar_selection"
    :class="{
      sidebar_selection_open: shown,
      }"
  >
    <transition name="slide-fade-sidebar">
      <div v-if="shown" class="selection_box">
        <slot></slot>
      </div>
    </transition>
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
  .sidebar_selection {
  height: 100%;
  left: 426px;
  opacity: 0;
  position: absolute;
  overflow-y: scroll;
  scrollbar-width: none;

  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

.sidebar_selection::-webkit-scrollbar {
  width: 0;
  display: none;
}

.sidebar_selection_open {
  opacity: 1;
  left: 0px;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

.selection_box {
  width: 426px;
  height: 100vh;
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  scrollbar-width: none;
}

.selection_box::-webkit-scrollbar {
  width: 0;
}

.slide-fade-sidebar-enter-active {
  transition: all 0.8s ease-in-out;
}

.slide-fade-sidebar-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-sidebar-enter-from,
.slide-fade-sidebar-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
