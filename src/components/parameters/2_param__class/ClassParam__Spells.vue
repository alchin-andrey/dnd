<template>
	<my-wrapper v-if="spells_RC_Param.length !== 0" gap_26 :hr="hr">
    <AppSpellsPacks
			class="flex-col"
			v-if="spells_RC_Param_Ability_Passive.length !== 0"
			:numb="spells_RC_Param_Ability_Passive.length"
			text="abilities_passive"
		>
			<div class="flex-col gap-4 mr-t-8">
				<AppSpells
					v-for="item in spells_Race_Param_Ability_Passive"
					:key="item"
					:spell_obj="item"
					:passive="passive_Old"
					param
					only_title
				/>
				<AppSpells
					v-for="item in spells_Class_Param_Ability_Passive"
					:key="item"
					:spell_obj="item"
					param
					only_title
				/>
			</div>
		</AppSpellsPacks>

		<AppSpellsPacks
			class="flex-col"
			v-if="spells_RC_Param_Ability.length !== 0"
			:numb="spells_RC_Param_Ability.length"
			text="ability"
		>
			<div class="flex-col gap-4 mr-t-8">
				<AppSpells
					v-for="item in spells_Race_Param_Ability"
					:key="item"
					:spell_obj="item"
					:passive="passive_Old"
					param
					only_title
				/>
				<AppSpells
					v-for="item in spells_Class_Param_Ability"
					:key="item"
					:spell_obj="item"
					param
					only_title
				/>
			</div>
		</AppSpellsPacks>

		<section v-for="i in numb_Manna_Spell" :key="i">
			<AppSpellsPacks
				class="flex-col"
				v-if="filter_All_Manna_Spells(i).length !== 0"
				:numb="filter_All_Manna_Spells(i).length"
				:numb_manna="i"
			>
				<div class="flex-col gap-4 mr-t-8">
					<AppSpells
						v-for="item in filter_Race_Param_Manna_Spells(i)"
						:key="item"
						:spell_obj="item"
						:passive="passive_Old"
						param
						only_title
					/>
					<AppSpells
						v-for="item in filter_Class_Param_Manna_Spells(i)"
						:key="item"
						:spell_obj="item"
						param
						only_title
					/>
				</div>
			</AppSpellsPacks>
		</section>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "ClassParam__Spells",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(usePagesStore, ["page_Open"]),

		passive_Old() {
			return this.page_Open !== "alignment_page";
		},

		...mapState(useSpellsStore, [
			"spells_filter_Ability",
			"spells_filter_Not_Ability",

      "spells_filter_Ability_Passive",
      "spells_filter_Ability_Not_Passive",

			"spells_Race_Param",
			"spells_Class_Param_without_Race_Param",

      "spells_RC_Param_Ability_Full",
			"spells_RC_Param_Ability",
      "spells_RC_Param_Ability_Passive",
			"spells_RC_Param_Manna",

			"spells_RC_Param",
		]),
    
    //NOTE - Ability_Race
		spells_Race_Param_Ability_Full() {
			return this.spells_filter_Ability(this.spells_Race_Param);
		},

		spells_Race_Param_Ability() {
			return this.spells_filter_Ability_Not_Passive(this.spells_Race_Param_Ability_Full);
		},

		spells_Race_Param_Ability_Passive() {
			return this.spells_filter_Ability_Passive(this.spells_Race_Param_Ability_Full);
		},

    ///NOTE - Ability_Class
		spells_Class_Param_Ability_Full() {
			return this.spells_filter_Ability(
				this.spells_Class_Param_without_Race_Param
			);
		},

    spells_Class_Param_Ability() {
			return this.spells_filter_Ability_Not_Passive(this.spells_Class_Param_Ability_Full);
		},

		spells_Class_Param_Ability_Passive() {
			return this.spells_filter_Ability_Passive(this.spells_Class_Param_Ability_Full);
		},

    //NOTE - Manna
		spells_Race_Param_Manna() {
			return this.spells_filter_Not_Ability(this.spells_Race_Param);
		},

		spells_Class_Param_Manna() {
			return this.spells_filter_Not_Ability(
				this.spells_Class_Param_without_Race_Param
			);
		},

		filter_Race_Param_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_Race_Param_Manna.filter(
				(el) => el.spell[numb]?.name
			);
			return res;
		},

		filter_Class_Param_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_Class_Param_Manna.filter(
				(el) => el.spell[numb]?.name
			);
			return res;
		},

		filter_All_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_RC_Param_Manna.filter(
				(el) => el.spell[numb]?.name
			);
			return res;
		},

		numb_Manna_Spell() {
			let res_arr = [];
			this.spells_RC_Param_Manna.forEach((el) => {
				el.spell.forEach((item, i) => {
					if (item.name) {
						res_arr.push(i);
					}
				});
			});
			const unique_numb = [...new Set(res_arr)];
			unique_numb.sort((a, b) => a - b);
			return unique_numb;
		},
	},
};
</script>

<style scoped>
</style>
