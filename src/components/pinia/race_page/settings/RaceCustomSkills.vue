<template>
	<my-card-text text="skills_details"></my-card-text>
	<my-selection-card
		v-for="(name, i) in skills_Keys"
		:key="name"
		@click="getCustomSelect_Skills_RE(name)"
		:class="{ skill_marg: getSkillMarg(i, MY.skills) }"
		:active_boll_link="skills_Custom_Arr_RE.includes(name)"
	>
		<my-attribute
			:title="name"
			plus
			:numb="Skill_Mastery"
			:icon="MY.skills[name].mod"
		>
		</my-attribute>
		<my-card-text title="" :text="`${name}_details`"></my-card-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";
export default {
	name: "RaceCustomSkills",
	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page"]),
		// GETTERS
		...mapState(useMYStore, ["skills_Keys", "skills_Custom_Arr_RE"]),

		Skill_Mastery() {
			return 1 + this.MY.mastery;
		},
	},

	methods: {
		...mapActions(useMYStore, ["getCustomSelect_Skills_RE"]),

		getSkillMarg(i, name) {
			if (i === 0) {
				return true;
			}
			let obj = Object.values(name);
			if (obj[i].mod !== obj[i - 1].mod) {
				return true;
			}
			return false;
		},
	},
};
</script>

<style scoped>
.skill_marg {
	margin-top: 26px;
}
</style>
