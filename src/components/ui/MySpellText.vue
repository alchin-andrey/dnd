<template>
	<div v-if="Show" class="flex_spell">
		<div class="side_stripe"></div>
		<div class="int-400 flex_col">
<!--			<div class="title" v-html="t_Html"></div>-->
			<div>
				<div class="flex_title">
					<div class="title_spell h_18">{{ t_Title }}</div>
					<img v-if="icon" @click="showDialog()" class="icon_spell" src="@/assets/img/icon/arrow_right_small.svg" alt="arrow">
				</div>
				<div class="text_spell">{{ t_Text }}</div>
			</div>
			<magic-attribute
				v-if="Spell_Index.impact_type"
				:title="t_Impact"
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
		<div class="text_spell">{{ t_Text }}</div>
		<my-wrapper gap_6>
			<div class="col_spell">{{ t_Cast }}<span>:</span>{{ t_Cast_Value }}</div>
			<div class="col_spell">{{ t_Target }}<span>:</span>{{ t_Target_Value }}</div>
			<div class="col_spell">{{ t_Parts }}<span>:</span>{{ t_Parts_Value }}</div>
			<div class="col_spell">{{ t_Time }}<span>:</span>{{ t_Time_Value }}</div>
		</my-wrapper>
		<magic-attribute
			v-if="Spell_Index.impact_type"
			:title="t_Impact"
			:numb="Spell_Index.impact_size_num"
			:dice="Spell_Index.impact_size_dice"
		/>
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
		t_Impact() {
			if(this.Spell_Index.impact_type) {
				return `${this.t(this.Spell_Index.impact_type)} ${this.t(this.Spell_Index.impact_damage_type)}`;
			}
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
			if(value_2) {
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
			let value_1 = this.t(this.Spell_Index.spell_time);
			let value_2 = this.Spell_Index.spell_duration;
			let value_3 = this.t(this.Spell_Index.spell_duration_units);
			let string = null;
			if(!value_1) {
				string = value_2 + ' ' + value_3;
			} else if(value_2) {
				string = value_1 + ' ' + value_2 + ' ' + value_3;
			} else {
				string = value_1;
			}
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

		t_Expanded() {
			return this.t(this.Spell_Index.expanded);
		},
		// t_Html() {
		// 	return this.t(this.title_html);
		// },

	},
	methods: {
		showDialog() {
			this.dialogVisible = true;
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
