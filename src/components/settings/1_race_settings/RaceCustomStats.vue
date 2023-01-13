<template>
	<div class="ethnos_attributes">
		<!-- Этнос_stats -->
		<my-wrapper>
			<my-attribute
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="stats_Race_Page_Numb(name)"
			>
			</my-attribute>
		</my-wrapper>
		<my-card-text text="stats_base_details"></my-card-text>
	</div>
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
export default {
	name: "RaceCustomStats",
	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page"]),
		// GETTERS
    ...mapState(useMYStore, ["ethnos_Setting"]),
		...mapState(useStatsStore, [
			"stats_Keys",
			"stats_Pass_Arr_RE",
			"stats_Custom_Arr_RE",
			"stats_Race_Page_Numb",
		]),
	},

	methods: {
    ...mapActions(useStatsStore, ["getCustomSelect_Stats_RE"]),
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
