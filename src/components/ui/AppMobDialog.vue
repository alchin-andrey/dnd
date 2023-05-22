<template>
  <Teleport to="body">
  <Transition :duration="{ enter: 700, leave: 700 }" name="nested">
    <div v-if="shown" class="dialog" @click.stop>
        <div class="mob-main-header" :class="{'mob-full-header': !not_mob_header}">
          <div class="btm-wrapp">
            <AppBtmCloseMob @btmGo="showHome()"/>
          </div>
        </div>
      <div class="dialog__wrapp int-400" @click.stop>
          <div
          class="dialog__content"
          :class="{
            'dialog--mob-header-pd': !not_mob_header,
            'dialog--mob-pd': not_mob_pd,
            'dialog--mob-param': mob_param,
            }">
            <slot></slot>
          </div>
        </div>
      </div>
  </Transition>
</Teleport>
</template>

<script>
import { mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
  name: "AppMobDialog",
  props: {
    shown: {
      type: Boolean,
      default: false,
    },
    not_mob_pd: {
      type: Boolean,
      default: false,
    },
    mob_param: {
      type: Boolean,
      default: false,
    },
    not_mob_header: {
      type: Boolean,
      default: false,
    },
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
  top: 0;
  left: 0;
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

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #0e1518;
  position: fixed;
  z-index: 500;
  /* display: flex;
  justify-content: center; */
}

.dialog__wrapp {
  z-index: 501;
  cursor: auto;
  height: 100%;
}

.dialog__wrapp::-webkit-scrollbar {
  width: 0;
}

.dialog__content {
  padding-top: 88px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 100%;
  /* max-width: 394px; */
  max-width: 434px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-right: 20px;
  padding-left: 20px;
}

.dialog__content::-webkit-scrollbar {
  width: 0;
}

.dialog--mob-header-pd { 
  padding-top: 108px;
}

.dialog--mob-pd {
  padding-right: 0;
  padding-left: 0;
}
.dialog--mob-param {
  max-width: 394px;
  padding-right: 16px;
  padding-left: 16px;
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
