<template>
	<div class="text-col">
		<my-card-text
			class="story-print int-400-22"
			notation="race"
			:title="MY_Race.name"
			:text_html="MY_Race.details"
			:rare="MY_Race.rare"
			blank_print
		/>
				
		<div class="hr-print" v-if="MY_Ethnos.name !== 'common'"></div>
		<my-card-text
			v-if="MY_Ethnos.name !== 'common'"
			notation="ethnos"
			:title="MY_Ethnos.name"
			:text_html="MY_Ethnos.details"
			:rare="MY_Ethnos.rare"
			blank_print
		/>
			
		<div class="hr-print"></div>
		<my-card-text
			notation="past"
			:title="MY_Backstory.name"
			:text_html="MY_Backstory.details"
			:text_html_2="MY_Backstory.expanded"
			:rare="MY_Backstory.rare"
			blank_print
		/>
	
		<div class="hr-print"></div>
		<my-card-text class="story-print int-400-22"
			notation="class"
			:title="MY_Class.name"
			:text_html="MY_Class.details"
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
    ...mapState(useMYStore, [
      "MY",
      "MY_Race",
      "MY_Ethnos",
      "MY_Backstory",
      "MY_Class",
      "MY_Subclass",
      "сustomm_Settings_Class_Arr"
    ]),

	},
};
</script>

<style scoped>
.text-col {
	height: 100%;
	/* column-fill: auto; */
		column-count: 3;
	column-gap: 72px;
}

.hr-print {
  width: 100%;
	height: 2px;
	margin: 52px 0;
	background: #000000;
}
</style>
