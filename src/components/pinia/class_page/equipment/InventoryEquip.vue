<template>
	<div class="flex_section int-400">
		<section>
			<my-wrapper gap_26>
				<PacksEquip
					v-for="packs in packs_Equip_Lvl_Arr"
					:key="packs"
					:packs="packs"
					:packs_name="t_Inventary(packs)"
				/>
			</my-wrapper>
		</section>
		<section>
			<div
				class="main_inventory"
				v-for="inventory in inventory_Level_Arr"
				:key="inventory"
			>
				• {{ t_Inventary(inventory) }}
			</div>
		</section>
	</div>
</template>

<script>
import PacksEquip from "@/components/pinia/class_page/equipment/PacksEquip.vue";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";

export default {
	name: "InventoryChar",
	components: {
		PacksEquip,
	},
	computed: {
		...mapState(useMYStore, ["MY"]),

    shown_Inventory() {
      return this.packs_Equip_Lvl_Arr.length !== 0 || 
      this.inventory_Level_Arr.length !== 0
    },

		equipments_Level_Arr() {
			let lvl = this.MY.level;
			let arr = this.MY.class.equipment?.filter((el) =>
				el.level ? el.level <= lvl : el
			);
			return arr ? arr : [];
		},

		weapons_Level_Arr() {
			let arr = [];
			this.equipments_Level_Arr?.forEach((el) =>
				el.weapon?.forEach((weapon) => arr.push(weapon))
			);
			return arr;
		},

		inventory_Level_Arr() {
			let arr = [];
			this.equipments_Level_Arr?.forEach((el) =>
				el.inventory?.forEach((inventory) => arr.push(inventory))
			);
			return arr;
		},

		packs_Equip_Lvl_Arr() {
			let arr = [];
			this.equipments_Level_Arr?.forEach((el) =>
				el.inventory_packs?.forEach((packs) => arr.push(packs))
			);
			return arr;
		},

		t_Inventary: (state) => (inv) => {
			const name = state.t(inv[0].name);
			const namb = inv[1];
			let str = namb > 1 ? `${name} x ${namb}` : name;
			return str[0].toUpperCase() + str.slice(1);
		},
	},
};
</script>

<style scoped>
.flex_section {
	display: grid;
	grid-template-columns: 168px 1fr;
	column-gap: 36px;
}

/* .flex_section {
	display: flex;
  column-gap: 36px;
} */

.main_inventory {
  margin-top: 2px;
	text-indent: -10px;
}
</style>
