<template>
	<my-selection-card
		v-for="(item, i) in spells_Pass_Obj_RE"
		:key="item"
		@click="getCustomSelect_Spells_RE(name_Find(item))"
		:active_boll_link="spells_Custom_Arr_RE.includes(name_Find(item))"
    no_blur
	>
  <my-spell-text
				:lvl="1"
				:spell="item"
        select
			>
	</my-spell-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
export default {
	name: "RaceCustomSpells",
	computed: {
		// STORES
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useMYStore, [
      "spells_Keys",
      "spells_Activ_Obj_RE",
      "spells_Settings_Obj_RE", 
      "spells_Pass_Obj_RE", 
      "spells_Custom_Arr_RE"
    ]),

    // Index() {
    //   return (item) => item.findIndex((el) => el.name)
    // },

    name_Find() {
      return (item) => item.find((el) => el.name).name
    }

	},

	methods: {
		...mapActions(useMYStore, ["getCustomSelect_Spells_RE"]),

	},
};
</script>

<style scoped>
</style>
