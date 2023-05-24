<template>
	<div class="h-100 w-100 pd-r-42 pos-rel" 			:style="{
				'height': style_Height,
			}">
		<Slider v-model.number="inputValue" orientation="vertical" direction="rtl" :min="min_Options" :max="Max_Range" :options="options_Range" tooltipPosition="top" :lazy="false"/>
	<div class="range-value int-700-20">
    {{ t_Unit }}
    </div>
	</div>
</template>

<script>
import Slider from '@vueform/slider';
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
export default {
	name: "AppRangSlider",
	components: {
		Slider,
	},
	data() {
		return {
			inputValue: "",
			options: {
				padding: [40],
			}
		};
	},
	props: {
		modelValue: {
			type: Number,
			default: null,
		},
		lvl: {
			type: Boolean,
			default: false,
		},
		age: {
			type: Boolean,
			default: false,
		},
		height: {
			type: Boolean,
			default: false,
		},
		weight: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Race",]),
		...mapState(usePagesStore, ["main_page", "screen_Max"]),
    ...mapState(useFormStore, ["form_kof"]),
		Target_Range() {
			if (this.lvl) {
				return "lvl";
			} else if (this.age) {
				return "age";
			} else if (this.height) {
				return "height";
			} else if (this.weight) {
				return "weight";
			} else {
				return null;
			}
		},

		age_Units() {
			let mod10 = Math.abs(this.inputValue % 10);
			let mod100 = Math.abs(this.inputValue % 100);
			if (mod100 > 10 && mod100 < 20) {
				return "years";
			} else if (mod10 >= 2 && mod10 <= 4) {
				return "yeara";
			} else if (mod10 === 1) {
				return "year";
			} else {
				return "years";
			}
		},

		t_Unit() {
			if (this.lvl) {
				return `${this.inputValue}${this.t("level_unit")} ${this.t("level")}`;
			} else if (this.age) {
				return `${this.inputValue} ${this.t(this.age_Units)}`;
			} else if (this.height) {
				return `${this.inputValue} ${this.t("cm")}`;
			} else if (this.weight) {
				return `${this.inputValue} ${this.t("kg")}`;
			} else {
				return null;
			}
		},

		Max_Range() {
			if (this.lvl) {
				return this.main_page.level_sett.max;
			} else {
				return this.MY_Race.race_settings[this.Target_Range].max;
			}
		},

		Min_Range() {
			if (this.lvl) {
				return this.main_page.level_sett.min;
			} else {
				return this.MY_Race.race_settings[this.Target_Range].min;
			}
		},

		touch_Range() {
			const res = Math.round((this.Max_Range / 100) * 3)
			return res
		},

		min_Options() {
			return this.touch_Range * -1
		},

		options_Range() {
			const padding_num = this.Min_Range + this.touch_Range
			return {padding: [padding_num]}
		},

		Kof_Range() {
			if (this.lvl) {
				return null;
			} else {
				let min = this.MY_Race.race_settings[this.Target_Range].min;
				let max = this.MY_Race.race_settings[this.Target_Range].max;
				return (this.MY[this.Target_Range] - min) / (max - min);
			}
		},

		style_Height() {
			if (this.height) {
				const num = (this.Max_Range / 210) * 100
				return num + '%';
			} else {
				return '100%';
			}
		}
	},
	watch: {
		"MY_Race.name": {
			handler() {
				if (this.lvl) {
					return null;
				} else {
					// this.$emit("update:modelValue", this.inputValue);
					setTimeout(() => {
						this.inputValue = this.MY[this.Target_Range] + 1;
						this.$emit("update:modelValue", this.inputValue);
						this.inputValue = this.MY[this.Target_Range] - 1;
						this.$emit("update:modelValue", this.inputValue);
					}, 1);
				}
			},
			// deep: true,
			immediate: true,
		},
		modelValue: {
			handler() {
				this.inputValue = this.modelValue;
				if (this.lvl) {
					return null;
				} else {
					this.form_kof[this.Target_Range] = this.Kof_Range;
				}
			},
			immediate: true,
		},
		inputValue: {
			handler() {
				this.$emit("update:modelValue", this.inputValue);
				if (this.lvl) {
					return null;
				} else {
					this.form_kof[this.Target_Range] = this.Kof_Range;
				}
			},
			immediate: true,
		},
	},
	methods: {
	},
};
</script>

<style>
@import '@vueform/slider/themes/default.css';

:root {
	--slider-bg: rgba(255, 255, 255, 0.06);
  --slider-connect-bg: #ffffff;
	--slider-height: 100%;
	--slider-vertical-height: 100%;
	--slider-radius: 12px;
	
	
	--slider-handle-width: 30px;
	--slider-handle-height: 100%;
	--slider-handle-shadow: none;
	--slider-handle-shadow-active: none;
	--slider-handle-radius: 0;
	--slider-handle-border: 0;
}

.slider-vertical .slider-handle {
	bottom: calc(var(--slider-handle-width)/-1);
	right: 0;
}

.slider-vertical .slider-origin {
	width: 100%;
}

.slider-base, .slider-connects {
	overflow: hidden;
}

.slider-touch-area::after {
	content:'';
	position: absolute;
	width: 96px;
	height: 6px;
	top: 12px;
	left: calc(50% - 96px/2);
	background: #0E1518;
	opacity: 0.2;
	border-radius: 4px;
}

.range-value {
	position: absolute;
	left: 16px;
	bottom: 11px;
	height: 24px;
	color: #000000;
	background-color: #ffffff;
	z-index: 1000;
}

.h-60 {
	height: 60%;
}

</style>
