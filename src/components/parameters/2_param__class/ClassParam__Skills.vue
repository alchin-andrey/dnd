<template>
	<my-wrapper v-if="filter_Skills.length !== 0" :hr="hr">
		<AppSkills
			v-for="name in filter_Skills"
			:key="name"
			:title="name"
			:numb="skills_Class_Numb(name)"
			:second_numb="skills_RP_MOD_Numb(name)"
			param
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
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
		...mapState(useSkillsStore, [
			"skills_RP_MOD_Numb",
			"skills_Class_Numb",
			"skills_Class_Param",
      "skills_Keys",
		]),

    filter_Skills() {
      return this.skills_Keys.filter(el => this.skills_Class_Param.includes(el));
    }
	},
};
</script>
