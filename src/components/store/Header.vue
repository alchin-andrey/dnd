<template>
	<div class="header" @click="Show_MY()">
		<my-logo-card
			@click="$root.show('shown_logo')"
			:active="shown_logo"
		/>
		<div class="header_col">
			<my-header-card
				@click="$root.show('shown_lang')"
				:active="shown_lang"
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
				@click="$root.show('shown_lvl')"
				:active="shown_lvl"
				:slots="Char_Lvl"
			/>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
	name: "Header",

	computed: {
	...mapState({
		MY: state => state.MY.MY,
		MY_level: state => state.MY.MY.level,
		//race_page
		shown_logo: state => state.race_page.race_page.shown_logo,
		shown_lang: state => state.race_page.race_page.shown_lang,
		shown_lvl: state => state.race_page.race_page.shown_lvl,
	}),
    Select_Lang () {
      return this.$root.dic.select_lang
    },

    em_Icon() {
			return this.$root.dic.lang.find(icon => icon.mark === this.Select_Lang).icon;
		},

    Lang_Icon() {
			return require(`@/assets/img/icon/lang/icon_${this.Select_Lang}.png`);
		},

    Char_Lvl() {
			return `${this.t("lvl")} ${this.MY_level}`;
		},
	},

  methods: {
    Show_MY() {
			console.log(this.MY);
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
