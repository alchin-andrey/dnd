<template>
	<article class="flex-row flex-wrap gap-4">
		<section class="card-size mr-bot">
			<div class="int-700-20 w-320" v-html="t('lobby_conclustion')" />
			<div class="int-400 mr-t-24 w-320" v-html="t('lobby_conclustion_details')" />
		</section>

		<section class="card-size">
			<WelcomPage__CardToPlay short @click="cardGo()" />
		</section>
	</article>
</template>
<script>
import WelcomPage__CardToPlay from "@/components/welcom_page/WelcomPage__CardToPlay.vue";
export default {
	name: "WelcomPage__GameLove",
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

.card-size {
	width: 100%;
	max-width: 394px; 
}

@media (max-width: 955px) {
	.mr-bot {
		margin-bottom: 28px;
	}
}

</style>