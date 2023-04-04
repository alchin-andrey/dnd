import { defineStore } from "pinia";
import masters from "@/assets/catalog/base_data/list_masters.js";

export const useMastersStore = defineStore({
	id: "MastersStore",
	state: () => ({
		masters: masters,
	}),

	getters: {

	},
});
