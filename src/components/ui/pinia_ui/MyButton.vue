<template>
	<section class="pos-rel">
		<div class="gradient"></div>
		<div class="btm">
			<div class="numb jbm-300" v-if="numb">
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
.btm {
	width: 320px;
  display: grid;
  gap: 18px;
	background: #0047ff;
  padding: 32px;
	cursor: pointer;
}

.numb {
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
	display: flex;
	justify-content: space-between;
}
</style>
