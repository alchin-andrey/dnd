<template>
	<my-wrapper v-if="charges_Class_Params.length !== 0" :hr="hr">
		<my-charges
			v-for="item in charges_Class_Params"
			:key="item"
			:charge="item"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useEquipStore } from "@/stores/modules/EquipStore";

export default {
	name: "ClassParam__Charges",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, [
    "MY", 
    "level_Filter_Arr",
    "сustomm_Settings_Class_Arr",
    "filter_Custom_Class_Lvl"
  ]),
    
		charges_Class_Arr() {
			return this.level_Filter_Arr(this.MY.class.charges);
		},

    charges_Custom_Arr() {
			return this.filter_Custom_Class_Lvl("charges");
		},

		charges_Class_Params() {
			const charges_class = this.charges_Class_Arr;
			const charges_custom = this.charges_Custom_Arr;
			return charges_class.concat(charges_custom);
		},
	},
};
</script>

<style scoped></style>
