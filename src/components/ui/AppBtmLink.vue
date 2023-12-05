<template>
	<a 
	class="db btm-grey br-12 blur-60 pd-16 pos-rel hov cur-p"
	:target="target_Link" 
	:href="link">
		<AppBtm
			class="h-100"
			:pos="pos"
			:name="name" 
			:text="text"
			:icon="icon"
			:jbm="jbm"
			link
		/>
	</a>
</template>

<script>
export default {
	name: "AppBtmLink",
	props: {
		link: {
			type: String,
			default: null,
		},
		link_self: {
      type: Boolean,
      default: false,
    },
		
		pos: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: "arrow_right_small", // return, plus, donate;
		},
		jbm: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		target_Link() {
			return this.link_self ? '_self' : '_blank';
		},
	},
};
</script>

<style scoped>
</style>
