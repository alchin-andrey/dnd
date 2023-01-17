<template>
	<transition name="mode-fade" mode="out-in">
		
    <section v-if="!class_page.shown.stats">
      <ClassParam__Stats hr />
      <ClassParam__Skills hr/>
			<ClassParam__Qualities hr />
			<ClassParam__Charges hr />
      <ClassParam__Proficiencies hr />
      <ClassParam__Fines hr />

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

			<ClassParam__Weapons hr />
			<ClassParam__EquipKit hr />

			<!-- //NOTE - text -->
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
			<ClassParam__Qualities hr />
      <ClassParam__SkillsAll/>
		</section>

	</transition>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

// import { useStatsStore } from "@/stores/modules/StatsStore";
// import { useSkillsStore } from "@/stores/modules/SkillsStore";
// import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";

import ClassParam from "@/components/parameters/2_param__class/ClassParam.js";

export default {
	name: "ClassParameters",
	mixins: [ClassParam],
	computed: {
		// STORE
		...mapState(usePagesStore, ["class_page"]),
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useMYStore, [
			"Mastery",
			"MY_Subclass",
			"class_Specials_Filter_Lvl",

			"level_Filter",
		]),
		// ...mapState(useStatsStore, [
		// 	"stats_Keys",
		// 	"stats_Race_Page_Numb",
		// 	"stats_Mod",
		// 	"stats_Saving_Arr",
		// ]),
		// ...mapState(useLanguagesStore, ["languages_Custom_Arr_RE"]),
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

		shown_Spells_All() {
			return (
				this.shown_Spells_RE ||
				this.shown_Spells_Class ||
				this.spells_Custom_Obj_RE.length !== 0 ||
				this.spell_Subclass_Lvl.length !== 0
			);
		},

		spell_Subclass_Lvl() {
			let arr = this.level_Filter(this.MY_Subclass?.spells);
			return arr ? arr : [];
		},
	},
};
</script>

<style scoped>

.mode-fade-enter-active,
.mode-fade-leave-active {
	transition: opacity 0.3s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
	opacity: 0;
}
</style>
