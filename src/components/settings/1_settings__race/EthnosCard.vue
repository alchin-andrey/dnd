<template>
	<div class="ethnos_cards_menu">
		<my-selection-card
			v-for="ethnos in ethnos_Arr"
			:key="ethnos"
			no_blur
			@click="getEthnosName(ethnos.name)"
			:active_boll_link="MY_Ethnos.name === ethnos.name"
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

			<!-- Ethnos_card_stats + qualities -->
			<my-wrapper v-if="ethnos.stats || level_Filter_Arr(ethnos.qualities).length !== 0">
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
					:numb="hp_Bonus(ethnos)"
					plus
					icon="hp_bonus"
				/>
				<my-attribute
					v-for="qual in level_Filter_Arr(ethnos.qualities)"
					:key="qual"
					:title="qual.name"
					:numb="qual.num"
					:feet="qual.name == 'speed' || qual.name == 'vision_night'"
					:plus="qual.type == 'bonus'"
				/>
			</my-wrapper>

			<!-- Ethnos_card_stats + qualities-->

			<!-- Ethnos_card_Charges -->
			<my-wrapper v-if="level_Filter_Arr(ethnos.charges).length !== 0">
				<AppCharges
					v-for="item in level_Filter_Arr(ethnos.charges)"
					:key="item"
					:charge="item"
				/>
			</my-wrapper>
			<!-- Ethnos_card_Charges -->

			<!-- Ethnos_card_proficiencies -->
			<my-wrapper v-if="ethnos.proficiencies">
				<AppProficiencies
					v-for="(val, name) in ethnos.proficiencies"
					:key="name"
					:title="name"
					:arr_name="proficiencies_Arr(ethnos.proficiencies, name)"
					:active_card="MY_Ethnos.name === ethnos.name"
				/>
			</my-wrapper>
			<!-- Ethnos_card_proficiencies -->

			<!-- Ethnos_card_fines -->
			<my-wrapper v-if="ethnos.fines" gap_8>
				<AppFines v-for="item in ethnos.fines" :key="item" :fines="item" />
			</my-wrapper>
			<!-- Ethnos_card_fines -->

			<!-- Ethnos_card_spells -->
			<my-wrapper v-if="level_Filter_Arr(ethnos.spells).length !== 0" gap_26>
				<AppSpells
					v-for="item in level_Filter_Arr(ethnos.spells)"
					:key="item"
					:spell_obj="item"
					select
					:active_card="MY_Ethnos.name === ethnos.name"
				/>
			</my-wrapper>
			<!-- Ethnos_card_spells -->

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

			<!-- Ethnos_card_текст -->
			<my-card-text
				:title="ethnos.name"
				:text="ethnos.details"
				:rare="ethnos.rare"
			>
			</my-card-text>
		</my-selection-card>
		<!-- Ethnos_card_текст -->
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
export default {
	name: "EthnosCard",
	computed: {
		// STORE
		...mapState(useMYStore, [
      "MY", 
      "ethnos_Arr",
      "MY_Ethnos",
      "level_Filter_Arr"
    ]),
		// GETTERS
		...mapState(useProficienciesStore, ["proficiencies_Arr"]),
		...mapState(useQualitiesStore, ["hp_Bonus"]),

		select_Numb: (stor) => (select) => {
			const lvl = stor.MY.level;
			return Array.isArray(select) ? select[lvl - 1] : select;
		},

		select_Sum: (stor) => (list) => {
			return list ? list.length : 10.000000001;
		},
	},
	methods: {
		getEthnosName(name) {
			console.log('name:', name)
			this.MY.ethnos_name_save[this.MY.race_name] = name;
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
