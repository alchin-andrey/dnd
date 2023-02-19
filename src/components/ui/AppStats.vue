<template>
	<AppTooltip
		class="relative"
		text="hint_over_limit"
		:shown="overflow_Numb"
		warn
	>
		<div
			class="column jbm-300"
			:class="{ passive: numb == 0, 'rare-text': overflow_Numb }"
		>
			<div class="column_value">
				<section class="flex_row">
					<div class="icon">
						<svg
							class="icon_svg"
							:class="{
								max_icon_svg: overflow_Numb,
								save_svg: save_Icon,
								max_save_svg: save_Icon && overflow_Numb,
							}"
							viewBox="0 0 18 18"
							xmlns="http://www.w3.org/2000/svg"
							v-html="atribute_icon[title]"
						/>
					</div>
					<div class="item">
						{{ t_Title }}
						<span class="grey-2" v-if="t_Type">{{ t_Type }}</span>
					</div>
				</section>
				<div v-if="dot" class="dotted passive">
					..................................
				</div>
				<div>{{ Prefix }}{{ numb }}</div>
			</div>
			<div class="visual">
				<div
					class="cube"
					v-for="i in cube_Numb"
					:key="i"
					:class="{
						cube_save: only_Save,
						cube_max: overflow_Cube(i),
					}"
				/>
			</div>
		</div>
	</AppTooltip>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";
export default {
	name: "AppStats",
	data() {
		return {
			atribute_icon: atribute_icon,
		};
	},
	props: {
		title: {
			type: String,
			default: null,
		},
		type: {
			type: String,
			default: null,
		},
		numb: {
			type: Number,
			default: null,
		},
		dot: {
			type: Boolean,
			default: false,
		},
		plus: {
			type: Boolean,
			default: false,
		},
		active_card: {
			type: Boolean,
			default: false,
		},
		// not_warn: {
		// 	type: Boolean,
		// 	default: false,
		// },
		param: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		// STORES
		...mapState(useStatsStore, ["stats_Save_Page_Arr"]),
		...mapState(useOverflowStore, [
			"overflow_Stats_Save",
			"overflow_Stats_Numb",
			"overflow_Stats_Cube",
		]),

		t_Title() {
			return this.t(this.title);
		},

		t_Type() {
			return this.t(this.type);
		},

		Prefix() {
			return this.plus && this.numb > 0 ? "+" : "";
		},

		cube_Numb() {
			return this.numb < 0 ? null : this.numb;
		},

		only_Save() {
			return this.type == "saving";
		},

		overflow_Save() {
			return this.overflow_Stats_Save(this.title, this.active_card);
		},

		overflow_Numb() {
			if (this.param) {
				return false;
			} else if (this.only_Save) {
				return this.overflow_Save;
			} else {
				return this.overflow_Stats_Numb(this.title, this.active_card);
			}
		},

		overflow_Cube: (stor) => (i) => {
			if (stor.param) {
				return false;
			} else if (stor.only_Save) {
				return stor.overflow_Save;
			} else {
				return stor.overflow_Stats_Cube(
					i,
					stor.numb,
					stor.title,
					stor.active_card
				);
			}
		},

		save_Icon() {
			const shown_save = this.stats_Save_Page_Arr.includes(this.title);
			return shown_save || this.only_Save;
		},
	},
};
</script>

<style scoped>
.dotted {
	flex: 1 0;
	margin: 0 0.6em;
	white-space: nowrap;
	overflow: hidden;
}

.column {
	/* width: 340px; */
	display: flex;
	min-height: 18px;
	justify-content: space-between;
	align-items: flex-start;
}

.column_value {
	width: 230px;
	display: flex;
	justify-content: space-between;
	flex: 1 1 auto;
}

.flex_row {
	display: flex;
}

.icon {
	display: flex;
	width: 18px;
	height: 18px;
	margin-right: 4px;
}

.icon_svg {
	width: 18px;
	height: 18px;
	fill: none;
	stroke: white;
}

.item {
	display: flex;
	align-items: center;
}

.item span {
	margin-left: 8px;
	/* opacity: 0.2; */
}

.passive {
	color: rgba(255, 255, 255, 0.2);
	fill-opacity: 0.2;
	stroke-opacity: 0.2;
}

.grey-2 {
	color: rgba(255, 255, 255, 0.2);
}

.rare-text,
.rare-text span {
	color: #ffc93d;
}

.max_icon_svg {
	stroke: #ffc93d;
}
.save_svg {
	fill: #05ff00;
	stroke: #05ff00;
}

.max_save_svg {
	fill: #ffc93d;
	stroke: #ffc93d;
}

.visual {
	width: 98px;
	display: flex;
	align-items: center;
	margin-left: 12px;
	flex-wrap: wrap;
	flex-direction: row-reverse;
	justify-content: flex-end;
	padding: 5px 0 5px 0;
	gap: 2px;
}

.cube {
	width: 8px;
	height: 8px;
	background: #ffffff;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
	border-radius: 2px;
}

.cube_save {
	background: #05ff00;
}
.cube_max {
	background: #ffc93d;
}
</style>
