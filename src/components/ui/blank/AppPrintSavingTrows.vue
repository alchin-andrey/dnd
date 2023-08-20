<template>
	<div class="flex-sett--saving">
		<div class="sett-text-absol" v-if="!classic">{{ t_Saving }}</div>
		<div class="cell-wrapp">
			<div class="flex-centr">
				<AppSvg class="svg-36 svg-black-f" name="plus" />
			</div>
			<div>
				<div class="cell-saving h-48" v-for="n in 3" />
			</div>
		</div>
		<div class="cell-wrapp">
			<div class="flex-centr">
				<AppSvg class="svg-36 svg-black-f" name="minus" />
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
	gap: 16px;
}
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

.flex-centr {
  height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.h-48 {
	height: 48px;
}

.cell-saving {
	width: 100%;
	border-right: 1px solid #000000;
	border-left: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.cell-saving:first-child {
	border-top: 1px solid #000000;
	border-radius: 12px 12px 0 0;
}

.cell-saving:last-child {
	border-radius: 0 0 12px 12px;
}
</style>
