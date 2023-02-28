<template>
	<!-- Характеристики -->
	<my-selection-box :shown="alignment_page.shown.alignment">
		<AlignmentSett__Alignment />
	</my-selection-box>

	<!-- customm_Settings -->
  <my-selection-box
			v-for="item in сustomm_Main_Settings_Alignment_Arr"
			:key="item.id_link"
			:shown="alignment_page.shown[item.id_link]"
		>
			<AlignmentSett__Custom :custom="item"/>
		</my-selection-box>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";

import AlignmentSett from "@/components/settings/3_settings__alignment/AlignmentSett.js";
export default {
	name: "AlignmentSettings",
	mixins: [AlignmentSett],
	computed: {
		// STORE
		...mapState(usePagesStore, ["alignment_page"]),
    ...mapState(useAlignmentStore, ["сustomm_Main_Settings_Alignment_Arr"]),
	},
  methods: {
  }
};
</script>

<style scoped>
/* .flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
} */
</style>
