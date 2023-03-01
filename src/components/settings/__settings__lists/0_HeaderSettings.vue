<template>
	<!-- Preview -->
	<my-selection-box :shown="main_page.shown.logo">
		<Description />
	</my-selection-box>
	<!-- Preview -->

	<!-- Language change -->
	<my-selection-box :shown="main_page.shown.lang">
		<LangSetting />
	</my-selection-box>
	<!-- Language change -->

	<!-- Level -->
	<my-selection-box :shown="main_page.shown.lvl">
		<div class="flex_options">
			<MyRange v-model.number="MY.level" lvl />
			<MyRangeSize lvl />
		</div>
	</my-selection-box>
	<!-- Level -->
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import Description from "@/components/settings/0_settings__header/Description.vue";
import LangSetting from "@/components/settings/0_settings__header/LangSetting.vue";

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
