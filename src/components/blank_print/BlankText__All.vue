<template>
	<div class="text-col">
    <my-card-text
				class="story-print int-400-22"
				notation="race"
				:title="MY.race.name"
				:text_html="MY.race.details"
				:rare="MY.race.rare"
				blank_print
			/>
      
      <div class="hr-print" v-if="MY.ethnos.name !== 'common'"></div>
			<my-card-text
        v-if="MY.ethnos.name !== 'common'"
				notation="ethnos"
				:title="MY.ethnos.name"
				:text_html="MY.ethnos.details"
				:rare="MY.ethnos.rare"
				blank_print
			/>
      
      <div class="hr-print"></div>
			<my-card-text
				notation="past"
				:title="MY.backstory.name"
				:text_html="MY.backstory.details"
				:text_html_2="MY.backstory.expanded"
				:rare="MY.backstory.rare"
				blank_print
			/>

    <div class="hr-print"></div>
		<my-card-text class="story-print int-400-22"
      notation="class"
			:title="MY.class.name"
			:text_html="MY.class.details"
      blank_print
		/>

    <div v-if="MY_Subclass" class="hr-print"></div>
		<my-card-text v-if="MY_Subclass"
      notation="subclass"
			:title="MY_Subclass.name"
			:text_html="MY_Subclass.details"
      blank_print
		/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "BlankText__All",
	computed: {
    ...mapState(useMYStore, ["MY", "сustomm_Settings_Class_Arr"]),

    MY_Subclass() {
      const сustomm = this.сustomm_Settings_Class_Arr;
      const subclass = сustomm.find(el => el.name == "subclass")
      return subclass?.select_list[0];
    }
	},
};
</script>

<style scoped>
.text-col {
	height: 100%;
	/* column-fill: auto; */
	column-count: 3;
	column-gap: 48px;
}

.hr-print {
  width: 100%;
	height: 2px;
	margin: 52px 0;
	background: #000000;
}
</style>
