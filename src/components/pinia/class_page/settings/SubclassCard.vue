<template>
	<!-- <div class="ethnos_cards_menu"> -->
		<my-selection-card
			v-for="subclass in subclass_Find.list"
			:key="subclass"
			no_blur
			@click="getSubclassObj(subclass)"
			:active_boll_link="active_Subclass(subclass)"
		>

    <!-- Специализация_текст -->
		<my-card-text
				:title="subclass.name"
				:text_html="subclass.details"
			>
			</my-card-text>
		<!-- Специализация_текст -->

    <my-wrapper v-if="shown_Param_Arr(subclass.charges)">
				<my-charges
					v-for="item in level_Filter(subclass.charges)"
					:key="item"
					:charge="item"
				>
				</my-charges>
			</my-wrapper>

			<!-- Этнос_Карточка_stats + qualities -->
			<!-- <my-wrapper v-if="ethnos.stats || ethnos.qualities">
				<my-attribute
					v-for="(val, name) in ethnos.stats"
					:key="name"
					:title="name"
					:type="`${name}_base`"
					plus
					:numb="val"
				>
				</my-attribute>
				<my-attribute
					v-if="ethnos.hp_bonus"
					title="hp_bonus"
					:numb="hp_Bonus(ethnos.hp_bonus[0], ethnos.hp_bonus[1])"
					plus
					icon="hp_bonus"
				></my-attribute>
				<my-attribute
					v-for="(val, name) in ethnos.qualities"
					:key="name"
					:title="name"
					feet
					:numb="val"
				>
				</my-attribute>
			</my-wrapper> -->
			<!-- Этнос_Карточка_stats + qualities-->

			<!-- Этнос_Карточка_proficiencies -->
			<my-wrapper v-if="subclass.proficiencies">
				<my-inventory
					v-for="(val, name) in subclass.proficiencies"
					:key="name"
					:title="name"
					:item="proficiencies_Arr_Subclass(subclass, name)"
				>
				</my-inventory>
			</my-wrapper>
			<!-- Этнос_proficiencies -->

			<!-- Специализация_fines -->
			<my-wrapper v-if="shown_Param_Arr(subclass.fines)" gap_8>
				<my-fines
					v-for="item in level_Filter(subclass.fines)"
					:key="item"
					:icon="item.type"
					:title="item.keyword"
					:details="item.details"
				></my-fines>
			</my-wrapper>
			<!-- Специализация_fines -->

			<!-- Этнос_Карточка_spells -->
			<my-wrapper v-if="shown_Param_Arr(subclass.spells)" gap_26>
				<my-spell-text
					v-for="item in level_Filter(subclass.spells)"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
					select
				>
				</my-spell-text>
			</my-wrapper>
			<!-- Этнос_Карточка_spells -->

			<my-wrapper v-if="subclass.settings">
				<MyCusstomSetting
					v-for="item in subclass.settings"
					:key="item"
					:title="item.name"
					:select="select_Numb(item.select)"
					:sum="2"
				>
				</MyCusstomSetting>
			</my-wrapper>
    </my-selection-card>
	<!-- </div> -->
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
export default {
	name: "SubclassCard",
	computed: {
		// STORE
		...mapState(useMYStore, ["MY", "MY_Subclass", "level_Filter"]),
		// GETTERS
		...mapState(useMYStore, ["MY_Subclass"]),

		...mapState(useStatsStore, ["stats_Pass_Arr_RE"]),
		...mapState(useSkillsStore, ["skills_Pass_Arr_RE"]),
		...mapState(useLanguagesStore, ["languages_Pass_Arr_RE"]),
		...mapState(useSpellsStore, ["spells_Pass_Arr_RE"]),


    subclass_Find() {
      const lvl = this.MY.level;
			// return this.MY.class.settings?.find((item) => item.name == "subclass" && lvl >= item.level);
			return this.MY.class.settings?.find((item) => item.name == "subclass");
		},

    shown_Param_Arr: (state) => (arr) => {
      return arr ? state.level_Filter(arr).length !== 0 : null;
    },

    select_Numb() {
      const lvl = this.MY.level;
      return (select) => Array.isArray(select) ? select[lvl - 1] : select;
    },









		select_Sum() {
			return (name) => this[`${name}_Pass_Arr_RE`].length;
		},

		shown_Spells_Ethnos: (state) => (spells) => {

			let ethnos_spells = spells;
			let lvl = state.MY.level;
			let spells_lvl = ethnos_spells?.[0].level <= lvl;
			return ethnos_spells && spells_lvl;
		},

		hp_Bonus: (state) => (increm_1, increm_2) => {
			let level = Math.ceil(state.MY.level / increm_1);
			return level * increm_2;
		},

		proficiencies_Arr_Subclass: (state) => (obj, kay) => {
			let subclass_arr = obj.proficiencies?.[kay].map((x) => x.name);
			return subclass_arr;
		},

    active_Subclass: (state) => (subclass) => {
      return state.MY_Subclass.name === subclass.name
    }
	},
	methods: {
		// getEthnosObj(obj) {
		// 	this.MY.ethnos = obj;
		// },
    getSubclassObj(obj) {
			this.MY.subclass_save[this.MY.class.name] = obj;
		},
	},
};
</script>

<style>
.ethnos_cards_menu {
	display: flex;
	flex-direction: column;
	gap: 8px;
	/* z-index: 100; */
}

.ethnos_char_back {
	width: 100%;
	height: 120px;
	background: #0e1518;
	border-radius: 4px;
	position: relative;
	overflow: hidden;
}

.ethnos_char_back img {
	/* height: 390px; */
	position: absolute;
	top: 16px;
}

.ethnos_char_back svg {
	height: 300px;
	position: absolute;
	top: 16px;
	left: 0;
}

/* .flex_custom {
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gap_4 {
  display: flex;
  gap: 4px;
} */
</style>
