// import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

import { useDicStore } from "@/stores/general/DicStore";

export const useSkillsStore = defineStore({
	id: 'SkillsStore',
	state: () => ({
    skills: [
      {name:"athletics", mod:"strength"},
      
      {name:"acrobatics", mod:"dexterity"},
      {name:"sleight_of_hand", mod:"dexterity"},
      {name:"stealth", mod:"dexterity"},

      {name:"investigation", mod:"intelligence"},
      {name:"history", mod:"intelligence"},
      {name:"religion", mod:"intelligence"},
      {name:"arcana", mod:"intelligence"},
      {name:"nature", mod:"intelligence"},

      {name:"survival", mod:"wisdom"},
      {name:"perception", mod:"wisdom"},
      {name:"insight", mod:"wisdom"},
      {name:"medicine", mod:"wisdom"},
      {name:"animal_handling", mod:"wisdom"},

      {name:"performance", mod:"charisma"},
      {name:"persuasion", mod:"charisma"},
      {name:"deception", mod:"charisma"},
      {name:"intimidation", mod:"charisma"},
    ],
    skills_passive: [
      {name:"investigation_passive", mod:"intelligence"},
      {name:"perception_passive", mod:"wisdom"},
      {name:"insight_passive", mod:"wisdom"},
    ]
	}),

  getters: {
    skills_Keys() {
			return this.skills.reduce((acc, el) => acc.concat(el.name), []);
		},

    skills_Numb_Bonus_Full: (stor) => (arr_all, name) => {
      const filter_name = arr_all.filter(el => el.name == name);
      const all_summ_bonus = filter_name.reduce((acc, el) => acc + stor[el.num], 0);
      return all_summ_bonus;
		},

    skills_Numb_Bonus: (stor) => (arr_all, name) => {
      const filter_name = arr_all.filter(el => el.name == name);
      const res_bonus = filter_name.reduce((acc, el) => Math.max(acc, stor[el.num]), 0);
      return res_bonus;
		},

    skills_Race_Owner() {
      const MYStore = useMYStore();
      const race = MYStore.level_Filter_Arr(MYStore.MY_Race?.skills);
      const ethnos = MYStore.level_Filter_Arr(MYStore.MY_Ethnos?.skills);
      const backstory = MYStore.level_Filter_Arr(MYStore.MY_Backstory?.skills);
      const race_custom = MYStore.filter_Custom_Race_Lvl("skills");
      return [...race, ...ethnos, ...backstory, ...race_custom];
    },

    skills_Race_Owner_All_Name() {
      const all_name = this.skills_Race_Owner.reduce((acc, el) => acc.concat(el.name), []);
      return all_name;
    },

    skills_Race_Param() {
      const skills_name_all = this.skills_Race_Owner_All_Name;
			const uniqu_name = [...new Set(skills_name_all)];
      return uniqu_name;
    },

    skills_Race_Numb_Bonus_Full: (stor) => (name) => {
			return stor.skills_Numb_Bonus_Full(stor.skills_Race_Owner, name);
		},

    skills_Race_Numb: (stor) => (name) => {
			return stor.skills_Numb_Bonus(stor.skills_Race_Owner, name);
		},

    skills_MOD_Numb: (stor) => (name) => {
      const StatsStore = useStatsStore();
      const state_name = stor.skills.find(el => el.name == name).mod;
			return StatsStore.stats_Mod(state_name);
    },

    skills_RP_MOD_Numb: (stor) => (name) => {
      const skills_RP = stor.skills_Race_Numb(name);
      const skills_MOD = stor.skills_MOD_Numb(name);
			return skills_RP + skills_MOD;
		},

    skills_Name_Class_Mastery_No_Settings() {
      const MYStore = useMYStore();
      const race_skills = this.skills_Race_Owner;
      const class_main = MYStore.level_Filter_Arr(MYStore.MY_Class?.skills);
      return [...race_skills, ...class_main];
    },

    skills_Settings_Class_Owner() {
      const MYStore = useMYStore();
      let res_arr = [];
      MYStore.сustomm_Settings_Class_Arr?.forEach(el => {
          el?.select_list.forEach(sub_el => {
            if(el.filter !== "only_mastery") {
              const item_lvl = MYStore.level_Filter_Arr(sub_el?.skills);
              res_arr = res_arr.concat(item_lvl);
            }
          });
        });
			return res_arr;
		},

    skills_Class_Owner() {
      const MYStore = useMYStore();
      const class_main = MYStore.level_Filter_Arr(MYStore.MY_Class?.skills);
      // const class_custom = MYStore.filter_Custom_Class_Lvl("skills");
      const class_custom_owner = this.skills_Settings_Class_Owner;
      return [...class_main, ...class_custom_owner,];
    },

    // skills_Class_Owner() {
    //   const MYStore = useMYStore();
    //   const class_main = MYStore.level_Filter_Arr(MYStore.MY_Class?.skills);
    //   const class_custom_owner = this.filterCustomSkillsClassLvl(false);
    //   return [...class_main, ...class_custom_owner];
    // },

    // skills_Class_Competence() {
    //   const class_custom_competence = this.filterCustomSkillsClassLvl(true);
    //   return class_custom_competence;
    // },

    skills_Settings_Class_Competence() {
      const MYStore = useMYStore();
      let res_arr = [];
      MYStore.сustomm_Settings_Class_Arr?.forEach(el => {
          el?.select_list.forEach(sub_el => {
            if(el.filter == "only_mastery") {
              const item_lvl = MYStore.level_Filter_Arr(sub_el?.skills);
              res_arr = res_arr.concat(item_lvl);
            }
          });
        });
			return res_arr;
		},

    skills_Class_Competence() {
      const class_custom_competence = this.skills_Settings_Class_Competence;
      return class_custom_competence;
		},

    skills_RC_Owner() {
      const race_skills_owner = this.skills_Race_Owner;
      const class_skills_owner = this.skills_Class_Owner;
      return [...race_skills_owner, ...class_skills_owner,];
    },

    skills_RC_Page() {
      const RC_skills_owner = this.skills_RC_Owner;
      const class_skills_competence = this.skills_Class_Competence;
      return [...RC_skills_owner, ...class_skills_competence];
    },

    skills_RC_Owner_All_Name() {
      const all_name = this.skills_RC_Owner.reduce((acc, el) => acc.concat(el.name), []);
      return all_name;
    },

    skills_RC_Page_Name() {
      let all_name = this.skills_RC_Page.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(all_name)];
      return uniqu_name;
    },

    skills_Class_Numb_Owner: (stor) => (name) => {
      const skills_race_numb = stor.skills_Race_Numb(name);
      const skills_class_numb = stor.skills_Numb_Bonus(stor.skills_Class_Owner, name);
      const rest = skills_class_numb - skills_race_numb;
      const res_numb = rest < 0 ? 0 : rest;
      return res_numb;
    },

    skills_RC_Numb_Owner: (stor) => (name) => {
      const race_numb_owner = stor.skills_Race_Numb(name);
      const class_numb_owner = stor.skills_Class_Numb_Owner(name);
      return race_numb_owner + class_numb_owner;
    },

    skills_Class_Numb_Competence: (stor) => (name) => {
      const RC_numb_owner = stor.skills_RC_Numb_Owner(name);
      const class_numb_competence = stor.skills_Numb_Bonus(stor.skills_Class_Competence, name);
      const numb_summ = RC_numb_owner + class_numb_competence;
      const max_numb = stor.Mastery_x2;
      const res_numb = numb_summ <= max_numb ? class_numb_competence : 0;
      return res_numb;
    },

    skills_Class_Numb_Bonus_Full: (stor) => (name) => {
			return stor.skills_Numb_Bonus_Full(stor.skills_Class_Owner, name);
		},

    skills_Class_Numb: (stor) => (name) => {
      const class_numb_owner = stor.skills_Class_Numb_Owner(name);
      const class_numb_competence = stor.skills_Class_Numb_Competence(name);
      const skills_foo = stor.skill_Specials_Foo(name);
			return class_numb_owner + class_numb_competence + skills_foo;
		},

    skill_Specials_Foo: (stor) => (name) => {
      const MYStore = useMYStore();
      const skill_Mastery = stor.skills_Numb_Bonus(stor.skills_RC_Page, name);
      const spec_skills = MYStore.class_Specials_Filter_Lvl("skills");
      let skills_foo = 0;
			spec_skills?.forEach((el) => (skills_foo = stor[el.foo](skill_Mastery)));
      return skills_foo;
    },

    skills_RC_All_Numb: (stor) => (name) => {
      const skill_RP_MOD = stor.skills_RP_MOD_Numb(name);
      const class_numb = stor.skills_Class_Numb(name);
      return skill_RP_MOD + class_numb;
    },

    skills_Class_Param() {
      const skills_RC_name = this.skills_RC_Page.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(skills_RC_name)];
      return uniqu_name;
    },

    //NOTE - Skills_Passive
    skills_passive_RP_MOD_Numb: (stor) => (name) => {
      const name_skill = name.replace("_passive", '');
      const RP_mod = stor.skills_RP_MOD_Numb(name_skill);
			return RP_mod;
    },
    
    skills_passive_Class_Numb: (stor) => (name) => {
      const name_skill = name.replace("_passive", '');
      const class_numb = stor.skills_Class_Numb(name_skill);

      const MYStore = useMYStore();
      const skills_custom = MYStore.filter_Custom_Class_Lvl("skills_passive");
      const skills_name = skills_custom.filter(el => el.name == name);
      const skill_numb = skills_name.reduce((acc, el) => acc + el.num, 0);
			return class_numb + skill_numb;
		},

    skills_passive_All_Numb: (stor) => (name) => {
      const skill_RP_MOD = stor.skills_passive_RP_MOD_Numb(name);
      const skill_Class = stor.skills_passive_Class_Numb(name);
      return skill_Class +  skill_RP_MOD;
    },

    skills_passive_Print_All_Numb: (stor) => (name) => {
      const skill_all_numb = stor.skills_passive_All_Numb(name);
      return 10 + skill_all_numb;
    },

    skills_passive_Class_Param() {
      const MYStore = useMYStore();
      const skills_custom = MYStore.filter_Custom_Class_Lvl("skills_passive");
      const skills_custom_name = skills_custom.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(skills_custom_name)];
      return uniqu_name;
    },

    //NOTE - Skills Foo
    Mastery() {
      const MYStore = useMYStore();
			return MYStore.Mastery;
		},

    Mastery_x2() {
			return this.Mastery * 2;
		},

		Half_Mastery: (stor) => (skill_mastery) => {
      const MYStore = useMYStore();
			const half_mastery = Math.floor(MYStore.Mastery / 2);
			return skill_mastery ? 0 : half_mastery;
		},
    
    //!NOTE - Skills Foo

    getSkillMarg: (stor) => (i) => {
			return i == 0 ? true : stor.skills[i].mod !== stor.skills[i - 1].mod;
		},

    //NOTE - Skills Pages
    skills_Owner_Name_Page() {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return this.skills_Race_Owner_All_Name;
			} else if (PagesStore.pages.class_page) {
				return this.skills_RC_Owner_All_Name;
			} else {
				return this.skills_RC_Owner_All_Name;
			}
		},

    skills_Numb_Bonus_Full_Page: (stor) => (name) => {
			const PagesStore = usePagesStore();
			if (PagesStore.pages.race_page) {
				return stor.skills_Race_Numb_Bonus_Full(name);
			} else if (PagesStore.pages.class_page) {
				return stor.skills_Class_Numb_Bonus_Full(name);
			} else {
				return stor.skills_Class_Numb_Bonus_Full(name);
			}
		},

    t_skill_Arr() {
      const DicStore = useDicStore();
			let arr = [];
			this.skills_Keys.forEach((el) => {
				const t_name = DicStore.t(el);
				const numb = this.skills_RC_All_Numb(el);
				arr.push({ t_name: t_name, numb: numb });
			});
			arr.sort((a, b) => a.t_name.localeCompare(b.t_name));
			return arr;
		},
  },

  actions: {
    filterCustomSkillsClassLvl(filter) {
      const MYStore = useMYStore();
      let res_arr = [];
      MYStore.сustomm_Settings_Class_Arr?.forEach(el => {
          el?.select_list.forEach(sub_el => {
            if(filter && el.filter == "only_mastery") {
              const item_lvl = MYStore.level_Filter_Arr(sub_el?.skills);
              res_arr = res_arr.concat(item_lvl);
            } else if(!filter && el.filter !== "only_mastery") {
              const item_lvl = MYStore.level_Filter_Arr(sub_el?.skills);
              res_arr = res_arr.concat(item_lvl);
            }
          });
        });
			return res_arr;
		},
  }
});
