<template>
	<div class="main-class">
		<Main__MenuBar/>
		<Main__SetBar/>


		<div class="represent" @click="showHome()" v-show="screen_Max && !PRINT_BLANK">
			<transition name="fade-body">
				<div class="character" :class="{
					active_eyes: race_page.shown.eyes_color || race_page.shown.hair_color,
					active_skin: race_page.shown.skin_color,
				}" :style="{
	height: Char_Hight_Back,
}">
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

		<Main__ParamBar/>
	</div>

	<!-- alse -->
	<my-dialog-spell v-model:show="site_settings.print_dialog" finish>
		<section class="flex-col h-100">
			<PromoSlider />
			<Donate 
			:class="{
				'pd-32': screen_Max,
				'pd-20': !screen_Max,
				}" 
				finish 
				@getPdf="exportToPDF()" 
				:progress="progress_load"
				/>
		</section>
	</my-dialog-spell>

	<div v-if="site_settings.print_dialog || PRINT_BLANK" id="element-to-convert">
		<BlankPrint />
	</div>

	<!-- <PlagBanner v-if="!screen_Max"/> -->
</template>

<script>
import html2pdf from "html2pdf.js";

import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";

import MainApp from "@/components/main/MainApp.js";
export default {
	name: "Main",
	mixins: [MainApp],
	data() {
		return {
			PRINT_BLANK: false,
			progress_load: 0,
			loading_pdf: false,
		};
	},

	created() {
		this.getCreated();
	},

	computed: {
		//STORES
		...mapState(useMYStore, [
			"MY",
			"MY_Race",
			"MY_Class",
		]),
		...mapState(usePagesStore, [
			"site_settings",
			"race_page",
			"class_page",
			"shown_home",
			"page_setting_open",
			"setting_open",
			"pages",
			"page_Open",
			"btn_Numb",
			"btn_Name",
			"screen_Max"
		]),

		...mapState(useFormStore, [
			"Get_Age",
			"Get_Weight",
			"Get_Height",
			"Char_Hight_Back",
		]),

		...mapState(useFeatsStore, [
			"feats_Condition_Pass_Name",
			"feats_Arr_Select_Id",
			"feats_Arr_Free",
		]),

		...mapState(useGenderStore, ["names_Arr"]),

		hide_Ruler() {
			return (
				this.pages.race_page && (this.shown_home || this.race_page.shown.height)
			);
		},
	},
	watch: {
		"MY_Race.name": "getWatch_Race",
		"MY_Class.name": "getWatch_Class",

		names_Arr(val, oldVal) {
			const incl = val.includes(this.MY.name);
			const user_name = this.site_settings.name_user;
			if (!incl && !user_name) this.getRandomName();
		},

		feats_Condition_Pass_Name(val, oldVal) {
			if (oldVal && val.toString() !== oldVal.toString()) {
				this.feats_Arr_Select_Id.forEach((el) => {
					if (el.id_btn == "feats") {
						const obj =
							this.MY._settings_class[this.MY_Class.name][el.id_link];
						const name = obj.feats[0].name;
						const includ = this.feats_Condition_Pass_Name.includes(name);
						const new_el = this.feats_Arr_Free[0];
						if (includ) {
							this.MY._settings_class[this.MY_Class.name][el.id_link] = {
								...obj,
								feats: [new_el],
							};
						}
					}
				});
			}
		},

	},

	methods: {
		...mapActions(useMYStore, ["getCreated"]),
		...mapActions(usePagesStore, [
			"showHome",
			"closeEthnos",
			"closeColor",
			"closePar",
			"goPage",
			"closeCustomSett",
			"btnGo",
		]),
		...mapActions(useGenderStore, ["getRandomName"]),

		exportToPDF() {
			if (!this.loading_pdf) {
				this.loading_pdf = true;
				this.progress_load = 15;
				setTimeout(() => this.loadPdf(), 0.1);
			}
		},

		loadPdf() {
			const lvl = this.MY.level;
			const name = this.MY.name.length !== 0
				? this.MY.name
				: `${this.T("someone")}_${this.t(this.MY_Race.name)}`;

			const element = document.getElementById("element-to-convert");
			const opt = {
				margin: 0,
				filename: `${name}_LVL${lvl}.pdf`,
				image: { type: "jpeg", quality: 1 },
				html2canvas: {
					dpi: 150,
					scale: 1,
					// windowWidth: 1044,
					width: 2088,
					// height: 1223,
					// imageTimeout: 30000,
					letterRendering: true,
					useCORS: true,
				},
				jsPDF: {
					unit: "pt",
					format: "a4",
					orientation: "portrait",
					// hotfixes: "px_scaling",
				},
			};

			html2pdf().set(opt).from(element).toContainer().then(() => this.progress_load = 85)
				.toCanvas().toImg().toPdf().save().then(() => this.progress_load = 100)
				.output().then(() => {
					setTimeout(() => this.progress_load = 0, 1000);
					setTimeout(() => this.loading_pdf = 0, 2000);
				});
		},

		getWatch_Race() {
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
.main-class {
	display: flex;
	height: 100%;
	width: 100%;
	overflow-x: hidden;
}

.main-class::-webkit-scrollbar {
	width: 0;
}
@media (max-width: 1279px) {
	.main-class {
		display: flex;
		justify-content: center;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		scrollbar-width: none;
		scroll-behavior: smooth;
	}

	.main-class::-webkit-scrollbar {
		width: 0;
	}
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

.character>img {
	position: absolute;
	bottom: 0;
	right: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, 0%);
	-ms-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.character>svg {
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

.story {
	max-width: 362px;
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}

.story h3 {
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-top: 26px;
	margin-bottom: 5px;
}

.story-print h3 {
	font-family: "Inter-600";
	font-style: normal;
	font-weight: normal;
	font-size: 28px;
	line-height: 30px;
	letter-spacing: 0.02em;
	margin-top: 26px;
	margin-bottom: 10px;
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
/* ---------------------sidebar_right----------------------*/
</style>
