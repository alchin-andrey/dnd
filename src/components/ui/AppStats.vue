<template>
	<div
		class="column jbm-300"
		:class="{ passive: numb == 0, 'rare-text': max_Numb }"
	>
		<div class="column_value">
			<section class="flex_row">
				<div class="icon">
					<svg
						class="icon_svg"
						:class="{
							max_icon_svg: max_Numb,
							save_svg: save_Icin,
							max_save_svg: save_Icin && max_Numb,
						}"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						v-html="atribute_icon[title]"
					/>
				</div>
				<div class="item">
					{{ t_Title }}
					<span v-if="t_Type">{{ t_Type }}</span>
				</div>
			</section>
			<div v-if="dot" class="dotted passive">
				..................................
			</div>
			<div :class="{ 'rare-text': max_Numb }">{{ Prefix }}{{ numb }}</div>
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
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
// import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
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
		save: {
			type: Array,
			default: [],
		},
	},

	computed: {
		// STORES
		// ...mapState(useMYStore, ["MY"]),
		...mapState(useStatsStore, [
			"stats_Class_Page_Numb_Diff",
			"stats_Class_Page_Numb",
			"stats_Base_Max",
			"stats_Save",
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

		max_Numb() {
			if (this.only_Save) {
				return this.stats_Save(this.title);
			} else {
				const stat_numb = this.stats_Class_Page_Numb(this.title);
				const max = this.stats_Base_Max(this.title);
				return stat_numb >= max;
			}
		},

		save_Icin() {
			return this.stats_Save(this.title) || this.only_Save;
		},

    max_Cube: (stor) => (n) => {
      if (stor.only_Save) {
				return stor.stats_Save(stor.title);
			} else {
        const diff_num = stor.stats_Class_Page_Numb_Diff(stor.title)
        return (n - diff_num) < 0;
      }
    }
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
  opacity: 0.2;
}

.passive {
	color: rgba(255, 255, 255, 0.2);
	fill-opacity: 0.2;
	stroke-opacity: 0.2;
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

.grey-2 {
	color: rgba(255, 255, 255, 0.2);
}
</style>
