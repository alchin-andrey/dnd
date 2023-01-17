<template>
	<!-- RACE -->
	<my-wrapper v-if="shown_Spells_All" gap_26 :hr="hr">
		<my-spell-text
			v-for="item in spells_Race_Param"
			:key="item"
			:spell="item"
			passive
		/>
		<!-- CLASS -->
    <my-spell-text
			v-for="item in spells_Class_Param"
			:key="item"
			:spell="item"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useSpellsStore } from "@/stores/modules/SpellsStore";

export default {
	name: "ClassParam__Spells",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useSpellsStore, [
      "spells_Race_Param",
      "spells_Class_Param",
    ]),

		shown_Spells_All() {
			return (
				this.spells_Race_Param.length !== 0 ||
				this.spells_Class_Param.length !== 0
			);
		},
	},
};
</script>
