<template>
	<article>
		<div class="jbm-300">{{ t("how_to_find") }}</div>
			<div class="flex-row flex-wrap gap-4 mr-t-26">
				<WelcomPage__CardClub 
				v-for="club in clubs" 
				:key="club.id"
				:club_param="club"
				/>
			</div>
			<div class="flex-row flex-wrap gap-4 mr-t-26">
				<WelcomPage__CardMaster 
				v-for="master in masters" 
				:key="master.id"
				:master_param="master"
				/>
			</div>

			<my-selection-card class="int-700 mr-t-4 w-362" link plus>
				<a class="pd-16" target="_blank" href="https://t.me/dimalagoda">
					{{ t("lobby_master_button") }}
				</a>
			</my-selection-card>
	</article>
</template>
<script>
import { mapState } from "pinia";
import { useSecondaryStore } from "@/stores/general/SecondaryStore";

import WelcomPage__CardClub from "@/components/welcom_page/WelcomPage__CardClub.vue";
import WelcomPage__CardMaster from "@/components/welcom_page/WelcomPage__CardMaster.vue";
export default {
	name: "WelcomPage__Masters",
	components: {
		WelcomPage__CardClub,
		WelcomPage__CardMaster,
	},
	computed: {
		...mapState(useSecondaryStore, ["masters", "clubs"]),
	},
};
</script>