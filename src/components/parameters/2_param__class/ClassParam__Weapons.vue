<template>
	<my-wrapper v-if="shown_Weapons" hr>
		<WeaponEquip
			v-for="weapon in weapons_Equip_Race"
			:key="weapon"
			:weapon="weapon"
      param_stule
      passive
    />
		<WeaponEquip
			v-for="weapon in weapons_Equip_Class"
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
		...mapState(useEquipStore, [
      "weapons_Equip_Race", 
      "weapons_Equip_Class"
    ]),

    shown_Weapons() {
      return (
        this. weapons_Equip_Race.length !== 0
        || this. weapons_Equip_Class.length !== 0
      )
    }
	},
};
</script>

<style scoped>
</style>
