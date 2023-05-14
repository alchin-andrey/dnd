<template>
	<section class="pos-rel">
		<div class="gradient"></div>
		<div class="btm">
			<div class="numb jbm-300" v-if="numb">{{ numb }}</div>
			<div class="title jbm-300">
				<div>{{ t_Title }}</div>
				<AppSvg class="svg-18 svg-main-f" :path="ui_icon.arrow_down" />
			</div>
		</div>
	</section>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "MyButton",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},
	props: {
		numb: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
	},

	computed: {
		t_Title() {
			return this.t(this.title);
		},
	},
};
</script>

<style scoped>
.btm {
	/* width: 100vh; */
  display: grid;
  gap: 18px;
	background: #0047ff;
  padding: 32px;
	cursor: pointer;
	position: relative;
}

.btm::before {
	content: "";
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: -100%;
	background: rgba(0, 71, 255, 0.2);
	z-index: 100;
}

.btm::after {
	content: "";
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	right: -100%;
	background: rgba(0, 71, 255, 0.2);
	z-index: 100;
}

.numb {
	height: 18px;
	text-align: left;
}

.gradient {
	height: 32px;
	width: 100%;
	position: absolute;
	top: -32px;
	background: linear-gradient(180deg, rgba(14, 21, 24, 0) 0%, #0e1518 100%);
}

.title {
	display: flex;
	justify-content: space-between;
}
</style>
