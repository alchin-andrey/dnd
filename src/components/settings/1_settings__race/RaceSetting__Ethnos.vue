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
			>
			</my-attribute>
			<my-attribute
				v-for="(val, name) in MY.race.qualities"
				:key="name"
				:title="name"
				:numb="val"
				feet
			></my-attribute>
		</my-wrapper>
		<!-- Этнос_stats + qualities -->

    <!-- Этнос_Карточка_Charges -->
			<my-wrapper v-if="charges_Race_Main_Arr.length !== 0">
				<AppCharges
					v-for="item in charges_Race_Main_Arr"
					:key="item"
					:charge="item"
				/>
			</my-wrapper>
			<!-- Этнос_Карточка_Charges -->

		<!-- Этнос_proficiencies -->
		<my-wrapper v-if="MY.race.proficiencies">
			<AppProficiencies
				v-for="(val, name) in MY.race.proficiencies"
				:key="name"
				:title="name"
				:arr_name="proficiencies_Arr_Race(name)"
        param
			/>
		</my-wrapper>
		<!-- Этнос_proficiencies -->

		<!-- Этнос_fines -->
		<my-wrapper v-if="MY.race.fines" gap_8>
			<AppFines
				v-for="item in MY.race.fines"
				:key="item"
				:fines="item"
			></AppFines>
		</my-wrapper>
		<!-- Этнос_fines -->
		<!-- Этнос_spells -->
		<my-wrapper v-if="shown_Spells_Race" gap_26>
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
	<EthnosCard />
	<!-- Этнос_Карточка -->
</template>

<script>
import EthnosCard from "@/components/settings/1_settings__race/EthnosCard.vue";

import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useChargesStore } from "@/stores/modules/ChargesStore";
export default {
	name: "RaceSetting__Ethnos",
	components: {
		EthnosCard,
	},

	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useMYStore, ["languages_Custom_Arr_RE"]),
		...mapState(useProficienciesStore, ["proficiencies_Arr_Race"]),
    ...mapState(useChargesStore, ["charges_Race_Main_Arr"]),

		shown_Spells_Race() {
			let race_spells = this.MY.race.spells;
			let lvl = this.MY.level;
			let spells_lvl = race_spells?.[0].level <= lvl;
			return race_spells && spells_lvl;
		},
	},
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
