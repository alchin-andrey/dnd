<template>
	<section class="int-400-22" v-if="pages.alignment_page">
		<Blank__Page_1 class="print-page" blank_print="oldschool" blank_size="print" id="oldschool-screen-1"/>
		<Blank__Page_1 class="print-page" blank_print="standard" blank_size="print" id="standard-screen-1"/>
	</section>
</template>

<script>
import domtoimage from 'dom-to-image-more';

import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import Blank__Page_1 from "@/components/blank_print/Blank__Page_1.vue";
export default {
	name: "BlankScreen",
	components: {
		Blank__Page_1,
	},
		computed: {
		//STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, [
			"site_settings",
			"pages",
			"alignment_page"
		]),
	},

	watch: {
		"alignment_page.shown.blank_print": "getPageImage",
		// "pages.alignment_page": "getPageImage",
		// "MY.custom_photo": "getPageImage",
		// "MY.param.user_photo": "getPageImage",
	},

	methods: {

		getPageImage() {
			console.log('getPageImage:')
			this.site_settings.print_image.oldschool.load_1 = true;
			this.site_settings.print_image.standard.load_1 = true;
			if(this.alignment_page.shown.blank_print) {
				setTimeout(() => {
						this.onCapture('oldschool', 1);
						this.onCapture('standard', 1);
				} , 400);
			}
		},

    onCapture(type, page_numb) {
			const load = `load_${page_numb}`;
			this.site_settings.print_image[type][load] = true;
			const list_id = `${type}-screen-${page_numb}`;
      console.log('list_id:', list_id)
      const capture = document.getElementById(list_id);

			const options = {
				width: capture.clientWidth,
        height: capture.clientHeight,
      }

      domtoimage
				.toPng(capture, options)
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
	},
};
</script>

<style scoped>
.print-page {
	width: 100%;
	height: 2952px;
	padding: 72px;
	background-color: #ffffff;
	width: 2088px;
	color: #000000;
}
</style>
