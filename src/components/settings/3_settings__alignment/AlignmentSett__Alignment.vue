<template>
	<div>
		<AlignmentCard title="alignment" :arr="alignment_Arr" />
	</div>
</template>

<script>
import AlignmentCard from "@/components/settings/3_settings__alignment/AlignmentCard.vue";
import { mapState } from "pinia";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "AlignmentSett__Alignment",
	components: { AlignmentCard },
	computed: {
		...mapState(useAlignmentStore, ["alignment_Arr"]),
	},

	methods: {},
};
</script>

<style scoped>
</style>
