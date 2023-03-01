<template>
	<!-- Left bar -->
	<div class="sidebar_left">
		<div class="main_chapter">
			<HeaderMenu />

			<section class="grid-col gap-10">
				<MyBackPage
					v-if="!pages.race_page"
					:text_arr="arr_Name_Race_Page"
					@click="goPage('race_page')"
				/>
				<MyBackPage
					v-if="!pages.race_page && !pages.class_page"
					:text_arr="arr_Name_Class_Page"
					@click="goPage('class_page')"
				/>
			</section>

			<div v-if="!pages.race_page" class="delimiter"></div>
			<AppSlider
				v-if="pages.race_page"
				numb="01"
				name="race"
				:slides="MY.race.name"
			/>
			<AppSlider
				v-if="pages.class_page"
				numb="02"
				name="class"
				:slides="MY.class.name"
			/>
			<AppName
				v-if="pages.alignment_page"
				numb="03"
				title="name"
        v-model="MY.name"
			/>
			<div class="delimiter"></div>
		</div>

		<div class="main_menu_wrap" @click="showHome()">
			<div class="main_chapter_menu" @click.stop>
				<RaceMenu v-if="pages.race_page" />
				<ClassMenu v-if="pages.class_page" />
        <AlignmentMenu v-if="pages.alignment_page"/>
			</div>

			<transition name="btm-fade" mode="out-in">
				<section v-if="shown_home">
					<my-button
						v-if="pages.race_page"
						numb="02"
						title="class"
						@click="goPage('class_page')"
					></my-button>
					<my-button
						v-if="pages.class_page"
						numb="03"
						title="alignment"
						@click="goPage('alignment_page')"
					></my-button>
					<my-button
						v-if="pages.alignment_page"

						title="download_charsheet"
						@click="showDialog()"
					></my-button>
				</section>
				<my-button-back
					v-else
					title="command_back"
					@click="showHome()"
				></my-button-back>
			</transition>
		</div>
	</div>

	<!-- Drop-down menu -->
	<div class="sidebar_wrap" :class="{ sidebar_wrap_open: setting_open }">
		<HeaderSettings />
		<RaceSettings v-if="pages.race_page" />
		<ClassSettings v-if="pages.class_page" />
    <AlignmentSettings v-if="pages.alignment_page"/>
	</div>

	<div class="stripe"></div>
	<!-- Character -->

	<div class="represent" @click="showHome()">
		<transition name="fade-body">
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
				<RaceBody body_part="class" v-if="!pages.race_page" />

				<transition name="slide-fade">
					<mySizeGrowth v-if="hide_Ruler" division zero skale_top />
				</transition>
			</div>
		</transition>
	</div>
	<!-- Character -->

	<!-- sidebar_right -->
	<!-- <transition name="slide-fade"> -->
	<div
		class="sidebar_right"
		:class="{ sidebar_right_close: close_Sidebar_Right }"
	>
		<RaceParameters v-if="pages.race_page" />
		<ClassParameters v-if="pages.class_page" />
    <AlignmentParameters v-if="pages.alignment_page"/>
	</div>
	<!-- </transition> -->
	<!-- sidebar_right -->
  <my-dialog-spell v-model:show="dialogVisible" finish>
    <!-- <div> -->
    <div class="title-donat int-700">{{t("support_project")}}</div>
    <Donate finish/>
    <!-- </div> -->
  </my-dialog-spell>
</template>

<script>
import WelcomeBanner from "@/components/WelcomeBanner.vue";
import Donate from "@/components/Donate.vue";

import HeaderMenu from "@/components/menu/0_HeaderMenu.vue";
import HeaderSettings from "@/components/settings/__settings__lists/0_HeaderSettings.vue";

// RACE_PAGE
import RaceMenu from "@/components/menu/1_RaceMenu.vue";
import RaceSettings from "@/components/settings/__settings__lists/1_RaceSettings.vue";
import RaceParameters from "@/components/parameters/__param__lists/1_RaceParameters.vue";
// CLASS_PAGE
import ClassMenu from "@/components/menu/2_ClassMenu.vue";
import ClassSettings from "@/components/settings/__settings__lists/2_ClassSettings.vue";
import ClassParameters from "@/components/parameters/__param__lists/2_ClassParameters.vue";

// ALIGNMENT_PAGE
import AlignmentMenu from "@/components/menu/3_AlignmentMenu.vue";
import AlignmentSettings from "@/components/settings/__settings__lists/3_AlignmentSettings.vue";
import AlignmentParameters from "@/components/parameters/__param__lists/3_AlignmentParameters.vue";

import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import MainApp from "@/components/main/MainApp.js";
export default {
	name: "App",
  mixins: [MainApp],
	components: {
		WelcomeBanner,
    Donate,

		HeaderMenu,
		HeaderSettings,
		// RACE_PAGE
		RaceMenu, //TODO: Сылки на рост, вес, возраст
		RaceSettings,
		RaceParameters,
		// CLASS_PAGE
		ClassMenu,
		ClassSettings,
		ClassParameters,
    
    // ALIGNMENT_PAGE
    AlignmentMenu,
    AlignmentSettings,
    AlignmentParameters,
	},

  data() {
		return {
			dialogVisible: false,
		};
	},

	created() {
		this.getCreated();
	},

	computed: {
		//STORES
		...mapState(useMYStore, ["MY", "subclass_Name"]),
		...mapState(usePagesStore, [
			"race_page",
			"class_page",
			"shown_home",
			"page_setting_open",
			"setting_open",
			"pages",
			"page_Open",
		]),
		//GETTERS

		close_Sidebar_Right() {
			const open_class_page = this.pages.class_page;
			const feats =
				this.setting_open?.slice(0, 5) == "feats" && open_class_page;
			const stats = this.setting_open?.includes("stats") && open_class_page;
			const skills = this.setting_open?.includes("skills") && open_class_page;
			const many_spells =
				this.setting_open?.includes("many_spells") && open_class_page;
			return !this.shown_home && !(stats || feats || skills || many_spells);
		},

		hide_Ruler() {
			return (
				this.pages.race_page && (this.shown_home || this.race_page.shown.height)
			);
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

		arr_Name_Race_Page() {
			let arr = [];
			arr.push(this.MY.race.name);
			arr.push(this.MY.ethnos.name);
			arr.push(this.MY.backstory.name);
			return arr;
		},

		arr_Name_Class_Page() {
			let arr = [];
			arr.push(this.MY.class.name);
			this.subclass_Name ? arr.push(this.subclass_Name) : null;
			return arr;
		},

		race_Settings() {
			return this.MY.race.race_settings;
		},

		Char_Hight_Back() {
			let max_height = this.MY.race.race_settings.height.max;
			let min_height = this.MY.race.race_settings.height.min;
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
		"MY.class": "getWatch_Class",
	},

	methods: {
		...mapActions(usePagesStore, [
			"showHome",
			"closeEthnos",
			"closeColor",
			"closePar",
			"goPage",
			"closeCustomSett",
		]),
		...mapActions(useMYStore, ["getEthnos"]),

    showDialog() {
			this.dialogVisible = true;
		},

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
			this.closeCustomSett();
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
		},

		getWatch_Class() {
			this.closeCustomSett();
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

.title-donat {
  margin-bottom: 21px;
}

.title-donat::first-letter {
  text-transform: uppercase;
}

.relative {
	position: relative;
}

.delimiter {
	height: 1px;
	/* margin: 40px 0 0 0; */
	background: rgba(255, 255, 255, 0.2);
}

.buff {
	color: #05ff00;
	/* font-weight: 600; */
}

.debuff {
	color: #ff0000;
	/* font-weight: 600; */
}

.rare-text {
	color: #ffc93d;
}

.grid-col {
  display: grid;
}

.gap-10 {
  gap: 10px;
}

.jbm-300 {
	font-family: "JetBrains Mono";
	font-style: normal;
	font-weight: 300;
	font-size: 11px;
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

.int-700 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
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
	display: flex;
	flex-direction: column;
	gap: 22px;
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
	color: #ffffff;
	margin-top: 26px;
	margin-bottom: 5px;
}

.fade-body-enter-active,
.fade-body-leave-active {
	transition: opacity 0.3s ease-in-out;
}

.fade-body-enter-from,
.fade-body-leave-to {
	opacity: 0;
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

/* ---------------------sidebar_right----------------------*/
</style>
