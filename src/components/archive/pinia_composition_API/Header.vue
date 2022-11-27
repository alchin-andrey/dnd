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
				<!-- <emoji v-for="n in Em_Icon" :key="n"
					:data="emojiIndex"
					:emoji="n"
					:set="set_emoji"
					:size="15"
				/> -->
				<img class="header_icon" :src="Lang_Icon" alt="Lang_Icon" />
			</my-header-card>
			<my-header-card
				@click="showSettings__Main('lvl')"
				:active="main_page.shown.lvl"
				:slots="Char_Lvl"
			/>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useDicStore } from "@/stores/DicStore";
import { useMYStore } from "@/stores/MY/MYStore";

const { dic } = useDicStore();
const Em_Icon = computed(
	() => dic.lang.find(icon => icon.mark === dic.select_lang).icon
);
const Lang_Icon = computed(() =>
	require(`@/assets/img/icon/lang/icon_${dic.select_lang}.png`)
);

const { MY } = useMYStore();
const Char_Lvl = computed(() => `lvl ${MY.level}`);

const { main_page } = usePagesStore();
const { showSettings__Main } = usePagesStore();
</script>

<style scoped>
.header {
	height: 28px;
	margin: 0 0 22px 0;
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
