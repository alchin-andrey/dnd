<template>
	<!-- Превью -->
	<my-selection-box :shown="main_page.shown.logo">
		<Description />
	</my-selection-box>
	<!-- Превью -->

	<!-- Смена языка -->
	<my-selection-box :shown="main_page.shown.lang">
		<LangSetting />
	</my-selection-box>
	<!-- Смена языка -->

	<!-- Уровень -->
	<my-selection-box :shown="main_page.shown.lvl">
		<div class="flex_options">
			<MyRange v-model.number="MY.level" lvl />
			<MyRangeSize lvl />
		</div>
	</my-selection-box>
	<!-- Уровень -->
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import Description from "@/components/settings/0_header_settings/Description.vue";
import LangSetting from "@/components/settings/0_header_settings/LangSetting.vue";

export default {
	name: "HeaderSettings",
	components: {
		Description,
		LangSetting,
	},
	computed: {
		// STORE
		...mapState(usePagesStore, ["main_page"]),
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
