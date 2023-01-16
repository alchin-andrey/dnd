<template>
	<div class="flex_section int-400">
		<section>
			<my-wrapper gap_26>
				<PacksEquip
					v-for="item_packs in packs"
					:key="item_packs"
					:packs="item_packs"
				/>
			</my-wrapper>
		</section>
		<section class="pad-top">
      <InventoryEquip :inventory="inventory" />
		</section> 
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
};
</script>

<style scoped>
.flex_section {
	display: grid;
	grid-template-columns: 168px 1fr;
	column-gap: 36px;
}

.pad-top {
  padding-top: 2px;
}

.main_inventory {
  margin-top: 2px;
	text-indent: -10px;
}
</style>
