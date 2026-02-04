<template>
	<a 
	class="db btm_donate_banner br-12 blur-60 pd-12-16-14 hov cur-p"
	target="_blank"
	rel="noopener" 
	href="https://cutt.ly/lwkDE0Yn">
	<div class="flex-row-sb">
		<div class="int-400 color-purple" >{{ T('banner_title') }}</div>
		<div class="flex-row">
			<div class="int-400" >{{ T('banner_cta') }}</div>
				<AppSvg 
					class="svg-15 svg-main-f"
					name="donate"
					box_size="15"
					box_y="1"
				/>
		</div>
	</div>
	</a>
</template>

<script>
export default {
	name: "AppBtmLink__DonateBaner",
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
