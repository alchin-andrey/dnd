<template>
	<div>
		<BlankTable__MainNames type="name" />

		<section class="flex-row gap-36-blank mr-t-36-blank">
			<BlankTable__QualStats type="stats" />

			<div class="flex-col w-324">
				<section class="flex-row-sb-c">
					<AppPrintLevelBlok />
					<AppPrintLevelBlok title="bardic_inspiration_slots" />
				</section>

				<Blank__Avatar class="avatar-print-oldschool mr-t-36-blank" blank_print="oldschool" :blank_size="blank_size"/> 

				<BlankTable__QualStats type="skills" />
			</div>
		</section>
		<BlankTable__Proficiencies class="mr-t-36-blank" />
	</div>
</template>

<script>
import BlankTable__MainNames from "@/components/blank_print/BlankTable__MainNames.vue";
import BlankTable__QualStats from "@/components/blank_print/BlankTable__QualStats.vue";
import BlankTable__Proficiencies from "@/components/blank_print/BlankTable__Proficiencies.vue";
import Blank__Avatar from "@/components/blank_print/Blank__Avatar.vue";
export default {
	name: "Blank__OldschoolList__Left",
	components: {
		BlankTable__MainNames,
		BlankTable__QualStats,
		BlankTable__Proficiencies,
		Blank__Avatar,
	},
	props: {
		blank_size: {
			type: String,
			default: null,
		},
	},
};
</script>

<style scoped>
.w-324 {
	width: var(--px-324);
}
.avatar-print-oldschool {
	width: var(--px-504);
	flex: 1 1 auto;
	position: relative;
	right: var(--px-90);
}
</style>
