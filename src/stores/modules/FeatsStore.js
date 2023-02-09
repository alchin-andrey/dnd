// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import feats_obj from "@/assets/catalog/base_data/list_feats.js";

export const useFeatsStore = defineStore({
	id: "FeatsStore",
	state: () => ({
		feats_obj: feats_obj,
		stats_2: [
				{
					name_set: "strength",
					stats: [{ name: "strength", num: 2, details: "strength_details"}],
				},
				{
					name_set: "dexterity",
					stats: [{ name: "dexterity", num: 2, details: "dexterity_details" }],
				},
				{
					name_set: "constitution",
					stats: [{ name: "constitution", num: 2, details: "constitution_details" }],
				},
				{
					name_set: "intelligence",
					stats: [{ name: "intelligence", num: 2, details: "intelligence_details" }],
				},
				{
					name_set: "wisdom",
					stats: [{ name: "wisdom", num: 2, details: "wisdom_details" }],
				},
				{
					name_set: "charisma",
					stats: [{ name: "charisma", num: 2, details: "charisma_details" }],
				},
			],
		stats_1_1: [
				{
					name_set: "strength",
					stats: [{ name: "strength", num: 1, details: "strength_details" }],
				},
				{
					name_set: "dexterity",
					stats: [{ name: "dexterity", num: 1, details: "dexterity_details" }],
				},
				{
					name_set: "constitution",
					stats: [{ name: "constitution", num: 1, details: "constitution_details" }],
				},
				{
					name_set: "intelligence",
					stats: [{ name: "intelligence", num: 1, details: "intelligence_details" }],
				},
				{
					name_set: "wisdom",
					stats: [{ name: "wisdom", num: 1, details: "wisdom_details" }],
				},
				{
					name_set: "charisma",
					stats: [{ name: "charisma", num: 1, details: "charisma_details"}],
				},
			],
	}),

	getters: {
		feats() {
      const obj = this.feats_obj;
      let new_arr = [];
      for (const key in obj) {
        new_arr.push(obj[key]);
      }
			return new_arr;
		},

    feats_Settings_Class() {
      const MYStore = useMYStore();
			const sett_lvl = MYStore.level_Filter_Arr(MYStore.MY.class.settings);
			const sett_for_type = sett_lvl.filter((el) => el.type == "feats");
      let new_arr = [];
			sett_for_type?.forEach((item, i) => {
				const link_type_i = `feats__${i}`;
				new_arr.push({
					...item,
					id_link: link_type_i,
				});
			});
      return new_arr;
    },

    feats_Stats_2_Arr() {
      return this.getFeatsArr("stats_2", 1);
    },

    feats_Stats_1_1_Arr() {
      return this.getFeatsArr("stats_1_1", 2);
    },

    feats_Feats_Arr() {
      return this.getFeatsArr("feats", 1);
    },

    feats_Select_Arr() {
      const MYStore = useMYStore();
      const sett_select = MYStore.MY._settings_class[MYStore.MY.class.name];
      const feats_lvl = this.feats_Settings_Class;
      let new_arr = [];
      feats_lvl?.forEach((item) => {
				const select_save = sett_select?.[item.id_link];
        let select_list = [];
        let btn_link = "stats_2";
        if(select_save) {
          const btn_save = select_save.id_btn;
          btn_link = btn_save;
          const save_arr = select_save[btn_save];
          if (save_arr) {
            select_list = save_arr;
          } else {
            if(btn_save == "stats_2") {
              const stats_2 = this.feats_Stats_2_Arr.find(el => el.id_link == item.id_link);
              select_list = stats_2.select_list;
            } else if (btn_save == "stats_1_1") {
              const stats_1_1 = this.feats_Stats_1_1_Arr.find(el => el.id_link == item.id_link);
              select_list = stats_1_1.select_list;
            } else if (btn_save == "feats") {
              const feats = this.feats_Feats_Arr.find(el => el.id_link == item.id_link);
              select_list = feats.select_list;
            }
          }
        } else {
          const stats_2 = this.feats_Stats_2_Arr.find(el => el.id_link == item.id_link);
          select_list = stats_2.select_list;
        }

        new_arr.push({
					...item,
          id_btn: btn_link,
					select_list: select_list,
				});
      });
      return new_arr;
    },
	},

	actions: {
    getFeatsArr(link_btn, select_numb) {
      const MYStore = useMYStore();
      const sett_select = MYStore.MY._settings_class[MYStore.MY.class.name];
			const feats_lvl = this.feats_Settings_Class;
      let new_arr = [];
      feats_lvl?.forEach((item) => {
				const select_save = sett_select?.[item.id_link]?.[link_btn];
        const list = this[link_btn];

        let select_list = [];
        if(select_save) {
          select_list = select_save;
        } else {      
          for (let i = 0; i < select_numb; i += 1) {
            select_list.push(list[i]);
          }
        }

				new_arr.push({
					...item,
          name: link_btn,
					select_list: select_list,
          list: list,
				});
			});
      return new_arr;
    },
  },
});
