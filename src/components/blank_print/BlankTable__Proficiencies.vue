<template>
	<div class="grid-body cell-body">
		<AppMainCell
			class="cell"
			title="armors_proficiency"
			:content_arr="proficiencies_RC_Params('armor')"
		/>
		<AppMainCell
			class="cell"
			title="weapons_proficiency"
			:content_arr="proficiencies_RC_Params('weapons')"
		/>
		<AppMainCell
			class="cell"
			title="tools_proficiency"
			:content_arr="proficiencies_RC_Params('tools')"
		/>
		<AppMainCell
			class="cell"
			title="languages_proficiency"
			:content_arr="proficiencies_RC_Params('languages')"
		/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
export default {
	name: "BlankTable__Proficiencies",
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useProficienciesStore, ["proficiencies_RC_Params"]),
		...mapState(useColorStore, [
			"skin_color_Char_Body",
			"eyes_color_Char_Body",
			"hair_color_Char_Body",
		]),
	},
};
</script>

<style scoped>
.grid-body {
	display: grid;
	grid-template-rows: 80px 168px 110px 110px;
}

.cell {
	padding: 4px 12px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
	border-left: 1px solid #000000;
}

.cell-body> :first-child {
	border-top: 1px solid #000000;
	border-radius: 6px 6px 0 0;
}

.cell-body> :last-child {
	border-radius: 0 0 6px 6px;
}
</style>
