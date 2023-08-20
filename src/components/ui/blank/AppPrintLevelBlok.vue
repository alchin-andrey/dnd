<template>
	<section class="level-blok br-6" 
	:class="{
		'br-24': br_24,
	}">
		<div>{{ t_Title }}</div>
		<div class="int-600-48" v-if="!title">{{ MY.level }}</div>
		<div v-if="!title">{{ t_Mastery }}</div>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "AppPrintLevelBlok",
	props: {
		title: {
			type: String,
			default: null,
		},
		br_24: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		...mapState(useMYStore, ["MY", "Mastery"]),

		t_lvl() {
			return this.T("level");
		},

		t_Title() {
			return this.title ? this.T(this.title) : this.t_lvl;
		},

		t_Mastery() {
			return `${this.t("print_mastry")} +${this.Mastery}`
		},
	},
};
</script>

<style scoped>
.level-blok {
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
	padding-top: 8px;
	gap: 2px;
	width: 144px;
	height: 144px;
	border: 1px solid #000000;
	position: relative;
	z-index: 1000;
	background-color: #ffffff;
}
</style>
