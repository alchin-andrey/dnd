<template>
	<!-- <div class="main_chapter_menu"> -->
    
    <!-- RACE ETHNOS -->
	<div class="selection_menu_wrap">
		<div class="selection_menu">
			<my-selection
				@click="showSettings__Class('stats')"
				:active="class_page.shown.stats"
				title="stats"
				:type_arr="stats_Custom_Arr_RE"
			></my-selection>
		</div>
    <!-- RACE ETHNOS -->
	</div>
	<!-- </div> -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassMenuSettings",
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page"]),
    ...mapState(useMYStore, ["MY"]),
    // GETTERS
    ...mapState(useMYStore, [
      "stats_Custom_Arr_RE",
      "skills_Custom_Arr_RE",
      "languages_Custom_Arr_RE",
      "spells_Custom_Arr_RE",
    ]),

	},
	methods: {
    ...mapActions(usePagesStore, ["showSettings__Class"]),
	},
};
</script>

<style scoped>
.main_chapter_menu {
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
</style>
