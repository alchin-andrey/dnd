<template>
	<article>
		<div class="int-700-30" v-html="t('lobby_try_to_play')" />

		<div :class="['flex-row', 'flex-wrap', 'gap-4', style_Mr]">
			<div class="card-size flex-col" :class="{'mr-bot': !new_user}">
				<WelcomPage__CardToPlay @click="goToChar()" v-if="new_user"/>
				<WelcomPage__CardChar v-else/>
			</div>
			<WelcomPage__CardToPlay class="card-size" masters/>
		</div>
	</article>
</template>

<script>
import { mapActions, mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import WelcomPage__CardToPlay from "@/components/welcom_page/WelcomPage__CardToPlay.vue";
import WelcomPage__CardChar from "@/components/welcom_page/WelcomPage__CardChar.vue";
export default {
	name: "WelcomPage__TryToPlay",
	components: {
    WelcomPage__CardToPlay,
		WelcomPage__CardChar,
	},

	computed: {
		...mapState(usePagesStore, ["new_user", "screen_Max"]),

		style_Mr() {
			return this.screen_Max ? "mr-t-108" : "mr-t-48" 
		}
	},

	methods: {
		...mapActions(usePagesStore, ["goToChar"]),
	}
};
</script>

<style scoped>

.card-size {
	width: 100%;
	max-width: 394px;
}

@media (max-width: 955px) {
	.mr-bot {
		margin-bottom: 32px;
	}
}

</style>