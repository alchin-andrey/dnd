<template>
	<article>
		<div class="int-700-20" v-html="t('lobby_welcome_title')" />

		<div class="int-700 f-lh-18 flex-row mr-t-64 gap-40">
			<div class="w-362" v-html="t('lobby_what_is_it_details')" />
			<div class="w-362" v-html="t('lobby_what_is_it_details_2')" />
		</div>
	</article>
</template>
<script>

export default {
	name: "WelcomPage__Menu",
};
</script>