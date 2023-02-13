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
		<my-wrapper v-if="shown_Param_Arr(custom.stats)">
      <my-wrapper
				v-for="saving in level_Filter_Arr(custom.saving)"
				:key="saving"
			>
      <my-attribute
					:title="saving"
					type="saving"
					plus
					:numb="Mastery"
          save_bool
				/>
			</my-wrapper>
			<my-wrapper
				gap_26
				v-for="state in level_Filter_Arr(custom.stats)"
				:key="state"
			>
				<my-attribute
					:title="state.name"
					:type="`${state.name}_base`"
					plus
					:numb="state.num"
					:save="stats_Saving_Arr"
				/>
				<my-card-text v-if="state.details" :text_html="state.details" />
			</my-wrapper>
		</my-wrapper>

		<!-- //NOTE - Skilss -->
		<my-wrapper v-if="shown_Param_Arr(custom.skills)">
			<my-wrapper
				gap_26
				v-for="skill in level_Filter_Arr(custom.skills)"
				:key="skill"
			>
				<AppSkills :title="skill.name" :numb="this[skill.num]" save />
				<my-card-text v-if="skill.details" :text_html="skill.details" />
			</my-wrapper>
		</my-wrapper>

		<!-- //NOTE - Qualities -->
		<my-wrapper v-if="shown_Qualities">
			<my-attribute
				v-if="custom.hp_bonus"
				title="hp_bonus"
				:numb="hp_Bonus(custom.hp_bonus[0], custom.hp_bonus[1])"
				plus
			/>
			<my-attribute
				v-for="item in speed_Bonus_True"
				:key="item"
				title="speed"
				:numb="item.speed_bonus"
				plus
				feet
			/>
			<my-attribute
				v-if="vision_Night_Numb"
				title="vision_night"
				:numb="vision_Night_Numb"
				feet
			/>
		</my-wrapper>
    
    <!-- //NOTE - Qualities_#2 -->
    <my-wrapper v-if="shown_Param_Arr(custom.qualities)">
			<my-attribute
				v-for="qual in level_Filter_Arr(custom.qualities)"
				:key="qual"
				:title="qual.name"
        :numb="qual.num"
        :feet="qual.name == 'speed'"
        plus
			/>
		</my-wrapper>

		<!-- //NOTE - Charges -->
		<my-wrapper v-if="shown_Param_Arr(custom.charges)">
			<my-charges
				v-for="item in level_Filter_Arr(custom.charges)"
				:key="item"
				:charge="item"
			>
			</my-charges>
		</my-wrapper>

		<!-- //NOTE - Proficiencies -->
		<my-wrapper v-if="custom.proficiencies">
			<my-inventory
				v-for="(val, name) in custom.proficiencies"
				:key="name"
				:title="name"
				:item="proficiencies_Arr(custom.proficiencies, name)"
			>
			</my-inventory>
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
			<my-spell-text
				v-for="item in level_Filter_Arr(custom.spells)"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
				select
			>
			</my-spell-text>
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

		<!-- //NOTE - Invenory -->
		<my-wrapper
			v-if="
				packs_Equip(custom.equipment).length !== 0 ||
				inventory_Equip(custom.equipment).length !== 0
			"
		>
			<KitEquip
				:packs="packs_Equip(custom.equipment)"
				:inventory="inventory_Equip(custom.equipment)"
			/>
		</my-wrapper>

		<!-- //NOTE - Settings -->
		<my-wrapper v-if="custom.settings">
			<MyCusstomSetting
				v-for="item in custom.settings"
				:key="item"
				:title="item.name"
				:select="select_Numb(item.select)"
				:sum="select_Sum(item.list)"
			>
			</MyCusstomSetting>
		</my-wrapper>

    		<!-- //NOTE - Сondition -->
		<my-wrapper v-if="custom.condition">
      <div class="rare-text int-400" v-html="t_Condition"/>
		</my-wrapper>
	</my-selection-card>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
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
		]),
		...mapState(useProficienciesStore, ["proficiencies_Arr"]),
		...mapState(useEquipStore, ["item_Equip_Arr"]),
		...mapState(useStatsStore, ["stats_Saving_Arr"]),

		speed_Bonus_True() {
			const qualities = this.level_Filter_Arr(this.custom.qualities);
			const speed_bonus_arr = qualities.filter(
				(el) => el.speed_bonus && el.show
			);
			return speed_bonus_arr;
		},

		vision_Night_Numb() {
			const qualities = this.level_Filter_Arr(this.custom.qualities);
			const vision_night = qualities.filter((el) => el.vision_night);
			let numb_MAX = 0;
			vision_night.forEach(
				(el) => (numb_MAX = Math.max(numb_MAX, el.vision_night))
			);
			return numb_MAX;
		},

		shown_Qualities() {
			return (
				this.custom.hp_bonus ||
				this.speed_Bonus_True.length !== 0 ||
				this.vision_Night_Numb
			);
		},

		shown_Stats() {
			return (
				this.level_Filter_Arr(custom.saving).length !== 0 ||
				this.level_Filter_Arr(custom.stats).length !== 0
			);
		},

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

    t_Condition() {
      return this.t(this.custom.condition);
    },
	},
  watch: {
    active_boll_link: {
      handler: function(val, oldVal) {
        if(val) {
        this.$emit('clickOneMore', this.custom)
        }
      },
      immediate: true
    }
}, 
};
</script>

<style scoped>

.rare-text {
  color: #ffc93d;
}

</style>
