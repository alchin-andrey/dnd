<template>
	<div class="h-100 w-100 pd-r-42 pos-rel">
		<Slider v-model.number="inputValue" orientation="vertical" direction="rtl" :min="0" :max="Max_Range" :options="options_Range" tooltipPosition="top" :lazy="false"/>
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

		options_Range() {
			const padding_num = this.Min_Range
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

<style src="@vueform/slider/themes/default.css">
</style>
