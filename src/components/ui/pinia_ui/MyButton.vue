<template>
	<section class="sect">
		<div class="gradient"></div>
		<div class="btm">
			<div class="numb jbm-300">
				<div>
					{{ numb }}
				</div>
			</div>
			<div class="title jbm-300">
				<div>
					{{ t_Title }}
				</div>
				<div>
					<img alt="arrow_down" src="@/assets/img/icon/arrow_down.svg" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "MyButton",
	props: {
		numb: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
	},

	computed: {
		t_Title() {
			return this.t(this.title);
		},
	},
};
</script>

<style scoped>
.sect {
	position: relative;
}
.btm {
	width: 320px;
	min-height: 118px;
	background: #0047ff;
	padding-top: 32px;
	padding-left: 32px;
	cursor: pointer;
}

.numb {
	/*margin-top: 32px;*/
	height: 18px;
	text-align: left;
}

.gradient {
	height: 32px;
	width: 100%;
	position: absolute;
	top: -32px;
	background: linear-gradient(180deg, rgba(14, 21, 24, 0) 0%, #0e1518 100%);
}

.title {
	margin-top: 18px;
	display: flex;
	width: 256px;
	height: 18px;
	justify-content: space-between;
}
</style>
