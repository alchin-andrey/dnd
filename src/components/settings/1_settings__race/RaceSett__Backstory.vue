<template>
  <AppCusstomCard 
  v-for="list_el in backstories_Arr"
	:key="list_el"
	:custom="list_el"
  :select_list="[list_el]"
	@click="getBackName(list_el.name)"
	:active_boll_link="MY.backstory_name == list_el.name"/>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "RaceSetting__Backstory",
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useMainStore, ["backstories_Arr"]),

	},
  methods: {
		getBackName(name) {
      this.MY.backstory_name = name;
		},
	},
};
</script>

<style scoped>
</style>
