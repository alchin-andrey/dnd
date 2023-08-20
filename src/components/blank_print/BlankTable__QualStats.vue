<template>
	<div class="wrap-table">
		<div :class="style_Grid__Stats_Atribute" v-if="show_Atribute || show_Stats">
			<AppPrintQualities
				v-if="show_Atribute"
				class="cell"
				title="armor_class"
				:numb="armor_Numb_Class_Param"
			/>
			<AppPrintQualities
				v-if="show_Atribute"
				class="cell"
				title="initiative"
				:numb="initiative_Numb_Class"
			/>
			<AppPrintQualities 
				v-if="show_Atribute" 
				class="cell" 
				title="speed" 
				:numb="speed_Numb_Class" 
			/>
			<AppPrintQualities
				v-if="show_Atribute"
				:class="style_Span"
				title="hp_bonus"
				:numb="hp_Max_Class_Param"
				title_numb
			/>
			<AppPrintQualities
				v-if="show_Atribute"
				class="cell"
				title="hp_dice"
				:numb="MY_Class.hp_dice"
			/>

			<AppPrintQualities
				v-if="type_Atribute"
				class="cell"
				title="fatigue"
			/>
			<AppPrintQualities
				v-if="type_Atribute"
				class="cell"
				title="saving_throws"
			/>

			<template v-if="show_Stats">
				<AppPrintStats
					class="cell"
					v-for="name in stats_Keys"
					:key="name"
					:title="name"
				/>
			</template>
		</div>
		<div :class="style_Grid__Skills" v-if="show_Skills">
			<section
				class="skill-wrapp pd-rl-24 cell"
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

	props: {
		type: {
			type: String,
			default: null,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Class"]),
		...mapState(useStatsStore, ["stats_Keys"]),
		...mapState(useSkillsStore, ["t_skill_Arr"]),
		...mapState(useQualitiesStore, [
			"hp_Max_Class_Param",
			"armor_Numb_Class_Param",
			"initiative_Numb_Class",
			"speed_Numb_Class",
			"vision_night_Numb_Class",
		]),

		skill_Numb: (stor) => (numb) => {
			return numb > 0 ? `+${numb}` : numb;
		},

		type_Atribute() {
			return this.type == 'atribute';
		},

		type_Stats() {
			return this.type == 'stats';
		},

		type_Skills() {
			return this.type == 'skills';
		},		

		style_Grid__Stats_Atribute() {
			if (this.type_Stats) return 'grid-body--stats cell-body';
			if (this.type_Atribute) return 'grid-body--atribute';
			else return 'grid-body--full-left';
		},

		style_Grid__Skills() {
			if (this.type_Skills) return 'grid-body--skills cell-body';
			else return 'grid-body--full-right';
		},

		style_Span() {
			if (this.type_Atribute) return 'cell grid-col-3';
			else return 'cell grid-col-2';
		},

		show_Stats() {
			return this.type_Stats || !this.type;
		},

		show_Skills() {
			return this.type_Skills || !this.type;
		},

		show_Atribute() {
			return this.type_Atribute || !this.type;
		},

	},
};
</script>

<style scoped>
.wrap-table {
	display: flex;
}

.grid-body--full-left {
	display: grid;
	grid-template-rows: 288px 360px;
	grid-template-columns: repeat(6, 216px);
}

.grid-body--full-right {
	display: grid;
	grid-template-rows: repeat(9, 72px);
	grid-template-columns: repeat(2, 324px);
  grid-auto-flow: column;
}

.grid-body--stats {
	display: grid;
	grid-template-rows: repeat(6, 360px);
	grid-template-columns: 216px;
}

.grid-body--atribute {
	display: grid;
	grid-template-rows: repeat(3, 288px);
	grid-template-columns: repeat(3, 216px);
}

.grid-body--skills {
	display: grid;
	grid-template-rows: repeat(18, 72px);
	grid-template-columns: 324px;
}

.cell {
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.cell-body > * {
	border-left: 1px solid #000000;
}

.cell-body> :first-child {
	border-top: 1px solid #000000;
	border-radius: 6px 6px 0 0;
}

.cell-body> :last-child {
	border-radius: 0 0 6px 6px;
}

.grid-body--full-left > :first-child,
.grid-body--atribute > :first-child {
	border-left: 1px solid #000000;
	border-radius: 6px 0 0 0;
}

.grid-body--full-left > :nth-child(-n + 5),
.grid-body--atribute > :nth-child(-n + 3) {
	border-top: 1px solid #000000;
}

.grid-body--atribute > :nth-child(5),
.grid-body--full-left > :nth-child(6) {
	border-left: 1px solid #000000;
	border-radius: 0 0 0 6px;
}

.grid-body--full-right > :nth-child(1) {
	border-top: 1px solid #000000;
}



.grid-body--atribute > :nth-child(3),
.grid-body--full-right > :nth-child(10) {
  border-top: 1px solid #000000;
	border-radius: 0 6px 0 0;
}

.grid-body--atribute > :last-child,
.grid-body--full-right > :last-child {
	border-radius: 0 0 6px 0;
}

.grid-col-2 {
	grid-column: span 2;
}

.grid-col-3 {
	grid-column: span 3;
	border-left: 1px solid #000000;
}

.skill-wrapp {
	display: flex;
	height: 72px;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
</style>
