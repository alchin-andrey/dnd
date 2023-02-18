<template>
	<div class="int-400">
		<div
			class="title"
			:class="{
				only: !text && !text_html,
			}"
		>
			{{ t_Title }}
		</div>
		<div v-if="text_html" class="text" v-html="t_Html"></div>
    <div v-if="text_html_2" class="text" v-html="t_Html_2"></div>
		<div else class="text">
			{{ t_Text }}
			<div class="rare-text" v-if="rare">{{ t_Rare }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyCardText",
	props: {
		title: {
			type: String,
			default: null,
		},
		text_html: {
			type: String,
			default: null,
		},
		text_html_2: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
		rare: {
			type: String,
			default: null,
		},
	},
	computed: {
		t_Title() {
			return this.t(this.title);
		},
		t_Html() {
			return this.t(this.text_html);
		},
		t_Html_2() {
			return this.t(this.text_html_2);
		},
		t_Text() {
			return this.t(this.text);
		},
		t_Rare() {
			return this.t(`${this.rare}_details`);
		},
	},
};
</script>

<style scoped>
.title {
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
	color: #ffffff;
	margin-bottom: 5px;
}

.only {
	margin-bottom: 0px;
}

.title:first-letter {
	text-transform: uppercase;
}

.text {
	color: rgba(255, 255, 255, 0.4);
	text-align: start;
	white-space: pre-line;
}

.text:first-letter {
	text-transform: uppercase;
}

.text span {
	color: #ffc93d;
	margin-top: 20px;
}

.text span:first-letter {
	text-transform: uppercase;
}
.rare-text {
  color: #ffc93d;
}

.rare-text:first-letter {
	text-transform: uppercase;
}
</style>
