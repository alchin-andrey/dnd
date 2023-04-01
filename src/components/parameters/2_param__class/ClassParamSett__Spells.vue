<template>
	<div v-if="shown">
		<my-wrapper v-if="charges_Class_Spell_Manna.length !== 0" hr>
			<AppCharges
				v-for="item in charges_Class_Spell_Manna"
				:key="item"
				:charge="item"
				spell_count
			/>
		</my-wrapper>

		<my-wrapper
			gap_26
			v-if="
				spells_RC_Param_Manna.length !== 0 ||
				spells_RC_Param_Ability.length !== 0 ||
        spells_RC_Param_Ability_Passive.length !== 0
			"
		>
    <AppSpellsPacks
				class="flex-col"
				v-if="spells_RC_Param_Ability_Passive.length !== 0"
				:numb="spells_RC_Param_Ability_Passive.length"
        text="abilities_passive"
			>
				<div class="flex-col gap-8 marg-top-8">
					<AppSpells
						v-for="item in spells_RC_Param_Ability_Passive"
						:key="item"
						:spell_obj="item"
						passive
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
				<div class="flex-col gap-8 marg-top-8">
					<AppSpells
						v-for="item in spells_RC_Param_Ability"
						:key="item"
						:spell_obj="item"
						passive
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
					<div class="flex-col gap-8 marg-top-8">
						<AppSpells
							v-for="item in filter_RC_Spells(i)"
							:key="item"
							:spell_obj="item"
							passive
							param
							only_title
						/>
						<AppSpells
							v-for="item in filter_Settings_Spells(i)"
							:key="item"
							:spell_obj="item"
							only_title
							delete
							active_card
							@updateSpell="delSpell(item)"
						/>
					</div>
				</AppSpellsPacks>
			</section>
		</my-wrapper>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useChargesStore } from "@/stores/modules/ChargesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";

export default {
	name: "ClassParamSett__Spells",
	props: {
		spells_setting: {
			type: Object,
			default: {},
		},
		shown: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "level_Filter_Arr"]),
		...mapState(useChargesStore, [
			"charges_Class_Spell_Slots",
			"charges_Class_Spell_Manna",
		]),
		...mapState(useSpellsStore, [
			"spells_RC_Param",
			"spells_RC_Param_Ability",
      "spells_RC_Param_Ability_Passive",
			"spells_RC_Param_Manna",
			"spells_Filter_Without",
		]),

		spells_Setting_Arr() {
			let res_arr = [];
			this.spells_setting.select_list.forEach((el) => {
				const item_lvl = this.level_Filter_Arr(el?.spells);
				res_arr = res_arr.concat(item_lvl);
			});
			return res_arr;
		},

		spells_RC_Without_Setting() {
			return this.spells_Filter_Without(
				this.spells_RC_Param_Manna,
				this.spells_Setting_Arr
			);
		},

		spells_All_Manna() {
			return [...this.spells_RC_Without_Setting, ...this.spells_Setting_Arr];
		},

		filter_RC_Spells: (stor) => (numb) => {
			const res = stor.spells_RC_Without_Setting.filter(
				(el) => el.spell[numb]?.name
			);
			return res;
		},

		filter_Settings_Spells: (stor) => (numb) => {
			const res = stor.spells_Setting_Arr.filter((el) => el.spell[numb]?.name);
			return res;
		},

		filter_All_Manna_Spells: (stor) => (numb) => {
			const res = stor.spells_All_Manna.filter((el) => el.spell[numb]?.name);
			return res;
		},

		numb_Manna_Spell() {
			let res_arr = [];
			this.spells_All_Manna.forEach((el) => {
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

		shown_Spells_All() {
			return this.spells_RC_Param.length !== 0;
		},
	},
	methods: {
		delSpell(item) {
			const item_name = item.spell.find((el) => el.name).name;
			const save_spell =
				this.MY._settings_class[this.MY.class_name][
					this.spells_setting.id_link
				];
			const new_arr = save_spell.filter((el) => el.name_set !== item_name);
			this.MY._settings_class[this.MY.class_name][this.spells_setting.id_link] =
				new_arr;
		},
	},
};
</script>

<style scoped>
.flex-col {
	display: flex;
	flex-direction: column;
}

.gap-4 {
	gap: 4px;
}
.gap-8 {
	gap: 8px;
}

.marg-top-8 {
  margin-top: 8px;
}

.gap-26 {
	gap: 26px;
}
</style>
