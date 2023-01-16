<template>
	<my-wrapper v-if="shown_Invenory_Equip" :hr="hr">
		<KitEquip :packs="packs_Equip_Class" :inventory="inventory_Equip_Class" />
	</my-wrapper>
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
		...mapState(useEquipStore, ["inventory_Equip_Class", "packs_Equip_Class"]),

    shown_Invenory_Equip() {
			return (
				this.inventory_Equip_Class.length !== 0 ||
				this.packs_Equip_Class.length !== 0
			);
		},
	},
};
</script>

<style scoped></style>
