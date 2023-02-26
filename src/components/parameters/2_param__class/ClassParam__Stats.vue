<template>
	<my-wrapper gap_16 :hr="hr">
		<div class="column_value jbm-300">
			<div class="base pad-52 grey-2">{{ t_Base }}</div>
			<div class="mod">{{ t_Save }}</div>
			<div class="mod">{{ t_Mod }}</div>
		</div>
		<my-wrapper>
			<div class="column_value jbm-300" v-for="name in stats_Keys" :key="name">
				<div class="base">
					<svg
						class="active_svg"
						:class="{
							save_svg: stats_Save_Page_Arr.includes(name),
						}"
						viewBox="0 0 18 18"
						xmlns="http://www.w3.org/2000/svg"
						v-html="stats_icon[name]"
					/>
					<div class="item">
						{{ t_Stats_Name(name)
						}}<span
							class="grey-2"
							:class="{
                active: max_Numb(name),
								'rare-text': max_Numb_More(name),
							}"
							>{{ base_Numb(name) }}</span>
					</div>
				</div>
				<div class="mod">
					<div
						class="mod_numb"
						:class="{ 'grey-2': stats_Sign_Save(name) == 0 }"
					>
						{{ stats_Sign_Save(name) }}
					</div>
					<div class="visual">
						<div
							class="cube cube_pos"
							v-for="n in cube_Positive(name)"
							:key="n"
						></div>
						<div
							class="cube cube_save"
							v-for="n in cube_Save(name)"
							:key="n"
						></div>
						<div
							class="cube cube_neg"
							v-for="n in cube_Negative_Save(name)"
							:key="n"
						></div>
					</div>
				</div>
				<div class="mod">
					<div
						class="mod_numb"
						:class="{ 'grey-2': stats_Sign_Mod(name) == 0 }"
					>
						{{ stats_Sign_Mod(name) }}
					</div>
					<div class="visual">
						<div
							class="cube cube_pos"
							v-for="n in cube_Positive(name)"
							:key="n"
						></div>
						<div
							class="cube cube_neg"
							v-for="n in cube_Negative(name)"
							:key="n"
						></div>
					</div>
				</div>
			</div>
		</my-wrapper>
	</my-wrapper>
</template>

<script>
import stats_icon from "@/assets/catalog/icon/stats_icon";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassParam__Stats",
	data() {
		return {
			stats_icon: stats_icon,
		};
	},
	props: {
		stats_name: {
			type: String,
			default: null,
		},
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "Mastery"]),
		// GETTERS
		...mapState(useStatsStore, [
			"stats_Keys",
			"stats_Save_Page_Arr",
			"stats_Numb",
      "stats_Numb_Full",
			"stats_Mod",
			"stats_Save",
			"stats_Save_Mod",
      "stats_Base_Max",
		]),

		t_Base() {
			return this.t("strength_base").slice(0, 3);
		},

		t_Save() {
			return this.t("saving");
		},

		t_Mod() {
			return this.t("modifier");
		},

		t_Stats_Name() {
			return (name) => this.t(name).slice(0, 3);
		},

		base_Numb() {
			return (name) => this.stats_Numb(name);
		},

		stats_Sign_Save: (stor) => (name) => {
			const save = stor.stats_Save_Mod(name);
			return stor.sign_Numb(save);
		},

		stats_Sign_Mod: (stor) => (name) => {
			const mod = stor.stats_Mod(name);
			return stor.sign_Numb(mod);
		},

		sign_Numb: (stor) => (numb) => {
			return numb > 0 ? `+${numb}` : numb;
		},

		cube_Positive: (stor) => (name) => {
			let mod = stor.stats_Mod(name);
			return mod > 0 ? mod : null;
		},

		cube_Save: (stor) => (name) => {
			let save = stor.stats_Save(name);
			let mod = stor.stats_Mod(name);
			if (save && mod < 0) {
				return save - Math.abs(mod);
			} else if (save) {
				return save;
			} else {
				return null;
			}
		},

		cube_Negative: (stor) => (name) => {
			let mod = stor.stats_Mod(name);
			return mod < 0 ? Math.abs(mod) : null;
		},

		cube_Negative_Save: (stor) => (name) => {
			let save = stor.stats_Save_Mod(name);
			let mod = stor.stats_Mod(name);
			return save + mod < 0 ? Math.abs(mod) : null;
		},

		max_Numb: (stor) => (name) => {
      const max = stor.stats_Base_Max(name);
			return stor.stats_Numb_Full(name) == max;
		},

		max_Numb_More: (stor) => (name) => {
      const max = stor.stats_Base_Max(name);
			return stor.stats_Numb_Full(name) > max;
		},
	},

	methods: {},
};
</script>

<style scoped>
.column_value {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	min-height: 18px;
}

.active_svg {
	width: 18px;
	height: 18px;
	fill: none;
	stroke: white;
}

.passive_svg {
	fill: none;
	stroke: rgba(255, 255, 255, 0.2);
}

.save_svg {
	fill: #05ff00;
	stroke: #05ff00;
}

.base {
	width: 90px;   /* 90 */
	display: flex;
	align-items: center;
}

.pad-52 {
	padding-left: 52px;
}

.item {
	margin-left: 4px;
}

.grey-2 {
	color: rgba(255, 255, 255, 0.2);
}
.grey-4 {
	color: rgba(255, 255, 255, 0.4);
}

.item span {
	margin-left: 8px;
}

.mod {
	width: 124px;
	display: flex;
	gap: 12px;
}

.mod_numb {
	width: 14px;
	display: flex;
	justify-content: flex-end;
}

.visual {
	display: flex;
	flex-wrap: wrap;
	padding: 5px 0 5px 0;
	gap: 2px;
}

.cube {
	width: 8px;
	height: 8px;
	border-radius: 2px;
}

.cube_pos {
	background: #ffffff;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
}
.cube_save {
	background: #05ff00;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
}

.cube_neg {
	border: 1px solid #ff0000;
}

.active {
	color: #ffffff;
}
.rare-text {
	color: #ffc93d;
}
</style>
