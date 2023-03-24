<template>

  <!-- <section class="flex-table">
    <div class="inverted__title int-600-48"><div class="text__item">{{ MY_Name }}</div></div>
    <div class="normal__title int-600-48"><div class="text__item">{{ MY_Name }}</div></div>

    <AppMainCell class="l-cell" title="race" :content="MY.race.name" />
    <AppMainCell class="r-cell" title="ethnos" :content="MY.ethnos.name" />

    <AppMainCell class="l-cell" title="class" :content="MY.class.name" />
    <AppMainCell class="r-cell" title="subclass" :content="MY_Subclass?.name" />

    <AppMainCell class="full-cell" title="past" :content="MY.backstory.name" />
  </section> -->


  <div class="grid__body">
    <div class="grid__inverted-title int-600-48"><div class="text__item">{{ MY_Name }}</div></div>
    <div class="grid__normal-title int-600-48"><div class="text__item">{{ MY_Name }}</div></div>
    <AppMainCell class="left-cell" title="race" :content="MY.race.name" />
    <AppMainCell class="right-cell" title="ethnos" :content="MY.ethnos.name" />

    <AppMainCell class="left-cell" title="class" :content="MY.class.name" />
    <AppMainCell class="right-cell" title="subclass" :content="MY_Subclass?.name" />

    <AppMainCell class="full-cell grid__full" title="past" :content="MY.backstory.name" />
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "BlankTable__List_3",
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper", "MY_Subclass"]),
    ...mapState(useAlignmentStore, [
      "MY_Main_Feature",
      "MY_Ideals",
      "MY_Commitment",
      "MY_Secret",
      "MY_Weakness",
    ]),

    MY_Name() {
      const name = this.MY.name;
      return name.length !== 0 ? name : `${this.str_Upper(this.t("someone"))} ${this.t(this.MY.race.name)}`
    }
	},
};
</script>

<style scoped>

.flex-table {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
}

.inverted__title {
  width: 100%;
  /* border: 1px solid #000; */
  border-top: 4px solid #000;
  transform: rotate(180deg);
  text-align: center;
  padding: 118px 24px 50px;
  overflow: hidden;
}

.normal__title {
  width: 100%;
  /* border: 1px solid #000; */
  border-top: 4px solid #000;
  text-align: center;
  padding: 46px 24px 50px;
  overflow: hidden;
}

.l-cell {
  width: 50%;
  height: 72px;
  padding: 4px 12px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
}
.r-cell {
  width: 50%;
  height: 72px;
  padding: 4px 12px;
  border-top: 1px solid #000;
}

.full-cell {
  width: 100%;
  height: 72px;
  padding: 4px 12px;
  border-top: 1px solid #000;
}








.grid__body {
	display: grid;
	grid-template-rows: 216px 144px repeat(3, 72px);
	grid-template-columns: repeat(2, 50%);
  border: 1px solid #000;
  
  /* border-radius: 6px; */
}

.grid__inverted-title {
  grid-column: span 2;
	padding: 0 24px 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
	border-top: 4px solid #000;
	overflow: hidden;
  transform: rotate(180deg);
}

.grid__normal-title {
	grid-column: span 2;
	padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
	border-top: 4px solid #000;
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

.left-cell {
  padding: 4px 12px;
  border-top: 1px solid #000;
  border-right: 1px solid #000;
}

.right-cell {
  padding: 4px 12px;
  border-top: 1px solid #000;
}

.full-cell {
  /* width: 100%;
  height: 72px; */
  padding: 4px 12px;
  border-top: 1px solid #000;
}


</style>
