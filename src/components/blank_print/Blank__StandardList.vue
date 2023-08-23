<template>
	<div>
		<section class="blank-head">
			<div class="grid-wrap">
				<BlankTable__MainNames />
				<BlankTable__MainSett />
				<BlankTable__Proficiencies />
			</div>
			<Blank__Avatar class="avatar-print-standard" blank_print="standard" />
		</section>
		<section class="wrap-bottom pos-rel">
			<BlankTable__QualStats />
			<BlankTable__Fines class="mr-t-36" />
		</section>
	</div>
</template>

<script>

import BlankTable__MainNames from "@/components/blank_print/BlankTable__MainNames.vue";
import BlankTable__MainSett from "@/components/blank_print/BlankTable__MainSett.vue";
import BlankTable__Proficiencies from "@/components/blank_print/BlankTable__Proficiencies.vue";
import Blank__Avatar from "@/components/blank_print/Blank__Avatar.vue";
import BlankTable__QualStats from "@/components/blank_print/BlankTable__QualStats.vue";
import BlankTable__Fines from "@/components/blank_print/BlankTable__Fines.vue";
export default {
	name: "Blank__StandardList",
	components: {
		BlankTable__MainNames,
		BlankTable__MainSett,
		BlankTable__Proficiencies,
		Blank__Avatar,
		BlankTable__QualStats,
		BlankTable__Fines,
	},
};
</script>

<style scoped>
.blank-head {
	display: flex;
	gap: 72px;
	height: 1403px;
}

.grid-wrap {
	min-width: 648px;
	max-width: 648px;
	display: flex;
	flex-direction: column;
	gap: 36px;
}

.avatar-print-standard {
	width: 100%;
	height: 1404px;
	position: relative;
	display: flex;
	justify-content: space-between;
}

.wrap-bottom {
	border-top: 1px dashed #333333;
	height: 1404px;
  padding-top: 72px;
}
</style>
