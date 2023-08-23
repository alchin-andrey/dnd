<template>
	<div class="main-class">
		<Main__MenuBar />
		<Main__SetBar />
		<Main__CharBar v-show="!PRINT_BLANK"/>
		<Main__ParamBar v-show="!PRINT_BLANK"/>

		<!-- <BlankPrint v-if="site_settings.print_dialog || PRINT_BLANK" id="element-to-convert"/> -->
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

	<section class="int-400-22" v-if="alignment_page.shown.blank_print">
		<Blank__Page_1 class="print-page" blank_print="oldschool" id="oldschool-page-1"/>
		<Blank__Page_1 class="print-page" blank_print="standard" id="standard-page-1"/>
		<Blank__Page_2 class="print-page" blank_print="oldschool" id="oldschool-page-2"/>
		<Blank__Page_2 class="print-page" blank_print="standard" id="standard-page-2"/>
	</section>

	<BlankPrint v-if="site_settings.print_dialog || PRINT_BLANK" id="element-to-convert"/>

	<!-- <PlagBanner v-if="!screen_Max"/> -->
</template>

<script>
import html2pdf from "html2pdf.js";
import domtoimage from 'dom-to-image-more';

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
			// PRINT_BLANK: true,
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
			"pages",
			"screen_Max",
			"alignment_page"
		]),

		...mapState(useFormStore, [
			"Get_Age",
			"Get_Weight",
			"Get_Height",
		]),

		...mapState(useFeatsStore, [
			"feats_Condition_Pass_Name",
			"feats_Arr_Select_Id",
			"feats_Arr_Free",
		]),

		...mapState(useGenderStore, ["names_Arr"]),
	},
	watch: {
		"MY_Race.name": "getWatch_Race",
		"MY_Class.name": "getWatch_Class",

		"alignment_page.shown.blank_print": "getPageImage",

		names_Arr(val, oldVal) {
			const incl = val.includes(this.MY.name);
			const user_name = this.MY.param.user_name;
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
			"closeEthnos",
			"closeColor",
			"closeCustomSett",
		]),
		...mapActions(useGenderStore, ["getRandomName"]),

		getPageImage() {
			this.site_settings.print_image.oldschool.load_1 = true;
			this.site_settings.print_image.oldschool.load_2 = true;
			this.site_settings.print_image.standard.load_1 = true;
			this.site_settings.print_image.standard.load_2 = true;
			if(this.alignment_page.shown.blank_print) {
				setTimeout(() => {
				this.onCapture('oldschool', 1);
				this.onCapture('standard', 1);
				this.onCapture('oldschool', 2);
				this.onCapture('standard', 2);
			} , 500);
			}
		},

    onCapture(type, page_numb) {
			const load = `load_${page_numb}`;
			this.site_settings.print_image[type][load] = true;
			const list_id = `${type}-page-${page_numb}`;
      const capture = document.getElementById(list_id);
      domtoimage
				.toPng(capture)
        .then((dataUrl) => {
					const page = `page_${page_numb}`;
          this.site_settings.print_image[type][page] = dataUrl;
					this.site_settings.print_image[type][load] = false;
        })
        .catch((error) => {
					this.site_settings.print_image[type][load] = false;
          console.error("oops, something went wrong!", error);
        });
    },

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



.blank-conteiner {
	/* width: 100%; */
	width: 2088px; /* 1588 */
	color: #000000;
	/* z-index: 10; */
	/* height: 10000%; */
	/* padding: 72px; */
	/* overflow-y: scroll; */
	/* scrollbar-width: none; */
	/* background-color: #ffffff; */
	/* margin-right: -2088px; */
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.blank-scroll {
	height: 10000%;
}

.print-page {
	width: 100%;
	height: 2952px;
	padding: 72px;
	background-color: #ffffff;
	width: 2088px;
	color: #000000;
}


.lab__btn {
  border: none;
  cursor: pointer;
  padding: 10px;
  background: #ffc107;
  color: white;
  border-radius: 9px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
}

.lab__btn:hover {
  background: transparent;
}
</style>
