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
        <!-- <div class="int-600-28">{{ t_X1("action") }}</div> -->
        <div><div>• {{ T("action_weapon_attack") }}</div></div>
				<div><div>• {{ t_Jump }}</div></div>
				<div><div>• {{ t_Departure }}</div></div>
				<div><div>• {{ T("actions_evasion") }}</div></div>
				<div><div>• {{ T("action_ambush") }}</div></div>
				<div><div>• {{ T("action_prepare") }}</div></div>
				<div><div>• {{ T("action_use_item") }}</div></div>
				<div><div>• {{ T("action_search") }}</div></div>

        <AppPrintSpellTitle 
        class="ability-action" 
        v-for="item, i in spell_Ability_Main"
        :key="item.spell"
        :class="{'marg-t-30': i == 0}" 
        :spells="item"
        />

        <AppPrintSpellTitle 
        class="ability-action" 
        v-for="item, i in spell_Manna_Main"
        :key="item.spell"
        :class="{'marg-t-30': i == 0}" 
        :spells="item"
        />
      <div v-if="spell_Action_Hidden">• {{ spell_Action_Hidden }}</div>
      </div>
      </section>

			<section class="table-col-1">
				<div class="cell-3-1"></div>
				<div class="cell-3-2"></div>
			</section>
		</div>
		<div class="wrap-table-right"></div>
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
		};
	},
	computed: {
		...mapState(useMYStore, ["MY", "str_Upper"]),
		...mapState(useQualitiesStore, ["speed_Numb_Class"]),
		...mapState(useSpellsStore, [
      "spells_RC_Param_Ability_Full",
      "spells_RC_Param_Manna",
    ]),

    spell_Action_Main: (stor) => (arr) => {
      return arr.filter(
				(el) => {
          const action = el.spell.find((item) => item.name).cast_time == "action";
          const action_plus10min = el.spell.find((item) => item.name).cast_time == "action_plus10min";
          return action || action_plus10min;
        }
			);
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

    spell_Action_Hidden() {
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
	/* padding: 12px 12px; */
	display: flex;
	width: 1530px;
	height: 684px;
	border: 1px solid #000000;
	border-radius: 6px;
}
.wrap-table-right {
	/* padding: 12px 12px; */
	width: 382px;
	height: 684px;
	border: 1px solid #000000;
	border-radius: 6px;
}

.table-col-1 {
	width: 382px;
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
	height: 342px;
}

.cell-3-2 {
	flex: 1 auto;
	border-top: 1px solid #000000;
}

.table-col-2 {
  padding: 4px 12px 8px;
	width: 766px;
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
  width: 359px;
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
















.flax-col-wrap {
	width: 100%;
	/* margin-top: 14px; */
	/* height: 580px; */
	height: 624px;
}

.row-36 {
	display: flex;
	width: 100%;
	height: 36px;
	align-items: center;
}

.row-finse {
	display: flex;
	width: 100%;
	min-height: 36px;
	/* align-items: flex-start; */
}

.fines-text {
	width: 540px;
	padding-top: 2px;
}

.main-fines {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: 18px;
}


</style>
