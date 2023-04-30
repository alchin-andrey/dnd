<template>
	<div :class="{ 'flex-row gap-18': stripe }">
		<div ref="stripe" class="stripe-item--main" v-if="stripe"></div>
		<section>
			<div :class="{'pas-param': passive_Old}" v-for="items in inventory_old" :key="items">
				• {{ t_Equip_Name(items) }}
			</div>
			<div v-for="items in inventory" :key="items" :class="{'debuff': t_Equip_Name(items) == undefined }">
				• {{ t_Equip_Name(items) }}
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "InventoryEquip",
	props: {
		inventory: {
			type: Array,
			default: [],
		},
    inventory_old: {
			type: Array,
			default: [],
		},
		stripe: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
    ...mapState(usePagesStore, ["page_Open"]),

    passive_Old() {
      return this.page_Open !== "alignment_page";
    },

		t_Equip_Name: (stor) => (inv) => {
      if (inv?.[0]) {
				const name = stor.T(inv[0].name);
				const namb = inv[1];
				const str = namb > 1 ? `${name} × ${namb}` : name;
				return str;
      }
      return inv?.[0];
		},
	},
};
</script>

<style scoped>
</style>
