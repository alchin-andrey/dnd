<template>
	<div
		v-if="Show"
		class="flex_spell"
		:class="{ hover: !passive }"
		@click="showDialog()"
	>
		<div
			class="side_stripe"
			:class="{ active: dialogVisible && !passive }"
		></div>
		<div class="int-400 flex_col">
			<div>
				<div class="flex_title">
					<div class="title_spell h_18">
						{{ em_Before
						}}<emoji
							v-if="em_Upd"
							:data="emojiIndex"
							:emoji="em_Upd"
							:set="set_emoji"
							:size="emoji_size"
						/>{{ em_After }}
					</div>
					<img
						v-if="!passive"
						class="icon_spell"
						src="@/assets/img/icon/arrow_right_small.svg"
						alt="arrow"
					/>
				</div>
				<!-- <div class="text_spell">{{ t_Text }}</div> -->
				<div class="text_spell" v-html="t_Text"></div>
			</div>
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:str="Value_Str"
				:numb="Value_Num"
				:dice="Spell_Index.impact_size_dice"
				:pls="Value_Pls"
				main
			/>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">
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
		<div class="manna_flex jbm-300">
			<div
				class="manna_bubble manna_bubble_choice"
				v-for="n in Manna_Length"
				:key="n"
				@click="choiceManna(n)"
				:class="{
					manna_bubble_passive: n - 1 < Index,
					manna_bubble_active: n - 1 === manna_numb,
					manna_bubble_hover:
						!(n - 1 < Index) && !(n - 1 === manna_numb),
				}"
			>
				{{ n - 1 }}
			</div>
		</div>
		<!-- <div class="text_spell">{{ t_Text }}</div> -->
		<div class="text_spell" v-html="t_Text"></div>
		<my-wrapper gap_6>
			<my-spell-main title="cast_time" :text="t_Cast_Value" />
			<my-spell-main title="aim_target" :text="t_Target_Value" />
			<my-spell-main title="parts" :text="t_Parts_Value" emoji />
			<my-spell-main title="time" :text="t_Time_Value" />
		</my-wrapper>
		<my-wrapper
			v-if="
				Spell_Index.aim_need ||
				Spell_Index.impact_type ||
				Spell_Index.aim_range ||
				Spell_Index.aim_aoe
			"
		>
			<magic-attribute
				v-if="Spell_Index.aim_need"
				title="aim_bonus"
				:numb="this.$root.MY.mastery"
				plus
			/>
			<!-- <magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:numb="Manna_Index.impact_size_num"
				:dice="Manna_Index.impact_size_dice"
			/> -->
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:str="Value_Str"
				:numb="Value_Num"
				:dice="Spell_Index.impact_size_dice"
				:pls="Value_Pls"
				main
			/>
			<magic-attribute
				v-if="Spell_Index.aim_range"
				title="aim_range"
				:numb="Spell_Index.aim_range"
			/>
			<magic-attribute
				v-if="Spell_Index.aim_aoe"
				title="aim_aoe"
				:prefix="Spell_Index.aim_aoe"
				:numb="Spell_Index.aim_aoe_size"
			/>
		</my-wrapper>
		<my-wrapper v-if="Spell_Index.saving_need">
			<magic-attribute
				v-if="Spell_Index.saving_need"
				title="saving_target"
				:prefix="Spell_Index.saving_attribute"
				:numb="Saving_Numb"
			/>
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:save="Spell_Index.impact_size_saved"
			/>
		</my-wrapper>
		<div class="hr"></div>
		<div class="text_spell gray_4" v-html="t_Expanded"></div>
	</my-dialog-spell>
</template>

<script>
export default {
	name: "MySpellText",

	data() {
		return {
			dialogVisible: false,
			numb_type: 0,
			manna_numb: null,
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
		passive: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		Index() {
			return this.spell.findIndex((el) => el.name);
		},
		Spell_Index() {
			return this.spell[this.Index];
		},
		Manna_Index() {
			return this.spell[this.manna_numb];
		},
		Manna_Numb() {
			if (this.manna_numb) {
				return this.manna_numb;
			} else {
				return this.Index;
			}
		},
		Manna_Length() {
			// console.log('Manna_Length', this.spell.length)
			return this.spell.length;
		},

		// -----------------------------------

		// ------ NUM -----------

		Num_Plus_Level_2() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.$root.MY.level;
			return num + Math.floor((lvl - 1) / 2);
			//Например num = 1.
			//на 1 левеле = 1, на 3 левеле = 2, на 5 левеле = 3 и тд.
		},

		Num_LevelX() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.$root.MY.level;

			return num * lvl;
		},

		Num_Level_5_11_17() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.$root.MY.level;
			let kof = 0;
			if (lvl < 5) {
				kof = 0;
			} else if (lvl < 11) {
				kof = 1;
			} else if (lvl < 17) {
				kof = 2;
			} else {
				kof = 3;
			}
			return num + kof;
		},

		Num_Level_6_11_16() {
			let num = this.Spell_Index.impact_size_num;
			let lvl = this.$root.MY.level;
			let kof = null;
			if (lvl < 6) {
				kof = 0;
			} else if (lvl < 11) {
				kof = 1;
			} else if (lvl < 16) {
				kof = 2;
			} else {
				kof = 3;
			}
			return num + kof;
		},

		Num_MOD() {
			let num = this.$root.MY.stats.strength.mod;
			// console.log('Str_X_Plus_1_Num_MOD', num)
			let lvl = this.$root.MY.level;
			return num + lvl;
			// return num;
		},
		// ------ NUM -----------
		// ------ STR -----------
		Str_X_Level_5_11_17() {
			let str = this.Spell_Index.impact_size_string;
			let lvl = this.$root.MY.level;
			let kof = null;
			if (lvl < 5) {
				kof = 1;
			} else if (lvl < 11) {
				kof = 2;
			} else if (lvl < 17) {
				kof = 3;
			} else {
				kof = 4;
			}
			return str + kof;
			//return to: impact_size_string
			//1lvl = 1×, 5lvl = 2×, 11lvl = 3×, 17lvl = 4×
			//Example: 1× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
		},

		Str_X_Plus_1() {
			let str = this.Spell_Index.impact_size_string;
			let mana = this.Manna_Numb;
			return str + mana;
			//return to: impact_size_string
			//Exapmle: str = 3
			//spell{1} = 3×, spell{2} = 4×, spell{3} = 5×
			//spell{1}: 3× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
			//spell{2}: 4× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
		},

		Str_X_Plus_2() {
			let str = this.Spell_Index.impact_size_string;
			let mana = this.Manna_Numb;
			return str + mana * 2;
			//return to: impact_size_string
			//Exapmle: str = 3
			//spell{1} = 3×, spell{2} = 5×, spell{3} = 7×
			//spell{1}: 3× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
			//spell{2}: 5× 1d10 ⬜️🔳🔳🔳🔳🔳🔳🔳🔳🔳
		},
		// ------ STR -----------

		// -----------------------------------

		// ------ FOO -----------
		Foo() {
			return this.Spell_Index.impact_size_foo;
		},

		Foo_1() {
			return this.Foo.split("__")[0];
		},

		Foo_2() {
			return this.Foo.split("__")[1];
		},

		Foo_3() {
			return this.Foo.split("__")[2];
		},

		Value_Num() {
			return this.gat_Value_Foo("Num");
		},

		Value_Str() {
			return this.gat_Value_Foo("Str");
		},

		Value_Pls() {
			return this.gat_Value_Foo("Pls");
		},
		// ------ FOO -----------

		Show() {
			return this.lvl <= this.$root.MY.level;
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
			return this.t(this.Spell_Index.details);
		},
		t_Cast_Value() {
			let string = null;
			if (this.Spell_Index.cast_time === "ritual") {
				let value = this.t(this.Spell_Index.cast_time);
				let numb = this.Spell_Index.cast_duration;
				let numb_units = this.t(this.Spell_Index.cast_duration_units);
				string = value + " " + numb + " " + numb_units;
			} else {
				string = this.t(this.Spell_Index.cast_time);
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Target_Value() {
			let value_1 = this.t(this.Spell_Index.aim_target);
			let value_2 = this.t(this.Spell_Index.aim_type);
			let string = null;
			if (value_2) {
				string = value_1 + " " + value_2;
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
			return arr
				.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`)
				.join(", ");
		},
		t_Time_Value() {
			let value_1 = null;
			if (this.Spell_Index.spell_time === "concentration") {
				value_1 =
					this.t(this.Spell_Index.spell_time) + " " + this.t("up_to");
			} else {
				value_1 = this.t(this.Spell_Index.spell_time);
			}
			let value_2 = this.Spell_Index.spell_duration;
			let value_3 = this.t(this.Spell_Index.spell_duration_units);
			let string = null;
			if (!value_1) {
				string = value_2 + " " + value_3;
			} else if (value_2) {
				string = value_1 + " " + value_2 + " " + value_3;
			} else {
				string = value_1;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		Saving_Numb() {
			const KOF = 8;
			let attribute = this.Spell_Index.saving_attribute;
			let mastery = this.$root.MY.mastery;
			let stats_mod = this.$root.MY.stats[attribute].mod;
			return KOF + mastery + stats_mod;
		},
		t_Expanded() {
			return this.t(this.Spell_Index.expanded);
		},
	},
	methods: {
		showDialog() {
			if (this.passive) {
				return null;
			}
			this.dialogVisible = true;
			this.manna_numb = this.Index;
		},
		choiceManna(numb) {
			if (numb - 1 < this.Index) {
				return null;
			} else {
				this.manna_numb = numb - 1;
			}
		},

		gat_Sub_Foo(num, val) {
			let foo = this[`Foo_${num}`];

			if (foo) {
				let sub_foo = foo.substr(0, 3) === val;
				return sub_foo;
			} else {
				return null;
			}
		},

		gat_Value_Foo(val) {
			let num = this.Spell_Index.impact_size_num;
			let sub_foo_1 = this.gat_Sub_Foo(1, val);
			let sub_foo_2 = this.gat_Sub_Foo(2, val);
			let sub_foo_3 = this.gat_Sub_Foo(3, val);
			if (sub_foo_1) {
				let num_foo = this[this.Foo_1];
				return num_foo;
			}
			if (sub_foo_2) {
				let num_foo = this[this.Foo_2];
				return num_foo;
			}
			if (sub_foo_3) {
				let num_foo = this[this.Foo_3];
				return num_foo;
			}
			return num;
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

.hover:hover .side_stripe {
	background: #ffffff;
}

.active {
	background: #ffffff;
}

.manna_flex {
	display: flex;
	gap: 4px;
}

.manna_bubble {
	padding: 5px 12px;
	width: 31px;
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
	color: #ffffff;
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
	/*color: rgba(255, 255, 255, 0.4);*/
	text-align: start;
	/* white-space: pre-line; */
}

.text_spell:first-letter {
	text-transform: uppercase;
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
</style>
