<template>
	<my-card-text text="skills_details"></my-card-text>
	<my-selection-card
		v-for="(val, name, i) in MY.skills"
		:key="name"
		@click="getCustomSelect_RE('skills', name)"
		:class="{ skill_marg: getSkillMarg(i, MY.skills) }"
		:active_boll_link="skills_Custom_Arr_RE.includes(name)"
	>
		<my-attribute :title="name" plus :numb="Skill_Mastery" :icon="val.mod">
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
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page"]),

		...mapState(useMYStore, [
			"stats_Keys",
			// "stats_Activ_Obj_RE",
			// "skills_Pass_Arr_RE",
			"skills_Custom_Arr_RE",
			// "stats_Race_Page_Numb",
			// "option_Race_Page_Numb",
			// "option_Custom_Arr_RE",
		]),

		skills_Select() {
			return this.race_page.extra.skills;
		},

		Skill_Mastery() {
			return 1 + this.MY.mastery;
		},
	},

	methods: {
		...mapActions(useMYStore, ["getCustomSelect_RE"]),

		getExtraActiv(active, selekt, item, name) {
			if (active || selekt) {
				return null;
			} else {
				let arr = this.race_page.extra[name];
				arr.splice(0, 1);
				arr.push(item);
				return (this.race_page.extra[name] = arr);
			}
		},

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
/* .ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
} */

.skill_marg {
	margin-top: 26px;
}
</style>
