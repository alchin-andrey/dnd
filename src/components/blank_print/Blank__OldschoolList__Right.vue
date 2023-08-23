<template>
	<div class="flex-col gap-36">
		<BlankTable__MainNames type="part" :part="2" />
		<BlankTable__MainNames type="part" :part="3" />

		<BlankTable__MainSett />

		<BlankTable__Fines vertical />

		<BlankText__Support class="print-cell" qr_centre/>
	</div>
</template>

<script>
import BlankTable__MainNames from "@/components/blank_print/BlankTable__MainNames.vue";
import BlankTable__MainSett from "@/components/blank_print/BlankTable__MainSett.vue";
import BlankTable__Fines from "@/components/blank_print/BlankTable__Fines.vue";
import BlankText__Support from "@/components/blank_print/BlankText__Support.vue";
export default {
	name: "Blank__OldschoolList__Right",
	components: {
		BlankTable__MainNames,
		BlankTable__MainSett,
		BlankTable__Fines,
		BlankText__Support,
	},
};
</script>

<style scoped>
.print-cell {
	padding: 0 12px;
	border: 1px solid #000000;
	border-radius: 6px;
	width: 100%;
	height: 100%;
}
</style>
