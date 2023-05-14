<template> 
	<AppTooltip
		class="pos-rel"
		text="hint_over_limit"
		:shown="overflow_Numb"
		warn
	>
	<div class="column jbm-300" 
	:class="{ 
		passive: numb == 0 && passive_Old,
		'rare-text': overflow_Numb,
		}" 
	>
		<div class="column_value">
			<section class="flex_row">
				<div class="icon">
					<svg class="icon_svg"
						:class="{
							max_icon_svg: overflow_Numb,
              save_svg: shown_Save,
							max_save_svg: shown_Save && overflow_Numb,
              }"
						viewBox="0 0 18 18"
						xmlns="http://www.w3.org/2000/svg"
						v-html="stats_icon[icon_Stats]"
					></svg>
				</div>
				<div class="item">
          {{ t_Title }}
        </div>
			</section>
			<div class="numb">{{ Prefix }}{{ summ_Numb }}</div>
		</div>
		<div class="visual">
			<div class="cube-neg" v-for="n in cube_Negative" :key="n"/>

			<div 
			class="cube"  	
			v-for="n in cube_Numb" :key="n"
			:class="{cube_max: overflow_Cube(n)}" 
			/>

			<div class="cube-second" 
      :class="{ 
        passive: passive_Old,
        opasity: numb == 0}" 
      v-for="n in cube_Second" :key="n"
			/>
		</div>
	</div>
</AppTooltip>
</template>

<script>
import stats_icon from "@/assets/catalog/icon/stats_icon";
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useOverflowStore } from "@/stores/modules/OverflowStore";

export default {
	name: "AppSkills",
	data() {
		return {
			stats_icon: stats_icon,
		};
	},
	props: {
		title: {
			type: String,
			default: null,
		},
		numb: {
			type: Number,
			default: null,
		},
		second_numb: {
			type: Number,
			default: null,
		},

		setting_filter: {
			type: String,
			default: null,
		},

		active_card: {
			type: Boolean,
			default: false,
		},
    select_list: {
			type: Array,
			default: [],
		},
		param: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		// STORES
    ...mapState(useMYStore, ["Mastery"]),
    ...mapState(usePagesStore, ["page_Open"]),
    ...mapState(useSkillsStore, ["skills", "skills_passive"]),
    ...mapState(useStatsStore, ["stats_Save_Page_Arr"]),
		...mapState(useOverflowStore, [
			"overflow_Skills_Numb",
		]),

    passive_Old() {
      return this.page_Open !== "alignment_page";
    },

    shown_Save() {
      return this.stats_Save_Page_Arr.includes(this.icon_Stats)
    },

		t_Title() {
			return this.t(this.title);
		},

    Prefix() {
			return this.summ_Numb > 0 ? "+" : "";
		},

		// main_Numb() {
		// 	if(this.overflow_Numb && this.numb == this.Mastery * 2) {
    //     return this.numb / 2;
		// 	} else {
		// 		return this.numb;
		// 	}
		// },

		summ_Numb() {
			return this.numb + this.second_numb;
		},

		icon_Stats() {
      if(this.title.indexOf('passive') !== -1) {
        return this.skills_passive.find(el => el.name == this.title).mod;
      } else {
        return this.skills.find(el => el.name == this.title).mod;
      }
		},

		cube_Numb() {
      if(this.second_numb < 0) {
        return this.summ_Numb > 0 ? this.summ_Numb : null;
      } else {
        return this.numb > 0 ? this.numb : null;
      }
		},

		cube_Negative() {
			return this.summ_Numb < 0 ? Math.abs(this.summ_Numb) : null;
		},

    cube_Second() {
      return this.second_numb > 0 ? this.second_numb : null;
		},

		only_Mastery() {
			return this.setting_filter == "only_mastery";
		},

		overflow_Numb() {
			if (this.param || this.only_Mastery) {
				return false;
			} else {
				return this.overflow_Skills_Numb(this.title, this.active_card, this.select_list);
			}
		},

		overflow_Cube: (stor) => (i) => {
			if (stor.overflow_Numb) {
				if(stor.cube_Numb == stor.Mastery) {
					return true;
				} else {
					return stor.Mastery < i;
				}
			}
		},
	},
};
</script>

<style scoped>

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
	/* stroke-opacity: 0.2; */
}

.max_icon_svg {
	stroke: #ffc93d;
}

.save_svg {
	fill: white;
  /* stroke-opacity: 1; */
}

.max_save_svg {
	fill: #ffc93d;
	stroke: #ffc93d;
}

.item {
  display: flex;
  align-items: center;
}

.active {
	color: #ffffff;
}

.passive {
  opacity: 0.2;
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

.cube-second {
	width: 8px;
	height: 8px;
  background: #ffffff;
	/* background: rgba(255, 255, 255, 0.2); */
	border-radius: 2px;
  /* opacity: 0.2; */
}
.opasity{
  opacity: 1;
}

.cube-neg {
	width: 8px;
	height: 8px;
	border-radius: 2px;
	border: 1px solid #ff0000;
}

.cube_max {
	background: #ffc93d;
}
</style>
