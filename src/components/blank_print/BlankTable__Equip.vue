<template>
	<div :class="style_Br">
		<div :class="style_Span_Top">
			<div>{{ t_Equipment }}</div>

			<div :class="style_Column">
				<template v-for="(pack, i) in packs_Equip_All" :key="pack">
					<div :class="{ 'mr-t-30': i > 0 }" />
					<div class="int-500-22">{{ t_Equip_Name(pack) }}:</div>
					<div v-for="inv in pack[0].items" :key="inv">
						<div class="int-500-22">• {{ t_Equip_Name(inv) }}</div>
					</div>
				</template>

				<template v-for="(inv, i) in inventory_Equip_Print" :key="inv">
					<div class="mr-t-30" v-if="i == 0" />
					<div class="int-500-22">• {{ t_Equip_Name(inv) }}</div>
				</template>
			</div>
		</div>

		<div class="cell" v-for="coin in coins" :key="coin">
			<div>{{ T(coin) }}</div>
			<div class="int-600-22 print-grey" v-if="coin == 'gold'">
				{{ gold_Equip_All }}
			</div>
		</div>

		<div :class="style_Span_Bottom">
			<div>{{ T("armor") }}</div>
			<div class="int-600-22">{{ t_Armor_Name }}</div>
		</div>

		<div :class="style_Span_Bottom">
			<div>{{ T("bullets") }}</div>
			<div class="int-600-22">
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
	},
	data() {
		return {
			coins: ["platina", "gold", "silver", "copper"],
		};
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useQualitiesStore, ["armor_Name_Class_Param"]),
		...mapState(useEquipStore, [
			"gold_Equip_All",
			"packs_Equip_All",
			"inventory_Equip_All",
			"inventory_Equip_Print",
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
			if (this.classic) return 'cell grid-col-4';
			else return 'cell grid-col-6';
		},

		style_Span_Bottom() {
			if (this.classic) return 'cell grid-col-2';
			else return 'cell';
		},

		style_Column() {
			if (this.classic) return 'column-content h-size--simple';
			else return 'column-content h-size--full';
		},


	},
};
</script>

<style scoped>
.grid-body--full {
	display: grid;
	grid-template-rows: 538px 72px;
	grid-template-columns: repeat(4, 162px) repeat(2, 324px);
}

.grid-body--simple {
	display: grid;
	grid-template-rows: 936px repeat(2, 72px);
	grid-template-columns: repeat(4, 1fr);
}

.grid-col-2 { grid-column: span 2; }
.grid-col-4 { grid-column: span 4; }
.grid-col-6 { grid-column: span 6; }

.cell {
	padding: 4px 12px 8px;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
}
.grid-body--full > :first-child {
	border-left: 1px solid #000000;
	border-top: 1px solid #000000;
	border-radius: 6px 0 0 0;
}

.grid-body--simple > :first-child {
	border-left: 1px solid #000000;
	border-top: 1px solid #000000;
	border-radius: 6px 6px 0 0;
}

.grid-body--full > :nth-child(2) {
	border-left: 1px solid #000000;
	border-radius: 0 0 0 6px;
}
.grid-body--simple > :nth-child(2) {
	border-left: 1px solid #000000;
}

.grid-body--simple > :nth-last-child(2) {
	border-left: 1px solid #000000;
	border-radius: 0 0 0 6px;
}

.grid-body--simple > :last-child {
	border-radius: 0 0 6px 0;
}

.column-content {
	margin-top: 24px;
	width: max-content;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 0 35px;
}

.h-size--full {
	height: 450px;
}
.h-size--simple {
	height: 848px;
}

.column-content>div {
	width: 100%;
}
</style>
