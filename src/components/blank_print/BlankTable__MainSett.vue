<template>
  <div class="grid-body cell-body">
    <AppMainCell class="cell" title="gender_phisiological" :content="MY.gender.phisiological" />
    <AppMainCell class="cell" title="feel" :content="MY.gender.feel" />
    <AppMainCell class="cell" title="attraction" :content="MY.gender.attraction" />

    <AppMainCell class="cell" title="age" :content="MY_Age" />
    <AppMainCell class="cell" title="height" :content="MY_Height" />
    <AppMainCell class="cell" title="weight" :content="MY_Weight" />

    <AppMainCell class="cell" title="color_eyes" :content="eyes_color_Char_Body.name" />
    <AppMainCell class="cell" title="color_skin" :content="skin_color_Char_Body.name" />
    <AppMainCell class="cell" title="color_hair" :content="hair_color_Char_Body.name" />

  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
export default {
  name: "BlankTable__MainSett",
  computed: {
    ...mapState(useMYStore, ["MY"]),
    ...mapState(useColorStore, [
      "skin_color_Char_Body",
      "eyes_color_Char_Body",
      "hair_color_Char_Body",
    ]),

    MY_Age() {
      return `${this.MY.age} ${this.t(this.age_Units)}`
    },

    MY_Height() {
      return `${this.MY.height} ${this.t('cm')}`
    },

    MY_Weight() {
      return `${this.MY.weight} ${this.t('kg')}`
    },

    age_Units() {
      const numb = this.MY.age;
      const mod10 = Math.abs(numb % 10);
      const mod100 = Math.abs(numb % 100);
      if (mod100 > 10 && mod100 < 20) {
        return "years";
      } else if (mod10 >= 2 && mod10 <= 4) {
        return "yeara";
      } else if (mod10 === 1) {
        return "year";
      } else {
        return "years";
      }
    },

  },

};
</script>

<style scoped>
.grid-body {
  display: grid;
  grid-template-rows: repeat(3, var(--cell-row-main));
  grid-template-columns: repeat(3, 1fr);
}

.cell {
  padding: 0 var(--px-12);
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-right: var(--border-blank);
  border-bottom: var(--border-blank);
}

.cell-body> :first-child {
  /* border-radius: var(--px-6) 0 0 0; */
  border-top-left-radius: var(--cell-rad);
}

.cell-body> :nth-child(3) {
  /* border-radius: 0 var(--px-6) 0 0; */
  border-top-right-radius: var(--cell-rad);
}

.cell-body> :last-child {
  /* border-radius: 0 0 var(--px-6) 0; */
  border-bottom-right-radius: var(--cell-rad);
}

.cell-body> :nth-last-child(3) {
  /* border-radius: 0 0 0 var(--px-6); */
  border-bottom-left-radius: var(--cell-rad);
}

.cell-body> :nth-child(-n+3) {
  border-top: var(--border-blank);
}

.cell-body> :nth-last-child(3n) {
  border-left: var(--border-blank);
}
</style>
