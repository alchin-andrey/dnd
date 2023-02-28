<template>
	<div class="flex_section int-400">

		<my-wrapper gap_26 v-if="shown_Packs" class="packs_section">
      <PacksEquip
				v-for="item_packs_old in packs_old"
				:key="item_packs_old"
				:packs="item_packs_old"
        :passive="passive_Old"
			/>
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

		<InventoryEquip
			:class="{ pad_top: !shown_Inventory_stripe }"
      :inventory_old="inventory_old"
			:inventory="inventory"
			:stripe="shown_Inventory_stripe"
		/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import PacksEquip from "@/components/equipment/PacksEquip.vue";
import InventoryEquip from "@/components/equipment/InventoryEquip.vue";

export default {
	name: "KitEquip",
	components: {
		PacksEquip,
		InventoryEquip,
	},
	props: {
    packs_old: {
      type: Array,
      default: [],
    },
		packs: {
			type: Array,
			default: [],
		},
    inventory_old: {
      type: Array,
      default: [],
    },
		inventory: {
			type: Array,
			default: [],
		},
		gold: {
			type: Number,
			default: null,
		},
	},
	computed: {
    ...mapState(usePagesStore, ["page_Open"]),

    passive_Old() {
      return this.page_Open !== "alignment_page";
    },

		t_Text() {
			return `${this.t("coin_gold")} × ${this.gold}`;
		},

		shown_Inventory_stripe() {
			return !this.shown_Packs;
		},

		shown_Packs() {
			return (
        this.packs_old.length !== 0
        || this.packs.length !== 0
        || this.gold
        );
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
	justify-content: flex-start;
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
