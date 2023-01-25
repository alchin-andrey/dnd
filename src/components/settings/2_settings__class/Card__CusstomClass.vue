<template>
  	<my-selection-card
		no_blur
    :active_boll_link="active_boll_link"
	>
		<!-- //NOTE - Text -->
		<my-card-text v-if="customm.name || customm.details"
    :title="customm.name" :text_html="customm.details">
		</my-card-text>
    
    <!-- //NOTE - Skilss -->
    <!-- <my-wrapper v-if="shown_Param_Arr(customm.skills)">
			<my-attribute
				v-for="(skill, key, ind) in level_Filter_Arr(customm.skills)"
				:key="skill"
				:title="Object.keys(skill)[0]"
				plus
				:numb="Mastery"
				:icon="MY.skills[Object.keys(skill)[0]].mod"
			></my-attribute>
		</my-wrapper> -->
    <my-wrapper v-if="shown_Param_Arr(customm.skills)">
			<my-attribute
				v-for="skill in level_Filter_Arr(customm.skills)"
				:key="skill"
				:title="skill.name"
				plus
				:numb="Mastery"
				:icon="MY.skills[skill.name].mod"
			></my-attribute>
		</my-wrapper>
    
    <!-- //NOTE - hp_Bonus -->
    <my-wrapper v-if="customm.hp_bonus">
				<my-attribute
					v-if="customm.hp_bonus"
					title="hp_bonus"
					:numb="hp_Bonus(customm.hp_bonus[0], customm.hp_bonus[1])"
					plus
					icon="hp_bonus"
				/>
			</my-wrapper>

    <!-- //NOTE - Charges -->
		<my-wrapper v-if="shown_Param_Arr(customm.charges)">
			<my-charges
				v-for="item in level_Filter_Arr(customm.charges)"
				:key="item"
				:charge="item"
			>
			</my-charges>
		</my-wrapper>

		<!-- //NOTE - Proficiencies -->
		<my-wrapper v-if="customm.proficiencies">
			<my-inventory
				v-for="(val, name) in customm.proficiencies"
				:key="name"
				:title="name"
				:item="proficiencies_Arr(customm.proficiencies, name)"
			>
			</my-inventory>
		</my-wrapper>

    		<!-- //NOTE - Armor -->
		<my-wrapper v-if="armors_Equip(customm.equipment).length !== 0" gap_26>
			<ArmorEquip
				v-for="armor in armors_Equip(customm.equipment)"
				:key="armor"
				:armor="armor"
        select
			/>
		</my-wrapper>

		<!-- //NOTE - Fines -->
		<my-wrapper v-if="shown_Param_Arr(customm.fines)" gap_8>
			<AppFines
				v-for="item in level_Filter_Arr(customm.fines)"
				:key="item"
				:fines="item"
			/>
		</my-wrapper>

		<!-- //NOTE - Spells -->
		<my-wrapper v-if="shown_Param_Arr(customm.spells)" gap_26>
			<my-spell-text
				v-for="item in level_Filter_Arr(customm.spells)"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
				select
			>
			</my-spell-text>
		</my-wrapper>

		<!-- //NOTE - Weapon -->
		<my-wrapper v-if="weapons_Equip(customm.equipment).length !== 0" gap_26>
			<WeaponEquip
				v-for="weapon in weapons_Equip(customm.equipment)"
				:key="weapon"
				:weapon="weapon"
        select
			/>
		</my-wrapper>

		<!-- //NOTE - Invenory -->
		<my-wrapper
			v-if="
				packs_Equip(customm.equipment).length !== 0 ||
				inventory_Equip(customm.equipment).length !== 0
			"
		>
			<KitEquip
				:packs="packs_Equip(customm.equipment)"
				:inventory="inventory_Equip(customm.equipment)"
			/>
		</my-wrapper>
    
    <!-- //NOTE - Settings -->
		<my-wrapper v-if="customm.settings">
			<MyCusstomSetting
				v-for="item in customm.settings"
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
import ArmorEquip from "@/components/equipment/ArmorEquip.vue";
export default {
	name: "Card__CusstomClass",
	components: {
		KitEquip,
    WeaponEquip,
    ArmorEquip,
	},
  props: {
		customm: {
			type: Object,
			default: null,
		},

    // customm_: {
		// 	type: Object,
		// 	default: null,
		// },

    active_boll_link: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		// STORE
		...mapState(useMYStore, [
			"MY",
      "Mastery",
			"level_Filter_Arr",
		]),
		...mapState(useProficienciesStore, ["proficiencies_Arr"]),
		...mapState(useEquipStore, ["item_Equip_Arr"]),


    // TTT: (state) => (name) => {
    //   const arr = Object.keys(name);
    // return arr[0]
    // },

    hp_Bonus: (state) => (increm_1, increm_2) => {
			let level = Math.ceil(state.MY.level / increm_1);
			return level * increm_2;
		},

		packs_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "inventory_packs");
		},

		inventory_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "inventory");
		},

		weapons_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "weapon");
		},

		armors_Equip: (state) => (obj_arr) => {
			return state.item_Equip_Arr(obj_arr, "armor");
		},

		shown_Param_Arr: (state) => (arr) => {
			return state.level_Filter_Arr(arr).length !== 0;
		},

		select_Numb: (state) => (select) => {
			const lvl = state.MY.level;
			return Array.isArray(select) ? select[lvl - 1] : select;
		},

		select_Sum: (state) => (list) => {
			return list ? list.length : 10.000000001;
		},
	},
};
</script>
