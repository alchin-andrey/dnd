<template>
	<div class="int-400 flex-col">
		<div
			class="title"
			:class="{
				only: !text && !text_html,
        'print-title': blank_print,
			}"
		>
			{{ t_Title }}
		</div>
		<div v-if="text_html" class="text" :class="{'print-text': blank_print, 'int-400-22': blank_print,}" v-html="t_Html" />
    <div v-if="text_html_2" class="text" :class="{'print-text': blank_print, 'int-400-22': blank_print,}" v-html="t_Html_2" />
		<div else class="text text-space" 
    :class="{
    'print-text': blank_print,
    'int-400-22': blank_print,}">
			{{ t_Text }}
			<div class="rare-text" :class="{'print-rare': blank_print,}" v-if="rare">{{ t_Rare }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MyCardText",
	props: {
    notation: {
			type: String,
			default: null,
		},
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
    blank_print: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		t_Title() {
      let str;
      if(this.notation) {
        const T_note = this.T(this.notation);
        const T_title = this.T(this.title);
        // const T_title = `${t_title[0].toUpperCase()}${t_title.slice(1)}`;
        return `${T_note}: ${T_title}`
      } else {
        return this.T(this.title)
      }
		},
		t_Html() {
			return this.t(this.text_html);
		},
		t_Html_2() {
			return this.t(this.text_html_2);
		},
		t_Text() {
			return this.T(this.text);
		},
		t_Rare() {
			return this.T(`${this.rare}_details`);
		},
	},
};
</script>

<style scoped>
.title {
	font-family: "Inter-700";
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 15px;
	letter-spacing: 0.02em;
  color: #ffffff;
	margin-bottom: 5px;
}

.print-title {
  font-family: 'Inter-600';
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
  color: #000000;
}

.only {
	margin-bottom: 0px;
}

.text {
	color: rgba(255, 255, 255, 0.4);
}
.text-space {
	text-align: start;
	white-space: pre-line;
}
.print-text {
	color: black;
}

.text span {
	color: #ffc93d;
	margin-top: 20px;
}


.rare-text {
  color: #ffc93d;
}

.print-rare {
  font-family: 'Inter-600';
  color: #000000;
}
</style>
