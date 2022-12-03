<template>
	<my-selection-card
		v-for="item in spells_Pass_Obj_RE"
		:key="item"
		@click="getCustomSelect_Spells_RE(name_Find(item))"
		:active_boll_link="spells_Custom_Arr_RE.includes(name_Find(item))"
    no_blur
	>
  <my-spell-text
				:lvl="ethnos_Setting('spells').level"
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
      "ethnos_Setting",
      "spells_Pass_Obj_RE", 
      "spells_Custom_Arr_RE",
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
