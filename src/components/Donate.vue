<template>
	<div class="flex-col gap-26">
		<div class="int-700-20" v-html="t_Title" />

		<section class="flex-col gap-15 int-400">
			<div class="white-04" v-html="t_Authors" />
			<div v-html="t_Thanks" />
			<div class="rare-text" v-html="t_Benefaction" />
		</section>

		<section class="flex-col gap-4 int-700">
			<!-- <my-selection-card link white_btn>
				<a class="pd-16 color-blue" target="_blank" href="https://www.buymeacoffee.com/dndme/membership">{{ T("view_benefits")
				}}</a>
			</my-selection-card> -->
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

		// t_Donat() {
		// 	return this.T("view_benefits");
		// },

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
