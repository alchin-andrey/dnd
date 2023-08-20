<template>
	<My-Selection-Box :shown="alignment_page.shown.blank_print" title="blank_print" :select="MY.param.blank_print">
		<AppCardWrapp 
		v-for="item in blank_arr"
		:key="item.name"
		:active_card="MY.param.blank_print == item.name" @click="getBlank(item.name)">
			<div>
				<div class="int-700">{{ T(item.name) }}</div>
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
				{name: 'standard', details: 'blank_standard_details'},
				{name: 'oldschool', details: 'blank_oldschool_details'},
			]
		};
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["alignment_page"]),
	},

	methods: {
		getBlank(str) {
			this.MY.param.blank_print = str;
		},

	},
};
</script>

<style scoped>
</style>
