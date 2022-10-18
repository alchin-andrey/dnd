<template>
	<div v-if="Show" class="flex_spell">
		<div class="side_stripe"></div>
		<div class="int-400 flex_col">
			<!--			<div class="title" v-html="t_Html"></div>-->
			<div>
				<div class="flex_title">
					<div class="title_spell h_18">{{ t_Title }}</div>
					<img v-if="icon"
						@click="showDialog()"
						class="icon_spell"
						src="@/assets/img/icon/arrow_right_small.svg"
						alt="arrow"
					>
				</div>
				<div class="text_spell">{{ t_Text }}</div>
			</div>
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:numb="Spell_Index.impact_size_num"
				:dice="Spell_Index.impact_size_dice"
			/>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">
		<my-wrapper>
			<div class="title_spell gray_2">{{ t_Type }} /</div>
			<div class="title_spell">{{ t_Title }}</div>
		</my-wrapper>
		<div class="manna_flex jbm-300">
			<div class="manna_bubble manna_bubble_choice"
				v-for="n in Manna_Numbs" :key="n"
				@click="choiceManna(n)"
				:class="{
					manna_bubble_passive: (n - 1) < Index,
					manna_bubble_active: (n - 1) === manna_numb,
					manna_bubble_hover: !((n - 1) < Index) && !((n - 1) === manna_numb)
					}"
			>{{ n - 1 }}
			</div>
		</div>
		<div class="text_spell">{{ t_Text }}</div>
		<my-wrapper gap_6>
			<div class="col_spell">{{ t_Cast }}<span>:</span>{{ t_Cast_Value }}</div>
			<div class="col_spell">{{ t_Target }}<span>:</span>{{ t_Target_Value }}</div>
			<div class="col_spell">{{ t_Parts }}<span>:</span>{{ t_Parts_Value }}</div>
			<div class="col_spell">{{ t_Time }}<span>:</span>{{ t_Time_Value }}</div>
		</my-wrapper>
		<magic-attribute
			v-if="Spell_Index.aim_need"
			title="aim_bonus"
			:numb="numb_type"
			plus
		/>
		<my-wrapper v-if="Spell_Index.impact_type || Spell_Index.aim_range || Spell_Index.aim_aoe">
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="Spell_Index.impact_type"
				:addition="Spell_Index.impact_damage_type"
				:numb="Manna_Index.impact_size_num"
				:dice="Manna_Index.impact_size_dice"
			/>
			<magic-attribute
				v-if="Spell_Index.aim_range"
				title="aim_range"
				:numb="Spell_Index.aim_range"
				feet
			/>
			<magic-attribute
				v-if="Spell_Index.aim_aoe"
				title="aim_aoe"
				:prefix="Spell_Index.aim_aoe"
				:numb="Spell_Index.aim_aoe_size"
				feet
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
				:numb="numb_type"
			/>
		</my-wrapper>
		<div class="hr"></div>
		<div class="text_spell gray_4">{{ t_Expanded }}</div>
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
		}
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
		icon: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		Index() {
			return this.spell.findIndex(el => el.name)
		},
		Spell_Index() {
			return this.spell[this.Index]
		},
		Manna_Index() {
			return this.spell[this.manna_numb]
		},
		Manna_Numbs() {
			return this.spell.length;
		},
		Show() {
			return this.lvl <= this.$root.MY.level
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
		t_Cast() {
			let string = this.t('cast_time');
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Cast_Value() {
			let string = this.t(this.Spell_Index.cast_time);
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Target() {
			let string = this.t('aim_target');
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Target_Value() {
			let value_1 = this.t(this.Spell_Index.aim_target);
			let value_2 = this.t(this.Spell_Index.aim_type);
			let string = null;
			if (value_2) {
				string = value_1 + ' ' + value_2;
			} else {
				string = value_1;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Parts() {
			let string = this.t('parts');
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Parts_Value() {
			let parts = this.Spell_Index.parts;
			let arr = []
			for (let i in parts) {
				arr.push(this.t(parts[i]))
			}
			return arr.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', ');
		},
		t_Time() {
			let string = this.t('time');
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		t_Time_Value() {
			let value_1 = null;
      if (this.Spell_Index.spell_time === "concentration") {
        value_1 = this.t(this.Spell_Index.spell_time) + ' ' + this.t('up_to');
      } else {
        value_1 = this.t(this.Spell_Index.spell_time);
      }
			let value_2 = this.Spell_Index.spell_duration;
			let value_3 = this.t(this.Spell_Index.spell_duration_units);
			let string = null;
			if (!value_1) {
				string = value_2 + ' ' + value_3;
			} else if (value_2) {
				string = value_1 + ' ' + value_2 + ' ' + value_3;
			} else {
				string = value_1;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},
		Saving_Numb() {
			let attribute = this.Spell_Index.saving_attribute
			let attribute_numb = this.getSummNumb('stats', attribute)
			return 8 + attribute_numb;
		},
		t_Expanded() {
			return this.t(this.Spell_Index.expanded);
		},
		// t_Html() {
		// 	return this.t(this.title_html);
		// },
		stats_Activ_Obj() {
			let i = this.$root.MY.race.stats;
			let j = this.$root.MY.ethnos.stats;
			let arr = Object.assign({}, i, j);
			return arr;
		},
		stats_Select() {
			return this.$root.race_page.extra.stats;
		},
		Race_Set_Obj() {
			return this.$root.MY.race.settings;
		},

	},
	methods: {
		showDialog() {
			this.dialogVisible = true;
			this.manna_numb = this.Index;
		},
		choiceManna(numb) {
			if((numb - 1) < this.Index){
				return null;
			} else {
				this.manna_numb = numb - 1;
			}
		},
		getSummNumb(name, item) {
			let i = 0;
			let activ_val = this[`${name}_Activ_Obj`][item];
			if (activ_val) {
				i = activ_val;
			} else if ((this.Race_Set_Obj || {})[`custom_${name}`]) {
				let extr_bool = this[`${name}_Select`].includes(item);
				let increment = this.Race_Set_Obj[`custom_${name}`][1];
				if (extr_bool) {
					i = increment;
				} else {
					i = 0;
				}
			} else {
				i = 0;
			}
			return i;
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
}

.flex_col {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 26px 0;
	/*flex: 1 1 auto;*/
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
}

.icon_spell {
	cursor: pointer;
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
	color: #FFFFFF;
}

.manna_bubble_hover:hover {
	background: rgba(255, 255, 255, 0.1);
}

.manna_bubble_active {
	background: #00E0FF;
	color: #0E1518;
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
	/*color: rgba(255, 255, 255, 0.4);*/
	text-align: start;
	white-space: pre-line;
}

.text_spell:first-letter {
	text-transform: uppercase;
}

.col_spell {
	height: 18px;
	display: flex;
	align-items: center;
	text-align: start;
	white-space: pre-line;
}

.col_spell span {
	width: 7px;
	color: rgba(255, 255, 255, 0.4);
	margin-right: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.hr {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

</style>
