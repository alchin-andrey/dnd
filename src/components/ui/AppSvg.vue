<template>
	<svg
		viewBox="0 0 18 18"
		xmlns="http://www.w3.org/2000/svg"
		v-html="path"
	></svg>
</template>

<script>
export default {
	name: "AppSvg",
	props: {
		path: {
			type: String,
			default: null,
		},
	},
};
</script>
