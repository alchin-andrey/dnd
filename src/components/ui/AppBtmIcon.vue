<template>
	<div 
	class="btm-grey br-12 flex-row-c-jc"
	:class="{
        'hov cur-p': !passive,
      }"
	>
		<AppSvg  :class="['svg-36', 'svg-main-f', style_Svg]" :name="icon"/>
	</div>
</template>

<script>
export default {
	name: "AppBtmIcon",
	props: {
		icon: {
			type: String,
			default: "delete",
		},
		passive: {
      type: Boolean,
      default: false,
    },
	},
	computed: {
		style_Svg() {
			if (this.passive) return 'svg-pass-f';
		}
	},
};
</script>

<style scoped>
</style>
