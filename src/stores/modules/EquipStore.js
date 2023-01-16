// import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
// import { useDicStore } from "@/stores/general/DicStore";



export const useEquipStore = defineStore({
	id: 'EquipStore',
	state: () => ({
    equipment: [
      "armor",
      "weapon",
      "inventory",
      "inventory_packs"
    ],
	}),

  getters: {
    // ...mapState(useMYStore, ["MY", "level_Filter_Arr", "MY_Subclass"]),

    equipments_Class_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.class.equipment);
		},

		equipments_Subclass_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Subclass?.equipment);
		},

    equipments_Class_Params() {
			const equip_class = this.equipments_Class_Arr;
      const equip_subclass = this.equipments_Subclass_Arr;
			return equip_class.concat(equip_subclass);
		},

    item_Equip_Arr: (state) => (item) => {
			let arr = [];
			state.equipments_Class_Params?.forEach((el) =>
				el[item]?.forEach((sub_el) => arr.push(sub_el))
			);
			return arr;
		},

    weapons_Equip_Class() {
			return this.item_Equip_Arr("weapon");
		},

    inventory_Equip_Class() {
			return this.item_Equip_Arr("inventory");
		},

		packs_Equip_Class() {
			return this.item_Equip_Arr("inventory_packs");
		},

    armors_Equip_Class() {
			return this.item_Equip_Arr("armor");
		},

		armor_Equip_Element() {
			return this.armors_Equip_Class[0]?.[0];
		},

  },
  
  actions: {
  }
});
