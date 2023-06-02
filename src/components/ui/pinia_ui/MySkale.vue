<template>
	<div class="skale">
		<div
			@click="getHeight(numb)"
			class="skale_numb_top"
			:class="{
				skale_numb_down: numb === 0,
			}"
		>
			{{ display_Numb }}
		</div>
		<div
			v-if="division"
			class="division"
			:class="{
				off: numb > growth_Char && !active_Size,
				fill_back: active_Size,
			}"
		>
			<div
				class="fill_front"
				:style="{
					height: height_Fill,
				}"
			></div>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "MySkale",
	props: {
		numb: {
			type: Number,
			default: null,
		},
		division: {
			type: Boolean,
			default: false,
		},
		zero: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		...mapState(useMYStore, ["MY", "MY_Race"]),

		growth_Char() {
			if (this.MY.height === null) {
				let max_height = this.MY_Race.race_settings.height.max;
				let min_height = this.MY_Race.race_settings.height.min;
				return (min_height + max_height) / 2;
			} else {
				return this.MY.height;
			}
		},

		active_Size() {
			return this.growth_Char <= this.numb && this.numb - 30 < this.growth_Char;
		},

		show_Numb() {
			let max_height = this.MY_Race.race_settings.height.max;
			let min_height = this.MY_Race.race_settings.height.min;
			return this.numb >= min_height && this.numb <= max_height;
		},

		display_Numb() {
			if (this.zero && this.numb === 0) {
				return 0;
			} else if (this.show_Numb) {
				return this.numb;
			} else {
				return null;
			}
		},

		height_Fill() {
			if (this.active_Size) {
				let divisor = this.numb - this.growth_Char;
				return `calc(100% / 30 * (30 - ${divisor}))`;
			}
		},
	},
	methods: {
		getHeight(numb) {
			this.MY.height = numb;
		},
	},
};
</script>

<style scoped>
.skale {
	height: 100%;
	display: flex;
	gap: 0 12px;
	position: relative;
	z-index: 15;
}

.skale_numb_top {
	margin-top: -4px;
	align-self: flex-start;
	flex: 1 1 auto;
	cursor: pointer;
}
.skale_numb_down {
	margin-bottom: -4px;
	align-self: flex-end;
	flex: 1 1 auto;
}

.division {
	width: 1px;
	/* min-height: 96px; */
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background: #ffffff;
}

.off {
	background: rgba(255, 255, 255, 0.2);
	opacity: 0.3;
}

.fill_back {
	background: rgba(255, 255, 255, 0.4);
}

.fill_front {
	background: #ffffff;
	/* height: calc(100% / 30 * 10); */
}

.size {
	font-size: 11.45px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 4px;
	height: 100%;
	padding-top: 4px;
	position: relative;
}

.size::after {
	content: "";
	position: absolute;
	top: -32px;
	width: 1px;
	height: 32px;
	background: rgba(255, 255, 255, 0.2);
	opacity: 0.3;
}

.size_growth {
	font-size: 11.45px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	gap: 4px;
	height: 100%;
	padding-top: 4px;
	position: relative;
}
</style>
