<template>
  <div class="grid__body">
    <AppMainCell class="cell bord-tl-6" title="gender_phisiological" :content="MY.gender.phisiological" />
    <AppMainCell class="cell" title="feel" :content="MY.gender.feel" />
    <AppMainCell class="cell bord-tr-6" title="attraction" :content="MY.gender.attraction" />

    <AppMainCell class="cell" title="age" :content="MY_Age" />
    <AppMainCell class="cell" title="height" :content="MY_Height" />
    <AppMainCell class="cell" title="weight" :content="MY_Weight" />

    <AppMainCell class="cell bord-bl-6" title="color_eyes" :content="eyes_color_Char_Body.name" />
    <AppMainCell class="cell" title="color_skin" :content="skin_color_Char_Body.name" />
    <AppMainCell class="cell bord-br-6" title="color_hair" :content="hair_color_Char_Body.name" />

  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useColorStore } from "@/stores/modules/simple/ColorStore";
export default {
	name: "BlankTable__MainSett",
	methods: {},

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
.grid__body {
	display: grid;
	grid-template-rows: repeat(3, 72px);
	grid-template-columns: repeat(3, 1fr);
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
.bord-tl-6 {
  border-radius: 6px 0 0 0;
}

.bord-tr-6 {
  border-radius: 0 6px 0 0;
}
.bord-br-6 {
  border-radius: 0 0 6px 0;
}

.bord-bl-6 {
  border-radius: 0 0 0 6px;
}
</style>
