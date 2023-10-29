<template>
	<div class="represent" @click="showHome()" v-if="screen_Max">
		<transition name="fade-body">
			<div class="character-main" :style="style_Char_Pos">
				<WelcomeBanner />
				<!-- <AppGpt /> -->
				<section class="character-main--body" @click.stop="showPhotoSet()">
					<RaceBody body_part="skin" />
					<RaceBody body_part="skin" error/>
					<RaceBody body_part="eyes" />
					<RaceBody body_part="hair" />
					<RaceBody body_part="class" v-if="!pages.race_page" />
				</section>
				<transition name="slide-fade-size">
					<mySizeGrowth v-if="hide_Ruler" division zero skale_top />
				</transition>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";

import WelcomeBanner from "@/components/WelcomeBanner.vue";
export default {
	name: "Main_CharBar",
	components: {
		WelcomeBanner,
	},
	data() {
		return {
			errors: {
				file_photo: false,
				url_photo: false,
			},
		};
	},

	computed: {
		//STORES
		...mapState(usePagesStore, [
			"race_page",
			"shown_home",
			"pages",
			"screen_Max",
		]),
		...mapState(useMYStore, ["MY"]),
		...mapState(useFormStore, ["Char_Hight_Back"]),

		char_Pos() {
			const position = this.race_page.shown.eyes_color 
			|| this.race_page.shown.hair_color 
			|| this.race_page.shown.skin_color;
			if (position) return 'flex-start';
		},

		style_Char_Pos() {
			return {
				height: this.Char_Hight_Back,
				'align-self': this.char_Pos,
			}
		},

		hide_Ruler() {
			return (
				this.pages.race_page && (this.shown_home || this.race_page.shown.height)
			);
		},
	},

	methods: {
		...mapActions(usePagesStore, ["showHome", "showPhotoSet"]),
	},
};
</script>

<style scoped>
.represent {
	padding: 32px;
	flex: 1 1 auto;
	display: flex;
	background-color: #0e1518;
	z-index: 2;
	overflow: hidden;
}

.character-main {
	width: 100%;
	height: 100%;
	position: relative;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.character-main--body > img,
.character-main--body > svg,
.character-main--body > .custom-img {
	position: absolute;
	bottom: 0;
	right: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, 0%);
	-ms-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
	transition-property: all, fill;
	transition-duration: 0.8s, 0.1s;
	transition-timing-function: ease-in-out;
	border-radius: 24px;
	z-index: 10;
	cursor: pointer;
}

.flex-start {
	align-self: flex-start;
}

.fade-body-enter-active,
.fade-body-leave-active {
	transition: opacity 0.3s ease-in-out;
}

.fade-body-enter-from,
.fade-body-leave-to {
	opacity: 0;
}

.slide-fade-size-enter-active {
	transition: all 0.8s ease-out;
}

.slide-fade-size-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-size-enter-from,
.slide-fade-size-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

/* ---------------------sidebar_right----------------------*/
</style>
