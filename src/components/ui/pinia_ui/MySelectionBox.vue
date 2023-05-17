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

  <!-- <AppMobDialog v-else :show="shown">
    <template v-slot:header>
      <div class="mob-header header-top">
        <div class="btm-wrapp">
          <div class="btm-close" @click="showHome()">
            <AppSvg class="svg-18 svg-main-f" :path="ui_icon.close" />
          </div>
        </div>
      </div>
    </template>
    <slot></slot>
  </AppMobDialog> -->

  <Transition v-else :duration="{ enter: 700, leave: 700 }" name="nested">
    <div v-if="shown" class="dialog" @click.stop>
      <div class="dialog__wrapp int-400" @click.stop>
        <div class="mob-main-header" :class="{'mob-full-header': !not_mob_header}">
          <div class="btm-wrapp">
            <div class="btm-close" @click="showHome()">
              <AppSvg class="svg-18 svg-main-f" :path="ui_icon.close" />
            </div>
          </div>
        </div>
        <div class="dialog__content" :class="{'pd-t-108': !not_mob_header}">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
  name: "MySelectionBox",
  data() {
    return {
      ui_icon: ui_icon,
    };
  },
  props: {
    shown: {
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
.mob-main-header {
	width: 100%;
	/* position: relative; */
	z-index: 1000;
  position: fixed;
}
.mob-full-header {
	height: 88px;
	background: #0E1518;
	box-shadow: 0px 4px 20px #000000;
}

.btm-wrapp {
  padding: 20px 20px 0 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 434px;
}

.btm-close {
  min-height: 48px;
  width: 48px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  cursor: pointer;
}

.btm-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

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

/* @media (max-width: 1279px) {
  .sidebar_selection {
    left: 0;
    top: 100%;
  }

  .sidebar_selection_open {
    top: 0;
  }

  .selection_box {
    max-width: 100%;
    height: 100%;
    padding: 0;
    position: relative;
    padding: 20px;
  }

  .slide-fade-sidebar-leave-to {
    transform: translateY(100px);
    opacity: 0;
  }
} */

/* dialog */
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0e1518;
  position: fixed;
  z-index: 500;
}

.dialog__wrapp {
  z-index: 501;
  cursor: auto;
  /* overflow-y: scroll;
  scrollbar-width: none; */
  height: 100%;
  /* padding-bottom: 20px; */
  /* padding: 20px 0; */
}

.dialog__wrapp::-webkit-scrollbar {
  width: 0;
}

.dialog__content {
  padding-top: 88px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 394px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  overflow-y: scroll;
  scrollbar-width: none;
}

.pd-t-108 { 
  padding-top: 108px;
  max-width: auto;
  width: 394px;
}

.dialog__content::-webkit-scrollbar {
  width: 0;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.5s ease-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.2s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

.nested-enter-active .dialog__wrapp,
.nested-leave-active .dialog__wrapp {
  transition: all 0.5s ease-out;
}

.nested-enter-active .dialog__wrapp {
  transition-delay: 0.2s;
}

.nested-enter-from .dialog__wrapp,
.nested-leave-to .dialog__wrapp {
  transform: translateY(100px);
  opacity: 0.001;
}
</style>
