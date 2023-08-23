<template>
	<div class="flex-row-sb">
		<Blank__OldschoolList__Left class="list-col--left" />
		<Blank__OldschoolList__Center class="list-col" />
		<Blank__OldschoolList__Right class="list-col" />
	</div>
</template>

<script>

import Blank__OldschoolList__Left from "@/components/blank_print/Blank__OldschoolList__Left.vue";
import Blank__OldschoolList__Center from "@/components/blank_print/Blank__OldschoolList__Center.vue";
import Blank__OldschoolList__Right from "@/components/blank_print/Blank__OldschoolList__Right.vue";
export default {
	name: "Blank__OldschoolList",
	components: {
		Blank__OldschoolList__Left,
		Blank__OldschoolList__Center,
		Blank__OldschoolList__Right,
	},
};
</script>

<style scoped>
.list-col--left {
	width: 576px;
}
.list-col {
	width: 648px;
}
</style>
