<template>
	<!-- Левый бар -->
	<div class="sidebar_left">
		<div class="main_chapter">
			<Header />
			<my-slider
        numb="01"
				title="race"
				:arr="Object.values(this.race)"
				:arr_keys="Object.keys(this.race)"
				:type="MY.race"
			>
			</my-slider>
		</div>

		<div class="main_menu_wrap">
			<div class="main_chapter_menu">
				<RaceMenuSettings />
			</div>
			<transition name="btm-fade" mode="out-in">
				<my-button v-if="pagesStore.shown_home" numb="02" title="class"></my-button>
				<my-button-back v-else @click="showHome()"></my-button-back>
			</transition>
		</div>
	</div>

	<!-- Выпадающее меню -->
	<div class="sidebar_wrap" :class="{ sidebar_wrap_open: pagesStore.setting_open }">
		<!-- Превью -->
		<my-selection-box :shown="main_page.shown.logo">
			<Description />
		</my-selection-box>
		<!-- Превью -->

		<!-- Смена языка -->
		<my-selection-box :shown="main_page.shown.lang">
      <LangSetting />
		</my-selection-box>
		<!-- Смена языка -->

		<!-- Уровень -->
		<my-selection-box :shown="main_page.shown.lvl">
			<div class="flex_options">
				<MyRange v-model.number="MY.level" lvl />
				<MyRangeSize lvl />
			</div>
		</my-selection-box>
		<!-- Уровень -->

		<!-- Этнос-->
		<my-selection-box :shown="race_page.shown.ethnos">
			<EthnosChoice />
		</my-selection-box>
		<!-- Этнос -->

		<!-- Гендр -->
		<my-selection-box :shown="race_page.shown.gender">
      <GenderSetting />
		</my-selection-box>
		<!-- Гендр -->

		<!-- Цвет кожи -->
		<my-selection-box :shown="race_page.shown.skin_color">
			<my-color-select body_part="skin" />
		</my-selection-box>
		<!-- Цвет кожи -->

		<!-- Цвет глаз -->
		<my-selection-box :shown="race_page.shown.eyes_color">
			<my-color-select body_part="eyes" />
		</my-selection-box>
		<!-- Цвет глаз -->

		<!-- Цвет волос -->
		<my-selection-box :shown="race_page.shown.hair_color">
			<my-color-select body_part="hair" />
		</my-selection-box>
		<!-- Цвет волос -->

		<!-- Возраст -->
		<my-selection-box :shown="race_page.shown.age">
			<div class="flex_options">
				<MyRange v-model.number="MY.age" age />
				<MyRangeSize age />
			</div>
		</my-selection-box>
		<!-- Возраст -->

		<!-- Рост -->
		<my-selection-box :shown="race_page.shown.height">
			<div class="flex_options">
				<MyRange v-model.number="MY.height" height />
				<mySizeGrowth />
			</div>
		</my-selection-box>
		<!-- Рост -->

		<!-- Вес -->
		<my-selection-box :shown="race_page.shown.weight">
			<div class="flex_options">
				<MyRange v-model.number="MY.weight" weight />
				<MyRangeSize weight />
			</div>
		</my-selection-box>
		<!-- Вес -->

		<!-- Характеристики -->
		<my-selection-box :shown="race_page.shown.stats">
			<RaceCustomStats />
		</my-selection-box>
		<!-- Характеристики -->

		<!-- Навыки -->
		<my-selection-box :shown="race_page.shown.skills">
      <RaceCustomSkills />
		</my-selection-box>
		<!-- Навыки -->

		<!-- Языки -->
		<my-selection-box :shown="race_page.shown.languages">
      <RaceCustomLanguages />
		</my-selection-box>
		<!-- Языки -->
	</div>

	<div class="stripe"></div>
	<!-- Персонаж -->

	<div class="represent">
		<div
			class="character"
			:class="{
				active_eyes: race_page.shown.eyes_color || race_page.shown.hair_color,
				active_skin: race_page.shown.skin_color,
			}"
			:style="{
				height: Char_Hight_Back,
			}"
		>
			<RaceBody body_part="skin" />
			<RaceBody body_part="eyes" />
			<RaceBody body_part="hair" />

			<WelcomeBanner />

			<transition name="slide-fade">
				<mySizeGrowth v-if="hide_Ruler" division zero skale_top />
			</transition>
		</div>
	</div>
	<!-- Персонаж -->

	<!-- sidebar_right -->
	<!-- <transition name="slide-fade"> -->
	<div
		class="sidebar_right"
		:class="{ sidebar_right_close: !pagesStore.shown_home }"
	>
		<!-- stats -->
		<my-wrapper hr>
			<my-attribute
				v-for="name in stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="option_Race_Page_Numb('stats', name)"
				:icon="name"
			>
			</my-attribute>
		</my-wrapper>
		<!-- stats -->

		<!-- attributes_race -->
		<my-wrapper hr v-if="skills_All_RE.length !== 0">
			<my-attribute
				v-for="name in skills_All_RE"
				:key="name"
				:title="name"
				plus
				:numb="Skill_Mastery"
				:icon="MY.skills[name].mod"
			></my-attribute>
		</my-wrapper>
		<!-- attributes_race -->

		<!-- qualities -->
		<my-wrapper hr>
			<my-attribute
				v-for="(val, name) in MY.qualities"
				:key="name"
				:title="name"
				:numb="getParNumb('qualities', name)"
				feet
				:icon="name"
			></my-attribute>
			<my-attribute
				v-if="MY.ethnos.hp_bonus"
				title="hp_bonus"
				:numb="hp_bonus"
				plus
				icon="hp_bonus"
			></my-attribute>
		</my-wrapper>
		<!-- qualities -->

		<!-- proficiencies -->
		<my-wrapper gap_8 hr>
			<my-inventory
				v-for="(val, name) in MY.proficiencies"
				:key="name"
				:title="name"
				:item="getProf_REX(name)"
			>
			</my-inventory>
		</my-wrapper>
		<!-- proficiencies -->

		<!-- fines -->
		<my-wrapper v-if="MY.race.fines || MY.ethnos.fines" gap_8 hr>
			<my-fines
				v-for="item in MY.race.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>

			<my-fines
				v-for="item in MY.ethnos.fines"
				:key="item"
				:icon="item.type"
				:title="item.keyword"
				:details="item.details"
			></my-fines>
		</my-wrapper>
		<!-- fines -->

		<!-- spells -->
		<my-wrapper v-if="showSpells" gap_26 hr>
			<my-spell-text
				v-for="item in MY.race.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
			<my-spell-text
				v-for="item in MY.ethnos.spells"
				:key="item"
				:lvl="item.level"
				:spell="item.spell"
			>
			</my-spell-text>
		</my-wrapper>
		<!-- spells -->

		<!-- text -->
		<div class="story int-400">
			<div v-html="t(MY.race.details)"></div>
			<my-card-text
				v-if="MY.ethnos.name !== 'common'"
				:title="MY.ethnos.name"
				:text="MY.ethnos.details"
				:rare="MY.ethnos.rare"
			>
			</my-card-text>
		</div>
	</div>
	<!-- </transition> -->
	<!-- sidebar_right -->
</template>

<script>
import dic from "@/assets/catalog/texts/dic.js";


import race from "@/assets/catalog/base_data/step1_races.js";
import clas from "@/assets/catalog/base_data/step2_classes.js";
// import past from "@/assets/catalog/base_data/step3_backstories.js";
// import languages from "@/assets/catalog/base_data/list_languages.js";
// import placeholder from "@/assets/catalog/base_data/_placeholder.js";

import EthnosChoice from "@/components/EthnosChoice.vue";

// import AgeWeight from "@/components/AgeWeight.vue";


// PINIA
import Header from "@/components/pinia/Header.vue";
import Description from "@/components/pinia/Description.vue";
import WelcomeBanner from "@/components/pinia/WelcomeBanner.vue";

import LangSetting from "@/components/pinia/LangSetting.vue";

import RaceMenuSettings from "@/components/pinia/race_page/settings/RaceMenuSettings.vue";

import RaceCustomStats from "@/components/pinia/race_page/settings/RaceCustomStats.vue";
import RaceCustomSkills from "@/components/pinia/race_page/settings/RaceCustomSkills.vue";
import RaceCustomLanguages from "@/components/pinia/race_page/settings/RaceCustomLanguages.vue";

import GenderSetting from "@/components/pinia/race_page/settings/GenderSetting.vue";
// PINIA



import { watch } from "vue";
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";
import { useColorStore } from "@/stores/modules/ColorStore";
export default {
	setup() {
    // PINIA
    const pagesStore = usePagesStore();
    const { main_page, race_page } = usePagesStore();
    const { showHome, closeEthnos, closeColor, closePar, showRaceScroll } = usePagesStore();
    const { MY } = useMYStore();
    const { getEthnos } = useMYStore();
    // PINIA

		watch(() => MY.race, () => {
			console.log("Заметка обновилась!");
			// console.log('closeEthnos:', closeEthnos)
			getEthnos();
			closeEthnos();
			closeColor("skin");
			closeColor("eyes");
			closeColor("hair");
			closePar("stats");
			closePar("skills");
			closePar("languages");
		});

		return { 
      showHome, 
      showRaceScroll, 

      // PINIA
      pagesStore, 
      main_page,
      race_page,
      MY 
    };
	},
	name: "App",
	components: {
		// GenderChoiceStore,
		EthnosChoice,
		// AgeWeight,
    
		// ГОТОВ
		WelcomeBanner, //^ DONE
		Header, //^ DONE
		Description, //^ DONE
    
    LangSetting, //^ DONE
    
    RaceCustomStats, //^ DONE
    RaceCustomSkills, //TODO: Перенести Skill_Mastery
    RaceCustomLanguages, //^ DONE
    
    GenderSetting, //^ DONE
		// ГОТОВ

		// НА ОБРАБОТКЕ
		RaceMenuSettings, //TODO: Сылки на рост, вес, возраст
		// НА ОБРАБОТКЕ
	},

	data() {
		return {
			dic: dic,
			race: race,
			clas: clas,
			// past: past,
			// languages: languages,
			// placeholder: placeholder,

		};
	},

	created() {
		// this.MY.race = Object.values(this.race)[0];
		// this.MY.ethnos = Object.values(
		// 	this.MY.race.settings.ethnos
		// )[0];
		// this.MY = this.default_MY;

		this.MY.class = Object.values(clas)[1];
		this.MY.mastery = this.Mastery;

		this.getFunction();
	},

	computed: {
    // ...mapState(useMYStore, ["MY"]),
    ...mapState(useColorStore, ["color_Char_Сommon"]),
    ...mapState(useMYStore, [
      "stats_Keys",
      "languages_Custom_Arr_RE",
      "option_Race_Page_Numb",
      "skills_All_RE"
    ]),

		Mastery() {
			return Math.ceil(this.MY.level / 4);
		},

		Skill_Mastery() {
			return 1 + this.MY.mastery;
		},

    hide_Ruler() {
			return this.pagesStore.shown_home || this.race_page.shown.height;
		},

		Get_Height() {
			let min = this.race_Settings.height.min;
			let max = this.race_Settings.height.max;
			let kof = this.race_page.height_kof;
			return min + Math.round((max - min) * kof);
		},

		Get_Weight() {
			let min = this.race_Settings.weight.min;
			let max = this.race_Settings.weight.max;
			let kof = this.race_page.weight_kof;
			return min + Math.round((max - min) * kof);
		},

		Get_Age() {
			let min = this.race_Settings.age.min;
			let max = this.race_Settings.age.max;
			let mature = this.race_Settings.age.mature;
			if (this.MY.age) {
				if (this.MY.age < min) {
					return min;
				} else if (this.MY.age > max) {
					return max;
				} else {
					return this.MY.age;
				}
			} else {
				return mature;
			}
		},

		hp_bonus() {
			let increm_1 = this.MY.ethnos.hp_bonus[0];
			let increm_2 = this.MY.ethnos.hp_bonus[1];
			let level = Math.ceil(this.MY.level / increm_1);
			return level * increm_2;
		},

		race_Settings() {
			return this.MY.race.settings;
		},

		ethnos_Settings() {
			return this.MY.ethnos;
		},

		Char_Hight_Back() {
			let max_height = this.MY.race.settings.height.max;
			let min_height = this.MY.race.settings.height.min;
			let mein_height = (min_height + max_height) / 2;
			let kof = 0;
			if (mein_height == 105) {
				kof = 4;
			} else if (mein_height == 135) {
				kof = 3.7;
			} else if (mein_height == 165) {
				kof = 3.4;
			} else {
				kof = 3.1;
			}
			if (
				this.race_page.shown.eyes_color ||
				this.race_page.shown.hair_color
			) {
				return `calc((100% / 210 * ${mein_height})*${kof})`;
			} else {
				return `100%`;
			}
		},

		All_Ethnos_Obj() {
			return this.MY.race.settings.ethnos;
		},


		showSpells() {
			let race = this.MY.race.spells;
			let ethnos = this.MY.ethnos.spells;
			let lvl = this.MY.level;
			let race_lvl = ((race || {})[0] || {}).level <= lvl;
			let ethnos_lvl = ((ethnos || {})[0] || {}).level <= lvl;
			return race || (ethnos && race_lvl) || ethnos_lvl;
		},
	},
	watch: {
		"MY.race": "getFunction",
		"race_page.shown.languages": function (val, oldVal) {
			this.race_page.shown_humman_lang = false;
		},

		"MY.level": function () {
			this.MY.mastery = this.Mastery;
		},
	},

	methods: {
		getFunction() {
			this.MY.height = this.Get_Height;
			this.MY.weight = this.Get_Weight;
			this.MY.age = this.Get_Age;
		},

		// getProficienciesItem(name) {
		// 	let arr = [];
		// 	for (let i in this.MY.race.proficiencies[name]) {
		// 		arr.push(this.MY.race.proficiencies[name][i].name);
		// 	}
		// 	return arr;
		// },

		// getProficienciesEthnosItem(obj, name) {
		// 	let arr = [];
		// 	for (let i in this.All_Ethnos_Obj[obj].proficiencies[name]) {
		// 		arr.push(this.All_Ethnos_Obj[obj].proficiencies[name][i].name);
		// 	}
		// 	return arr;
		// },

		getProf_Item(obj, kay) {
			let arr = [];
			for (let i in obj) {
				arr.push(obj[i][kay]);
			}
			return arr;
		},

		getProfArr(obj, kay) {
			let arr = [];
			if (obj?.[kay]) {
        arr = obj[kay].map(x => x.name)
			}
			return arr;
		},

		getProf_REX(kay) {
			let i = this.getProfArr(this.MY.race.proficiencies, kay);
			let j = this.getProfArr(this.MY.ethnos.proficiencies, kay);
      let k = []
      if (kay === "languages") {
			k = this[`${kay}_Custom_Arr_RE`];
    }
			// let k = this.getProfArr(this.race_page.extra, kay);
			return i.concat(j).concat(k);
		},

		getParNumb(par_1, par_2) {
			let i = 0;
			let j = 0;
			if (((this.MY.race || {})[par_1] || {})[par_2]) {
				i = this.MY.race[par_1][par_2];
			}
			if (((this.MY.ethnos || {})[par_1] || {})[par_2]) {
				j = this.MY.ethnos[par_1][par_2];
			}
			return i + j;
		},

		getMannaNumb(arr, name) {
			let index = arr.findIndex(el => el[name]);
			return index;
		},
	},
};
</script>

<style>
body {
	background-color: #0e1518;
}

a {
	color: #fff;
}

.green {
	color: green;
}

.skill_marg {
	margin-top: 26px;
}

#app {
	/*font-family: 'JetBrains Mono', sans-serif;*/
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	display: flex;
	-webkit-touch-callout: none;
	/* iOS Safari */
	-webkit-user-select: none;
	/* Chrome/Safari/Opera */
	-khtml-user-select: none;
	/* Konqueror */
	-moz-user-select: none;
	/* Firefox */
	-ms-user-select: none;
	/* Internet Explorer/Edge */
	user-select: none;
	overflow: hidden;
}

.buff {
	color: #05ff00;
	/* font-weight: 600; */
}

.debuff {
	color: #ff0000;
	/* font-weight: 600; */
}

.jbm-300 {
	font-family: "JetBrains Mono";
	font-style: normal;
	font-weight: 300;
	font-size: 10.95px;
	line-height: 18px;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: #ffffff;
}

.int-400 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 11px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
}

.sidebar_left {
	/* height: 100%; */
	/*display: flex;*/
	padding-top: 32px;
	width: 320px;
	background-color: #0e1518;
	/*min-height: 100%;*/
	display: flex;
	flex-direction: column;
	/*justify-content: space-between;*/
	/*height: 100%;*/
	/*z-index: 10;*/
	/* outline: 2px solid rgba(255, 255, 255, 0.1); */
}

.main_menu_wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.chapter {
	/* height: 100%; */
	/*display: flex;*/
	/*flex-direction: column;*/
	/*justify-content: space-between;*/
	/* flex: 1 1 auto; */
}

.main_chapter {
	padding: 0 32px 0 32px;
}

.main_chapter_menu {
	/* height: 100%; */
	/*width: 320px;*/
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	max-height: 100%;

	/*padding-left: 32px;*/
	/*padding-top: 32px;*/
	/*max-height: 100%;*/
	/*flex: 1 1 auto;*/
	/*overflow-y: scroll;*/
	/*max-height: 100%;*/
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

.selection_menu_wrap {
	/*overflow-y: scroll;*/
	display: flex;
	flex-direction: column;
	gap: 34px;
	/*overflow-y: scroll;*/
	/*height: 100px;*/
	/*overflow: hidden;*/
	/*max-height: 100%;*/
}

.selection_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.selection_menu {
	/* height: 100%; */
	width: 256px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	/*margin-bottom: 34px;*/
}

.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}

.selection_card_active {
	border: 2px solid #ffffff;
	padding: 14px !important;
}

/* .mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity .3s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;

} */

.btm-fade-enter-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-leave-active {
	transition: all 0.2s ease-in-out;
}

/* .mode-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */

.btm-fade-enter-from,
.btm-fade-leave-to {
	transform: translateX(-300px);
	opacity: 0;
}

/* ---------------------characters----------------------*/

.represent {
	padding: 32px;
	flex: 1 1 auto;
	display: flex;
	background-color: #0e1518;
	z-index: 2;
	/* position: relative; */
	overflow: hidden;
}

.character {
	width: 100%;
	height: 100%;
	position: relative;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

/* .character img {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-duration: 0.8s;
  transition-timing-function: ease-in-out;
} */

/* .character svg {
  position: absolute;
  bottom: 0;
  right: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
  transition-property: all, fill;
  transition-duration: 0.8s, 0.1s;
  transition-timing-function: ease-in-out;
} */

/* .active_eyes .character img {
  top: 0;
  bottom: auto;
} */

.active_eyes {
	align-self: flex-start;
	/* height: 200%; */
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

.active_skin {
	align-self: flex-start;
	transition-property: all;
	transition-duration: 0.8s;
	transition-timing-function: ease-in-out;
}

/* ---------------------sidebar_right----------------------*/

.sidebar_wrap {
	height: 100%;
	display: flex;
	width: 0;
	transition: all 0.4s ease-in-out;
	position: relative;
}

.sidebar_wrap_open {
	width: 426px;
	/* padding: 32px 32px 32px 0; */
	transition: all 0.4s ease-in-out;
}

/* .sidebar_selection {
  height: 100%;
  position: absolute;
  left: -426px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
}

.sidebar_selection::-webkit-scrollbar {
  width: 0;
}

.sidebar_selection_open {
  opacity: 1;
  left: 0px;
  transition: all 1s ease-in-out;
} */

/* ---------------------sidebar_right----------------------*/

.sidebar_right {
	/* width: 426px; */
	min-width: 426px;
	max-width: 426px;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #0e1518;
	z-index: 2;
	transition: all 0.4s ease-in-out;
}

.sidebar_right::-webkit-scrollbar {
	width: 0;
}

.sidebar_right_close {
	margin-right: -426px;
	opacity: 0;
	transition: all 0.4s ease-in-out;
}

.story {
	max-width: 362px;
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
}

.story h3 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-top: 25px;
	margin-bottom: 5px;
}

.slide-fade-enter-active {
	transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}

/* -------------slider-grwwth------------------- */

.slider_growth_back {
	width: 344px;
	height: calc(100% / 700 * 396);
	background: rgba(255, 255, 255, 0.06);
	border-radius: 12px;
	display: flex;
	align-items: flex-end;
	overflow: hidden;
}

.slider_growth {
	width: 100%;
	height: calc(100% / 396 * (300 + 3.2 * 0));
	background: #ffffff;
	padding: 12px 16px 11px 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.slider_knob {
	width: 96px;
	height: 6px;
	background: #0e1518;
	opacity: 0.2;
	border-radius: 4px;
	margin: 0 auto;
	cursor: ns-resize;
}

.slider_value {
	height: 24px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: #000000;
}

.flex_options {
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 8px;
}

.skroll_list {
	position: relative;
	padding-left: 16px;
	height: 18px;
	margin: 34px 0;
	cursor: pointer;
}

.flex_gap-8 {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.skroll_list_closed::after {
	position: absolute;
	content: url(./assets/img/icon/arrow_down_small.svg);
	top: 0;
	right: 16px;
}

.skroll_list_open::after {
	position: absolute;
	content: url(./assets/img/icon/arrow_top_small.svg);
	top: 0;
	right: 16px;
}

.scroll-fade-enter-active {
	transition: all 0.8s ease-out;
}

.scroll-fade-leave-active {
	transition: all 0.6s cubic-bezier(1, 0.8, 0.8, 1);
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

/* -------------slider-grwwth------------------- */

.wrapp_wel {
	max-width: 394px;
	height: 100%;
	position: absolute;
}

.stripe {
	width: 2px;
	background-color: rgba(255, 255, 255, 0.1);
}
</style>
