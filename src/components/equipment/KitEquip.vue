<template>
	<div class="flex-col gap-26 int-400">
		<div class="flex-row gap-26 ">
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
				class="word-break"
				:class="{ 'pd-t-2': !shown_Inventory_Stripe }"
				:inventory_old="inventory_old"
				:inventory="inventory"
				:stripe="shown_Inventory_Stripe"
			/>
		</div>
			<section class="flex-row gap-26 pd-l-22" v-if="shown_Inventory_Custom" >
				<InventoryEquip 
				class="first-column word-break"
				:inventory="first_Inventory_Custom_Column"
				/>
				<InventoryEquip
				class="word-break"
				:inventory="second_Inventory_Custom_Column"
				/>
			</section>
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

		shown_Inventory_Stripe() {
			return !this.shown_Packs;
		},

		shown_Packs() {
			return (
				this.packs_old.length !== 0
				|| this.packs.length !== 0
				|| this.gold
			);
		},

		shown_Inventory_Custom() {
			return this.MY.custom_inventory.length !== 0 && !this.no_custom;
		},

		first_Inventory_Custom_Column() {
      return this.MY.custom_inventory.filter((_, i) => i % 2 === 0)
    },
    second_Inventory_Custom_Column() {
      return this.MY.custom_inventory.filter((_, i) => i % 2 !== 0)
    }
	},
};
</script>

<style scoped>
/* .packs-size {width: 172px;} */
/* .packs-size {min-width: 172px;} */
.packs-size {
	min-width: 172px;
	max-width: 172px;
}
/* .packs-size {width: 168px;} */

.first-column {
	min-width: 150px;
	max-width: 150px;
}


.emoji-mart-emoji {
	padding: 0;
	line-height: 0;
	top: -1px;
}

.word-break {
	overflow: hidden;
	overflow-wrap: break-word;
}
</style>
