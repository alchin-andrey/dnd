<template>
	<div>
		<Slider 
		class="rang-photo"
		v-model.number="inputValue" 
		:orientation="orientation" 
		direction="rtl" 
		:min="0" 
		:max="100"
		:tooltips="false"
		tooltipPosition="top" 
		:lazy="false"
		/>
	</div>
</template>

<script>
import Slider from '@vueform/slider';
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppRangPhoto",
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
		orientation: {
			type: String,
			default: 'horizontal',
		},
		vertical: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(usePagesStore, ["main_page", "screen_Max"]),
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
	--slider-bg: rgba(0, 0, 0, 0.65);
  --slider-connect-bg: rgba(0, 0, 0, 0.65);
	/* --slider-height: 100%; */
	--slider-vertical-height: 100%;
	--slider-radius: 12px;
	
	
	/* --slider-handle-width: 30px; */
	/* --slider-handle-height: 100%; */
	/* --slider-handle-shadow: none; */
	/* --slider-handle-shadow-active: none; */
	/* --slider-handle-radius: 0; */
	/* --slider-handle-border: 0; */
}

/* .rang-photo.slider-vertical .slider-handle {
	bottom: calc(var(--slider-handle-width)/-1);
	right: 0;
} */

.rang-photo.slider-vertical .slider-origin {
	width: 100%;
}

/* .rang-photo .slider-base, .slider-connects {
	overflow: hidden;
} */

/* .rang-photo .slider-touch-area::after {
	content:'';
	position: absolute;
	width: 96px;
	height: 6px;
	top: 12px;
	left: calc(50% - 96px/2);
	background: #0E1518;
	opacity: 0.2;
	border-radius: 4px;
} */

</style>
