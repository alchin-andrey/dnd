<template>
	<article class="card-wrapp">
		<section class="card-size btm-trans br-12">
			<div class="int-700">{{ t("lobby_menu_4") }}</div>
			<!-- <div class="int-400 flex-col gap-15 white-04 w-362 mr-t-24"> -->
			<div class="text-wrapp int-400 white-04 mr-t-24">
				<div class="ident-15 mr-l-15 flex-col gap-15">
					<div>— {{ t('how_it_goes_1') }}</div>
					<div>— {{ t('how_it_goes_2') }}</div>
					<div>— {{ t('how_it_goes_3') }}</div>
				</div>
				<div>{{ t('how_it_goes_4') }}</div>
			</div>
		</section>

		<section class="card-size">
			<div class="flex-col gap-4">
				<WelcomPage__CardGame
				v-for="step in game_steps"
				:key="step.name"
				:param="step"
				/>
			</div>
		</section>
	</article>
</template>
<script>
import WelcomPage__CardGame from "@/components/welcom_page/WelcomPage__CardGame.vue";
export default {
	name: "WelcomPage__Masters",
	components: {
		WelcomPage__CardGame,
	},
	data: () => ({
		game_steps: [
			{name: 'lobby_game_type_1_name', details: 'lobby_game_type_1_details', link: 'https://youtu.be/GY6AZbLfxmQ?t=185'},
			{name: 'lobby_game_type_2_name', details: 'lobby_game_type_2_details' , link: 'https://youtu.be/7CjvWO05rA0?t=507'},
			{name: 'lobby_game_type_3_name', details: 'lobby_game_type_3_details' , link: 'https://youtu.be/P8pLvV3FjPc?t=756'},
		]
	}),
};
</script>

<style scoped>

.card-wrapp {
	display: flex;
	gap: 4px
}
.card-size { 
	width: 444px; 
}

.text-wrapp {
	width: 362px;
	display: flex;
	flex-direction: column;
	gap: 15px;
}
.ident-15 > div { text-indent: -15px; }



@media (max-width: 955px) {
	.card-wrapp {
		flex-direction: column;
	}
	.card-size {
		width: 100%;
	}
}

@media (max-width: 480px) {
	.text-wrapp {
		width: 330px;
	}
}
</style>