<template>
  <AppSrdDisclaimer class="mr-b-15"/>
	<div class="ethnos_attributes">
		<!-- Ethnos_stats + qualities -->
		<my-wrapper v-if="MY_Race.stats || level_Filter_Arr(MY_Race.qualities).length !== 0">
			<AppStats
				v-for="stat in MY_Race.stats"
				:key="stat.name"
				:title="stat.name"
				:type="`${stat.name}_base`"
				plus
				:numb="stat.num"
			/>
      <my-attribute
					v-for="qual in level_Filter_Arr(MY_Race.qualities)"
					:key="qual"
					:title="qual.name"
					:numb="qual.num"
					:feet="qual.name == 'speed' || qual.name == 'vision_night'"
					:plus="qual.type == 'bonus'"
				/>
		</my-wrapper>
		<!-- Ethnos_stats + qualities -->

    <!-- Ethnos_Charges -->
			<my-wrapper v-if="charges_Race_Main_Arr.length !== 0">
				<AppCharges
					v-for="item in charges_Race_Main_Arr"
					:key="item"
					:charge="item"
				/>
			</my-wrapper>
			<!-- Ethnos_Charges -->

		<!-- Ethnos_proficiencies -->
		<my-wrapper v-if="MY_Race.proficiencies">
			<AppProficiencies
				v-for="(val, name) in MY_Race.proficiencies"
				:key="name"
				:title="name"
				:arr_name="proficiencies_Arr_Race(name)"
        param
			/>
		</my-wrapper>
		<!-- Ethnos_proficiencies -->

		<!-- Ethnos_fines -->
		<my-wrapper v-if="MY_Race.fines" gap_8>
			<AppFines
				v-for="item in MY_Race.fines"
				:key="item"
				:fines="item"
			></AppFines>
		</my-wrapper>
		<!-- Ethnos_fines -->
		<!-- Ethnos_spells -->
		<my-wrapper v-if="shown_Spells_Race" gap_26>
			<AppSpells
				v-for="item in MY_Race.spells"
				:key="item"
				:spell_obj="item"
			/>
		</my-wrapper>
		<!-- Ethnos_spells -->
	</div>

	<EthnosCard />
</template>

<script>
import EthnosCard from "@/components/settings/1_settings__race/EthnosCard.vue";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useMainStore } from "@/stores/general/MainStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useChargesStore } from "@/stores/modules/ChargesStore";
export default {
	name: "RaceSetting__Ethnos",
	components: {
		EthnosCard,
	},

	computed: {
		...mapState(useMYStore, ["MY", "MY_Race", "level_Filter_Arr"]),
		...mapState(useProficienciesStore, ["proficiencies_Arr_Race"]),
    ...mapState(useChargesStore, ["charges_Race_Main_Arr"]),
    ...mapState(useMainStore, ["srd"]),

    t_Disclaimer() {
      return this.srd ? this.t("phb_disclaimer") : null;
    },

		shown_Spells_Race() {
			let race_spells = this.MY_Race.spells;
			let lvl = this.MY.level;
			let spells_lvl = race_spells?.[0].level <= lvl;
			return race_spells && spells_lvl;
		},
	},
};
</script>

<style scoped>
.ethnos_attributes {
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}

.marg-bot {
	margin-bottom: 16px;
}
</style>
