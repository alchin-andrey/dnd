<template>
	<div class="selection_menu_wrap">

    <div class="selection_menu">
      <AppSelection
				@click="showSettings__Alignment('alignment')"
				:active="alignment_page.shown.alignment"
				title="alignment"
				:type="MY.alignment"
			/>
      <AppSelectionArr :menu="сustomm_Main_Settings_Alignment_Arr"/>
		</div>
    
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";

export default {
	name: "AlignmentMenu",
	computed: {
    // STORE
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["alignment_page"]),
		...mapState(useAlignmentStore, ["сustomm_Main_Settings_Alignment_Arr"]),
	},
	methods: {
    ...mapActions(usePagesStore, ["showSettings__Alignment"]),
	},
};
</script>

<style scoped>

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

/* .selection_menu_wrap::-webkit-scrollbar {
	width: 0;
} */

.selection_menu {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
</style>
