<template>
	<div
		class="flex-row gap-18 cur-p pos-rel"
		@mouseover="hoverIn_Full()"
		@mouseleave="hoverOut()"
		@click="showDialog_Full()"
	>
		<div ref="stripe" class="stripe-item--main"></div>
			<AppSvg
				v-if="icon"
				class="pos-wrapp svg-18 svg-main-f" 
				@click.stop 
				@mouseover="hoverIn_Select()"
				@mouseleave="hoverOut()"
				@click="showDialog_Select()"
				:path="ui_icon[icon_Svg]"
			/>
			<slot></slot>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
export default {
	name: "AppStripWrapp",
	data: () => ({
		ui_icon: ui_icon,
	}),
	props: {
		icon: {
			type: Boolean,
			default: true,
		},
		icon_name: {
			type: String,
			default: null,
		},
		select: {
			type: Boolean,
			default: false,
		},
		dialog: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		icon_Svg() {
			return this.icon_name ?? "arrow_right_small"
		},
	},
	watch: {
		dialog(val) {
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
			if (!this.dialog) {
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
				this.$emit("clickFull");
			}
		},

		showDialog_Select() {
			this.$emit("clickSelect");
		},
	},
};
</script>

<style scoped>
.pos-wrapp {
	position: absolute;
	top: 0;
	right: 0;
}
</style>
