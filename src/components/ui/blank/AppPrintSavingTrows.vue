<template>
	<div class="flex-sett--saving">
		<div class="sett-text-absol" v-if="!classic">{{ t_Saving }}</div>
		<div class="cell-wrapp">
			<div class="flex-centr">
				<AppSvg class="svg-36-blank svg-black-f" name="plus" />
			</div>
			<div>
				<div class="cell-saving h-48" v-for="n in 3" />
			</div>
		</div>
		<div class="cell-wrapp">
			<div class="flex-centr">
				<AppSvg class="svg-36-blank svg-black-f" name="minus" />
			</div>
			<div>
				<div class="cell-saving h-48" v-for="n in 3" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "AppPrintSavingTrows",
	props: {
		classic: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		t_Saving() {
			return this.T("saving_throws");
		},

		style_Cell() {
			if (this.classic) return 'cell-fatigue h-36';
			else return 'cell-fatigue h-48'
		},
	},
};
</script>


<style scoped>

.flex-sett--saving {
	display: flex;
	justify-content: space-between;
	gap: var(--px-16);
}
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

.flex-centr {
  height: var(--px-60);
	display: flex;
	align-items: center;
	justify-content: center;
}

.h-48 {
	height: var(--px-48);
}

.cell-saving {
	width: 100%;
	border-right: var(--border-blank);
	border-left: var(--border-blank);
	border-bottom: var(--border-blank);
}

.cell-saving:first-child {
	border-top: var(--border-blank);
	border-radius: var(--px-12) var(--px-12) 0 0;
}

.cell-saving:last-child {
	border-radius: 0 0 var(--px-12) var(--px-12);
}
</style>
