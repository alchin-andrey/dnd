<template>
	<div>
		<my-wrapper v-if="charges_Race_Param.length !== 0" :hr="hr">
			<AppCharges
				v-for="item in charges_Race_Param"
				:key="item"
				:charge="item"
			/>
		</my-wrapper>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useChargesStore } from "@/stores/modules/ChargesStore";

export default {
	name: "RaceParam__Charges",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useChargesStore, ["charges_Race_Param"]),
	},
};
</script>

<style scoped></style>
