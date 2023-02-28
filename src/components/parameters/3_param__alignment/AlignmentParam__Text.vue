<template>
  <!-- <my-wrapper gap_26> -->
    <my-wrapper gap_26 hr>
			<my-card-text class="story int-400"
        notation="race"
				:title="MY.race.name"
				:text_html="MY.race.details"
				:rare="MY.race.rare"
			>
			</my-card-text>
    </my-wrapper>

    <my-wrapper gap_26 hr v-if="MY.ethnos.name !== 'common'">
			<my-card-text
        notation="ethnos"
				:title="MY.ethnos.name"
				:text_html="MY.ethnos.details"
				:rare="MY.ethnos.rare"
			>
			</my-card-text>
		</my-wrapper>

    <my-wrapper gap_26 hr>
			<my-card-text
        notation="past"
				:title="MY.backstory.name"
				:text_html="MY.backstory.details"
        :text_html_2="MY.backstory.expanded"
				:rare="MY.backstory.rare"
			>
			</my-card-text>
		</my-wrapper>

    <my-wrapper gap_26 hr>
		<my-card-text class="story int-400"
      notation="class"
			:title="MY.class.name"
			:text_html="MY.class.details"
		>
		</my-card-text>
	</my-wrapper>

	<my-wrapper gap_26 v-if="MY_Subclass" hr>
		<my-card-text
      notation="subclass"
			:title="MY_Subclass.name"
			:text_html="MY_Subclass.details"
		>
		</my-card-text>
	</my-wrapper>
<!-- </my-wrapper> -->
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "AlignmentParam__Text",
	computed: {
		...mapState(useMYStore, ["MY", "сustomm_Settings_Class_Arr"]),

		// t_Story() {
		// 	return this.t(this.MY.class.details);
		// },

    MY_Subclass() {
      const сustomm = this.сustomm_Settings_Class_Arr;
      const subclass = сustomm.find(el => el.name == "subclass")
      return subclass?.select_list[0];
    }
	},
};
</script>
