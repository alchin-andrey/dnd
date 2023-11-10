<template>
	<article>
		<div class="int-700-30" v-html="t('lobby_try_to_play')" />

		<div class="flex-row flex-wrap gap-4 mr-t-108">
			<WelcomPage__CardToPlay @click="cardGo()" />
			<WelcomPage__CardToPlay masters/>
		</div>
	</article>
</template>

<script>
import WelcomPage__CardToPlay from "@/components/welcom_page/WelcomPage__CardToPlay.vue";
export default {
	name: "WelcomPage__TryToPlay",
	components: {
    WelcomPage__CardToPlay,
	},
	emits:["btnClick"],
	methods: {
		cardGo() {
			this.$emit("btnClick")
		}
	}
};
</script>

<style scoped>

</style>