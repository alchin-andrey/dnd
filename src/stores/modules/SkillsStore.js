// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";

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
  
      animal_hanging: { bonus: 0, mod: "wisdom" },
  
      performance: { bonus: 0, mod: "charisma" },
  
      persuasion: { bonus: 0, mod: "charisma" },
  
      deception: { bonus: 0, mod: "charisma" },
  
      intimidation: { bonus: 0, mod: "charisma" },
    },
	}),

  getters: {
    skills_Keys() {
      const MYStore = useMYStore();
			return Object.keys(MYStore.MY.skills);
		},

    skills_Activ_Obj_RE() {
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
				el => !this.skills_Activ_Arr_RE.includes(el)
			);
		},

    skills_All_RE() {
			return this.skills_Activ_Arr_RE.concat(this.skills_Custom_Arr_RE);
		},

    skills_Custom_Arr_RE() {
      const MYStore = useMYStore();
      return MYStore.COMMON_Custom_Arr_RE('skills');
    },
  },
});
