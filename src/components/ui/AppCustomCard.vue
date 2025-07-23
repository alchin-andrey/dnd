<template>
	<AppCardWrapp 
	no_blur 
	:active_card="active_boll_link" 
	:banned="pass_boll_link"
	:no_pd="shown_CustomName"
	>
		<!-- //NOTE - Text -->
		<my-card-text
			v-if="custom.name || custom.details"
			:title="custom.name"
			:text_html="custom.details"
		>
		</my-card-text>

		<AppCustomName 
		v-if="shown_CustomName" 
		v-model="MY._settings_custom_name[id_link]"
		:save_setting="save_setting"
		:id_link="id_link"
		:active_card="active_boll_link" 
		/>

		<!-- //NOTE - Stats -->
		<AppWrapper v-if="shown_Stats">
			<AppWrapper gap="26"
				v-for="state in level_Filter_Arr(custom.stats)"
				:key="state"
			>
				<AppStats
					:title="state.name"
					:type="`${state.name}_base`"
					plus
					:numb="state.num"
					:active_card="active_boll_link"
          :select_list="select_list"
				/>
				<my-card-text v-if="state.details" :text_html="state.details" />
			</AppWrapper>
			<AppWrapper
				v-for="saving in level_Filter_Arr(custom.saving)"
				:key="saving"
			>
				<AppStats
					:title="saving"
					type="saving"
					plus
					:numb="Mastery"
					:active_card="active_boll_link"
          :select_list="select_list"
				/>
			</AppWrapper>
		</AppWrapper>

		<!-- //NOTE - Skilss -->
		<AppWrapper v-if="shown_Param_Arr(custom.skills)">
			<AppWrapper gap="26"
				v-for="skill in level_Filter_Arr(custom.skills)"
				:key="skill"
			>
				<AppSkills 
				:title="skill.name" 
				:numb="this[skill.num]"
				:active_card="active_boll_link"
        :select_list="select_list"
				:setting_filter="setting_filter"
				/>
				<my-card-text
					v-if="skill.details && setting_name == 'skills'"
					:text="skill.details"
				/>
			</AppWrapper>
		</AppWrapper>

		<!-- //NOTE - Skilss_Passive -->
		<AppWrapper v-if="shown_Param_Arr(custom.skills_passive)">
			<AppSkills
				v-for="skills_passive in level_Filter_Arr(custom.skills_passive)"
				:key="skills_passive"
				:title="skills_passive.name"
				:numb="skills_passive.num"
			/>
		</AppWrapper>

		<!-- //NOTE - Qualities -->
		<AppWrapper v-if="shown_Qualities">
			<my-attribute
				v-if="custom.hp_bonus"
				title="hp_bonus"
				:numb="hp_Bonus(custom)"
				plus
			/>
			<my-attribute
				v-for="qual in level_Filter_Arr(custom.qualities)"
				:key="qual"
				:title="qual.name"
				:numb="qual.num"
				:feet="qual.name == 'speed' || qual.name == 'vision_night'"
				:plus="qual.type == 'bonus'"
			/>
		</AppWrapper>

		<!-- //NOTE - Charges -->
		<AppWrapper v-if="shown_Param_Arr(custom.charges)">
			<AppCharges
				v-for="item in level_Filter_Arr(custom.charges)"
				:key="item"
				:charge="item"
			/>
		</AppWrapper>

		<!-- //NOTE - Proficiencies -->
			<AppWrapper v-if="shown_Proficiencies">
				<AppProficiencies 
          v-for="(val, name) in custom.proficiencies" 
          :key="name"
					:title="name"
					:arr_name="proficiencies_Arr(custom.proficiencies, name)"
					:active_card="active_boll_link"
          :select_list="select_list"
				/>
			</AppWrapper>

		<!-- //NOTE - Armor -->
		<AppWrapper gap="26" v-if="armors_Equip(custom.equipment).length !== 0">
			<ArmorEquip
				v-for="armor in armors_Equip(custom.equipment)"
				:key="armor"
				:armor="armor"
				select
			/>
		</AppWrapper>

		<!-- //NOTE - Fines -->
		<AppWrapper gap="8" v-if="shown_Param_Arr(custom.fines)">
			<AppFines
				v-for="item in level_Filter_Arr(custom.fines)"
				:key="item"
				:fines="item"
			/>
		</AppWrapper>

		<!-- //NOTE - Spells -->
		<AppWrapper gap="26" v-if="shown_Param_Arr(custom.spells)">
			<AppSpells
				v-for="item in level_Filter_Arr(custom.spells)"
				:key="item"
				:spell_obj="item"
				select
				:active_card="active_boll_link"
        :select_list="select_list"
			/>
		</AppWrapper>

		<!-- //NOTE - Weapon -->
		<AppWrapper gap="26" v-if="weapons_Equip(custom.equipment).length !== 0">
			<WeaponEquip
				v-for="weapon in weapons_Equip(custom.equipment)"
				:key="weapon"
				:weapon="weapon"
				select
			/>
		</AppWrapper>

		<!-- //NOTE - Invenory_Kit -->
		<AppWrapper
			v-if="
				packs_Equip(custom.equipment).length !== 0 ||
				inventory_Equip(custom.equipment).length !== 0 ||
        gold_Equip_Numb(custom.equipment)
			"
		>
			<KitEquip
				:packs="packs_Equip(custom.equipment)"
				:inventory="inventory_Equip(custom.equipment)"
        :gold="gold_Equip_Numb(custom.equipment)"
				no_gold_zero
				no_custom
			/>
		</AppWrapper>

		<!-- //NOTE - Settings -->
		<AppWrapper v-if="shown_Param_Arr(custom.settings)">
			<MyCusstomSetting
				v-for="item in level_Filter_Arr(custom.settings)"
				:key="item"
				:title="item.name"
				:select="select_Numb(item.select)"
				:sum="select_Sum(item)"
			>
			</MyCusstomSetting>
		</AppWrapper>

		<!-- //NOTE - Сondition -->
		<AppWrapper v-if="custom.condition">
			<div class="int-400 rare-text" v-html="t_Condition" />
		</AppWrapper>
	</AppCardWrapp>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";

import KitEquip from "@/components/equipment/KitEquip.vue";
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";
import ArmorEquip from "@/components/equipment/ArmorEquip.vue";
export default {
	name: "AppCustomCard",
	components: {
		KitEquip,
		WeaponEquip,
		ArmorEquip,
	},
	props: {
		setting_name: {
			type: String,
			default: null,
		},
		setting_filter: {
			type: String,
			default: null,
		},
		save_setting: {
			type: String,
			default: null,
		},
		id_link: {
			type: String,
			default: null,
		},
    select_list: {
			type: Array,
			default: [],
		},
		custom: {
			type: Object,
			default: null,
		},
		pass_boll_link: {
			type: Boolean,
			default: false,
		},
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
			"Mastery_x2",
			"level_Filter_Arr",
      "settings_Spells_List",
		]),
		...mapState(useProficienciesStore, ["proficiencies_Arr"]),
		...mapState(useEquipStore, ["item_Equip_Arr", "gold_Equip_Numb"]),
		...mapState(useStatsStore, ["stats_Saving_Arr"]),
		...mapState(useSkillsStore, ["skills_RC_Page_Name"]),
		...mapState(useQualitiesStore, ["hp_Bonus"]),

    shown_Proficiencies() {
      if(this.custom.proficiencies) {
        return Object.keys(this.custom.proficiencies).length !== 0
      } else {
        return false
      }
    },

		shown_CustomName() {
			return this.custom.hasOwnProperty('name_custom');
		},

		shown_Qualities() {
			return (
				this.custom.hp_bonus ||
				this.level_Filter_Arr(this.custom.qualities).length !== 0
			);
		},

		shown_Stats() {
			return (
				this.level_Filter_Arr(this.custom.saving).length !== 0 ||
				this.level_Filter_Arr(this.custom.stats).length !== 0
			);
		},

		packs_Equip: (stor) => (obj_arr) => {
			return stor.item_Equip_Arr(obj_arr, "inventory_packs");
		},

		inventory_Equip: (stor) => (obj_arr) => {
			return stor.item_Equip_Arr(obj_arr, "inventory");
		},

		weapons_Equip: (stor) => (obj_arr) => {
			return stor.item_Equip_Arr(obj_arr, "weapon");
		},

		armors_Equip: (stor) => (obj_arr) => {
			return stor.item_Equip_Arr(obj_arr, "armor");
		},

		shown_Param_Arr: (stor) => (arr) => {
			return stor.level_Filter_Arr(arr).length !== 0;
		},

		select_Numb: (stor) => (select) => {
			const lvl = stor.MY.level;
			return Array.isArray(select) ? select[lvl - 1] : select;
		},

		select_Sum: (stor) => (item) => {
      if(item.filter == "only_mastery") {
        return stor.skills_RC_Page_Name.length
      } else {
        return item.list ? item.list.length : stor.settings_Spells_List(item).length;
      }
		},

		t_Condition() {
			return this.t(this.custom.condition);
		},
	},
};
</script>

<style scoped>
</style>
