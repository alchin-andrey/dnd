<template>
	<article class="flex-row flex-wrap gap-4">
		<section class="card-size mr-b-24">
			<div class="int-700-20 w-320">{{ t("party_example") }}</div>
			<div class="int-400 white-04 mr-t-24 w-320" v-html="t('party_example_details')" />
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
	name: "WelcomPage__Game",
	components: {
		WelcomPage__CardGame,
	},
	data: () => ({
		game_steps: [
			{
				name: 'lobby_game_type_1_name',
				details: 'lobby_game_type_1_details',
				img: require('@/assets/img/other/dnd_story_one_shot.avif'),
				link: 'https://youtu.be/UWDPz2vrUn0',
			},
			{
				name: 'lobby_game_type_2_name',
				details: 'lobby_game_type_2_details',
				img: require('@/assets/img/other/dnd_story_module.avif'),
				link: 'https://youtu.be/7CjvWO05rA0?t=507',
			},
			{
				name: 'lobby_game_type_3_name',
				details: 'lobby_game_type_3_details',
				img: require('@/assets/img/other/dnd_story_campaign.avif'),
				link: 'https://www.youtube.com/watch?v=Dl4kA4w0rU0&list=PLO1kG5YTufOacRM7eAfovXMwk_SU1OWNT',
			},
		]
	}),
};
</script>

<style scoped>

.card-size {
	width: 100%;
	max-width: 394px; 
}

</style>