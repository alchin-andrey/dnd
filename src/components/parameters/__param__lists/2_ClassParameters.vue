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

			<!-- qualities -->
				<ClassParam__Qualities hr/>
			<!-- qualities -->

			<!-- charges -->
			<my-wrapper v-if="charges_Class_Params.length !== 0" hr>
				<my-charges
					v-for="item in charges_Class_Params"
					:key="item"
					:charge="item"
				>
				</my-charges>
			</my-wrapper>
			<!-- charges -->

			<!-- //NOTE - proficiencies -->
			<my-wrapper gap_8 hr>
				<my-inventory
					v-for="(val, name) in MY.proficiencies"
					:key="name"
					:title="name"
					:item="proficiencies_Arr_Class(name)"
					:item_old="proficiencies_Arr_REC(name)"
				>
				</my-inventory>
			</my-wrapper>

			<!-- //NOTE - fines -->
			<my-wrapper
				v-if="MY.race.fines || MY.ethnos.fines || MY.class.fines"
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
			<my-wrapper v-if="weapons_Equip_Class.length !== 0" gap_26 hr>
				<my-weapon
					v-for="weapon in weapons_Equip_Class"
					:key="weapon"
					:weapon="weapon"
				>
				</my-weapon>
			</my-wrapper>

			<!-- //NOTE - EquipKit -->
				<ClassParam__EquipKit hr/>

			<!-- //NOTE - armor -->
			<!-- <my-wrapper v-if="armors_Equip_Class.length !== 0" gap_26 hr>
				<my-armor
					v-for="armor in armors_Equip_Class"
					:key="armor"
          :armor="armor"
				>
				</my-armor>
			</my-wrapper> -->

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
				<ClassParam__Qualities hr/>
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
import { useEquipStore } from "@/stores/modules/EquipStore";

import ClassParam__Stats from "@/components/parameters/2_param__class/ClassParam__Stats.vue";
import ClassParam__Qualities from "@/components/parameters/2_param__class/ClassParam__Qualities.vue";
import ClassParam__EquipKit from "@/components/parameters/2_param__class/ClassParam__EquipKit.vue";

export default {
	name: "ClassParameters",
	components: {
		ClassParam__Stats,
		ClassParam__Qualities,

		ClassParam__EquipKit,
	},
	computed: {
		// STORE
		...mapState(usePagesStore, ["race_page", "class_page"]),
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useMYStore, [
			"Mastery",
			"MY_Subclass",
			"proficiencies_Arr_REC",
			"proficiencies_Arr_Class",
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
    ...mapState(useEquipStore, ["weapons_Equip_Class", "inventory_Equip_Class", "packs_Equip_Class"]),

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
				MY.race.fines ||
				MY.ethnos.fines ||
				MY.class.fines ||
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

		charges_Class_Arr() {
			let arr = this.level_Filter(this.MY.class.charges);
			return arr ? arr : [];
		},

		charges_Subclass_Arr() {
			let arr = this.level_Filter(this.MY_Subclass?.charges);
			return arr ? arr : [];
		},

		charges_Class_Params() {
			const charges_class = this.charges_Class_Arr;
			const charges_subclass = this.charges_Subclass_Arr;
			return charges_class.concat(charges_subclass);
		},

		// equipments_Class_Arr() {
		// 	let arr = this.level_Filter(this.MY.class.equipment);
		// 	return arr ? arr : [];
		// },

		// equipments_Subclass_Arr() {
		// 	let arr = this.level_Filter(this.MY_Subclass?.equipment);
		// 	return arr ? arr : [];
		// },

		// equipments_Class_Params() {
		// 	const equip_class = this.equipments_Class_Arr;
		// 	const equip_subclass = this.equipments_Subclass_Arr;
		// 	return equip_class.concat(equip_subclass);
		// },

		// item_Equip_Arr: (state) => (item) => {
		// 	let arr = [];
		// 	state.equipments_Class_Params?.forEach((el) =>
		// 		el[item]?.forEach((sub_el) => arr.push(sub_el))
		// 	);
		// 	return arr;
		// },

		// inventory_Equip_Class() {
		// 	return this.item_Equip_Arr("inventory");
		// },

		// packs_Equip_Class() {
		// 	return this.item_Equip_Arr("inventory_packs");
		// },

		shown_Invenory_Equip() {
			return (
				this.inventory_Equip_Class.length !== 0 ||
				this.packs_Equip_Class.length !== 0
			);
		},

		// weapons_Equip_Class() {
		// 	return this.item_Equip_Arr("weapon");
		// },

		// weapons_Equip_Class() {
		// 	let arr = [];
		// 	this.equipments_Class_Arr?.forEach((el) =>
		// 		el.weapon?.forEach((weapon) => arr.push(weapon))
		// 	);
		// 	return arr;
		// },

		// inventory_Equip_Class() {
		// 	let arr = [];
		// 	this.equipments_Class_Arr?.forEach((el) =>
		// 		el.inventory?.forEach((inventory) => arr.push(inventory))
		// 	);
		// 	return arr;
		// },

		// armors_Equip_Class() {
		// 	let arr = [];
		// 	this.equipments_Class_Arr?.forEach((el) =>
		// 		el.armor?.forEach((armor) => arr.push(armor))
		// 	);
		// 	return arr;
		// },

		// armors_Element() {
		// 	let arr = null;
		// 	this.equipments_Class_Arr?.forEach((el) =>
		// 		el.armor?.forEach(armor => arr = armor[0])
		// 	);
		// 	return arr;
		// },

		// proficiencies_Arr: (state) => (obj, kay) => {
		// 	let arr = [];
		// 	obj?.[kay] ? (arr = obj[kay].map((x) => x.name)) : null;
		// 	return arr;
		// },

		// proficiencies_Arr_REC: (state) => (kay) => {
		// 	let race_prof = state.proficiencies_Arr(state.MY.race.proficiencies, kay);
		// 	let ethnos_prof = state.proficiencies_Arr(
		// 		state.MY.ethnos.proficiencies,
		// 		kay
		// 	);
		// 	let custom_prof = [];
		// 	kay === "languages"
		// 		? (custom_prof = state.languages_Custom_Arr_RE)
		// 		: null;
		// 	return race_prof.concat(ethnos_prof).concat(custom_prof);
		// },

		// proficiencies_Arr_Class: (state) => (kay) => {
		// 	let class_prof = state.proficiencies_Arr(
		// 		state.MY.class.proficiencies,
		// 		kay
		// 	);
		// 	return class_prof;
		// },
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
