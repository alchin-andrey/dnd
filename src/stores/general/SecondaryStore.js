import { defineStore } from "pinia";
import masters from "@/assets/catalog/base_data/list_masters.js";
import clubs from "@/assets/catalog/base_data/list_clubs.js";

export const useSecondaryStore = defineStore({
	id: "SecondaryStore",
	state: () => ({
		masters,
		clubs,
	}),
});
