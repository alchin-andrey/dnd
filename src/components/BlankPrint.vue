<template>

	<div class="blank-conteiner int-400-22">
		<section class="blank-head">
			  <div class="grid__wrap">
  				<BlankTable__MainNames />
  				<BlankTable__MainSett />
  				<BlankTable__Proficiencies />
  			</div>

        <Blank__Avatar />
		</section>
		<section class="blank-bottom"></section>
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
	height: 100%;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.grid__wrap {
	min-width: 648px;
	max-width: 648px;
	margin: 1px 1px 0 0;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

</style>
