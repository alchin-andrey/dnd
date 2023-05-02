<template>
	<div class="btm-grey br-12 blur-60 hov cur-p pos-rel">
		<a target="_blank" :href="link">
			<div :class="[style_Btm]">{{ T_Btm_Name }}</div>
			<AppSvg 
				class="svg-18 svg-main-f icon-pos"
				:class="[style_Svg]"
				:path="ui_icon[icon]"
			/>
		</a>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppBtmLink",
  data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
		name: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: "arrow_right_small", // return, plus, donate;
		},
		link: {
			type: String,
			default: null,
		},
		btm_x2: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		T_Btm_Name() {
			return this.T(this.name)
		},

		style_Btm() {
			if(this.btm_x2) {
				return 'int-700-20 pd-20-28';
			} else {
				return 'int-700 pd-16';
			}
		},

		style_Svg() {
			if(this.btm_x2) {
				return 'svg-36 icon-pos_x2';
			} else {
				return 'svg-18';
			}
		},
	},
};
</script>

<style scoped>

.icon-pos {
	position: absolute;
	right: 12px;
	top: 50%;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}
.icon-pos_x2 {
	right: 14px;
}
</style>
