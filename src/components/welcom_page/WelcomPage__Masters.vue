<template>
	<article>
		<div class="int-700-20" v-html="t_Title" />
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
				<AppBtmLink 
				class="mr-t-4 w-362"
				name="lobby_master_button" 
				icon="plus" 
				link="https://t.me/dimalagoda" 
				/>
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

		t_Title() {
			return this.t('how_to_find');
		}
	},
};
</script>