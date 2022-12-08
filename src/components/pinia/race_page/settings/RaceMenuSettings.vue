<template>
	<!-- <div class="main_chapter_menu"> -->
    
    <!-- RACE ETHNOS -->
	<div class="selection_menu_wrap">
		<div class="selection_menu">
			<my-selection
				@click="showSettings__Race('ethnos')"
				:active="race_page.shown.ethnos"
				title="ethnos"
				:type="MY.ethnos.name"
				:rare="MY.ethnos.rare"
			></my-selection>
		</div>
    <!-- RACE ETHNOS -->

    <!-- RACE CUSTTOM -->
		<div
			class="selection_menu"
			v-if="custom_Race_Settings_Visib"
		>
			<my-selection
				v-if="!stats_Custom_Arr_RE.length == 0"
				@click="showSettings__Race('stats')"
				:active="race_page.shown.stats"
				title="stats"
				:type_arr="stats_Custom_Arr_RE"
			></my-selection>
			<my-selection
				v-if="!skills_Custom_Arr_RE.length == 0"
				@click="showSettings__Race('skills')"
				:active="race_page.shown.skills"
				title="skills"
				:type_arr="skills_Custom_Arr_RE"
			>
			</my-selection>
			<my-selection
				v-if="!languages_Custom_Arr_RE.length == 0"
				@click="showSettings__Race('languages')"
				:active="race_page.shown.languages"
				title="languages"
				:type_arr="languages_Custom_Arr_RE"
			>
			</my-selection>
      <my-selection
				v-if="!spells_Custom_Arr_RE.length == 0"
				@click="showSettings__Race('spells')"
				:active="race_page.shown.spells"
				title="spells"
				:type_arr="spells_Custom_Arr_RE"
			>
			</my-selection>
		</div>
    <!-- RACE CUSTTOM -->

    <!-- OTHER RACE SETTINGS -->
		<div class="selection_menu">
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
		</div>
    <!-- OTHER RACE SETTINGS -->
	</div>
	<!-- </div> -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";
import { useColorStore } from "@/stores/modules/ColorStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "RaceMenuSettings",
	computed: {
    // STORE
    ...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page"]),
    // GETTERS
    ...mapState(useColorStore, [
      "skin_color_Char_Body",
      "eyes_color_Char_Body",
      "hair_color_Char_Body"
    ]),

    ...mapState(useStatsStore, ["stats_Custom_Arr_RE"]),
    ...mapState(useSkillsStore, ["skills_Custom_Arr_RE"]),
    ...mapState(useLanguagesStore, ["languages_Custom_Arr_RE"]),
    ...mapState(useSpellsStore, ["spells_Custom_Arr_RE"]),

    custom_Race_Settings_Visib() {
      return !this.stats_Custom_Arr_RE.length == 0 ||
			!this.skills_Custom_Arr_RE.length == 0 ||
      !this.languages_Custom_Arr_RE.length == 0 ||
      !this.spells_Custom_Arr_RE.length == 0;
		},

		Age_Note() {
      let age = this.MY.race.race_settings.age;
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
			return this.t(this.MY.race.race_settings.size);
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
</style>
