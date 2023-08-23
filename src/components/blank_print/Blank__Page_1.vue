<template>
	<div>
		<Blank__StandardList v-if="standard_Blank"/>
		<Blank__OldschoolList v-else/>
	</div>
</template>

<script>

import Blank__OldschoolList from "@/components/blank_print/Blank__OldschoolList.vue";
import Blank__StandardList from "@/components/blank_print/Blank__StandardList.vue";
export default {
	name: "Blank__Page_1",
	components: {
		Blank__OldschoolList,
		Blank__StandardList,
	},

	props: {
		blank_print: {
			type: String,
			default: null,
		},
  },

	computed: {
		standard_Blank() {
			return this.blank_print == 'standard';
		},
	},
};
</script>

<style scoped>
</style>
