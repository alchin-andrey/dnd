<template>
  <my-wrapper v-if="filter_Skills.length !== 0" :hr="hr">
			<AppSkills
				v-for="name in filter_Skills"
				:key="name"
				:title="name"
				:numb="skills_Race_Numb(name)"
				param
			></AppSkills>
		</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";

export default {
	name: "RaceParam__Skills",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(useMYStore, ["MY", "Mastery"]),
		...mapState(useSkillsStore, [
      "skills_Keys",
      "skills_Race_Param",
      "skills_Race_Numb"
    ]),

    filter_Skills() {
      return this.skills_Keys.filter(el => this.skills_Race_Param.includes(el));
    }
	},
};
</script>
