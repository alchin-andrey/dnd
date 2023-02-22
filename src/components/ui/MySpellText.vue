<template>
	<AppTooltip class="relative" text="hint_over_limit" :shown="overflow_Save && !param" warn>
		<div
			v-if="lvl_Show"
			class="flex_spell"
			@mouseover="hoverIn_Full()"
			@mouseleave="hoverOut()"
			@click="showDialog_Full()"
		>
			<div ref="stripe" class="side_stripe"></div>
			<div
				class="int-400 flex_col"
				:class="{passive: passive}"
			>
				<div>
					<div class="flex_title">
						<div class="title_spell h_18" :class="{'rare-text': overflow_Save}">
							{{ em_Before
							}}<emoji
								v-if="em_Upd"
								:data="emojiIndex"
								:emoji="em_Upd"
								:set="set_emoji"
								:size="emoji_size"
							/>{{ em_After }}
						</div>
						<svg
							class="icon_svg"
							@mouseover="hoverIn_Select()"
							@mouseleave="hoverOut()"
							@click="showDialog_Select()"
							viewBox="0 0 18 18"
							xmlns="http://www.w3.org/2000/svg"
							v-html="ui_icon.arrow_right_small"
						/>
					</div>

					<div class="text_spell" v-html="t_Text"></div>
				</div>
				<magic-attribute
					v-if="Spell_Index.impact_type"
					:title="Spell_Index.impact_type"
					:addition="Spell_Index.impact_damage_type"
					:str="Value_Str"
					:numb="Value_Num"
					:dice="Value_Dic"
					:pls="Value_Pls"
					:feet="Spell_Index.impact_size_foo?.includes('Feet')"
					main
					not_dot
				/>
			</div>
		</div>
	</AppTooltip>
	<my-dialog-spell v-model:show="dialogVisible" v-model:mana="mana_numb">
		<my-wrapper>
			<div class="title_spell gray_2">{{ t_Type }} /</div>
			<div class="title_spell">
				{{ em_Before
				}}<emoji
					v-if="em_Upd"
					:data="emojiIndex"
					:emoji="em_Upd"
					:set="set_emoji"
					:size="emoji_size"
				/>{{ em_After }}
			</div>
		</my-wrapper>
		<div class="manna_flex jbm-300" v-if="shown_Manna">
			<div
				class="manna_bubble manna_bubble_choice"
				v-for="n in Manna_Length"
				:key="n"
				@click="choiceManna(n)"
				:class="{
					manna_bubble_passive: n - 1 < Index,
					manna_bubble_active: n - 1 === mana_numb,
					manna_bubble_hover: !(n - 1 < Index) && !(n - 1 === mana_numb),
				}"
			>
				{{ Spell_Index.slot_type ? t(Spell_Index.slot_type) : n - 1 }}
			</div>
		</div>

		<div class="text_spell" v-html="t_Text"></div>

		<my-wrapper gap_6>
			<my-spell-main title="parts" :text="t_Parts_Value" emoji />
			<my-spell-main title="cast_time" :text="t_Cast_Value" />
			<my-spell-main title="time" :text="t_Time_Value" />
			<my-spell-main title="aim_target" :text="t_Target_Value" :save="t_Save" />
		</my-wrapper>
		<my-wrapper
			v-if="
				Spell_Index.aim_need ||
				Spell_Index.impact_type ||
				Value_Ran ||
				Spell_Index.aim_aoe
			"
		>
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:str="Value_Str"
				:numb="Value_Num"
				:dice="Value_Dic"
				:pls="Value_Pls"
				:feet="Spell_Index.impact_size_foo?.includes('Feet')"
				main
			/>
			<magic-attribute
				v-if="Spell_Index.aim_aoe"
				title="aim_aoe"
				:prefix="Spell_Index.aim_aoe"
				:numb="by_Mana('aim_aoe_size')"
			/>
			<!-- Меткость -->
			<magic-attribute
				v-if="Spell_Index.aim_need"
				title="aim_bonus"
				:numb="Mastery"
				plus
			/>
			<magic-attribute v-if="Value_Ran" title="aim_range" :numb="Value_Ran" />
		</my-wrapper>
		<div class="hr"></div>
		<div class="text_spell gray_4" v-html="t_Expanded"></div>
	</my-dialog-spell>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "MySpellText",
	data() {
		return {
			ui_icon: ui_icon,
			dialogVisible: false,
			numb_type: 0,
			mana_numb: null,
			emoji_size: 16,
		};
	},
	props: {
		lvl: {
			type: Number,
			default: null,
		},
		spell: {
			type: Array,
			default: null,
		},
		select: {
			type: Boolean,
			default: false,
		},
		passive: {
			type: Boolean,
			default: false,
		},
		active_card: {
			type: Boolean,
			default: false,
		},
		param: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "Mastery"]),
		// GETTERS
		...mapState(useStatsStore, ["stats_Mod", "stats_Numb"]),
		...mapState(useSkillsStore, ["skills"]),
    ...mapState(useOverflowStore, ["overflow_Spell"]),

		Index() {
			return this.spell.findIndex((el) => el.name);
		},

    overflow_Save() {
      if(this.param) {
        return false;
      } else {
        return this.overflow_Spell(this.spell, this.active_card)
      }
		},

		Spell_Index() {
			return this.spell[this.Index];
		},

		Mana_Numb() {
			if (this.mana_numb) {
				return this.mana_numb;
			} else {
				return this.Index;
			}
		},

		Manna_Index() {
			return this.spell[this.Mana_Numb];
		},

		Manna_Length() {
			return this.spell.length;
		},

		shown_Manna() {
			const manna_0 = this.Manna_Length == 1;
			const slot = this.Spell_Index.slot_type;
			const ability = this.Spell_Index.type == "ability";
			return !manna_0 || slot || !ability;
		},

		lvl_Show() {
			return this.lvl <= this.MY.level;
		},

		em_Upd() {
			return this.updEmoji(this.t_Title);
		},

		em_Before() {
			return this.beforeEmoji(this.t_Title);
		},

		em_After() {
			return this.afterEmoji(this.t_Title);
		},

		t_Title() {
			return this.t(this.Spell_Index.name);
		},

		t_Type() {
			let string = this.t(this.Spell_Index.type);
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Text() {
			let foo = this.Value_Det;
			return foo ? this.t(foo) : this.t(this.Spell_Index.details);
		},

		t_Cast_Value() {
			let string = null;

			const cast_time = this.t(this.Spell_Index.cast_time);
			const numb = this.Spell_Index.cast_duration;
			const numb_units = this.t(this.Spell_Index.cast_duration_units);
			if (this.Spell_Index.cast_time === "ritual") {
				string = `${cast_time} ${numb} ${numb_units}`;
			} else if (!cast_time) {
				string = `${numb} ${numb_units}`;
			} else {
				string = cast_time;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Target_Value() {
			let value_1 = this.t(this.Spell_Index.aim_target);
			let value_2 = this.t(this.Spell_Index.aim_type);
			let string = null;
			if (value_2) {
				string = `${value_1} ${value_2}`;
			} else {
				string = value_1;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Parts_Value() {
			let parts = this.Spell_Index.parts;
			let arr = [];
			for (let i in parts) {
				arr.push(this.t(parts[i]));
			}
			return arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
		},

		t_Time_Value() {
			let string = null;
			let value_1 = null;
			if (this.Spell_Index.spell_time === "concentration") {
				value_1 = `${this.t(this.Spell_Index.spell_time)} ${this.t("up_to")}`;
			} else {
				value_1 = this.t(this.Spell_Index.spell_time);
			}

			let value_2 = null;
			let foo = this.Value_Dur;
			if (foo) {
				value_2 = foo;
			} else {
				value_2 = this.by_Mana("spell_duration");
			}

			let value_3 = this.t(this.Spell_Index.spell_duration_units);
			if (!value_1) {
				string = `${value_2} ${value_3}`;
			} else if (value_2) {
				string = `${value_1} ${value_2} ${value_3}`;
			} else {
				string = value_1;
			}

			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		Saving_Numb() {
			const KOF = 8;
			let attribute = this.MY.class.spell_attribute;
			let mastery = this.Mastery;
      let stats_mod = this.stats_Mod(attribute);
			return KOF + mastery + stats_mod;
		},

		t_Save() {
			if (this.Spell_Index.saving_attribute) {
				let test = `${this.T("saving")} ${this.T(
					this.Spell_Index.saving_attribute
				)} ${this.Saving_Numb}`;
				let success = `${this.t("if_succeed")} ${
					this.Spell_Index.impact_size_saved
				}`;
				if (this.Spell_Index.impact_size_saved) {
					return `${test} — ${success}`;
				} else {
					return test;
				}
			} else {
				return null;
			}
		},

		t_Expanded() {
			return this.t(this.Spell_Index.expanded);
		},

		by_Mana: (state) => (str) => {
			let val = state.Manna_Index[str];
			if (val) {
				return val;
			} else {
				let main_num = state.Index;
				let num = state.Mana_Numb;
				let res = null;
				for (let i = num; i > main_num - 1; i--) {
					if (state.spell[i].hasOwnProperty(str)) {
						res = state.spell[i][str];
						break;
					}
				}
				return res;
			}
		},

		// -----------------------------------
		//ANCHOR - STR
		Str_X_Level_5_11_17() {
			let str = this.Spell_Index.impact_size_str;
			const lvl_arr = [5, 11, 17];
			const kof_arr = [1, 2, 3];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return str + kof;
		},

		Str_X_Plus_1() {
			let str = this.Spell_Index.impact_size_str;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return str + (mana - mana_min);
		},

		Str_X_Plus_2() {
			let str = this.Spell_Index.impact_size_str;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return str + (mana - mana_min) * 2;
		},

		Str_Plus_40() {
			let str = this.Spell_Index.impact_size_str;
			let mana = this.Mana_Numb;
			return str * mana;
		},

		//ANCHOR - NUM

		Num_Plus_Level_2() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.MY.level;
			return num + Math.floor((lvl - 1) / 2);
		},

		Num_LevelX() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.MY.level;
			return num * lvl;
		},

		Num_Level_9_16() {
			let num = this.Spell_Index.impact_size_num;
			const lvl_arr = [9, 16];
			const kof_arr = [1, 2];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return num + kof;
		},

		Num_Level_5_11_17() {
			let num = this.Spell_Index.impact_size_num;
			const lvl_arr = [5, 11, 17];
			const kof_arr = [1, 2, 3];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return num + kof;
		},

		Num_Level_6_11_16() {
			let num = this.Spell_Index.impact_size_num;
			const lvl_arr = [6, 11, 16];
			const kof_arr = [1, 2, 3];
			let kof = this.kof_Foo(lvl_arr, kof_arr);
			return num + kof;
		},

		Num_Plus_05() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + Math.floor((mana - mana_min) / 2);
		},
		Num_Plus_1() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min);
		},

		Num_Plus_2() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min) * 2;
		},

		Num_Plus_5() {
			let num = this.Spell_Index.impact_size_num;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min) * 5;
		},

		Num_Mastery_05() {
			return Math.floor(this.Mastery / 2);
		},

		Num_Mastery() {
			return this.Mastery;
		},

		Num_2xLvl_plus_INT() {
			let lvl = this.MY.level;
			let mod = this.stats_Mod("intelligence");
			return lvl * 2 + mod;
		},

		Num_Lvl14_Plus_1() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.MY.level;
			return lvl >= 14 ? num + 1 : num;
		},

		Num_Lvl_Plus_CHA() {
			let lvl = this.MY.level;
			let mod = this.stats_Mod("intelligence");
			return lvl + mod;
		},

		Num_MOD() {
			let num = this.Spell_Index.impact_size_num;
			let mod = this.stats_Mod(this.MY.class.spell_attribute);
			let res = num + mod;
			return res < 0 ? 0 : res;
		},

		Num_STR() {
			return this.stats_Mod("strength");
		},

		Num_CON() {
			return this.stats_Mod("constitution");
		},

		Num_WIS() {
			return this.stats_Mod("wisdom");
		},

		Num_CHA() {
			return this.stats_Mod("charisma");
		},

		Num_CHA_Min0_Plus1() {
			let mod = this.stats_Mod("charisma");
			return mod >= 0 ? mod + 1 : 0 + 1;
		},

		Num_CHA_Min1() {
			let mod = this.stats_Mod("charisma");
			return mod >= 1 ? mod : 1;
		},

		Num_CHA_Plus_Lvl_Min1() {
			let mod = this.stats_Mod("charisma");
			let lvl = this.MY.level;
			return mod + lvl >= 1 ? mod + lvl : 1;
		},

		//ANCHOR - PLS
		Pls_MOD() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod(this.MY.class.spell_attribute);
			let res = pls + mod;
			return res < 0 ? 0 : res;
		},

		Pls_Plus_5() {
			let pls = this.Spell_Index.impact_size_pls;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			let res = pls + (mana - mana_min) * 5;
			return res;
		},

		Pls_STR() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("strength");
			let res = pls + mod;
			return res;
		},

		Pls_DEX() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("dexterity");
			let res = pls + mod;
			return res;
		},

		Pls_CON() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("constitution");
			let res = pls + mod;
			return res;
		},

		Pls_CHA() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("charisma");
			let res = pls + mod;
			return res <= 0 ? 1 : res;
		},

		Pls_WIS_Min1() {
			let pls = this.Spell_Index.impact_size_pls;
			let mod = this.stats_Mod("wisdom");
			let res = pls + mod;
			return res <= 0 ? 1 : res;
		},

		Pls_DEX_Plus_Lvl() {
			let mod = this.stats_Mod("dexterity");
			let lvl = this.MY.level;
			return mod + lvl;
		},

		Pls_Lvl() {
			let lvl = this.MY.level;
			return lvl;
		},

		Pls_Mastery() {
			return this.Mastery;
		},

		//ANCHOR - Det
		Det_2_4_8_Lvl() {
			const lvl_arr = [2, 4, 8];
			return this.kof_Foo(lvl_arr);
		},

		Det_2_4_8_9_10_12_15_18_Lvl() {
			const lvl_arr = [2, 4, 8, 9, 10, 12, 15, 18];
			return this.kof_Foo(lvl_arr);
		},

		Det_5_8_11_14_17_Lvl() {
			const lvl_arr = [5, 8, 11, 14, 17];
			return this.kof_Foo(lvl_arr);
		},

		Det_5_9_13_17_Lvl() {
			const lvl_arr = [5, 9, 13, 17];
			return this.kof_Foo(lvl_arr);
		},

		Det_7_11_15_Lvl() {
			const lvl_arr = [7, 11, 15];
			return this.kof_Foo(lvl_arr);
		},

		Det_11_20_Lvl() {
			const lvl_arr = [11, 20];
			return this.kof_Foo(lvl_arr);
		},

		Det_6_Lvl() {
			return this.MY.level >= 6 ? 6 : null;
		},

		Det_13_Lvl() {
			return this.MY.level >= 13 ? 13 : null;
		},

		Det_14_Lvl() {
			return this.MY.level >= 14 ? 14 : null;
		},

		Det_17_Lvl() {
			return this.MY.level >= 17 ? 17 : null;
		},

		Det_18_Lvl() {
			return this.MY.level >= 18 ? 18 : null;
		},

		Det_20_Lvl() {
			return this.MY.level == 20 ? 20 : null;
		},

		//ANCHOR - Dur

		Dur_Plus_1() {
			let num = this.Spell_Index.spell_duration;
			let mana = this.Mana_Numb;
			let mana_min = this.Index;
			return num + (mana - mana_min);
		},

		Dur_05_Lvl() {
			return Math.floor(this.MY.level / 2);
		},

		Dur_Lvl() {
			return this.MY.level;
		},

		Dur_Wisdom_Total() {
			return this.stats_Numb("wisdom");
		},

		//ANCHOR - Dic
		Dic_14_56_118_1710_Lvl() {
			const lvl_arr = [1, 5, 11, 17];
			const kof_arr = [4, 6, 8, 10];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_14_66_148_Lvl() {
			const lvl_arr = [1, 6, 14];
			const kof_arr = [4, 6, 8];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_16_98_1310_1712_Lvl() {
			const lvl_arr = [1, 9, 13, 17];
			const kof_arr = [6, 8, 10, 12];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_16_58_1010_1512_Lvl() {
			const lvl_arr = [1, 5, 10, 15];
			const kof_arr = [6, 8, 10, 12];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		//ANCHOR - Ran
		Ran_18_30f() {
			return this.MY.level >= 18 ? 30 : 10;
		},

		Ran_6_30f() {
			return this.MY.level >= 6 ? 30 : null;
		},

		//ANCHOR - FOO
		Value_Foo: (state) => (Val) => {
			let low_val = Val.toLowerCase();
			let num = state.Spell_Index[`impact_size_${low_val}`];
			let foo = state.Spell_Index.impact_size_foo;
			if (foo) {
				let str = foo.split("__");
				for (let i in str) {
					str[i].substr(0, 3) === Val ? (num = state[str[i]]) : null;
				}
			}
			return num;
		},

		Value_Foo_Сlean: (state) => (Val) => {
			// let low_val = Val.toLowerCase();
			// let num = state.Spell_Index[`impact_size_${low_val}`];
			let num = null;
			let foo = state.Spell_Index.impact_size_foo;
			if (foo) {
				let str = foo.split("__");
				for (let i in str) {
					str[i].substr(0, 3) === Val ? (num = state[str[i]]) : null;
				}
			}
			return num;
		},

		kof_Foo: (state) => (lvl_arr, kof_arr) => {
			!kof_arr ? (kof_arr = lvl_arr) : null;
			let lvl = state.MY.level;
			let kof = null;
			for (let i = 0; i < lvl_arr.length; i++) {
				if (lvl < lvl_arr[i]) {
					break;
				}
				kof = kof_arr[i];
			}
			return kof;
		},

		Value_Str() {
			return this.Value_Foo("Str");
		},

		Value_Num() {
			return this.Value_Foo("Num");
		},

		Value_Pls() {
			return this.Value_Foo("Pls");
		},

		Value_Det() {
			let details = this.Spell_Index.details;
			let foo = this.Value_Foo("Det");
			return foo ? `${details}_${foo}` : foo;
		},

		Value_Dur() {
			return this.Value_Foo("Dur");
		},

		Value_Dic() {
			let dice = this.Spell_Index.impact_size_dic;
			let foo = this.Value_Foo_Сlean("Dic");
			return dice + foo;
		},

		Value_Ran() {
			const foo_range = this.Value_Foo("Ran");
			const spell_range = this.Spell_Index.aim_range;
			return foo_range ? foo_range : spell_range;
		},

		// ------ FOO -----------
	},
	watch: {
		dialogVisible(val) {
			if (val === false) {
				this.$refs.stripe.classList.remove("active");
			}
		},
	},
	methods: {
		hoverIn_Select() {
			if (this.select) {
					this.$refs.stripe.classList.add("active");
			}
		},
		hoverOut() {
			if (!this.dialogVisible) {
				this.$refs.stripe.classList.remove("active");
			}
		},
		hoverIn_Full() {
			if (!this.select) {
					this.$refs.stripe.classList.add("active");
			}
		},
		showDialog_Full() {
			if (!this.select) {
				this.dialogVisible = true;
				this.mana_numb = this.Index;
			}
		},

		showDialog_Select() {
			this.dialogVisible = true;
			this.mana_numb = this.Index;
		},

		choiceManna(numb) {
			return numb - 1 < this.Index ? null : (this.mana_numb = numb - 1);
		},
	},
};
</script>

<style scoped>
.flex_spell {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	cursor: pointer;
	color: #ffffff;
	/* cursor: url('@/assets/img/icon/cursor_magic.png'), pointer; */
}

.flex_col {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px 0;
	/*flex: 1 1 auto;*/
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
}

.side_stripe {
	min-width: 4px;
	min-height: 100%;
	background: rgba(255, 255, 255, 0.2);
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.active {
	background: #ffffff;
}

.active--overflow {
	background: #ffc93d;
}

.manna_flex {
	display: flex;
	gap: 3px;
}

.manna_bubble {
	padding: 5px 12px;
	min-width: 31px;
	height: 28px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}

.manna_bubble_choice {
	background: rgba(255, 255, 255, 0.06);
	color: #ffffff;
}

.manna_bubble_hover:hover {
	background: rgba(255, 255, 255, 0.1);
}

.manna_bubble_active {
	background: #00e0ff;
	color: #0e1518;
}

.manna_bubble_passive {
	background: transparent;
	border: 1px solid rgba(255, 255, 255, 0.06);
	color: rgba(255, 255, 255, 0.2);
	cursor: auto;
}

.h_18 {
	height: 18px;
}

.title_spell {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	display: flex;
	align-items: center;
	white-space: pre;
}

.title_spell:first-letter {
	text-transform: uppercase;
}

.gray_2 {
	color: rgba(255, 255, 255, 0.2);
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.text_spell {
	width: 340px;
	text-align: start;
}

.hr {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	vertical-align: text-top;
}

.passive {
	opacity: 0.2;
}

.icon_svg {
	fill: white;
	width: 18px;
	height: 18px;
}

.icon-overflow {
	fill: #ffc93d;
}

.rare-text {
	color: #ffc93d;
	opacity: 1;
}
</style>
