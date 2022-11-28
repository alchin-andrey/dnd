<template>
	<div
		class="size jbm-300"
		:class="{
			skale_top: skale_top,
		}"
	>
		<my-skale
			v-for="n in skale_arr"
			:key="n"
			:division="division"
			:zero="zero"
			:numb="n"
		/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
export default {
	name: "MySizeGrowth",
	data() {
		return {
			skale_arr: [0, 60, 90, 120, 150, 180, 210],
		};
	},
	props: {
		division: {
			type: Boolean,
			default: false,
		},
		zero: {
			type: Boolean,
			default: false,
		},
		skale_top: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
	},
	methods: {
		getHeight(numb) {
			this.MY.height = numb;
		},
	},
};
</script>

<style scoped>
.size {
	font-size: 11.45px;
	display: flex;
	flex-direction: column-reverse;
	align-items: flex-end;
	gap: 4px;
	height: 100%;
	padding-top: 4px;
	position: relative;
}

.skale_top::after {
	content: "";
	position: absolute;
	top: -32px;
	width: 1px;
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	opacity: 0.3;
}
</style>
