// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

export const useSkillsStore = defineStore({
	id: 'SkillsStore',
	state: () => ({
    skills: {
      athletics: { bonus: 0, mod: "strength" },
      acrobatics: { bonus: 0, mod: "dexterity" },
      sleight_of_hand: { bonus: 0, mod: "dexterity" },
      stealth: { bonus: 0, mod: "dexterity" },
      investigation: { bonus: 0, mod: "intelligence" },
      history: { bonus: 0, mod: "intelligence" },
      religion: { bonus: 0, mod: "intelligence" },
      arcana: { bonus: 0, mod: "intelligence" },
      nature: { bonus: 0, mod: "intelligence" },
      survival: { bonus: 0, mod: "wisdom" },
      perception: { bonus: 0, mod: "wisdom" },
      insight: { bonus: 0, mod: "wisdom" },
      medicine: { bonus: 0, mod: "wisdom" },
      animal_handling: { bonus: 0, mod: "wisdom" },
      performance: { bonus: 0, mod: "charisma" },
      persuasion: { bonus: 0, mod: "charisma" },
      deception: { bonus: 0, mod: "charisma" },
      intimidation: { bonus: 0, mod: "charisma" },
    },
    _skills: [
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
    ]
	}),

  getters: {
    skills_Keys() {
      const MYStore = useMYStore();
			return Object.keys(MYStore.MY.skills);
		},

		skills_Activ_Obj_RE(state) {
      const MYStore = useMYStore();
			let i = MYStore.MY.race.skills;
			let j = MYStore.MY.ethnos.skills;
			return Object.assign({}, i, j);
		},

		skills_Activ_Arr_RE() {
			return Object.keys(this.skills_Activ_Obj_RE);
		},

		skills_Pass_Arr_RE() {
			return this.skills_Keys.filter(
				(el) => !this.skills_Activ_Arr_RE.includes(el)
			);
		},

		skills_All_RE() {
			return this.skills_Activ_Arr_RE.concat(this.skills_Custom_Arr_RE);
		},

		skills_Custom_Arr_RE() {
      const MYStore = useMYStore();
			return MYStore.COMMON_Custom_Arr_RE("skills");
		},

    skills_Old_Numb: (state) => (name) => {
      const MYStore = useMYStore();
      const StatsStore = useStatsStore();
			const state_name = MYStore.MY.skills[name].mod;
			const mod = StatsStore.stats_Mod(state_name);
			let race_mastery = null;
			state.skills_All_RE.includes(name)
				? (race_mastery = MYStore.Mastery)
				: null;
			const spec_skills = MYStore.class_Specials_Filter_Lvl("skills");
			let skills_foo = null;
			spec_skills?.forEach((el) => (skills_foo = state[el.foo](race_mastery)));
			return skills_foo ? skills_foo + mod : race_mastery + mod;
		},

    // skills_Class_Numb: (state) => (name) => {
    //   const MYStore = useMYStore();
    //   // const StatsStore = useStatsStore();
		// 	// const state_name = MYStore.MY.skills[name].mod;
		// 	// const mod = StatsStore.stats_Mod(state_name);
    //   const skills_custom = MYStore.filter_Custom_Class_Lvl("skills");
    //   const skills_name = skills_custom.filter(el => el.name == name);
    //   let skill_numb = 0;
    //   skills_name.forEach(el => skill_numb += this[el.num]);
		// 	return skill_numb;
		// },

    // skills_Name_All() {
    //   const MYStore = useMYStore();
    //   const race_page = this.skills_All_RE;
    //   const skills_custom = MYStore.filter_Custom_Class_Lvl("skills");
    //   const skills_custom_name = skills_custom.reduce((acc, el) => acc.concat(el.name), []);
		// 	const uniqu_name = [...new Set(skills_custom_name)];
    //   return skills_custom;
    // },

    //NOTE - Skills Foo
    Mastery() {
      const MYStore = useMYStore();
			return MYStore.Mastery;
		},

    Mastery_x2() {
			return this.Mastery * 2;
		},

		Half_Mastery: (state) => (skill_mastery) => {
      const MYStore = useMYStore();
			const half_mastery = Math.floor(MYStore.Mastery / 2);
			return skill_mastery ? skill_mastery : half_mastery;
		},
    
    //!NOTE - Skills Foo

    getSkillMarg: () => (i, name) => {
			if (i === 0) {
				return true;
			}
			let obj = Object.values(name);
			if (obj[i].mod !== obj[i - 1].mod) {
				return true;
			}
			return false;
		},
  },

  actions: {
    getCustomSelect_Skills_RE(name) {
      const MYStore = useMYStore();
			MYStore.getCustomSelect_COMMON_RE("skills", name);
		},
  }
});
