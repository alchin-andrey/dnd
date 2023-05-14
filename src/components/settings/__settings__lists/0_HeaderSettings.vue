<template>
	<!-- Preview -->
	<My-Selection-Box :shown="main_page.shown.logo">
		<Description />
	</My-Selection-Box>
	<!-- Preview -->

	<!-- Language change -->
	<My-Selection-Box :shown="main_page.shown.lang">
		<LangSetting />
	</My-Selection-Box>
	<!-- Language change -->

	<!-- Level -->
	<My-Selection-Box :shown="main_page.shown.lvl">
		<div class="flex_options">
			<MyRange v-model.number="MY.level" lvl />
			<MyRangeSize lvl />
		</div>
	</My-Selection-Box>
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
.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}
</style>
