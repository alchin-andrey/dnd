<template>
	<div
		class="flex_packs"
		@mouseover="hoverIn_Full()"
		@mouseout="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="side_stripe"></div>
		<div class="int-400 width-100" :class="{ passive: passive }">
			<div class="flex_title">
				<div class="title_packs">{{ t_Packs_Name }}</div>
				<div class="icon" @click.stop @mouseover.stop @click="shownScroll()">
					<svg
						class="main_svg"
						viewBox="0 0 18 18"
						xmlns="http://www.w3.org/2000/svg"
						v-html="ui_icon[img_Icon]"
					/>
				</div>
			</div>
				<section 
        class="null_height"
        :class="{full_height: this.packs_scroll,}"
        >
					<InventoryEquip :inventory="packs[0].items" />
				</section>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible" class="dialog">
		<my-wrapper>
			<div class="int-700">{{ t_Packs_Name }}</div>
			<div class="text gray_4">{{ packs_Details }}</div>
		</my-wrapper>

		<section>
			<InventoryEquip :inventory="packs[0].items" />
		</section>

		<my-wrapper>
			<my-attribute title="cost" :price="packs[0].cost" dot />
			<my-attribute title="weight" :numb="packs[0].weight" unit="kg" dot />
		</my-wrapper>
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
			const name = state.t(inv[0].name);
			const namb = inv[1];
			let str = namb > 1 ? `${name} × ${namb}` : name;
			return str[0].toUpperCase() + str.slice(1);
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
				this.$refs.stripe.classList.remove("active");
			}
		},
	},
	methods: {
		shownScroll() {
			this.packs_scroll = !this.packs_scroll;
		},

		hoverOut() {
			if (!this.dialogVisible) {
				this.$refs.stripe.classList.remove("active");
			}
		},
		hoverIn_Full() {
			if (!this.select) {
				this.$refs.stripe.classList.add("active");
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

.width-100 {
  width: 100%;
}
.title_packs:first-letter {
	text-transform: uppercase;
}

.flex_packs {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	cursor: pointer;
}

.flex_title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}

.side_stripe {
	min-width: 4px;
	min-height: 100%;
	background: rgba(255, 255, 255, 0.2);
	flex: none;
	order: 0;
	align-self: stretch;
	flex-grow: 0;
}

.active {
	background: #ffffff;
}

.gray_4 {
	color: rgba(255, 255, 255, 0.4);
}

.passive {
	opacity: 0.2;
}

.icon {
	width: 18px;
	height: 18px;
	align-self: flex-start;
}

.main_svg {
  width: 18px;
	height: 18px;
  align-self: flex-start;
	fill: white;
}

.null_height {
  max-height: 0;
  opacity: 0;
  transition: all 0.5s ease-out;
  overflow: hidden;
}

.full_height {
  max-height: 400px;
  margin-top: 15px;
  opacity: 1;
  transition: all 0.5s ease-in;
}
</style>
