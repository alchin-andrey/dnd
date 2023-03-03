<template>
  <div class="grid__body">
    <div class="grid__title int-600-24">{{ MY.name }}</div>
    <AppMainCell class="cell" title="race" :content="MY.race.name" />
    <AppMainCell class="cell" title="ethnos" :content="MY.ethnos.name" />

    <AppMainCell class="cell" title="class" :content="MY.class.name" />
    <AppMainCell class="cell" title="subclass" :content="MY_Subclass?.name" />

    <AppMainCell class="cell grid__full" title="past" :content="MY.backstory.name" />

    <AppMainCell class="cell" title="alignment" :content="MY.alignment" />
    <AppMainCell class="cell" title="main_feature" :content="MY_Main_Feature.name" />

    <AppMainCell class="cell" title="ideals" :content="MY_Ideals.name" />
    <AppMainCell class="cell" title="commitment" :content="MY_Commitment.name" />

    <AppMainCell class="cell bord-l-3" title="secret" :content="MY_Secret.name" />
    <AppMainCell class="cell bord-r-3" title="weakness" :content="MY_Weakness.name" />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "BlankTable__MainNames",
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY", "MY_Subclass"]),
    ...mapState(useAlignmentStore, [
      "MY_Main_Feature",
      "MY_Ideals",
      "MY_Commitment",
      "MY_Secret",
      "MY_Weakness",
    ]),
	},
};
</script>

<style scoped>
.grid__body {
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
}
</style>
