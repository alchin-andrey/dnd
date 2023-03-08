<template>
	<div class="blank-conteiner int-400-22">
		<section class="blank-head">
			<div class="grid-wrap">
				<BlankTable__MainNames />
				<BlankTable__MainSett />
				<BlankTable__Proficiencies />
			</div>
			<Blank__Avatar />
		</section>

		<section class="blank-bottom">
			<div class="column-wrap">
				<!-- <div class="column-content"> -->
					<section class="flex-col gap-16">
						<div class="int-600-28">{{ site_Link }}</div>
						<div>{{ link_Description }}</div>
					</section>

					<div class="hr-print-lvl">
						<AppPrintMenu title="level" :chapter="String(MY.level)" />
					</div>

					<Blank__RaceMenu />
          <Blank__ClassMenu class="column-avoid"/>
					<Blank__AlignmentMenu />
				</div>
			<!-- </div> -->
		</section>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
	mixins: [BlankPrintLink],
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),

		site_Link() {
			return "dndme.club";
		},

		link_Description() {
			return this.t("link_description");
		},
	},
};
</script>

<style scoped>
.blank-conteiner {
	width: 100%;
	height: 100%;
	width: 2088px; /* 1588 */
	height: 2952px;
	color: #000000;
	z-index: 10;
	padding: 72px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	margin-right: -2088px;
}

.blank-head {
	display: flex;
	gap: 72px;
	height: 1404px;
}

.blank-bottom {
	border-top: 1px dashed #333333;
	padding-top: 72px;
	/* height: 1404px; */
	height: 1404px;
	height: 100%;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.grid-wrap {
	min-width: 648px;
	max-width: 648px;
	margin: 1px 1px 0 0;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.column-wrap {
	/* min-height: 100%; */
	height: 1310px;
	columns: 584px;
	column-gap: 64px;
  column-rule: 1px solid;
	column-fill: auto;
  padding-left: 32px;
  border-left: 1px solid #000000;
}

.column-content {
	height: 1310px;
	display: flex;
	flex-direction: column;
	gap: 52px;
}

.column-avoid {
  break-inside: avoid;
}
.hr-print-lvl {
	width: 512px;
	padding: 50px 0;
	border-top: 2px solid #000000;
	border-bottom: 2px solid #000000;
}

.flex-col {
	display: flex;
	flex-direction: column;
}

.gap-16 {
	gap: 16px;
}
</style>
