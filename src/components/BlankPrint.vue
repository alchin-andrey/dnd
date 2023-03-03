<template>
	<div class="blank-conteiner int-400">

		<div class="grid__wrap">
      <BlankTable__MainNames/>
      <BlankTable__MainSett/>
		</div>

	</div>

</template>

<script>
import { mapState } from "pinia";
// import { useMYStore } from "@/stores/user/MYStore";
// import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
import BlankPrintLink from "@/components/blank_print/BlankPrintLink.js";
export default {
	name: "BlankPrint",
  mixins: [BlankPrintLink],
	methods: {},

	computed: {
		// ...mapState(useMYStore, ["MY", "MY_Subclass"]),
    // ...mapState(useAlignmentStore, [
    //   "MY_Main_Feature",
    //   "MY_Ideals",
    //   "MY_Commitment",
    //   "MY_Secret",
    //   "MY_Weakness",
    // ]),

	},
};
</script>

<style scoped>

.blank-conteiner {
	width: 100%;
	width: 1044px;
	color: #000000;
	z-index: 10;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #ffffff;
	/* margin-right: -1044px; */
}

.blank-conteiner::-webkit-scrollbar {
	width: 0;
}

.grid__wrap {
	width: 324px;
	margin: 1px 1px 0 0;
  display: grid;
  gap: 18px;
}

/* .grid__body {
	display: grid;
	grid-template-rows: 72px repeat(6, 36px);
	grid-template-columns: repeat(2, 50%);
  border-radius: 3px;
}

.grid__title {
	grid-column: span 2;
	padding: 23px 12px 25px;
	border: 1px solid #000;
	box-sizing: border-box;
	margin: -1px -1px 0 0;
	border-radius: 3px 3px 0 0;
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.grid__full {
  grid-column: span 2;
}

.cell {
	padding: 4px 6px 2px;
	border: 1px solid #000;
	box-sizing: border-box;
	margin: -1px -1px 0 0;
}
.bord-r-3 {
  border-radius: 0 0 3px 0;
}

.bord-l-3 {
  border-radius: 0 0 0 3px;
} */
</style>
