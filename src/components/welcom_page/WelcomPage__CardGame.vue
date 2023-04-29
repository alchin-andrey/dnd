<template>
		<a class="btm-grey hov br-12 blur-60 cur-p pd-16" target="_blank" :href="param.link">
		
			<div class="flex-row-sb-end gap-18">
				<div class="gap-18 w-362">
					<div class="int-700">{{ t(param.name) }}</div>
					<div class="int-400 mr-t-4 white-04" v-html="t(param.details)" />
				</div>
				<AppSvg class="svg-18 svg-main-f" :path="ui_icon.link_main"/>
			</div>
		</a>
</template>
<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";

export default {
	name: "WelcomPage__CardGame",
	data: () => ({
		ui_icon,
	}),
	props: {
		param: {
			type: Object,
			default: {},
		},
	},
};
</script>

<style scoped>
</style>