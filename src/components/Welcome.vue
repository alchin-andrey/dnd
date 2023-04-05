<template>
	<div class="int-400 flex_col gap-26">
		<div class="int-700" v-if="!no_title">{{ t_Title }}</div>
		<section>
      <div class="text">{{ t_Text }}</div>
      <div class="text_html" v-html="t_Html"></div>
		</section>
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
import { mapWritableState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useFormStore } from "@/stores/modules/simple/FormStore";
import { useMainStore } from "@/stores/general/MainStore";
export default {
	name: "Welcome",
  props: {
		reset: {
			type: Boolean,
			default: false,
		},
		no_title: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
    ...mapWritableState(useMYStore, ["MY","MY_def"]),
    ...mapWritableState(usePagesStore, ["site_settings", 'pages', 'race_page', "showHome"]),
    ...mapWritableState(useFormStore, ["form_kof"]),
    ...mapWritableState(useMainStore, ["srd"]),

		t_Title() {
			return this.T("welcome_title");
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
      
      this.srd = true,
      
      this.site_settings.welcome = true;
      
      this.form_kof = {
        height: 0.5,
        weight: 0.5,
        age: 0.5,
      };
      
      this.pages = {
			race_page: true,
			class_page: false,
      alignment_page: false,
      master_page: false,
		};
      this.showHome()
    },
  }
};
</script>

<style scoped>
.flex_col {
  display: flex;
  flex-direction: column;
}

.gap-26 {
  gap: 26px;
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
</style>
