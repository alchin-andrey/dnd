<template>
		<My-Selection-Box title="ethnos" :select="MY_Ethnos.name" :rare="MY_Ethnos.rare" :shown="race_page.shown.ethnos" mob_fixed>
			<RaceSetting__Ethnos />
		</My-Selection-Box>

		<My-Selection-Box title="past" :select="MY_Backstory.name" :shown="race_page.shown.backstory" mob_fixed>
			<RaceSetting__Backstory />
		</My-Selection-Box>

    <My-Selection-Box
			v-for="item in сustomm_Settings_Race_Arr"
			:key="item.id_link"
			:menu="item"
			:shown="race_page.shown[item.id_link]"
			mob_fixed
		>
			<RaceSett__Custom :custom="item"/>
		</My-Selection-Box>

		<My-Selection-Box title="gender" :select="MY.gender.phisiological" :shown="race_page.shown.gender">
      <RaceSetting__Gender />
		</My-Selection-Box>

		<My-Selection-Box title="age" :select="MY_Age" :shown="race_page.shown.age" not_mob_header >
			<div class="flex_options">
				<AppRangSlider v-model.number="MY.age" age/>
				<MyRangeSize age />
			</div>
		</My-Selection-Box>

		<My-Selection-Box title="height" :select="MY_Height" :shown="race_page.shown.height" not_mob_header>
			<div class="flex_options">
				<AppRangSlider v-model.number="MY.height" height/>
				<mySizeGrowth />
			</div>
		</My-Selection-Box>

		<My-Selection-Box title="weight" :select="MY_Weight" :shown="race_page.shown.weight" not_mob_header>
			<div class="flex_options">
				<AppRangSlider v-model.number="MY.weight" weight/>
				<MyRangeSize weight />
			</div>
		</My-Selection-Box>

		<My-Selection-Box title="color_skin" :select="skin_color_Char_Body.name" :shown="race_page.shown.skin_color" not_mob_header not_mob_pd>
			<my-color-select body_part="skin" />
		</My-Selection-Box>

		<My-Selection-Box title="color_eyes" :select="eyes_color_Char_Body.name" :shown="race_page.shown.eyes_color" not_mob_header not_mob_pd>
			<my-color-select body_part="eyes" />
		</My-Selection-Box>

		<My-Selection-Box title="color_hair" :select="hair_color_Char_Body.name" :shown="race_page.shown.hair_color" not_mob_header not_mob_pd>
			<my-color-select body_part="hair" />
		</My-Selection-Box>


		<AlignmentSett__Photo />
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";

import RaceSett from "@/components/settings/1_settings__race/RaceSetting.js";
export default {
	name: "RaceSettings",
  mixins: [RaceSett],
	computed: {
    // STORE
		...mapState(usePagesStore, ["race_page"]),
    ...mapState(useMYStore, [
			"MY", 
      "MY_Backstory",
			"MY_Backstory_Menu",
      "MY_Race",
      "MY_Ethnos",
      "сustomm_Settings_Race_Arr",
		]),
		...mapState(useColorStore, [
			"skin_color_Char_Body",
			"eyes_color_Char_Body",
			"hair_color_Char_Body",
		]),
		...mapState(useFormStore, [
			"Age_Note",
			"Weight_Note",
			"Hight_Note",
		]),

		age_Units() {
			let mod10 = Math.abs(this.MY.age % 10);
			let mod100 = Math.abs(this.MY.age % 100);
			if (mod100 > 10 && mod100 < 20) {
				return "years";
			} else if (mod10 >= 2 && mod10 <= 4) {
				return "yeara";
			} else if (mod10 === 1) {
				return "year";
			} else {
				return "years";
			}
		},

		MY_Age() {
			return this.MY.age + ' ' + this.t(this.age_Units);
		},

		MY_Height() {
			return this.MY.height + ' ' + this.t('cm');
		},

		MY_Weight() {
			return this.MY.weight + ' ' + this.t('kg');
		}
	},
};
</script>

<style scoped>
.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-around;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}
</style>
