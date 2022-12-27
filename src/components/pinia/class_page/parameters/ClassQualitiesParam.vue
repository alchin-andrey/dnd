<template>
		<!-- qualities-stats -->
		<my-wrapper hr>
      <my-attribute title="armor_class" :type="armor_Name" :numb="armor_Numb"></my-attribute>
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
			<!-- <my-attribute
        v-for="(val, name) in MY.qualities"
        :key="name"
        :title="name"
        :numb="qualities_Numb_Class(name)"
        feet
      ></my-attribute> -->
		</my-wrapper>
		<!-- qualities-stats -->
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassQualitiesParam",
	computed: {
		// STORE
		...mapState(useMYStore, ["MY"]),
		// GETTERS
    ...mapState(useMYStore, ["Mastery", "class_Specials"]),
		...mapState(useStatsStore, ["stats_Mod"]),

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

		qualities_Find(state) {
			return (name) => state.MY.class.qualities?.find((item) => item[name]);
		},

		qualities_Numb_Class: (state) => (name) => {
			let numb_RE = state.qualities_Numb_RE(name);
			let qual_obj = state.qualities_Find(`${name}_bonus`);
			let numb_bonus = 0;
			let lvl = state.MY.level;
			if (qual_obj) {
				let qual_bonus = qual_obj[`${name}_bonus`];
				let qual_lvl = qual_obj.level;
				lvl >= qual_lvl ? (numb_bonus = qual_bonus) : 0;
			}
			return numb_RE + numb_bonus;
		},

    equipments_Level_Arr() {
			let lvl = this.MY.level;
			let arr = this.MY.class.equipment?.filter((el) => el.level <= lvl);
			return arr ? arr : [];
		},

    armors_Level_Arr() {
			let arr = [];
			this.equipments_Level_Arr?.forEach((el) =>
				el.armor?.forEach((armor) => arr.push(armor))
			);
			return arr;
    },

    armors_Element() {
			let arr = null;
			this.equipments_Level_Arr?.forEach((el) =>
				el.armor?.forEach(armor => arr = armor[0])
			);
			return arr;
    },

    armor_Name() {
      let armor = this.armors_Element
      return armor ? armor.name : null;
    },

    armor_Numb() {
      const armor = this.armors_Element;
      
      let armor_default = 10;
			const dex_mod = this.stats_Mod("dexterity");
      const dex_mod_max2 = dex_mod > 2 ? 2 : null;

      const medium = armor?.type[0].name == "armor_medium";
      medium ? armor_default += dex_mod_max2 : armor_default += dex_mod;

      const armor_class = armor ? armor.armor_class : null;
      const armor_bonus = armor ? armor.armor_bonus : null;
      armor_default += armor_bonus;
      armor_default += this.armor_Bonus_Specials;

			return armor_class ? armor_class : armor_default;
		},

    armor_Bonus_Specials() {
      let bonus = null;
      const lvl = this.MY.level;
      const specials = this.class_Specials("armor_bonus");
			specials?.forEach(el => 
        el.level <= lvl 
        ? bonus += this[el.foo]
        : null);
      return bonus;
    },

    Num_CON() {
      let mod = this.stats_Mod("constitution");
      return mod < 0 ? 0 : mod;
    },
	},
};
</script>
