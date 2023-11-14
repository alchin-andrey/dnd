<template>
	<div class="btm-grey br-12 blur-60 pd-16">
		<section class="flex-row-c gap-10 mr-b-10" v-if="name">
		<img class="message-ava" :src="message_Ava" :alt="name">
			<div class="int-400 white-04">
				<div>{{ massage_Name }}</div>
				<div>{{ massage_Nickname }}</div>
			</div>
		</section>
		<section class="int-400-13" >{{ massage_Text }}</section>
	</div>
</template>

<script>
export default {
	name: "WelcomPage__CardMessage",
	// data: () => ({
	// 	maseg: [
	// 		{
	// 			numb: '01',
	// 			title: 'lobby_game_step_1',
	// 			details: 'lobby_game_step_1_details',
	// 		},
	// 		{
	// 			numb: '02',
	// 			title: 'lobby_game_step_2',
	// 			details: 'lobby_game_step_2_details',
	// 		},
	// 		{
	// 			numb: '03',
	// 			title: 'lobby_game_step_3',
	// 			details: 'lobby_game_step_3_details',
	// 		},
	// 	]
	// }),
	props: {
		name: {
			type: String,
			default: null,
		},
		text_numb: {
			type: Number,
			default: 0,
		},
		// height: {
		// 	type: Number,
		// 	default: null,
		// },
		// full: {
		// 	type: Boolean,
		// 	default: false,
		// },
	},

	computed: {
		message_Ava() {
			return require(`@/assets/img/message/ava_${this.name}.png`);
		},

		massage_Name() {
			const name = this.name == 'goblin' ? 'master' : this.name;
			return this.t(`lobby_game_message_name_${name}`);
		},

		massage_Nickname() {
			return this.t(`lobby_game_message_nickname_${this.name}`);
		},

		massage_Text() {
			return this.t(`lobby_game_message_${this.text_numb}`);
		},

	}
};
</script>

<style scoped>

.message-ava {
	width: 36px;
	height: 36px;
}

</style>