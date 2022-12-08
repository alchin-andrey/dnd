<template>
	<my-selection-card v-for="name in stats_Keys" :key="name" passive>
		<BaseStatsCard :stats_name="name" />
	</my-selection-card>
  <my-selection-card 
  v-if="class_page.stats_base_save[MY.class.name]"
  @click="defaultStats()"
  class="jbm-300 btm_text">
    {{t(MY.class.name)}} по дефолту
  </my-selection-card>
</template>

<script>
import BaseStatsCard from "@/components/pinia/class_page/settings/BaseStatsCard.vue";

import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";
export default {
	name: "ClassBaseStats",
	components: {
		BaseStatsCard,
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "stats_Keys"]),
		...mapState(usePagesStore, ["class_page"]),
		// GETTERS
    ...mapState(useMYStore, ["stats_Keys"]),
	},

	methods: {
		...mapActions(useMYStore, ["getCustomSelect_Languages_RE"]),
    defaultStats() {
      this.class_page.stats_base_save[this.MY.class.name] = null;
    },
	},
};
</script>

<style scoped>
.btm_text{
text-align: center;
}
</style>
