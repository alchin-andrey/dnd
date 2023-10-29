<template>
	<div :class="['int-400-22-blank', style_Main]">
		<section :class="style_Head">
			<div :class="style_Head_Wrap">
				<BlankTable__MainNames />
				<BlankTable__MainSett />
				<BlankTable__Proficiencies />
			</div>
			<Blank__Avatar :class="style_Avatar" blank_print="standard" :blank_size="blank_size" />
		</section>
		<section :class="style_Bottom">
			<BlankTable__QualStats />
			<BlankTable__Fines class="mr-t-36-blank" :blank_size="blank_size" />
		</section>
	</div>
</template>

<script>

import BlankTable__MainNames from "@/components/blank_print/BlankTable__MainNames.vue";
import BlankTable__MainSett from "@/components/blank_print/BlankTable__MainSett.vue";
import BlankTable__Proficiencies from "@/components/blank_print/BlankTable__Proficiencies.vue";
import Blank__Avatar from "@/components/blank_print/Blank__Avatar.vue";
import BlankTable__QualStats from "@/components/blank_print/BlankTable__QualStats.vue";
import BlankTable__Fines from "@/components/blank_print/BlankTable__Fines.vue";
export default {
	name: "Blank__StandardList",
	components: {
		BlankTable__MainNames,
		BlankTable__MainSett,
		BlankTable__Proficiencies,
		Blank__Avatar,
		BlankTable__QualStats,
		BlankTable__Fines,
	},
	props: {
		blank_size: {
			type: String,
			default: null,
		},
  },
	computed: {
		mini_Blank() {
			return this.blank_size == 'mini';
		},

		style_Main() {
			if (this.mini_Blank) return 'print-page--mini var-blank--mini';
			else return 'print-page var-blank--print';
		},

		style_Head() {
			if (this.mini_Blank) return 'blank-head--mini';
			else return 'blank-head--print';
		},

		style_Head_Wrap() {
			if (this.mini_Blank) return 'grid-wrap--mini';
			else return 'grid-wrap--print';
		},

		style_Avatar() {
			if (this.mini_Blank) return 'avatar-standard--mini';
			else return 'avatar-standard--print';
		},

		style_Bottom() {
			if (this.mini_Blank) return 'blank-bottom--mini';
			else return 'blank-bottom--print';
		},
	},
};
</script>

<style scoped>

.print-page {
  width: 2088px;
	height: 2952px;
	padding: 72px;
	background-color: #ffffff;
	color: #000000;
}

.print-page--mini {
	width: 362px;
	height: 512px;
	padding: 22px 19px 22px 19px;
  background-color: #ffffff;
	color: #000000;
	border-radius: 6px;
}
.blank-head--print {
	display: flex;
	gap: 72px;
	height: 1403px;
}

.blank-head--mini {
	display: flex;
	gap: 12px;
	height: 233px;
}

.grid-wrap--print {
	min-width: 648px;
	max-width: 648px;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.grid-wrap--mini {
	min-width: 108px;
	max-width: 108px;
	display: flex;
	flex-direction: column;
	gap: 6px;
}

.avatar-standard--print {
	width: 100%;
	height: 1404px;
	position: relative;
	display: flex;
	justify-content: space-between;
}

.avatar-standard--mini {
	width: 100%;
	height: 234px;
	position: relative;
	display: flex;
	justify-content: space-between;
}

.blank-bottom--print {
	border-top: 1px dashed #333333;
	height: 1404px;
  padding-top: 72px;
	position: relative;
}

.blank-bottom--mini {
	border-top: 1px dashed rgb(51, 51, 51, 0.16);
	height: 234px;
  padding-top: 12px;
	position: relative;
}
</style>
