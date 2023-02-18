<template>
		<!-- Этнос-->
		<my-selection-box :shown="race_page.shown.ethnos">
			<RaceSetting__Ethnos />
		</my-selection-box>
		<!-- Этнос -->

		<!-- Backestory-->
		<my-selection-box :shown="race_page.shown.backstory">
			<RaceSetting__Backstory />
		</my-selection-box>
		<!-- Backestory -->

		<!-- customm_Settings -->
    <my-selection-box
			v-for="item in сustomm_Settings_Race_Arr"
			:key="item.id_link"
			:shown="race_page.shown[item.id_link]"
		>
			<RaceSett__Custom :custom="item"/>
		</my-selection-box>
		<!-- customm_Settings -->

		<!-- Гендр -->
		<my-selection-box :shown="race_page.shown.gender">
      <RaceSetting__Gender />
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
			<RaceSetting__Stats />
		</my-selection-box>
		<!-- Характеристики -->

		<!-- Навыки -->
		<!-- <my-selection-box :shown="race_page.shown.skills">
      <RaceSetting__Skills />
		</my-selection-box> -->
		<!-- Навыки -->

		<!-- Языки -->
		<!-- <my-selection-box :shown="race_page.shown.languages">
      <RaceSetting__Languages />
		</my-selection-box> -->
		<!-- Языки -->

    <!-- Заклинания -->
		<!-- <my-selection-box :shown="race_page.shown.spells">
      <RaceSetting__Spells />
		</my-selection-box> -->
		<!-- Заклинания -->
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import RaceSett from "@/components/settings/1_settings__race/RaceSetting.js";
export default {
	name: "RaceSettings",
  mixins: [RaceSett],
	computed: {
    // STORE
		...mapState(usePagesStore, ["race_page"]),
    ...mapState(useMYStore, ["MY", "сustomm_Settings_Race_Arr"]),
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
