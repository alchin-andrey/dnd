<template>
	<div class="flex-row gap-36 int-400">

		<AppWrapper gap="26" v-if="shown_Packs" class="packs-size">
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
			<section class="flex-row-c gap-4 h-18" v-if="shown_Gold">
				<div class="flex-row-c svg-18">
					<emoji :data="emojiIndex" emoji="🟡" :set="set_emoji" :size="12" />
				</div>
				<div>{{ t_Text }}</div>
			</section>
		</AppWrapper>

		<InventoryEquip
			:class="{ 'pd-t-2': !shown_Inventory_stripe }"
      :inventory_old="inventory_old"
			:inventory="inventory_All"
			:stripe="shown_Inventory_stripe"
		/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
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
		no_custom: {
			type: Boolean,
			default: false,
		},
		gold: {
			type: Number,
			default: null,
		},
		no_gold: {
			type: Boolean,
			default: false,
		},
		no_gold_zero: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
    ...mapState(usePagesStore, ["page_Open"]),

    passive_Old() {
      return this.page_Open !== "alignment_page";
    },

		t_Text() {
			let gold_num = this.gold ?? 0;
			return `${this.T("coin_gold")} × ${gold_num}`;
		},

		shown_Gold() {
			let gold_num = this.gold ?? 0;
			let gold_zero = gold_num == 0;
			return !(this.no_gold_zero && gold_zero) && !this.no_gold;
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

		inventory_All() {
			return this.no_custom ? this.inventory : [...this.inventory, ...this.MY.custom_inventory];
		}
	},
};
</script>

<style scoped>
.packs-size {width: 172px;}

.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: -1px;
}
</style>
