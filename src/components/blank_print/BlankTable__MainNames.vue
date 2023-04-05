<template>
  <div class="grid__body">
    <div class="grid__title int-600-48"><div class="text__item">{{ MY.name }}</div></div>
    <AppMainCell class="cell" title="race" :content="MY_Race.name" />
    <AppMainCell class="cell" title="ethnos" :content="MY_Ethnos.name" />

    <AppMainCell class="cell" title="class" :content="MY_Class.name" />
    <AppMainCell class="cell" title="subclass" :content="MY_Subclass?.name" />

    <AppMainCell class="cell grid__full" title="past" :content="MY_Backstory.name" />

    <AppMainCell class="cell" title="alignment" :content="MY.alignment" />
    <AppMainCell class="cell" title="main_feature" :content="MY_Main_Feature.name" />

    <AppMainCell class="cell" title="ideals" :content="MY_Ideals.name" />
    <AppMainCell class="cell" title="commitment" :content="MY_Commitment.name" />

    <AppMainCell class="cell bord-bl-3" title="secret" :content="MY_Secret.name" />
    <AppMainCell class="cell bord-br-3" title="weakness" :content="MY_Weakness.name" />
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
		...mapState(useMYStore, [
      "MY", 
      "str_Upper",
      "MY_Race",
      "MY_Ethnos",
      "MY_Backstory",
      "MY_Class",
      "MY_Subclass",
    ]),
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
	grid-template-rows: 144px repeat(6, 72px);
	grid-template-columns: repeat(2, 50%);
  /* border-radius: 6px; */
}

.grid__title {
	grid-column: span 2;

	padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;

	border: 1px solid #000;
	margin: -1px -1px 0 0;
	border-radius: 6px 6px 0 0;
	overflow: hidden;
}

.text__item {
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.grid__full {
  grid-column: span 2;
}

.cell {
	padding: 0 12px;
	border: 1px solid #000;
	margin: -1px -1px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.bord-br-3 {
  border-radius: 0 0 6px 0;
}

.bord-bl-3 {
  border-radius: 0 0 0 6px;
}
</style>
