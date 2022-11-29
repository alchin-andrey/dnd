<template>
			<my-selection-card
				v-for="lang in languages_Arr_Not_Humman"
				:key="lang"
				@click="getCustomSelect_Languages_RE(lang)"
				:active_boll_link="languages_Custom_Arr_RE.includes(lang)"
				:basic="languages_Activ_Arr_RE.includes(lang)"
			>
				<my-card-text :title="lang" :text="`${lang}_details`"></my-card-text>
			</my-selection-card>

			<div
				class="skroll_list jbm-300"
				:class="{
					skroll_list_closed: !race_page.shown_humman_lang,
					skroll_list_open: race_page.shown_humman_lang,
				}"
				v-vpshow="race_page.shown_humman_lang"
				@click="showRaceScroll('shown_humman_lang')"
			>
				{{ Lang_Humman_Title }}
			</div>
			<transition name="scroll-fade">
				<div v-if="race_page.shown_humman_lang" class="flex_gap-8">
					<my-selection-card
						v-for="lang in languages_Arr_Humman"
						:key="lang"
						@click="getCustomSelect_Languages_RE(lang)"
						:active_boll_link="languages_Custom_Arr_RE.includes(lang)"
						:basic="languages_Activ_Arr_RE.includes(lang)"
					>
						<my-card-text :title="lang" :text="`${lang}_details`">
						</my-card-text>
					</my-selection-card>
				</div>
			</transition>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
export default {
	name: "RaceCustomLanguages",
	computed: {
    // STORES
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["race_page"]),
    // GETTERS
    ...mapState(useLanguagesStore, ["languages_Arr_Humman", "languages_Arr_Not_Humman",]),
		...mapState(useMYStore, ["languages_Activ_Arr_RE", "languages_Custom_Arr_RE",]),

    Lang_Humman_Title() {
			let title = this.t("languages_human");
			let lang_numb = this.Lang_Humman_Select.length;
			let humman_activ = this.race_page.shown_humman_lang;
			if (lang_numb !== 0 && !humman_activ) {
				return `${title} (выбрано: ${lang_numb})`;
			} else {
				return title;
			}
		},

    Lang_Humman_Select() {
      let arr = [];
      let humman_lang = this.languages_Arr_Humman
      let lang = this.languages_Custom_Arr_RE;
      for (let i in lang) {
        if (humman_lang.includes(lang[i])) {
          arr.push(lang[i]);
        }
      }
      return arr;
    },

	},

	methods: {
		...mapActions(useMYStore, ["getCustomSelect_Languages_RE"]),
    ...mapActions(usePagesStore, ["showRaceScroll"]),
	},
};
</script>

<style scoped>
.skroll_list_closed::after {
	position: absolute;
	content: url(@/assets/img/icon/arrow_down_small.svg);
	top: 0;
	right: 16px;
}

.skroll_list_open::after {
	position: absolute;
	content: url(@/assets/img/icon/arrow_top_small.svg);
	top: 0;
	right: 16px;
}
</style>
