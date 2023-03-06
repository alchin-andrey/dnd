<template>
	<section class="selection-print-menu hr-print">

			  <AppPrintMenu :menu="subclass_Filter"/>
  			<AppPrintMenu :menu="subclass_other_Filter"/>
  			<AppPrintMenu :menu="other_Filter"/>
        <AppPrintMenu :menu="spells_0_Filter"/>
  			<AppPrintMenu :menu="spells_1_Filter"/>
  			<AppPrintMenu :menu="spells_Filter"/>
  			<AppPrintMenu :menu="spells_Arcanum_Filter"/>

			<div>
			  <AppPrintMenu title="stats" :chapter="stats_Base_Settings_Full_T"/>
  			<AppPrintMenu :menu="feats_Filter" no_name/>
  			<AppPrintMenu :menu="stats_Filter" no_name/>
			</div>

			<div v-if="skills_Filter.length !== 0"><AppPrintMenu :menu="skills_Filter"/></div>
			<div v-if="tools_Filter.length !== 0"><AppPrintMenu :menu="tools_Filter"/></div>
			<div v-if="languages_Filter.length !== 0"><AppPrintMenu :menu="languages_Filter"/></div>
      <div v-if="armors_Filter.length !== 0"><AppPrintMenu :menu="armors_Filter"/></div>
			<div v-if="weapons_Filter.length !== 0"><AppPrintMenu :menu="weapons_Filter"/></div>
			<div v-if="packs_Filter.length !== 0"><AppPrintMenu :menu="packs_Filter"/></div>
			<div v-if="inventory_Filter.length !== 0"><AppPrintMenu :menu="inventory_Filter"/></div>
      <div v-if="undefined_Filter.length !== 0"><AppPrintMenu :menu="undefined_Filter"/></div>

	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "Blank__ClassMenu",

	computed: {
		...mapState(useMYStore, ["сustomm_Settings_Class_Arr", "spells_Settings_Class_Arr"]),
    ...mapState(useStatsStore, [ "stats_Base_Settings_Full_T"]),

    filter_Setting: (stor) => (numb) => {
      return stor.сustomm_Settings_Class_Arr.filter((item) => item.position == numb);
		},

    filter_Setting_Spells: (stor) => (numb) => {
      return stor.spells_Settings_Class_Arr.filter((item) => item.position == numb);
		},


    subclass_Filter: (stor) => stor.filter_Setting(0),
    subclass_other_Filter: (stor) => stor.filter_Setting(1),

    other_Filter: (stor) => stor.filter_Setting(2),

    spells_0_Filter: (stor) => stor.filter_Setting(3),
    spells_1_Filter: (stor) => stor.filter_Setting(4),

    spells_Filter: (stor) => stor.filter_Setting_Spells(3),
    spells_Arcanum_Filter: (stor) => stor.filter_Setting_Spells(4),


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


	},
};
</script>

<style scoped>

.selection-print-menu {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

/* .marg-t-16 div {
  margin-top: 16px;
} */

.hr-print {
  width: 512px;
  padding-bottom: 50px;
  border-bottom: 2px solid #000000;
}
</style>
