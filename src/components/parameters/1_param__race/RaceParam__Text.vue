<template>
    <AppWrapper gap="26" :hr="hr">
			<div class="story int-400" v-html="t_Story"></div>
			<my-card-text
				v-if="MY_Ethnos.name !== 'common'"
				:title="MY_Ethnos.name"
				:text_html="MY_Ethnos.details"
				:rare="MY_Ethnos.rare"
			>
			</my-card-text>
			<my-card-text
				:title="MY_Backstory.name"
				:text_html="MY_Backstory.details"
        :text_html_2="MY_Backstory.expanded"
				:rare="MY_Backstory.rare"
			>
			</my-card-text>
		</AppWrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "RaceParam__Text",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, [
      "MY", 
      "MY_Backstory", 
      "MY_Race",
      "MY_Ethnos",
    ]),

		t_Story() {
			return this.t(this.MY_Race.details);
		},
	},
};
</script>
