<template>
  <AppCusstomCard 
  v-for="list_el in backstories"
	:key="list_el"
	:custom="list_el"
  :select_list="[list_el]"
	@click="getCustomSelect(list_el)"
	:active_boll_link="MY.backstory.name == list_el.name"/>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useBackstoriesStore } from "@/stores/modules/simple/BackstoriesStore";
export default {
	name: "RaceSetting__Backstory",
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useBackstoriesStore, ["backstories"]),

	},
  methods: {
		getCustomSelect(list_el) {
      this.MY.backstory = list_el;
		},
	},
};
</script>

<style scoped>
/* .ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
} */
</style>
