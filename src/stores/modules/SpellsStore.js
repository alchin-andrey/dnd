// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";

import { barbarian_rage_bonus } from "@/assets/catalog/base_data/step2_classes.js";
import spells from "@/assets/catalog/base_data/list_spells.js";

export const useSpellsStore = defineStore({
	id: 'SpellsStore',
	state: () => ({
    spells: spells,
	}),

  getters: {
    
  },
  actions: {
  }
});
