<template>
	<div
		class="flex-row gap-18 cur-p"
		@mouseover="hoverIn_Full()"
		@mouseleave="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="stripe-item--main"></div>
		<div class="int-400 flex-col gap-4" :class="{ 'pas-param': passive }">
			<div class="flex-row-sb">
				<div class="int-700 flex-as-c h-18">{{ t_Armor_Name }}</div>
				<AppSvg
					class="svg-18 svg-main-f" 
					@mouseover="hoverIn_Select()"
					@mouseleave="hoverOut()"
					@click="showDialog_Select()"
					:path="ui_icon.arrow_right_small"
				/>
			</div>
      <div class="white-02" v-html="t_Armor_Type"></div>
      <my-attribute v-if="Armor.armor_bonus"
				title="armor_class"
				:numb="Armor.armor_bonus"
        type="bonus"
        plus
        no_icon
			/>
      <my-attribute v-if="Armor.armor_class"
				title="armor_class"
				:numb="Armor.armor_class"
        type="armor_full"
        no_icon
			/>
		</div>
	</div>
	<my-dialog-spell v-model:show="dialogVisible">

    <section>
			<div class="int-700">{{ t_Armor_Name }}</div>
			<div class="white-04 mr-t-4">{{ t_Armor_Details }}</div>
      <div class="white-04 mr-t-15">{{ t_Armor_Type }}</div>
		</section>

		<section class="flex-col gap-4">
      <my-attribute v-if="Armor.armor_bonus"
				title="armor_class"
				:numb="Armor.armor_bonus"
        type="bonus"
        plus
        no_icon
        dot
			/>
      <my-attribute v-if="Armor.armor_class"
				title="armor_class"
				:numb="Armor.armor_class"
        type="armor_full"
        no_icon
        dot
			/>
		</section>

		<section class="flex-col gap-4" v-if="Armor.cost || Armor.weight">
			<my-attribute
				v-if="Armor.cost"
				title="cost"
				:price="Armor.cost"
				dot
			/>
			<my-attribute
				v-if="Armor.weight"
				title="weight"
				:numb="Armor.weight"
				unit="kg"
				dot
			/>
		</section>
	</my-dialog-spell>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "ArmorEquip",
	data() {
		return {
			dialogVisible: false,
			ui_icon: ui_icon,
		};
	},
	props: {
		armor: {
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
    Armor() {
      return this.armor[0];
    },

    t_Equip_Name: (state) => (item) => {
			const name = state.T(item[0].name);
			const namb = item[1];
			const str = namb > 1 ? `${name} × ${namb}` : name; 
			return str;
		},

    t_Armor_Name() {
			return this.t_Equip_Name(this.armor);
		},

    t_Armor_Details() {
      return this.t(this.Armor.details)
    },

    t_Armor_Type() {
      return this.T(this.Armor.type[0].name);
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
		hoverIn_Select() {
			if (this.select) {
				this.$refs.stripe.classList.add("stripe-item--active");
			}
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

		showDialog_Select() {
			this.dialogVisible = true;
		},
	},
};
</script>

<style scoped>
</style>
