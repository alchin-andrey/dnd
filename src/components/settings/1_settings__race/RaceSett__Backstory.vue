<template>
  <div class="flex-col gap-34">
    <AppSrdDisclaimer :text="backstories_Arr.details"/>
    <section class="flex-col gap-8">
      <AppCusstomCard 
      v-for="list_el in backstories_Arr"
      :key="list_el"
      :custom="list_el"
      :select_list="[MY_Backstory]"
      @click="getBackName(list_el.name)"
      :active_boll_link="MY_Backstory.name == list_el.name" />
    </section>
  </div>
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
      return this.t("lobby_how_it_works_details_1");
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
