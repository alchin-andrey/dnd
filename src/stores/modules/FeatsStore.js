// import { ref, computed } from "vue";
// import { mapState } from "pinia";
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
    // ...mapState(useMYStore, ["MY"]),
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
      return this.getStatsForFeatsArr("stats_2", 1);
    },

    feats_Stats_1_1_Arr() {
      return this.getStatsForFeatsArr("stats_1_1", 2);
    },

    feats_Feats_Arr() {
      return this.getFeatsForFeatsArr();
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
    getFeatsForFeatsArr() {
      const link_btn = "feats";
      const MYStore = useMYStore();
      const sett_select_old = MYStore.MY._settings_class_old[MYStore.MY.class.name];
      const sett_select = MYStore.MY._settings_class[MYStore.MY.class.name];
			const feats_lvl = this.feats_Settings_Class;
      let list = this[link_btn];
      
      let select_list_all = [];
      let save_list_old = [];
      let new_arr = [];
      feats_lvl?.forEach((item) => {
        const select_save_old = sett_select_old?.[item.id_link]?.[link_btn];
        const btn_save_old = sett_select_old?.[item.id_link]?.id_btn;
        if(select_save_old && btn_save_old == "feats") {
          save_list_old.push(select_save_old[0].name);
        }
      });

      feats_lvl?.forEach((item) => {
        const btn_save_old = sett_select_old?.[item.id_link]?.id_btn;

				const select_save = sett_select?.[item.id_link]?.[link_btn];
        const btn_save = sett_select?.[item.id_link]?.id_btn;

        let select_list = [];
          if(btn_save == "feats") {
            const includ_select = select_list_all.some(el => el.name == select_save?.[0].name);
            const includ_save_old = save_list_old.some(el => el == select_save?.[0].name);
            if(btn_save == btn_save_old) {
              select_list = select_save;
            } else if(select_save && !includ_select && !includ_save_old) {
              select_list = select_save;
            } else {
              const list_select_includ = list.filter((el) => !save_list_old.includes(el.name));
              select_list.push(list_select_includ[0]);
              MYStore.MY._settings_class[MYStore.MY.class.name][item.id_link][link_btn] = select_list;
            }
        } else {    
          select_list.push(list[0]);
        }

				new_arr.push({
					...item,
          name: link_btn,
					select_list: select_list,
          list: list,
				});
        if(btn_save == "feats") {
          list = list.filter((el) => !select_list.includes(el));
          select_list_all = select_list_all.concat(select_list);
        }
			});
        let feats_arr = [];
        const list_all = this[link_btn];
        new_arr.forEach(item => {
          const select_list_all_includ = select_list_all.filter((el) => !item.select_list.includes(el))
          const new_list = list_all.filter((el) => !select_list_all_includ.includes(el));
          feats_arr.push({
            ...item, 
            list: new_list,
          });
        });
        return feats_arr;
    },

    getStatsForFeatsArr(link_btn, select_numb) {
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
