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

		<section class="selection_menu">
			<AlignmentMenu__Photo />
		</section>
    
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";

import AlignmentMenu__Photo from "@/components/menu/3_menu__alignment/AlignmentMenu__Photo.vue"

export default {
	name: "AlignmentMenu",
	components: {
		AlignmentMenu__Photo
	},
	computed: {
    // STORE
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["alignment_page"]),
		...mapState(useAlignmentStore, ["сustomm_Main_Settings_Alignment_Arr", "photo_Select"]),
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

.selection_menu {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
</style>
