<template>
	<div class="main_btm flex-col-sb" :class="{ active_btm: stop_Loading }" @click="exportToPDF()">
		<div class="jbm-300 mr-b-25" v-if="full">01</div>
		<div class="flex-row-sb-c">
			<div>
				<div class="int-700">{{ t_Title }}</div>
				<div v-if="full" class="text-size int-400 mr-t-4">{{ t_Text }}</div>
			</div>
			<AppSvg 
				v-if="stop_Loading"
				class="svg-18 svg-main-f"
				:class="style_PosSvg"
				name="download"
			/>
		</div>
    <div class="load_btm">
    <div class="load-progress" :style="{ width: load_Progress,}"/>
    </div>
	</div>
</template>

<script>
import html2pdf from "html2pdf.js";

import { mapState, mapWritableState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
// import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppLoadBtm",
	data() {
		return {
			// ui_icon: ui_icon,
			progress_load: 0,
		};
	},
	props: {
		full: {
			type: Boolean,
			default: false,
		}
	},
	computed: {
		...mapState(useMYStore, [
			"MY",
			"MY_Race",
		]),

		// download_pdf

		...mapWritableState(usePagesStore, ["loading_pdf"]),

		t_Title() {
			if(this.progress_load !== 0) return this.T('load_progress');
      if(this.full) return this.T('download_cta')
      return this.T('download_pdf');
		},

		t_Text() {
      return this.t('download_charsheet_details');
		},

    load_Progress() {
      return this.progress_load + '%'
    },

    stop_Loading() {
      return this.progress_load == 0;
    },

		style_PosSvg() {
			if(this.full) return 'full_pos';
      return 'simple_pos';
		}
	},

	methods: {
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

			const element = document.getElementById("element-to-convert");
			const elements = [ ...element.querySelectorAll('.print-page')];

			let worker = html2pdf()
				.set(opt)
				.from(elements[0]);

			if (elements.length > 1) {
				worker = worker.toPdf();

				elements.slice(1).forEach(async el => {
					worker = worker
						.get('pdf')
						.then(pdf => {
							pdf.addPage();
						})
						.from(el)
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
	}
};
</script>

<style scoped>
.main_btm {
	padding: 16px;
	background: #0e1518;
	backdrop-filter: blur(60px);
	-webkit-backdrop-filter: blur(60px);
	border-radius: 12px;
	position: relative;
}

.load_btm {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
  overflow: hidden;
	/* background: red; */
	border-radius: 12px;
}

.active_btm {
  background: #0047ff;
	cursor: pointer;
}

.active_btm:hover {
	background: #1355ff;
}

.load-progress {
  height: 100%;
  background: #0047ff;
  transition-property: all;
  transition-duration: 1s;
}

.full_pos{
	position: absolute;
	right: 16px;
	bottom: 15px;
}

.simple_pos{
	position: absolute;
	right: 16px;
	top: 50%;
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

.text-size {
	padding-right: 36px;
}

@media (max-width: 1279px) {
	.text-size {
		padding-right: 68px;
	}
}
</style>
