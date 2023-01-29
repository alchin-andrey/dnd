<template>
	<my-wrapper :hr="hr">
		<AppSkills
			v-for="(name, i) in skills_Keys"
			:key="name"
			:class="{ skill_marg: getSkillMarg(i, MY.skills) }"
			:title="name"
			:numb="skills_All_Numb(name)"
			save
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";

export default {
	name: "ClassParam__SkillsAll",
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
			"skills_Keys",
			"skills_All_Numb",
			"getSkillMarg",
		]),
	},
};
</script>

<style scoped>
.skill_marg:not(:first-child) {
	margin-top: 16px;
}
</style>
