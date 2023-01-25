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
		...mapState(useMYStore, ["MY", "сustomm_Settings_Class_Arr"]),

		t_Story() {
			return this.t(this.MY.class.details);
		},

    MY_Subclass() {
      const сustomm = this.сustomm_Settings_Class_Arr;
      const subclass = сustomm.find(el => el.name == "subclass")
      return subclass?.select_list[0];
    }
	},
};
</script>
