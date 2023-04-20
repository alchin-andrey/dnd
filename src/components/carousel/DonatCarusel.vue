<template>
	<a target="_blank" href="https://www.buymeacoffee.com/dndme/membership">
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: "DonatCarusel",
	props: {
		interval: {
			type: Number,
			default: 0,
		},
	},
	mounted() {
		if(this.interval > 0) {
			setInterval(() => (this.next()), this.interval);
		}
	},
	methods: {
		next() {
			this.$emit('next')
		},
	}
}
</script>

<style scoped>
a {
	display: block;
}
</style>