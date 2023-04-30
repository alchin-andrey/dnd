<template>
	<div
		class="flex-row gap-18 cur-p"
		@mouseover="hoverIn_Full()"
		@mouseout="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="stripe-item--main"></div>
		<div class="int-400 w-100" :class="{ 'pas-param': passive }">
			<div class="flex-row-sb">
				<div class="flex-as-c">{{ t_Packs_Name }}</div>
				<AppSvg  
				@click.stop 
				@mouseover.stop 
				@click="shownScroll()"
				class="svg-18 svg-main-f" 
				:path="ui_icon[img_Icon]"
				/>
			</div>
				<section 
        class="null-height"
        :class="{'full-height': this.packs_scroll,}"
        >
					<InventoryEquip :inventory="packs[0].items" />
				</section>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">

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
	</my-dialog-spell>
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

		img_Icon() {
			return this.packs_scroll ? "arrow_top_small" : "arrow_down_small";
		},
	},

	watch: {
		dialogVisible(val) {
			if (val === false) {
				this.$refs.stripe.classList.remove("stripe-item--active");
			}
		},
	},
	methods: {
		shownScroll() {
			this.packs_scroll = !this.packs_scroll;
		},

		hoverOut() {
			if (!this.dialogVisible) {
				this.$refs.stripe.classList.remove("stripe-item--active");
			}
		},
		hoverIn_Full() {
			if (!this.select) {
				this.$refs.stripe.classList.add("stripe-item--active");
			}
		},
		showDialog_Full() {
			if (!this.select) {
				this.dialogVisible = true;
			}
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
