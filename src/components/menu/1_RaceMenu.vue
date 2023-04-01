<template>
	<!-- <div class="main_chapter_menu"> -->

	<!-- RACE ETHNOS -->
	<div class="selection_menu_wrap">
		<section class="selection_menu">
			<my-selection
				@click="showSettings__Race('ethnos')"
				:active="race_page.shown.ethnos"
				title="ethnos"
				:type="MY.ethnos.name"
				:rare="MY.ethnos.rare"
			></my-selection>
			<my-selection
				@click="showSettings__Race('backstory')"
				:active="race_page.shown.backstory"
				title="past"
				:type="MY_Backstory.name"
				:rare="MY_Backstory.rare"
			></my-selection>
		</section>
		<!-- RACE ETHNOS -->

		<section
			class="selection_menu"
			v-if="сustomm_Settings_Race_Arr.length !== 0"
		>
			<AppSelectionArr :menu="other_Filter"/>
      <AppSelectionArr :menu="spells_0_Filter"/>
			<AppSelectionArr :menu="spells_Filter"/>
      <AppSelectionArr :menu="stats_Filter"/>
			<AppSelectionArr :menu="skills_Filter"/>
			<AppSelectionArr :menu="tools_Filter"/>
			<AppSelectionArr :menu="languages_Filter"/>
      <AppSelectionArr :menu="armors_Filter"/>
			<AppSelectionArr :menu="weapons_Filter"/>
			<AppSelectionArr :menu="packs_Filter"/>
			<AppSelectionArr :menu="inventory_Filter"/>
		</section>

		<section class="selection_menu undefined" v-if="shown_Undefined">
			<AppSelectionArr :menu="undefined_Filter" />
		</section>

		<!-- OTHER RACE SETTINGS -->
		<section class="selection_menu">
			<my-selection
				@click="showSettings__Race('gender')"
				:active="race_page.shown.gender"
				title="gender"
				:type="MY.gender.phisiological"
			></my-selection>
			<my-controller
				@click="showSettings__Race('age')"
				:active="race_page.shown.age"
				title="age"
				:value="MY.age"
				age
				:note="Age_Note"
			></my-controller>
			<my-controller
				@click="showSettings__Race('height')"
				:active="race_page.shown.height"
				title="height"
				:value="MY.height"
				unit="cm"
				:note="Hight_Note"
			></my-controller>
			<my-controller
				@click="showSettings__Race('weight')"
				:active="race_page.shown.weight"
				title="weight"
				:value="MY.weight"
				unit="kg"
				:note="Weight_Note"
			>
			</my-controller>
			<my-selection
				@click="showSettings__Race('skin_color')"
				:active="race_page.shown.skin_color"
				title="color_skin"
				:type="skin_color_Char_Body.name"
			>
			</my-selection>
			<my-selection
				@click="showSettings__Race('eyes_color')"
				:active="race_page.shown.eyes_color"
				title="color_eyes"
				:type="eyes_color_Char_Body.name"
			>
			</my-selection>
			<my-selection
				@click="showSettings__Race('hair_color')"
				:active="race_page.shown.hair_color"
				title="color_hair"
				:type="hair_color_Char_Body.name"
			>
			</my-selection>
		</section>
		<!-- OTHER RACE SETTINGS -->
	</div>
	<!-- </div> -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";


export default {
	name: "RaceMenu",
	computed: {
		// STORE
		...mapState(useMYStore, [
      "MY", 
      "MY_Backstory",
      "MY_Race",
      "сustomm_Settings_Race_Arr",
    ]),
		...mapState(usePagesStore, ["race_page"]),
		// GETTERS
		...mapState(useColorStore, [
			"skin_color_Char_Body",
			"eyes_color_Char_Body",
			"hair_color_Char_Body",
		]),

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

		Age_Note() {
			let age = this.MY_Race.race_settings.age;
			let baby = age.min;
			let young = age.young;
			let mature = age.mature;
			let old = age.old;
			let oldest = age.max;
			const MY_age = this.MY.age;
			if (baby <= MY_age && MY_age < young) {
				return this.t("baby");
			} else if (young <= MY_age && MY_age < mature) {
				return this.t("young");
			} else if (mature <= MY_age && MY_age < old) {
				return this.t("mature");
			} else if (old <= MY_age && MY_age < oldest) {
				return this.t("old");
			} else {
				return this.t("oldest");
			}
		},

		Weight_Note() {
			let kof = this.race_page.weight_kof;
			if (kof === 0) {
				return this.t("skinny");
			} else if (kof === 1) {
				return this.t("fat");
			} else {
				return null;
			}
		},

		Hight_Note() {
			return this.t(this.MY_Race.race_settings.size);
		},
	},
	methods: {
		...mapActions(usePagesStore, ["showSettings__Race"]),
	},
};
</script>

<style scoped>
.main_chapter_menu {
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

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

.undefined {
	background: rgb(94, 10, 10);
}
</style>
