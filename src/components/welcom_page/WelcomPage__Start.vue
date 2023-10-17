<template>
	<article>
		<div class="jbm-300">{{ t("lobby_menu_2") }}</div>
			<!-- <div class="flex-row gap-4 mr-t-26"> -->
			<div class="card-wrapp mr-t-26">
				<WelcomPage__CardStart 
				class="card-size"
				v-for="step in start_steps" 
				:key="step.num"
				:numb="step.num"
				:title="step.title"
				:text="step.details"
				:active="step.active"
				@click="step.active ? btn() : null"
				/>
			</div>
	</article>
</template>
<script>
import WelcomPage__CardStart from "@/components/welcom_page/WelcomPage__CardStart.vue";
export default {
	name: "WelcomPage__Start",
	emits: ["btnClick"],
	components: {
		WelcomPage__CardStart,
	},
	data: () => ({
		start_steps: [
			{num: "01", title: "how_to_start_2_title", details: "how_to_start_2_details", active: true},
			{num: "02", title: "how_to_start_1_title", details: "how_to_start_1_details", active: false},
			{num: "03", title: "how_to_start_3_title", details: "how_to_start_3_details", active: false},
		]
	}),
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
	gap: 4px
}

.card-size {
	width: 220px;
}

@media (max-width: 955px) {
	.card-wrapp {
		flex-direction: column;
	}
	.card-size {
		width: 100%;
	}
}
</style>