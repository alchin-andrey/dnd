<template>
	<div class="header" @click="Show_MY()">
		<my-logo-card
			@click="$root.show('shown_logo')"
			:active="$root.race_page.shown_logo"
		/>
		<div class="header_col">
			<my-header-card
				@click="$root.show('shown_lang')"
				:active="$root.race_page.shown_lang"
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
				:active="$root.race_page.shown_lvl"
				:slots="Char_Lvl"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",

	computed: {
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
			return `${this.t("lvl")} ${this.$root.MY.level}`;
		},
	},

  methods: {
    Show_MY() {
			console.log(this.$root.MY);
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
