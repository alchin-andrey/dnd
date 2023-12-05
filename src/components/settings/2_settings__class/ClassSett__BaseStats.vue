<template>
	<section class="marg">
		<ClassParam__Stats />
	</section>

	<BaseStatsCard v-for="name in stats_Keys" :key="name" :stats_name="name" />
	
	<transition name="fade">
		<AppBtm
			v-if="MY.stats_base_save[MY_Class.name]" 
			icon="return"
			@click="defaultStats()"
			name="refresh_to_recommended" 
		/>
	</transition>
</template>

<script>
import BaseStatsCard from "@/components/settings/2_settings__class/BaseStatsCard.vue";
import ClassParam__Stats from "@/components/parameters/2_param__class/ClassParam__Stats.vue";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassSett__BaseStats",
	components: {
		BaseStatsCard,
		ClassParam__Stats,
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "MY_Class"]),
		// GETTERS
		...mapState(useStatsStore, ["stats_Keys"]),
	},

	methods: {
		defaultStats() {
			this.MY.stats_base_save[this.MY_Class.name] = null;
		},
	},
};
</script>

<style scoped>
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
