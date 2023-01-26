<template>
	<section class="btm">
		<div class="gradient"></div>
		<div class="btm_text jbm-300">
			<div>
				<img
					alt="arrow_left_small"
					src="@/assets/img/icon/arrow_left_small.svg"
				/>
			</div>
			<div class="title">{{ t_Title }}</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "MyButtonBack",
	props: {
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
	position: relative;
}
.btm_text {
	height: 64px;
	padding: 14px 0 0 32px;
	display: flex;
	cursor: pointer;
	/* width: 52px; */
}

.gradient {
	height: 32px;
	width: 100%;
	position: absolute;
	top: -32px;
	background: linear-gradient(180deg, rgba(14, 21, 24, 0) 0%, #0e1518 100%);
}

.title {
	margin-left: 8px;
}
</style>
