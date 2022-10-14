<template>
	<div v-if="Show" class="flex_spell">
		<div class="side_stripe"></div>
		<div class="int-400 flex_col">
<!--			<div class="title" v-html="t_Html"></div>-->
			<div>
				<div class="flex_title">
					<div class="title_spell">{{ t_Title }}</div>
					<img v-if="icon" class="icon_spell" src="@/assets/img/icon/arrow_right_small.svg" alt="arrow">
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
</template>

<script>
export default {
	name: "MySpellText",
	components: {},

	data() {
		return {

		}
	},
	props: {
		// title: {
		// 	type: String,
		// 	default: null,
		// },
		// title_html: {
		// 	type: String,
		// 	default: null,
		// },
		// text: {
		// 	type: String,
		// 	default: null,
		// },
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
		t_Text() {
			return this.t(this.Spell_Index.details);
		},
		t_Impact() {
			if(this.Spell_Index.impact_type) {
				return `${this.t(this.Spell_Index.impact_type)} ${this.t(this.Spell_Index.impact_damage_type)}`;
			}
		},
		// t_Html() {
		// 	return this.t(this.title_html);
		// },

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

.title_spell {
	height: 18px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
}

/*.only {*/
/*	margin-bottom: 0px;*/
/*}*/

.title_spell:first-letter {
	text-transform: uppercase;
}


.text_spell {
	/*color: rgba(255, 255, 255, 0.4);*/
	text-align: start;
	white-space: pre-line;
}

.text_spell:first-letter {
	text-transform: uppercase;
}

</style>
