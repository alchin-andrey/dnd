<template>
	<my-wrapper v-if="weapons_Equip_Class.length !== 0" gap_26 hr>
		<WeaponEquip
			v-for="weapon in weapons_Equip_Class"
			:key="weapon"
			:weapon="weapon" 
    />
	</my-wrapper>
</template>

<script>
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";

import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";

export default {
	name: "ClassParam__Weapons",
	components: {
		WeaponEquip,
	},
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useEquipStore, ["weapons_Equip_Class"]),
	},
};
</script>

<style scoped></style>
