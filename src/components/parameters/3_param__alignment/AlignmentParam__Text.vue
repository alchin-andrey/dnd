<template>
  <!-- <my-wrapper gap_26> -->
    <my-wrapper gap_26 hr>
			<my-card-text class="story int-400"
        notation="race"
				:title="MY_Race.name"
				:text_html="MY_Race.details"
				:rare="MY_Race.rare"
			>
			</my-card-text>
    </my-wrapper>

    <my-wrapper gap_26 hr v-if="MY_Ethnos.name !== 'common'">
			<my-card-text
        notation="ethnos"
				:title="MY_Ethnos.name"
				:text_html="MY_Ethnos.details"
				:rare="MY_Ethnos.rare"
			>
			</my-card-text>
		</my-wrapper>

    <my-wrapper gap_26 hr>
			<my-card-text
        notation="past"
				:title="MY_Backstory.name"
				:text_html="MY_Backstory.details"
        :text_html_2="MY_Backstory.expanded"
				:rare="MY_Backstory.rare"
			>
			</my-card-text>
		</my-wrapper>

    <my-wrapper gap_26 hr>
		<my-card-text class="story int-400"
      notation="class"
			:title="MY_Class.name"
			:text_html="MY_Class.details"
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
