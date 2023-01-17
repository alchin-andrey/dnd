<template>
	<transition name="mode-fade" mode="out-in">
		<section v-if="!class_page.shown.stats">
			<!-- stats -->
			<ClassParam__Stats hr />
			<!-- stats -->

			<!-- attributes -->
			<my-wrapper hr v-if="skills_All_RE.length !== 0">
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
			<!-- attributes -->

			<ClassParam__Qualities hr />
			<ClassParam__Charges hr />
      <ClassParam__Proficiencies hr />

			<!-- //NOTE - fines -->
      <!-- <ClassParam__Fines hr /> -->
			<my-wrapper
				v-if="shown_Fines_All"
				gap_8
				hr
			>
				<!-- RACE -->
				<my-fines
					v-for="item in MY.race.fines"
					:key="item"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
					passive
				></my-fines>

				<my-fines
					v-for="item in MY.ethnos.fines"
					:key="item"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
					passive
				></my-fines>
				<!-- RACE -->
				<!-- CLASS -->
				<my-fines
					v-for="item in MY.class.fines"
					:key="item"
					:lvl="item.level"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
				></my-fines>
				<!-- CLASS -->
				<!-- SUB_CLASS -->
				<my-fines
					v-for="item in fines_Subclass_Lvl"
					:key="item"
					:lvl="item.level"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
				></my-fines>
				<!-- SUB_CLASS -->
			</my-wrapper>

			<!-- //NOTE - spells -->
			<!-- RACE -->
			<my-wrapper v-if="shown_Spells_All" gap_26 hr>
				<my-spell-text
					v-for="item in MY.race.spells"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
					passive
				>
				</my-spell-text>
				<my-spell-text
					v-for="item in MY.ethnos.spells"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
					passive
				>
				</my-spell-text>
				<my-spell-text
					v-for="item in spells_Custom_Obj_RE"
					:key="item"
					:lvl="1"
					:spell="item"
					passive
				>
				</my-spell-text>
				<!-- RACE -->
				<!-- CLASS -->
				<my-spell-text
					v-for="item in MY.class.spells"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
				>
				</my-spell-text>
				<!-- CLASS -->
				<!-- SUB_CLASS -->
				<my-spell-text
					v-for="item in spell_Subclass_Lvl"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
				>
				</my-spell-text>
				<!-- SUB_CLASS -->
			</my-wrapper>

			<!-- //NOTE - weapon -->
			<ClassParam__Weapons hr />

			<!-- //NOTE - EquipKit -->
			<ClassParam__EquipKit hr />

			<!-- //NOTE - text -->
			<!-- <div class="story int-400">
				<div v-html="t_Story"></div>
			</div> -->
			<my-wrapper gap_26>
				<div class="story int-400" v-html="t_Story"></div>
				<my-card-text
					v-if="MY_Subclass"
					:title="MY_Subclass.name"
					:text="MY_Subclass.details"
				>
				</my-card-text>
			</my-wrapper>
		</section>

		<section v-else>
			<!-- qualities-stats -->
			<ClassParam__Qualities hr />
			<!-- qualities-stats -->

			<!-- attributes-stats -->
			<my-wrapper>
				<my-attribute
					v-for="(name, i) in skills_Keys"
					:key="name"
					:class="{ skill_marg: getSkillMarg(i, MY.skills) }"
					:title="name"
					plus
					:numb="skills_Old_Numb(name)"
					:icon="MY.skills[name].mod"
					:save="stats_Saving_Arr"
				></my-attribute>
			</my-wrapper>
			<!-- attributes-stats -->
		</section>
	</transition>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";

import ClassParam from "@/components/parameters/2_param__class/ClassParam.js";

export default {
	name: "ClassParameters",
	mixins: [ClassParam],
	computed: {
		// STORE
		...mapState(usePagesStore, ["race_page", "class_page"]),
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useMYStore, [
			"Mastery",
			"MY_Subclass",
			"class_Specials_Filter_Lvl",

			"level_Filter",
		]),
		...mapState(useStatsStore, [
			"stats_Keys",
			"stats_Race_Page_Numb",
			"stats_Mod",
			"stats_Saving_Arr",
		]),
		...mapState(useSkillsStore, ["skills_All_RE", "skills_Keys"]),
		...mapState(useLanguagesStore, ["languages_Custom_Arr_RE"]),
		...mapState(useSpellsStore, ["spells_Custom_Obj_RE"]),

		t_Story() {
			return this.t(this.MY.class.details);
		},

		shown_Spells_RE() {
			let race_spells = this.MY.race.spells;
			let ethnos_spells = this.MY.ethnos.spells;
			let lvl = this.MY.level;
			let race_lvl = race_spells?.[0].level <= lvl;
			let ethnos_lvl = ethnos_spells?.[0].level <= lvl;
			return (ethnos_spells && ethnos_lvl) || (race_spells && race_lvl);
		},

		shown_Spells_Class() {
			let class_spells = this.MY.class.spells;
			let lvl = this.MY.level;
			let class_lvl = class_spells?.[0].level <= lvl;
			return class_spells && class_lvl;
		},

		// shown_Spells_RE_Custom() {
		// 	let custom_spells = this.spells_Custom_Obj_RE;
		// 	return custom_spells.length !== 0;
		// },

		shown_Fines_All() {
			return (
				this.MY.race.fines ||
				this.MY.ethnos.fines ||
				this.MY.class.fines ||
				this.fines_Subclass_Lvl.length !== 0
			);
		},

		shown_Spells_All() {
			return (
				this.shown_Spells_RE ||
				this.shown_Spells_Class ||
				this.spells_Custom_Obj_RE.length !== 0 ||
				this.spell_Subclass_Lvl.length !== 0
			);
		},

		shown_Param_Arr: (state) => (arr) => {
			return arr ? state.level_Filter(arr).length !== 0 : null;
		},

		spell_Subclass_Lvl() {
			let arr = this.level_Filter(this.MY_Subclass?.spells);
			return arr ? arr : [];
		},

		fines_Subclass_Lvl() {
			let arr = this.level_Filter(this.MY_Subclass?.fines);
			return arr ? arr : [];
		},

		getSkillMarg: () => (i, name) => {
			if (i === 0) {
				return true;
			}
			let obj = Object.values(name);
			if (obj[i].mod !== obj[i - 1].mod) {
				return true;
			}
			return false;
		},

		skills_Old_Numb: (state) => (name) => {
			let state_name = state.MY.skills[name].mod;
			let mod = state.stats_Mod(state_name);
			let race_mastery = null;
			state.skills_All_RE.includes(name)
				? (race_mastery = state.Mastery)
				: null;
			const spec_skills = state.class_Specials_Filter_Lvl("skills");
			let skills_foo = null;
			spec_skills?.forEach((el) => (skills_foo = state[el.foo](race_mastery)));
			return skills_foo ? skills_foo + mod : race_mastery + mod;
		},

		Half_Mastery: (state) => (skill_mastery) => {
			const half_mastery = Math.floor(state.Mastery / 2);
			return skill_mastery ? skill_mastery : half_mastery;
		},

	},
};
</script>

<style scoped>
.skill_marg:not(:first-child) {
	margin-top: 16px;
}

.mode-fade-enter-active,
.mode-fade-leave-active {
	transition: opacity 0.3s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
	opacity: 0;
}
</style>
