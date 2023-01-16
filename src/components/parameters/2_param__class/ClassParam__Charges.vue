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
		...mapState(useMYStore, ["MY", "MY_Subclass", "level_Filter_Arr"]),
    
		charges_Class_Arr() {
			return this.level_Filter_Arr(this.MY.class.charges);
		},

		charges_Subclass_Arr() {
			return this.level_Filter_Arr(this.MY_Subclass?.charges);
		},

		charges_Class_Params() {
			const charges_class = this.charges_Class_Arr;
			const charges_subclass = this.charges_Subclass_Arr;
			return charges_class.concat(charges_subclass);
		},
	},
};
</script>

<style scoped></style>
