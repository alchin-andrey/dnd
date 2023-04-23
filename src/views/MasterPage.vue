<template>
	<!-- Left bar -->
	<div class="sidebar_left">
		<div class="main_chapter">
			<div class="header">
			<my-logo-card @click="goTo('/')"/>
			</div>

      <div class="int-700-20 mr-t-22" v-html="t_Lobby"/>
			<div class="delimiter" />
		</div>

		<div class="main_menu_wrap">
			<div class="main_chapter_menu pd-t-22">
      <Welcome no_title />
			</div>

			<my-button
				:numb="btn_Numb_Page"
				:title="btn_Name_Page"
				@click="goTo('/')"
			/>
		</div>
	</div>
	<div class="stripe"></div>

	<div class="represent">
    <WhatDND/>
	</div>

	<div class="sidebar_right">
		<MasterParameters />
	</div>

	<PlagBanner v-if="small_screen"/>
</template>
<script>

import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";

import PlagBanner from "@/components/PlagBanner.vue";
import Welcome from "@/components/Welcome.vue";
import WhatDND from "@/components/WhatDND.vue";
import MasterParameters from "@/components/parameters/__param__lists/0_MasterParameters.vue";

// import MainApp from "@/components/main/MainApp.js";
export default {
	name: "MasterPage",
	// mixins: [MainApp],
	components: {
    PlagBanner,
    Welcome,
    WhatDND,
    MasterParameters,
	},
	data() {
		return {
			small_screen: false,
		};
	},

	created() {
		window.addEventListener("resize", this.onResize);
		this.onResize();
	},

	destroyed() {
		window.removeEventListener("resize", this.onResize);
	},

	computed: {
		...mapState(usePagesStore, [
			"site_settings",
      "btn_Numb_Page",
      "btn_Name_Page"
		]),

    t_Lobby() {
      return this.T("lobby_welcome_title");
    },
	},

	methods: {
		goTo(route) {
				// this.site_settings.old_page = null;
        this.$router.push(route);
      },

		onResize() {
			this.small_screen = window.innerWidth <= 1279;
		},
	},
};
</script>

<style>

.header {
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.delimiter {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

.stripe {
	min-width: 2px;
	background-color: rgba(255, 255, 255, 0.1);
}

.sidebar_left {
	padding-top: 32px;
	width: 320px;
	background-color: #0e1518;
	display: flex;
	flex-direction: column;
}

.main_menu_wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.main_menu_wrap::-webkit-scrollbar {
	width: 0;
}

.main_chapter {
	padding: 0 32px 0 32px;
	display: flex;
	flex-direction: column;
	gap: 22px;
}

.main_chapter_menu {
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
  min-width: 320px;
	max-height: 100%;
	scrollbar-width: none;
}

.main_chapter_menu::-webkit-scrollbar {
	width: 0;
}

/* ---------------------characters----------------------*/

.represent {
	padding: 32px;
	flex: 1 1 auto;
	display: flex;
	background-color: #0e1518;
	z-index: 2;
	overflow: hidden;
}

/* ---------------------sidebar_right----------------------*/

.sidebar_right {
	min-width: 426px;
	max-width: 426px;
	padding: 32px;
	overflow-y: scroll;
	scrollbar-width: none;
	background-color: #0e1518;
	z-index: 2;
	transition: all 0.4s ease-in-out;
}

.sidebar_right::-webkit-scrollbar {
	width: 0;
}
</style>
