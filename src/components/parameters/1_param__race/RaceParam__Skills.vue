<template>
  <my-wrapper v-if="skills_All_RE.length !== 0" :hr="hr">
			<my-attribute
				v-for="name in skills_All_RE"
				:key="name"
				:title="name"
				plus
				:numb="Mastery"
				:icon="MY.skills[name].mod"
			></my-attribute>
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
		...mapState(useSkillsStore, ["skills_All_RE"]),
	},
};
</script>
