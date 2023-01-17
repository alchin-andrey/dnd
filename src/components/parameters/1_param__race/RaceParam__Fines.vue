<template>
	<my-wrapper v-if="shown_Fines_RaceParam" gap_8 :hr="hr">
		<my-fines
			v-for="item in fines_Race_Param"
			:key="item"
			:icon="item.type"
			:title="item.keyword"
			:details="item.details"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

export default {
	name: "RaceParam__Fines",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Subclass", "level_Filter_Arr"]),
		// ...mapState(useProficienciesStore, [
		// 	"proficiencies",
		// 	"proficiencies_Race_Params_Any",
		// 	"proficiencies_Arr_Class",
		// ]),

		fines_Race_Lvl() {
			return this.level_Filter_Arr(this.MY.race?.fines);
		},

		fines_Ethnos_Lvl() {
			return this.level_Filter_Arr(this.MY.ethnos?.fines);
		},

		fines_Race_Param() {
			const race_fines = this.fines_Race_Lvl;
			const ethnos_fines = this.fines_Ethnos_Lvl;
			return race_fines.concat(ethnos_fines);
		},

		shown_Fines_RaceParam() {
			return (
				this.fines_Race_Param.length !== 0
			);
		},
	},
};
</script>
