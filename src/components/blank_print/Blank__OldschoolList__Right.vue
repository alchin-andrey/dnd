<template>
	<div class="flex-col gap-36-blank">
		<BlankTable__MainNames type="part" :part="2" />
		<BlankTable__MainNames type="part" :part="3" />

		<BlankTable__MainSett />

		<BlankTable__Fines :blank_size="blank_size" vertical />

		<BlankText__Support class="print-cell" :blank_size="blank_size" qr_centre/>
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
	props: {
		blank_size: {
			type: String,
			default: null,
		}
	},
};
</script>

<style scoped>
.print-cell {
	padding: 0 var(--px-12);
	border: var(--border-blank);
	border-radius: var(--px-6);
	width: 100%;
	height: 100%;
}
</style>
