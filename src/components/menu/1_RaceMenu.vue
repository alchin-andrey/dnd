<template>
	<!-- RACE ETHNOS -->
	<div class="selection_menu_wrap">
		<section class="selection_menu">
			<AppSelection
				@click="showSettings__Race('ethnos')"
				:active="race_page.shown.ethnos"
				title="ethnos"
				:type="MY_Ethnos.name"
				:rare="MY_Ethnos.rare"
			/>
			<AppSelectionArr :menu="MY_Backstory_Menu" :step_num="1"/>
		</section>
		<!-- RACE ETHNOS -->

		<!-- <section
			class="selection_menu"
			v-if="сustomm_Settings_Race_Arr.length !== 0"
		>
			<AppSelectionArr :menu="other_Filter" :step_num="1"/>
      <AppSelectionArr :menu="spells_0_Filter" :step_num="1"/>
			<AppSelectionArr :menu="spells_Filter" :step_num="1"/>
      <AppSelectionArr :menu="stats_Filter" :step_num="1"/>
			<AppSelectionArr :menu="skills_Filter" :step_num="1"/>
			<AppSelectionArr :menu="tools_Filter" :step_num="1"/>
			<AppSelectionArr :menu="languages_Filter" :step_num="1"/>
      <AppSelectionArr :menu="armors_Filter" :step_num="1"/>
			<AppSelectionArr :menu="weapons_Filter" :step_num="1"/>
			<AppSelectionArr :menu="packs_Filter" :step_num="1"/>
			<AppSelectionArr :menu="inventory_Filter" :step_num="1"/>
		</section> -->

		<section
			class="selection_menu"
			v-if="shown_Other"
		>
			<AppSelectionArr :menu="other_Filter" :step_num="1"/>
		</section>

		<section
			class="selection_menu"
			v-if="shown_Spells"
		>
      <AppSelectionArr :menu="spells_0_Filter" :step_num="1"/>
			<AppSelectionArr :menu="spells_1_Filter" :step_num="1"/>
		</section>

		<section
			class="selection_menu"
			v-if="shown_Stats"
		>
      <AppSelectionArr :menu="feats_Filter" :step_num="1"/>
      <AppSelectionArr :menu="stats_Filter" :step_num="1"/>
			<AppSelectionArr :menu="skills_Filter" :step_num="1"/>
			<AppSelectionArr :menu="tools_Filter" :step_num="1"/>
			<AppSelectionArr :menu="languages_Filter" :step_num="1"/>
		</section>

		<section
			class="selection_menu"
			v-if="shown_Equip"
		>
      <AppSelectionArr :menu="armors_Filter" :step_num="1"/>
			<AppSelectionArr :menu="weapons_Filter" :step_num="1"/>
			<AppSelectionArr :menu="packs_Filter" :step_num="1"/>
			<AppSelectionArr :menu="inventory_Filter" :step_num="1"/>
		</section>

		<section class="selection_menu undefined" v-if="shown_Undefined">
			<AppSelectionArr :menu="undefined_Filter" :step_num="1"/>
		</section>

		<!-- OTHER RACE SETTINGS -->
		<section class="selection_menu">
			<AppSelection
				@click="showSettings__Race('gender')"
				:active="race_page.shown.gender"
				title="gender"
				:type="MY.gender.phisiological"
			/>
			<AppController
				@click="showSettings__Race('age')"
				:active="race_page.shown.age"
				title="age"
				:value="MY.age"
				age
				:note="Age_Note"
			/>
			<AppController
				@click="showSettings__Race('height')"
				:active="race_page.shown.height"
				title="height"
				:value="MY.height"
				unit="cm"
				:note="Hight_Note"
			/>
			<AppController
				@click="showSettings__Race('weight')"
				:active="race_page.shown.weight"
				title="weight"
				:value="MY.weight"
				unit="kg"
				:note="Weight_Note"
			/>
			<AppSelection
				@click="showSettings__Race('skin_color')"
				:active="race_page.shown.skin_color"
				title="color_skin"
				:type="skin_color_Char_Body.name"
			/>
			<AppSelection
				@click="showSettings__Race('eyes_color')"
				:active="race_page.shown.eyes_color"
				title="color_eyes"
				:type="eyes_color_Char_Body.name"
			/>
			<AppSelection
				@click="showSettings__Race('hair_color')"
				:active="race_page.shown.hair_color"
				title="color_hair"
				:type="hair_color_Char_Body.name"
			/>
		</section>

		<AlignmentMenu__Photo />
		<!-- OTHER RACE SETTINGS -->
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";

import AlignmentMenu__Photo from "@/components/menu/3_menu__alignment/AlignmentMenu__Photo.vue"
export default {
	name: "RaceMenu",
	components: {
		AlignmentMenu__Photo
	},
	computed: {
		// STORE
		...mapState(useMYStore, [
      "MY", 
      "MY_Backstory",
			"MY_Backstory_Menu",
      "MY_Race",
      "MY_Ethnos",
      "сustomm_Settings_Race_Arr",
    ]),
		...mapState(usePagesStore, ["race_page"]),
		// GETTERS
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

		filter_Setting: (stor) => (numb) => {
			return stor.сustomm_Settings_Race_Arr.filter(
				(item) => item.position == numb
			);
		},

		subclass_Filter: (stor) => stor.filter_Setting(1),

		other_Filter: (stor) => stor.filter_Setting(2),

		spells_0_Filter: (stor) => stor.filter_Setting(3),
		spells_1_Filter: (stor) => stor.filter_Setting(4),

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

		shown_Other() {
      return this.other_Filter.length !== 0
    },

		shown_Spells() {
      return (
        this.spells_0_Filter.length !== 0 ||
        this.spells_1_Filter.length !== 0
      )
    },

		shown_Stats() {
      return (
        this.feats_Filter.length !== 0 ||
        this.stats_Filter.length !== 0 ||
        this.skills_Filter.length !== 0 ||
        this.tools_Filter.length !== 0 ||
        this.languages_Filter.length !== 0
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
			return this.undefined_Filter.length !== 0;
		},


	},
	methods: {
		...mapActions(usePagesStore, ["showSettings__Race"]),
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
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.undefined {
	background: rgb(94, 10, 10);
}
</style>
