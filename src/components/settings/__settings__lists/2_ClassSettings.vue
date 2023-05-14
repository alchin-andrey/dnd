<template>
	<My-Selection-Box :shown="class_page.shown.stats">
		<ClassSett__BaseStats />
	</My-Selection-Box>

	<!-- customm_Settings -->
  <My-Selection-Box
			v-for="item in сustomm_Settings_Class_Arr"
			:key="item.id_link"
			:shown="class_page.shown[item.id_link]"
		>
			<ClassSett__Custom :custom="item"/>
		</My-Selection-Box>

  <My-Selection-Box
			v-for="item in spells_Settings_Class_Arr"
			:key="item.id_link"
			:shown="class_page.shown[item.id_link]"
		>
			<ClassSett__Spells :spells_setting="item"/>
		</My-Selection-Box>

  <!-- feats_Settings -->
  <My-Selection-Box
			v-for="item in feats_Settings_Class"
			:key="item.id_link"
			:shown="class_page.shown[item.id_link]"
		>
    <ClassSett__Feats :id_link="item.id_link" />
		</My-Selection-Box>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";

import ClassSett from "@/components/settings/2_settings__class/ClassSetting.js";
export default {
	name: "ClassSettings",
	mixins: [ClassSett],
	computed: {
		// STORE
		...mapState(usePagesStore, ["class_page"]),
		...mapState(useMYStore, ["сustomm_Settings_Class_Arr", "spells_Settings_Class_Arr"]),
    ...mapState(useFeatsStore, ["feats_Settings_Class"]),
	},
  methods: {
  }
};
</script>

<style scoped>

</style>
