<template>
	<div>

		<div class="hiden-avatar">
			<section class="character_blank" :class="{ character_blank_higher: chare_Higher }">
				<RaceBody body_part="skin" :blank_print="blank_print" />
				<RaceBody body_part="eyes" :blank_print="blank_print" />
				<RaceBody body_part="hair" :blank_print="blank_print" />
				<RaceBody body_part="class" :blank_print="blank_print" />
			</section>
		</div>

		<AppPrintLevelBlok br_24 v-if="standard_Blank"/>

		<section class="avatar-sett-wrapp" v-if="standard_Blank">
			<AppPrintSavingTrows class="flex-sett" />
			<AppPrintFating class="sett-tired" />
		</section>

		<div :class="style_Grad" v-if="chare_Higher" />
	</div>
</template>

<script>
import ui_icon from "@/assets/catalog/icon/ui_icon";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "Blank__Avatar",
	data() {
		return {
			ui_icon: ui_icon,
		};
	},

	props: {
		blank_print: {
			type: String,
			default: null,
		},
		blank_size: {
			type: String,
			default: null,
		},
  },

	computed: {
		...mapState(useMYStore, ["MY"]),

		t_Saving() {
			return this.T("saving_throws");
		},

		t_Fatigue() {
			return this.T("fatigue");
		},

		chare_Higher() {
			const size = this.standard_Blank ? 155 : 147;
			return this.MY.height >= size;
		},

		standard_Blank() {
			return this.blank_print == 'standard';
		},

		style_Grad() {
			if (this.standard_Blank) return 'gradient--standard';
			else return 'gradient--oldschool';
		}
	},
};
</script>

<style scoped>
.avatar-sett-wrapp {
	width: var(--px-162);
	margin: 1px 1px 0 0;
}

.flex-sett {
	padding: var(--px-30) var(--px-26) var(--px-26);
	position: relative;
	z-index: 1000;
	background: #FFFFFF;
	border: var(--border-blank);
	border-radius: var(--px-24);
}

.sett-text-absol {
	position: absolute;
	top: var(--px-8);
	left: 50%;
	z-index: 100;
	transform: translateX(-50%);
}

.sett-tired {
	position: relative;
	margin-top: var(--px-36);
	padding: var(--px-54) var(--px-26) var(--px-26);
	background: #FFFFFF;
	border: var(--border-blank);
	border-radius: var(--px-24);
}

.flex-centr {
	height: var(--px-60);
	display: flex;
	align-items: center;
	justify-content: center;
}

.cell-wrapp {
	width: 100%;
}

.cell-free:first-child {
	border-top: var(--border-blank);
	border-radius: var(--px-12) var(--px-12) 0 0;
}

.cell-free:last-child {
	border-radius: 0 0 var(--px-12) var(--px-12);
}

.cell-free {
	width: 100%;
	height: 48px;
	background-color: #ffffff;
	border-right: var(--border-blank);
	border-left: var(--border-blank);
	border-bottom: var(--border-blank);
}

.hiden-avatar {
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: absolute;
}

.character_blank {
	height: 130%;
	width: 100%;
	position: absolute;
	bottom: 0;
	border-radius: var(--px-24);
	overflow: hidden;
}

.character_blank img,
.character_blank svg,
.character_blank>.custom-img {
	position: absolute;
	bottom: var(--px-60);
	left: 50%;
	transform: translateX(-50%);
	border-radius: var(--px-24);
}

.character_blank_higher {
	top: 0;
	bottom: auto;
}

.character_blank_higher img {
	top: 0;
	bottom: auto;
}

.character_blank_higher>.custom-img {
	top: 0;
	bottom: auto;
}

.gradient--standard {
	height: var(--px-300);
	width: 100%;
	position: absolute;
	bottom: 0;
	background: linear-gradient(180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.5) 46%,
			rgba(255, 255, 255, 1) 100%);
}

.gradient--oldschool {
	height: var(--px-150);
	width: 100%;
	position: absolute;
	bottom: 0;
	background: linear-gradient(180deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.4) 46%,
			rgba(255, 255, 255, 1) 100%);
}
</style>
