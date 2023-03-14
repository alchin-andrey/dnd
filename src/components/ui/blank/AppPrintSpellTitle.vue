<template>
	<div class="spell-wrap">
		<div>
			• {{ em_Before }}
			<emoji
				v-if="em_Upd"
				:data="emojiIndex"
				:emoji="em_Upd"
				:set="set_emoji"
				:size="22"
			/>{{ em_After }}
		</div>
	</div>
</template>

<script>
export default {
	name: "AppPrintSpellTitle",
	props: {
		spells: {
			type: Object,
			default: null,
		},
	},

	computed: {
		t_Spell_Name() {
      const str_name = this.spells.spell.find((item) => item.name).name;
      return this.T(str_name);
    },

    em_Upd() {
			return this.updEmoji(this.t_Spell_Name);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Spell_Name);
		},

		em_After() {
			return this.afterEmoji(this.t_Spell_Name);
		},
	},
};
</script>

<style scoped>

.spell-wrap {
  width: 359px;
  overflow: hidden;
}

.spell-wrap > div {
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: 3px;
}
</style>
