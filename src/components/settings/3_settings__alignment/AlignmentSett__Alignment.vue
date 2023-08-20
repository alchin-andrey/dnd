<template>
	<My-Selection-Box title="alignment" :select="MY.alignment" :shown="alignment_page.shown.alignment">
		<AlignmentCard title="alignment" :arr="alignment_Arr" />
	</My-Selection-Box>
</template>

<script>
import AlignmentCard from "@/components/settings/3_settings__alignment/AlignmentCard.vue";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
export default {
	name: "AlignmentSett__Alignment",
	components: { AlignmentCard },
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["alignment_page"]),
		...mapState(useAlignmentStore, ["alignment_Arr"]),
	},

	methods: {},
};
</script>

<style scoped></style>
