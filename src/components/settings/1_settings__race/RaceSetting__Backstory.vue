<template>
  <AppCusstomCard 
  v-for="list_el in backstories"
	:key="list_el"
	:custom="list_el"
	@click="getCustomSelect(list_el)"
	:active_boll_link="MY.backstory.name == list_el.name"/>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useBackstoriesStore } from "@/stores/modules/BackstoriesStore";
export default {
	name: "RaceSetting__Backstory",
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useBackstoriesStore, ["backstories"]),

    
	},
  methods: {
		// getLink() {
		// 	if (!this.MY._settings_class[this.MY.class.name]) {
		// 		this.MY._settings_class[this.MY.class.name] = {};
		// 	}
		// },

		getCustomSelect(list_el) {
			// const active = this.custom.select_list.includes(list_el);
      this.MY.backstory = list_el;
			// let arr = this.custom.select_list.slice(0);
			// if (!active) {
			// 	arr.splice(0, 1);
			// 	arr.push(list_el);
			// }
			// this.getLink();
			// this.MY._settings_class[this.MY.class.name][this.custom.id_link] = arr;
		},
	},
};
</script>

<style scoped>
.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}
</style>
