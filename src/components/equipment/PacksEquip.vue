<template>
	<AppStripWrapp
		:select="select"
		:icon_name="icon_Svg"
		:dialog="dialogVisible"
		@click.stop
		@clickFull="showDialog()"
		@clickSelect="shownScroll()"
	>
		<div class="int-400" :class="{ 'pas-param': passive }">
			<div class="flex-row-c h-min-18 pd-r-18">{{ t_Packs_Name }}</div>

				<section 
        class="null-height"
        :class="{'full-height': this.packs_scroll,}"
        >
					<InventoryEquip :inventory="packs[0].items" />
				</section>
		</div>
	</AppStripWrapp>
	<AppDialog__Property v-model:show="dialogVisible">

		<section>
			<div class="int-700">{{ t_Packs_Name }}</div>
			<div class="white-04 mr-t-4">{{ packs_Details }}</div>
		</section>

		<section>
			<InventoryEquip :inventory="packs[0].items" />
		</section>

		<section class="flex-col gap-4">
			<my-attribute title="cost" :price="packs[0].cost" dot />
			<my-attribute title="weight" :numb="packs[0].weight" unit="kg" dot />
		</section>
	</AppDialog__Property>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import InventoryEquip from "@/components/equipment/InventoryEquip.vue";
export default {
	name: "PacksEquip",
	components: { InventoryEquip },
	data() {
		return {
			dialogVisible: false,
			packs_scroll: false,
			ui_icon: ui_icon,
		};
	},
	props: {
		packs: {
			type: Array,
			default: null,
		},
		select: {
			type: Boolean,
			default: false,
		},
		passive: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		t_Equip_Name: (state) => (inv) => {
			const name = state.T(inv[0].name);
			const namb = inv[1];
			const str = namb > 1 ? `${name} × ${namb}` : name;
			return str;
		},

		t_Packs_Name() {
			return this.t_Equip_Name(this.packs);
		},

		packs_Details() {
			return this.t(this.packs[0].details);
		},

		icon_Svg() {
			return this.packs_scroll ? "arrow_top_small" : "arrow_down_small";
		},
	},

	methods: {
		shownScroll() {
			this.packs_scroll = !this.packs_scroll;
		},

		showDialog() {
			this.dialogVisible = true;
		},
	},
};
</script>

<style scoped>
.null-height {
  max-height: 0;
  opacity: 0;
  transition: all 0.5s ease-out;
  overflow: hidden;
}

.full-height {
  max-height: 400px;
  margin-top: 15px;
  opacity: 1;
  transition: all 0.5s ease-in;
}
</style>
