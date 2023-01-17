<template>
	<transition name="mode-fade" mode="out-in">
		
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

			<!-- //NOTE - text -->
			<my-wrapper gap_26>
				<div class="story int-400" v-html="t_Story"></div>
				<my-card-text
					v-if="MY_Subclass"
					:title="MY_Subclass.name"
					:text="MY_Subclass.details"
				>
				</my-card-text>
			</my-wrapper>
		</section>

		<section v-else>
			<ClassParam__Qualities hr />
      <ClassParam__SkillsAll/>
		</section>

	</transition>
</template>

<script>
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import ClassParam from "@/components/parameters/2_param__class/ClassParam.js";

export default {
	name: "ClassParameters",
	mixins: [ClassParam],
	computed: {
		// STORE
		...mapState(usePagesStore, ["class_page"]),
		...mapState(useMYStore, ["MY", "MY_Subclass"]),

		t_Story() {
			return this.t(this.MY.class.details);
		},
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
