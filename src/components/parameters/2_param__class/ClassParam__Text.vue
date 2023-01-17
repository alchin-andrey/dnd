<template>
	<my-wrapper gap_26>
		<div class="story int-400" v-html="t_Story"></div>
		<my-card-text
			v-if="MY_Subclass"
			:title="MY_Subclass.name"
			:text_html="MY_Subclass.details"
		>
		</my-card-text>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "ClassParam__Text",
	computed: {
		...mapState(useMYStore, ["MY", "MY_Subclass"]),

		t_Story() {
			return this.t(this.MY.class.details);
		},
	},
};
</script>
