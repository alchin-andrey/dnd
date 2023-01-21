<template>
	<div class="flex_section int-400">
		<!-- <section v-if="shown_Packs"> -->
			<my-wrapper gap_26 v-if="shown_Packs" class="packs_section">
				<PacksEquip
					v-for="item_packs in packs"
					:key="item_packs"
					:packs="item_packs"
				/>
			</my-wrapper>
		<!-- </section> -->
		<!-- <section class="pad-top"> -->
      <InventoryEquip 
      :class="{ pad_top: !shown_Inventory_stripe }" 
      :inventory="inventory" 
      :stripe="shown_Inventory_stripe" />
		<!-- </section>  -->
	</div>
</template>

<script>
import PacksEquip from "@/components/equipment/PacksEquip.vue";
import InventoryEquip from "@/components/equipment/InventoryEquip.vue";

export default {
	name: "KitEquip",
	components: {
		PacksEquip,
    InventoryEquip,
	},
  props: {
		packs: {
			type: Array,
			default: null,
		},
    inventory: {
			type: Array,
			default: null,
		},
	},
  computed: {
    shown_Inventory_stripe() {
      return this.packs.length == 0
    },

    shown_Packs() {
      return this.packs.length !== 0
    }
  }
};
</script>

<style scoped>
.flex_section {
  display: flex;
  column-gap: 36px;
}

.packs_section {
	width: 168px;
}

.pad_top {
  padding-top: 2px;
}
</style>
