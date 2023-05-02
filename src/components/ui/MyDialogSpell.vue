<template>
  <Teleport to="#app">
    <Transition duration="550" name="nested">
      <div
        v-if="show"
        class="dialog"
        :class="{ 'flex-row-c': finish }"
        @click.stop
        @click="hideDialog"
      >
        <div
          class="dialog__wrapp int-400"
          :class="{ dialog__finish: finish }"
          @click.stop
        >
          <div class="dialog__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
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
  methods: {
    hideDialog() {
      this.$emit("update:mana", null);
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 4px;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 1000;
  cursor: pointer;
}

.dialog__wrapp {
  margin: 0 0 0 auto;
  padding: 28px;
  background: #1c2326;
  border-radius: 12px;
  width: 396px;
  z-index: 1001;
  cursor: auto;
  overflow-y: scroll;
  scrollbar-width: none;
  max-height: 100%;
  /* max-height: min-content; */
}

.dialog__finish {
  margin: 0 auto;
  width: 460px;
  padding: 0;
}

.dialog__wrapp::-webkit-scrollbar {
  width: 0;
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 26px;
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

.nested-enter-active .dialog__wrapp,
.nested-leave-active .dialog__wrapp {
  transition: all 0.3s ease-out;
}

.nested-enter-active .dialog__wrapp {
  transition-delay: 0.25s ease-out;
}

.nested-enter-from .dialog__wrapp,
.nested-leave-to .dialog__wrapp {
  transform: translateY(50px);
  opacity: 0.001;
}
</style>
