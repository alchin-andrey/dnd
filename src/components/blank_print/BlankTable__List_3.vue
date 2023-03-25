<template>
	<!-- <section class="flex-table">
    <div class="inverted__title int-600-48"><div class="text__item">{{ MY_Name }}</div></div>
    <div class="normal__title int-600-48"><div class="text__item">{{ MY_Name }}</div></div>

    <AppMainCell class="half-cell" title="race" :content="MY.race.name" />
    <AppMainCell class="half-cell" title="ethnos" :content="MY.ethnos.name" />

    <AppMainCell class="half-cell" title="class" :content="MY.class.name" />
    <AppMainCell class="half-cell" title="subclass" :content="MY_Subclass?.name" />

    <AppMainCell class="full-cell" title="past" :content="MY.backstory.name" />


    <AppPrintQualities
			class="q-cell"
			title="initiative"
			:numb="initiative_Numb_Class"
			list_3
		/>


		<AppPrintQualities
    class="q-cell"
			title="speed"
			:numb="speed_Numb_Class"
			list_3
		/>

    <AppPrintQualities
    class="q-cell"
				title="hp_bonus"
				:numb="hp_Max_Class_Param"
				list_3
			/>

      <AppPrintStats
      class="q-cell"
				title="print_perception_passive"
				:icon="mod_Passive"
				:numb="numb_Perception_Passive"
        list_3
			/>

      <AppPrintQualities
      class="q-cell"
				title="armor_class"
				:numb="armor_Numb_Class_Param"
        list_3
			/>

      <AppPrintStats
      class="q-cell"
				title="print_spell_complex"
				:icon="MY.class.spell_attribute"
        :numb="spells_Saving"
        list_3
			/>

      <div class="notes-cell">{{ T("print_notes") }}</div>


  </section> -->




	<div class="grid__body">
		<div class="grid__inverted-title int-600-48">
			<div class="text__item">{{ MY_Name }}</div>
		</div>
		<div class="grid__normal-title int-600-48">
			<div class="text__item">{{ MY_Name }}</div>
		</div>
		<AppMainCell class="left-cell" title="race" :content="MY.race.name" />
		<AppMainCell class="right-cell" title="ethnos" :content="MY.ethnos.name" />

		<AppMainCell class="left-cell" title="class" :content="MY.class.name" />
		<AppMainCell
			class="right-cell"
			title="subclass"
			:content="MY_Subclass?.name"
		/>

		<AppMainCell
			class="full-cell grid__full"
			title="past"
			:content="MY.backstory.name"
		/>
	</div>

	<div class="grid__body-qual">
		<AppPrintQualities
			class="cell-qual"
			title="initiative"
			:numb="initiative_Numb_Class"
			list_3
		/>

		<AppPrintQualities
			class="cell-qual"
			title="speed"
			:numb="speed_Numb_Class"
			list_3
		/>

    <AppPrintQualities
				class="cell-qual"
				title="hp_bonus"
				:numb="hp_Max_Class_Param"
				list_3
			/>

      <AppPrintStats
				class="cell-qual"
				title="print_perception_passive"
				:icon="mod_Passive"
				:numb="numb_Perception_Passive"
        list_3
			/>

      <AppPrintQualities
				class="cell-qual"
				title="armor_class"
				:numb="armor_Numb_Class_Param"
        list_3
			/>

      <AppPrintStats
				class="cell-qual"
				title="print_spell_complex"
				:icon="MY.class.spell_attribute"
        :numb="spells_Saving"
        list_3
			/>

      <div class="cell-notes">{{ T("print_notes") }}</div>
	</div>
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
		...mapState(useMYStore, ["MY", "MY_Subclass"]),
		...mapState(useQualitiesStore, [
			"hp_Max_Class_Param",
			"armor_Numb_Class_Param",
			"initiative_Numb_Class",
			"speed_Numb_Class",
		]),
		// ...mapState(useSkillsStore, ["skills_passive_Print_All_Numb"]),
    ...mapState(useSkillsStore, [
			"skills_passive",
			"skills_passive_Print_All_Numb",
		]),
    ...mapState(useSpellsStore, ["spells_Saving_Numb"]),

		MY_Name() {
			const name = this.MY.name;
			return name.length !== 0
				? name
				: `${this.T("someone")} ${this.t(this.MY.race.name)}`;
		},

    spells_Saving() {
			const spell_attribute = this.MY.class.spell_attribute;
			return this.spells_Saving_Numb(spell_attribute);
		},

    numb_Perception_Passive() {
			return this.skills_passive_Print_All_Numb("perception_passive");
		},

    mod_Passive() {
      return this.skills_passive.find(el => el.name == "perception_passive").mod
    },

	},
};
</script>

<style scoped>
/* .flex-table {
	display: flex;
	flex-wrap: wrap;
	border-left: 1px solid #000;
}

.inverted__title {
	width: 100%;
	text-align: center;
	padding: 118px 24px 50px;
	overflow: hidden;
  border-top: 4px solid #000;
  border-bottom: 1px solid #000;
	border-left: 1px solid #000;
	transform: rotate(180deg);
}

.normal__title {
	width: 100%;
	text-align: center;
	padding: 46px 24px 50px;
	overflow: hidden;
	border-top: 4px solid #000;
  border-bottom: 1px solid #000;
	border-right: 1px solid #000;
}

.half-cell {
  width: 50%;
	height: 72px;
  padding: 4px 12px;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.full-cell {
	width: 100%;
	height: 72px;
	padding: 4px 12px;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.q-cell {
  width: 215px;
	min-height: 192px;
  border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.notes-cell {
  width: 100%;
  padding: 4px 12px;
  min-height: 192px;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
} */

















.grid__body {
	display: grid;
	grid-template-rows: 216px 144px repeat(3, 72px);
	grid-template-columns: repeat(2, 50%);
	border: 1px solid #000;
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
	padding: 4px 12px;
	border-top: 1px solid #000;
}

.grid__body-qual {
	display: grid;
	grid-template-rows: repeat(2, 192px) 364px;
	grid-template-columns: repeat(3, 1fr);
	border-left: 1px solid #000000;
}

.cell-qual {
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}

.cell-notes {
  grid-column: span 3;
  padding: 4px 12px;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}
</style>
