import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useEquipStore } from "@/stores/modules/EquipStore";

export const useQualitiesStore = defineStore({
	id: "QualitiesStore",
	state: () => ({
		qualities: [],
	}),

	getters: {

    //NOTE - HP_Max
    hp_Bonus: (stor) => (obj) => {
			if (obj.hp_bonus) {
        const MYStore = useMYStore();
				const increm_1 = obj.hp_bonus[0];
				const increm_2 = obj.hp_bonus[1];
				const level = Math.ceil(MYStore.MY.level / increm_1);
				return level * increm_2;
			} else {
				return 0;
			}
		},

    hp_Bonus_Custom: (stor) => (arr_sett) => {
      let hp_bonus = 0;
      arr_sett.forEach(el => {
        el.select_list.forEach(sub_el => {
          hp_bonus += stor.hp_Bonus(sub_el);
        });
      });
      return hp_bonus; 
    },

    hp_Bonus_Race_Param() {
      const MYStore = useMYStore();
      const race = this.hp_Bonus(MYStore.MY.race);
      const ethnos = this.hp_Bonus(MYStore.MY.ethnos);
      const backstory = this.hp_Bonus(MYStore.MY.backstory);
      const custom_race = this.hp_Bonus_Custom(MYStore.сustomm_Settings_Race_Arr);
      return race + ethnos + backstory + custom_race;
    },

    hp_Bonus_Class_Param() {
      const MYStore = useMYStore();
      const main_class = this.hp_Bonus(MYStore.MY.class);
      const custom_class = this.hp_Bonus_Custom(MYStore.сustomm_Settings_Class_Arr);
      return main_class + custom_class;
    },

    hp_Max_Class_Param() {
      const MYStore = useMYStore();
      const StatsStore = useStatsStore();

			const hp_dice = MYStore.MY.class.hp_dice;
			const x = Math.ceil(hp_dice / 2) + 1;
			const con_mod = StatsStore.stats_Mod("constitution");
			const lvl = MYStore.MY.level;

      const hp_bonus_race = this.hp_Bonus_Race_Param;
      const hp_bonus_class = this.hp_Bonus_Class_Param;
      const hp_bonus = hp_bonus_race + hp_bonus_class;

			return hp_dice + con_mod + (x + con_mod) * (lvl - 1) + hp_bonus;
		},

    //NOTE - Armor

    armor_Name_Class_Param() {
      const EquipStore = useEquipStore();
			const armor = EquipStore.armor_Equip_Element;
			return armor ? armor.name : null;
		},

		armor_Numb_Class_Param() {
      const StatsStore = useStatsStore();
      const EquipStore = useEquipStore();
			const armor = EquipStore.armor_Equip_Element;

			let armor_default = 10;
			let dex_mod = StatsStore.stats_Mod("dexterity");
      dex_mod = dex_mod < 0 ? 0 : dex_mod;
			const dex_mod_max2 = dex_mod > 2 ? 2 : dex_mod;

			const medium = armor?.type[0].name == "armor_medium";
			medium ? (armor_default += dex_mod_max2) : (armor_default += dex_mod);

      const bonus_A = this.armor_Bonus_Specials("armor");
      const bonus_AC = this.armor_Bonus_Specials("armor_class");
      const bonus_AB = this.armor_Bonus_Specials("armor_bonus");

      const armor_class = armor ? armor.armor_class : null;
			const armor_bonus = armor ? armor.armor_bonus : null;
      
      const armor_default_bonus = armor_default + armor_bonus + bonus_A + bonus_AB;
      const armor_class_bonus = armor_class + bonus_A + bonus_AC;

			return armor_class ? armor_class_bonus : armor_default_bonus;
		},

		armor_Bonus_Specials: (stor) => (type) => {
      const MYStore = useMYStore();
      const class_specials = MYStore.class_Specials_Filter_Lvl(type);
      let bonus = 0;
      class_specials.forEach((el) => bonus += (el.foo ? stor[el.foo] : el.armor_bonus));
			return bonus;
		},

		Num_CON() {
      const StatsStore = useStatsStore();
			let mod = StatsStore.stats_Mod("constitution");
			return mod < 0 ? 0 : mod;
		},

		Num_WIS() {
      const StatsStore = useStatsStore();
			let mod = StatsStore.stats_Mod("wisdom");
			return mod < 0 ? 0 : mod;
		},


    // SECTION - Qualities
    qualities_Race_All() {
      const MYStore = useMYStore();
      const race = MYStore.level_Filter_Arr(MYStore.MY.race?.qualities);
			const ethnos = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.qualities);
			const backstory = MYStore.level_Filter_Arr(MYStore.MY.backstory?.qualities);
      const custom_race = MYStore.filter_Custom_Race_Lvl("qualities");
      return [...race, ...ethnos, ...backstory, ...custom_race];
    },

    qualities_Class_All() {
      const MYStore = useMYStore();
      const class_main = MYStore.level_Filter_Arr(MYStore.MY.class?.qualities);
      const custom_class = MYStore.filter_Custom_Class_Lvl("qualities");
      return [...class_main, ...custom_class];
    },

    qualities_RC_All() {
      const race_all = this.qualities_Race_All;
			const class_all = this.qualities_Class_All;
			return [...race_all, ...class_all];
    },

    qualities_Bonus: (stor) => (arr, name) => {
      const qual_bonus = arr.filter(el => el.name == name && el.type == "bonus");
      return qual_bonus.reduce((acc, el) => acc + el.num, 0);
    },

    qualities_Bonus_Race: (stor) => (name) => {
      return stor.qualities_Bonus(stor.qualities_Race_All, name);
    },

    qualities_Bonus_RC: (stor) => (name) => {
      return stor.qualities_Bonus(stor.qualities_RC_All, name);
    },

    qualities_Main_Numb: (stor) => (first_numb, arr, name) => {
      const qual_other_numb = arr.filter(el => el.name == name && !el.type);
      const new_numb_MAX = qual_other_numb.reduce((acc, el) => Math.max(acc, el.num), 0);
      return Math.max(first_numb, new_numb_MAX);
    },


    qualities_Main_Numb_Race: (stor) => (name) => {
      const first_numb = 0; 
      return stor.qualities_Main_Numb(first_numb, stor.qualities_Race_All, name);
    },

    qualities_Main_Numb_RC: (stor) => (name) => {
      const first_numb = stor.qualities_Main_Numb_Race(name); 
      return stor.qualities_Main_Numb(first_numb, stor.qualities_RC_All, name);
    },
    
    // NOTE - OLD
    qualities_Class_Main_Numb: (stor) => (name) => {
      const numb_RE = stor.qualities_Numb_RE(name);
      const qual_class_all = stor.qualities_Class_All;
      const qual_other_numb = qual_class_all.filter(el => el.name == name && !el.type);
      const new_numb_MAX = qual_other_numb.reduce((acc, el) => Math.max(acc, el.num), 0);
      return Math.max(numb_RE, new_numb_MAX);
    },

    // NOTE - OLD
    qualities_Numb_RE: (stor) => (name) => {
      const MYStore = useMYStore();
			let summ = 0;
			let race_numb = MYStore.MY.race.qualities?.[name];
			let ethnos_numb = MYStore.MY.ethnos.qualities?.[name];
			race_numb ? (summ += race_numb) : 0;
			ethnos_numb ? (summ += ethnos_numb) : 0;
			return summ;
		},

    // NOTE - Initiative
    initiative_Numb_Class() {
      const StatsStore = useStatsStore();
      const mod = StatsStore.stats_Mod("dexterity");
      const bonus_numb = this.qualities_Bonus_RC("initiative");
			return mod + bonus_numb;
		},

    // NOTE - Speed
    speed_Numb_Race() {
			const main_numb = this.qualities_Main_Numb_Race("speed");
      const bonus_numb = this.qualities_Bonus_Race("speed");
			return main_numb + bonus_numb;
		},

    speed_Numb_Class() {
			const main_numb = this.qualities_Main_Numb_RC("speed");
      const bonus_numb = this.qualities_Bonus_RC("speed");
			return main_numb + bonus_numb;
		},

    // NOTE - Vision_Night
    vision_night_Numb_Race() {
      const main_numb = this.qualities_Main_Numb_Race("vision_night");
      const bonus_numb = this.qualities_Bonus_Race("vision_night");
			return main_numb + bonus_numb;
		},

    vision_night_Numb_Class() {
      const main_numb = this.qualities_Main_Numb_RC("vision_night");
      const bonus_numb = this.qualities_Bonus_RC("vision_night");
			return main_numb + bonus_numb;
		},

	},

	actions: {},
});
