<template>
	<my-wrapper :hr="hr">
		<my-attribute
			v-if="hp_Bonus_Race_Param"
			title="hp_bonus"
			:numb="hp_Bonus_Race_Param"
			plus
			icon="hp_bonus"
		/>
    <my-attribute
			title="speed"
			:numb="speed_Numb_Race"
			feet
		/>
		<my-attribute
			title="vision_night"
			:numb="vision_night_Numb_Race"
			feet
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
export default {
	name: "RaceParam__Qualities",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(useQualitiesStore, [
      "hp_Bonus_Race_Param", 
      "speed_Numb_Race",
      "vision_night_Numb_Race",
    ]),
	},
};
</script>
