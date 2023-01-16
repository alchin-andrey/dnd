<template>
  <my-wrapper :hr="hr">
		<my-attribute
			title="armor_class"
			:type="armor_Name"
			:numb="armor_Numb"
		></my-attribute>
		<my-attribute title="hp_bonus" :numb="hp_Max"></my-attribute>
		<my-attribute
			title="hp_dice"
			:numb="MY.level"
			:dice="MY.class.hp_dice"
		></my-attribute>
		<my-attribute
			v-if="initiative_Numb"
			title="initiative"
			:numb="initiative_Numb"
			plus
		></my-attribute>
		<my-attribute
			v-if="qualities_Numb_Class('speed')"
			title="speed"
			:numb="qualities_Numb_Class('speed')"
			feet
		></my-attribute>
		<my-attribute
			v-if="qualities_Numb_Class('vision_night')"
			title="vision_night"
			:numb="qualities_Numb_Class('vision_night')"
			feet
		></my-attribute>
  </my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useEquipStore } from "@/stores/modules/EquipStore";
export default {
	name: "ClassParam__Qualities",
  props: {
    hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		// STORE
		...mapState(useMYStore, ["MY", "level_Filter"]),
		// GETTERS
		...mapState(useMYStore, ["Mastery", "class_Specials_Filter_Lvl"]),
		...mapState(useStatsStore, ["stats_Mod"]),
    ...mapState(useEquipStore, ["armor_Equip_Element"]),

		hp_Bonus() {
			if (this.MY.ethnos.hp_bonus) {
				let increm_1 = this.MY.ethnos.hp_bonus[0];
				let increm_2 = this.MY.ethnos.hp_bonus[1];
				let level = Math.ceil(this.MY.level / increm_1);
				return level * increm_2;
			} else {
				return 0;
			}
		},

		hp_Max() {
			let hp_dice = this.MY.class.hp_dice;
			let x = Math.ceil(hp_dice / 2) + 1;
			let con_mod = this.stats_Mod("constitution");
			let lvl = this.MY.level;
			let hp_bonus = this.hp_Bonus;
			return hp_dice + con_mod + (x + con_mod) * (lvl - 1) + hp_bonus;
		},

		initiative_Numb() {
			return this.stats_Mod("dexterity");
		},

		regen_Numb() {
			let hp_dice = this.MY.class.hp_dice;
			let lvl = this.MY.level;
			return hp_dice * lvl;
		},

		qualities_Numb_RE: (state) => (name) => {
			let summ = 0;
			let race_numb = state.MY.race.qualities?.[name];
			let ethnos_numb = state.MY.ethnos.qualities?.[name];
			race_numb ? (summ += race_numb) : 0;
			ethnos_numb ? (summ += ethnos_numb) : 0;
			return summ;
		},

		// qualities_Find(state) {
		// 	return (name) => state.MY.class.qualities?.find((item) => item[name]);
		// },

		qualities_Filter(state) {
			return (name) => state.MY.class.qualities?.filter((item) => item[name]);
		},

		qualities_Numb_Class: (state) => (name) => {
			const numb_RE = state.qualities_Numb_RE(name);

			let numb_bonus = 0;
			const lvl = state.MY.level;
			const qual_arr = state.qualities_Filter(`${name}_bonus`);
			qual_arr?.forEach((el) =>
				el.level <= lvl ? (numb_bonus += el[`${name}_bonus`]) : null
			);
			return numb_RE + numb_bonus;
		},

		armor_Name() {
			let armor = this.armor_Equip_Element;
			return armor ? armor.name : null;
		},

		armor_Numb() {
			const armor = this.armor_Equip_Element;

			let armor_default = 10;
			const dex_mod = this.stats_Mod("dexterity");
			const dex_mod_max2 = dex_mod > 2 ? 2 : null;

			const medium = armor?.type[0].name == "armor_medium";
			medium ? (armor_default += dex_mod_max2) : (armor_default += dex_mod);

			const armor_class = armor ? armor.armor_class : null;
			const armor_bonus = armor ? armor.armor_bonus : null;
			armor_default += armor_bonus;
			armor_default += this.armor_Bonus_Specials;

			return armor_class ? armor_class : armor_default;
		},

		armor_Bonus_Specials() {
			let bonus = null;
      const specials = this.class_Specials_Filter_Lvl("armor_bonus");
      specials?.forEach((el) => bonus += this[el.foo]);
			return bonus;
		},

		Num_CON() {
			let mod = this.stats_Mod("constitution");
			return mod < 0 ? 0 : mod;
		},

		Num_WIS() {
			let mod = this.stats_Mod("wisdom");
			return mod < 0 ? 0 : mod;
		},
	},
};
</script>
