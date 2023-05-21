<template>
	<div 
	class="flex-col gap-26 flex-flex"
	:class="{
				'pd-32': finish && screen_Max,
				'pd-20': finish && !screen_Max,
				}" 
	>
		<div class="int-700-20" v-html="t_Title" />

		<section class="flex-col gap-15 int-400">
			<div class="white-04" v-html="t_Authors" />
			<div v-html="t_Thanks" />
			<div class="rare-text" v-html="t_Benefaction" />
		</section>

		<section class="flex-col gap-4 int-700" 	
		:class="{
				'flex-flex js-end': finish && !screen_Max,
				}" 
	>
			<AppBtmLink
				class="btm-white"
				name="view_benefits"
				icon="donate"
				link="https://www.buymeacoffee.com/dndme/membership" 
			/>
			<AppLoadBtm 
				v-if="finish" 
				@click="btnClick()" 
				:text="t_Pdf" 
				:progress="progress" 
			/>
		</section>
	</div>
</template>

<script>
import { mapState} from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "Donate",
	emits: ["getPdf"],
	props: {
		finish: {
			type: Boolean,
			default: false,
		},
		progress: {
			type: Number,
			default: 100,
		},
	},
	computed: {
		...mapState(usePagesStore, ["screen_Max"]),

		t_Title() {
			return this.t("support_project");
		},

		t_Authors() {
			return this.t("authors");
		},

		t_Thanks() {
			return this.t("thank_you");
		},

		t_Benefaction() {
			return this.t("benefaction");
		},

		t_Pdf() {
			return this.t("download_pdf");
		},
		
	},

	methods: {
		btnClick() {
			this.$emit("getPdf");
		},
	},
};
</script>

<style scoped>
.flex-flex {
	flex: 1 1 auto;
}

.js-end {
	justify-content: flex-end;
}


</style>
