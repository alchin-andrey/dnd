<template>
	<div class="column" :class="{ passive: passive }">
		<div class="icon"
    :class="{
      'lvl-dot': shown_Level_Dot(fines),
      'lvl-dot-param' : param
      }"
    >
      <svg
      :class="{
					positive: !Negative,
					negative: Negative,
				}"
        width="18"
        height="18"
        fill-opacity="1"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        v-html="fines_icon[fines.type]"
      ></svg>
		</div>
		<div class="text int-400" :class="{ emoji_true: em_Upd }">
			<span
				:class="{
					positive: !Negative,
					negative: Negative,
				}"
			>
				{{ t_Title }}
			</span>
			{{ em_Before }}
			<emoji
				v-if="em_Upd"
				:data="emojiIndex"
				:emoji="em_Upd"
				:set="set_emoji"
				:size="14"
			/>{{ em_After }}
		</div>
	</div>
</template>

<script>
import fines_icon from "@/assets/catalog/icon/fines_icon";
import { mapState} from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "AppFines",
  data() {
    return {
      fines_icon: fines_icon,
    }
  },
	props: {
    fines: {
			type: Object,
			default: null,
		},
		param: {
			type: Boolean,
			default: false,
		},
		passive: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(useMYStore, ["MY", 
    "shown_Level_Dot"
  ]),

		Negative() {
			return (
        this.fines.type === "disadvantage" || 
        this.fines.type === "minus"
        );
		},

		t_Title() {
			return this.t(this.fines.keyword);
		},

		t_Details() {
			return this.t(this.fines.details);
		},

		em_Upd() {
			return this.updEmoji(this.t_Details);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Details);
		},

		em_After() {
			return this.afterEmoji(this.t_Details);
		},

	},
};
</script>

<style scoped>
.column {
	display: flex;
	min-height: 18px;
}

.icon {
  width: 18px;
  height: 18px;
  position: relative;
}

.lvl-dot::before {
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	left: -11px;
	/* top: calc(50% - 3px); */
  top: 50%;
	transform: translateY(-50%);
	background: #0047ff;
	border-radius: 50%;
}

.lvl-dot-param::before {
  left: -15px;
}


.text {
	margin-left: 4px;
	padding: 2px 0 1px 0;
}

.text:first-letter {
	text-transform: uppercase;
}

.emoji_true {
	padding: 0 0 0 0;
	margin-top: -1px;
}

.positive {
	color: #05ff00;
  fill: #05ff00;
}

.negative {
	color: #ff0000;
  fill: #ff0000;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 3px;
}

.passive {
  opacity: 0.2;
}
</style>
