<template>
	<div class="selection_menu_wrap">
		
    <!-- <div class="selection_menu" v-if="MY_Subclass">
      <my-selection
				@click="showSettings__Class('subclass')"
				:active="class_page.shown.subclass"
				title="subclass"
				:type="MY_Subclass.name"
			></my-selection>
    </div> -->

    <!-- <div class="selection_menu">
			<AppSelectionArr 
      v-for="сustomm in subclass_Filter"
      :key="сustomm"
			:menu="[сustomm]"
			></AppSelectionArr>
		</div> -->

    <div class="selection_menu">
			<my-selection
				@click="showSettings__Class('stats')"
				:active="class_page.shown.stats"
				title="stats"
				:t_type="stats_Base_Settings_Two_T"
			></my-selection>
		</div>

    <!-- <div class="selection_menu">
			<AppSelectionArr :menu="filter_Setting('skills')"/>
		</div>

    <div class="selection_menu">
			<AppSelectionArr :menu="filter_Setting('proficiencies')"/>
		</div>

    <div class="selection_menu">
      <AppSelectionArr :menu="filter_Setting('armor_class')"/>
			<AppSelectionArr :menu="filter_Setting('weapons')"/>
			<AppSelectionArr :menu="filter_Setting('packs')"/>
			<AppSelectionArr :menu="filter_Setting('equipment')"/>
		</div> -->

    <div class="selection_menu">
			<AppSelectionArr 
      v-for="сustomm in customm_Settings_Class_Obj"
      :key="сustomm"
			:menu="сustomm"
			/>
		</div>



	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";

import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassMenu",
	computed: {
    // STORE
		...mapState(usePagesStore, ["class_page"]),
    // GETTERS
		...mapState(useMYStore, ["MY_Subclass", "customm_Settings_Class_Obj", "сustomm_Settings_Class_Arr"]),

    ...mapState(useStatsStore, [
      // "stats_Custom_Arr_RE", 
      "stats_Base_Settings_Two_T",
    ]),

		filter_Setting: (state) => (name) => {
			return state.сustomm_Settings_Class_Arr.filter((item) => item.name == name);
		},

    skills_Filter() {
      return this.filter_Setting("skills")
    },

    subclass_Filter() {
      let res = this.сustomm_Settings_Class_Arr.filter((item) => {
        let str = item.id_link.split("__");
        return str[1] == "subclass"
      });
      return res;
    }

	},
	methods: {
    ...mapActions(usePagesStore, ["showSettings__Class"]),
	},
};
</script>

<style scoped>

.selection_menu_wrap {
	display: flex;
	flex-direction: column;
	gap: 34px;
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
</style>
