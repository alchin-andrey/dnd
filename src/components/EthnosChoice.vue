<template>
	<div class="ethnos_attributes">
		<!-- Этнос_stats + qualities -->
		<my-wrapper v-if="MY.race.stats || MY.race.qualities">
			<my-attribute
				v-for="(val, name) in MY.race.stats"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="val"
				:icon="name"
			>
			</my-attribute>
			<my-attribute
				v-for="(val, name) in MY.race.qualities"
				:key="name"
				:title="name"
				:numb="val"
				feet
				:icon="name"
			></my-attribute>
		</my-wrapper>

		<!-- Этнос_stats + qualities -->

		<!-- Этнос_proficiencies -->
		<my-wrapper v-if="MY.race.proficiencies">
			<my-inventory
				v-for="(val, name) in MY.race.proficiencies"
				:key="name"
				:title="name"
				:item="getProf_RX(val, name)"
			>
			</my-inventory>
		</my-wrapper>
		<!-- Этнос_proficiencies -->

		<!-- Этнос_fines -->
		<my-wrapper v-if="MY.race.fines" gap_8>
			<my-fines
				v-for="item in MY.race.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>
		</my-wrapper>
		<!-- Этнос_fines -->
		<!-- Этнос_spells -->
		<my-wrapper v-if="showRaceSpells" gap_26>
			<my-spell-text
				v-for="item in MY.race.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
		</my-wrapper>
		<!-- Этнос_spells -->
	</div>

	<!-- Этнос_Карточка -->
	<EthnosCard/>
	<!-- Этнос_Карточка -->
</template>

<script>
import EthnosCard from "@/components/EthnosCard.vue";

import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
export default {
	name: "EthnosChoice",
	components: {
		EthnosCard
	},

	computed: {
    ...mapState(useMYStore, ["MY"]),
    ...mapState(useMYStore, ["languages_Custom_Arr_RE",]),

		showRaceSpells() {
			let spells = this.MY.race.spells;
			let lvl = this.MY.level;
			let spells_lvl = ((spells || {})[0] || {}).level <= lvl
			return spells && spells_lvl;
		},
	},

	methods: {
		getProfArr(obj, kay) {
			let arr = [];
			if (obj?.[kay]) {
        arr = obj[kay].map(x => x.name)
			}
			return arr;
		},

		getProf_RX(obj, kay) {
			let i = this.getProfArr(this.MY.race.proficiencies, kay);
			let k = []
			let ethnos_custom = (this.MY.ethnos || {})[`custom_${kay}`]
			if (!ethnos_custom && kay === "languages" ) {
				k = this[`${kay}_Custom_Arr_RE`];
			}
			return i.concat(k);
		},
	}
};
</script>

<style scoped>
.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}

</style>
