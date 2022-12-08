<template>
		<!-- Характеристики -->
		<my-selection-box :shown="class_page.shown.stats">
			<ClassBaseStats />
		</my-selection-box>
		<!-- Характеристики -->
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";

import ClassBaseStats from "@/components/pinia/class_page/settings/ClassBaseStats.vue";

export default {
	name: "ClassSettings",
  components: {
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
