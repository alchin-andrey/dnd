<template>
	<my-wrapper v-if="shown_Spells_All" gap_26 :hr="hr">
		<my-spell-text
			v-for="item in spells_Race_Param"
			:key="item.name"
			:spell="item"
			passive
      param
		/>
    <my-spell-text
			v-for="item in spells_Class_Param_includ_Race_Param"
			:key="item.name"
			:spell="item"
      param
		/>
	</my-wrapper>

	<!-- <my-wrapper v-if="shown_Spells_All" gap_26 :hr="hr">
    <my-spell-text
			v-for="item in spells_RC_Param_All"
			:key="item.name"
			:spell="item"
      param
		/>
	</my-wrapper> -->
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
      "spells_Class_Param_includ_Race_Param",
      "spells_RC_Param_All",
    ]),

		shown_Spells_All() {
			return (
				this.spells_Race_Param.length !== 0 ||
				this.spells_Class_Param_includ_Race_Param.length !== 0
			);
		},
	},
};
</script>
