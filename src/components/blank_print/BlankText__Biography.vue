<template>
	<section>
		<div class="int-600-28">{{ T('print_biography') }}</div>
		<div class="print-col int-500-22 mr-t-10" v-html="T('print_biography_details')" />
	</section>
</template>

<script>
export default {
	name: "BlankText__Biography",
};
</script>

<style scoped>
.print-col {
  width: 600px;
}
</style>
