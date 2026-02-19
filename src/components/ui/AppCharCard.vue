<template>
	<div 
	class="ethnos-char-back" 
	:class="{
		'border cur-p': mob_menu,
		'custom-char-menu': active_Mob_Custom_Char,
		}"
	:style="style_Img_Obj"
	>
		<section v-if="!active_Mob_Custom_Char">
			<RaceBody body_part="skin" :ethnos_name="ethnos_name" :mob_menu="show_Mob_Char" />
			<RaceBody body_part="skin" :ethnos_name="ethnos_name" :mob_menu="show_Mob_Char" :error="show_Mob_Char" />
			<RaceBody body_part="hair" :ethnos_name="ethnos_name" :mob_menu="show_Mob_Char" />
			<RaceBody body_part="eyes" :ethnos_name="ethnos_name" :mob_menu="show_Mob_Char" />
			<RaceBody body_part="class" :mob_menu="show_Mob_Char"  v-if="!pages.race_page" />
		</section>
		<div class="flex-row gap-6 text-rel" v-if="mob_menu">
			<div class="jbm-300">{{ t_Details }}</div>
			<AppSvg class="svg-18 svg-main-f" name="arrow_right"/>
		</div>
		<div 
			v-if="MY.custom_photo && !ethnos_name" 
			class="plag-photo-load"
			:class="{'animation--error-photo-upload': errors.file_photo}" 
			/>
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
		welcom_char: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(usePagesStore, ["pages", "errors"]),

		t_Details() {
			return this.T('details')
		},

		show_Mob_Char() {
			return this.mob_menu || this.welcom_char;
		},

		active_Mob_Custom_Char() {
			return this.show_Mob_Char && this.MY.param.user_photo;
		},

		style_Img_Obj() {
			if (this.active_Mob_Custom_Char) return {
					'background-image': `url(${this.MY.custom_photo}), url(${require('@/assets/img/ethnos/forest_custom@3x.png')})`,
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
	position: relative;
	overflow: hidden;
	border-radius: 4px;
	background-image: url('@/assets/img/ethnos/image.png');
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

.plag-photo-load {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10;
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
