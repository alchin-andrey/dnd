<template>
  <my-wrapper :hr="hr">
		<my-attribute
			title="armor_class"
			:type="armor_Name"
			:numb="armor_Numb"
		/>
		<my-attribute 
    title="hp_bonus" 
    :numb="hp_Max" 
    />
		<my-attribute
			title="hp_dice"
			:numb="MY.level"
			:dice="MY.class.hp_dice"
		/>
		<my-attribute
			v-if="initiative_Numb"
			title="initiative"
			:numb="initiative_Numb"
			plus
		/>
		<my-attribute
			v-if="qualities_Numb_Class('speed')"
			title="speed"
			:numb="qualities_Numb_Class('speed')"
			feet
		/>
		<my-attribute
			v-if="qualities_Numb_Class('vision_night')"
			title="vision_night"
			:numb="qualities_Numb_Class('vision_night')"
			feet
		/>
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
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useMYStore, [
      "Mastery",
      "class_Specials_Filter_Lvl",
      "level_Filter_Arr",
      "сustomm_Settings_Class_Arr",
      "filter_Custom_Class_Lvl",
    ]),
		...mapState(useStatsStore, ["stats_Mod"]),
    ...mapState(useEquipStore, ["armor_Equip_Element"]),

		hp_Bonus: (store) => (obj) => {
			if (obj.hp_bonus) {
				let increm_1 = obj.hp_bonus[0];
				let increm_2 = obj.hp_bonus[1];
				let level = Math.ceil(store.MY.level / increm_1);
				return level * increm_2;
			} else {
				return 0;
			}
		},

		hp_Max() {
			const hp_dice = this.MY.class.hp_dice;
			const x = Math.ceil(hp_dice / 2) + 1;
			const con_mod = this.stats_Mod("constitution");
			const lvl = this.MY.level;

      let hp_bonus = 0;
			hp_bonus += this.hp_Bonus(this.MY.ethnos);
      this.сustomm_Settings_Class_Arr.forEach(el => {
        el.select_list.forEach(sub_el => {
          hp_bonus += this.hp_Bonus(sub_el);
        });
      });
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

		qualities_Filter: (store) => (arr, name) => {
      let lvl_arr = store.level_Filter_Arr(arr);
			return lvl_arr.filter((item) => item[name]);
		},

    qualities_Bonus_Numb: (store) => (arr, name) => {
      let numb_bonus = 0;
			const qual_arr = store.qualities_Filter(arr, `${name}_bonus`);
			qual_arr?.forEach((el) => numb_bonus += el[`${name}_bonus`]);
      return numb_bonus;
    },

		qualities_Numb_Class: (store) => (name) => {
			const numb_RE = store.qualities_Numb_RE(name);
			const numb_class_bonus = store.qualities_Bonus_Numb(store.MY.class?.qualities, name);
      
      const custom = store.filter_Custom_Class_Lvl("qualities")
			const numb_custom_bonus = store.qualities_Bonus_Numb(custom, name);
			return numb_RE + numb_class_bonus + numb_custom_bonus;
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
