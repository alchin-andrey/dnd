<template>
	<div class="flex_section int-400">
		<!-- <section v-if="shown_Packs"> -->
		<my-wrapper gap_26 v-if="shown_Packs" class="packs_section">
			<PacksEquip
				v-for="item_packs in packs"
				:key="item_packs"
				:packs="item_packs"
			/>
			<section class="flex-row" v-if="gold">
				<div class="coin">
					<emoji :data="emojiIndex" emoji="🟡" :set="set_emoji" :size="12" />
				</div>
				<div class="text">{{ t_Text }}</div>
			</section>
		</my-wrapper>

		<!-- </section> -->
		<!-- <section class="pad-top"> -->
		<InventoryEquip
			:class="{ pad_top: !shown_Inventory_stripe }"
			:inventory="inventory"
			:stripe="shown_Inventory_stripe"
		/>
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
		gold: {
			type: Number,
			default: null,
		},
	},
	computed: {
		t_Text() {
			return `${this.t("coin_gold")} × ${this.gold}`;
		},

		shown_Inventory_stripe() {
			return this.packs.length == 0 && !this.gold;
		},

		shown_Packs() {
			return this.packs.length !== 0 || this.gold;
		},
	},
};
</script>

<style scoped>
.flex_section {
	display: flex;
	column-gap: 36px;
}
.flex-row {
  display: flex;
  align-items: center;
  gap: 0 4px;
}

.coin {
  width: 18px;
	height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text:first-letter {
	text-transform: uppercase;
}

.packs_section {
	width: 168px;
}

.pad_top {
	padding-top: 2px;
}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: -1px;
}
</style>
