<template>
	<div class="wrap-table">
		<div class="grid__body">
			<AppPrintQualities
				class="cell bord-tl-6"
				title="armor_class"
				:numb="armor_Numb_Class_Param"
			/>
			<AppPrintQualities
				class="cell"
				title="initiative"
				:numb="initiative_Numb_Class"
			/>
			<AppPrintQualities 
        class="cell" 
        title="speed" 
        :numb="speed_Numb_Class" 
      />
			<AppPrintQualities
				class="cell grid-col-2"
				title="hp_bonus"
				:numb="hp_Max_Class_Param"
				title_numb
			/>
			<AppPrintQualities
				class="cell"
				title="hp_dice"
				:numb="MY.class.hp_dice"
			/>

			<AppPrintStats
				class="cell-bottom bord-bl-6"
				title="strength"
			/>
			<AppPrintStats
				class="cell-bottom"
				title="dexterity"
			/>
			<AppPrintStats
				class="cell-bottom"
				title="constitution"
			/>
			<AppPrintStats
				class="cell-bottom"
				title="intelligence"
			/>
			<AppPrintStats
				class="cell-bottom"
				title="wisdom"
			/>
			<AppPrintStats
				class="cell-bottom"
				title="charisma"
			/>
			<!-- <AppPrintStats
				class="cell"
        v-for="name in stats_Keys"
        :key="name"
				:title="name"
			/> -->
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "BlankTable__QualStats",

	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
		...mapState(useStatsStore, ["stats_Keys"]),
		...mapState(useQualitiesStore, [
			"hp_Max_Class_Param",
			"armor_Numb_Class_Param",
			"initiative_Numb_Class",
			"speed_Numb_Class",
			"vision_night_Numb_Class",
		]),
	},
};
</script>

<style scoped>
.wrap-table {
	margin: 1px 1px 0 0;
}

.grid__body {
	display: grid;
	grid-template-rows: 288px 360px;
	grid-template-columns: repeat(6, 216px);
}

.cell {
	/* padding: 0 12px; */
	border: 1px solid #000;
	margin: -1px -1px 0 0;
	/* display: flex;
  flex-direction: column;
  justify-content: center; */
}

.cell-bottom {
	/* padding: 0 12px; */
	border: 1px solid #000;
  border-top: none;
	margin: -1px -1px 0 0;
	/* display: flex;
  flex-direction: column;
  justify-content: center; */
}

.grid-col-2 {
	grid-column: span 2;
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
