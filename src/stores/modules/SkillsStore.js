// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

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

    skills_Numb_Bonus: (stor) => (arr_all, name) => {
      const filter_name = arr_all.filter(el => el.name == name);
      return filter_name.reduce((acc, el) => acc + stor[el.num], 0);
		},

    skills_Race_All() {
      const MYStore = useMYStore();
      const race = MYStore.level_Filter_Arr(MYStore.MY.race?.skills);
      const ethnos = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.skills);
      const backstory = MYStore.level_Filter_Arr(MYStore.MY.backstory?.skills);
      const race_custom = MYStore.filter_Custom_Race_Lvl("skills");
      return [...race, ...ethnos, ...backstory, ...race_custom];
    },

    skills_Race_Param() {
      const skills_name_all = this.skills_Race_All.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(skills_name_all)];
      return uniqu_name;
    },

    skills_Race_Numb: (stor) => (name) => {
			return stor.skills_Numb_Bonus(stor.skills_Race_All, name);
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

    skills_Class_All() {
      const MYStore = useMYStore();
      const class_main = MYStore.level_Filter_Arr(MYStore.MY.class?.skills);
      const class_custom = MYStore.filter_Custom_Class_Lvl("skills");
      return [...class_main, ...class_custom,];
    },

    stats_RC_Page() {
      const race_skills = this.skills_Race_All;
      const class_skills = this.skills_Class_All;
      return [...race_skills, ...class_skills];
    },

    skills_Class_Numb: (stor) => (name) => {
			return stor.skills_Numb_Bonus(stor.skills_Class_All, name);
		},

    skills_RC_All_Numb: (stor) => (name) => {
      const MYStore = useMYStore();
      const skill_MOD = stor.skills_MOD_Numb(name);
      const skill_Mastery = stor.skills_Numb_Bonus(stor.stats_RC_Page, name);;

      const spec_skills = MYStore.class_Specials_Filter_Lvl("skills");
			let skills_foo = null;
			spec_skills?.forEach((el) => (skills_foo = stor[el.foo](skill_Mastery)));
      return skills_foo ? skills_foo + skill_MOD : skill_Mastery + skill_MOD;
    },

    skills_Class_Param() {
      const skills_RC_name = this.stats_RC_Page.reduce((acc, el) => acc.concat(el.name), []);
			const uniqu_name = [...new Set(skills_RC_name)];
      return uniqu_name;
    },

    //NOTE - Skills_Passive
    skills_passive_MOD_Numb: (stor) => (name) => {
      const StatsStore = useStatsStore();
      const state_name = stor.skills_passive.find(el => el.name == name).mod;
			return StatsStore.stats_Mod(state_name);
    },
    
    skills_passive_Class_Numb: (stor) => (name) => {
      const MYStore = useMYStore();
      const skills_custom = MYStore.filter_Custom_Class_Lvl("skills_passive");
      const skills_name = skills_custom.filter(el => el.name == name);
      let skill_numb = skills_name.reduce((acc, el) => acc + el.num, 0);
			return skill_numb;
		},

    skills_passive_All_Numb: (stor) => (name) => {
      const skill_MOD = stor.skills_passive_MOD_Numb(name);
      const skill_Class = stor.skills_passive_Class_Numb(name);
      return skill_Class +  skill_MOD;
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
			return skill_mastery ? skill_mastery : half_mastery;
		},
    
    //!NOTE - Skills Foo

    getSkillMarg: (stor) => (i) => {
			return i == 0 ? true : stor.skills[i].mod !== stor.skills[i - 1].mod;
		},
  },

  actions: {
  }
});
