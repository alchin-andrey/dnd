<template>
	<My-Selection-Box title="stats" :select="base_Stats_Menu" :shown="class_page.shown.stats">
		<ClassSett__BaseStats />
	</My-Selection-Box>

	<!-- customm_Settings -->
  <My-Selection-Box
			v-for="item in сustomm_Settings_Class_Arr_No_Feats"
			:key="item.id_link"
			:menu="item"
			:shown="class_page.shown[item.id_link]"
			mob_fixed
		>
			<ClassSett__Custom :custom="item"/>
		</My-Selection-Box>

  <My-Selection-Box
			v-for="item in spells_Settings_Class_Arr"
			:key="item.id_link"
			:menu="item"
			:shown="class_page.shown[item.id_link]"
			mob_fixed
		>
			<ClassParamSett__Spells v-if="mob_param_spell && !screen_Max" :spells_setting="item" :shown="true" class="pd-rl-16"/>
			<ClassSett__Spells :spells_setting="item" v-else/>
		</My-Selection-Box>

  <!-- feats_Settings -->
  <My-Selection-Box
			v-for="item in feats_Select_Arr"
			:key="item.id_link"
			title="stats"
			:menu="item"
			:shown="class_page.shown[item.id_link]"
			mob_fixed
		>
    <ClassSett__Feats :id_link="item.id_link" />
		</My-Selection-Box>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

import ClassSett from "@/components/settings/2_settings__class/ClassSetting.js";
export default {
	name: "ClassSettings",
	mixins: [ClassSett],
	computed: {
		// STORE
		...mapState(usePagesStore, ["class_page", "mob_param_spell", "screen_Max"]),
		...mapState(useMYStore, [
			"сustomm_Settings_Class_Arr_No_Feats", "spells_Settings_Class_Arr",
		]),
		...mapState(useStatsStore, [ "base_Stats_Menu"]),
		...mapState(useFeatsStore, ["feats_Select_Arr"]),
	},
};
</script>
