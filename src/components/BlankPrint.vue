<template>
	<div class="blank-conteiner int-400-22">
		<div class="blank-scroll">

			<main class="print-page" v-if="!PRINT_WORK">
				<section class="blank-head">
					<div class="grid-wrap">
						<BlankTable__MainNames />
						<BlankTable__MainSett />
						<BlankTable__Proficiencies />
					</div>
					<Blank__Avatar />
				</section>
				<Blank__SelectMenu />
			</main>

      <main class="print-page">
        <section class="wrap-head" v-if="!PRINT_WORK">
          <BlankTable__QualStats />
          <BlankTable__Fines class="marg-top-36"/>
        </section>
        <section class="wrap-bottom">
        <BlankTable__Actions class="marg-top-72" v-if="!PRINT_WORK"/>
        <BlankTable__Equip class="marg-top-36"/>
        </section>
      </main>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
	mixins: [BlankPrintLink],
  data() {
		return {
      PRINT_WORK: false,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
	},
};
</script>

<style scoped>
.blank-conteiner {
	/* width: 100%; */
	width: 2088px; /* 1588 */
	color: #000000;
	z-index: 10;
	height: 1000%;
	/* padding: 72px; */
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	margin-right: -2088px;
}

.blank-scroll {
	height: 1000%;
}

.print-page {
	width: 100%;
	height: 2952px;
	padding: 72px;
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.blank-head {
	display: flex;
	gap: 72px;
	height: 1403px;
}

.wrap-head {
  height: 1403px;
}

.wrap-bottom {
	border-top: 1px dashed #333333;
	height: 1404px;
}

.grid-wrap {
	min-width: 648px;
	max-width: 648px;
	margin: 1px 1px 0 0;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.marg-top-36 {
  margin-top: 36px;
}

.marg-top-72 {
  margin-top: 72px;
}
</style>
