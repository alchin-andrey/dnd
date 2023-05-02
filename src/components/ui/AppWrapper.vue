<template>
	<section>
		<div :class="[class_Wrapp]">
			<slot></slot>
		</div>
		<div v-if="hr" class="hr"></div>
	</section>
</template>

<script>
export default {
	name: "AppWrapper",
	props: {
		gap: {
			type: String,
			default: '4'
		},
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		class_Wrapp() {
			return `flex-col gap-${this.gap}`
		}
	}
};
</script>

<style scoped>
.hr {
	height: 1px;
	margin: 26px 0;
	background: rgba(255, 255, 255, 0.2);
}
</style>
