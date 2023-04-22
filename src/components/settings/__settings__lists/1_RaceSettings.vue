<template>
		<my-selection-box :shown="race_page.shown.ethnos">
			<RaceSetting__Ethnos />
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.backstory">
			<RaceSetting__Backstory />
		</my-selection-box>

    <my-selection-box
			v-for="item in сustomm_Settings_Race_Arr"
			:key="item.id_link"
			:shown="race_page.shown[item.id_link]"
		>
			<RaceSett__Custom :custom="item"/>
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.gender">
      <RaceSetting__Gender />
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.skin_color">
			<my-color-select body_part="skin" />
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.eyes_color">
			<my-color-select body_part="eyes" />
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.hair_color">
			<my-color-select body_part="hair" />
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.age">
			<div class="flex_options">
				<MyRange v-model.number="MY.age" age />
				<MyRangeSize age />
			</div>
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.height">
			<div class="flex_options">
				<MyRange v-model.number="MY.height" height />
				<mySizeGrowth />
			</div>
		</my-selection-box>

		<my-selection-box :shown="race_page.shown.weight">
			<div class="flex_options">
				<MyRange v-model.number="MY.weight" weight />
				<MyRangeSize weight />
			</div>
		</my-selection-box>
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
.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}
</style>
