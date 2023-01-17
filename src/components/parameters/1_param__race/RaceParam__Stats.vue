<template>
	<my-wrapper :hr="hr">
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
</template>

<script>
import { mapState } from "pinia";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "RaceParam__Stats",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(useStatsStore, [
    "stats_Keys", 
    "stats_Race_Page_Numb",
  ]),
	},
};
</script>


