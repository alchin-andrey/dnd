<template>
	<div class="flex_custom">
		<div class="gap_4">
			<img src="@/assets/img/icon/custom_setting.svg" alt="custom_setting" />
			<div class="jbm-300">{{t_Title}}</div>
		</div>
		<div class="int-400">{{t_Sum}}</div>
	</div>
</template>

<script>
export default {
	name: "MyCusstomSetting",
	props: {
		title: {
			type: String,
			default: null,
		},
		select: {
			type: Number,
			default: null,
		},
		sum: {
			type: Number,
			default: null,
		},

    // sum: {
		// 	// type: String,
		// 	default: null,
		// },
	},

	computed: {
		t_Title() {
			return this.t(this.title);
		},

		t_Sum() {
			return `${this.t("choice")} ${this.select} ${this.t("from")} ${this.sum}`;
		},

    // sum_Units() {
		// 	let mod10 = Math.abs(this.sum % 10);
		// 	let mod100 = Math.abs(this.sum % 100);
		// 	if (mod100 > 10 && mod100 < 20) {
		// 		return this.t("choose_variants");
		// 	} else if (mod10 >= 2 && mod10 <= 4) {
		// 		return this.t("choose_varianta");
		// 	} else if (mod10 === 1) {
		// 		return this.t("choose_variant");
		// 	} else {
		// 		return this.t("choose_variants");
		// 	}
		// },
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex_custom {
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.gap_4 {
	display: flex;
	gap: 4px;
}
</style>
