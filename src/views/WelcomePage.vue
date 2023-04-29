<template>
	<section class="flex-col pd-t-32 min-w-320">
		<div class="flex-row-c gap-4 pd-rl-32 h-28">
			<my-logo-card @click="goTo('/')"/>
			<div class="int-700-20 buff">dndme.club</div>
		</div>

		<div class="h-100 flex-col-sb mr-t-84">
			<WelcomPage__Menu />
			<my-button-back title="command_back" @click="goTo('/')" />
		</div>

	</section>
	<div class="stripe"></div>

	<section class="welcom-wrapp">
		<div class="pd-rlb-32 w-956">
			<WelcomPage__WhatDND id="welcom-part1" class="pd-t-32" />
			<WelcomPage__Start id="welcom-part2" class="mr-t-32 pd-t-32"/>
			<WelcomPage__Masters id="welcom-part3" class="mr-t-64 pd-t-32"/>
			<WelcomPage__Game id="welcom-part4" class="mr-t-64 pd-t-32"/>
			<WelcomPage__Footer class="mr-t-102"/>
			<div class="int-400 white-04 mr-t-102" v-html="t('lobby_footer')"/>
		</div>
	</section>

	<PlagBanner v-if="small_screen"/>
</template>
<script>

import { mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

import PlagBanner from "@/components/PlagBanner.vue";
import WelcomPage__Menu from "@/components/welcom_page/WelcomPage__Menu.vue";
import WelcomPage__WhatDND from "@/components/welcom_page/WelcomPage__WhatDND.vue";
import WelcomPage__Start from "@/components/welcom_page/WelcomPage__Start.vue";
import WelcomPage__Masters from "@/components/welcom_page/WelcomPage__Masters.vue";
import WelcomPage__Game from "@/components/welcom_page/WelcomPage__Game.vue";
import WelcomPage__Footer from "@/components/welcom_page/WelcomPage__Footer.vue";

export default {
	name: "WelcomePage",
	components: {
    PlagBanner,
		WelcomPage__Menu,
		WelcomPage__WhatDND,
		WelcomPage__Start,
		WelcomPage__Masters,
		WelcomPage__Game,
		WelcomPage__Footer,
	},
	data() {
		return {
			small_screen: false,
		};
	},

	created() {
		this.getCreated();
		window.addEventListener("resize", this.onResize);
		this.onResize();
	},

	destroyed() {
		window.removeEventListener("resize", this.onResize);
	},

	methods: {
		...mapActions(useMYStore, ["getCreated"]),

		goTo(route) {
        this.$router.push(route);
      },

		onResize() {
			this.small_screen = window.innerWidth <= 1279;
		},
	},
};
</script>

<style scoped>
.h-28 {
	height: 28px;
}
.stripe {
	min-width: 2px;
	background-color: rgba(255, 255, 255, 0.1);
}
.welcom-wrapp {
	width: 100%;
	background-image: url(@/assets/img/other/welcome_image_20_grad.png);
	background-position: 0 0;
	background-repeat: repeat-x;
	background-size: 1600px 496px;
	overflow-y: scroll;
	scrollbar-width: none;
	scroll-behavior: smooth;
}
.welcom-wrapp::-webkit-scrollbar {
	width: 0;
}
.min-w-320 {min-width: 320px;}
.w-956 {width: 956px;}
</style>
