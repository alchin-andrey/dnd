<template>
  <my-wrapper v-if="skills_Race_Param.length !== 0" :hr="hr">
			<AppSkills
				v-for="name in skills_Race_Param"
				:key="name"
				:title="name"
				:numb="skills_Race_Numb(name)"
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
      "skills_Race_Param",
      "skills_Race_Numb"
    ]),
	},
};
</script>
