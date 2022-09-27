<template>
  <div
    class="sidebar_selection"
    :class="{ sidebar_selection_open: shown }"
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
  position: absolute;
  left: -426px;
  opacity: 0;
  overflow-y: scroll;
  padding: 0;
  -webkit-transition: 0.4s ease-in-out;
  -moz-transition: 0.4s ease-in-out;
  -o-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

.sidebar_selection::-webkit-scrollbar {
  width: 0;
}

.sidebar_selection_open {
  opacity: 1;
  left: 0px;
  -webkit-transition: 1s ease-in-out;
  -moz-transition: 1s ease-in-out;
  -o-transition: 1s ease-in-out;
  transition: 1s ease-in-out;
}

.selection_box {
  width: 426px;
  height: 100vh;
  padding: 32px 32px 32px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}

.selection_box::-webkit-scrollbar {
  width: 0;
}

.slide-fade-sidebar-enter-active {
  transition: all 0.8s ease-out;
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