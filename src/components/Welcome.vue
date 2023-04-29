<template>
	<div class="int-400 flex-col gap-26">
		<div class="int-700" v-if="!no_title">{{ t_Title }}</div>
		<section class="flex-col gap-15">
      <div v-html="t_Text" />
      <div class="white-04" v-html="t_Html" />
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
.text {
	white-space: pre-line;
}
</style>
