<template>
	<div class="int-400 flex_col gap-26">
		<div class="int-700" v-if="!no_title">{{ t_Title }}</div>
		<section>
      <div class="text">{{ t_Text }}</div>
      <div class="text_html" v-html="t_Html"></div>
		</section>
	</div>
</template>

<script>
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

		t_Title() {
			return this.T("welcome_title");
		},

		t_Text() {
			return this.t("welcome_message");
		},

		t_Html() {
			return this.t("welcome_disclaimer");
		},

	},

  methods: {
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
