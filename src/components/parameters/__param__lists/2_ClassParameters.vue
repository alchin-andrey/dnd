<template>
	<transition name="mode-fade" mode="out-in">
		<!-- //NOTE - Main -->
    <section v-if="!class_page.shown.stats">
      <ClassParam__Stats hr />
      <ClassParam__Skills hr/>
			<ClassParam__Qualities hr />
			<ClassParam__Charges hr />
      <ClassParam__Proficiencies hr />
      <ClassParam__Fines hr />
      <ClassParam__Spells hr/>
			<ClassParam__Weapons hr />
			<ClassParam__EquipKit hr />
      <ClassParam__Text />
		</section>

  <!-- //NOTE - Stats -->
		<section v-else>
			<ClassParam__Qualities hr />
      <ClassParam__SkillsAll />
		</section>

	</transition>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import ClassParam from "@/components/parameters/2_param__class/ClassParam.js";

export default {
	name: "ClassParameters",
	mixins: [ClassParam],
	computed: {
		...mapState(usePagesStore, ["class_page"]),
	},
};
</script>

<style scoped>

.mode-fade-enter-active,
.mode-fade-leave-active {
	transition: opacity 0.3s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
	opacity: 0;
}
</style>
