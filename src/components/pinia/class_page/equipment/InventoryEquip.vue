<template>
	<div class="flex_section int-400">
		<section>
			<my-wrapper gap_26>
				<PacksEquip
					v-for="packs in packs_Equip_Class"
					:key="packs"
					:packs="packs"
					:packs_name="t_Inventary(packs)"
				/>
			</my-wrapper>
		</section>
		<section>
			<div
				class="main_inventory"
				v-for="inventory in inventory_Equip_Class"
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
		...mapState(useMYStore, ["MY", "level_Filter", "MY_Subclass"]),

    shown_Inventory() {
      return this.packs_Equip_Class.length !== 0 || 
      this.inventory_Equip_Class.length !== 0
    },

		equipments_Class_Arr() {
			let arr = this.level_Filter(this.MY.class.equipment);
			return arr ? arr : [];
		},

		equipments_Subclass_Arr() {
			let arr = this.level_Filter(this.MY_Subclass?.equipment);
			return arr ? arr : [];
		},

		equipments_Class_Params() {
			const equip_class = this.equipments_Class_Arr
      const equip_subclass = this.equipments_Subclass_Arr
			return equip_class.concat(equip_subclass);
		},

    item_Equip_Arr: (state) => (item) => {
			let arr = [];
			state.equipments_Class_Params?.forEach((el) =>
				el[item]?.forEach((sub_el) => arr.push(sub_el))
			);
			return arr;
		},

		inventory_Equip_Class() {
			return this.item_Equip_Arr("inventory");
		},

		packs_Equip_Class() {
			return this.item_Equip_Arr("inventory_packs");
		},

		// inventory_Equip_Class() {
		// 	let arr = [];
		// 	this.equipments_Class_Arr?.forEach((el) =>
		// 		el.inventory?.forEach((inventory) => arr.push(inventory))
		// 	);
		// 	return arr;
		// },

		// packs_Equip_Class() {
		// 	let arr = [];
		// 	this.equipments_Class_Arr?.forEach((el) =>
		// 		el.inventory_packs?.forEach((packs) => arr.push(packs))
		// 	);
		// 	return arr;
		// },

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
