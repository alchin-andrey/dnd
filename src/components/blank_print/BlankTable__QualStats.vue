<template>
	<div class="wrap-table">
		<div class="grid__body-left">
			<AppPrintQualities
				class="cell"
				title="armor_class"
				:numb="armor_Numb_Class_Param"
			/>
			<AppPrintQualities
				class="cell"
				title="initiative"
				:numb="initiative_Numb_Class"
			/>
			<AppPrintQualities class="cell" title="speed" :numb="speed_Numb_Class" />
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
				class="cell"
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
			/>
		</div>
		<div class="grid__body-right">
			<section
				class="flex-col pad-24 cell"
				v-for="skill in t_skill_Arr"
				:key="skill.t_name"
			>
				<div class="jbm-500-22">{{ skill.t_name }}</div>
				<div class="int-600-22">{{ skill_Numb(skill.numb) }}</div>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
export default {
	name: "BlankTable__QualStats",

	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useStatsStore, ["stats_Keys"]),
		...mapState(useSkillsStore, [
			"skills_RC_All_Numb",
			"skills_Keys",
		]),
		...mapState(useQualitiesStore, [
			"hp_Max_Class_Param",
			"armor_Numb_Class_Param",
			"initiative_Numb_Class",
			"speed_Numb_Class",
			"vision_night_Numb_Class",
		]),

		t_skill_Arr() {
			let arr = [];
			this.skills_Keys.forEach((el) => {
				const t_name = this.t(el);
				const numb = this.skills_RC_All_Numb(el);
				arr.push({ t_name: t_name, numb: numb });
			});
      arr.sort((a, b) => a.t_name.localeCompare(b.t_name));
			return arr;
		},

		skill_Numb: (stor) => (numb) => {
			return numb > 0 ? `+${numb}` : numb;
		},

	},
};
</script>

<style scoped>
.wrap-table {
	display: flex;
}

.grid__body-left {
	display: grid;
	grid-template-rows: 288px 360px;
	grid-template-columns: repeat(6, 216px);
}

.grid__body-right {
	display: grid;
	grid-template-rows: repeat(9, 72px);
	grid-template-columns: repeat(2, 324px);
  grid-auto-flow: column;
}

.cell {
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.pad-24 {
	padding: 0 24px;
}

.grid__body-left > :first-child {
	border-top: 1px solid #000000;
	border-left: 1px solid #000000;
	border-radius: 6px 0 0 0;
}

.grid__body-left > :nth-child(-n + 5) {
	border-top: 1px solid #000000;
}
.grid__body-left > :nth-child(6) {
	border-left: 1px solid #000000;
	border-radius: 0 0 0 6px;
}
.grid__body-right > :nth-child(1) {
	border-top: 1px solid #000000;
}

.grid__body-right > :nth-child(10) {
	border-radius: 0 6px 0 0;
  border-top: 1px solid #000000;
}
.grid__body-right > :last-child {
	border-radius: 0 0 6px 0;
}

.grid-col-2 {
	grid-column: span 2;
}

.flex-col {
	display: flex;
	height: 72px;
	justify-content: space-between;
	align-items: center;
	/* height: 100%; */
	width: 100%;
}
</style>
