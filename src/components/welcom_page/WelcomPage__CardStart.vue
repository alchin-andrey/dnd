<template>
	<div 
	class="br-12 w-220" 
	:class="{
		'btm-trans pd-14': !active,
		'btm-blue hov pd-16 cur-p': active,
		}"
	>
		<div class="jbm-300">{{ numb }}</div>
		<div class="int-700 mr-t-36" >{{ t(title) }}</div>
		<div :class="['int-400 mr-t-4', {'white-04': !active}]" v-html="t(text)" />
	</div>
</template>
<script>

export default {
	name: "WelcomPage__CardStart",
	props: {
		numb: {
			type: String,
			default: null,
		},
		title: {
			type: String,
			default: null,
		},
		text: {
			type: String,
			default: null,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
.w-220 {
	width: 220px;
}
</style>