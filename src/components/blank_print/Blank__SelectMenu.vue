<template>
	<section class="blank-bottom">
    <div class="hr-vert-1"></div>
    <div class="hr-vert-2"></div>
    <div class="hr-vert-3"></div>
		<div class="column-content">
			<div class="int-600-28">{{ site_Link }}</div>
			<div>{{ link_Description }}</div>
			<div class="hr-print"></div>
			<AppPrintMenu__Chapter title="level" :chapter="String(MY.level)" />
      <div class="hr-print"></div>
			<AppPrintMenu__Chapter title="race" :chapter="MY_Race.name" />
			<AppPrintMenu__Chapter title="ethnos" :chapter="MY_Ethnos.name" />
			<AppPrintMenu__Chapter title="past" :chapter="MY_Backstory.name" />

			<AppPrintMenu__Arr :menu="other_Filter_Race" />
			<AppPrintMenu__Arr :menu="spells_0_Filter_Race" />
			<AppPrintMenu__Arr :menu="spells_Filter_Race" />
			<AppPrintMenu__Arr :menu="stats_Filter_Race" />
			<AppPrintMenu__Arr :menu="skills_Filter_Race" />
			<AppPrintMenu__Arr :menu="tools_Filter_Race" />
			<AppPrintMenu__Arr :menu="languages_Filter_Race" />
			<AppPrintMenu__Arr :menu="armors_Filter_Race" />
			<AppPrintMenu__Arr :menu="weapons_Filter_Race" />
			<AppPrintMenu__Arr :menu="packs_Filter_Race" />
			<AppPrintMenu__Arr :menu="inventory_Filter_Race" />

			<AppPrintMenu__Chapter title="age" :chapter="MY_Age" />
			<AppPrintMenu__Chapter title="height" :chapter="MY_Height" />
			<AppPrintMenu__Chapter title="weight" :chapter="MY_Weight" />
			<AppPrintMenu__Chapter title="gender" :chapter_arr="gender_Arr" />
			<AppPrintMenu__Chapter title="color_skin" :chapter="skin_color_Char_Body.name"/>
			<AppPrintMenu__Chapter title="color_eyes" :chapter="eyes_color_Char_Body.name"/>
			<AppPrintMenu__Chapter title="color_hair" :chapter="hair_color_Char_Body.name"/>
			<div class="hr-print"></div>

      <AppPrintMenu__Arr :menu="subclass_Filter_Class"/>
      <AppPrintMenu__Arr :menu="subclass_other_Filter_Class"/>
      <AppPrintMenu__Arr :menu="other_Filter_Class"/>
      <AppPrintMenu__Arr :menu="spells_0_Filter_Class"/>
      <AppPrintMenu__Arr :menu="spells_1_Filter_Class"/>
      <AppPrintMenu__Arr :menu="spells_Filter_Class"/>
      <AppPrintMenu__Arr :menu="spells_Arcanum_Filter_Class"/>

			<div>
        <AppPrintMenu__Chapter title="stats" :chapter="stats_Base_Settings_Full_T"/>
        <AppPrintMenu__Arr :menu="feats_Filter_Class" no_name/>
        <AppPrintMenu__Arr :menu="stats_Filter_Class" no_name/>
			</div>

			<AppPrintMenu__Arr :menu="skills_Filter_Class"/>
			<AppPrintMenu__Arr :menu="tools_Filter_Class"/>
			<AppPrintMenu__Arr :menu="languages_Filter_Class"/>
      <AppPrintMenu__Arr :menu="armors_Filter_Class"/>
			<AppPrintMenu__Arr :menu="weapons_Filter_Class"/>
			<AppPrintMenu__Arr :menu="packs_Filter_Class"/>
			<AppPrintMenu__Arr :menu="inventory_Filter_Class"/>
      <AppPrintMenu__Arr :menu="undefined_Filter_Class"/>
      <div class="hr-print"></div>

      <AppPrintMenu__Chapter title="alignment" :chapter="MY.alignment" />
      <AppPrintMenu__Arr :menu="сustomm_Main_Settings_Alignment_Arr" />

		</div>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "Blank__SelectMenu",

	computed: {
		...mapState(useMYStore, [
      "MY",
      "MY_Race",
      "MY_Class",
      "MY_Ethnos",
      "MY_Backstory",
      "сustomm_Settings_Race_Arr",
      "сustomm_Settings_Class_Arr",
      "spells_Settings_Class_Arr",
    ]),
		...mapState(useGenderStore, ["gender_Arr"]),
		...mapState(useColorStore, [
			"skin_color_Char_Body",
			"eyes_color_Char_Body",
			"hair_color_Char_Body",
		]),
    ...mapState(useStatsStore, [ "stats_Base_Settings_Full_T"]),
    ...mapState(useAlignmentStore, ["сustomm_Main_Settings_Alignment_Arr"]),

		site_Link() {
			return "dndme.club";
		},

		link_Description() {
			return this.t("link_description");
		},

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

		filter_Setting_Race: (stor) => (numb) => {
			return stor.сustomm_Settings_Race_Arr.filter(
				(item) => item.position == numb
			);
		},

		subclass_Filter_Race: (stor) => stor.filter_Setting_Race(1),
		other_Filter_Race: (stor) => stor.filter_Setting_Race(2),
		spells_0_Filter_Race: (stor) => stor.filter_Setting_Race(3),
		spells_Filter_Race: (stor) => stor.filter_Setting_Race(4),
		feats_Filter_Race: (stor) => stor.filter_Setting_Race(6),
		stats_Filter_Race: (stor) => stor.filter_Setting_Race(7),
		skills_Filter_Race: (stor) => stor.filter_Setting_Race(8),
		tools_Filter_Race: (stor) => stor.filter_Setting_Race(9),
		languages_Filter_Race: (stor) => stor.filter_Setting_Race(10),
		armors_Filter_Race: (stor) => stor.filter_Setting_Race(11),
		weapons_Filter_Race: (stor) => stor.filter_Setting_Race(12),
		packs_Filter_Race: (stor) => stor.filter_Setting_Race(13),
		inventory_Filter_Race: (stor) => stor.filter_Setting_Race(14),

    filter_Setting_Class: (stor) => (numb) => {
      return stor.сustomm_Settings_Class_Arr.filter((item) => item.position == numb);
		},

    filter_Setting_Spells: (stor) => (numb) => {
      return stor.spells_Settings_Class_Arr.filter((item) => item.position == numb);
		},


    subclass_Filter_Class: (stor) => stor.filter_Setting_Class(0),
    subclass_other_Filter_Class: (stor) => stor.filter_Setting_Class(1),
    other_Filter_Class: (stor) => stor.filter_Setting_Class(2),
    spells_0_Filter_Class: (stor) => stor.filter_Setting_Class(3),
    spells_1_Filter_Class: (stor) => stor.filter_Setting_Class(4),

    spells_Filter_Class: (stor) => stor.filter_Setting_Spells(3),
    spells_Arcanum_Filter_Class: (stor) => stor.filter_Setting_Spells(4),

    feats_Filter_Class: (stor) => stor.filter_Setting_Class(6),
    stats_Filter_Class: (stor) => stor.filter_Setting_Class(7),
    skills_Filter_Class: (stor) => stor.filter_Setting_Class(8),
    tools_Filter_Class: (stor) => stor.filter_Setting_Class(9),
    languages_Filter_Class: (stor) => stor.filter_Setting_Class(10),
    armors_Filter_Class: (stor) => stor.filter_Setting_Class(11),
    weapons_Filter_Class: (stor) => stor.filter_Setting_Class(12),
    packs_Filter_Class: (stor) => stor.filter_Setting_Class(13),
    inventory_Filter_Class: (stor) => stor.filter_Setting_Class(14),

    undefined_Filter_Class: (stor) => stor.filter_Setting_Class(undefined),

	},


};
</script>

<style scoped>
.blank-bottom {
	border-top: 1px dashed #333333;
	height: 1404px;
	/* height: 100%; */
	padding-top: 72px;
  padding-left: 32px;
  position: relative;
}

.hr-vert-1 {
  position: absolute;
  top: 72px;
  left: 0;
  width: 1px;
  height: 1328px;
  background-color: #000000;
}
.hr-vert-2 {
  position: absolute;
  top: 72px;
  left: 648px;
  width: 1px;
  height: 1328px;
  background-color: #000000;
}

.hr-vert-3 {
  position: absolute;
  top: 72px;
  left: 1296px;
  width: 1px;
  height: 1328px;
  background-color: #000000;
}

.column-content {
  width: 584px;
  height: 100%;
	/* height: 1310px; */
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 16px 64px;
}


/* .mr-print{
  width: 100%;
  height: 18px;
} */
.hr-print {
	width: 512px;
	margin: 34px 0;
	border-bottom: 2px solid #000000;
}
</style>
