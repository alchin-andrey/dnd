<template>
	<div class="selection_menu_wrap">

    <div class="selection_menu" v-if="shown_Subclass">
			<AppSelectionArr :menu="subclass_Filter"/>
			<AppSelectionArr :menu="subclass_other_Filter"/>
		</div>

    <div class="selection_menu" v-if="shown_Other">
			<AppSelectionArr :menu="other_Filter"/>
		</div>

    <div class="selection_menu" v-if="shown_Spells">
      <AppSelectionArr :menu="spells_0_Filter"/>
			<AppSelectionArr :menu="spells_1_Filter"/>
			<AppSelectionArr :menu="spells_Filter"/>
			<AppSelectionArr :menu="spells_Arcanum_Filter"/>
		</div>

    <div class="selection_menu">
      <AppSelection
				@click="showSettings__Class('stats')"
				:active="class_page.shown.stats"
				title="stats"
				:t_type="base_Stats_Menu"
			></AppSelection>
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

    <AlignmentMenu__Photo />

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

import AlignmentMenu__Photo from "@/components/menu/3_menu__alignment/AlignmentMenu__Photo.vue"
export default {
	name: "ClassMenu",
  components: {
		AlignmentMenu__Photo
	},
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page", "screen_Max"]),
    // GETTERS
		...mapState(useMYStore, [ "сustomm_Settings_Class_Arr", "spells_Settings_Class_Arr" ]),

    ...mapState(useStatsStore, [ "base_Stats_Menu"]),
    ...mapState(useFeatsStore, [ "feats_Select_Arr"]),

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

    shown_Subclass() {
      return this.subclass_Filter.length !== 0 ||
      this.subclass_other_Filter.length !== 0
    },

    shown_Other() {
      return this.other_Filter.length !== 0
    },

    shown_Spells() {
      return (
        this.spells_0_Filter.length !== 0 ||
        this.spells_1_Filter.length !== 0 ||
        this.spells_Filter.length !== 0 ||
        this.spells_Arcanum_Filter.length !== 0
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
	},
};
</script>

<style scoped>

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

/* .selection_menu_wrap::-webkit-scrollbar {
	width: 0;
} */

.selection_menu {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.undefined{
  background: rgb(94, 10, 10);
}
</style>
