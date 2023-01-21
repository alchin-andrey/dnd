<template>
	<div class="selection_menu_wrap">
		
    <div class="selection_menu" v-if="MY_Subclass">
      <my-selection
				@click="showSettings__Class('subclass')"
				:active="class_page.shown.subclass"
				title="subclass"
				:type="MY_Subclass.name"
			></my-selection>
    </div>

    <div class="selection_menu">
			<my-selection
				@click="showSettings__Class('stats')"
				:active="class_page.shown.stats"
				title="stats"
				:t_type="stats_Base_Settings_Two_T"
			></my-selection>
		</div>

    <div class="selection_menu">
			<AppSelectionArr 
      v-for="сustomm in сustomm_Settings_100"
      :key="сustomm[0].name"
			:menu="сustomm"
			></AppSelectionArr>
		</div>

	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassMenu",
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page"]),
    // GETTERS
		...mapState(useMYStore, ["MY_Subclass", "сustomm_Settings_100"]),

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
