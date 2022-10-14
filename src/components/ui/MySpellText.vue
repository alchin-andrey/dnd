<template>
	<div v-if="Show" class="flex">
		<div class="side_stripe"></div>
		<div class="int-400 flex_col">
<!--			<div class="title" v-html="t_Html"></div>-->
			<div>
				<div class="title">{{ t_Title }}</div>
				<div class="text">{{ t_Text }}</div>
			</div>
			<div v-if="Spell_Index.impact_type" class="jbm-300">{{ t_Impact }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MySpellText",
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
				console.log(this.Spell_Index.impact_type);
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

.flex {
	display: flex;
	gap: 18px;
	height: 100%;
}

.flex_col {
	display: flex;
	flex-direction: column;
	gap: 26px;
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

.title {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-bottom: 4px;
}

/*.only {*/
/*	margin-bottom: 0px;*/
/*}*/

.title:first-letter {
	text-transform: uppercase;
}


.text {
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
	white-space: pre-line;
}

.text:first-letter {
	text-transform: uppercase;
}

.text span {
	color: #ffc93d;
	margin-top: 20px;
}

.text span:first-letter {
	text-transform: uppercase;
}

</style>
