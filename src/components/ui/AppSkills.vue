<template> 
	<div class="column jbm-300" :class="{ passive: numb == 0}" >
		<div class="column_value">
			<section class="flex_row">
				<div class="icon">
					<svg class="icon_svg"
						:class="{
              save_svg: shown_Save,
              }"
						viewBox="0 0 18 18"
						xmlns="http://www.w3.org/2000/svg"
						v-html="atribute_icon[icon_Stats]"
					/>
				</div>
				<div class="item">
          {{ t_Title }}
        </div>
			</section>
			<div class="numb">{{ Prefix }}{{ summ_Numb }}</div>
		</div>
		<div class="visual">
			<div class="cube" v-for="n in cube_Numb" :key="n"/>
			<div class="cube-neg" v-for="n in cube_Negative" :key="n"/>
			<div class="cube-second" :class="{ opasity: numb == 0}" v-for="n in cube_Second" :key="n"/>
		</div>
	</div>
</template>

<script>
import atribute_icon from "@/assets/catalog/icon/atribute_icon";
import { mapState } from "pinia";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

export default {
	name: "AppSkills",
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
		numb: {
			type: Number,
			default: null,
		},
		second_numb: {
			type: Number,
			default: null,
		},
	},

	computed: {
		// STORES
    ...mapState(useSkillsStore, ["skills", "skills_passive"]),
    ...mapState(useStatsStore, ["stats_Save_Page_Arr"]),

    shown_Save() {
      return this.stats_Save_Page_Arr.includes(this.icon_Stats)
    },

		t_Title() {
			return this.t(this.title);
		},

    Prefix() {
			return this.summ_Numb > 0 ? "+" : "";
		},

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

.save_svg {
	fill: white;
  /* stroke-opacity: 1; */
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
  opacity: 0.2;
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
</style>
