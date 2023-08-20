<template>
	<div class="flex-row-sb">
		<Blank__ClassicList__Left class="list-col--left" />
		<Blank__ClassicList__Center class="list-col" />
		<Blank__ClassicList__Right class="list-col" />
	</div>
</template>

<script>

import Blank__ClassicList__Left from "@/components/blank_print/Blank__ClassicList__Left.vue";
import Blank__ClassicList__Center from "@/components/blank_print/Blank__ClassicList__Center.vue";
import Blank__ClassicList__Right from "@/components/blank_print/Blank__ClassicList__Right.vue";
export default {
	name: "Blank__ClassicList",
	components: {
		Blank__ClassicList__Left,
		Blank__ClassicList__Center,
		Blank__ClassicList__Right,
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
