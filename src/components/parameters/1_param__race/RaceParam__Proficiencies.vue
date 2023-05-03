<template>
  <AppWrapper gap="8" :hr="hr">
		<AppProficiencies
			v-for="name in proficiencies"
			:key="name"
			:title="name"
			:arr_name="proficiencies_Race_Params_All(name)"
      param
		/>
	</AppWrapper>
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
			"proficiencies_Race_Params_All",
		]),
	},
};
</script>
