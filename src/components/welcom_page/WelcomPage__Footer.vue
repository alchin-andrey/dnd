<template>
	<article class="flex-row gap-4">
		<section class="btm-size">
			<div class="int-700 flex-col gap-32 w-362">
				<div v-html="t('lobby_conclustion')"/>
				<my-selection-card @click="goTo('/')" blue_btn route> {{ T("how_to_start_2_title") }} </my-selection-card>
			</div>
		</section>

		<section class="btm-size pd-rl-16">
			<AppDisclaimer class="w-362" />
		</section>
	</article>
</template>
<script>
export default {
	name: "WelcomPage__Footer",
	methods: {
		goTo(route) {
        this.$router.push(route);
      },
	},
};
</script>

<style scoped>
.btm-size { width: calc(50% - 2px); }
</style>