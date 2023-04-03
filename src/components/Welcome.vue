<template>
	<div class="int-400">
		<div class="title">{{ t_Title }}</div>
		<div class="text">{{ t_Text }}</div>
		<div class="text_html" v-html="t_Html"></div>
		<my-selection-card
			class="marg-top-26 int-700"
			v-if="reset"
			reset
			@click="resetState()"
		>
			<div class="text">{{ t_Reset }}</div>
		</my-selection-card>
	</div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "Welcome",
  props: {
		reset: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
    ...mapWritableState(useMYStore, ["MY","MY_def"]),
    ...mapWritableState(usePagesStore, ["site_settings", 'pages', 'race_page', "showHome"]),

		t_Title() {
			return this.t("welcome_title");
		},

		t_Text() {
			return this.t("welcome_message");
		},

		t_Html() {
			return this.t("welcome_disclaimer");
		},

    t_Reset() {
			return this.t("start_over");
		},
	},

  methods: {
    resetState() {
      this.MY = JSON.parse(JSON.stringify(this.MY_def));
      this.site_settings.welcome = true;
      this.race_page.settings =  {
        height_kof: 0.5,
        weight_kof: 0.5,
        age_kof: 0.5,
      };

      this.pages = {
			race_page: true,
			class_page: false,
      alignment_page: false,
		};
      this.showHome()
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
	height: 15px;
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-bottom: 26px;
}

.title:first-letter {
	text-transform: uppercase;
}

.text {
	color: rgba(255, 255, 255, 1);
	text-align: start;
	white-space: pre-line;
}

.text:first-letter,
.text_html:first-letter {
	text-transform: uppercase;
}
.text_html {
	color: rgba(255, 255, 255, 0.4);
}

.marg-top-26 {
	margin-top: 26px;
}
</style>
