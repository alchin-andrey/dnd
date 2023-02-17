<template>
	<my-wrapper v-if="weapons_Equip_Race.length !== 0" hr>
		<WeaponEquip
			v-for="weapon in weapons_Equip_Race"
			:key="weapon"
			:weapon="weapon"
      param_stule
    />
	</my-wrapper>
</template>

<script>
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";

import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";

export default {
	name: "RaceParam__Weapons",
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
		...mapState(useEquipStore, ["weapons_Equip_Race"]),
	},
};
</script>

<style scoped></style>
