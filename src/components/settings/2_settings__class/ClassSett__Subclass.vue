<template>
	<!-- <my-selection-card
		v-for="subclass in subclass_Find_Lvl.list"
		:key="subclass"
		no_blur
		@click="getSubclassObj(subclass)"
		:active_boll_link="active_Subclass(subclass)"
	> -->
  <Card__CusstomClass
  v-for="subclass in subclass_Find_Lvl.list"
	:key="subclass"
  :customm="subclass"
  @click="getSubclassObj(subclass)"
	:active_boll_link="active_Subclass(subclass)"
  />
	<!-- </my-selection-card> -->
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

import Card__CusstomClass from "@/components/settings/2_settings__class/Card__CusstomClass.vue";
export default {
	name: "ClassSett__Subclass",
	components: {
    Card__CusstomClass,
	},
	computed: {
		// STORE
		...mapState(useMYStore, [
			"MY",
			"MY_Subclass",
			"subclass_Find_Lvl",
		]),

		active_Subclass: (state) => (subclass) => {
			return state.MY_Subclass.name === subclass.name;
		},
	},
	methods: {
		getSubclassObj(obj) {
			this.MY.subclass_save[this.MY.class.name] = obj;
		},
	},
};
</script>

<style>
/* .ethnos_cards_menu {
	display: flex;
	flex-direction: column;
	gap: 8px;
} */
</style>
