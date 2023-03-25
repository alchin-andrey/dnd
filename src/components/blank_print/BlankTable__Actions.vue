<template>
	<div class="wrap-section">
		<div class="wrap-table-left">
			<section class="table-col-1">
				<div class="cell-1-1 row-flex int-500-22">
					<div class="int-600-28">{{ t_X1("free_action") }}</div>
					<div>• {{ T("action_short_phrase") }}</div>
					<div>• {{ T("action_with_backpack") }}</div>
					<div>• {{ T("actions_with_door") }}</div>
					<div>• {{ T("action_button_click") }}</div>
					<div>• {{ T("action_other") }}</div>
				</div>
				<div class="cell-1-2">
          <div class="int-600-28">{{ T("movement") }}</div>
          <div class="move-numb int-600-72">
          {{ speed_Numb }} <span class="print-grey">{{speed_Pref}}</span>
          </div>
        </div>
			</section>

			<section class="table-col-2">
        <div class="int-600-28">{{ t_X1("action") }}</div>
      <div class="column-content int-500-22">
        <div><div>• {{ T("action_weapon_attack") }}</div></div>
				<div><div>• {{ t_Jump }}</div></div>
				<div><div>• {{ t_Departure }}</div></div>
				<div><div>• {{ T("actions_evasion") }}</div></div>
				<div><div>• {{ T("action_ambush") }}</div></div>
				<div><div>• {{ T("action_prepare") }}</div></div>
				<div><div>• {{ T("action_use_item") }}</div></div>
				<div><div>• {{ T("action_search") }}</div></div>

        <AppPrintSpellTitle 
        v-for="item, i in spell_Ability_Main"
        :key="item.spell"
        :class="{'marg-t-30': i == 0}" 
        :spells="item"
        />

        <AppPrintSpellTitle 
        v-for="item, i in spell_Manna_Main"
        :key="item.spell"
        :class="{'marg-t-30': i == 0}" 
        :spells="item"
        />
      <div v-if="spell_Action_Main_Hidden">• {{ spell_Action_Main_Hidden }}</div>
      </div>
      </section>

			<section class="table-col-1 int-500-22">

				<div class="cell-3-1">
          <div class="int-600-28">{{ t_X1("bonus_action") }}</div>
          <AppPrintSpellTitle 
          v-for="item in spell_Action_Bonus"
          :key="item.spell"
          :spells="item"
          />
          <div v-if="spell_Action_Bonus_Hidden">• {{ spell_Action_Bonus_Hidden }}</div>
        </div>

				<div class="cell-3-2">
          <div class="int-600-28">{{ T("no_cost_action") }}</div>
          <AppPrintSpellTitle 
          v-for="item in spell_Action_None"
          :key="item.spell"
          :spells="item"
          />
          <div v-if="spell_Action_None_Hidden">• {{ spell_Action_None_Hidden }}</div>
        </div>

			</section>
		</div>
		<div class="wrap-table-right int-500-22">
      <div class="int-600-28">{{ t_X1("reaction") }}</div>

      <div class="marg-t-30" >• {{ T("provoked_attackn") }}</div>
			<div>• {{ T("action_prepared") }}</div>

      <AppPrintSpellTitle 
        v-for="item, i in spell_Ability_Reaction"
        :key="item.spell"
        :class="{'marg-t-30': i == 0}" 
        :spells="item"
        />

        <AppPrintSpellTitle 
        v-for="item, i in spell_Manna_Reaction"
        :key="item.spell"
        :class="{'marg-t-30': i == 0}" 
        :spells="item"
        />
        <div v-if="spell_Action_Reaction_Hidden">• {{ spell_Action_Reaction_Hidden }}</div>
    </div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "BlankTable__Actions",
  data() {
		return {
			action_main_numb: 31,
			action_bonus_numb: 9,
			action_none_numb: 9,
			action_reaction_numb: 17,
		};
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useQualitiesStore, ["speed_Numb_Class"]),
		...mapState(useSpellsStore, [
      "spells_RC_Param",
      "spells_RC_Param_Ability_Full",
      "spells_RC_Param_Manna",
    ]),

    t_X1: (stor) => (str) => {
      const t_str = stor.T(str);
			return `1 × ${t_str}`;
    },

    t_Jump() {
      const t_str = this.T("actions_jump");
      const speed = this.speed_Numb_Class;
      const unit = this.t("f");
      const t_move = this.t("movement");
			return `${t_str} (+${speed + unit} ${t_move})`;
    },

    t_Departure() {
      const t_str = this.T("actions_departure");
      const speed = 0;
      const unit = this.t("f");
      const t_move = this.t("movement");
			return `${t_str} (+${speed + unit} ${t_move})`;
    },

    speed_Numb() {
      return this.speed_Numb_Class / 5
    },

    speed_Pref() {
      return `× 5${this.t("f")}`
    },

    spell_Action_Main: (stor) => (arr) => {
      return arr.filter(
				(el) => {
          const action = el.spell.find((item) => item.name).cast_time == "action";
          const action_plus10min = el.spell.find((item) => item.name).cast_time == "action_plus10min";
          return action || action_plus10min;
        });
    },

    spell_Ability_Main() {
      return this.spell_Action_Main(this.spells_RC_Param_Ability_Full);
    },

    spell_Manna_Main_Full() {
      return this.spell_Action_Main(this.spells_RC_Param_Manna);
    },

    spell_Action_Main_Length() {
      const ability = this.spell_Ability_Main.length;
      const extra = ability > 0 ? 1 : 0;
      const ability_length = ability + extra;
      const manna_length = this.spell_Manna_Main_Full.length;
      const all_length = ability_length + manna_length;
      return all_length;
    },

    spell_Action_Main_Hidden() {
      const FULL = this.action_main_numb;
      const all_spell = this.spell_Action_Main_Length;
      const numb = FULL - all_spell
      return numb < 0 ? `... +${Math.abs(numb) + 1}` : null;
    },

    spell_Manna_Main() {
      const FULL = this.action_main_numb;
      const ability = this.spell_Ability_Main.length;
      const extra = ability > 0 ? 1 : 0;
      const ability_length = ability + extra;
      const manna_length = this.spell_Manna_Main_Full.length;
      const all_length = ability_length + manna_length;
      const num_slice = all_length == FULL 
      ? FULL 
      : FULL - ability_length - 1;
      return this.spell_Manna_Main_Full.slice(0, num_slice);
    },

    spell_Action_Bonus_Full() {
      return this.spells_RC_Param.filter(el => el.spell.find((item) => item.name).cast_time == "bonus_action");
    },

    spell_Action_Bonus_Hidden() {
      const FULL = this.action_bonus_numb;
      const all_spell = this.spell_Action_Bonus_Full.length;
      const numb = FULL - all_spell
      return numb < 0 ? `... +${Math.abs(numb) + 1}` : null;
    },

    spell_Action_Bonus() {
      const FULL = this.action_bonus_numb;
      const all_length = this.spell_Action_Bonus_Full.length;
      const num_slice = all_length == FULL 
      ? FULL 
      : FULL - 1;
      return this.spell_Action_Bonus_Full.slice(0, num_slice);
    },

    spell_Action_None_Full() {
      return this.spells_RC_Param.filter(
				(el) => {
          const none_action = el.spell.find((item) => item.name).cast_time == "none_action";
          const none = el.spell.find((item) => item.name).cast_time == "none";
          return none_action || none;
        });
    },

    spell_Action_None_Hidden() {
      const FULL = this.action_none_numb;
      const all_spell = this.spell_Action_None_Full.length;
      const numb = FULL - all_spell
      return numb < 0 ? `... +${Math.abs(numb) + 1}` : null;
    },

    spell_Action_None() {
      const FULL = this.action_none_numb;
      const all_length = this.spell_Action_None_Full.length;
      const num_slice = all_length == FULL 
      ? FULL 
      : FULL - 1;
      return this.spell_Action_None_Full.slice(0, num_slice);
    },

    spell_Action_Reaction: (stor) => (arr) => {
      return arr.filter((el) => el.spell.find((item) => item.name).cast_time == "reaction");
    },

    spell_Ability_Reaction() {
      return this.spell_Action_Reaction(this.spells_RC_Param_Ability_Full);
    },

    spell_Manna_Reaction_Full() {
      return this.spell_Action_Reaction(this.spells_RC_Param_Manna);
    },

    spell_Action_Reaction_Length() {
      const ability = this.spell_Ability_Reaction.length;
      const extra = ability > 0 ? 1 : 0;
      const ability_length = ability + extra;
      const manna_length = this.spell_Manna_Reaction_Full.length;
      const all_length = ability_length + manna_length;
      return all_length;
    },

    spell_Action_Reaction_Hidden() {
      const FULL = this.action_reaction_numb;
      const all_spell = this.spell_Action_Reaction_Length;
      const numb = FULL - all_spell
      return numb < 0 ? `... +${Math.abs(numb) + 1}` : null;
    },

    spell_Manna_Reaction() {
      const FULL = this.action_reaction_numb;
      const ability = this.spell_Ability_Reaction.length;
      const extra = ability > 0 ? 1 : 0;
      const ability_length = ability + extra;
      const manna_length = this.spell_Manna_Reaction_Full.length;
      const all_length = ability_length + manna_length;
      const num_slice = all_length == FULL 
      ? FULL 
      : FULL - ability_length - 1;
      return this.spell_Manna_Reaction_Full.slice(0, num_slice);
    },

	},
};
</script>

<style scoped>
.print-grey {
  color: #828282;
}
.wrap-section {
	display: flex;
	justify-content: space-between;
}

.wrap-table-left {
	display: flex;
	width: 1525.6px;
	height: 684px;
	border: 1px solid #000000;
	border-radius: 6px;
}
.wrap-table-right {
  padding: 4px 12px 8px;
	width: 382.4px;
	height: 684px;
	border: 1px solid #000000;
	border-radius: 6px;
}

.table-col-1 {
	width: 380.4px;
}

.cell-1-1 {
	height: 468px;
	padding: 4px 12px 8px;
}

.cell-1-2 {
	padding: 4px 12px 8px;
	flex: 1 auto;
	border-top: 1px solid #000000;
}
.cell-3-1 {
  padding: 4px 12px 8px;
	height: 342px;
}

.cell-3-2 {
  padding: 4px 12px 8px;
	flex: 1 auto;
	border-top: 1px solid #000000;
}

.table-col-2 {
  padding: 4px 12px 8px;
	width: 760.8px;
	border-right: 1px solid #000000;
	border-left: 1px solid #000000;
}

.row-flex {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.move-numb {
  margin-top: 32px;
  text-align: center;
}

.column-content {
	width: 50%;
	height: calc(100% - 48px);
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
  gap: 0 24px;
	/* gap: 16px 12px; */
}
.column-content > div {
  width: calc(100% - 12px);
  overflow: hidden;
}

.column-content > div > div {
  white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.marg-t-30 {
  margin-top: 30px;
}
</style>
