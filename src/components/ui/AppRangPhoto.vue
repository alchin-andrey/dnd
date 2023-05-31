<template>
	<div>
		<Slider 
		class="rang-photo"
		v-model.number="inputValue" 
		:orientation="orientation" 
		direction="rtl" 
		:min="0" 
		:max="range_Max"
		:options="options_Range"
		:tooltips="false"
		tooltipPosition="top" 
		:lazy="false"
		:step="0.1"
		/>
	</div>
</template>

<script>
import Slider from '@vueform/slider';
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppRangPhoto",
	components: {
		Slider,
	},
	data() {
		return {
			inputValue: "",
		};
	},
	props: {
		modelValue: {
			type: Number,
			default: null,
		},
		orientation: {
			type: String,
			default: 'horizontal',
		},
		vertical: {
			type: Boolean,
			default: false,
		},
		pad: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		...mapState(usePagesStore, ["main_page", "screen_Max"]),

		range_Max() {
			return 100 + this.pad;
		},

		options_Range() {
			return {padding: [0, this.pad]}
		},


	},
	watch: {
		modelValue: {
			handler() {
				this.inputValue = this.modelValue;
			},
			immediate: true,
		},
		inputValue: {
			handler() {
				this.$emit("update:modelValue", this.inputValue);
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

.rang-photo {
	--slider-bg: rgba(0, 0, 0, 0.2);
  --slider-connect-bg: transparent;
	--slider-connect-bg-disabled: #9CA3AF;
	--slider-height: 8px;
	--slider-vertical-height: 100%;
	--slider-radius: 4px;
	
	--slider-handle-bg: #fff;
	--slider-handle-border: 0;
	--slider-handle-width: 32px;
	--slider-handle-height: 32px;
	--slider-handle-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
	--slider-handle-shadow-active: 0px 2px 6px rgba(0, 0, 0, 0.9);
	--slider-handle-radius: 8px;
	--slider-handle-ring-width: 3px;
	/* --slider-handle-ring-color: transparent; */
	--slider-handle-ring-color: rgba(0, 0, 0, 0.02);
}

.rang-photo.slider-vertical .slider-handle {
	bottom: 0;
	right: 0;
}

.rang-photo.slider-horizontal .slider-handle {
    right: 0;
		top: auto;
		bottom: calc(var(--slider-height)/-1);
}

.rang-photo.slider-base, .slider-connects {
	border: 2px solid rgba(255, 255, 255, 0.2);
}
</style>
