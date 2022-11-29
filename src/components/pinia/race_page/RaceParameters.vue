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
				:icon="name"
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
				:numb="Skill_Mastery"
				:icon="MY.skills[name].mod"
			></my-attribute>
		</my-wrapper>
		<!-- attributes_race -->

		<!-- qualities -->
		<my-wrapper hr>
			<my-attribute
				v-for="(val, name) in MY.qualities"
				:key="name"
				:title="name"
				:numb="getParNumb('qualities', name)"
				feet
				:icon="name"
			></my-attribute>
			<my-attribute
				v-if="MY.ethnos.hp_bonus"
				title="hp_bonus"
				:numb="hp_Bonus"
				plus
				icon="hp_bonus"
			></my-attribute>
		</my-wrapper>
		<!-- qualities -->

		<!-- proficiencies -->
		<my-wrapper gap_8 hr>
			<my-inventory
				v-for="(val, name) in MY.proficiencies"
				:key="name"
				:title="name"
				:item="getProf_REX(name)"
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
		<my-wrapper v-if="showSpells" gap_26 hr>
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
		</my-wrapper>
		<!-- spells -->

		<!-- text -->
		<div class="story int-400">
			<div v-html="t(MY.race.details)"></div>
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
export default {
	name: "RaceParameters",
	computed: {
    // STORE
		...mapState(usePagesStore, ["race_page"]),
    ...mapState(useMYStore, ["MY"]),
    // GETTERS
    ...mapState(useMYStore, [
      "stats_Keys",
      "languages_Custom_Arr_RE",
      "stats_Race_Page_Numb",
      "skills_All_RE"
    ]),

    Skill_Mastery() {
			return 1 + this.MY.mastery;
		},

    showSpells() {
			let race = this.MY.race.spells;
			let ethnos = this.MY.ethnos.spells;
			let lvl = this.MY.level;
			let race_lvl = ((race || {})[0] || {}).level <= lvl;
			let ethnos_lvl = ((ethnos || {})[0] || {}).level <= lvl;
			return race || (ethnos && race_lvl) || ethnos_lvl;
		},

    hp_Bonus() {
			let increm_1 = this.MY.ethnos.hp_bonus[0];
			let increm_2 = this.MY.ethnos.hp_bonus[1];
			let level = Math.ceil(this.MY.level / increm_1);
			return level * increm_2;
		},


	},
	methods: {
    getParNumb(par_1, par_2) {
			let i = 0;
			let j = 0;
			if (((this.MY.race || {})[par_1] || {})[par_2]) {
				i = this.MY.race[par_1][par_2];
			}
			if (((this.MY.ethnos || {})[par_1] || {})[par_2]) {
				j = this.MY.ethnos[par_1][par_2];
			}
			return i + j;
		},

    getProfArr(obj, kay) {
			let arr = [];
			if (obj?.[kay]) {
        arr = obj[kay].map(x => x.name)
			}
			return arr;
		},

		getProf_REX(kay) {
			let i = this.getProfArr(this.MY.race.proficiencies, kay);
			let j = this.getProfArr(this.MY.ethnos.proficiencies, kay);
      let k = []
      if (kay === "languages") {
			k = this.languages_Custom_Arr_RE;
    }
			// let k = this.getProfArr(this.race_page.extra, kay);
			return i.concat(j).concat(k);
		},
	},
};
</script>

<style scoped>
</style>
