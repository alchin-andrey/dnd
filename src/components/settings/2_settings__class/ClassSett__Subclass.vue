<template>
	<my-selection-card
		v-for="subclass in subclass_Find_Lvl.list"
		:key="subclass"
		no_blur
		@click="getSubclassObj(subclass)"
		:active_boll_link="active_Subclass(subclass)"
	>
		<!-- //NOTE - Text -->
		<my-card-text :title="subclass.name" :text_html="subclass.details">
		</my-card-text>

    <!-- //NOTE - Charges -->
		<my-wrapper v-if="shown_Param_Arr(subclass.charges)">
			<my-charges
				v-for="item in level_Filter_Arr(subclass.charges)"
				:key="item"
				:charge="item"
			>
			</my-charges>
		</my-wrapper>

		<!-- //NOTE - Proficiencies -->
		<my-wrapper v-if="subclass.proficiencies">
			<my-inventory
				v-for="(val, name) in subclass.proficiencies"
				:key="name"
				:title="name"
				:item="proficiencies_Arr(subclass.proficiencies, name)"
			>
			</my-inventory>
		</my-wrapper>

		<!-- //NOTE - Fines -->
		<my-wrapper v-if="shown_Param_Arr(subclass.fines)" gap_8>
			<AppFines
				v-for="item in level_Filter_Arr(subclass.fines)"
				:key="item"
				:fines="item"
			/>
		</my-wrapper>

		<!-- //NOTE - Spells -->
		<my-wrapper v-if="shown_Param_Arr(subclass.spells)" gap_26>
			<my-spell-text
				v-for="item in level_Filter_Arr(subclass.spells)"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
				select
			>
			</my-spell-text>
		</my-wrapper>

		<!-- //NOTE - Weapon -->
		<my-wrapper v-if="weapons_Equip(subclass.equipment).length !== 0" gap_26>
			<WeaponEquip
				v-for="weapon in weapons_Equip(subclass.equipment)"
				:key="weapon"
				:weapon="weapon"
        select
			/>
		</my-wrapper>

		<!-- //NOTE - Invenory -->
		<my-wrapper
			v-if="
				packs_Equip(subclass.equipment).length !== 0 ||
				inventory_Equip(subclass.equipment).length !== 0
			"
		>
			<KitEquip
				:packs="packs_Equip(subclass.equipment)"
				:inventory="inventory_Equip(subclass.equipment)"
			/>
		</my-wrapper>
    
    <!-- //NOTE - Settings -->
		<my-wrapper v-if="subclass.settings">
			<MyCusstomSetting
				v-for="item in subclass.settings"
				:key="item"
				:title="item.name"
				:select="select_Numb(item.select)"
				:sum="select_Sum(item.list)"
			>
			</MyCusstomSetting>
		</my-wrapper>
	</my-selection-card>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useStatsStore } from "@/stores/modules/StatsStore";
// import { useSkillsStore } from "@/stores/modules/SkillsStore";
// import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
// import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";

import KitEquip from "@/components/equipment/KitEquip.vue";
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";
export default {
	name: "ClassSett__Subclass",
	components: {
		KitEquip,
    WeaponEquip,
	},
	computed: {
		// STORE
		...mapState(useMYStore, [
			"MY",
			"MY_Subclass",
			"level_Filter_Arr",
			"subclass_Find_Lvl",
		]),
		// GETTERS
		// ...mapState(useMYStore, ["MY_Subclass"]),

		// ...mapState(useStatsStore, ["stats_Pass_Arr_RE"]),
		// ...mapState(useSkillsStore, ["skills_Pass_Arr_RE"]),
		// ...mapState(useLanguagesStore, ["languages_Pass_Arr_RE"]),
		// ...mapState(useSpellsStore, ["spells_Pass_Arr_RE"]),
		...mapState(useProficienciesStore, ["proficiencies_Arr"]),
		...mapState(useEquipStore, ["item_Equip_Arr"]),

		packs_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "inventory_packs");
		},

		inventory_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "inventory");
		},

		weapons_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "weapon");
		},

		shown_Param_Arr: (state) => (arr) => {
			return state.level_Filter_Arr(arr).length !== 0;
		},

		select_Numb() {
			const lvl = this.MY.level;
			return (select) => (Array.isArray(select) ? select[lvl - 1] : select);
		},

		active_Subclass: (state) => (subclass) => {
			return state.MY_Subclass.name === subclass.name;
		},

		select_Sum: (state) => (list) => {
			return list ? list.length : 10.000000001;
		},

		// select_Sum() {
		// 	return (name) => this[`${name}_Pass_Arr_RE`].length;
		// },
	},
	methods: {
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
