<template>
	<div class="header">
		<AppLogoCard
			@click="showSettings__Main('logo')"
			:active="main_page.shown.logo"
		/>
		<div class="header_col">
			<AppHeaderCard
				@click="showSettings__Main('lang')"
				:active="main_page.shown.lang"
			>
				<emoji v-for="n in em_Icon" :key="n"
					:data="emojiIndex"
					:emoji="n"
					:set="set_emoji"
					:size="15"
				/>
			</AppHeaderCard>
			<AppHeaderCard
				@click="showSettings__Main('lvl')"
				:active="main_page.shown.lvl"
			> {{ char_Lvl }} </AppHeaderCard>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useDicStore } from "@/stores/general/DicStore";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
  name: "HeaderMenu",
	computed: {
		...mapState(usePagesStore, ["main_page", "pages"]),
		...mapState(useDicStore, ["dic", "select_lang"]),
    ...mapState(useMYStore, ["MY"]),

		lang_Icon() {
			return require(`@/assets/img/icon/lang/icon_${this.select_lang}.png`)
    },
		
    em_Icon() {
			return this.dic.lang.find(icon => icon.mark === this.select_lang).icon
    },

		char_Lvl() {
      return `lvl ${this.MY.level}`
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
	display: flex;
	align-items: center;
	justify-content: space-between;
}

@media (max-width: 1279px) {
	.header {
		height: 50px;
	}
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
