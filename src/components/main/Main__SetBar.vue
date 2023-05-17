<template>
	<div 
	:class="{ 
		'sidebar_wrap': screen_Max,
		'sidebar_wrap_open': setting_open && screen_Max,
		}">
		<HeaderSettings />
		<RaceSettings v-if="pages.race_page" />
		<ClassSettings v-if="pages.class_page" />
		<AlignmentSettings v-if="pages.alignment_page" />
	</div>
	<div v-if="screen_Max" class="stripe-page"></div>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import HeaderSettings from "@/components/settings/__settings__lists/0_HeaderSettings.vue";
import RaceSettings from "@/components/settings/__settings__lists/1_RaceSettings.vue";
import ClassSettings from "@/components/settings/__settings__lists/2_ClassSettings.vue";
import AlignmentSettings from "@/components/settings/__settings__lists/3_AlignmentSettings.vue";
export default {
	name: "Main__SetBar",
	components: {
		HeaderSettings,
		RaceSettings,
		ClassSettings,
		AlignmentSettings,
	},
	computed: {
		...mapState(usePagesStore, [
			"setting_open",
			"pages",
			"screen_Max"
		]),
	},
};
</script>

<style>
.sidebar_wrap {
	height: 100%;
	display: flex;
	width: 0;
	transition: all 0.4s ease-in-out;
	position: relative;
}


.sidebar_wrap_open {
	width: 426px;
	transition: all 0.4s ease-in-out;
}

@media (max-width: 1279px) {
	.sidebar_wrap {
		position: absolute;
		width: 434px;
		/* padding: 20px; */
	}
}


</style>
