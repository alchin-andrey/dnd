<template>
	<DonatCarusel 
	class="carousel"
	:style="{'min-height': size_Height}"
	@next="next"
	:interval="interval">
		<DonatCaruselSlide 
		v-for="(slide, i) in slide_Arr" 
		:key="slide" 
		:index="i" 
		:visibleSlide="visibleSlide"
		class="carousel-slider">
			<img :src="slide" :alt="slide" draggable="false">
		</DonatCaruselSlide>
	</DonatCarusel>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import DonatCarusel from '@/components/carousel/DonatCarusel.vue';
import DonatCaruselSlide from '@/components/carousel/DonatCaruselSlide.vue';
export default {
	name: "PromoSlider",
	components: {
		DonatCarusel,
		DonatCaruselSlide,
	},
	data() {
		return {
			visibleSlide: 0,
			interval: 6000,
		};
	},

	computed: {
		...mapState(usePagesStore, ["screen_Max", "screen_Menu_Num"]),
		slide_Arr() {
			let arr = [];
			for (let i = 1; i < 9; i++) {
				arr.push(require(`@/assets/img/promo/${i}.png`));
			}
			return arr;
		},

		slidesLength() {
			return this.slide_Arr.length;
		},

		size_Height() {
			if(this.screen_Max) {
				return '200px'
			} else {
				const num = 190 - (434 - this.screen_Menu_Num) / 2;
				return `${num}px`
			}
		}
	},

	methods: {
		next() {
			this.interval = 8000;
			if (this.visibleSlide >= this.slidesLength - 1) {
				this.visibleSlide = 0;
			} else {
				this.visibleSlide++;
			}
		},
	},
};
</script>

<style>
.carousel {
	position: relative;
	overflow: hidden;
	width: 100%;
	/* height: 200px; */
	z-index: 10;
	cursor: pointer;
}

/* @media (max-width: 1279px) {
	.carousel {
		height: 190px;
	}
} */

.carousel-slider {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100px;
}

.carousel-slider > img {
	width: 100%;
}
</style>
