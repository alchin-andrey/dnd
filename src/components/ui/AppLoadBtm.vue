<template>
	<div class="int-700 main_btm flex-row-sb-c" :class="{ active_btm: stop_Loading }" @click="exportToPDF()">
		<div>{{ t_Text }}</div>
		<div class="main_icon">
			<svg v-if="stop_Loading"
				class="main_svg"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				v-html="ui_icon.download"
			></svg>
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
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppLoadBtm",
	data() {
		return {
			ui_icon: ui_icon,
			progress_load: 0,
		};
	},
	props: {
		text: {
			type: String,
			default: "Load ...",
		},
		// progress: {
		// 	type: Number,
		// 	default: 0,
		// },
	},
	computed: {
		...mapState(useMYStore, [
			"MY",
			"MY_Race",
		]),

		...mapWritableState(usePagesStore, ["loading_pdf"]),
		
		t_Text() {
      if(this.progress_load == 0) {
        return this.T(this.text);
      } else {
        return this.T('load_progress');
      }
		},

		get_Active() {
			if (this.active_link !== null) {
				return this.active_link === this.select_link;
			} else if (this.active_boll_link) {
				return this.active_boll_link;
			} else {
				return null;
			}
		},

		img_Icon() {
			if (this.download) return "download";
			if (this.arrow) return "arrow_right_small";
			if (this.plus) return "plus";
		},

    load_Progress() {
      return this.progress_load + '%'
    },

    stop_Loading() {
      return this.progress_load == 0;
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

.pd-16 {
	padding: 16px;
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

.main_icon {
	width: 18px;
	height: 18px;
	fill: white;
	position: absolute;
	right: 16px;
	top: 50%;
	/* bottom: 50%; */
	-webkit-transform: translate(0%, -50%);
	-ms-transform: translate(0%, -50%);
	transform: translate(0%, -50%);
}

.main_svg {
	width: 18px;
	height: 18px;
	fill: white;
}
</style>
