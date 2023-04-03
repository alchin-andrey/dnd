<template>
	<div class="grid__body">
		<AppMainCell
			class="cell bord-tl-tr-6"
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
			class="cell bord-br-bl-6"
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
.grid__body {
	display: grid;
	grid-template-rows: 80px 168px 110px 110px;
}

.grid__full {
	grid-column: span 2;
}

.cell {
	padding: 4px 12px;
	border: 1px solid #000;
	margin: -1px -1px 0 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
}
.bord-tl-tr-6 {
	border-radius: 6px 6px 0 0;
}
.bord-br-bl-6 {
	border-radius: 0 0 6px 6px;
}
</style>
