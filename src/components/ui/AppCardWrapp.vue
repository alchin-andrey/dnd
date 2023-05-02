<template>
  <div
    class="card-main flex-col"
    :class="[
      class_Gap,
      {
        'hov cur-p': !passive && !banned,
        'pos-rel': icon,
        'btm-select': active_card,
        'cur-ban': banned,
				'blur-60': !no_blur,
      },
    ]"
  >
    <slot></slot>
    <AppSvg
      v-if="icon"
      class="svg-18 svg-main-f cur-p icon-pos"
      :path="ui_icon[icon]"
      @click="getAction()"
    />
  </div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
  name: "AppCardWrapp",
  data() {
    return {
      ui_icon: ui_icon,
    };
  },
  props: {
    gap: {
      type: String,
      default: "26",
    },
    icon: {
      type: String,
      default: null,
    },
    passive: {
      type: Boolean,
      default: false,
    },
    active_card: {
      type: Boolean,
      default: false,
    },
    banned: {
      type: Boolean,
      default: false,
    },
		no_blur: {
			type: Boolean,
			default: false,
    },

    //----------------
    // banned: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // colors_card: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // basic: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // copy: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // copied: {
    //   type: Boolean,
    // 	default: false,
    // },
    // reset: {
    //   type: Boolean,
    //   default: false,
    // },
    // white_btn: {
    //   type: Boolean,
    //   default: false,
    // },
    // blue_btn: {
    //   type: Boolean,
    //   default: false,
    // },
    // x2_svg: {
    //   type: Boolean,
    //   default: false,
    // },
    // arrow: {
    //   type: Boolean,
    //   default: false,
    // },
    // plus: {
    //   type: Boolean,
    //   default: false,
    // },
    // link: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // route: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // active_link: {
    // 	type: String,
    // 	default: null,
    // },
    // select_link: {
    // 	type: String,
    // 	default: null,
    // },
    // active_boll_link: {
    // 	type: Boolean,
    // 	default: false,
    // },
    // no_blur: {
    // 	type: Boolean,
    // 	default: false,
    // },
  },
  computed: {
    class_Gap() {
      return `gap-${this.gap}`;
    },
  },

  methods: {
    getAction() {
      this.$emit("clickIcon");
    },
  },
};
</script>

<style scoped>
.icon-pos {
  position: absolute;
  right: 14px;
  top: 14px;
}

.active_card {
  cursor: pointer;
}

.active_card:hover {
  background: rgba(255, 255, 255, 0.1);
}
.copy_card {
  fill-opacity: 0.4;
}

.copy_card:hover {
  fill-opacity: 1;
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
  position: relative;
}

.no_blur {
  backdrop-filter: none;
}

.colors_card {
  height: 100%;
  background: #000000;
}

.basic {
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 14px;
}

.selection_card_active {
  border: 2px solid #ffffff;
  padding: 14px;
}

.link {
  padding: 0px;
}

.main_svg {
  width: 18px;
  height: 18px;
  fill: white;
}

.x2_svg {
  width: 36px;
  height: 36px;
}
.white_card_svg {
  fill: #0047ff;
}

.copy_icon {
  height: 18px;
  position: absolute;
  right: 16px;
  top: 50%;
  bottom: 50%;
  -webkit-transform: translate(0%, -50%);
  -ms-transform: translate(0%, -50%);
  transform: translate(0%, -50%);
}

.copy_icon_x2 {
  height: 36px;
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.2s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}

.banned-cursor {
  cursor: not-allowed;
}
</style>
