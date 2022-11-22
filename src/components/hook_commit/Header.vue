<template>
	<div class="header">
		<my-logo-card @click="showSettings__Main('logo')" :active="main_page.shown.logo" />
		<div class="header_col">
			<my-header-card
				@click="showSettings__Main('lang')"
				:active="main_page.shown.lang"
			>
				<!-- <emoji v-for="n in em_Icon" :key="n"
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
import { useShowSettings } from "@/hooks/PAGES/common/useShowSettings.js";
import { mapStateLib, mapGettersLib } from "@/hooks/stateLibName";
const { showSettings__Main } = useShowSettings();

const { race_page } = mapStateLib('pages')
const { shown_Home } = mapGettersLib('pages')
// console.log("map.race_page", race_page.value)
// console.log("map.shown_Home", shown_Home.value)
// const showSettings_Main = (name) => showSettings("main_page", name)
// function showSettings_Main (name) {
// 	showSettings("main_page", name)
// }
</script>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	// name: "Header",
	computed: {
		...mapState({
			MY: (state) => state.MY.MY,
			main_page: (state) => state.pages.main_page,
			dic: (state) => state.dic.dic,
		}),

		...mapGetters("dic", ["Em_Icon", "Lang_Icon"]),

		Char_Lvl() {
			// console.log("map.shown_Home", this.shown_Home)
			return `lvl ${this.MY.level}`;
		},
	},
};
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
