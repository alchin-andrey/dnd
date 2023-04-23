<template>
	<div
		class="pasive_card"
		:class="{
			active_card: !passive && !basic,
      'banned-cursor': passive && banned,
			colors_card: colors_card,
			no_blur: no_blur,
			basic: basic,
			selection_card_active: get_Active,
			link: link,
      copy_card: copy,
      red_card: reset,
      white_card: white_btn,
			blue_card: blue_btn,
		}"
	>
  <div 
	v-if="reset || arrow || plus || link" 
	class="copy_icon"
	:class="{ copy_icon_x2: x2_svg, }"
	>
    <svg
      class="main_svg"
			:class="{
      white_card_svg: white_btn,
			x2_svg: x2_svg,
		}"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      v-html="ui_icon[img_Icon]"
    ></svg>
  </div>
		<div v-if="copy" class="copy_icon">
			<transition name="mode-fade" mode="out-in">
				<svg class="main_svg"
					v-if="!copied"
					key="off"
					viewBox="0 0 18 18"
					fill-rule="evenodd"
					clip-rule="evenodd"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12 8H8V12H12V8ZM7 7V13H13V7H7Z" />
					<path d="M6 6H10V7H11V5H5V11H7V10H6V6Z" />
				</svg>

				<img v-else key="on" src="@/assets/img/icon/check.svg" />
			</transition>
		</div>
		<slot></slot>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "MySelectionCard",
  data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
		passive: {
			type: Boolean,
			default: false,
		},
		banned: {
			type: Boolean,
			default: false,
		},
		colors_card: {
			type: Boolean,
			default: false,
		},
		basic: {
			type: Boolean,
			default: false,
		},
		copy: {
			type: Boolean,
			default: false,
		},
		copied: {
      type: Boolean,
			default: false,
		},
    reset: {
      type: Boolean,
      default: false,
    },
    white_btn: {
      type: Boolean,
      default: false,
    },
    blue_btn: {
      type: Boolean,
      default: false,
    },
    x2_svg: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    plus: {
      type: Boolean,
      default: false,
    },
		link: {
			type: Boolean,
			default: false,
		},
		active_link: {
			type: String,
			default: null,
		},
		select_link: {
			type: String,
			default: null,
		},
		active_boll_link: {
			type: Boolean,
			default: false,
		},
		no_blur: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		get_Active() {
			if (this.active_link !== null) {
				return this.active_link === this.select_link;
			} else if (this.active_boll_link) {
				return this.active_boll_link;
			} else {
				return null;
			}
		},
    img_Icon() {
      if(this.reset) return "return";
      if(this.arrow) return "arrow_right_small";
      if(this.plus) return "plus";
      if(this.link && !this.plus) return "link";
    }
	},
};
</script>

<style scoped>
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

.red_card {
	background: #580000;
  transition-property: all;
  transition-duration: 0.5s;
}
.red_card:hover {
	background: #FF0000;
}

.blue_card {
  background: #0047ff;
}

.blue_card:hover {
	background: #1355ff;
}

.white_card {
	background: #FFFFFF;
	color: #0047FF;
}

.white_card:hover {
	background: #FFFFFF;
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
	fill: #0047FF;
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
