<template>
	<div class="ethnos-char-back" :class="{'border cur-p': mob_menu}">
		<RaceBody body_part="skin" :ethnos_name="ethnos_name" :mob_menu="mob_menu"/>
		<RaceBody body_part="hair" :ethnos_name="ethnos_name" :mob_menu="mob_menu"/>
		<RaceBody body_part="eyes" :ethnos_name="ethnos_name" :mob_menu="mob_menu"/>
		<RaceBody body_part="class" :mob_menu="mob_menu" v-if="!pages.race_page"/>
		<div class="flex-row gap-6">
			<div class="jbm-300">{{ t_Details }}</div>
			<AppSvg class="svg-18 svg-main-f" :path="ui_icon.arrow_right"/>
		</div>
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
export default {
	name: "AppCharCard",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},
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
		...mapState(usePagesStore, ["pages"]),

		t_Details() {
			return this.T('details')
		}
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

.ethnos-char-back > img {
	position: absolute;
	top: 16px;
	right: 50%;
	-webkit-transform: translate(-50%, 0%);
	-ms-transform: translate(-50%, 0%);
	transform: translate(-50%, 0%);
}
.ethnos-char-back > svg {
	height: 300px;
	position: absolute;
	top: 16px;
	left: 0;
}
</style>
