<template>
	<AppWrapper v-if="shown_Invenory_Equip_Class" :hr="hr">
		<KitEquip 
    :inventory_old="inventory_Equip_Race"
    :inventory="inventory_Equip_Class"

    :packs_old="packs_Equip_Race"
    :packs="packs_Equip_Class"

    :gold="gold_Equip_All"
    />
	</AppWrapper>
</template>

<script>
import KitEquip from "@/components/equipment/KitEquip.vue";

import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";

export default {
	name: "ClassParam__EquipKit",
	components: {
		KitEquip,
	},
  props: {
    hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useEquipStore, [
      "inventory_Equip_Race",
      "inventory_Equip_Class",

      "packs_Equip_Race", 
      "packs_Equip_Class",

      "gold_Equip_All",
    ]),

    shown_Invenory_Equip_Class() {
			return (
        this.inventory_Equip_Race.length !== 0
				|| this.inventory_Equip_Class.length !== 0
				|| this.packs_Equip_Race.length !== 0
				|| this.packs_Equip_Class.length !== 0
        || this.gold_Equip_All
			);
		},
	},
};
</script>

<style scoped></style>
