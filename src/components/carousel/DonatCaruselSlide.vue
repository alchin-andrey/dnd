<template>
	<transition name="slide-right">
		<div v-show="visible">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: "DonatCaruselSlide",
	props: ['index', 'visibleSlide'],
	computed: {
		visible() {
			return this.index === this.visibleSlide;
		},
	}
}
</script>

<style scoped>
.slide-right-enter-active {
	animation: slide-right-in 2s cubic-bezier(.25,.1,.25,1);
}

.slide-right-leave-active {
	animation: slide-right-out 2s cubic-bezier(.25,.1,.25,1);
}

@keyframes slide-right-out {
	from {
		transform: translateX(0%);
	}

	to {
		transform: translateX(-100%);
	}
}

@keyframes slide-right-in {
	from {
		transform: translateX(100%);
	}

	to {
		transform: translateX(0);
	}
}</style>