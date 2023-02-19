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
						<span
							class="grey-2"
							v-if="t_Type"
							>{{ t_Type }}</span
						>
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
					v-for="n in cube_Numb"
					:key="n"
					:class="{
						cube_save: only_Save,
						cube_max: max_Cube(n),
					}"
				/>
			</div>
		</div>
	</AppTooltip>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { usePagesStore } from "@/stores/user/PagesStore";
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
		...mapState(usePagesStore, ["pages"]),
		...mapState(useStatsStore, [
			"stats_Class_Page_Numb_Overflow",
			// "stats_Class_Page_Numb",
			"stats_Class_Page_Numb_Full",
			"stats_Base_Max",
			"stats_Saving_Arr",
		]),
    ...mapState(useOverflowStore, [
      "overflow_Stats_Save",
      "overflow_Stats_Numb"
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
      if(this.param) {
        return false;
      } else {
        return this.overflow_Stats_Save(this.title, this.active_card);
      }
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

		save_Icon() {
			const shown_save = this.pages.class_page
				? this.stats_Saving_Arr.includes(this.title)
				: false;
			return shown_save || this.only_Save;
		},

		max_Cube: (stor) => (n) => {
      if (stor.param || stor.pages.race_page) {
				return false;
			} else if (stor.only_Save) {
				return stor.overflow_Save;
			} else {
				if (stor.active_card) {
					const overflow_numb = stor.stats_Class_Page_Numb_Overflow(stor.title);
					return n - overflow_numb <= 0;
				} else {
					const stat_numb_full = stor.stats_Class_Page_Numb_Full(stor.title);
					const max = stor.stats_Base_Max(stor.title);
					const stat_numb_full_pls = stat_numb_full + stor.numb;
					const stat_numb_pls = stat_numb_full_pls < max ? stat_numb_full_pls : max;
					const overflow_numb = stat_numb_full_pls - stat_numb_pls;
					return n - overflow_numb <= 0;
				}
			}
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
