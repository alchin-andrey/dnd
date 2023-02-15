<template>
	<div class="column" 
  :class="{ passive: numb == 0, 'jbm-300': !text_stule,}">
		<div class="column_value">
			<section class="flex_row">
				<div v-if="icon_Shown" class="icon">
					<svg
						:class="{save_svg: save.includes(title) || save_bool}"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						v-html="atribute_icon[icon_Image]"
					/>
				</div>
				<div class="item"
        :class="{'int-700': text_stule}">
					{{ t_Title }}<span v-if="t_Type">{{ t_Type }}</span>
				</div>
			</section>
			<div v-if="dot" class="dotted passive">
				..................................
			</div>
			<div class="numb jbm-300" v-if="price">
				{{ Price }}
				<emoji :data="emojiIndex" :emoji="em_Price" :set="set_emoji" :size="11" />
			</div>
			<div class="numb jbm-300" :class="{'grey-2': Numb == 0}" v-else>
				{{ Prefix }}{{ Numb }}<span class="small">{{ Dice }}</span>{{ Pls }} {{ Unit }}
			</div>
		</div>
		<div class="visual">
			<div class="cube" v-for="n in cube_Numb" :key="n"></div>
			<div class="cube_neg" v-for="n in cube_Negative" :key="n"></div>
			<div class="cube_old" v-for="n in old_numb" :key="n"></div>
			<div class="cube_zero" v-for="n in cube_Numb_Zero" :key="n"></div>
      <div class="cube_save" v-for="n in cube_Save" :key="n"></div>
		</div>
	</div>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "MyAttribute",
	data() {
		return {
			atribute_icon: atribute_icon,
		};
	},
	props: {
		title: {
			type: String,
			default: null,
		},
		numb: {
			type: Number,
			default: null,
		},
		price: {
			type: Number,
			default: null,
		},
		unit: {
			type: String,
			default: null,
		},
		dot: {
			type: Boolean,
			default: false,
		},
		old_numb: {
			type: Number,
			default: null,
		},
		dice: {
			type: Number,
			default: null,
		},
		type: {
			type: String,
			default: null,
		},
    pls: {
			type: Number,
			default: null,
		},
		icon: {
			type: String,
			default: null,
		},
		no_icon: {
			type: Boolean,
			default: false,
		},
		plus: {
			type: Boolean,
			default: false,
		},
		feet: {
			type: Boolean,
			default: false,
		},
		save: {
			type: Array,
			default: [],
		},
		save_bool: {
			type: Boolean,
			default: false,
		},
    text_stule: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(useStatsStore, ["stats_Keys"]),

		t_Title() {
			return this.t(this.title);
		},

		t_Type() {
			return this.t(this.type);
		},

		Prefix() {
			return this.plus && this.Numb > 0 ? "+" : "";
		},

		Numb() {
			return this.old_numb ? this.old_numb + this.numb : this.numb;
		},

		Price() {
      let res = null;
      if (this.price % 100 == 0) {
        res = this.price / 100;
      } else if (this.price % 10 == 0) {
        res = this.price / 10;
      } else {
        res = this.price;
      }
      return res;
			// return this.price ? this.price : this.numb;
		},

    em_Price() {
      let emoji = null;
      if (this.price % 100 == 0) {
        emoji = "coin_gold_short";
      } else if (this.price % 10 == 0) {
        emoji = "coin_silver_short";
      } else {
        emoji = "coin_copper_short";
      }
      return this.t(emoji);
    },

		Unit() {
			return this.unit ? this.t(this.unit) : this.Feet;
		},

		Feet() {
			return this.feet ? this.t("feet") : "";
		},

		icon_Image() {
			return this.icon ? this.icon : this.title;
		},

		Dice() {
			return this.dice ? `d${this.dice}` : null;
		},

    Pls() {
      if (this.pls) {
        let symbol = this.pls >=0 ? '+' : null;
        return symbol + this.pls;
      }
      return null
		},

		icon_Shown() {
			let icon = this.icon;
			let atribute_icon = this.atribute_icon[this.icon_Image];
			return (icon || atribute_icon) && !this.no_icon;
		},

		// icon_Image() {
		// 	if (this.icon === null) {
		// 		return null;
		// 	} else if (this.numb > 0) {
		// 		return require(`@/assets/img/icon/atribute/${this.icon}_active.svg`);
		// 	} else {
		// 		return require(`@/assets/img/icon/atribute/${this.icon}_passive.svg`);
		// 	}
		// },

		cube_Numb() {
			if (this.feet) {
				return Math.ceil(this.numb / 5);
			} else if (this.numb < 0 || this.save_bool) {
				return null;
			} else {
				return Math.floor(this.numb) + this.pls;
			}
		},

		cube_Negative() {
			return this.numb < 0 ? Math.abs(this.numb) : null;
		},

		cube_Numb_Zero() {
      if (this.dice) {
				return this.dice * this.numb - this.numb;
			}
		},

    cube_Save() {
      return this.save_bool ? this.numb : null;
		},
	},
};
</script>

<style scoped>
.dotted {
	flex: 1 0;
	margin: 0 0.6em;
	white-space: nowrap;
	overflow: hidden;
}

.column {
	/* width: 340px; */
	display: flex;
	min-height: 18px;
	justify-content: space-between;
	align-items: flex-start;
}

.column_value {
	width: 230px;
	display: flex;
	justify-content: space-between;
  
	flex: 1 1 auto;
}

.flex_row {
  display: flex;
}

.icon {
	display: flex;
	width: 18px;
	height: 18px;
	margin-right: 4px;
}

/* .active_svg {
  width: 18px;
	height: 18px;
} */

.item {
  display: flex;
  align-items: center;
}

.item span {
	margin-left: 8px;
	color: rgba(255, 255, 255, 0.2);
}

.passive {
	color: rgba(255, 255, 255, 0.2);
	fill-opacity: 0.2;
	stroke-opacity: 0.2;
}

.save_svg {
	fill: #05ff00;
	stroke: #05ff00;
}

.visual {
	width: 98px;
	display: flex;
	align-items: center;
	margin-left: 12px;
	flex-wrap: wrap;
	padding: 5px 0 5px 0;
	gap: 2px;
}

.cube {
	width: 8px;
	height: 8px;
	background: #ffffff;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
	border-radius: 2px;
}

.cube_old {
	width: 8px;
	height: 8px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 2px;
}

.cube_neg {
	width: 8px;
	height: 8px;
	border-radius: 2px;
	border: 1px solid #ff0000;
}

.cube_zero {
	width: 8px;
	height: 8px;
	border-radius: 2px;
	border: 1px solid #ffffff;
}

.cube_save {
  width: 8px;
	height: 8px;
	border-radius: 2px;
	background: #05ff00;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
}

.small {
	text-transform: lowercase;
}

.grey-2 {
	color: rgba(255, 255, 255, 0.2);
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 1px;
}
</style>
