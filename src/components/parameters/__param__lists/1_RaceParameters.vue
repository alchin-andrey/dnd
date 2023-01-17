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
				v-for="name in proficiencies"
				:key="name"
				:title="name"
				:item="proficiencies_Race_Params(name)"
			>
			</my-inventory>
		</my-wrapper>
		<!-- proficiencies -->

    <RaceParam__Fines hr/>
    <RaceParam__Spells hr/>
    <RaceParam__Text />
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

import RaceParam from "@/components/parameters/1_param__race/RaceParam.js";
export default {
	name: "RaceParameters",
  mixins: [RaceParam],
	computed: {
    // STORE
		...mapState(usePagesStore, ["race_page"]),
    ...mapState(useMYStore, ["MY", "Mastery"]),
    ...mapState(useProficienciesStore, ["proficiencies"]),
    // GETTERS
    ...mapState(useStatsStore, ["stats_Keys", "stats_Race_Page_Numb",]),
    ...mapState(useSkillsStore, ["skills_All_RE",]),
    // ...mapState(useLanguagesStore, ["languages_Custom_Arr_RE"]),
    // ...mapState(useSpellsStore, ["spells_Custom_Obj_RE"]),
    ...mapState(useProficienciesStore, ["proficiencies_Race_Params"]),

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
	},
};
</script>
