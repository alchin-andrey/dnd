<template>
	<DonatCarusel 
	class="carousel"
	@next="next"
	:interval="interval">
		<DonatCaruselSlide 
		v-for="(slide, i) in slide_Arr" 
		:key="slide" 
		:index="i" 
		:visibleSlide="visibleSlide"
		class="carousel-slider">
			<img :src="slide" :alt="slide">
		</DonatCaruselSlide>
	</DonatCarusel>
</template>

<script>
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
			interval: 4000,
		};
	},

	computed: {
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
	},

	methods: {
		next() {
			this.interval = 5000;
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
	height: 200px;
	z-index: 10;
	cursor: pointer;
}

.carousel-slider {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.carousel-slider img {
	width: 100%;
}
</style>
