<template>
	<AppWrapper v-if="shown_Charges" :hr="hr">
		<AppCharges
			v-for="item in charges_Race_Param"
			:key="item"
			:charge="item"
			:passive="passive_Old"
		/>
		<AppCharges
			v-for="item in charges_Class_Param"
			:key="item"
			:charge="item"
		/>
	</AppWrapper>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useChargesStore } from "@/stores/modules/ChargesStore";

export default {
	name: "ClassParam__Charges",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(usePagesStore, ["page_Open"]),
		...mapState(useChargesStore, ["charges_Race_Param", "charges_Class_Param"]),

		passive_Old() {
			return this.page_Open !== "alignment_page";
		},

		shown_Charges() {
			return (
				this.charges_Race_Param.length !== 0 ||
				this.charges_Class_Param.length !== 0
			);
		},
	},
};
</script>

<style scoped></style>
