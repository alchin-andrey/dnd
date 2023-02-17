// import { ref, computed } from "vue";
// import { mapState } from "pinia";
import { defineStore } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";


import backstories from "@/assets/catalog/base_data/list_backstories.js";

export const useBackstoriesStore = defineStore({
	id: "BackstoriesStore",
	state: () => ({
		backstories: backstories,
	}),

	getters: {

	},

	actions: {
  }
});
