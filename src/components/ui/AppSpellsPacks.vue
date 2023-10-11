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
					></svg>
				</div>
			</div>
      <section 
      class="null_height"
      :class="{full_height: packs_scroll,}">
      <transition name="scroll-packs-spells">
        <slot v-if="packs_scroll"/> 
      </transition>
      </section>
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
		numb_manna: {
			type: Number,
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
      if(this.text) {
        return this.t(this.text);
      } else {
        return `${this.t("spells")} [${this.t(this.numb_manna)}]`;
      }

			// return this.ability ? this.t("ability") : `${this.t("spells")} [${this.t(this.text)}]`;
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

.null_height {
  max-height: 0;
  /* opacity: 0; */
	/* transform: translateY(-10px); */
  transition: all 0.5s ease-out;
  /* overflow: hidden; */
}

.full_height {
  max-height: 10000px;
  /* opacity: 1; */
	/* transform: translateY(0px); */
  transition: all 0.5s ease-in;
}

.scroll-packs-spells-enter-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-spells-leave-active {
	transition: all 0.4s ease-out;
}

.scroll-packs-spells-enter-from,
.scroll-packs-spells-leave-to {
	transform: translateY(-10px);
	opacity: 0;
}
</style>
