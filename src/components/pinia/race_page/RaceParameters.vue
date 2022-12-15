<template>
		<!-- stats -->
		<my-wrapper hr>
			<my-attribute
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="stats_Race_Page_Numb(name)"
			>
			</my-attribute>
		</my-wrapper>
		<!-- stats -->

		<!-- attributes_race -->
		<my-wrapper hr v-if="skills_All_RE.length !== 0">
			<my-attribute
				v-for="name in skills_All_RE"
				:key="name"
				:title="name"
				plus
				:numb="Mastery"
				:icon="MY.skills[name].mod"
			></my-attribute>
		</my-wrapper>
		<!-- attributes_race -->

		<!-- qualities -->
		<my-wrapper hr>
			<my-attribute
				v-if="MY.ethnos.hp_bonus"
				title="hp_bonus"
				:numb="hp_Bonus"
				plus
				icon="hp_bonus"
			></my-attribute>
			<my-attribute
				v-for="(val, name) in MY.qualities"
				:key="name"
				:title="name"
				:numb="qualities_Numb_RE(name)"
				feet
				:icon="name"
			></my-attribute>
		</my-wrapper>
		<!-- qualities -->

		<!-- proficiencies -->
		<my-wrapper gap_8 hr>
			<my-inventory
				v-for="(val, name) in MY.proficiencies"
				:key="name"
				:title="name"
				:item="proficiencies_Arr_REC(name)"
			>
			</my-inventory>
		</my-wrapper>
		<!-- proficiencies -->

		<!-- fines -->
		<my-wrapper v-if="MY.race.fines || MY.ethnos.fines" gap_8 hr>
			<my-fines
				v-for="item in MY.race.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>

			<my-fines
				v-for="item in MY.ethnos.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>
		</my-wrapper>
		<!-- fines -->

		<!-- spells -->
		<my-wrapper v-if="(shown_Spells_RE || spells_Custom_Obj_RE.length !== 0)" gap_26 hr>
			<my-spell-text
				v-for="item in MY.race.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
			<my-spell-text
				v-for="item in MY.ethnos.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
      <my-spell-text
				v-for="item in spells_Custom_Obj_RE"
				:key="item"
				:lvl="1"
				:spell="item"
			>
			</my-spell-text>
		</my-wrapper>
		<!-- spells -->

		<!-- text -->
		<div class="story int-400">
			<div v-html="t_Story"></div>
			<my-card-text
				v-if="MY.ethnos.name !== 'common'"
				:title="MY.ethnos.name"
				:text="MY.ethnos.details"
				:rare="MY.ethnos.rare"
			>
			</my-card-text>
		</div>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "RaceParameters",
	computed: {
    // STORE
		...mapState(usePagesStore, ["race_page"]),
    ...mapState(useMYStore, ["MY", "Mastery"]),
    // GETTERS
    ...mapState(useStatsStore, ["stats_Keys", "stats_Race_Page_Numb",]),
    ...mapState(useSkillsStore, ["skills_All_RE",]),
    ...mapState(useLanguagesStore, ["languages_Custom_Arr_RE"]),
    ...mapState(useSpellsStore, ["spells_Custom_Obj_RE"]),

    t_Story() {
      return this.t(this.MY.race.details)
    },

    shown_Spells_RE() {
			let race_spells = this.MY.race.spells;
			let ethnos_spells = this.MY.ethnos.spells;
			let lvl = this.MY.level;
			let race_lvl = race_spells?.[0].level <= lvl;
			let ethnos_lvl = ethnos_spells?.[0].level <= lvl;
			return ethnos_spells && ethnos_lvl || race_spells && race_lvl;
		},

    hp_Bonus() {
			let increm_1 = this.MY.ethnos.hp_bonus[0];
			let increm_2 = this.MY.ethnos.hp_bonus[1];
			let level = Math.ceil(this.MY.level / increm_1);
			return level * increm_2;
		},

    qualities_Numb_RE: (state) => (name) => {
			let summ = 0;
      let race_numb = state.MY.race.qualities?.[name];
			let ethnos_numb = state.MY.ethnos.qualities?.[name];
			race_numb ? summ += race_numb : 0
			ethnos_numb ? summ += ethnos_numb : 0
			return summ;
		},

    proficiencies_Arr: (state) => (obj, kay) => {
			let arr = [];
			obj?.[kay] ? arr = obj[kay].map(x => x.name) : null
			return arr;
		},

    proficiencies_Arr_REC: (state) => (kay) => {
      let race_prof = state.proficiencies_Arr(state.MY.race.proficiencies, kay)
      let ethnos_prof = state.proficiencies_Arr(state.MY.ethnos.proficiencies, kay)
      let custom_prof = []
      kay === "languages" ? custom_prof = state.languages_Custom_Arr_RE : null
			return race_prof.concat(ethnos_prof).concat(custom_prof);
		},
	},
};
</script>
