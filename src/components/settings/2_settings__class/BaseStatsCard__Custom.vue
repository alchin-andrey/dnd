<template>
	<div class="wrap-style grid-col">
		<div class="text jbm-300">
			<svg class="active_svg" :class="{
				save_svg: stats_Saving_Arr.includes(stats_name),
			}" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" v-html="stats_icon[stats_name]"></svg>
			<div class="item">
				{{ t_Title }}<span>{{ t_Type }}</span>
			</div>
		</div>
		<div class="btm-grey hov br-l-12 pd-14 int-700 liner">
			<input 
			size="1" 
			spellcheck="false" 
			class="liner" 
			v-model="inputValue" 
			type="text" 
			/>
		</div>
	</div>
</template>

<script>
import stats_icon from "@/assets/catalog/icon/stats_icon";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "BaseStatsCard__Custom",
	data() {
		return {
			stats_icon: stats_icon,
			inputValue: 0,
		};
	},
	props: {
		modelValue: {
			type: Number,
			default: null,
		},
		stats_name: {
			type: String,
			default: null,
		},
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useStatsStore, [
			"stats_Saving_Arr"]),

		t_Title() {
			return this.t(this.stats_name);
		},

		t_Type() {
			return this.t(`${this.stats_name}_base`);
		},

	},
	watch: {
		modelValue: {
			handler() {
				this.inputValue = String(this.modelValue);
			},
			immediate: true,
		},
		inputValue: {
			handler(newValue, oldValue) {
				if (newValue == '') {
					this.inputValue = 0;
					this.MY.custom_stats_base_save[this.stats_name] = 0;
				} else if (Number(newValue) == NaN) {
					this.inputValue = oldValue;
				} else if (Number(newValue) >= 0 && Number(newValue) <= 20) {
					if (newValue[0] == '0' && newValue.length > 1) newValue = newValue.slice(1)
					this.MY.custom_stats_base_save[this.stats_name] = Number(newValue)
					this.inputValue = newValue;
				}
				else {
					this.inputValue = oldValue;
				}
			},
		},
	},

	methods: {
	},
};
</script>

<style scoped>
.wrap-style {
	border-radius: 12px;
	border: 2px solid rgba(255, 255, 255, 0.06);
	overflow: hidden;
}

.grid-col {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.liner {
	text-decoration-line: underline;
	text-decoration-color: #ffffff;
}

input[type="text"] {
	border-radius: 0;
	-webkit-border-radius: 0;
	-moz-border-radius: 0;
	-khtml-border-radius: 0;
	background: transparent !important;
	outline: none;
	color: #ffffff;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

::placeholder {
	color: #ffc93d;
	opacity: 1;
}

:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}

::-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.2);
}


input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.active_svg {
	width: 18px;
	height: 18px;
	fill: none;
	stroke: white;
}

.save_svg {
	fill: #05ff00;
	stroke: #05ff00;
}

.text {
	display: flex;
	align-items: center;
	padding-left: 14px;
}

.item {
	margin-left: 4px;
}

.item span {
	margin-left: 8px;
	color: rgba(255, 255, 255, 0.2);
}
</style>
