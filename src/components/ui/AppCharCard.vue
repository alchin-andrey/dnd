<template>
	<div 
	class="ethnos-char-back" 
	:class="{
		'border cur-p': mob_menu,
		'custom-char-menu': active_Mob_Custom_Char,
		}"
	:style="stule_Img_Obj"
	>
		<section v-if="!active_Mob_Custom_Char">
			<RaceBody body_part="skin" :ethnos_name="ethnos_name" :mob_menu="mob_menu"/>
			<RaceBody body_part="hair" :ethnos_name="ethnos_name" :mob_menu="mob_menu"/>
			<RaceBody body_part="eyes" :ethnos_name="ethnos_name" :mob_menu="mob_menu"/>
			<RaceBody body_part="class" :mob_menu="mob_menu" v-if="!pages.race_page"/>
		</section>
		<div class="flex-row gap-6 text-rel" v-if="mob_menu">
			<div class="jbm-300">{{ t_Details }}</div>
			<AppSvg class="svg-18 svg-main-f" name="arrow_right"/>
		</div>
		<div class="grad-card" v-if="active_Mob_Custom_Char"/>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppCharCard",
	props: {
		ethnos_name: {
			type: String,
			default: null,
		},
		mob_menu: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["pages", "site_settings"]),

		t_Details() {
			return this.T('details')
		},

		active_Mob_Custom_Char() {
			return this.mob_menu && this.site_settings.photo_user
		},

		stule_Img_Obj() {
			if (this.active_Mob_Custom_Char) return {
					'background-image': `url(${this.MY.custom_photo})`,
				}
			else return {};
		},
	},
};
</script>

<style scoped>
.ethnos-char-back {
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	padding: 15px 12px;
	width: 100%;
	min-height: 120px;
	background: #0e1518;
	border-radius: 4px;
	position: relative;
	overflow: hidden;
	background-image: url('@/assets/img/characters/halfling/ethhnos/image.png');
}

.border {
	border: 2px solid rgba(255, 255, 255, 0.06);
	border-radius: 12px;
}

.ethnos-char-back img {
	position: absolute;
	top: 16px;
	right: 50%;
	-webkit-transform: translate(-50%, 0%);
	-ms-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
}
.ethnos-char-back > section > svg {
	height: 300px;
	position: absolute;
	top: 16px;
	left: 0;
}

.custom-char-menu {
	min-height: 200px;
	background-repeat: no-repeat;
	/* background-size: 100% auto; */
	background-size: cover;
	border: none;
	/* padding: 0; */
}

.text-rel {
	position: relative;
	z-index: 100;
}

.grad-card {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	height: 120px;
	z-index: 10;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 100%);
}
</style>
