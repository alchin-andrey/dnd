<template>
	<div>
		<div class="sett-text-absol" v-if="!classic">{{ t_Fatigue }}</div>
		<div class="cell-wrapp">
			<div :class="style_Cell"  v-for="n in 5" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AppPrintFating",
	props: {
		classic: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		t_Fatigue() {
			return this.T("fatigue");
		},

		style_Cell() {
			if (this.classic) return 'cell-fatigue h-36';
			else return 'cell-fatigue h-48'
		},
	},
};
</script>


<style scoped>
.sett-text-absol {
	position: absolute;
	top: 8px;
	left: 50%;
	z-index: 100;
	transform: translateX(-50%);
}

.cell-wrapp {
	width: 100%;
}

.cell-fatigue {
	width: 100%;
	border-right: 1px solid #000000;
	border-left: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.h-36 {
	height: 36px;
}
.h-48 {
	height: 48px;
}

.cell-fatigue:first-child {
	border-top: 1px solid #000000;
	border-radius: 12px 12px 0 0;
}

.cell-fatigue:last-child {
	border-radius: 0 0 12px 12px;
}
</style>
