<template>
	<div>
		<GenderCard title="phisiological" :arr="phisiological_Arr" />
		<GenderCard class="marg-top-8" v-vpshow="shown_Look" title="feel" :arr="feel_Arr"/>
		<!-- v-vpshow="shown_Look" -->
		<section class="null_height" :class="{ full_height: shown_Look }">
			<GenderCard class="marg-top-8" title="look" :arr="look_Arr" />
		</section>
		<GenderCard class="marg-top-8" title="attraction" :arr="attraction_Arr" />
	</div>
</template>

<script>
import GenderCard from "@/components/settings/1_settings__race/GenderCard.vue";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useGenderStore } from "@/stores/modules/simple/GenderStore";
export default {
	name: "RaceSetting__Gender",
	components: { GenderCard },
	computed: {
		...mapState(useMYStore, ["MY"]),

		...mapState(useGenderStore, [
			"phisiological_Arr",
			"feel_Arr",
			"look_Arr",
			"attraction_Arr",
		]),

		shown_Look() {
			return this.MY.gender.feel !== "cisgender";
		},
	},

	methods: {},
};
</script>

<style scoped>
.null_height {
	max-height: 0;
	/* opacity: 0.5; */
	transition: all 0.5s ease-out;
	overflow: hidden;
}

.full_height {
	max-height: 300px;
	/* opacity: 1; */
	transition: all 0.5s ease-in;
}

.marg-top-8 {
	margin-top: 8px;
}
</style>
