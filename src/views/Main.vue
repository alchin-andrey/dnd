<template>
	<!-- Left bar -->
	<div class="sidebar_left">
		<div class="main_chapter">
			<HeaderMenu />

			<section v-if="!pages.race_page && !pages.master_page">
        <div class="grid-col gap-10">
          <MyBackPage
            :text_arr="arr_Name_Race_Page"
            @click="goPage('race_page')"
          />
          <MyBackPage
            v-if="!pages.class_page"
            :text_arr="arr_Name_Class_Page"
            @click="goPage('class_page')"
          />
        </div>
        <div class="delimiter mr-top-22" />
			</section>

      <div v-if="pages.master_page" class="int-700-20 mr-top-22" v-html="t_Lobby"/>
			<AppSliderName v-if="pages.race_page" numb="01" name="race" />
			<AppSliderName v-if="pages.class_page" numb="02" name="class" />
			<AppName
				v-if="pages.alignment_page"
				numb="03"
				title="name"
				v-model="MY.name"
			/>
			<div class="delimiter" />
		</div>

		<div class="main_menu_wrap" @click="showHome()">
			<div 
      class="main_chapter_menu" 
      :class="{'pd-top-22': pages.master_page}"
      @click.stop
      >
        <Welcome no_title v-if="pages.master_page"/>
				
        <RaceMenu v-if="pages.race_page" />
				<ClassMenu v-if="pages.class_page" />
				<AlignmentMenu v-if="pages.alignment_page" />
			</div>

			<transition name="btm-fade" mode="out-in">
        <my-button
          v-if="shown_home"
          :numb="btn_Numb"
          :title="btn_Name"
          @click="btnGo()"
        />
				<my-button-back
					v-else
					title="command_back"
					@click="showHome()"
				/>
			</transition>
		</div>
	</div>

	<!-- Drop-down menu -->
	<div class="sidebar_wrap" :class="{ sidebar_wrap_open: setting_open }">
		<HeaderSettings />
		<RaceSettings v-if="pages.race_page" />
		<ClassSettings v-if="pages.class_page" />
		<AlignmentSettings v-if="pages.alignment_page" />
	</div>

	<div class="stripe"></div>
	<!-- Character -->

	<div class="represent" @click="showHome()" v-show="!PRINT_BLANK">
    <WhatDND v-if="pages.master_page"/>
		<transition v-if="!pages.master_page" name="fade-body">
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
	<div
		v-show="!PRINT_BLANK"
		class="sidebar_right"
		:class="{ sidebar_right_close: close_Sidebar_Right }"
	>
		<MasterParameters v-if="pages.master_page" />
		<RaceParameters v-if="pages.race_page" />
		<ClassParameters v-if="pages.class_page" />
		<AlignmentParameters v-if="pages.alignment_page" />
	</div>

	<!-- alse -->
	<my-dialog-spell v-model:show="site_settings.print_dialog" finish>
		<div class="title-donat int-700">{{ t("support_project") }}</div>
		<Donate finish @getPdf="exportToPDF()" :progress="progress_load"/>
	</my-dialog-spell>

	<div v-if="site_settings.print_dialog || PRINT_BLANK" id="element-to-convert">
		<BlankPrint />
	</div>

	<div v-if="small_screen" class="plug-wrap int-700-20">
		<div class="plug-dialog">
			<div class="grey-4-main">{{ t("responsive_top") }}</div>
			<div class="emog">
				{{ em_Before }}
				<emoji
					v-if="em_Upd"
					:data="emojiIndex"
					:emoji="em_Upd"
					:set="set_emoji"
					:size="21"
				/>
				{{ em_After }}
			</div>
		</div>
	</div>
</template>

<script>
import html2pdf from "html2pdf.js";

import { mapState, mapWritableState, mapActions } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";

import MainApp from "@/components/main/MainApp.js";
export default {
	name: "Main",
	mixins: [MainApp],
	data() {
		return {
			small_screen: false,
			PRINT_BLANK: false,
      progress_load: 100,
		};
	},

	created() {
		this.getCreated();
		window.addEventListener("resize", this.onResize);
		this.onResize();
	},

	destroyed() {
		window.removeEventListener("resize", this.onResize);
	},

	computed: {
		//STORES
		...mapWritableState(useDicStore, ["select_lang"]),
		...mapState(useMYStore, [
      "MY", 
      "MY_Race", 
      "MY_Ethnos",
      "MY_Backstory",
      "MY_Class",
      "MY_Subclass"
    ]),
		...mapState(usePagesStore, [
			"site_settings",
			"links",
			"race_page",
			"class_page",
			"shown_home",
			"page_setting_open",
			"setting_open",
			"pages",
			"page_Open",
      "btn_Numb",
      "btn_Name"
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

		t_Details() {
			return this.t("responsive_bottom");
		},

    t_Lobby() {
      return this.T("lobby_welcome_title");
    },

		em_Upd() {
			return this.updEmoji(this.t_Details);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Details);
		},

		em_After() {
			return this.afterEmoji(this.t_Details);
		},
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

		arr_Name_Race_Page() {
			let arr = [];
			arr.push(this.MY_Race.name);
			arr.push(this.MY_Ethnos.name);
			arr.push(this.MY_Backstory.name);
			return arr;
		},

		arr_Name_Class_Page() {
			let arr = [];
			arr.push(this.MY_Class.name);
			this.MY_Subclass?.name ? arr.push(this.MY_Subclass.name) : null;
			return arr;
		},
	},
	watch: {
		"MY_Race.name": "getWatch_Race",
		"MY_Class.name": "getWatch_Class",
    "MY.age"() {
      if(!this.MY.age) this.MY.age = this.Get_Age;
    },
    "MY.height"() {
      if(!this.MY.height) this.MY.height = this.Get_Height;
    },
    "MY.weight"() {
      if(!this.MY.weight) this.MY.weight = this.Get_Weight;
    },

		feats_Condition_Pass_Name: {
			handler: function (val, oldVal) {
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
	},

	methods: {
    ...mapActions(usePagesStore, [
			"showHome",
			"closeEthnos",
			"closeColor",
			"closePar",
			"goPage",
			"closeCustomSett",
      "btnGo",
		]),

		onResize() {
			this.small_screen = window.innerWidth <= 1279;
		},

    exportToPDF() {
      this.progress_load = 25;
      setTimeout(() => {
        this.loadPdf()
					}, 1);
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
					imageTimeout: 30000,
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
			// html2pdf().set(opt).from(element).save();
			// html2pdf().set(opt).from(element).toContainer().toCanvas().toImg().toPdf().save().then().output('blob');

      // html2pdf().set(opt).from(element)
      // .toContainer().then(() => this.progress_load = 50)
      // .toCanvas().then(() => this.progress_load = 55)
      // .toImg().then(() => this.progress_load = 60)
      // .toPdf().then(() => this.progress_load = 70)
      // .save().then(() => this.progress_load = 80)
      // .output().then(() => this.progress_load = 100);

      html2pdf().set(opt).from(element).toContainer().thenCore(() => this.progress_load = 60)
      .toCanvas().thenCore(() => this.progress_load = 80).toImg().toPdf().save().output().then(() => this.progress_load = 100);
		},

		getCreated() {
			if (this.site_settings.save.MY_level) {
				this.MY.level = this.site_settings.save.MY_level;
				this.site_settings.save.MY_level = null;
			}

			if (this.site_settings.save.select_lang) {
				this.select_lang = this.site_settings.save.select_lang;
				this.site_settings.save.select_lang = null;
			}
			this.links.stats_link = {};
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
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

.grid-col {
	display: grid;
}

.gap-10 {
	gap: 10px;
}

.mr-top-22 {
  margin-top: 22px;
}

.stripe {
	min-width: 2px;
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

.pd-top-22 {
  padding-top: 22px;
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

.character > img {
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

.character > svg {
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

.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}

.plug-wrap {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-color: #0e1518;
	position: fixed;
	z-index: 10;
	color: #ffffff;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 26px;
}

.plug-dialog {
	width: 320px;
	background: rgba(255, 255, 255, 0.06);
	border-radius: 12px;
	padding: 28px;
	display: flex;
	flex-direction: column;
	gap: 72px;
	z-index: 1000;
}

.emog .emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 4px;
}

/* ---------------------sidebar_right----------------------*/
</style>
