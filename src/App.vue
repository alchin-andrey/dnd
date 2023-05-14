<template>
  <router-view></router-view>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

export default {
	name: "App",
	created() {
		this.zeroingDell();
		window.addEventListener("resize", this.onResize);
		this.onResize();
	},

	destroyed() {
		window.removeEventListener("resize", this.onResize);
	},

	computed: {
		...mapWritableState(usePagesStore, ["screen_size"])
	},

	methods: {
    ...mapActions(usePagesStore, ["zeroingDell"]),

		onResize() {
			this.screen_size = window.innerWidth;
		},
	}
};
</script>

<style>
body {
	background-color: #0e1518;
	color: #ffffff;
}

a {
	color: #ffffff;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: 100%;
	/* display: flex; */
  /* justify-content: center; */
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	overflow: hidden;
}
</style>
