<template>
	<section>
		<div :class="['print-col', style_Height]">
			<div class="int-600-28 f-lh-30 mr-b-10">{{ T('print_biography') }}</div>
			<div class="int-500-22" v-if="user_Biography" >{{ user_Biography }}</div>
			<div class="int-500-22 mr-t-10" v-else v-html="T('print_biography_details')" />
		</div>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "BlankText__Biography",
	computed: {
    ...mapState(useMYStore, ["MY"]),

		user_Biography() {
			return this.MY.biography_options[this.MY.user_biography - 1].text
		},

		style_Height() {
			let standard_blank = this.MY.param.blank_print == 'standard';
			return standard_blank ? 'h-standard' : 'h-old';
		}
	},
};
</script>

<style scoped>
.h-standard {
	height: 1332px;
}

.h-old {
	height: 550px;
}

.print-col {
	column-fill: auto;
	column-count: 3;
	column-gap: 72px;
	white-space: pre-wrap;
}
</style>
