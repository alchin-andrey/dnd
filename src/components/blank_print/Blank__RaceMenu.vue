<template>
	<section class="selection-print-menu">
		<AppPrintMenu title="race" :chapter="MY.race.name" />
		<AppPrintMenu title="ethnos" :chapter="MY.ethnos.name" />
		<AppPrintMenu title="past" :chapter="MY.backstory.name" />

		<section
			class="selection-print-menu"
			v-if="сustomm_Settings_Race_Arr.length !== 0"
		>
			<AppPrintMenu :menu="other_Filter" />
			<AppPrintMenu :menu="spells_0_Filter" />
			<AppPrintMenu :menu="spells_Filter" />
			<AppPrintMenu :menu="stats_Filter" />
			<AppPrintMenu :menu="skills_Filter" />
			<AppPrintMenu :menu="tools_Filter" />
			<AppPrintMenu :menu="languages_Filter" />
			<AppPrintMenu :menu="armors_Filter" />
			<AppPrintMenu :menu="weapons_Filter" />
			<AppPrintMenu :menu="packs_Filter" />
			<AppPrintMenu :menu="inventory_Filter" />
		</section>

		<AppPrintMenu title="age" :chapter="MY_Age" />
		<AppPrintMenu title="height" :chapter="MY_Height" />
		<AppPrintMenu title="weight" :chapter="MY_Weight" />

		<AppPrintMenu title="gender" :chapter_arr="gender_Arr" />

		<AppPrintMenu title="color_skin" :chapter="skin_color_Char_Body.name" />
		<AppPrintMenu title="color_eyes" :chapter="eyes_color_Char_Body.name" />
		<AppPrintMenu title="color_hair" :chapter="hair_color_Char_Body.name" />
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
export default {
	name: "Blank__RaceMenu",

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper", "сustomm_Settings_Race_Arr"]),
		...mapState(useGenderStore, ["gender_Arr"]),
		...mapState(useColorStore, [
			"skin_color_Char_Body",
			"eyes_color_Char_Body",
			"hair_color_Char_Body",
		]),

		MY_Age() {
			return `${this.MY.age} ${this.t(this.age_Units)}`;
		},

		MY_Height() {
			return `${this.MY.height} ${this.t("cm")}`;
		},

		MY_Weight() {
			return `${this.MY.weight} ${this.t("kg")}`;
		},

		age_Units() {
			const numb = this.MY.age;
			const mod10 = Math.abs(numb % 10);
			const mod100 = Math.abs(numb % 100);
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

		filter_Setting: (stor) => (numb) => {
			return stor.сustomm_Settings_Race_Arr.filter(
				(item) => item.position == numb
			);
		},

		subclass_Filter: (stor) => stor.filter_Setting(1),

		other_Filter: (stor) => stor.filter_Setting(2),

		spells_0_Filter: (stor) => stor.filter_Setting(3),
		spells_Filter: (stor) => stor.filter_Setting(4),

		feats_Filter: (stor) => stor.filter_Setting(6),
		stats_Filter: (stor) => stor.filter_Setting(7),
		skills_Filter: (stor) => stor.filter_Setting(8),
		tools_Filter: (stor) => stor.filter_Setting(9),
		languages_Filter: (stor) => stor.filter_Setting(10),

		armors_Filter: (stor) => stor.filter_Setting(11),
		weapons_Filter: (stor) => stor.filter_Setting(12),
		packs_Filter: (stor) => stor.filter_Setting(13),
		inventory_Filter: (stor) => stor.filter_Setting(14),

		undefined_Filter: (stor) => stor.filter_Setting(undefined),

		shown_Undefined() {
			return this.undefined_Filter.length !== 0;
		},
	},
};
</script>

<style scoped>

.selection-print-menu {
	display: flex;
	flex-direction: column;
	gap: 16px;
}
</style>
