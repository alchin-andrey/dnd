<template>
	<div class="ethnos_attributes" @click="openHook()">
		<!-- Этнос_stats -->
		<my-wrapper>
			<my-attribute
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="stats_Race_Page_Numb(name)"
				:icon="name"
			>
			</my-attribute>
		</my-wrapper>
		<my-card-text text="stats_base_details"></my-card-text>
	</div>
	<my-selection-card
		v-for="name in stats_Pass_Arr_RE"
		:key="name"
		@click="getCustomSelect_RE('stats', name)"
		:active_boll_link="stats_Custom_Arr_RE.includes(name)"
	>
		<my-attribute
			:title="name"
			:type="`${name}_base`"
			plus
			:numb="MY.race.settings.custom_stats[1]"
			:icon="name"
		>
		</my-attribute>
		<my-card-text title="" :text="`${name}_details`"></my-card-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";
export default {
	name: "RaceCustomStats",
	computed: {
    ...mapState(useMYStore, ["MY"]),
    ...mapState(usePagesStore, ["race_page"]),

    ...mapState(useMYStore, [
      "stats_Keys",
      // "stats_Activ_Obj_RE",
      "stats_Pass_Arr_RE",
      "stats_Custom_Arr_RE",
      "stats_Race_Page_Numb",
      // "option_Race_Page_Numb",
      // "option_Custom_Arr_RE",
    ]),
	},

	methods: {
		...mapActions(useMYStore, [
      "getCustomSelect_RE",
      "getStatsRacePageNumb"
    ]),
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
