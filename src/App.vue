<template>
	<!-- Левый бар -->
	<div class="sidebar_left">
		<div class="main_chapter">
			<Header />
			<my-slider
				numb="01"
				title="race"
				:arr="Object.values(this.race)"
				:arr_keys="Object.keys(this.race)"
				:type="MY.race"
			>
			</my-slider>
		</div>

		<div class="main_menu_wrap">
			<div class="main_chapter_menu">
				<RaceMenuSettings />
			</div>

			<transition name="btm-fade" mode="out-in">
				<my-button v-if="shown_home" numb="02" title="class"></my-button>
				<my-button-back v-else @click="showHome()"></my-button-back>
			</transition>
		</div>
	</div>

	<!-- Выпадающее меню -->
	<div class="sidebar_wrap" :class="{ sidebar_wrap_open: setting_open }">
		<HeaderSettings />
		<RaceSettings />
	</div>

	<div class="stripe"></div>
	<!-- Персонаж -->

	<div class="represent">
		<div
			class="character"
			:class="{
				active_eyes: race_page.shown.eyes_color || race_page.shown.hair_color,
				active_skin: race_page.shown.skin_color,
			}"
			:style="{
				height: Char_Hight_Back,
			}"
		>
			<WelcomeBanner />

			<RaceBody body_part="skin" />
			<RaceBody body_part="eyes" />
			<RaceBody body_part="hair" />

			<transition name="slide-fade">
				<mySizeGrowth v-if="hide_Ruler" division zero skale_top />
			</transition>
		</div>
	</div>
	<!-- Персонаж -->

	<!-- sidebar_right -->
	<!-- <transition name="slide-fade"> -->
	<div class="sidebar_right" :class="{ sidebar_right_close: !shown_home }">
		<RaceParameters />
	</div>
	<!-- </transition> -->
	<!-- sidebar_right -->
</template>

<script>
import race from "@/assets/catalog/base_data/step1_races.js";
import clas from "@/assets/catalog/base_data/step2_classes.js";

import WelcomeBanner from "@/components/pinia/WelcomeBanner.vue";

import Header from "@/components/pinia/Header.vue";
import HeaderSettings from "@/components/pinia/HeaderSettings.vue";

// RACE_PAGE
import RaceMenuSettings from "@/components/pinia/race_page/settings/RaceMenuSettings.vue";
import RaceSettings from "@/components/pinia/race_page/settings/RaceSettings.vue";
import RaceParameters from "@/components/pinia/race_page/RaceParameters.vue";
// RACE_PAGE

import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";
export default {
	name: "App",
	components: {
		WelcomeBanner,

		Header,
		HeaderSettings,
		// RACE_PAGE
		RaceMenuSettings, //TODO: Сылки на рост, вес, возраст
		RaceSettings,
		RaceParameters,
		// RACE_PAGE
	},

	data() {
		return {
			race: race,
			clas: clas,
		};
	},

	created() {
		this.MY.class = Object.values(clas)[1];
		this.getCreated();
	},

	computed: {
		//STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page", "shown_home", "setting_open"]),
		//GETTERS

		Mastery() {
			return Math.ceil(this.MY.level / 4);
		},

		hide_Ruler() {
			return this.shown_home || this.race_page.shown.height;
		},

		Get_Height() {
			let min = this.race_Settings.height.min;
			let max = this.race_Settings.height.max;
			let kof = this.race_page.height_kof;
			return min + Math.round((max - min) * kof);
		},

		Get_Weight() {
			let min = this.race_Settings.weight.min;
			let max = this.race_Settings.weight.max;
			let kof = this.race_page.weight_kof;
			return min + Math.round((max - min) * kof);
		},

		Get_Age() {
			let min = this.race_Settings.age.min;
			let max = this.race_Settings.age.max;
			let mature = this.race_Settings.age.mature;
			if (this.MY.age) {
				if (this.MY.age < min) {
					return min;
				} else if (this.MY.age > max) {
					return max;
				} else {
					return this.MY.age;
				}
			} else {
				return mature;
			}
		},

		race_Settings() {
			return this.MY.race.settings;
		},

		Char_Hight_Back() {
			let max_height = this.MY.race.settings.height.max;
			let min_height = this.MY.race.settings.height.min;
			let mein_height = (min_height + max_height) / 2;
			let kof = 0;
			if (mein_height == 105) {
				kof = 4;
			} else if (mein_height == 135) {
				kof = 3.7;
			} else if (mein_height == 165) {
				kof = 3.4;
			} else {
				kof = 3.1;
			}
			if (this.race_page.shown.eyes_color || this.race_page.shown.hair_color) {
				return `calc((100% / 210 * ${mein_height})*${kof})`;
			} else {
				return `100%`;
			}
		},
	},
	watch: {
		"MY.race": "getWatch",
	},

	methods: {
		...mapActions(usePagesStore, [
			"showHome",
			"closeEthnos",
			"closeColor",
			"closePar",
			"showRaceScroll",
		]),
		...mapActions(useMYStore, ["getEthnos"]),

		getCreated() {
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
		},

		getWatch() {
			this.getEthnos();
			this.closeEthnos();
			this.closeColor("skin");
			this.closeColor("eyes");
			this.closeColor("hair");
			this.closePar("stats");
			this.closePar("skills");
			this.closePar("languages");
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
		},
	},
};
</script>

<style>
body {
	background-color: #0e1518;
}

a {
	color: #fff;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	display: flex;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
}

.buff {
	color: #05ff00;
	/* font-weight: 600; */
}

.debuff {
	color: #ff0000;
	/* font-weight: 600; */
}

.jbm-300 {
	font-family: "JetBrains Mono";
	font-style: normal;
	font-weight: 300;
	font-size: 10.95px;
	line-height: 18px;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #ffffff;
}

.int-400 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
}

.stripe {
	width: 2px;
	background-color: rgba(255, 255, 255, 0.1);
}

.sidebar_left {
	padding-top: 32px;
	width: 320px;
	background-color: #0e1518;
	display: flex;
	flex-direction: column;
}

.main_menu_wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.main_chapter {
	padding: 0 32px 0 32px;
}

.main_chapter_menu {
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.btm-fade-enter-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-leave-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-enter-from,
.btm-fade-leave-to {
	transform: translateX(-300px);
	opacity: 0;
}

/* ---------------------characters----------------------*/

.represent {
	padding: 32px;
	flex: 1 1 auto;
	display: flex;
	background-color: #0e1518;
	z-index: 2;
	overflow: hidden;
}

.character {
	width: 100%;
	height: 100%;
	position: relative;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.active_eyes {
	align-self: flex-start;
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.active_skin {
	align-self: flex-start;
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

/* ---------------------sidebar_right----------------------*/

.sidebar_wrap {
	height: 100%;
	display: flex;
	width: 0;
	transition: all 0.4s ease-in-out;
	position: relative;
}

.sidebar_wrap_open {
	width: 426px;
	transition: all 0.4s ease-in-out;
}

.sidebar_right {
	min-width: 426px;
	max-width: 426px;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #0e1518;
	z-index: 2;
	transition: all 0.4s ease-in-out;
}

.sidebar_right::-webkit-scrollbar {
	width: 0;
}

.sidebar_right_close {
	margin-right: -426px;
	opacity: 0;
	transition: all 0.4s ease-in-out;
}

.story {
	max-width: 362px;
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}

.story h3 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-top: 25px;
	margin-bottom: 5px;
}

.slide-fade-enter-active {
	transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}

/* GLOBAL */
.scroll-fade-enter-active {
	transition: all 0.8s ease-out;
}

.scroll-fade-leave-active {
	transition: all 0.6s cubic-bezier(1, 0.8, 0.8, 1);
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}
/* GLOBAL */

/* ---------------------sidebar_right----------------------*/
</style>
