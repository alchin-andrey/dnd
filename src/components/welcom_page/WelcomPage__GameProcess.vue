<template>
	<article>
		<div class="int-700-20 w-320">{{ t("game_process") }}</div>
		<article class="flex-row-sb flex-wrap mr-t-8">
			<section class="flex-col gap-4 step-size mr-t-54">
				<WelcomPage__CardАction
				v-for="step in game_steps"
				:key="step.name"
				:class="step.css"
				:numb="step.numb"
				:height="step.height"
				:full="step.full"
				/>
			</section>
			<section class="img-size">
				<img class="exem-1x" src="@/assets/img/other/game_example.png" alt="game_example">
				<img class="exem-3x" src="@/assets/img/other/game_example_3x.png" alt="game_example">
			</section>
		</article>
	</article>
</template>
<script>
import WelcomPage__CardАction from "@/components/welcom_page/WelcomPage__CardАction.vue";
export default {
	name: "WelcomPage__GameProcess",
	components: {
		WelcomPage__CardАction,
	},
	data: () => ({
		game_steps: [
			{
				numb: '01',
				height: 168,
				full: true,
				css: '',
			},
			{
				numb: '02',
				height: 250,
				full: true,
				css: '',
			},
			{
				numb: '03',
				height: 306,
				full: true,
				css: '',
			},
			{
				numb: '01',
				height: 350,
				full: false,
				css: 'white-02 mob-invis',
			},
			{
				numb: '02',
				height: 114,
				full: false,
				css: 'white-02 mob-invis',
			},
			{
				numb: '03',
				height: 320,
				full: false,
				css: 'white-02 mob-invis',
			},
			{
				numb: '01',
				height: 350,
				full: false,
				css: 'white-006 mob-invis',
			},
		]
	}),
};
</script>

<style scoped>

.exem-3x {
	display: none;
}

.step-size {
	width: 100%;
	max-width: 366px; 
}

.img-size {
	width: 100%;
	max-width: 496px; 
}

img {
	width: 100%;
}

@media (max-width: 955px) {
	.mob-invis {
		display: none;
	}
}

@media (max-width: 480px) {
		.exem-1x {
		display: none;
	}

	.exem-3x {
		display: block;
	}

}

</style>