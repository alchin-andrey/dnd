import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useDicStore } from "@/stores/general/DicStore";



export const useEquipStore = defineStore({
	id: 'EquipStore',
	state: () => ({
    equipment: [
      "armor",
      "weapon",
      "inventory",
      "inventory_packs"
    ],

    ammunition: [
      "bolt",
      "arrow",
      "bullet",
    ]
	}),

  getters: {
    // SECTION - Tootal
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
      const regular_gold = eqip_lvl.reduce((acc, el) => el.gold ? acc + el.gold : acc, 0);
      return regular_gold;
    },

		gold_Equip_Numb_User: (stor) => (obj_arr) => {
      const MYStore = useMYStore();
			const user_gold = MYStore.MY.user_gold
      return user_gold ?? stor.gold_Equip_Numb(obj_arr);
    },
    // !SECTION - Tootal

    // SECTION - Race
    equipments_Race_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Race.equipment);
		},

    equipments_Race_Ethnos_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Ethnos.equipment);
		},

    equipments_Race_Backstory_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Backstory.equipment);
		},

    equipments_Race_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Race_Lvl("equipment");
		},

    equipments_Race_Params() {
			const race = this.equipments_Race_Main_Arr;
			const ethnos = this.equipments_Race_Ethnos_Arr;
      const backstory = this.equipments_Race_Backstory_Arr;
      const race_custom = this.equipments_Race_Custom_Arr;
			return [...race, ...ethnos, ...backstory, ...race_custom];
		},

    item_Equip_Race_Arr: (stor) => (item) => {
			return stor.item_Equip_Arr(stor.equipments_Race_Params, item);
		},

    weapons_Equip_Race() {
			return this.item_Equip_Race_Arr("weapon");
		},

    inventory_Equip_Race() {
			return this.item_Equip_Race_Arr("inventory");
		},

    packs_Equip_Race() {
			return this.item_Equip_Race_Arr("inventory_packs");
		},

    armors_Equip_Race() {
			return this.item_Equip_Race_Arr("armor");
		},

    gold_Equip_Race() {
			return this.gold_Equip_Numb_User(this.equipments_Race_Params);
		},
    // !SECTION - Race

    // SECTION - Castom
    equipments_Class_Main_Arr() {
      const MYStore = useMYStore();
			return MYStore.level_Filter_Arr(MYStore.MY_Class.equipment);
		},

    equipments_Class_Custom_Arr() {
      const MYStore = useMYStore();
			return MYStore.filter_Custom_Class_Lvl("equipment");
		},

    equipments_Class_Params() {
			const equip_class = this.equipments_Class_Main_Arr;
      const equip_custom = this.equipments_Class_Custom_Arr;
			return [...equip_class, ...equip_custom];
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

    gold_Equip_Class() {
			return this.gold_Equip_Numb_User(this.equipments_Class_Params);
		},
    // !SECTION - Castom

    // SECTION - ALL
		armor_Equip_Element() {
			return this.armors_Equip_Race[0]?.[0] ?? this.armors_Equip_Class[0]?.[0];
		},

    equipments_All_Params() {
			const race_param = this.equipments_Race_Params;
      const class_param = this.equipments_Class_Params;
			return [...race_param, ...class_param];
		},

    item_Equip_All_Arr: (stor) => (item) => {
			return stor.item_Equip_Arr(stor.equipments_All_Params, item);
		},

    weapons_Equip_All() {
			return this.item_Equip_All_Arr("weapon");
		},

    inventory_Equip_All() {
			return this.item_Equip_All_Arr("inventory");
		},

		packs_Equip_All() {
			return this.item_Equip_All_Arr("inventory_packs");
		},

    armors_Equip_All() {
			return this.item_Equip_All_Arr("armor");
		},

		gold_Equip_All_Default() {
			return this.gold_Equip_Numb(this.equipments_All_Params);
		},

    gold_Equip_All() {
			return this.gold_Equip_Numb_User(this.equipments_All_Params);
		},

    inventory_Equip_Print() {
      const all = this.inventory_Equip_All;
      const filter = all.filter(el => !this.ammunition.includes(el[0].name));
			return filter;
		},

    // inventory_Equip_Custom() {
    //   const MYStore = useMYStore();
		// 	return MYStore.MY.custom_inventory;
		// },

    // inventory_Equip_Print_Custom() {
    //   const MYStore = useMYStore();
		// 	return [...this.inventory_Equip_Print, ...MYStore.MY.custom_inventory];
		// },

    ammunition_Equip_Print() {
      const all = this.inventory_Equip_All;
      const find = all.find(el => this.ammunition.includes(el[0].name));
			return find;
		},
    // !SECTION - ALL

		inventory_Total() {
			const MYStore = useMYStore();
			let packs_sum = this.packs_Equip_All.reduce(
				(sum, pack) => sum + pack[0].items.length, 0
			);
			let equip_print_sum = this.inventory_Equip_Print.length;
			let equip_custom = MYStore.MY.custom_inventory.length;
			return packs_sum + equip_print_sum + equip_custom;
		},

		max_Inventory_Slots() {
			return 48 - this.inventory_Total;
		},

		overflow_Inventory_Slots() {
			if (this.max_Inventory_Slots < 0) return 'rare'
		},

		t_Inventory_Menu() {
			const { t } = useDicStore();
			return `${this.inventory_Total} ${t("items_used")}`
		},
  },
  
  actions: {
  }
});
