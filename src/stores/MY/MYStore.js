// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";

export const useMYStore = defineStore({
	id: 'MYStore',
	state: () => ({
    MY: MY
	}),
  getters: {

  },
	actions: {
    getEthnos() {
			this.MY.ethnos = Object.values(this.MY.race.settings.ethnos)[0];
		},
	},
});
