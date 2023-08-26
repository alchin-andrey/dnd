<template>
	<div :class="['flex-row-sb', 'int-400-22-blank', style_Main]">
		<Blank__OldschoolList__Left class="list-col--left" :blank_size="blank_size"/>
		<Blank__OldschoolList__Center class="list-col" />
		<Blank__OldschoolList__Right class="list-col" :blank_size="blank_size"/>
	</div>
</template>

<script>

import Blank__OldschoolList__Left from "@/components/blank_print/Blank__OldschoolList__Left.vue";
import Blank__OldschoolList__Center from "@/components/blank_print/Blank__OldschoolList__Center.vue";
import Blank__OldschoolList__Right from "@/components/blank_print/Blank__OldschoolList__Right.vue";
export default {
	name: "Blank__OldschoolList",
	components: {
		Blank__OldschoolList__Left,
		Blank__OldschoolList__Center,
		Blank__OldschoolList__Right,
	},
	props: {
		blank_size: {
			type: String,
			default: null,
		}
	},
	computed: {
		mini_Blank() {
			return this.blank_size == 'mini';
		},

		style_Main() {
			if (this.mini_Blank) return 'print-page--mini var-blank--mini';
			else return 'print-page--print var-blank--print';
		},

		style_Bottom() {
			if (this.mini_Blank) return 'blank-bottom--mini';
			else return 'blank-bottom--print';
		},
	},
};
</script>

<style scoped>
.print-page--print {
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

.list-col--left {
	width: var(--px-576);
}
.list-col {
	width: var(--px-648);
}
</style>
