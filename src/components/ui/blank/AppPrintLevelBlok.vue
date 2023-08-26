<template>
	<section class="level-blok blank-br-6" 
	:class="{
		'blank-br-24': br_24,
	}">
		<div>{{ t_Title }}</div>
		<div class="int-600-48-blank" v-if="!title">{{ MY.level }}</div>
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
	padding-top: var(--px-8);
	gap: var(--px-2);
	width: var(--px-144);
	height: var(--px-144);
	border: var(--border-blank);
	position: relative;
	z-index: 1000;
	background-color: #ffffff;
}

.blank-br-6 { border-radius: var(--px-6);}

.blank-br-24 { border-radius: var(--px-24);}
</style>
