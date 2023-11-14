<template>
	<article>
		<div class="int-700-20 w-320 mr-b-8">{{ t("game_process") }}</div>
		<div class="flex-col step-gap">
			<article
				v-for="step in game_steps"
				:key="step.name"
				class="flex-row flex-wrap gap-32"
				>
				<section class="step-size">
					<WelcomPage__CardАction
					:class="step.css"
					:numb="step.numb"
					:full="step.full"
					/>
				</section>
				<section class="flex-col gap-4 message-size">
						<WelcomPage__CardMessage
						v-for="message in step.message"
						:key="message"
						class="message-card-size"
						:class="get_Style(message)"
						:name="message.name"
						:text_numb="message.text_numb"
						/>
				</section>
			</article>
		</div>
	</article>
</template>
<script>
import WelcomPage__CardАction from "@/components/welcom_page/WelcomPage__CardАction.vue";
import WelcomPage__CardMessage from "@/components/welcom_page/WelcomPage__CardMessage.vue";
export default {
	name: "WelcomPage__GameProcess",
	components: {
		WelcomPage__CardАction,
		WelcomPage__CardMessage,
	},
	data: () => ({
		game_steps: [
			{
				numb: '01',
				full: true,
				css: 'mr-t-54',
				message: [
					{
						name: null,
						text_numb: 0,
					},
					{
						name: 'master',
						text_numb: 1,
					}
				]
			},
			{
				numb: '02',
				full: true,
				css: '',
				message: [
					{
						name: null,
						text_numb: 2,
					},
					{
						name: 'julia',
						text_numb: 3,
					},
					{
						name: 'dima',
						text_numb: 4,
					}
				]
			},
			{
				numb: '03',
				full: true,
				css: '',
				message: [
					{
						name: 'master',
						text_numb: 5,
					},
					{
						name: 'dima',
						text_numb: 6,
					}
				]
			},
			{
				numb: '01',
				full: false,
				css: 'white-02 mob-invis',
				message: [
					{
						name: 'master',
						text_numb: 7,
					},
					{
						name: 'goblin',
						text_numb: 8,
					},
					{
						name: 'master',
						text_numb: 9,
					}
				]
			},
			{
				numb: '02',
				full: false,
				css: 'white-02 mob-invis',
				message: [
					{
						name: 'julia',
						text_numb: 10,
					}
				]
			},
			{
				numb: '03',
				full: false,
				css: 'white-02 mob-invis',
				message: [
					{
						name: 'master',
						text_numb: 11,
					},
					{
						name: 'julia',
						text_numb: 12,
					}
				]
			},
			{
				numb: '01',
				full: false,
				css: 'white-006 mob-invis',
				message: [
					{
						name: 'master',
						text_numb: 13,
					},
					{
						name: 'goblin',
						text_numb: 14,
					},
					{
						name: 'master',
						text_numb: 15,
					}
				]
			},
		]
	}),

	computed: {
		get_Style: (stor) => (message) => {
			const name = message.name;
			const numb = message.text_numb;
			const master_message = name == 'master' || name == 'goblin' || numb == 0;
			if(!master_message) return 'flex-end';
		}
	}
};
</script>

<style scoped>

.step-size {
	width: 366px; 
}

.step-gap {
	gap: 4px;
}

.message-size {
	width: 100%;
	max-width: 464px; 
}

.message-card-size {
	width: 394px; 
}

.flex-end {
	align-self: flex-end;
}

@media (max-width: 955px) {
	.step-size {
		width: 100%;
	}

	.step-gap {
		gap: 32px;
	}
}


@media (max-width: 480px) {
	.message-card-size {
		/* width: 362px;  */
		width: 346px; 
	}

}

</style>