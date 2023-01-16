<template>
	<my-wrapper gap_8 :hr="hr">
		<my-inventory
					v-for="(val, name) in MY.proficiencies"
					:key="name"
					:title="name"
					:item="proficiencies_Arr_Class(name)"
					:item_old="proficiencies_Arr_REC(name)"
				/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useEquipStore } from "@/stores/modules/EquipStore";

export default {
	name: "ClassParam__Proficiencies",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "proficiencies_Arr_REC",
			"proficiencies_Arr_Class"]),
	},
};
</script>

<style scoped></style>
