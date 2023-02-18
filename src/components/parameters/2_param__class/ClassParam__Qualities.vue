<template>
  <my-wrapper :hr="hr">
		<my-attribute
			title="armor_class"
			:type="armor_Name_Class_Param"
			:numb="armor_Numb_Class_Param"
		/>
		<my-attribute 
    title="hp_bonus" 
    :numb="hp_Max_Class_Param" 
    />
		<my-attribute
			title="hp_dice"
			:numb="MY.level"
			:dice="MY.class.hp_dice"
		/>
		<my-attribute
			v-if="initiative_Numb_Class"
			title="initiative"
			:numb="initiative_Numb_Class"
			plus
		/>
		<my-attribute
			v-if="speed_Numb_Class"
			title="speed"
			:numb="speed_Numb_Class"
			feet
		/>
		<my-attribute
			v-if="vision_night_Numb_Class"
			title="vision_night"
			:numb="vision_night_Numb_Class"
			feet
		/>
  </my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
export default {
	name: "ClassParam__Qualities",
  props: {
    hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		// STORE
		...mapState(useMYStore, ["MY"]),
		// GETTERS
    ...mapState(useQualitiesStore, [
      "hp_Max_Class_Param",
      "armor_Name_Class_Param",
      "armor_Numb_Class_Param",
      "initiative_Numb_Class",
      "speed_Numb_Class",
      "vision_night_Numb_Class",
    ]),
	},
};
</script>
