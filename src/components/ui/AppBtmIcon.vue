<template>
	<div 
	class="card-main br-12 flex-row-c-jc"
	:class="{
        'hov cur-p': !passive,
				'btm-select': active_btm,
      }"
	>
		<AppSvg  :class="['svg-28', 'svg-main-f', style_Svg]" :name="icon"/>
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
		active_btm: {
      type: Boolean,
      default: false,
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
