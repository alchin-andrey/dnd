<template>
	<transition name="fade-menu">
	<AppSelection
		v-if="show_Menu_Set"
		@click="showSettings__Alignment('photo')"
		:active="alignment_page.shown.photo"
		title="photo"
		:type="photo_Select"
	/>
</transition>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useAlignmentStore } from "@/stores/modules/AlignmentStore";

export default {
	name: "AlignmentMenu__Photo",
	computed: {
    // STORE
		...mapState(usePagesStore, ["pages", "alignment_page", "screen_Max"]),
		...mapState(useAlignmentStore, ["photo_Select"]),

		show_Menu_Set() {
			return (this.screen_Max && this.alignment_page.shown.photo) 
			|| this.pages.alignment_page
		}
	},
	methods: {
    ...mapActions(usePagesStore, ["showSettings__Alignment"]),
	},
};
</script>

<style scoped>

.fade-menu-enter-active {
  transition: all 0.3s ease-out;
}

.fade-menu-leave-active {
  /* transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1); */
  transition: all 0.5s ease-in;
}

.fade-menu-enter-from,
.fade-menu-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
