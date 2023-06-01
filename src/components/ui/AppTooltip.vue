<template>
  <div>
    <div @mouseenter="toggle" @mouseleave="toggle">
      <slot />
      <transition name="slide-fade-tolltip">
        <div
          v-show="shown_Tooltip"
          class="tooltip-pointer"
          :class="{
            'tooltip-pointer--warn': warn,
            'tooltip-pointer--error': error,
          }"
        />
      </transition>
    </div>
    <transition name="slide-fade-tolltip">
      <div
        v-show="shown_Tooltip"
        class="tooltip-clss int-400"
        :class="{
          'tooltip-clss--warn': warn,
          'tooltip-clss--error': error,
        }"
      >
        {{ t_Text }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppTooltip",
  data() {
    return {
      isShown: false,
    };
  },
  props: {
    text: {
      type: String,
      default: null,
    },
    shown: {
      type: Boolean,
      default: false,
    },
    warn: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    t_Text() {
      return this.t(this.text);
    },

    shown_Tooltip() {
      return this.shown && this.isShown;
    },
  },

  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped>
/* .flex {
  display: flex;
  flex-direction: column;
} */

.tooltip-clss {
  position: absolute;
  color: #ffffff;
  padding: 8px 11px 9px;
  width: 340px;
  left: 0;
  z-index: 10;
  top: 100%;
  top: calc(100% + 8px);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid #ffffff;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(60px);
  border-radius: 6px;
}

.tooltip-pointer {
  position: relative;
}

.tooltip-pointer::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
}

.tooltip-clss--warn {
  border-color: #ffc93d;
  color: #ffc93d;
}
.tooltip-clss--warn:after {
  border-bottom-color: #ffc93d;
}
.tooltip-pointer--warn:after {
  border-bottom-color: #ffc93d;
}

.tooltip-clss--error {
  border-color: #FF0000;;
  color: #FF0000;
}
.tooltip-clss--error:after {
  border-bottom-color: #FF0000;
}
.tooltip-pointer--error:after {
  border-bottom-color: #FF0000;
}

.slide-fade-tolltip-enter-active,
.slide-fade-tolltip-leave-active {
  transition-property: all;
  transition-duration: 0.4s;
  transition-delay: 0.2s;
  transition-timing-function: ease-in;
}
.slide-fade-tolltip-enter-active {
  transition-property: all;
  transition-duration: 0.4s;
  transition-delay: 0.2s;
  transition-timing-function: ease-out;
}
.slide-fade-tolltip-enter-from,
.slide-fade-tolltip-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
