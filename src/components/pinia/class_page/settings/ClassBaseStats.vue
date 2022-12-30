<template>
	<div class="marg">
		<my-wrapper gap_16>
			<ClassStatsTable />
		</my-wrapper>
	</div>
	<my-selection-card v-for="name in stats_Keys" :key="name" passive>
		<BaseStatsCard :stats_name="name" />
	</my-selection-card>
  <transition name="fade">
	<my-selection-card
		v-if="stats_base_save[MY.class.name]"
		@click="defaultStats()"
	>
		<div class="int-700 btm_reset" >
			<div>{{ t("refresh_to_recommended") }}</div>
			<img src="@/assets/img/icon/reset.svg" alt="reset" />
		</div>
	</my-selection-card>
</transition>
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
.btm_reset {
	display: flex;
	justify-content: space-between;
	height: 15px;
	padding-right: 3px;
}

.marg {
	margin: 0 0 26px 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
