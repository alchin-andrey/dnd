<template>
	<div>
		<BlankTable__MainNames type="name" />

		<section class="flex-row gap-36 mr-t-36">
			<BlankTable__QualStats type="stats" />

			<div class="flex-col w-324">
				<section class="flex-row-sb-c">
					<AppPrintLevelBlok />
					<AppPrintLevelBlok title="bardic_inspiration_slots" />
				</section>

				<Blank__Avatar class="avatar-print-oldschool mr-t-36" blank_print="oldschool"/> 

				<BlankTable__QualStats type="skills" />
			</div>
		</section>
		<BlankTable__Proficiencies class="mr-t-36" />
	</div>
</template>

<script>
import BlankTable__MainNames from "@/components/blank_print/BlankTable__MainNames.vue";
import BlankTable__QualStats from "@/components/blank_print/BlankTable__QualStats.vue";
import BlankTable__Proficiencies from "@/components/blank_print/BlankTable__Proficiencies.vue";
import Blank__Avatar from "@/components/blank_print/Blank__Avatar.vue";
export default {
	name: "Blank__ClassicList__Left",
	components: {
		BlankTable__MainNames,
		BlankTable__QualStats,
		BlankTable__Proficiencies,
		Blank__Avatar,
	},
};
</script>

<style scoped>
.w-324 {
	width: 324px;
}
.avatar-print-oldschool {
	width: 500px;
	flex: 1 1 auto;
	position: relative;
	left: -88px;
}
</style>
