<template>
	<div class="selection_menu_wrap">

    <div class="selection_menu" v-if="shown_Subclass">
			<AppSelectionArr :menu="subclass_Filter"/>
		</div>

    <div class="selection_menu" v-if="shown_Other">
			<AppSelectionArr :menu="other_Filter"/>
		</div>

    <div class="selection_menu" v-if="shown_Spells">
      <AppSelectionArr :menu="spells_0_Filter"/>
			<AppSelectionArr :menu="spells_Filter"/>
		</div>

    <div class="selection_menu">
      <my-selection
				@click="showSettings__Class('stats')"
				:active="class_page.shown.stats"
				title="stats"
				:t_type="stats_Base_Settings_Two_T"
			></my-selection>
			<!-- <AppSelectionArr :menu="feats_Select_Arr"/> -->
			<AppSelectionArr :menu="feats_Filter" no_name/>
			<AppSelectionArr :menu="stats_Filter" no_name/>
			<AppSelectionArr :menu="skills_Filter"/>
			<AppSelectionArr :menu="tools_Filter"/>
			<AppSelectionArr :menu="languages_Filter"/>
		</div>

    <div class="selection_menu" v-if="shown_Equip">
      <AppSelectionArr :menu="armors_Filter"/>
			<AppSelectionArr :menu="weapons_Filter"/>
			<AppSelectionArr :menu="packs_Filter"/>
			<AppSelectionArr :menu="inventory_Filter"/>
		</div>

    <div class="selection_menu undefined" v-if="shown_Undefined">
      <AppSelectionArr :menu="undefined_Filter"/>
		</div>

	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";
export default {
	name: "ClassMenu",
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page"]),
    // GETTERS
		...mapState(useMYStore, [ "сustomm_Settings_Class_Arr" ]),

    ...mapState(useStatsStore, [ "stats_Base_Settings_Two_T"]),
    ...mapState(useFeatsStore, [ "feats_Select_Arr"]),

    filter_Setting: (stor) => (numb) => {
      return stor.сustomm_Settings_Class_Arr().filter((item) => item.position == numb);
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

    shown_Subclass() {
      return this.subclass_Filter.length !== 0
    },

    shown_Other() {
      return this.other_Filter.length !== 0
    },

    shown_Spells() {
      return (
        this.spells_0_Filter.length !== 0 ||
        this.spells_Filter.length !== 0
      )
    },

    shown_Equip() {
      return (
        this.armors_Filter.length !== 0 ||
        this.weapons_Filter.length !== 0 ||
        this.packs_Filter.length !== 0 ||
        this.inventory_Filter.length !== 0
      )
    },

    shown_Undefined() {
      return this.undefined_Filter.length !== 0
    },
	},
	methods: {
    ...mapActions(usePagesStore, ["showSettings__Class"]),

    // filter_Setting(numb) {
		// 	return this.сustomm_Settings_Class_Arr().filter((item) => item.position == numb);
		// },
	},
};
</script>

<style scoped>

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.undefined{
  background: rgb(94, 10, 10);
}
</style>
