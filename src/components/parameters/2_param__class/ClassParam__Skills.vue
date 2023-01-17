<template>
	<my-wrapper v-if="skills_All_RE.length !== 0" :hr="hr">
		<my-attribute
			v-for="name in skills_All_RE"
			:key="name"
			:title="name"
			plus
			:numb="null"
			:old_numb="skills_Old_Numb(name)"
			:icon="MY.skills[name].mod"
			:save="stats_Saving_Arr"
		></my-attribute>
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
      "skills_Old_Numb",
    ]),
	},
};
</script>
