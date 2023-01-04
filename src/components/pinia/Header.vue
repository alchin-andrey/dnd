<template>
	<div class="header">
		<my-logo-card
			@click="showSettings__Main('logo')"
			:active="main_page.shown.logo"
		/>
		<div class="header_col">
			<my-header-card
				@click="showSettings__Main('lang')"
				:active="main_page.shown.lang"
			>
				<emoji v-for="n in em_Icon" :key="n"
					:data="emojiIndex"
					:emoji="n"
					:set="set_emoji"
					:size="15"
				/>
				<!-- <img class="header_icon" :src="lang_Icon" alt="Lang_Icon" /> -->
			</my-header-card>
			<my-header-card
				@click="showSettings__Main('lvl')"
				:active="main_page.shown.lvl"
				:slots="char_Lvl"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useDicStore } from "@/stores/DicStore";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";

export default {
	computed: {
		...mapState(usePagesStore, ["main_page"]),
		...mapState(useDicStore, ["dic"]),
    ...mapState(useMYStore, ["MY"]),

		lang_Icon(store) {
			return require(`@/assets/img/icon/lang/icon_${store.dic.select_lang}.png`)
    },
		
    em_Icon(store) {
			return store.dic.lang.find(icon => icon.mark === store.dic.select_lang).icon
    },

		char_Lvl(store) {
      return `lvl ${store.MY.level}`
    },
	},

	methods: {
		...mapActions(usePagesStore, ["showSettings__Main"]),
	},
};
</script>

<style scoped>
.header {
	height: 28px;
	/* margin: 0 0 22px 0; */
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.header_col {
	height: 100%;
	display: flex;
	gap: 4px;
}

.header_icon {
	height: 18px;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
}
</style>
