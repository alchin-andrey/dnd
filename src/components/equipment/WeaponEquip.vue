<template>
	<section v-if="blank_print" id="print_weapon">
		<div class="print-cell-pad">
      <div>
        <span>{{ print_Weapon_Name }}</span> 
        <span class="print-grey">{{ print_Weapon_Numb }}</span>
      </div>
      <div class="int-400-22-blank" v-if="print_Hand">
        <span class="int-400-22-blank">/ {{ t(print_Hand) }}</span>
      </div>
    </div>
		<div class="print-cell-pad">
      <div><span>{{ print_Aim_Range }}</span></div>
      <div class="int-400-22-blank" v-if="print_Hand"><span>{{ print_Aim_Range }}</span></div>
    </div>
		<div class="print-cell-pad">
      <my-attribute
				:numb="aim_Bonus_Numb"
				plus
				only_numb
			/>
      <my-attribute 
        class="int-400-22-blank"
        v-if="print_Hand" 
				:numb="aim_Bonus_Numb"
				plus
				only_numb
			/>
    </div>
		<div class="print-cell-pad">
      <my-attribute
        :numb="num_Hand_Param_Stule"
        :dice="dice_Hand_Param_Stule"
        :pls="damage_Bonus_Numb"
        only_numb
      />
      <div class="int-400-22-blank" v-if="print_Hand">
        <my-attribute
          v-if="print_Hand == 'damage_1_hand'"
          :numb="weapon[0].damage_1_hand_num"
					:dice="dice_1_Hand"
					:pls="damage_Bonus_Numb"
          only_numb
        />
        <my-attribute
          v-if="print_Hand == 'damage_2_hand'"
          :numb="weapon[0].damage_2_hand_num"
					:dice="dice_2_Hand"
					:pls="damage_Bonus_Numb"
          only_numb
        />
      </div>
    </div>

	</section>

	<section v-else id="site_weapon">
		<AppStripWrapp 
		:select="select"
		:dialog="dialogVisible"
		@clickFull="showDialog()"
		@clickSelect="showDialog()"
		:icon="!param_stule"
		>
			<div class="int-400 flex-col gap-4" :class="{ 'pas-param': passive }">
				<div class="int-700 f-lh-18" v-if="!param_stule">{{ t_Weapon_Name }}</div>
				<section v-if="param_stule">
					<my-attribute
						:title="t_Weapon_Name"
						:numb="num_Hand_Param_Stule"
						:dice="dice_Hand_Param_Stule"
						:pls="damage_Bonus_Numb"
						text_stule
					/>
				</section>
				<section class="flex-col gap-4" v-if="!param_stule">
					<my-attribute
						v-if="weapon[0].damage_1_hand_num"
						title="damage"
						type="damage_1_hand"
						:numb="weapon[0].damage_1_hand_num"
						:dice="dice_1_Hand"
						:pls="damage_Bonus_Numb"
					/>
					<my-attribute
						v-if="weapon[0].damage_2_hand_num"
						title="damage"
						type="damage_2_hand"
						:numb="weapon[0].damage_2_hand_num"
						:dice="dice_2_Hand"
						:pls="damage_Bonus_Numb"
					/>
				</section>
			</div>
		</AppStripWrapp>
		<AppDialog__Property v-model:show="dialogVisible">
			<section>
				<div class="int-700">{{ t_Weapon_Name }}</div>
				<div class="white-04 mr-t-4">{{ t_Weapon_Details }}</div>
				<div class="white-04 mr-t-15">{{ t_Weapon_Type }}</div>
			</section>

			<section class="flex-col gap-4">
				<my-attribute
					title="aim_bonus"
					:type="bonus_Type"
					:numb="aim_Bonus_Numb"
					plus
					dot
				/>
				<magic-attribute
					v-if="aim_Range_Shown_Min"
					title="aim_range"
					addition="MIN"
					:numb="weapon[0].range_min"
				/>
				<magic-attribute
					v-if="aim_Range_Shown_Max"
					title="aim_range"
					addition="MAX"
					:numb="weapon[0].range_max"
				/>
			</section>

			<section class="flex-col gap-4">
				<magic-attribute
					title="damage"
					:addition="weapon[0].damage_type"
					not_dot
				/>
				<my-attribute
					v-if="weapon[0].damage_1_hand_num"
					title="damage_1_hand"
					:numb="weapon[0].damage_1_hand_num"
					:dice="dice_1_Hand"
					:pls="damage_Bonus_Numb"
					dot
				/>
				<my-attribute
					v-if="weapon[0].damage_2_hand_num"
					title="damage_2_hand"
					:numb="weapon[0].damage_2_hand_num"
					:dice="dice_2_Hand"
					:pls="damage_Bonus_Numb"
					dot
				/>
			</section>

			<section class="flex-col gap-4" v-if="shown_ACW">
				<my-attribute
					v-if="weapon[0].ammunition"
					title="ammunition"
					:unit="weapon[0].ammunition"
					dot
				/>
				<my-attribute
					v-if="weapon[0].cost"
					title="cost"
					:price="weapon[0].cost"
					dot
				/>
				<my-attribute
					v-if="weapon[0].weight"
					title="weight"
					:numb="weapon[0].weight"
					unit="kg"
					dot
				/>
			</section>
		</AppDialog__Property>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

export default {
	name: "WeaponEquip",
	data: () => ({
		dialogVisible: false,
	}),
	props: {
		weapon: {
			type: Array,
			default: null,
		},
		select: {
			type: Boolean,
			default: false,
		},
		passive: {
			type: Boolean,
			default: false,
		},
		param_stule: {
			type: Boolean,
			default: false,
		},
		blank_print: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "Mastery", "class_Specials_Filter_Lvl"]),
		...mapState(useProficienciesStore, ["proficiencies_Page_Arr"]),
		...mapState(useStatsStore, ["stats_Mod"]),

		shown_ACW() {
			return (
				this.weapon[0].ammunition ||
				this.weapon[0].cost ||
				this.weapon[0].weight
			);
		},

		t_Equip_Name: (state) => (item) => {
			const name = state.T(item[0].name);
			const namb = item[1];
			return namb > 1 ? `${name} × ${namb}` : name;
			// return str[0].toUpperCase() + str.slice(1);
		},

		print_Weapon_Name() {
			return this.T(this.weapon[0].name);
		},

		print_Weapon_Numb() {
			const namb = this.weapon[1];
			return namb > 1 ? ` × ${namb}` : null;
		},

    print_Hand() {
			const num_hand_1 = this.weapon[0].damage_1_hand_num;
      const dice_hand_1 = this.weapon[0].damage_1_hand_dice;
      const summ_hand_1 = num_hand_1 + dice_hand_1;

			const num_hand_2 = this.weapon[0].damage_2_hand_num;
			const dice_hand_2 = this.weapon[0].damage_2_hand_dice;
      const summ_hand_2 = num_hand_2 + dice_hand_2;

      if (summ_hand_1 && summ_hand_2 && (summ_hand_1 !== summ_hand_2)) {
        return summ_hand_1 > summ_hand_2 ? "damage_2_hand" : "damage_1_hand";
      } else {
        return null;
      }
		},
    
    print_Aim_Range() {
      const min = this.weapon[0].range_min;
      const max = this.weapon[0].range_max;
      return max ? `${min}-${max}` : min;
    },

		t_Weapon_Name() {
			return this.t_Equip_Name(this.weapon);
		},

		t_Weapon_Details() {
			return this.t(this.weapon[0].details);
		},

		t_Weapon_Damage() {
			return this.t(this.weapon[0].damage_type);
		},

		t_Weapon_Type() {
			let arr = [];

			const main_type = this.weapon[0].type[0].name;
			main_type == "weapons_simple" ? arr.push(main_type) : null; //Простое
			main_type == "weapons_military" ? arr.push(main_type) : null; //Военное

			this.weapon[0].melee ? arr.push("melee") : arr.push("ranged"); //Ближнее

			const throwing_numb = this.weapon[0].throwing;
			const t_throwing_full = `${this.t("throwing")} (${this.t(
				"starting_from"
			)} ${throwing_numb}${this.t("f")})`;
			throwing_numb ? arr.push(t_throwing_full) : null; //Метательное

			this.weapon[0].loading ? arr.push("loading") : null; //Перезаряжающееся

			const heaviness = this.weapon[0].heaviness;
			heaviness != "weapon_medium" ? arr.push(heaviness) : null; //Тяжелое

			this.weapon_Finesse ? arr.push("weapon_finesse") : null; //Фехтовальное
			// this.weapon[0].finesse ? arr.push("weapon_finesse") : null; //Фехтовальное

			const weapon_type = this.weapon[0].type;

			for (let i in weapon_type) {
				if (i != 0) {
					arr.push(weapon_type[i].name);
				}
			} //Остальное

			let t_arr = [];
			for (let i in arr) {
				t_arr.push(this.t(arr[i]));
			}
			return t_arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
		},

		aim_Range_Shown_Min() {
			const min = this.weapon[0].range_min;
			const max = this.weapon[0].range_max;
			return min && max;
		},

		aim_Range_Shown_Max() {
			const max = this.weapon[0].range_max;
			return max;
		},

		weapon_Finesse() {
			const finesse = this.weapon[0].finesse;
			const weapon_spec = this.class_Specials_Filter_Lvl("weapon");
			const finesse_spec = weapon_spec?.some((el) => el?.finesse == true);
			return finesse_spec ? finesse_spec : finesse;
		},

		bonus_Type() {
			// const finesse = this.weapon[0].finesse; //Фехтовальное
			const finesse = this.weapon_Finesse; //Фехтовальное
			const melee = this.weapon[0].melee; //Ближнее

			const STR = this.stats_Mod("strength");
			const DEX = this.stats_Mod("dexterity");

			let res = null;
			if (finesse) {
				res = STR >= DEX ? "strength" : "dexterity";
			} else if (melee) {
				res = "strength";
			} else {
				res = "dexterity";
			}
			return res;
		},

		mastery_Bonus() {
			// const char_type = this.proficiencies_RC_Params_All("weapons");
			const char_type = this.proficiencies_Page_Arr("weapons");
			let type_arr = [];
			const weapon_type = this.weapon[0].type;
			for (let i in weapon_type) {
				type_arr.push(weapon_type[i].name);
			}

			let mastery = false;
			type_arr.forEach((el) =>
				char_type.includes(el) ? (mastery = true) : null
			);
			return mastery ? this.Mastery : null;
		},

		aim_Bonus_Numb() {
			const mastery = this.mastery_Bonus;
			const type_mod = this.stats_Mod(this.bonus_Type);

			const weapon_ranged = this.class_Specials_Filter_Lvl("weapon_ranged");

			let aim_bonus = 0;
			weapon_ranged.forEach((el) => (aim_bonus += el.aim_bonus));
			return type_mod + mastery + aim_bonus;
		},

		damage_Bonus_Numb() {
			return this.stats_Mod(this.bonus_Type);
		},

		num_Hand_Param_Stule() {
			const num_hand_1 = this.weapon[0].damage_1_hand_num;
			const num_hand_2 = this.weapon[0].damage_2_hand_num;
			const res = num_hand_1 > num_hand_2 ? num_hand_1 : num_hand_2;
			return res;
		},

		dice_Hand_Param_Stule() {
			const dice_hand_1 = this.dice_1_Hand;
			const dice_hand_2 = this.dice_2_Hand;
			return dice_hand_1 > dice_hand_2 ? dice_hand_1 : dice_hand_2;
		},

		dice_Hand: (store) => (dice_hand) => {
			const weapon_spec = store.class_Specials_Filter_Lvl("weapon");
			let dice_foo = null;
			weapon_spec.forEach((el) => {
				if (el.dice_foo) {
					dice_foo = Math.max(dice_foo, store[el.dice_foo](dice_hand));
				}
			});
			return dice_foo ? dice_foo : dice_hand;
		},

		dice_1_Hand() {
			return this.dice_Hand(this.weapon[0].damage_1_hand_dice);
		},

		dice_2_Hand() {
			return this.dice_Hand(this.weapon[0].damage_2_hand_dice);
		},

		Dic_14_56_118_1710_Lvl() {
			const lvl_arr = [1, 5, 11, 17];
			const kof_arr = [4, 6, 8, 10];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_14_Lvl() {
			const lvl_arr = [1];
			const kof_arr = [4];
			return this.kof_Foo(lvl_arr, kof_arr);
		},

		Dic_14_56_118_1710_Lvl_or_Default: (state) => (dice_hand) => {
			const foo_dice = state.Dic_14_56_118_1710_Lvl;
			return foo_dice > dice_hand ? foo_dice : dice_hand;
		},

		Dic_14_Lvl_or_Default: (state) => (dice_hand) => {
			const foo_dice = state.Dic_14_Lvl;
			return foo_dice > dice_hand ? foo_dice : dice_hand;
		},

		kof_Foo: (state) => (lvl_arr, kof_arr) => {
			!kof_arr ? (kof_arr = lvl_arr) : null;
			let lvl = state.MY.level;
			let kof = null;
			for (let i = 0; i < lvl_arr.length; i++) {
				if (lvl < lvl_arr[i]) {
					break;
				}
				kof = kof_arr[i];
			}
			return kof;
		},
	},

	methods: {
		showDialog() {
			this.dialogVisible = true;
		}
	}
};
</script>

<style scoped>
.print-cell-pad {
  padding: var(--px-4) var(--px-12) var(--px-8);
}
</style>
