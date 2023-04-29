<template>
	<div class="int-400 white-04" v-html="t_Disclaimer"/>
</template>

<script>
export default {
	name: "AppDisclaimer",
	computed: {
		t_Disclaimer() {
			return this.t('welcome_disclaimer')
		}
	}
};
</script>
