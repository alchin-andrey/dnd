<template>
		<!-- Этнос-->
		<my-selection-box :shown="race_page.shown.ethnos">
			<EthnosChoice />
		</my-selection-box>
		<!-- Этнос -->

		<!-- Гендр -->
		<my-selection-box :shown="race_page.shown.gender">
      <GenderSetting />
		</my-selection-box>
		<!-- Гендр -->

		<!-- Цвет кожи -->
		<my-selection-box :shown="race_page.shown.skin_color">
			<my-color-select body_part="skin" />
		</my-selection-box>
		<!-- Цвет кожи -->

		<!-- Цвет глаз -->
		<my-selection-box :shown="race_page.shown.eyes_color">
			<my-color-select body_part="eyes" />
		</my-selection-box>
		<!-- Цвет глаз -->

		<!-- Цвет волос -->
		<my-selection-box :shown="race_page.shown.hair_color">
			<my-color-select body_part="hair" />
		</my-selection-box>
		<!-- Цвет волос -->

		<!-- Возраст -->
		<my-selection-box :shown="race_page.shown.age">
			<div class="flex_options">
				<MyRange v-model.number="MY.age" age />
				<MyRangeSize age />
			</div>
		</my-selection-box>
		<!-- Возраст -->

		<!-- Рост -->
		<my-selection-box :shown="race_page.shown.height">
			<div class="flex_options">
				<MyRange v-model.number="MY.height" height />
				<mySizeGrowth />
			</div>
		</my-selection-box>
		<!-- Рост -->

		<!-- Вес -->
		<my-selection-box :shown="race_page.shown.weight">
			<div class="flex_options">
				<MyRange v-model.number="MY.weight" weight />
				<MyRangeSize weight />
			</div>
		</my-selection-box>
		<!-- Вес -->

		<!-- Характеристики -->
		<my-selection-box :shown="race_page.shown.stats">
			<RaceCustomStats />
		</my-selection-box>
		<!-- Характеристики -->

		<!-- Навыки -->
		<my-selection-box :shown="race_page.shown.skills">
      <RaceCustomSkills />
		</my-selection-box>
		<!-- Навыки -->

		<!-- Языки -->
		<my-selection-box :shown="race_page.shown.languages">
      <RaceCustomLanguages />
		</my-selection-box>
		<!-- Языки -->

    <!-- Заклинания -->
		<my-selection-box :shown="race_page.shown.spells">
      <RaceCustomSpells />
		</my-selection-box>
		<!-- Заклинания -->
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import EthnosChoice from "@/components/settings/1_race_settings/EthnosChoice.vue";

import RaceCustomStats from "@/components/settings/1_race_settings/RaceCustomStats.vue";
import RaceCustomSkills from "@/components/settings/1_race_settings/RaceCustomSkills.vue";
import RaceCustomLanguages from "@/components/settings/1_race_settings/RaceCustomLanguages.vue";
import RaceCustomSpells from "@/components/settings/1_race_settings/RaceCustomSpells.vue";

import GenderSetting from "@/components/settings/1_race_settings/GenderSetting.vue";

export default {
	name: "RaceSettings",
  components: {
		EthnosChoice,
    RaceCustomStats,
    RaceCustomSkills,
    RaceCustomLanguages,
    RaceCustomSpells,
    GenderSetting,
	},
	computed: {
    // STORE
		...mapState(usePagesStore, ["race_page"]),
    ...mapState(useMYStore, ["MY"]),
	},
};
</script>

<style scoped>
/* .flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
} */
</style>
