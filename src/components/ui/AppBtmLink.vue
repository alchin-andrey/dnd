<template>
	<div class="btm-grey br-12 blur-60 hov cur-p">
		<a target="_blank" :href="link">
			<div class="pd-16 pos-rel">
				<div class="int-700">{{ T_Btm_Name }}</div>
				<AppSvg class="svg-18 svg-main-f icon-pos" :path="ui_icon[icon]"/>
			</div>
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
			default: null,
		},
		icon: {
			type: String,
			default: "arrow_right_small",
		},
		link: {
			type: String,
			default: null,
		}
	},
	computed: {
		T_Btm_Name() {
			return this.T(this.name)
		}
    // icon_Svg() {
    //   if(this.type = null) return "arrow_right_small";
    //   if(this.type = "return") return "return";
    //   if(this.type = "plus") return "plus";
    //   if(this.type = "donate") return "donate";
    // }
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
</style>
