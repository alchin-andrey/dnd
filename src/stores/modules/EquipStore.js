import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";



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

    item_Equip_Arr: (stor) => (obj_arr, item) => {
      const MYStore = useMYStore();
      const eqip_lvl = MYStore.level_Filter_Arr(obj_arr);
			let arr = [];
			eqip_lvl?.forEach((el) =>
				el[item]?.forEach((sub_el) => arr.push(sub_el))
			);
			return arr;
		},

    gold_Equip_Numb: (stor) => (obj_arr) => {
      const MYStore = useMYStore();
      const eqip_lvl = MYStore.level_Filter_Arr(obj_arr);
      console.log('eqip_lvl:', eqip_lvl)
      const res = eqip_lvl.reduce((acc, el) => el.gold ? acc + el.gold : acc, 0);
      console.log('res:', res)
      return res;
    },

    equipments_Class_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY.class.equipment);
		},

    equipments_Custom_Class_Lvl() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Class_Lvl("equipment");
		},

    equipments_Class_Params() {
			const equip_class = this.equipments_Class_Arr;
      const equip_custom = this.equipments_Custom_Class_Lvl;
			return equip_class.concat(equip_custom);
		},

    item_Equip_Class_Arr: (stor) => (item) => {
			return stor.item_Equip_Arr(stor.equipments_Class_Params, item);
		},

    weapons_Equip_Class() {
			return this.item_Equip_Class_Arr("weapon");
		},

    inventory_Equip_Class() {
			return this.item_Equip_Class_Arr("inventory");
		},

		packs_Equip_Class() {
			return this.item_Equip_Class_Arr("inventory_packs");
		},

    armors_Equip_Class() {
			return this.item_Equip_Class_Arr("armor");
		},

		armor_Equip_Element() {
			return this.armors_Equip_Class[0]?.[0];
		},

  },
  
  actions: {
  }
});
