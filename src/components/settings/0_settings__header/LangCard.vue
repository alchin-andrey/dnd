<template>
	<AppCardWrapp gap="4" :active_card="active_card">
		<emoji class="title" 
			v-for="n in title" :key="n"
			:data="emojiIndex"
			:emoji="n"
			:set="set_emoji"
			:size="20"
		/>
		<div class="int-700">{{ text }}</div>
	</AppCardWrapp>
</template>

<script>
export default {
	name: "LangCard",
	props: {
		title: {
			type: Array,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
		active_card: {
      type: Boolean,
      default: false,
    },
	},
};
</script>

<style scoped>
.title {
	height: 24px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
}
</style>
