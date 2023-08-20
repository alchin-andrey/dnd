<template>
		<section :class="style_Br">
			<div class="table-weapon">
				<div class="grid-body--weapon">
					<div>{{ T("weapons") }}</div>
					<div>{{ T("print_aim_range") }}</div>
					<div>{{ T("print_aim_need") }}</div>
					<div>{{ T("print_damage") }}</div>
				</div>
				<WeaponEquip
					class="grid-body--weapon int-600-22"
					v-for="weapon in weapons_Equip_All"
					:key="weapon"
					:weapon="weapon"
					blank_print
				/>
			</div>

			<div class="table-charge">
				<AppCharges
					v-for="item in sort_Charg"
					:key="item"
					:charge="item"
					blank_print
				/>
			</div>
		</section>
</template>

<script>
import { mapState } from "pinia";
import { useEquipStore } from "@/stores/modules/EquipStore";
import { useChargesStore } from "@/stores/modules/ChargesStore";
import WeaponEquip from "@/components/equipment/WeaponEquip.vue";
export default {
	name: "BlankTable__Weapons",
	components: {
		WeaponEquip,
	},
	props: {
		classic: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useChargesStore, ["charges_All_Param"]),
		...mapState(useEquipStore, ["weapons_Equip_All"]),

    sort_Charg() {
      const start_arr = this.charges_All_Param;
      const arcanum_slots = start_arr.find(el => el.name == "arcanum_slots");
      const spell_slots = start_arr.find(el => el.name == "spell_slots");
      let filter_arr = start_arr.filter(el => el.name !== "spell_slots");
      filter_arr = filter_arr.filter(el => el.name !== "arcanum_slots");
      if(arcanum_slots) filter_arr.push(arcanum_slots);
      if(spell_slots) filter_arr.push(spell_slots);
      return filter_arr;
    },

		style_Br() {
			if (this.classic) return 'wrap-table tb-br--full h-size-classic';
			else return 'wrap-table tb-br--simple';
		}
	},
};
</script>

<style scoped>
.wrap-table {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.tb-br--full {
	border: 1px solid #000000;
	border-radius: 6px;
}

.tb-br--simple {
	border-top: 1px solid #000000;
	border-right: 1px solid #000000;
	border-bottom: 1px solid #000000;
	border-radius: 0 6px 6px 0;
}

.h-size-classic {
	height: 612px;
}

.grid-body--weapon {
	display: grid;
	grid-template-columns: 300px 121px 68px 160px;
	border-bottom: 1px solid #000000;
}

.grid-body--weapon > * {
	padding: 4px 12px 8px;
}

.table-charge > * {
	padding: 4px 12px 8px;
  border-top: 1px solid #000000;
}
</style>
