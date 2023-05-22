<template>
	<div v-if="screen_Max" class="sidebar_right" :class="{ sidebar_right_close: close_Sidebar_Right }">
		<RaceParameters v-if="pages.race_page" />
		<ClassParameters v-if="pages.class_page" />
		<AlignmentParameters v-if="pages.alignment_page" />
	</div>

	<AppMobDialog v-else :shown="shown_mob_param" mob_param mob_fixed>
			<section class="character-mob">
				<RaceBody body_part="skin" />
				<RaceBody body_part="eyes" />
				<RaceBody body_part="hair" />
				<RaceBody body_part="class" v-if="!pages.race_page" />
				<mySizeGrowth division zero skale_top />
			</section>
			
			<section class="mr-t-24">
				<RaceParameters v-if="pages.race_page" />
				<ClassParameters v-if="pages.class_page" />
				<AlignmentParameters v-if="pages.alignment_page" />
			</section>
	</AppMobDialog>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import RaceParameters from "@/components/parameters/__param__lists/1_RaceParameters.vue";
import ClassParameters from "@/components/parameters/__param__lists/2_ClassParameters.vue";
import AlignmentParameters from "@/components/parameters/__param__lists/3_AlignmentParameters.vue";
export default {
	name: "Main__ParamBar",
	components: {
		RaceParameters,
		ClassParameters,
		AlignmentParameters,
	},
	computed: {
		...mapState(usePagesStore, [
			"shown_mob_param",
			"shown_home",
			"setting_open",
			"pages",
			"screen_Max"
		]),

		close_Sidebar_Right() {
			const open_class_page = this.pages.class_page;
			const feats =
				this.setting_open?.slice(0, 5) == "feats" && open_class_page;
			const stats = this.setting_open?.includes("stats") && open_class_page;
			const skills = this.setting_open?.includes("skills") && open_class_page;
			const many_spells =
				this.setting_open?.includes("many_spells") && open_class_page;
			return !this.shown_home && !(stats || feats || skills || many_spells);
		},
	},
	methods: {
	},
};
</script>

<style>
.sidebar_right {
	min-width: 426px;
	max-width: 426px;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #0e1518;
	z-index: 2;
	transition: all 0.4s ease-in-out;
}

.sidebar_right::-webkit-scrollbar {
	width: 0;
}

.sidebar_right_close {
	margin-right: -426px;
	opacity: 0;
	transition: all 0.4s ease-in-out;
}

.character-mob {
	width: 100%;
	min-height: 470px;
	position: relative;
	overflow: hidden;
}

.character-mob>img {
	position: absolute;
	bottom: 0;
	right: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, 0%);
	-ms-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
}

.character-mob>svg {
	position: absolute;
	bottom: 0;
	right: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, 0%);
	-ms-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
}
</style>
