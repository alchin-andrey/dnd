<template>
	<!-- <my-wrapper gap_8 :hr="hr">
		<my-inventory
			v-for="name in proficiencies"
			:key="name"
			:title="name"
			:item="proficiencies_Class_Params(name)"
			:item_old="proficiencies_Race_Params_Any(name)"
		/>
	</my-wrapper> -->

  <my-wrapper gap_8 :hr="hr">
		<AppProficiencies
			v-for="name in proficiencies"
			:key="name"
			:title="name"
			:arr_name="proficiencies_Class_Params(name)"
			:arr_name_old="proficiencies_Race_Params_Any(name)"
      param
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
			"proficiencies_Class_Params",
		]),
	},
};
</script>
