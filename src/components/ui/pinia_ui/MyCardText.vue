<template>
	<div class="flex-col">
		<div :class="style_Title">
			{{ t_Title }}
		</div>
		<div v-if="text_html" :class="style_Text" v-html="t_Html" />
    <div v-if="text_html_2" :class="style_Text" v-html="t_Html_2" />
		<div else :class="[style_Text, 'text-space']"> 
			{{ t_Text }}
		<div v-if="rare" :class="style_Text_Rare" >
			{{ t_Rare }}
		</div>
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

		style_Title() {
			return this.blank_print 
							? 'int-600-28 text-print f-lh-30' 
							: 'int-700 main-text';
		},

		style_Text() {
			return this.blank_print 
							? 'int-400-22 text-print mr-t-10' 
							: 'int-400 white-04 mr-t-5 text';
		},

		style_Text_Rare() {
			return this.blank_print 
							? 'text-print mr-t-15' 
							: 'rare-text mr-t-15';
		}
	},
};
</script>

<style scoped>
.text-space {
	text-align: start;
	white-space: pre-line;
}

.text span {
	color: #ffc93d;
	margin-top: 20px;
}
</style>
