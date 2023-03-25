<template>
	<div class="wrap-cell jbm-500-22">
		<section class="title-head">
			<div class="icon">
				<svg
					class="main_svg"
					:class="{ save_svg: save_Icon }"
					viewBox="0 0 18 18"
					xmlns="http://www.w3.org/2000/svg"
					v-html="stats_icon[icon_Svg]"
				/>
			</div>
			<div class="cell-item">{{ t_Title }}</div>
		</section>
		<div class="int-600-72 numb" :class="{'mr-28': list_3}">{{ numb_Value }}</div>
			<div class="visual" v-if="!list_3">
				<section class="text-item">
					<div>{{ t_Base }}</div>
					<div>{{ t_Save }}</div>
				</section>
				<section class="numb-item int-600-22">
					<div>{{ base_Numb }}</div>
					<div>{{ save_Numb }}</div>
				</section>
			</div>
	</div>
</template>

<script>
import stats_icon from "@/assets/catalog/icon/stats_icon";
import { mapState } from "pinia";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "AppPrintStats",
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
		icon: {
			type: String,
			default: null,
		},
    numb: {
			type: Number,
			default: null,
		},
    list_3: {
      type: Boolean,
			default: false,
    },
	},

	computed: {
		...mapState(useStatsStore, [
      "stats_Numb",
      "stats_Mod", 
      "stats_Save_Mod",
      "stats_Saving_Arr",
    
    ]),
		t_Title() {
			return this.t(this.title);
		},

    icon_Svg() {
      return this.icon ?? this.title;
    },

		t_Base() {
			return this.t("strength_base").slice(0, 3);
		},

		t_Save() {
			return this.t("saving").slice(0, 4);
		},

		save_Icon() {
			return this.stats_Saving_Arr.includes(this.icon_Svg);
		},

    numb_Value() {
      return this.numb ?? this.mod_Numb
    },

		mod_Numb() {
			const mod = this.stats_Mod(this.icon_Svg);
			return mod > 0 ? `+${mod}` : mod;
		},

		save_Numb() {
			const save = this.stats_Save_Mod(this.icon_Svg);
			return save > 0 ? `+${save}` : save;
		},

    base_Numb() {
      return this.stats_Numb(this.icon_Svg);
    },
	},
};
</script>

<style scoped>
.wrap-cell {
	height: 100%;
	padding: 4px;
  display: flex;
  flex-direction: column;
}

.title-head {
  height: 36px;
	display: flex;
  align-items: center;
}

.cell-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.icon {
	width: 36px;
	height: 36px;
	margin-right: 2px;
}

.main_svg {
	width: 36px;
	height: 36px;
	fill: none;
	stroke: black;
	/* stroke-width: 1px; */
}
.save_svg {
	fill: black;
}

.numb {
	text-align: center;
	margin-top: 82px;
}

.mr-28 {
  margin-top: 28px;
}

.visual {
	flex: 1 auto;
	display: flex;
  flex-direction: column;
	justify-content: flex-end;
  padding: 0 20px 14px 20px;
}

.text-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
	color: #828282;
}

.numb-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
