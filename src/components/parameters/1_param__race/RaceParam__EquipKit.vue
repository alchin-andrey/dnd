<template>
	<AppWrapper v-if="shown_Invenory_Equip" :hr="hr">
		<KitEquip 
    :packs="packs_Equip_Race" 
    :inventory="inventory_Equip_Race" 
    :gold="gold_Equip_Race" 
		no_custom
		/>
	</AppWrapper>
</template>

<script>
import KitEquip from "@/components/equipment/KitEquip.vue";

import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";

export default {
	name: "RaceParam__EquipKit",
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
      "packs_Equip_Race", 
      "gold_Equip_Race"
    ]),

    shown_Invenory_Equip() {
			return (
				this.inventory_Equip_Race.length !== 0 ||
				this.packs_Equip_Race.length !== 0 ||
        this.gold_Equip_Race
			);
		},
	},
};
</script>

<style scoped></style>
