<template>
	<main>
		<section class="grid__body-name">
			<div class="name-title name-title__inverted grid-col-2">
				<div class="int-600-48">{{ MY_Name }}</div>
			</div>
			<div class="name-title name-title__normal grid-col-2">
				<div class="int-600-48">{{ MY_Name }}</div>
			</div>
			<AppMainCell class="cell" title="race" :content="MY.race_name" />
			<AppMainCell class="cell" title="ethnos" :content="MY_Ethnos.name" />

			<AppMainCell class="cell" title="class" :content="MY.class_name" />
			<AppMainCell class="cell" title="subclass" :content="MY_Subclass?.name" />

			<AppMainCell
				class="cell grid-col-2"
				title="past"
				:content="MY.backstory_name"
			/>
		</section>

		<section class="grid__body-qual">
			<AppPrintQualities
				class="cell"
				title="initiative"
				:numb="initiative_Numb_Class"
				list_3
			/>

			<AppPrintQualities
				class="cell"
				title="speed"
				:numb="speed_Numb_Class"
				list_3
			/>

			<AppPrintQualities
				class="cell"
				title="hp_bonus"
				:numb="hp_Max_Class_Param"
				list_3
			/>

			<AppPrintStats
				class="cell"
				title="print_perception_passive"
				:icon="mod_Passive"
				:numb="numb_Perception_Passive"
				list_3
			/>

			<AppPrintQualities
				class="cell"
				title="armor_class"
				:numb="armor_Numb_Class_Param"
				list_3
			/>

			<AppPrintStats
				class="cell"
				title="print_spell_complex"
				:icon="MY_Class.spell_attribute"
				:numb="spells_Saving"
				list_3
			/>

			<div class="cell grid-col-3">{{ T("print_notes") }}</div>
		</section>
	</main>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "BlankTable__List_3",
	methods: {},

	computed: {
		...mapState(useMYStore, [
      "MY",
      "MY_Ethnos",
      "MY_Class",
      "MY_Subclass"
    ]),
		...mapState(useQualitiesStore, [
			"hp_Max_Class_Param",
			"armor_Numb_Class_Param",
			"initiative_Numb_Class",
			"speed_Numb_Class",
		]),
		...mapState(useSkillsStore, [
			"skills_passive",
			"skills_passive_Print_All_Numb",
		]),
		...mapState(useSpellsStore, ["spells_Saving_Numb"]),

		MY_Name() {
			const name = this.MY.name;
			return name.length !== 0
				? name
				: `${this.T("someone")} ${this.t(this.MY.race_name)}`;
		},

		spells_Saving() {
			const spell_attribute = this.MY_Class.spell_attribute;
			return this.spells_Saving_Numb(spell_attribute);
		},

		numb_Perception_Passive() {
			return this.skills_passive_Print_All_Numb("perception_passive");
		},

		mod_Passive() {
			return this.skills_passive.find((el) => el.name == "perception_passive").mod;
		},
	},
};
</script>

<style scoped>
.grid__body-name {
	display: grid;
	grid-template-rows: 216px 144px repeat(3, 72px);
	grid-template-columns: repeat(2, 50%);
	border-left: 1px solid #000;
}

.name-title {
  padding: 0 24px 50px;
  display: flex;
	align-items: flex-end;
	justify-content: center;
  overflow: hidden;
  border-top: 4px solid #000;
  border-bottom: 1px solid #000;
}

.name-title div {
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.name-title__inverted {
  transform: rotate(180deg);
	border-left: 1px solid #000;
}

.name-title__normal {
	border-right: 1px solid #000;
}

.grid__body-qual {
	display: grid;
	grid-template-rows: repeat(2, 192px) 364px;
	grid-template-columns: repeat(3, 1fr);
	border-left: 1px solid #000000;
}

.grid-col-2 {
	grid-column: span 2;
}
.grid-col-3 {
	grid-column: span 3;
}

.cell {
	padding: 4px 12px;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}
</style>
