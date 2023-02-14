<template>
	<my-wrapper v-if="skills_Class_Param.length !== 0" :hr="hr">
		<AppSkills
			v-for="name in skills_Class_Param"
			:key="name"
			:title="name"
			:numb="skills_Class_Numb(name)"
			:second_numb="skills_RP_MOD_Numb(name)"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";

export default {
	name: "ClassParam__Skills",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useStatsStore, ["stats_Saving_Arr"]),
		...mapState(useSkillsStore, [
			"skills_All_RE",
			"skills_RP_MOD_Numb",
			"skills_Class_Numb",
			"skills_Class_Param",
		]),
	},
};
</script>
