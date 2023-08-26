<template>
		<div class="flex-col gap-36-blank">
			<BlankTable__MainNames type="part" :part="1"/>
			<BlankTable__QualStats type="atribute" />
			<BlankTable__Weapons classic/>
			<BlankTable__Equip classic/>
		</div>
</template>

<script>

import BlankTable__MainNames from "@/components/blank_print/BlankTable__MainNames.vue";
import BlankTable__QualStats from "@/components/blank_print/BlankTable__QualStats.vue";
import BlankTable__Weapons from "@/components/blank_print/BlankTable__Weapons.vue";
import BlankTable__Equip from "@/components/blank_print/BlankTable__Equip.vue";
export default {
	name: "Blank__OldschoolList__Center",
	components: {
		BlankTable__MainNames,
		BlankTable__QualStats,
		BlankTable__Weapons,
		BlankTable__Equip,
	},
	computed: {
	},
};
</script>

<style scoped>
</style>
