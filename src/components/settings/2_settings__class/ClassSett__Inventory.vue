<template>
	<section class="marg">
		<ClassParam__EquipKit no_gold no_custom/>
	</section>
	<section class="flex-col gap-8">
		<AppCardWrapp passive>
		<my-card-text
			:title="inventory_Promo_Title"
			:text="inventory_Promo_Details"
		/>
		<my-card-text rare="rare"/>
		</AppCardWrapp>

		<InventoryGold__Custom/>
		<!-- <Inventory__Custom/> -->

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
	computed: {
		...mapState(useEquipStore, [
			"inventory_Total",
		]),

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
	},

};
</script>

<style scoped>
.marg {
	margin: 0 0 24px 16px;
}

</style>
