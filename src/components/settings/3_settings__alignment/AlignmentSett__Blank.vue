<template>
	<My-Selection-Box :shown="alignment_page.shown.blank_print" title="blank_print" :select="MY.param.blank_print"
		mob_fixed>
		<AppCardWrapp v-for="item in blank_arr" :key="item" :active_card="MY.param.blank_print == item.name"
			@click="getBlank(item.name)">
			<div>
				<section>
					<img class="img-size" :src="site_settings.print_image[item.name].page_1"
						v-if="!site_settings.print_image[item.name].load_1 && site_settings.print_image[item.name].page_1">
					<div class="flex-row-c-jc size-load" v-else>
						<div>
							<div class="loader"></div>
						</div>
					</div>
				</section>

				<div class="int-700 mr-t-22">{{ T(item.name) }}</div>
				<div class="int-400 white-04 mr-t-4">{{ T(item.details) }}</div>
			</div>
		</AppCardWrapp>

	</My-Selection-Box>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "AlignmentSett__Blank",
	data() {
		return {
			blank_arr: [
				{ name: 'standard', details: 'blank_standard_details' },
				{ name: 'oldschool', details: 'blank_oldschool_details' },
			]
		};
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["alignment_page", "site_settings"]),
	},

	methods: {
		getBlank(str) {
			this.MY.param.blank_print = str;
		},
	},
};
</script>

<style scoped>
.img-size {
	width: 100%;
	border-radius: 6px;
}

.size-load {
	width: 100%;
	height: 512px;
	background-color: rgba(255, 255, 255, 0.06);
	border-radius: 6px;
}

.loader {
	--b: 5px; /* border thickness */
	--n: 10; /* number of dashes*/
	--g: 10deg; /* gap between dashes*/
	--c: rgb(255, 255, 255); /* the color */
	width: 50px;
	aspect-ratio: 1;
	border-radius: 50%;
	padding: 1px;
	background: conic-gradient(#0000, var(--c)) content-box;
	-webkit-mask:
		repeating-conic-gradient(#0000 0deg,
			#000 1deg calc(360deg/var(--n) - var(--g) - 1deg),
			#0000 calc(360deg/var(--n) - var(--g)) calc(360deg/var(--n))),
		radial-gradient(farthest-side, #0000 calc(98% - var(--b)), #000 calc(100% - var(--b)));
	mask:
		repeating-conic-gradient(#0000 0deg,
			#000 1deg calc(360deg/var(--n) - var(--g) - 1deg),
			#0000 calc(360deg/var(--n) - var(--g)) calc(360deg/var(--n))),
		radial-gradient(farthest-side, #0000 calc(98% - var(--b)), #000 calc(100% - var(--b)));
	-webkit-mask-composite: destination-in;
	mask-composite: intersect;
	animation: load 1s infinite steps(var(--n));
}

@keyframes load {
	to {
		transform: rotate(1turn)
	}
}</style>
