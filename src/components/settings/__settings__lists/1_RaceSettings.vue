<template>
		<My-Selection-Box :shown="race_page.shown.ethnos">
			<RaceSetting__Ethnos />
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.backstory">
			<RaceSetting__Backstory />
		</My-Selection-Box>

    <My-Selection-Box
			v-for="item in сustomm_Settings_Race_Arr"
			:key="item.id_link"
			:shown="race_page.shown[item.id_link]"
		>
			<RaceSett__Custom :custom="item"/>
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.gender">
      <RaceSetting__Gender />
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.skin_color" not_mob_header not_mob_pd>
			<my-color-select body_part="skin" />
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.eyes_color" not_mob_header not_mob_pd>
			<my-color-select body_part="eyes" />
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.hair_color" not_mob_header not_mob_pd>
			<my-color-select body_part="hair" />
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.age" not_mob_header>
			<div class="flex_options">
				<MyRange v-model.number="MY.age" age />
				<MyRangeSize age />
			</div>
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.height" not_mob_header>
			<div class="flex_options">
				<MyRange v-model.number="MY.height" height />
				<mySizeGrowth />
			</div>
		</My-Selection-Box>

		<My-Selection-Box :shown="race_page.shown.weight" not_mob_header>
			<div class="flex_options">
				<MyRange v-model.number="MY.weight" weight />
				<MyRangeSize weight />
			</div>
		</My-Selection-Box>
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
