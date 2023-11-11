<template>
	<article class="flex-row flex-wrap gap-4 mr-t-108">
		<section class="card-size mr-b-24">
			<div class="int-700-20">{{ t("party_example") }}</div>
			<div class="int-400 white-04 mr-t-24" v-html="t('party_example_details')" />
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
			{
				name: 'lobby_game_type_1_name',
				details: 'lobby_game_type_1_details',
				img: require('@/assets/img/other/dnd_story_one_shot.png'),
				link: 'https://youtu.be/GY6AZbLfxmQ?t=185',
			},
			{
				name: 'lobby_game_type_2_name',
				details: 'lobby_game_type_2_details',
				img: require('@/assets/img/other/dnd_story_module.png'),
				link: 'https://youtu.be/7CjvWO05rA0?t=507',
			},
			{
				name: 'lobby_game_type_3_name',
				details: 'lobby_game_type_3_details',
				img: require('@/assets/img/other/dnd_story_campaign.png'),
				link: 'https://youtu.be/P8pLvV3FjPc?t=756',
			},
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
	width: 394px; 
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