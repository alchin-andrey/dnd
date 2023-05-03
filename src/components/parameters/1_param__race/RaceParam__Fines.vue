<template>
	<AppWrapper gap="8" v-if="shown_Fines_RaceParam" :hr="hr">
		<AppFines
			v-for="item in fines_Race_Param"
			:key="item"
			:fines="item"
		/>
	</AppWrapper>
</template>

<script>
import { mapState } from "pinia";
import { useFinesStore } from "@/stores/modules/FinesStore";

export default {
	name: "RaceParam__Fines",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useFinesStore, ["fines_Race_Param"]),

		shown_Fines_RaceParam() {
			return (
				this.fines_Race_Param.length !== 0
			);
		},
	},
};
</script>
