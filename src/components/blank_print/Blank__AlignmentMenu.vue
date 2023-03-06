<template>
	<section class="selection-print-menu">
		<AppPrintMenu title="alignment" :chapter="MY.alignment" />
		<AppPrintMenu :menu="сustomm_Main_Settings_Alignment_Arr" />
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "Blank__AlignmentMenu",

	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useAlignmentStore, ["сustomm_Main_Settings_Alignment_Arr"]),
	},
};
</script>

<style scoped>

.selection-print-menu {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
</style>
