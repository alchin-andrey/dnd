<template>
	<AppWrapper gap="26">
		<div class="story int-400" v-html="t_Story"></div>
		<my-card-text
			v-if="MY_Subclass"
			:title="MY_Subclass.name"
			:text_html="MY_Subclass.details"
		>
		</my-card-text>
	</AppWrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "ClassParam__Text",
	computed: {
		...mapState(useMYStore, [
      "MY",
      "MY_Class",
      "MY_Subclass",
      "сustomm_Settings_Class_Arr",
    ]),

		t_Story() {
			return this.t(this.MY_Class.details);
		},
	},
};
</script>
