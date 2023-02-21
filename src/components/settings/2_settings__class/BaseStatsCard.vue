<template>
	<div class="column_value jbm-300">
		<div class="text">
			<svg
				class="active_svg"
				:class="{
					save_svg: stats_Saving_Arr.includes(stats_name),
				}"
				viewBox="0 0 18 18"
				xmlns="http://www.w3.org/2000/svg"
				v-html="stats_icon[stats_name]"
			/>
			<!-- <img :src="icon_Image" :alt="icon" /> -->
			<div class="item">
				{{ t_Title }}<span>{{ t_Type }}</span>
			</div>
		</div>
		<div class="stats_amount">
			<div
				class="numb int-400"
				v-for="numb in revers_Stats_Numb"
				:key="numb"
        @mouseover="hoverStat(numb)" 
        @mouseleave="hoverStop()"
				@click="arr_StatsNeW(numb)"
				:class="{
					active: numb == stats_base_numb[stats_Index],
					active_hower: numb == stats_base_numb[stats_Hower_Index],
				}"
			>
				{{ numb }}
			</div>
		</div>
	</div>
</template>

<script>
import stats_icon from "@/assets/catalog/icon/stats_icon";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "BaseStatsCard",
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
		...mapState(useMYStore, ["MY"]),
    ...mapState(useStatsStore, ["stats_base_numb", "stats_base_save", "stats_base_hower"]),
		// GETTERS
    ...mapState(useStatsStore, ["stats_Keys", "stats_Base_Arr", "stats_Base_Hower_Arr", "stats_Saving_Arr"]),
		
    t_Title() {
			return this.t(this.stats_name);
		},

		t_Type() {
			return this.t(`${this.stats_name}_base`);
		},
    revers_Stats_Numb() {
      let arr = this.stats_base_numb.slice(0)
      return arr.reverse()
    },

		stats_Index() {
			return this.stats_Base_Arr.indexOf(this.stats_name);
		},

		stats_Hower_Index() {
			return this.stats_Base_Hower_Arr.indexOf(this.stats_name);
		},

	},

	methods: {
		// ...mapActions(useMYStore, ["getCustomSelect_Languages_RE"]),

    hoverStop() {
      this.stats_base_hower[this.MY.class.name] = null;
    },

		hoverStat(numb) {
      let arr_base = this.stats_Base_Arr.slice(0);
      let arr = this.stats_Base_Hower_Arr.slice(0);
      let new_index = this.stats_base_numb.indexOf(numb);
      let old_index = this.stats_Index;
      let new_elem = arr[old_index];
      let old_elem = arr[new_index];
      arr.splice(old_index, 1, old_elem);
      arr.splice(new_index, 1, new_elem);
      if(arr.length == arr_base.length && arr.every((el, i) => arr_base[i] == el)) {
        this.stats_base_hower[this.MY.class.name] = null;
      } else {
        this.stats_base_hower[this.MY.class.name] = arr;
      }
		},

		arr_StatsNeW(numb) {
      let arr_base = this.MY.class.stats_base.slice(0);
      let arr = this.stats_Base_Arr.slice(0);
      let new_index = this.stats_base_numb.indexOf(numb);
      let old_index = this.stats_Index;
      let new_elem = arr[old_index];
      let old_elem = arr[new_index];
      arr.splice(old_index, 1, old_elem);
      arr.splice(new_index, 1, new_elem);
      if(arr.length == arr_base.length && arr.every((el, i) => arr_base[i] == el)) {
        this.stats_base_save[this.MY.class.name] = null;
      } else {
        this.stats_base_save[this.MY.class.name] = arr;
      }
		},
	},
};
</script>

<style scoped>
.column_value {
	display: flex;
	align-items: center;
	justify-content: space-between;
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

.text {
	display: flex;
	align-items: center;
}

.item {
	margin-left: 4px;
}

.item span {
	margin-left: 8px;
	color: rgba(255, 255, 255, 0.2);
}

.stats_amount {
	display: flex;
	gap: 8px;
	margin-right: 3px;
}

.numb {
	width: 18px;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(255, 255, 255, 0.4);
	cursor: pointer;
}

.numb::before {
	content: "";
	position: absolute;
	width: 24px;
	height: 24px;
	cursor: pointer;
}
.numb:hover {
	color: #ffffff;
}

/* .active_hower {
  color: #ffffff;
} */

.active_hower::before {
	content: "";
	position: absolute;
	width: 24px;
	height: 24px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 50%;
} 

.active {
	color: #ffffff;
}

.active::before {
	content: "";
	position: absolute;
	width: 24px;
	height: 24px;
	border: 1px solid #ffffff;
	border-radius: 50%;
	color: #ffffff;
}
</style>
