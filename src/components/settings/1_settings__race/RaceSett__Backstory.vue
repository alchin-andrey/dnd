<template>
  <my-card-text
		class="marg-bot"
		v-if="t_Disclaimer"
		:text="t_Disclaimer"
	/>
  <AppCusstomCard 
  v-for="list_el in backstories_Arr"
	:key="list_el"
	:custom="list_el"
  :select_list="[list_el]"
	@click="getBackName(list_el.name)"
	:active_boll_link="MY_Backstory.name == list_el.name"/>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "RaceSetting__Backstory",
	computed: {
		...mapState(useMYStore, ["MY", "MY_Backstory"]),
		...mapState(useMainStore, ["backstories_Arr", "srd"]),

    t_Disclaimer() {
      return this.srd ? this.t("phb_disclaimer") : null;
    },

	},
  methods: {
		getBackName(name) {
      this.MY.backstory_name = name;
		},
	},
};
</script>

<style scoped>
.marg-bot {
	margin-bottom: 16px;
}
</style>
