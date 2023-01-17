<template>
	<my-wrapper v-if="shown_Fines_ClassParam" gap_8 :hr="hr">
		<!-- RACE -->
		<AppFines
			v-for="item in fines_Race_Param"
			:key="item"
			:fines="item"
			passive
		/>
		<!-- CLASS -->
		<AppFines 
      v-for="item in fines_Class_Param" 
      :key="item" 
      :fines="item" 
    />
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useFinesStore } from "@/stores/modules/FinesStore";

import RaceParam__Fines from "@/components/parameters/1_param__race/RaceParam__Fines.vue";
export default {
	name: "ClassParam__Fines",
	components: {
		RaceParam__Fines,
	},
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useFinesStore, [
      "fines_Race_Param", 
      "fines_Class_Param",
    ]),

		shown_Fines_ClassParam() {
			return (
				this.fines_Race_Param.length !== 0 ||
				this.fines_Class_Param.length !== 0
			);
		},
	},
};
</script>

<style scoped>
/* .passive {
  opacity: 0.2;
} */
</style>
