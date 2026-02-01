<template>
	<main>
		<section class="wrap-head">
			<BlankTable__Actions />
			<section class="flex-row mr-t-36" v-if="standard_Blank">
				<BlankTable__Equip />
				<BlankTable__Weapons />
			</section>
			<!-- <BlankText__Biography class="mr-t-72" v-else /> -->
		</section>
		<Blank__SelectMenu />
	</main>
</template>

<script>

import BlankTable__Actions from "@/components/blank_print/BlankTable__Actions.vue";
import BlankTable__Equip from "@/components/blank_print/BlankTable__Equip.vue";
import BlankTable__Weapons from "@/components/blank_print/BlankTable__Weapons.vue";
import BlankText__Biography from "@/components/blank_print/BlankText__Biography.vue";
import Blank__SelectMenu from "@/components/blank_print/Blank__SelectMenu.vue";
export default {
	name: "Blank__Page_2",
	components: {
		BlankTable__Actions,
		BlankTable__Equip,
		BlankTable__Weapons,
		BlankText__Biography,
		Blank__SelectMenu,
	},

	props: {
		blank_print: {
			type: String,
			default: null,
		},
	},

	computed: {
		standard_Blank() {
			return this.blank_print == 'standard';
		},
	},
};
</script>

<style scoped>
.wrap-head {
  height: 1403px;
}
</style>
