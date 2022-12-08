<template>
    <!-- RACE ETHNOS -->
	<div class="selection_menu_wrap">
		<div class="selection_menu">
			<my-selection
				@click="showSettings__Class('stats')"
				:active="class_page.shown.stats"
				title="stats"
				:t_type="stats_Base_Settings_Two_T"
			></my-selection>
		</div>
    <!-- RACE ETHNOS -->
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassMenuSettings",
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page"]),
    // GETTERS
    ...mapState(useStatsStore, ["stats_Custom_Arr_RE", "stats_Base_Settings_Two_T"]),

	},
	methods: {
    ...mapActions(usePagesStore, ["showSettings__Class"]),
	},
};
</script>

<style scoped>

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
