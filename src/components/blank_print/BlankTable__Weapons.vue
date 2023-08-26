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
					class="grid-body--weapon int-600-22-blank"
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
	border: var(--border-blank);
	border-radius: var(--px-6);
}

.tb-br--simple {
	border-top: var(--border-blank);
	border-right: var(--border-blank);
	border-bottom: var(--border-blank);
	border-radius: 0 var(--px-6) var(--px-6) 0;
}

.h-size-classic {
	height: var(--px-612);
}

.grid-body--weapon {
	display: grid;
	grid-template-columns: var(--px-300) var(--px-121) var(--px-68) var(--px-160);
	border-bottom: var(--border-blank);
}

.grid-body--weapon > * {
	padding: var(--px-4) var(--px-12) var(--px-8);
}

.table-charge > * {
	padding: var(--px-4) var(--px-12) var(--px-8);
  border-top: var(--border-blank);
}
</style>
