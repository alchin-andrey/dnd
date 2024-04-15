<template>
	<div class="h-100" v-vpshow="pages.race_page">
		<div class="h-100" v-vpshow="pages.class_page">
			<div class="sidebar-left h-100" v-vpshow="pages.alignment_page">
				<div class="main-chapter">
					<HeaderMenu/>
					<div class="flex-col gap-4">
						<AppCharCard mob_menu v-if="!screen_Max" @click="showMobParam()"/>
						<section v-if="!pages.race_page">
							<div class="back-page-grup">
								<AppBackPage :text_arr="arr_Name_Race_Page" :overflow="overflow_Step_1" @click="goPage('race_page')" />
								<AppBackPage v-if="!pages.class_page" :text_arr="arr_Name_Class_Page" :overflow="overflow_Step_2" @click="goPage('class_page')" />
							</div>
							<div class="delimiter mr-t-22" v-if="screen_Max" />
						</section>
					</div>
					<AppSliderName v-if="pages.race_page" numb="01" name="race" />
					<AppSliderName v-if="pages.class_page" numb="02" name="class" />
					<AppName v-if="pages.alignment_page" numb="03" title="name" v-model="MY.name" />
					<div class="delimiter" v-if="screen_Max" />
				</div>
				<div class="main-menu-wrap" @click="showHome()">
					<div class="main-chapter-menu">
						<RaceMenu v-show="pages.race_page" @click.stop />
						<ClassMenu v-show="pages.class_page" @click.stop />
						<AlignmentMenu v-show="pages.alignment_page" @click.stop />
					</div>
					<transition name="btm-fade" mode="out-in">
						<my-button v-if="chang_Btm" :numb="btn_Numb" :title="btn_Name" @btmDo="btnGo()" />
						<my-button-back v-else title="command_back" @click="showHome()" />
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useMYStore } from "@/stores/user/MYStore";

import HeaderMenu from "@/components/menu/0_HeaderMenu.vue";
import RaceMenu from "@/components/menu/1_RaceMenu.vue";
import ClassMenu from "@/components/menu/2_ClassMenu.vue";
import AlignmentMenu from "@/components/menu/3_AlignmentMenu.vue";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "Main__MenuBar",
	components: {
		HeaderMenu,
		RaceMenu,
		ClassMenu,
		AlignmentMenu,
	},
	computed: {
		//STORES
		...mapState(useMYStore, [
			"MY",
			"arr_Name_Race_Page",
			"arr_Name_Class_Page"
		]),
		...mapState(usePagesStore, [
			"class_page",
			"shown_home",
			"pages",
			"btn_Numb",
			"btn_Name",
			"screen_Max"
		]),

		...mapState(useOverflowStore, ["overflow_Step_1", "overflow_Step_2"]),

		show_Bar() {
			return this.screen_Max ? true : this.shown_home;
		},

		chang_Btm() {
			return !this.screen_Max ? true : this.shown_home;
		}
	},

	methods: {
		...mapActions(usePagesStore, [
			"showHome",
			"goPage",
			"btnGo",
			"showMobParam",
		]),
	},
};
</script>

<style>
.delimiter {
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
}

.sidebar-left {
	padding-top: 32px;
	width: 320px;
	background-color: #0e1518;
	display: flex;
	flex-direction: column;
}

.main-chapter {
	padding: 0 32px 0 32px;
	display: flex;
	flex-direction: column;
	gap: 22px;
}

.back-page-grup {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.main-menu-wrap {
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	overflow-x: hidden;
	scrollbar-width: none;
	flex: 1 1 auto;
}

.main-menu-wrap::-webkit-scrollbar {
	width: 0;
}

.main-chapter-menu {
	height: 100%;
	padding: 40px 32px 32px 32px;
	overflow-y: scroll;
	scrollbar-width: none;
}

.main-chapter-menu::-webkit-scrollbar {
	width: 0;
}

@media (max-width: 1279px) {
	.sidebar-left {
		width: 100%;
		max-width: 434px;
		padding-top: 20px;
	}

	.main-chapter {
		padding: 0 20px 0 20px;
		gap: 26px;
	}

	.back-page-grup {
		gap: 4px;
	}

	.main-menu-wrap {
		/* overflow-y: visible; */
		/* overflow-x: visible; */
		overflow: visible;
	}

	.main-chapter-menu {
		padding: 34px 20px 26px 20px;
		overflow-y: visible;
	}
}

.btm-fade-enter-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-leave-active {
	transition: all 0.2s ease-in-out;
}

.btm-fade-enter-from,
.btm-fade-leave-to {
	transform: translateX(-300px);
	opacity: 0;
}

</style>
