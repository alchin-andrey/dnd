<template>
	<transition name="mode-fade" mode="out-in">
		<section v-if="!class_page.shown.stats">
			<!-- stats -->
			<my-wrapper gap_16 hr>
				<ClassStatsTable />
			</my-wrapper>
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
			<ClassQualitiesParam />
			<!-- qualities -->

			<!-- charges -->
			<my-wrapper v-if="charges_Level_Arr.length !== 0" hr>
				<my-charges
					v-for="item in charges_Level_Arr"
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
			<!-- //!NOTE - proficiencies -->

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
			</my-wrapper>
			<!-- //!NOTE - fines -->

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
			</my-wrapper>
			<!-- //!NOTE - spells -->

			<!-- //NOTE - weapon -->
			<!-- <my-wrapper gap_8 hr>
				<my-weapon
					v-for="item in weapons_Level_Arr"
					:key="item"
					:title="item[0].name"
				>
				</my-weapon>
			</my-wrapper> -->
			<!-- //!NOTE - weapon -->

			<!-- //NOTE - text -->
			<div class="story int-400">
				<div v-html="t_Story"></div>
			</div>
		</section>

		<section v-else>
			<!-- qualities-stats -->
			<ClassQualitiesParam />
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
import ClassStatsTable from "@/components/pinia/class_page/settings/ClassStatsTable.vue";
import ClassQualitiesParam from "@/components/pinia/class_page/parameters/ClassQualitiesParam.vue";

import { mapState } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "ClassParameters",
	components: {
		ClassStatsTable,
		ClassQualitiesParam,
	},
	computed: {
		// STORE
		...mapState(usePagesStore, ["race_page", "class_page"]),
		...mapState(useMYStore, ["MY", "Mastery"]),
		// GETTERS
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

		shown_Spells_RE_Custom() {
			let custom_spells = this.spells_Custom_Obj_RE;
			return custom_spells.length !== 0;
		},

		shown_Spells_All() {
			return (
				this.shown_Spells_RE ||
				this.shown_Spells_Class ||
				this.shown_Spells_RE_Custom
			);
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

		hp_Bonus() {
			if (this.MY.ethnos.hp_bonus) {
				let increm_1 = this.MY.ethnos.hp_bonus[0];
				let increm_2 = this.MY.ethnos.hp_bonus[1];
				let level = Math.ceil(this.MY.level / increm_1);
				return level * increm_2;
			} else {
				return 0;
			}
		},

		skills_Old_Numb: (state) => (name) => {
			let state_name = state.MY.skills[name].mod;
			let mod = state.stats_Mod(state_name);
			let race_mastery = null;
			state.skills_All_RE.includes(name)
				? (race_mastery = state.Mastery)
				: null;
			return race_mastery + mod;
		},

		armor_Numb() {
			let dex_mod = this.stats_Mod("dexterity");
			return 10 + dex_mod;
		},

		hp_Max() {
			let hp_dice = this.MY.class.hp_dice;
			let x = Math.ceil(hp_dice / 2) + 1;
			let con_mod = this.stats_Mod("constitution");
			let lvl = this.MY.level;
			let hp_bonus = this.hp_Bonus;
			return hp_dice + con_mod + (x + con_mod) * (lvl - 1) + hp_bonus;
		},

		initiative_Numb() {
			return this.stats_Mod("dexterity");
		},

		regen_Numb() {
			let hp_dice = this.MY.class.hp_dice;
			let lvl = this.MY.level;
			return hp_dice * lvl;
		},

		qualities_Numb_RE: (state) => (name) => {
			let summ = 0;
			let race_numb = state.MY.race.qualities?.[name];
			let ethnos_numb = state.MY.ethnos.qualities?.[name];
			race_numb ? (summ += race_numb) : 0;
			ethnos_numb ? (summ += ethnos_numb) : 0;
			return summ;
		},

		qualities_Find(state) {
			return (name) => state.MY.class.qualities?.find((item) => item[name]);
		},

		qualities_Numb_Class: (state) => (name) => {
			let numb_RE = state.qualities_Numb_RE(name);
			let qual_obj = state.qualities_Find(`${name}_bonus`);
			let numb_bonus = 0;
			let lvl = state.MY.level;
			if (qual_obj) {
				let qual_bonus = qual_obj[`${name}_bonus`];
				let qual_lvl = qual_obj.level;
				lvl >= qual_lvl ? (numb_bonus = qual_bonus) : 0;
			}
			return numb_RE + numb_bonus;
		},

		charges_Level_Arr() {
			let lvl = this.MY.level;
			let arr = this.MY.class.charges?.filter((el) => el.level <= lvl);
			return arr ? arr : [];
		},

		equipments_Level_Arr() {
			let lvl = this.MY.level;
			let arr = this.MY.class.equipment?.filter((el) => el.level <= lvl);
			return arr ? arr : [];
		},

		weapons_Level_Arr() {
			let arr = null;
			for (let item of this.equipments_Level_Arr) {
        console.log('item:', item);
				for (let weapon of item.weapon) {
          console.log('i:', weapon)
          if(weapon) {
            console.log('weapon:', weapon)
            // arr.push(item.weapon[i]);
          }
        }
			}
      // console.log('arr:', arr)
			// this.equipments_Level_Arr?.forEach((el) =>
			// 	el.weapon?.forEach((item) => arr.push(item))
			// );
			return arr ? arr : [];
		},

		proficiencies_Arr: (state) => (obj, kay) => {
			let arr = [];
			obj?.[kay] ? (arr = obj[kay].map((x) => x.name)) : null;
			return arr;
		},

		proficiencies_Arr_REC: (state) => (kay) => {
			let race_prof = state.proficiencies_Arr(state.MY.race.proficiencies, kay);
			let ethnos_prof = state.proficiencies_Arr(
				state.MY.ethnos.proficiencies,
				kay
			);
			let custom_prof = [];
			kay === "languages"
				? (custom_prof = state.languages_Custom_Arr_RE)
				: null;
			return race_prof.concat(ethnos_prof).concat(custom_prof);
		},

		proficiencies_Arr_Class: (state) => (kay) => {
			let class_prof = state.proficiencies_Arr(
				state.MY.class.proficiencies,
				kay
			);
			return class_prof;
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
