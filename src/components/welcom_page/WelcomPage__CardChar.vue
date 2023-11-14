<template>
	<div class="flex-col gap-4 h-100">
		<AppBtmLink name="lobby_menu_char" icon="check_green" passive jbm />
		<WelcomPage__UserChar class="flex-sel"/>
		<div class="grid-char">
			<AppLoadBtm text="download_pdf" />
			<AppBtmLink name="edit" icon="edit" @click="goToChar()"/>
			<Btm__Reset short/>
		</div>
	</div>
</template>

<script>
import { mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import WelcomPage__UserChar from "@/components/welcom_page/WelcomPage__UserChar.vue";
import Btm__Reset from "@/components/Btm__Reset.vue";
export default {
	name: "WelcomPage__CardChar",
	components: {
		WelcomPage__UserChar,
		Btm__Reset,
	},
	methods: {
		...mapActions(usePagesStore, ["goToChar"]),
	}
};
</script>

<style scoped>

.flex-sel {
	flex: 1 1 auto;
}

.grid-char {
	display: grid;
  grid-template-columns: repeat(2, calc(50% - 27px)) 46px;
	gap: 4px;
}

</style>