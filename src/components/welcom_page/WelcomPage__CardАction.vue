<template>
	<div class="step-wrap">
		<!-- <div class="hr-step" /> -->
		<div class="w-320">
			<div class="jbm-300 mr-t-15">{{ numb }}</div>
			<div class="int-700 mr-t-24">{{ t_Title }}</div>
			<div class="int-400 mr-t-5 white-04" v-html="t_Details" v-if="full"/>
		</div>
	</div>
</template>

<script>
export default {
	name: "WelcomPage__CardАction",
	data: () => ({
		steps: [
			{
				numb: '01',
				title: 'lobby_game_step_1',
				details: 'lobby_game_step_1_details',
			},
			{
				numb: '02',
				title: 'lobby_game_step_2',
				details: 'lobby_game_step_2_details',
			},
			{
				numb: '03',
				title: 'lobby_game_step_3',
				details: 'lobby_game_step_3_details',
			},
		]
	}),
	props: {
		numb: {
			type: String,
			default: null,
		},
		height: {
			type: Number,
			default: null,
		},
		full: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		obj_Select() {
			return this.steps.find(el => el.numb == this.numb);
		},

		t_Title() {
			return this.t(this.obj_Select.title);
		},

		t_Details() {
			return this.t(this.obj_Select.details);
		},

	}
};
</script>

<style scoped>

.step-wrap {
	width: 100%;
	border-top: 2px solid rgba(255, 255, 255, 0.06);
}

</style>