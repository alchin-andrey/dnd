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
	grid-template-rows: var(--px-80) var(--px-168) var(--px-110) var(--px-110);
}

.cell {
	padding: var(--px-4) var(--px-12);
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	border-right: var(--border-blank);
	border-bottom: var(--border-blank);
	border-left: var(--border-blank);
}

.cell-body> :first-child {
	border-top: var(--border-blank);
	border-top-left-radius: var(--cell-rad);
	border-top-right-radius: var(--cell-rad);
}

.cell-body> :last-child {
	border-bottom-right-radius: var(--cell-rad);
	border-bottom-left-radius: var(--cell-rad);
}
</style>
