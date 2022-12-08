<template>
	<div class="marg">
		<my-wrapper gap_16>
			<ClassStatsTable />
		</my-wrapper>
	</div>
	<my-selection-card v-for="name in stats_Keys" :key="name" passive>
		<BaseStatsCard :stats_name="name" />
	</my-selection-card>
	<my-selection-card
		v-if="stats_base_save[MY.class.name]"
		@click="defaultStats()"
		class="jbm-300 btm_text"
	>
		{{ t(MY.class.name) }} по дефолту
	</my-selection-card>
</template>

<script>
import BaseStatsCard from "@/components/pinia/class_page/settings/BaseStatsCard.vue";
import ClassStatsTable from "@/components/pinia/class_page/settings/ClassStatsTable.vue";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassBaseStats",
	components: {
		BaseStatsCard,
		ClassStatsTable,
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(useStatsStore, ["stats_base_save"]),
		// GETTERS
		...mapState(useStatsStore, ["stats_Keys"]),
	},

	methods: {
		defaultStats() {
			this.stats_base_save[this.MY.class.name] = null;
		},
	},
};
</script>

<style scoped>
.btm_text {
	text-align: center;
}

.marg {
	margin: 0 0 26px 16px;
}
</style>
