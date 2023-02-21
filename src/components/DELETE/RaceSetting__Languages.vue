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
import { usePagesStore } from "@/stores/user/PagesStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
export default {
	name: "RaceSetting__Languages",
	computed: {
    // STORES
		...mapState(usePagesStore, ["race_page"]),
    // GETTERS
    ...mapState(useLanguagesStore, [
      "languages_Arr_Humman",
      "languages_Arr_Not_Humman",
      "languages_Activ_Arr_RE",
      "languages_Custom_Arr_RE",
    ]),

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

    languages_Arr_Humman(state) {
			let arr = [];
			for (let i in state.languages) {
				if (state.languages[i]?.human) {
					arr.push(state.languages[i].name);
				}
			}
			return arr;
		},

    languages_Arr_Not_Humman(state) {
			let arr = [];
			for (let i in state.languages) {
				if (!state.languages[i]?.human) {
					arr.push(state.languages[i].name);
				}
			}
			return arr;
		},

    languages_Keys(state) {
      let arr = [];
      for (let key in state.languages) {
        arr.push(state.languages[key].name)
      }
			return arr;
		},

		languages_Activ_Obj_RE(state) {
      const MYStore = useMYStore();
			let i = [];
			let j = [];
			if (MYStore.MY.race.proficiencies?.languages) {
				i = Object.values(MYStore.MY.race.proficiencies?.languages);
			}
			if (MYStore.MY.ethnos.proficiencies?.languages) {
				j = Object.values(MYStore.MY.ethnos.proficiencies?.languages);
			}
			return i.concat(j);
		},

		languages_Activ_Arr_RE() {
			let arr_obj = this.languages_Activ_Obj_RE;
			let arr = [];
			for (let indx in arr_obj) {
				arr.push(arr_obj[indx].name);
			}
			return arr;
		},

    languages_Pass_Arr_RE() {
			return this.languages_Keys.filter(
				(el) => !this.languages_Activ_Arr_RE.includes(el)
			);
		},

    languages_Custom_Arr_RE() {
			return this.COMMON_Custom_Arr_RE("languages");
		},

    COMMON_Custom_Arr_RE: (stor) => (name) => {

			let custom_arr = [];
			const selected_arr = stor.MY.custom_selected_race_page[name];
			let ACTIV_ARR = stor.languages_Activ_Arr_RE;
			let KEYS = stor.languages_Keys;

			let pass_selected_arr = selected_arr.filter(
				(el) => !ACTIV_ARR.includes(el)
			);
			const increment = stor.option_Custom_RE_Quant(name);
			if (increment === 0) {
				return custom_arr;
			} else {
				if (pass_selected_arr.length === increment) {
					custom_arr = pass_selected_arr;
				} else if (pass_selected_arr.length < increment) {
					const activ_full_arr = ACTIV_ARR.concat(pass_selected_arr);
					let pass_arr = KEYS.filter((el) => !activ_full_arr.includes(el));
					const i = increment - pass_selected_arr.length;
					custom_arr = pass_selected_arr.concat(pass_arr.slice(0, i));
				} else if (pass_selected_arr.length > increment) {
					const i = pass_selected_arr.length - increment;
					pass_selected_arr.splice(0, i);
					custom_arr = pass_selected_arr;
				}
				return custom_arr;
			}
		},

		option_Custom_RE_Quant: (stor) => (name) => {
			const ethnos_settings = stor.ethnos_Setting(name);
			return ethnos_settings ? ethnos_settings.select : 0;
		},

	},

  watch: {
		"race_page.shown.languages": function () {
			this.race_page.shown_humman_lang = false;
		},
	},

	methods: {
    ...mapActions(usePagesStore, ["showRaceScroll"]),

    getCustomSelect_Languages_RE(name) {
			this.getCustomSelect_COMMON_RE("languages", name);
		},

    getCustomSelect_COMMON_RE(item, name) {
			const selekt = this.COMMON_Custom_Arr_RE(item);
			let active = this.languages_Activ_Arr_RE.includes(name);
			const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				this.MY.custom_selected_race_page[item] = arr;
			}
		},
	},
};
</script>

<style scoped>
.flex_gap-8 {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.skroll_list {
	position: relative;
	padding-left: 16px;
	height: 18px;
	margin: 34px 0;
	cursor: pointer;
}
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
