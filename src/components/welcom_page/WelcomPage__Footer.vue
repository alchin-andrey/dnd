<template>
	<!-- <article class="flex-row gap-4"> -->
	<article class="card-wrapp">
		<section class="card-size">
			<div class="int-700 flex-col gap-32 w-362">
				<div v-html="t('lobby_conclustion')" />
				<AppBtmLink class="btm-blue" @click="btn()" name="how_to_start_2_title" />
			</div>
		</section>

		<!-- <section class="card-size pd-rl-16"> -->
		<section class="card-size">
			<AppDisclaimer class="text-wrapp" />
		</section>
	</article>
</template>
<script>
export default {
	name: "WelcomPage__Footer",
	emits: ["btnClick"],
	methods: {
		btn() {
				this.$emit("btnClick");
      },
	},
};
</script>

<style scoped>
.card-wrapp {
	display: flex;
	gap: 4px;
}

.text-wrapp {
	width: 362px;
	padding: 0 16px;
}

.card-size {
	width: 444px;
}

@media (max-width: 955px) {
	.card-wrapp {
		flex-direction: column;
		gap: 64px;
	}

	.card-size {
		width: 100%;
	}

	.text-wrapp {
		padding: 0;
	}
}
</style>