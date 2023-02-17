<template>
	<div :class="{ flex_packs: stripe }">
		<div ref="stripe" class="side_stripe" v-if="stripe"></div>
		<section>
			<div class="passive" v-for="items in inventory_old" :key="items">
				• {{ t_Equip_Name(items) }}
			</div>
			<div v-for="items in inventory" :key="items">
				• {{ t_Equip_Name(items) }}
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "InventoryEquip",
	props: {
		inventory: {
			type: Array,
			default: [],
		},
    inventory_old: {
			type: Array,
			default: [],
		},
		stripe: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		t_Equip_Name: (state) => (inv) => {
			const name = state.t(inv[0].name);
			const namb = inv[1];
			let str = namb > 1 ? `${name} x ${namb}` : name;
			return str[0].toUpperCase() + str.slice(1);
		},
	},
};
</script>

<style scoped>
.flex_packs {
	display: flex;
	gap: 0 18px;
	height: 100%;
	width: 100%;
	/* cursor: pointer; */
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

.passive {
	opacity: 0.2;
}
</style>
