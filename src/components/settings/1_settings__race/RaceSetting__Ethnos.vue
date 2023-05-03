<template>
  <div class="flex-col gap-34">
  <AppSrdDisclaimer/>
	<div class="flex-col gap-26 pd-l-16">
		<!-- Ethnos_stats + qualities -->
		<AppWrapper v-if="MY_Race.stats || level_Filter_Arr(MY_Race.qualities).length !== 0">
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
		</AppWrapper>
		<!-- Ethnos_stats + qualities -->

    <!-- Ethnos_Charges -->
			<AppWrapper v-if="charges_Race_Main_Arr.length !== 0">
				<AppCharges
					v-for="item in charges_Race_Main_Arr"
					:key="item"
					:charge="item"
				/>
			</AppWrapper>
			<!-- Ethnos_Charges -->

		<!-- Ethnos_proficiencies -->
		<AppWrapper v-if="MY_Race.proficiencies">
			<AppProficiencies
				v-for="(val, name) in MY_Race.proficiencies"
				:key="name"
				:title="name"
				:arr_name="proficiencies_Arr_Race(name)"
        param
			/>
		</AppWrapper>
		<!-- Ethnos_proficiencies -->

		<!-- Ethnos_fines -->
		<AppWrapper gap="8" v-if="MY_Race.fines">
			<AppFines
				v-for="item in MY_Race.fines"
				:key="item"
				:fines="item"
			></AppFines>
		</AppWrapper>
		<!-- Ethnos_fines -->
		<!-- Ethnos_spells -->
		<AppWrapper gap="26" v-if="shown_Spells_Race">
			<AppSpells
				v-for="item in MY_Race.spells"
				:key="item"
				:spell_obj="item"
			/>
		</AppWrapper>
		<!-- Ethnos_spells -->
	</div>
	<EthnosCard />
  </div>
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
</style>
