<template>
	<div :class="style_Br">
		<div :class="style_Span_Top" ref="equipContainer">
			<div>{{ t_Equipment }}</div>

			<div :class="[style_Column, style_Column_Size]">
				<template v-for="(pack, i) in packs_Equip_All" :key="pack">
					<div :class="{ 'mr-t-30-blank': i > 0 }" />
					<div class="int-500-22-blank">{{ t_Equip_Name(pack) }}:</div>
					<div v-for="inv in pack[0].items" :key="inv">
						<div class="int-500-22-blank">&bull;&nbsp;{{ t_Equip_Name(inv) }}</div>
					</div>
				</template>

				<template v-for="(inv, i) in inventory_Equip_Print_Custom" :key="inv">
					<div class="mr-t-30-blank" v-if="i == 0" />
					<div class="int-500-22-blank">&bull;&nbsp;{{ t_Equip_Name(inv) }}</div>
				</template>
			</div>

			<div v-if="overLimit && !blank_Mini" class="overflow-warning">
				Кепські справи, деякі речі не влазять!
			</div>
		</div>

		<div class="cell" v-for="coin in coins" :key="coin">
			<div>{{ T(coin) }}</div>
			<div class="int-600-22-blank print-grey" v-if="coin == 'gold'">
				{{ gold_Equip_All }}
			</div>
		</div>

		<div :class="style_Span_Bottom">
			<div>{{ T("armor") }}</div>
			<div class="int-600-22-blank">{{ t_Armor_Name }}</div>
		</div>

		<div :class="style_Span_Bottom">
			<div>{{ T("bullets") }}</div>
			<div class="int-600-22-blank">
				{{ t_Ammunition_Name }}
				<span class="print-grey">{{ t_Ammunition_Numb }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useQualitiesStore } from "@/stores/modules/QualitiesStore";
import { useEquipStore } from "@/stores/modules/EquipStore";
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";
export default {
	name: "BlankTable__Equip",
	components: {
		WeaponEquip,
	},
	props: {
		classic: {
			type: Boolean,
			default: false,
		},
		blank_size: {
			type: String,
			default: null,
		}
	},
	data() {
		return {
			coins: ["platina", "gold", "silver", "copper"],
			overLimit: false,
		};
	},
	mounted() {
		this.checkOverflow();
	},
	updated() {
		this.checkOverflow();
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useQualitiesStore, ["armor_Name_Class_Param"]),
		...mapState(useEquipStore, [
			"gold_Equip_All",
			"packs_Equip_All",
			"inventory_Equip_All",
			"inventory_Equip_Print_Custom",
			"ammunition_Equip_Print",
		]),

		t_Equipment() {
			return this.T("equipment");
		},

		t_Item: (stor) => (item) => {
			const value = stor[item];
			if (value) return stor.T(String(value));
		},

		t_Equip_Name: (state) => (inv) => {
			const name = state.T(inv[0].name);
			const namb = inv[1];
			return namb > 1 ? `${name} × ${namb}` : name;
		},

		t_Armor_Name() {
			const name = this.armor_Name_Class_Param;
			if (name) return this.T(name);
		},

		t_Ammunition_Name() {
			const ammunition = this.ammunition_Equip_Print;
			if (ammunition) return this.T(ammunition[0].name);
		},

		t_Ammunition_Numb() {
			const ammunition = this.ammunition_Equip_Print;
			if (ammunition) return `×${ammunition[1]}`;
		},

		style_Br() {
			if (this.classic) return 'grid-body--simple';
			else return 'grid-body--full';
		},

		style_Span_Top() {
			if (this.classic) return 'cell pos-rel grid-col-4';
			else return 'cell pos-rel grid-col-6';
		},

		style_Span_Bottom() {
			if (this.classic) return 'cell grid-col-2';
			else return 'cell';
		},

		style_Column() {
			if (this.classic) return 'column-content h-size--simple';
			else return 'column-content h-size--full';
		},

		blank_Mini() {
			return this.blank_size == 'mini'
		},

		style_Column_Size() {
			if (this.blank_Mini) return 'w-50';
			else return 'w-300';
		},
	},

	methods: {
		checkOverflow() {
			const el = this.$refs.equipContainer;
			if (el) {
				this.overLimit = el.scrollWidth > el.clientWidth;
			}
		}
	},
};
</script>

<style scoped>
.grid-body--full {
	display: grid;
	grid-template-rows: var(--px-538) var(--px-72);
	grid-template-columns: repeat(4, var(--px-162)) repeat(2, var(--px-324));
}

.grid-body--simple {
	display: grid;
	grid-template-rows: var(--px-936) repeat(2, var(--px-72));
	grid-template-columns: repeat(4, 1fr);
}

.grid-col-2 {
	grid-column: span 2;
}

.grid-col-4 {
	grid-column: span 4;
}

.grid-col-6 {
	grid-column: span 6;
}

.cell {
	padding: var(--px-4) var(--px-12) var(--px-8);
	border-right: var(--border-blank);
	border-bottom: var(--border-blank);
	overflow: hidden;
	overflow-wrap: break-word;
}

.grid-body--full> :first-child {
	border-left: var(--border-blank);
	border-top: var(--border-blank);
	border-radius: var(--px-6) 0 0 0;
}

.grid-body--simple> :first-child {
	border-left: var(--border-blank);
	border-top: var(--border-blank);
	border-radius: var(--px-6) var(--px-6) 0 0;
}

.grid-body--full> :nth-child(2) {
	border-left: var(--border-blank);
	border-radius: 0 0 0 var(--px-6);
}

.grid-body--simple> :nth-child(2) {
	border-left: var(--border-blank);
}

.grid-body--simple> :nth-last-child(2) {
	border-left: var(--border-blank);
	border-radius: 0 0 0 var(--px-6);
}

.grid-body--simple> :last-child {
	border-radius: 0 0 var(--px-6) 0;
}

.column-content {
	margin-top: var(--px-24);
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 0 var(--px-20);
}

.h-size--full {
	height: var(--px-450);
}

.h-size--simple {
	height: var(--px-848);
}

.column-content>div {
	width: 100%;
}

.overflow-warning {
	position: absolute;
	right: 12px;
	top: 6px;
	color: red;
	font-weight: bold;
	pointer-events: none;
	z-index: 2;
}
</style>
