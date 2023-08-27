<template>
	<div class="main-class">
		<Main__MenuBar />
		<Main__SetBar />
		<Main__CharBar v-show="!PRINT_BLANK" />
		<Main__ParamBar v-show="!PRINT_BLANK" />

		<!-- <BlankPrint v-if="site_settings.print_dialog || PRINT_BLANK" id="element-to-convert"/> -->
	</div>

	<!-- alse -->
	<my-dialog-spell v-model:show="site_settings.print_dialog" finish>
		<section class="flex-col h-100">
			<PromoSlider />
			<Donate :class="{
				'pd-32': screen_Max,
				'pd-20': !screen_Max,
			}" finish @getPdf="exportToPDF()" :progress="progress_load" />
		</section>
	</my-dialog-spell>


	<BlankPrint v-if="site_settings.print_dialog || PRINT_BLANK" id="element-to-convert" />
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

		exportToPDF() {
			if (!this.loading_pdf) {
				this.loading_pdf = true;
				this.progress_load = 15;
				setTimeout(() => this.loadPdf(), 0.1);
			}
		},

		loadPdf() {
			const lvl = this.MY.level;
			const type = this.T(this.MY.param.blank_print);
			const name = this.MY.name.length !== 0
				? this.MY.name
				: `${this.T("someone")}_${this.t(this.MY_Race.name)}`;
			const element = document.getElementById("element-to-convert");
			const numb_page_full = element.clientHeight / 2952;
			const numb_page_main = this.MY.param.blank_print == 'standard' ? 5 : 4;
			const num_page_spell = numb_page_full - numb_page_main;
			const opt = {
				margin: 0,
				filename: `${name}_LVL${lvl}_${type}.pdf`,
				image: { type: "jpeg", quality: 1 },
				html2canvas: {
					dpi: 150,
					scale: 1,
					width: 2088,
					// height: 2952,
					// width: element.clientWidth,
					// height: element.clientHeight,
					imageTimeout: 30000,
					letterRendering: true,
					allowTaint: true,
					useCORS: true,
				},
				jsPDF: {
					unit: "pt",
					format: "a4",
					orientation: "portrait",
					// compress: true,
					// hotfixes: "px_scaling",
				},
			};

			const elements = [];
			for (let i = 1; i <= 3; i++) {
				elements.push(document.getElementById(`print-page-${i}`));
			}
			for (let i = 1; i <= num_page_spell; i++) {
				elements.push(document.getElementById(`print-page-4.${i}`));
			}
			elements.push(document.getElementById('print-page-5'));
			if (this.MY.param.blank_print == 'standard') {
				elements.push(document.getElementById('print-page-6'));
			}

			let worker = html2pdf()
				.set(opt)
				.from(elements[0]);

			if (elements.length > 1) {
				worker = worker.toPdf();

				elements.slice(1).forEach(async element => {
					worker = worker
						.get('pdf')
						.then(pdf => {
							pdf.addPage();
						})
						.from(element)
						.toContainer()
						.then(() => this.progress_load = 85)
						.toCanvas()
						.toPdf();
				});
			}

			worker.save().then(() => this.progress_load = 100)
				.output().then(() => {
					setTimeout(() => this.progress_load = 0, 1000);
					setTimeout(() => this.loading_pdf = 0, 2000);
				});;

			// html2pdf().set(opt).from(element).toContainer().then(() => this.progress_load = 85)
			// 	.toCanvas().toImg().toPdf().save().then(() => this.progress_load = 100)
			// 	.output().then(() => {
			// 		setTimeout(() => this.progress_load = 0, 1000);
			// 		setTimeout(() => this.loading_pdf = 0, 2000);
			// 	});
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
</style>
