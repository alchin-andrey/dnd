<template>
		<div :class="{ passive: passive }">
			<div class="flex_title">
				<div class="jbm-300" 
        :class="{
          'manna-numb': !numb
        }">
        <span v-if="numb">{{numb_Count}}</span>
        <span>{{ t_Title }}</span>
        </div>
				<div class="icon"
        @click="shownScroll()">
					<svg
						class="main_svg"
						viewBox="0 0 18 18"
						xmlns="http://www.w3.org/2000/svg"
						v-html="ui_icon[img_Icon]"
					/>
				</div>
			</div>
			<transition name="scroll-packs">
      <slot v-if="packs_scroll"/>
			</transition>
		</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppSpellsPacks",
	data() {
		return {
			packs_scroll: true,
			ui_icon: ui_icon,
		};
	},
	props: {
		numb: {
			type: Number,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
		passive: {
			type: Boolean,
			default: false,
		},
		ability: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		t_Title() {
			return this.ability ? this.t("ability") : `${this.t("spells")} [${this.t(this.text)}]`;
		},
    numb_Count() {
      return `${this.numb}× `;
    },

		img_Icon() {
			return this.packs_scroll ? "arrow_top_small" : "arrow_down_small";
		},
	},
	methods: {
		shownScroll() {
			this.packs_scroll = !this.packs_scroll;
		},
	},
};
</script>

<style scoped>
/* .flex-col {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.gap-34 {
	gap: 34px;
} */

.manna-numb {
	margin-left: 16px;
}
.gap_col {
	display: grid;
	gap: 15px;
	width: 100%;
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.active {
	background: #ffffff;
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.passive {
	opacity: 0.2;
}

.scroll-packs-enter-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-leave-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-enter-from,
.scroll-packs-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}

.icon {
	width: 18px;
	height: 18px;
	align-self: flex-start;
}

.main_svg {
  width: 18px;
	height: 18px;
  align-self: flex-start;
	fill: white;
}

/* .scroll_wrap {
	height: 0;
	transition: all 1s ease-in-out;
	position: relative;
}

.scroll_wrap_open {
	height: 100%;
	transition: all 1s ease-in-out;
} */
</style>
