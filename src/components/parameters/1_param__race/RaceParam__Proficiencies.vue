<template>
	<my-wrapper gap_8 :hr="hr">
		<my-inventory
			v-for="name in proficiencies"
			:key="name"
			:title="name"
			:item="proficiencies_Race_Params(name)"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

export default {
	name: "RaceParam__Proficiencies",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useProficienciesStore, [
			"proficiencies",
			"proficiencies_Race_Params",
		]),
	},
};
</script>
