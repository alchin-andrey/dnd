<template>
    <!-- Специализация -->
    <my-selection-box :shown="class_page.shown.subclass">
			<ClassSett__Subclass />
		</my-selection-box>
		<!-- Специализация -->
		<!-- Характеристики -->
		<my-selection-box :shown="class_page.shown.stats">
			<ClassSett__BaseStats />
		</my-selection-box>
		<!-- Характеристики -->
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import ClassSett__Subclass from "@/components/settings/2_settings__class/ClassSett__Subclass.vue";
import ClassSett__BaseStats from "@/components/settings/2_settings__class/ClassSett__BaseStats.vue";

export default {
	name: "ClassSettings",
  components: {
    ClassSett__Subclass,
    ClassSett__BaseStats,
	},
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page"]),
    ...mapState(useMYStore, ["MY"]),
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
