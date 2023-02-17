<template>
	<div>
		<my-wrapper v-if="shown_Charges" :hr="hr">
			<AppCharges
				v-for="item in charges_Race_Param"
				:key="item"
				:charge="item"
        passive
			/>
			<AppCharges
				v-for="item in charges_Class_Param"
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
	name: "ClassParam__Charges",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useChargesStore, [
      "charges_Race_Param",
      "charges_Class_Param",
    ]),

    shown_Charges() {
      return (
        this.charges_Race_Param.length !== 0
        || this.charges_Class_Param.length !== 0
      )
    },

		// charges_Class_Arr() {
		// 	return this.level_Filter_Arr(this.MY.class.charges);
		// },

		// charges_Custom_Arr() {
		// 	return this.filter_Custom_Class_Lvl("charges");
		// },

		// charges_Class_Params() {
		// 	const charges_class = this.charges_Class_Arr;
		// 	const charges_custom = this.charges_Custom_Arr;
		// 	return charges_class.concat(charges_custom);
		// },
	},
};
</script>

<style scoped></style>
