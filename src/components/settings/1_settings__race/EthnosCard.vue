<template>
	<div class="ethnos_cards_menu">
		<my-selection-card
			v-for="ethnos in MY.race.race_settings.ethnos"
			:key="ethnos"
			no_blur
			@click="getEthnosObj(ethnos)"
			:active_boll_link="MY.ethnos.name === ethnos.name"
		>
			<div
				class="ethnos_char_back"
				:style="{
					'background-image': `url(${require('@/assets/img/characters/halfling/ethhnos/image.png')})`,
				}"
			>
				<RaceBody body_part="skin" :ethnos_name="ethnos.name" />
				<RaceBody body_part="hair" :ethnos_name="ethnos.name" />
				<RaceBody body_part="eyes" :ethnos_name="ethnos.name" />
			</div>

			<!-- Этнос_Карточка_stats + qualities -->
			<my-wrapper v-if="ethnos.stats || ethnos.qualities">
				<AppStats
					v-for="stat in ethnos.stats"
					:key="stat.name"
					:title="stat.name"
					:type="`${stat.name}_base`"
					plus
					:numb="stat.num"
				/>
				<my-attribute
					v-if="ethnos.hp_bonus"
					title="hp_bonus"
					:numb="hp_Bonus(ethnos.hp_bonus[0], ethnos.hp_bonus[1])"
					plus
					icon="hp_bonus"
				/>
				<my-attribute
					v-for="(val, name) in ethnos.qualities"
					:key="name"
					:title="name"
					feet
					:numb="val"
				/>
			</my-wrapper>
			<!-- Этнос_Карточка_stats + qualities-->

			<!-- Этнос_Карточка_Charges -->
			<my-wrapper v-if="level_Filter_Arr(ethnos.charges).length !== 0">
				<AppCharges
					v-for="item in level_Filter_Arr(ethnos.charges)"
					:key="item"
					:charge="item"
				/>
			</my-wrapper>
			<!-- Этнос_Карточка_Charges -->

			<!-- Этнос_Карточка_proficiencies -->
			<my-wrapper v-if="ethnos.proficiencies">
				<AppProficiencies
					v-for="(val, name) in ethnos.proficiencies"
					:key="name"
					:title="name"
					:arr_name="proficiencies_Arr(ethnos.proficiencies, name)"
					:active_card="MY.ethnos.name === ethnos.name"
				/>
			</my-wrapper>
			<!-- Этнос_proficiencies -->

			<!-- Этнос_Карточка_fines -->
			<my-wrapper v-if="ethnos.fines" gap_8>
				<AppFines v-for="item in ethnos.fines" :key="item" :fines="item" />
			</my-wrapper>
			<!-- Этнос_Карточка_fines -->

			<!-- Этнос_Карточка_spells -->
			<my-wrapper v-if="shown_Spells_Ethnos(ethnos.spells)" gap_26>
				<my-spell-text
					v-for="item in ethnos.spells"
					:key="item"
					:lvl="item.level"
					:spell="item.spell"
					select
					:active_card="MY.ethnos.name === ethnos.name"
				>
				</my-spell-text>
			</my-wrapper>
			<!-- Этнос_Карточка_spells -->

			<my-wrapper v-if="ethnos.settings">
				<MyCusstomSetting
					v-for="item in ethnos.settings"
					:key="item"
					:title="item.name"
					:select="select_Numb(item.select)"
					:sum="select_Sum(item.list)"
				>
				</MyCusstomSetting>
			</my-wrapper>

			<!-- Этнос_Карточка_текст -->
			<my-card-text
				:title="ethnos.name"
				:text="ethnos.details"
				:rare="ethnos.rare"
			>
			</my-card-text>
		</my-selection-card>
		<!-- Этнос_Карточка_текст -->
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
export default {
	name: "EthnosCard",
	computed: {
		// STORE
		...mapState(useMYStore, ["MY", "level_Filter_Arr"]),
		// GETTERS
		...mapState(useSkillsStore, ["skills_Pass_Arr_RE"]),
		...mapState(useLanguagesStore, ["languages_Pass_Arr_RE"]),
		...mapState(useSpellsStore, ["spells_Pass_Arr_RE"]),
		...mapState(useProficienciesStore, ["proficiencies_Arr"]),

		// select_Sum() {
		// 	return (name) => this[`${name}_Pass_Arr_RE`].length;
		// },

		select_Numb: (stor) => (select) => {
			const lvl = stor.MY.level;
			return Array.isArray(select) ? select[lvl - 1] : select;
		},

		select_Sum: (stor) => (list) => {
			return list ? list.length : 10.000000001;
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
	},
	methods: {
		getEthnosObj(obj) {
			this.MY.ethnos = obj;
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
