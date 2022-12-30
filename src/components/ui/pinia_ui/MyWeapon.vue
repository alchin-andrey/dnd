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
				:dice="weapon[0].damage_1_hand_dice"
			/>
			<my-attribute
				v-if="weapon[0].damage_2_hand_num"
				title="damage"
				type="damage_2_hand"
				:numb="weapon[0].damage_2_hand_num"
				:dice="weapon[0].damage_2_hand_dice"
			/>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">
		<my-wrapper>
			<div class="int-700">{{ t_Weapon_Name }}</div>
			<div class="gray_4">{{ t_Weapon_Details }}</div>
			<div class="weapon_type gray_4">{{ t_Weapon_Type }}</div>
		</my-wrapper>

		<my-wrapper>
			<my-attribute title="aim_bonus" :numb="6" plus />
			<my-attribute title="aim_range" :numb="weapon[0].range_min" feet dot />
			<my-attribute title="aim_range" :numb="weapon[0].range_max" feet dot />
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
				:dice="weapon[0].damage_1_hand_dice"
				dot
			/>
			<my-attribute
				v-if="weapon[0].damage_2_hand_num"
				title="damage_2_hand"
				:numb="weapon[0].damage_2_hand_num"
				:dice="weapon[0].damage_2_hand_dice"
				dot
			/>
		</my-wrapper>
		<my-wrapper>
			<my-attribute
				v-if="weapon[0].ammunition"
				title="ammunition"
				:unit="weapon[0].ammunition"
				dot
			/>
			<my-attribute title="cost" :numb_not_cube="weapon[0].cost" dot />
			<my-attribute title="weight" :numb="weapon[0].weight" unit="kg" dot />
		</my-wrapper>
	</my-dialog-spell>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

export default {
	name: "MyWeapon",
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
		...mapState(useStatsStore, ["stats_Mod"]),

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

		weapon_Damage() {
			return `damage ${this.weapon[0].damage_type}`;
		},

		weapon_Type() {
      let arr = [];
      let t_arr = [];

      const main_type = this.weapon[0].type[0].name; 
      main_type == "weapons_simple" ? arr.push(main_type) : null; //Простое
      main_type == "weapons_military" ? arr.push(main_type) : null; //Военное

      this.weapon[0].melee ? arr.push("melee") : arr.push("ranged"); //Ближнее

      const throwing_numb = this.weapon[0].throwing;
      const t_throwing_full = `${this.t("throwing")} (${this.t("from")} ${throwing_numb}${this.t("f")})`;
      throwing_numb ? arr.push(t_throwing_full) : null; //Метательное

      this.weapon[0].loading ? arr.push("loading") : null; //Перезаряжающееся

      // this.weapon[0].heaviness ? arr.push(this.weapon[0].heaviness) : null; //Перезаряжающееся
     arr.push(this.weapon[0].heaviness); //Перезаряжающееся





      //arr.push(this.weapon[0].main_type.name);

			return arr;
		},

		t_Weapon_Type() {
      let weapon_arr = this.weapon_Type;
      let t_arr = [];
      for (let i in weapon_arr) {
					if (this.t(weapon_arr[i])) {
						t_arr.push(this.t(weapon_arr[i]));
					} else {
						t_arr.push(weapon_arr[i]);
					}
				}
			return t_arr.map((n) => `${n[0].toUpperCase()}${n.slice(1)}`).join(", ");
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
