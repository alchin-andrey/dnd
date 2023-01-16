<template>
	<my-wrapper gap_8 :hr="hr">
		<my-inventory
			v-for="name in proficiencies"
			:key="name"
			:title="name"
			:item="proficiencies_Arr_Class(name)"
			:item_old="proficiencies_Race_Params_Any(name)"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

export default {
	name: "ClassParam__Proficiencies",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useProficienciesStore, [
			"proficiencies",
			"proficiencies_Race_Params_Any",
			"proficiencies_Arr_Class",
		]),
	},
};
</script>
