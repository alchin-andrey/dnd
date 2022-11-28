<template>
	<my-selection-card class="reletiv" passive colors_card>
		<div class="colors_box jbm-300" @mouseleave="hoverStop()">
			<div v-for="(val, i) in color" :key="i" class="colors_row">
				<my-color-block
					v-for="(val, j) in color[i]"
					:key="j"
					@mouseover="hoverColor(i, j)"
					@click="choiceColor(body_part, i, j)"
					:color="color[i][j].hex"
					:active_link="color[i][j].hex"
					:select_link="color_Char_Body.hex"
					:ethnos_color="ethnos_Colors(color[i][j], body_part)"
					:race_color="race_Colors(color[i][j], body_part)"
				>
				</my-color-block>
			</div>
		</div>
		<my-card-text-color
			:title="Hower ? Hower.name : color_Char_Body.name"
			:ethnos_color="
				Hower
					? ethnos_Colors(Hower, body_part)
					: ethnos_Colors(color_Char_Body, body_part)
			"
			:race_color="
				Hower
					? race_Colors(Hower, body_part)
					: race_Colors(color_Char_Body, body_part)
			"
		></my-card-text-color>
		<transition name="fade">
			<div
				class="reset_color"
				:class="{ reset_color_custom: !color_Reset }"
				@click="resetColor(body_part)"
			>
				<img src="@/assets/img/icon/reset.svg" alt="reset" />
			</div>
		</transition>
	</my-selection-card>
</template>

<script>
import { mapState } from "pinia";
import { useColorStore } from "@/stores/modules/ColorStore";
import { usePagesStore } from "@/stores/pages/PagesStore";
import { useMYStore } from "@/stores/MY/MYStore";
export default {
	name: "MyColorSelect",
	props: {
		body_part: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			hower_link: `${this.body_part}_hower`,
		};
	},
	computed: {
		// STORE
		...mapState(useColorStore, ["color"]),
		...mapState(usePagesStore, ["race_page"]),
		...mapState(useMYStore, ["MY"]),
		// GETTERS
		...mapState(useColorStore, ["color_Char_Сommon"]),

		Hower() {
			return this.race_page[this.hower_link];
		},

		color_Reset() {
			return this.MY.color_selected[this.body_part];
		},

		color_Char_Body() {
			return this.color_Char_Сommon(this.body_part);
		},

		ethnos_Colors() {
			const common = this.MY.ethnos.name === "common";
			return (obj, value) =>
				common ? false : this.MY.ethnos.color[value].includes(obj);
		},

		race_Colors() {
			return (obj, value) => this.MY.race.settings.color[value].includes(obj);
		},
	},
	methods: {
		hoverStop() {
			this.race_page[this.hower_link] = null;
		},

		hoverColor(i, j) {
			this.race_page[this.hower_link] = this.color[i][j];
		},

		choiceColor(value, i, j) {
			this.MY.color_selected[value] = this.color[i][j];
		},

		resetColor(value) {
			this.MY.color_selected[value] = null;
		},
	},
};
</script>

<style scoped>
.reletiv {
	position: relative;
}
.colors_box {
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	height: 100%;
	gap: 2px;
}

.colors_row {
	display: flex;
	flex: 1 1 auto;
	height: 100%;
	gap: 2px;
}

.reset_color {
	width: 20px;
	height: 20px;
	bottom: 32px;
	right: 15px;
	position: absolute;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.5s ease;
}

.reset_color_custom {
	opacity: 0;
	transform: rotate(-180deg);
}
</style>
