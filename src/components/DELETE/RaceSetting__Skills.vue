<template>
	<my-card-text text="skills_details"></my-card-text>
	<my-selection-card
		v-for="(name, i) in skills_Pass_Arr_RE"
		:key="name"
		@click="getCustomSelect_Skills_RE(name)"
		:class="{ skill_marg: getSkillMarg(i, MY.skills) }"
		:active_boll_link="skills_Custom_Arr_RE.includes(name)"
	>
		<my-attribute
			:title="name"
			plus
			:numb="Mastery"
			:icon="MY.skills[name].mod"
		>
		</my-attribute>
		<my-card-text title="" :text="`${name}_details`"></my-card-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
export default {
	name: "RaceSetting__Skills",
	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "Mastery"]),
		...mapState(usePagesStore, ["race_page"]),
		// GETTERS
		...mapState(useSkillsStore, [
			"skills_Pass_Arr_RE",
			"skills_Custom_Arr_RE",
		]),
	},

	methods: {
		...mapActions(useSkillsStore, ["getCustomSelect_Skills_RE"]),

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
