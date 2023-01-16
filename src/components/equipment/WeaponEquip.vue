<template>
	<div
		class="flex_weapon"
		@mouseover="hoverIn_Full()"
		@mouseleave="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="side_stripe"></div>
		<div class="int-400 flex_col" :class="{ passive: passive }">
			<div>
				<div class="flex_title">
					<div class="title h_18">{{ t_Weapon_Name }}</div>
					<img
						class="icon"
						src="@/assets/img/icon/arrow_right_small.svg"
						alt="arrow"
						@mouseover="hoverIn_Select()"
						@mouseleave="hoverOut()"
						@click="showDialog_Select()"
					/>
				</div>
			</div>
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
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">
		<my-wrapper>
			<div class="int-700">{{ t_Weapon_Name }}</div>
			<div class="text gray_4">{{ t_Weapon_Details }}</div>
			<div class="weapon_type gray_4">{{ t_Weapon_Type }}</div>
		</my-wrapper>

		<my-wrapper>
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
		</my-wrapper>

		<my-wrapper>
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
		</my-wrapper>
		<my-wrapper v-if="shown_ACW">
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
		</my-wrapper>
	</my-dialog-spell>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useProficienciesStore } from "@/stores/modules/ProficienciesStore";

export default {
	name: "WeaponEquip",
	data() {
		return {
			dialogVisible: false,
		};
	},
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
	},
	computed: {
		...mapState(useMYStore, ["MY", "Mastery", "class_Specials_Filter_Lvl"]),
		...mapState(useProficienciesStore, ["proficiencies_Arr_All"]),
		...mapState(useStatsStore, ["stats_Mod"]),

    shown_ACW() {
      return this.weapon[0].ammunition ||
      this.weapon[0].cost ||
      this.weapon[0].weight
    },

		t_Equip_Name: (state) => (item) => {
			const name = state.t(item[0].name);
			const namb = item[1];
			let str = namb > 1 ? `${name} x ${namb}` : name;
			return str[0].toUpperCase() + str.slice(1);
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
				"from"
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
      const finesse_spec = weapon_spec?.some((el) =>  el?.finesse == true);
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
			const char_type = this.proficiencies_Arr_All("weapons");
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
			return type_mod + mastery;
		},

		damage_Bonus_Numb() {
			return this.stats_Mod(this.bonus_Type);
		},

    dice_Hand: (state) => (dice_hand) => {
      const weapon_spec = state.class_Specials_Filter_Lvl("weapon");
      let dice_foo = null;
      weapon_spec?.forEach((el) => el.dice_foo ? dice_foo = state[el.dice_foo](dice_hand) : null);
      return dice_foo ? dice_foo : dice_hand;
    },

    dice_1_Hand() {
      return this.dice_Hand(this.weapon[0].damage_1_hand_dice);
    },

    dice_2_Hand() {
      return this.dice_Hand(this.weapon[0].damage_2_hand_dice);
    },

    Dic_MonkMartial() {
      const lvl_arr = [1, 5, 11, 17];
			const kof_arr = [4, 6, 8, 10];
      return this.kof_Foo(lvl_arr, kof_arr);
		},

    Dic_MonkMartial_or_Default: (state) => (dice_hand) => {
      // const dice_hand = this.weapon[0].damage_1_hand_dice;
      const foo_dice = state.Dic_MonkMartial
      return foo_dice > dice_hand ? foo_dice : dice_hand;
    },

    kof_Foo: (state) => (lvl_arr, kof_arr) => {
      !kof_arr ? kof_arr = lvl_arr : null;
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

	watch: {
		dialogVisible(val) {
			if (val === false) {
				this.$refs.stripe.classList.remove("active");
			}
		},
	},
	methods: {
		hoverIn_Select() {
			if (this.select) {
				this.$refs.stripe.classList.add("active");
			}
		},
		hoverOut() {
			if (!this.dialogVisible) {
				this.$refs.stripe.classList.remove("active");
			}
		},
		hoverIn_Full() {
			if (!this.select) {
				this.$refs.stripe.classList.add("active");
			}
		},
		showDialog_Full() {
			if (!this.select) {
				this.dialogVisible = true;
			}
		},

		showDialog_Select() {
			this.dialogVisible = true;
		},
	},
};
</script>

<style scoped>
.flex_weapon {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	cursor: pointer;
	/* cursor: url('@/assets/img/icon/cursor_magic.png'), pointer; */
}

.flex_col {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px 0;
	/*flex: 1 1 auto;*/
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 4px;
}

.side_stripe {
	min-width: 4px;
	min-height: 100%;
	background: rgba(255, 255, 255, 0.2);
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.active {
	background: #ffffff;
}

.h_18 {
	height: 18px;
}

.title {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	display: flex;
	align-items: center;
	white-space: pre;
}

.text {
	white-space: pre-wrap;
}

.title::first-letter {
	text-transform: uppercase;
	font-size: 130%;
}

.weapon_type {
	margin-top: 12px;
}

.gray_2 {
	color: rgba(255, 255, 255, 0.2);
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.hr {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

.passive {
	opacity: 0.2;
	/* cursor: auto; */
}
</style>
