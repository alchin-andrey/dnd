<template>
	<div class="avatar-print">
		<section class="level-blok">
			<div>{{ t_lvl }}</div>
			<div class="int-600-48">{{ MY.level }}</div>
			<div>{{ t_Mastery }}</div>
		</section>

		<div class="hiden-avatar">
			<section class="character_blank">
				<RaceBody body_part="skin" />
				<RaceBody body_part="eyes" />
				<RaceBody body_part="hair" />
				<RaceBody body_part="class" />
			</section>
		</div>

		<section class="avatar-sett-wrapp">
			<div class="flex-sett">
				<div class="sett-text-absol">{{ t_Saving }}</div>
				<div class="cell-wrapp">
					<div class="flex-centr int-600-36">+</div>
					<div><div class="cell-free" v-for="n in 3"></div></div>
				</div>
				<div class="cell-wrapp">
					<div class="flex-centr int-600-36">-</div>
					<div><div class="cell-free" v-for="n in 3"></div></div>
				</div>
			</div>
			<div class="sett-tired">
				<div class="sett-text-absol">{{ t_Fatigue }}</div>
				<div class="cell-wrapp">
					<div class="cell-free" v-for="n in 5"></div>
				</div>
			</div>
		</section>

		<div class="gradient"></div>
	</div>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "Blank__Avatar",
	methods: {},

	computed: {
		...mapState(useMYStore, ["MY", "Mastery", "str_Upper"]),

		t_lvl() {
			return this.str_Upper(this.t("level"));
		},

		t_Saving() {
			return this.str_Upper(this.t("saving_throws"));
		},

		t_Fatigue() {
			return this.str_Upper(this.t("fatigue"));
		},

		t_Mastery() {
			return `${this.t("print_mastry")} +${this.Mastery}`;
		},
	},
};
</script>

<style>
.int-600-36 {
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 36px;
	line-height: 50px;
	text-align: center;
	letter-spacing: 0.02em;
}

.avatar-print {
	width: 100%;
	/* width: 1223px; */
	height: 1404px;
	/* overflow: hidden; */
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
}

.hiden-avatar {
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: absolute;
}

.character_blank {
	height: 150%;
	position: absolute;
	border-radius: 50px;
	left: 50%;
	transform: translate(-50%, 0);
}

.character_blank img {
	position: absolute;
	top: 50%;
	/* left: 0 !important; */
	left: 50%;
	transform: translate(-50%, -50%);
}

.character_blank svg {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
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
