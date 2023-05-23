<template>
	<div class="flex_custom">
		<div class="column-link int-400">
			<p :style="{'width': size_Text}">
			{{ t_Title }}
			</p>
		</div>
		<AppSvg :class="['svg-18', style_Svg]" name="arrow_down_small"/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppBackPage",
	props: {
    text: {
			type: String,
			default: null,
		},
		text_arr: {
			type: Array,
			default: [],
		},
	},

	computed: {
		...mapState(usePagesStore, ["screen_Max", "screen_Menu_Num"]),

		style_Svg() {
			return this.screen_Max ? 'svg-main-f' : 'svg-black-f'; 
		},

		size_Text() {
			if(this.screen_Max) {
				return '238px'
			} else {
				const num = this.screen_Menu_Num - 20*2 - 16*2 - 18;
				return `${num}px`
			}
		},

		t_Title() {
      if (this.text) {
				return this.t(this.text);
			} else {
				let arr = [];
				for (let i in this.text_arr) {
					arr.push(this.t(this.text_arr[i]));
				}
				return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
      }
		},
	},
};
</script>


<style scoped>
.flex_custom {
	display: flex;
	align-items: center;
	justify-content: space-between;
  cursor: pointer;
}
.column-link {
  display: flex;
  align-items: center;
}

.column-link p {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

@media (max-width: 1279px) {
	.flex_custom {
		height: 50px;
		padding: 0 16px;
		background: #FFFFFF;
		backdrop-filter: blur(30px);
		-webkit-backdrop-filter: blur(30px);
		isolation: isolate;
		border-radius: 12px;
		color: black;
	}
}
</style>
