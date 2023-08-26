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
	top: var(--px-8);
	left: 50%;
	z-index: 100;
	transform: translateX(-50%);
}

.cell-wrapp {
	width: 100%;
}

.cell-fatigue {
	width: 100%;
	border-right: var(--border-blank);
	border-left: var(--border-blank);
	border-bottom: var(--border-blank);
}

.h-36 {
	height: var(--px-36);
}
.h-48 {
	height: var(--px-48);
}

.cell-fatigue:first-child {
	border-top: var(--border-blank);
	border-radius: var(--px-12) var(--px-12) 0 0;
}

.cell-fatigue:last-child {
	border-radius: 0 0 var(--px-12) var(--px-12);
}
</style>
