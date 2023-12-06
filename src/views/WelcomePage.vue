<template>
	<div class="flex-row h-100">
		<section v-if="screen_Max" class="flex-col pd-t-32 min-w-320">
			<div class="flex-row-c gap-4 pd-rl-32 h-28">
				<AppLogoCard @click="goHomePage()"/>
				<div class="int-700 cur-p buff" @click="goHomePage()">dndme.club</div>
			</div>
			<WelcomPage__Menu/>
		</section>
		<div v-if="screen_Max" class="stripe-page" />
		<main class="w-100">
			<div v-if="!screen_Max" class="mob-header flex-col-c-jc">
				<div class="flex-row-sb-c pd-rl-20">
					<div class="jbm-300 cur-p buff" @click="goToChar()">dndme.club</div>
					<AppBtmLink
					class="int-700 btm-blue w-200"
					@click="goToChar()"
					name="how_to_start_2_title"
					/>
				</div>
			</div>
		
			<section class="welcom-wrapp">
				<div class="h-100">
					<div class="welcom-content">
						<WelcomPage__TryToPlay id="welcom-part1" class="pd-t-32" @btnClick="goToChar()"/>
						<WelcomPage__WhatDND id="welcom-part2" class="mr-t-76  pd-t-32" />
						<WelcomPage__GameProcess id="welcom-part3" class="mr-t-76 pd-t-32"/>
						<WelcomPage__Game id="welcom-part4" class="mr-t-76 pd-t-32"/>
						<WelcomPage__GameLove id="welcom-part4" class="mr-t-76 pd-t-32"/>
						<WelcomPage__Masters id="welcom-part5" class="mr-t-76 pd-t-32"/>
						<WelcomPage__Footer id="welcom-part6" class="mr-t-76 pd-t-32"/>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import { mapActions, mapState} from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";


import WelcomPage__Menu from "@/components/welcom_page/WelcomPage__Menu.vue";
import WelcomPage__TryToPlay from "@/components/welcom_page/WelcomPage__TryToPlay.vue";
import WelcomPage__WhatDND from "@/components/welcom_page/WelcomPage__WhatDND.vue";
import WelcomPage__Masters from "@/components/welcom_page/WelcomPage__Masters.vue";
import WelcomPage__GameProcess from "@/components/welcom_page/WelcomPage__GameProcess.vue";
import WelcomPage__Game from "@/components/welcom_page/WelcomPage__Game.vue";
import WelcomPage__GameLove from "@/components/welcom_page/WelcomPage__GameLove.vue";
import WelcomPage__Footer from "@/components/welcom_page/WelcomPage__Footer.vue";

export default {
	name: "WelcomePage",
	components: {
		WelcomPage__Menu,
		WelcomPage__TryToPlay,
		WelcomPage__WhatDND,
		WelcomPage__Masters,
		WelcomPage__GameProcess,
		WelcomPage__Game,
		WelcomPage__GameLove,
		WelcomPage__Footer,
	},

	created() {
		this.getCreated();
	},

	computed: {
		...mapState(usePagesStore, ["screen_Max"]),
	},

	methods: {
		...mapActions(useMYStore, ["getCreated"]),
		...mapActions(usePagesStore, ["goToChar", "goHomePage"]),
	},
};
</script>

<style scoped>
.h-28 {
	height: 28px;
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
	height: 100%;
}
.welcom-wrapp::-webkit-scrollbar {
	width: 0;
}

.welcom-content {
	width: 956px;
	padding: 0 32px 32px;
}

.min-w-320 {min-width: 320px;}
.w-200 {width: 200px;}

@media (max-width: 1279px) {
	.welcom-wrapp {
		display: flex;
		justify-content: center;
		background-position: 50% 0;
		height: calc(100% - 88px);
	}
}

@media (max-width: 955px) {
	.welcom-content {
		width: 444px;
		padding: 0 0 32px 0;
	}
}

@media (max-width: 480px) {
	.welcom-content {
		width: 362px;
	}
}
</style>
