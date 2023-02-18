<template>
	<section class="ethnos_attributes">
    <RaceParam__Stats />
		<my-card-text text="stats_base_details_race"></my-card-text>
	</section>
  
	<my-selection-card
		v-for="name in stats_Pass_Arr_RE"
		:key="name"
		@click="getCustomSelect_Stats_RE(name)"
		:active_boll_link="stats_Custom_Arr_RE.includes(name)"
	>
		<my-attribute
			:title="name"
			:type="`${name}_base`"
			plus
			:numb="ethnos_Setting('stats').num"
		>
		</my-attribute>
		<my-card-text title="" :text="`${name}_details`"></my-card-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

import RaceParam__Stats from "@/components/parameters/1_param__race/RaceParam__Stats.vue";
export default {
	name: "RaceSetting__Stats",
  components: {
    RaceParam__Stats,
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page"]),
		// GETTERS
    ...mapState(useMYStore, ["ethnos_Setting"]),

    stats_Keys() {
      const MYStore = useMYStore();
			return Object.keys(MYStore.MY.stats);
		},

    stats_Activ_Obj_RE() {
      const MYStore = useMYStore();
			let i = MYStore.MY.race.stats;
			let j = MYStore.MY.ethnos.stats;
			return Object.assign({}, i, j);
		},

		stats_Activ_Arr_RE() {
			return Object.keys(this.stats_Activ_Obj_RE);
		},

		stats_Pass_Arr_RE(state) {
			return this.stats_Keys.filter(
				(el) => !this.stats_Activ_Arr_RE.includes(el)
			);
		},
	},

	methods: {
    getCustomSelect_Stats_RE(name) {
			this.getCustomSelect_COMMON_RE("stats", name);
		},
	},
};
</script>

<style scoped>
.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}
</style>
