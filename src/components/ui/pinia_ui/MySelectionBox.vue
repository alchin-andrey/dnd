<template>
  <div
    v-if="screen_Max"
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

  <AppMobDialog 
  v-else
  :title="title"
  :select="select"
  :menu="menu"
  :shown="shown" 
  :not_mob_pd="not_mob_pd" 
  :not_mob_header="not_mob_header" 
  :mob_fixed="mob_fixed"
  >
    <slot></slot>
  </AppMobDialog>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
  name: "MySelectionBox",
  props: {
    title: {
      type: String,
      default: null,
    },
    select: {
      type: String,
      default: null,
    },
    menu: {
      type: Object,
			default: {},
    },
    shown: {
      type: Boolean,
      default: false,
    },
    mob_fixed: {
      type: Boolean,
      default: false,
    },
    not_mob_pd: {
      type: Boolean,
      default: false,
    },
    not_mob_header: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(usePagesStore, ["screen_Max"]),
  },
  methods: {
    ...mapActions(usePagesStore, ["showHome"]),
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
  min-width: 426px;
  height: 100%;
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
