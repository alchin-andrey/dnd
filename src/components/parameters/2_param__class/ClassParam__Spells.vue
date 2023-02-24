<template>
	<my-wrapper v-if="shown_Spells_All" gap_26 :hr="hr">
		<AppSpells
			v-for="item in spells_Race_Param"
			:key="item"
			:spell_obj="item"
			passive
      param
		/>
    <AppSpells
			v-for="item in spells_Class_Param_without_Race_Param"
			:key="item"
			:spell_obj="item"
      param
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
      "spells_Class_Param_without_Race_Param",
    ]),

		shown_Spells_All() {
			return (
				this.spells_Race_Param.length !== 0 ||
				this.spells_Class_Param_without_Race_Param.length !== 0
			);
		},
	},
};
</script>
