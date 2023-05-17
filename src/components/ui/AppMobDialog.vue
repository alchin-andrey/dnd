<template>
  <!-- <Teleport to="body"> -->
    <Transition :duration="{ enter: 700, leave: 600 }" name="nested">
      <div v-if="show" class="dialog">
        <div class="dialog__wrapp int-400">
          <slot name="header"></slot>
          <div class="dialog__content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  <!-- </Teleport> -->
</template>

<script>
export default {
  name: "AppMobDialog",
  props: {
    show: {
      type: Boolean,
      default: false,
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
  background-color: #0e1518;
  position: fixed;
  z-index: 500;
  cursor: pointer;
}

.dialog__wrapp {
  z-index: 501;
  cursor: auto;
  max-height: 100%;
}

.dialog__wrapp::-webkit-scrollbar {
  width: 0;
}

.dialog__content {
  padding-top: 108px;
  padding-bottom: 20px;
  margin: 0 auto;
  width: 394px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 8px;
  overflow-y: scroll;
  scrollbar-width: none;
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
