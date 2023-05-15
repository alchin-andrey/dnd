<template>
	<div class="flex-col gap-8">
		<AppCardWrapp no_blur
			v-for="ethnos in ethnos_Arr"
			:key="ethnos"
			@click="getEthnosName(ethnos.name)"
			:active_card="MY_Ethnos.name === ethnos.name"
		>
		<AppCharCard :ethnos_name="ethnos.name"/>

			<!-- Ethnos_card_stats + qualities -->
			<AppWrapper v-if="ethnos.stats || level_Filter_Arr(ethnos.qualities).length !== 0">
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
			</AppWrapper>

			<!-- Ethnos_card_stats + qualities-->

			<!-- Ethnos_card_Charges -->
			<AppWrapper v-if="level_Filter_Arr(ethnos.charges).length !== 0">
				<AppCharges
					v-for="item in level_Filter_Arr(ethnos.charges)"
					:key="item"
					:charge="item"
				/>
			</AppWrapper>
			<!-- Ethnos_card_Charges -->

			<!-- Ethnos_card_proficiencies -->
			<AppWrapper v-if="ethnos.proficiencies">
				<AppProficiencies
					v-for="(val, name) in ethnos.proficiencies"
					:key="name"
					:title="name"
					:arr_name="proficiencies_Arr(ethnos.proficiencies, name)"
					:active_card="MY_Ethnos.name === ethnos.name"
				/>
			</AppWrapper>
			<!-- Ethnos_card_proficiencies -->

			<!-- Ethnos_card_fines -->
			<AppWrapper gap="8" v-if="ethnos.fines">
				<AppFines v-for="item in ethnos.fines" :key="item" :fines="item" />
			</AppWrapper>
			<!-- Ethnos_card_fines -->

			<!-- Ethnos_card_spells -->
			<AppWrapper gap="26" v-if="level_Filter_Arr(ethnos.spells).length !== 0">
				<AppSpells
					v-for="item in level_Filter_Arr(ethnos.spells)"
					:key="item"
					:spell_obj="item"
					select
					:active_card="MY_Ethnos.name === ethnos.name"
				/>
			</AppWrapper>
			<!-- Ethnos_card_spells -->

			<AppWrapper v-if="ethnos.settings">
				<MyCusstomSetting
					v-for="item in ethnos.settings"
					:key="item"
					:title="item.name"
					:select="select_Numb(item.select)"
					:sum="select_Sum(item.list)"
				>
				</MyCusstomSetting>
			</AppWrapper>

			<!-- Ethnos_card_текст -->
			<my-card-text
				:title="ethnos.name"
				:text="ethnos.details"
				:rare="ethnos.rare"
			>
			</my-card-text>
		</AppCardWrapp>
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
      "MY_Race",
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
			this.MY.ethnos_name_save[this.MY_Race.name] = name;
		},
	},
};
</script>
