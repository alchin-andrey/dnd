<template>
		<div>
			<BlankTable__MainNames type="name"/>

			<section class="flex-row gap-36 mr-t-36">
				<BlankTable__QualStats type="stats" />

				<div class="flex-col-sb">
					<section class="flex-row-sb-c">
						<AppPrintLevelBlok />
						<AppPrintLevelBlok title="bardic_inspiration_slots"/>
					</section>

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
export default {
	name: "Blank__ClassicList__Left",
	components: {
		BlankTable__MainNames,
		BlankTable__QualStats,
		BlankTable__Proficiencies,
	},
};
</script>

<style scoped>
</style>
