<template>
  <div class="column_value jbm-300">
    <div class="base pad-52 grey">{{t_Base}}</div>
    <div class="mod">{{t_Save}}</div>
    <div class="mod">{{t_Mod}}</div>
  </div>
  <my-wrapper>
	<div class="column_value jbm-300" v-for="name in stats_Keys" :key="name">
		<div class="base">
			<svg
				class="passive_svg"
				:class="{
					save_svg: stats_Saving_Arr.includes(name),
				}"
				width="18"
				height="18"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				v-html="stats_icon[name]"
			/>
			<div class="item">
				{{ t_Stats_Name(name) }}<span>{{ base_Numb(name) }}</span>
			</div>
		</div>
    <div class="mod">
			<div class="mod_numb">{{ mod_Numb(stats_Save_Mod(name)) }}</div>
			<div class="visual">
				<div class="cube cube_pos" v-for="n in cube_Positive(name)" :key="n"></div>
        <div class="cube cube_save" v-for="n in cube_Save(name)" :key="n"></div>
				<div class="cube cube_neg" v-for="n in cube_Negative_Save(name)" :key="n"></div>
			</div>
		</div>
		<div class="mod">
			<div class="mod_numb">{{ mod_Numb(stats_Mod(name)) }}</div>
			<div class="visual">
				<div class="cube cube_pos" v-for="n in cube_Positive(name)" :key="n"></div>
				<div class="cube cube_neg" v-for="n in cube_Negative(name)" :key="n"></div>
			</div>
		</div>
	</div>
</my-wrapper>
</template>

<script>
import stats_icon from "@/assets/catalog/icon/stats_icon";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassStatsTable",
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
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "Mastery"]),
		// GETTERS
		...mapState(useStatsStore, [
      "stats_Keys",
      "stats_Class_Page_Numb",
      "stats_Saving_Arr",
			"stats_Mod",
      "stats_Save",
      "stats_Save_Mod",
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
			return (name) => this.stats_Class_Page_Numb(name);
		},

    mod_Numb: (state) => (numb) => {
			if (numb >= 0) {
				return `+${numb}`;
			} else {
				return numb;
			}
		},

		cube_Positive: (state) => (name) => {
			let mod = state.stats_Mod(name);
			return mod > 0 ? mod : null;
		},

    cube_Save: (state) => (name) => {
      let save = state.stats_Save(name);
      let mod = state.stats_Mod(name);
      if (save && mod < 0) {
        return save - Math.abs(mod);
      } else if (save) {
        return save;
      } else {
        return null;
      }
		},

		cube_Negative: (state) => (name) => {
			let mod = state.stats_Mod(name);
			return mod < 0 ? Math.abs(mod) : null;
		},

    cube_Negative_Save: (state) => (name) => {
      let save = state.stats_Save_Mod(name);
			let mod = state.stats_Mod(name);
			return (save + mod) < 0 ? Math.abs(mod) : null;
		},
	},

	methods: {},
};
</script>

<style scoped>
.column_value {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 18px;
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
	width: 90px;
	display: flex;
	align-items: center;
}

.pad-52 {
  padding-left: 52px;
}

.item {
	margin-left: 4px;
}

.grey {
  color: rgba(255, 255, 255, 0.2);
}

.item span {
	margin-left: 8px;
	color: rgba(255, 255, 255, 0.2);
}

.mod {
  width: 124px;
  display: flex;
  gap: 12px;
}

.mod_numb {
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.visual {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 5px 0 5px 0;
	gap: 2px;
}

/* .fix-width {
  width: 98px;
} */

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
	background: #05FF00;
	box-shadow: 0px 0px 4px 1px rgba(255, 245, 0, 0.25);
}

.cube_neg {
	border: 1px solid #ff0000;
}
</style>
