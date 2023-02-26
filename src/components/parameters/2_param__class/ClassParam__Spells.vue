<template>
	<my-wrapper v-if="spells_RC_Param.length !== 0" gap_26 :hr="hr">
		<!-- <AppSpells
			v-for="item in spells_Race_Param"
			:key="item"
			:spell_obj="item"
			passive
      param
      only_title
		/>
    <AppSpells
			v-for="item in spells_Class_Param_without_Race_Param"
			:key="item"
			:spell_obj="item"
      param
      only_title
		/> -->

    <AppSpellsPacks
				class="flex-col"
				v-if="spells_RC_Param_Ability.length !== 0"
				text="ability"
				:numb="spells_RC_Param_Ability.length"
			>
				<div class="flex-col">
					<AppSpells
						v-for="item in spells_Race_Param_Ability"
						:key="item"
						:spell_obj="item"
						passive
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
					:text="String(i)"
				>
					<div class="flex-col">
						<AppSpells
							v-for="item in filter_Race_Param_Manna_Spells(i)"
							:key="item"
							:spell_obj="item"
							passive
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

export default {
	name: "ClassParam__Spells",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useSpellsStore, [
      "spells_filter_Ability",
      "spells_filter_Not_Ability",

      "spells_Race_Param",
      "spells_Class_Param_without_Race_Param",

      "spells_RC_Param_Ability",
      "spells_RC_Param_Manna",

      "spells_RC_Param"
    ]),

    spells_Race_Param_Ability() {
			return this.spells_filter_Ability(this.spells_Race_Param);
		},

    spells_Class_Param_Ability() {
			return this.spells_filter_Ability(this.spells_Class_Param_without_Race_Param);
		},

    spells_Race_Param_Manna() {
			return this.spells_filter_Not_Ability(this.spells_Race_Param);
		},

    spells_Class_Param_Manna() {
			return this.spells_filter_Not_Ability(this.spells_Class_Param_without_Race_Param);
		},

    filter_Race_Param_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_Race_Param_Manna.filter((el) => el.spell[numb]?.name);
			return res;
		},

    filter_Class_Param_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_Class_Param_Manna.filter((el) => el.spell[numb]?.name);
			return res;
		},

    filter_All_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_RC_Param_Manna.filter((el) => el.spell[numb]?.name);
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
.flex-col {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.gap-26 {
	gap: 26px;
}
</style>
