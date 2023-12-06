<template>
  <Teleport to="body">
    <Transition duration="550" name="nested">

      <div
        v-if="show"
        class="dialog"
        :class="{ 
          'flex-row-c': finish && screen_Max,
          'dialog--finish': finish,
          'cur-p': screen_Max,
          }"
        @click.stop
        @click="mainHideDialog"
      >
        <div>
          <div class="btm-wrapp" v-if="!screen_Max">
            <div class="btm-round" @click="hideDialog()">
              <AppSvg class="svg-18 svg-main-f" name="close" />
            </div>
          </div>
          <div
            class="dialog__wrapp int-400"
            :class="{ 'dialog-wrapp--finish': finish }"
            @click.stop
          >
            <div class="dialog__content">
              <slot></slot>
              <AppBtm
                @click.stop
                v-if="finish && !screen_Max"
                name="back_to_main_page"
                @click="goHomePage()"
              />
            </div>
          </div>
        </div>
        <!-- <slot name="bottom"></slot> -->
        <div class="btm-wrapp--finish dialog-wrapp--finish">
          <AppBtm
            @click.stop
            v-if="finish && screen_Max"
            class="back-btm-size "
            name="back_to_main_page"
            @click="goHomePage()"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
  name: "MyDialogSpell",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    mana: {
      type: Number,
      default: null,
    },
    finish: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(usePagesStore, ["screen_Max", "goHomePage"]),
  },
  methods: {
    mainHideDialog() {
      if(this.screen_Max) this.hideDialog()
    },

    hideDialog() {
      this.$emit("update:mana", null);
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>

.back-btm-size {
  width: 287px;
}

.btm-wrapp {
  padding: 20px 20px 20px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 434px;
}
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1000;
  /* cursor: pointer; */
  display: flex;
  justify-content: flex-end;
}

.dialog--finish {
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  padding: 32px;
}

.dialog__wrapp {
  padding: 28px;
  background-color: #1c2326;
  border-radius: 12px;
  width: 396px;
  z-index: 1001;
  cursor: auto;
  overflow-y: scroll;
  scrollbar-width: none;
  max-height: 100%;
}

.dialog__wrapp::-webkit-scrollbar {
  width: 0;
}

.dialog-wrapp--finish {
  /* margin: 0 auto; */
  /* width: 460px; */
  width: 832px;
  /* padding: 0; */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

@media (max-width: 1279px) {
  .dialog {
    padding: 0 0 4px 0;
    background-color: #0e1518;
    justify-content: center;
  }

  .dialog--finish {
    /* justify-content: center; */
    justify-content: start;
    align-items: center;
    padding: 0 0 32px 0;
  }

  .dialog__wrapp {
    /* overflow-y: hidden; */
    max-height: calc(100% - 88px);
  }

  .dialog-wrapp--finish {
    width: 444px;
  }

  .dialog__content {
    height: 100%;
  }
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 26px;
  height: 100%;
}

.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-out;
}

/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}

/* .nested-enter-active .dialog__wrapp,
.nested-leave-active .dialog__wrapp{
  transition: all 0.3s ease-out;
}

.nested-enter-active .dialog__wrapp{
  transition-delay: 0.25s ease-out;
}

.nested-enter-from .dialog__wrapp,
.nested-leave-to .dialog__wrapp{
  transform: translateY(50px);
  opacity: 0.001;
} */


.nested-enter-active .dialog__wrapp,
.nested-leave-active .dialog__wrapp,
.nested-enter-active .btm-wrapp,
.nested-leave-active .btm-wrapp,
.nested-enter-active .btm-wrapp--finish,
.nested-leave-active .btm-wrapp--finish{
  transition: all 0.3s ease-out;
}

.nested-enter-active .dialog__wrapp,
.nested-enter-active .btm-wrapp,
.nested-enter-active .btm-wrapp--finish{
  transition-delay: 0.25s ease-out;
}

.nested-enter-from .dialog__wrapp,
.nested-leave-to .dialog__wrapp,
.nested-enter-from .btm-wrapp,
.nested-leave-to .btm-wrapp,
.nested-enter-from .btm-wrapp--finish,
.nested-leave-to .btm-wrapp--finish{
  transform: translateY(50px);
  opacity: 0.001;
}

@media (max-width: 955px) {
  .dialog-wrapp--finish {
    width: 394px;
  }
}
</style>
