<template>
	<section class="marg">
		<ClassParam__EquipKit no_gold no_custom />
	</section>
	<section class="flex-col gap-8">
		<AppCardWrapp class="int-400" passive>
			<div>
				<div class="int-700 mr-b-5"> {{ inventory_Promo_Title }} </div>
				<div class="white-04"> {{ inventory_Promo_Details }} </div>
				<div :class="style_Overflow"> {{ inventory_Promo_Slots }} </div>
			</div>
			<div class="rare-text"> {{ inventory_Promo_Rare }} </div>
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
		@enter="handleEnter(index)"
		@blur="handleBlur(index)"
		/>
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
			"overflow_Inventory_Slots",
			"max_Inventory_Slots",
			"inventory_Total",
		]),
		...mapState(useMYStore, ["MY"]),

		inventory_Promo_Title() {
			return this.t('extra_inventory');
		},

		inventory_Promo_Details() {
			return this.t("inventory_name_length");
		},

		inventory_Promo_Slots() {
			let num_items = this.max_Inventory_Slots;
			let items = this.t("items_available");
			return `${num_items} ${items}`
		},

		inventory_Promo_Rare() {
			return this.t('rare_details');
		},

		style_Overflow() {
			return this.overflow_Inventory_Slots ? 'rare-text' : 'white-04';
		},

		displayInventory() {
			const arr = this.MY.custom_inventory;
			if (this.max_Inventory_Slots > 0) {
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

		checkEmptyInput(index) {
			if (index < this.MY.custom_inventory.length &&
				!this.MY.custom_inventory[index][0].name.trim()) {
				this.deleteItem(index);
			}
		},

		focusNew() {
			const refs = this.$refs.inventoryItems;
			if (!Array.isArray(refs)) return;
			const targetIndex = this.MY.custom_inventory.length;
			if (refs[targetIndex] && refs[targetIndex].focusInput) {
				refs[targetIndex].focusInput();
			}
		},

		handleEnter(index) {
			this.checkEmptyInput(index);
			this.focusNew()
		},

		handleBlur(index) {
			this.checkEmptyInput(index);
		},

	},

};
</script>

<style scoped>
.marg {
	margin: 0 0 24px 16px;
}
</style>
