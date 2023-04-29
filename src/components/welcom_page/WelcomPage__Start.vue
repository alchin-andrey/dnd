<template>
	<article>
		<div class="jbm-300">{{ t("lobby_menu_2") }}</div>
			<div class="flex-row gap-4 mr-t-26">
				<WelcomPage__CardStart v-for="step in start_steps" :key="step.num"
				:numb="step.num"
				:title="step.title"
				:text="step.details"
				:active="step.active"
				@click="step.active ? goTo('/') : null"
				/>
			</div>
	</article>
</template>
<script>
import WelcomPage__CardStart from "@/components/welcom_page/WelcomPage__CardStart.vue";
export default {
	name: "WelcomPage__Start",
	components: {
		WelcomPage__CardStart,
	},
	data: () => ({
		start_steps: [
			{num: "01", title: "how_to_start_1_title", details: "how_to_start_1_details", active: false},
			{num: "02", title: "how_to_start_2_title", details: "how_to_start_2_details", active: true},
			{num: "03", title: "how_to_start_3_title", details: "how_to_start_3_details", active: false},
		]
	}),
	methods: {
		goTo(route) {
        this.$router.push(route);
      },
	},
};
</script>

<style scoped>
</style>