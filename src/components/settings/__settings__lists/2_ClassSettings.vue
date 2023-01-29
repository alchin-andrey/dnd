<template>
	<!-- Характеристики -->
	<my-selection-box :shown="class_page.shown.stats">
		<ClassSett__BaseStats />
	</my-selection-box>
	<!-- customm_Settings -->


  <my-selection-box
			v-for="item in сustomm_Settings_Class_Arr"
			:key="item.id_link"
			:shown="class_page.shown[item.id_link]"
		>
			<ClassSett__Custom :custom="item"/>
		</my-selection-box>

  <!-- customm_Settings -->
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import ClassSett from "@/components/settings/2_settings__class/ClassSetting.js";
export default {
	name: "ClassSettings",
	mixins: [ClassSett],
	computed: {
		// STORE
		...mapState(usePagesStore, ["class_page"]),
		...mapState(useMYStore, ["сustomm_Settings_Class_Arr"]),
	},
};
</script>

<style scoped>
/* .flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
} */
</style>
