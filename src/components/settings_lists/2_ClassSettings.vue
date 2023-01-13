<template>
    <!-- Специализация -->
    <my-selection-box :shown="class_page.shown.subclass">
			<SubclassCard />
		</my-selection-box>
		<!-- Специализация -->
		<!-- Характеристики -->
		<my-selection-box :shown="class_page.shown.stats">
			<ClassBaseStats />
		</my-selection-box>
		<!-- Характеристики -->
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import SubclassCard from "@/components/pinia/class_page/settings/SubclassCard.vue";
import ClassBaseStats from "@/components/pinia/class_page/settings/ClassBaseStats.vue";

export default {
	name: "ClassSettings",
  components: {
    SubclassCard,
    ClassBaseStats,
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
