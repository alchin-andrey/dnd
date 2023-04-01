<template>
    <my-wrapper gap_26>
			<div class="story int-400" v-html="t_Story"></div>
			<my-card-text
				v-if="MY.ethnos.name !== 'common'"
				:title="MY.ethnos.name"
				:text_html="MY.ethnos.details"
				:rare="MY.ethnos.rare"
			>
			</my-card-text>
			<my-card-text
				v-if="MY_Backstory.name"
				:title="MY_Backstory.name"
				:text_html="MY_Backstory.details"
        :text_html_2="MY_Backstory.expanded"
				:rare="MY_Backstory.rare"
			>
			</my-card-text>
		</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "RaceParam__Text",
	computed: {
		...mapState(useMYStore, ["MY", "MY_Backstory"]),

		t_Story() {
			return this.t(this.MY.race.details);
		},
	},
};
</script>
