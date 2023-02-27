<template>
	<my-selection-card no_blur :active_boll_link="active_boll_link">
		<!-- //NOTE - Text -->
		<my-card-text
			v-if="custom.name || custom.details"
			:title="custom.name"
			:text_html="custom.details"
		>
		</my-card-text>

		<!-- //NOTE - Stats -->
		<my-wrapper v-if="shown_Stats">
			<my-wrapper
				gap_26
				v-for="state in level_Filter_Arr(custom.stats)"
				:key="state"
			>
				<AppStats
					:title="state.name"
					:type="`${state.name}_base`"
					plus
					:numb="state.num"
					:active_card="active_boll_link"
				/>
				<my-card-text v-if="state.details" :text_html="state.details" />
			</my-wrapper>
			<my-wrapper
				v-for="saving in level_Filter_Arr(custom.saving)"
				:key="saving"
			>
				<AppStats
					:title="saving"
					type="saving"
					plus
					:numb="Mastery"
					:active_card="active_boll_link"
				/>
			</my-wrapper>
		</my-wrapper>

		<!-- //NOTE - Skilss -->
		<my-wrapper v-if="shown_Param_Arr(custom.skills)">
			<my-wrapper
				gap_26
				v-for="skill in level_Filter_Arr(custom.skills)"
				:key="skill"
			>
				<AppSkills :title="skill.name" :numb="this[skill.num]" />
				<my-card-text
					v-if="skill.details && setting_name == 'skills'"
					:text_html="skill.details"
				/>
			</my-wrapper>
		</my-wrapper>

		<!-- //NOTE - Skilss_Passive -->
		<my-wrapper v-if="shown_Param_Arr(custom.skills_passive)">
			<AppSkills
				v-for="skills_passive in level_Filter_Arr(custom.skills_passive)"
				:key="skills_passive"
				:title="skills_passive.name"
				:numb="skills_passive.num"
			/>
		</my-wrapper>

		<!-- //NOTE - Qualities -->
		<my-wrapper v-if="shown_Qualities">
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
		</my-wrapper>

		<!-- //NOTE - Charges -->
		<my-wrapper v-if="shown_Param_Arr(custom.charges)">
			<AppCharges
				v-for="item in level_Filter_Arr(custom.charges)"
				:key="item"
				:charge="item"
			/>
		</my-wrapper>

		<!-- //NOTE - Proficiencies -->
			<my-wrapper v-if="shown_Proficiencies">
				<AppProficiencies 
          v-for="(val, name) in custom.proficiencies" 
          :key="name"
					:title="name"
					:arr_name="proficiencies_Arr(custom.proficiencies, name)"
					:active_card="active_boll_link"
				/>
			</my-wrapper>

		<!-- //NOTE - Armor -->
		<my-wrapper v-if="armors_Equip(custom.equipment).length !== 0" gap_26>
			<ArmorEquip
				v-for="armor in armors_Equip(custom.equipment)"
				:key="armor"
				:armor="armor"
				select
			/>
		</my-wrapper>

		<!-- //NOTE - Fines -->
		<my-wrapper v-if="shown_Param_Arr(custom.fines)" gap_8>
			<AppFines
				v-for="item in level_Filter_Arr(custom.fines)"
				:key="item"
				:fines="item"
			/>
		</my-wrapper>

		<!-- //NOTE - Spells -->
		<my-wrapper v-if="shown_Param_Arr(custom.spells)" gap_26>
			<AppSpells
				v-for="item in level_Filter_Arr(custom.spells)"
				:key="item"
				:spell_obj="item"
				select
				:active_card="active_boll_link"
			/>
		</my-wrapper>

		<!-- //NOTE - Weapon -->
		<my-wrapper v-if="weapons_Equip(custom.equipment).length !== 0" gap_26>
			<WeaponEquip
				v-for="weapon in weapons_Equip(custom.equipment)"
				:key="weapon"
				:weapon="weapon"
				select
			/>
		</my-wrapper>

		<!-- //NOTE - Invenory_Kit -->
		<my-wrapper
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
			/>
		</my-wrapper>

		<!-- //NOTE - Settings -->
		<my-wrapper v-if="shown_Param_Arr(custom.settings)">
			<MyCusstomSetting
				v-for="item in level_Filter_Arr(custom.settings)"
				:key="item"
				:title="item.name"
				:select="select_Numb(item.select)"
				:sum="select_Sum(item)"
			>
			</MyCusstomSetting>
		</my-wrapper>

		<!-- //NOTE - Сondition -->
		<my-wrapper v-if="custom.condition">
			<div class="rare-text int-400" v-html="t_Condition" />
		</my-wrapper>
	</my-selection-card>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";

import KitEquip from "@/components/equipment/KitEquip.vue";
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";
import ArmorEquip from "@/components/equipment/ArmorEquip.vue";
export default {
	name: "AppCusstomCard",
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
		custom: {
			type: Object,
			default: null,
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
		...mapState(useQualitiesStore, ["hp_Bonus"]),

    shown_Proficiencies() {
      if(this.custom.proficiencies) {
        return Object.keys(this.custom.proficiencies).length !== 0
      } else {
        return false
      }
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
			return item.list ? item.list.length : stor.settings_Spells_List(item).length;
		},

		t_Condition() {
			return this.t(this.custom.condition);
		},
	},
	watch: {
		active_boll_link: {
			handler: function (val, oldVal) {
				if (val == true) {
					this.$emit("clickOneMore", this.custom);
				}
			},
			immediate: true,
		},
	},

  methods: {
  }
};
</script>

<style scoped>
.rare-text {
	color: #ffc93d;
}
</style>
