<template>
	<section class="marg">
		<ClassParam__EquipKit no_gold no_custom />
	</section>
	<section class="flex-col gap-8">
		<AppCardWrapp passive>
			<my-card-text :title="inventory_Promo_Title" :text="inventory_Promo_Details" />
			<my-card-text rare="rare" />
		</AppCardWrapp>

		<InventoryGold__Custom />
		<Inventory__Custom v-for="(item, index) in displayInventory" 
		:key="index" 
		ref="inventoryItems"
		:index="index" 
		:modelValue_Name="item[0]?.name"
		:modelValue_Count="item[1]"
		:is-new="index === MY.custom_inventory.length"
		@update:modelValue_Name="updateName(index, $event)" @update:modelValue_Count="updateCount(index, $event)"
		@delete="deleteItem(index)" 
		@enter="focusNew" />
	</section>

</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useEquipStore } from "@/stores/modules/EquipStore";

import ClassParam__EquipKit from "@/components/parameters/2_param__class/ClassParam__EquipKit.vue";
import InventoryGold__Custom from "@/components/settings/2_settings__class/InventoryGold__Custom.vue";
import Inventory__Custom from "@/components/settings/2_settings__class/Inventory__Custom.vue";



export default {
	name: "ClassSett__Inventory",
	components: {
		ClassParam__EquipKit,
		InventoryGold__Custom,
		Inventory__Custom,
	},

	data() {
		return {
			placeholderName: "",
			placeholderCount: 1,
		};
	},

	computed: {
		...mapState(useEquipStore, [
			"inventory_Total",
		]),
		...mapState(useMYStore, ["MY"]),

		inventory_Promo_Title() {
			return this.t('extra_inventory');
		},

		inventory_Promo_Details() {
			let length = this.t("inventory_name_length");
			let num_items = 48 - this.inventory_Total;
			let items = this.t("items_available");
			return `${length} \n${num_items} ${items}`
		},

		inventory_Promo_Rare() {
			return this.t('rare');
		},

		maxSlots() {
			return 48 - this.inventory_Total;
		},

		displayInventory() {
			const arr = this.MY.custom_inventory;
			if (this.maxSlots !== 0) {
				return [...arr, [{ name: this.placeholderName }, this.placeholderCount]];
			}
			return arr;
		},
	},

	methods: {
	updateName(index, val) {
		if (index === this.MY.custom_inventory.length) {
			this.placeholderName = val;
			if (val !== '') {
				this.MY.custom_inventory.push([{ name: val }, this.placeholderCount]);
				this.placeholderName = '';
				this.placeholderCount = 1;
			}
		} else {
			this.MY.custom_inventory[index][0].name = val;
		}
	},

		updateCount(index, val) {
			if (index === this.MY.custom_inventory.length) {
				this.placeholderCount = val;
			} else {
				this.MY.custom_inventory[index][1] = val;
			}
		},

		deleteItem(index) {
			if (index === this.MY.custom_inventory.length) {
				this.placeholderName = '';
				this.placeholderCount = 1;
			} else {
				this.MY.custom_inventory.splice(index, 1);
			}
		},

		focusNew() {
			const newIndex = this.MY.custom_inventory.length;
			this.$nextTick(() => {
				const refs = this.$refs.inventoryItems;
				if (Array.isArray(refs) && refs[newIndex] && refs[newIndex].focusInput) {
					refs[newIndex].focusInput();
				}
			});
		},
	},

};
</script>

<style scoped>
.marg {
	margin: 0 0 24px 16px;
}
</style>
