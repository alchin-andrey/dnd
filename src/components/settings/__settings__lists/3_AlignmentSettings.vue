<template>
	<My-Selection-Box title="alignment" :select="MY.alignment" :shown="alignment_page.shown.alignment">
		<AlignmentSett__Alignment />
	</My-Selection-Box>

	<!-- customm_Settings -->
  <My-Selection-Box
			v-for="item in сustomm_Main_Settings_Alignment_Arr"
			:key="item.id_link"
			:menu="item"
			:shown="alignment_page.shown[item.id_link]"
		>
			<AlignmentSett__Custom :custom="item"/>
		</My-Selection-Box>
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
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["alignment_page"]),
    ...mapState(useAlignmentStore, ["сustomm_Main_Settings_Alignment_Arr"]),
	},
  methods: {
  }
};
</script>

<style scoped>
</style>
