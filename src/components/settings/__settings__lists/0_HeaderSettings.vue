<template>
	<!-- Preview -->
	<My-Selection-Box :shown="main_page.shown.logo" not_mob_header>
		<Description />
	</My-Selection-Box>
	<!-- Preview -->

	<!-- Language change -->
	<My-Selection-Box :shown="main_page.shown.lang" not_mob_header>
		<LangSetting />
	</My-Selection-Box>
	<!-- Language change -->

	<!-- Level -->
	<My-Selection-Box :shown="main_page.shown.lvl" not_mob_header>
		<div class="flex_options">
			<!-- <MyRange v-model.number="MY.level" lvl /> -->
			<AppRangSlider v-model.number="MY.level" lvl/>
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
