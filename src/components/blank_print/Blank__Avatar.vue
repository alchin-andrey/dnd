<template>
	<div class="avatar-print">

		<div class="hiden-avatar">
			<section class="character_blank" :class="{character_blank_higher: chare_Higher}">
				<RaceBody body_part="skin" blank_print/>
				<RaceBody body_part="eyes" blank_print/>
				<RaceBody body_part="hair" blank_print/>
				<RaceBody body_part="class" blank_print/>
			</section>
		</div>

		<section class="level-blok">
			<div>{{ t_lvl }}</div>
			<div class="int-600-48">{{ MY.level }}</div>
			<div>{{ t_Mastery }}</div>
		</section>

		<section class="avatar-sett-wrapp">
			<div class="flex-sett">
				<div class="sett-text-absol">{{ t_Saving }}</div>
				<div class="cell-wrapp">
					<div class="flex-centr">
						<AppSvg class="svg-36 svg-black-f" name="plus"/>
					</div>
					<div>
						<div class="cell-free" v-for="n in 3" />
					</div>
				</div>
				<div class="cell-wrapp">
					<div class="flex-centr">
						<AppSvg class="svg-36 svg-black-f" name="minus"/>
					</div>
					<div>
						<div class="cell-free" v-for="n in 3" />
					</div>
				</div>
			</div>
			<div class="sett-tired">
				<div class="sett-text-absol">{{ t_Fatigue }}</div>
				<div class="cell-wrapp">
					<div class="cell-free" v-for="n in 5" />
				</div>
			</div>
		</section>

		<div class="gradient" v-if="chare_Higher"></div>
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

	computed: {
		...mapState(useMYStore, ["MY", "Mastery"]),

		t_lvl() {
			return this.T("level");
		},

		t_Saving() {
			return this.T("saving_throws");
		},

		t_Fatigue() {
			return this.T("fatigue");
		},

		t_Mastery() {
			return `${this.t("print_mastry")} +${this.Mastery}`;
		},

    chare_Higher() {
      return this.MY.height >= 155;
    }
	},
};
</script>

<style>
.main-svg {
	width: 36px;
	height: 36px;
	fill: black;
}

.avatar-print {
	width: 100%;
	/* width: 1223px; */
	height: 1404px;
	position: relative;
	display: flex;
	justify-content: space-between;
}

.level-blok {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2px;
	width: 144px;
	height: 144px;
	border: 1px solid #000000;
	border-radius: 24px;
	position: relative;
	z-index: 1000;
	background-color: #ffffff;
}

.avatar-sett-wrapp {
	width: 112px;
	margin: 1px 1px 0 0;
}

.flex-sett {
	display: flex;
	justify-content: space-between;
	gap: 16px;
	padding-top: 24px;
	position: relative;
	z-index: 1000;
}

.sett-text-absol {
	position: absolute;
	top: 0;
	left: 50%;
	z-index: 100;
	transform: translateX(-50%);
}

.sett-tired {
	position: relative;
	margin-top: 64px;
	padding-top: 46px;
}

.flex-centr {
  height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.cell-wrapp {
	width: 100%;
}
.cell-free:first-child {
	border-radius: 12px 12px 0 0;
}

.cell-free:last-child {
	border-radius: 0 0 12px 12px;
}

.cell-free {
	width: 100%;
	height: 48px;
	border: 1px solid #000;
	margin: -1px -1px 0 0;
	background-color: #ffffff;
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
	border-radius: 24px;
	overflow: hidden;
}

.character_blank img,
.character_blank svg,
.character_blank > .custom-img {
	position: absolute;
	bottom: 60px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 24px;
}

.character_blank_higher {
  top: 0;
  bottom: auto;
}

.character_blank_higher img {
  top: 0;
  bottom: auto;
}

.character_blank_higher > .custom-img {
  top: 0;
  bottom: auto;
}

.gradient {
	height: 300px;
	width: 100%;
	position: absolute;
	bottom: 0;
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0) 0%,
		rgba(255, 255, 255, 0.5130427170868348) 46%,
		rgba(255, 255, 255, 1) 100%
	);
}
</style>
