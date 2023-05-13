<template>
	<div class="btm-grey hov br-12 blur-60 cur-p card-size">
		<a target="_blank" :href="master_param.link">
			<!-- <div class="flex-row gap-16 pd-16"> -->
			<div class="card-wrapp">
				<img class="img-size br-4" :src="master_Foto" :alt="master_param.name">
				<!-- <div class="flex-col-sb"> -->
				<div class="text-wrapp">
					<section class="flex-col gap-4">
						<div class="int-700">{{ t_Name }}</div>
						<div class="int-400 white-04" v-html="t_Details"></div>
					</section>
					<section class="int-400 flex_col gap-4 white-04">
						<div>{{ t_Master_City }}</div>
						<div><span>{{ t_Telegram }}</span> <span v-html="t_Master_Telegram"/></div>
					</section>
				</div>
			</div>
		</a>
	</div>
</template>
<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";

export default {
	name: "WelcomPage__CardMaster",
	data: () => ({
		ui_icon,
	}),
	props: {
		master_param: {
			type: Object,
			default: null,
		},
	},
	computed: {
	joinArr: (stor) => (arr) => {
		return arr.map((n) => `${stor.T(n)[0].toUpperCase()}${stor.T(n).slice(1)}`).join(", ");
	},

	t_Name() {
		return this.t(this.master_param.name);
	},

	t_Details() {
		return this.t(this.master_param.details);
	},

	t_Master_City() {
		return this.joinArr(this.master_param.city);
	},

	t_Master_Telegram() {
		return this.t(this.master_param.telegram);
	},

	master_Foto() {
		const name = this.master_param.name;
		return require(`@/assets/img/masters/${name}.png`);
	},

	t_Telegram() {
		return this.t("telegram") + ":";
	},

	},
};
</script>

<style scoped>
.card-size {
	width: 444px;
}

.card-wrapp {
	display: flex;
	gap: 16px;
	padding: 16px;
}

.text-wrapp {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.img-size {
	width: 180px;
}

@media (max-width: 955px) {
	.card-size {
	width: 100%;
}
}

@media (max-width: 480px) {
	.card-wrapp {
		flex-direction: column;
	}

	.text-wrapp {
		width: 300px;
		justify-content: flex-start;
		gap: 32px;
}
}
</style>