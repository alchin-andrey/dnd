<template>
	<My-Selection-Box title="alignment" :select="MY_Biography_Menu" :shown="alignment_page.shown.biography">
		<section>
			<div class="grid-col int-700 mr-b-32">
				<AppCardWrapp
					v-for="btn in MY.biography_options"
					:active_card="MY.user_biography == btn.option"
					@click="this.MY.user_biography = btn.option"
					class="h-50"
				>
					<div class="flex-row-sb-c h-100">
						<span>{{ `${T('choose_variant')} ${btn.option}`}}</span>
					</div>
				</AppCardWrapp>
			</div>

			<AppCardWrapp no_pd passive>
				<AlignmentBiographyInput
					v-model="MY.biography_options[MY.user_biography - 1].text"
					@show-donate="toggleDonate(true)"
				/>
			</AppCardWrapp>
			<AppBtmLink__DonateBaner 
				class="mr-t-8" 
				v-if="showDonate"
				@close="toggleDonate(false)"
			/>
			<div class="int-400 white-04 mr-t-24" v-html="details_Biography" />
		</section>
	</My-Selection-Box>
</template>


<script>
	import AlignmentBiographyInput from "@/components/settings/3_settings__alignment/AlignmentBiographyInput.vue";
	import { mapState } from "pinia";
	import { useMYStore } from "@/stores/user/MYStore";
	import { usePagesStore } from "@/stores/user/PagesStore";
	import { useAlignmentStore } from "@/stores/modules/AlignmentStore";
	export default {
		name: "AlignmentSett__Biography",
		components: { AlignmentBiographyInput },
		data() {
			return {
				showDonate: false,
			};
		},

		watch: {
			'alignment_page.shown.biography'(isOpen) {
				if (!isOpen) this.toggleDonate(false);
			},
		},

		computed: {
			...mapState(useMYStore, ["MY"]),
			...mapState(usePagesStore, ["alignment_page"]),
			...mapState(useAlignmentStore, ["MY_Biography_Menu"]),

			details_Biography() {
				return this.T("print_biography_details");
			},

		},

		methods: {
			getBiographyOptions(option) {
				this.MY.user_biography = option;
			},

			toggleDonate(state) {
				return
				// setTimeout(() => this.showDonate = !!state, 1000);
			},

		},
	};
</script>

<style scoped>
.grid-col {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
}
</style>
