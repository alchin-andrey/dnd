<template>
	<section class="marg">
		<ClassParam__Stats />
	</section>

	<section class="mr-b-24">
		<div class="grid-col int-700">
			<AppCardWrapp
				v-for="btn in stats_btn"
				:active_card="MY.custom_stats == btn.custom_stats"
				@click="getStatsStatus(btn.custom_stats)"
			class="h-50"
			>
				<div class="flex-row-sb-c h-100">
					<span>{{ T(btn.name) }}</span>
					<span class="white-02">{{ stats_Sum(btn.custom_stats) }}</span>
				</div>
			</AppCardWrapp>
		</div>
		<div class="int-400 rare-text mr-t-8 mr-l-16" v-if="MY.custom_stats">{{ T("need_to_clarify") }}</div>
	</section>

	<!-- <section> -->
		<template v-if="!MY.custom_stats">
			<BaseStatsCard__Main v-for="name in stats_Keys" :key="name" :stats_name="name" />
		</template>
		<template v-else>
			<BaseStatsCard__Custom v-for="name in stats_Keys" :key="name" :stats_name="name" v-model="MY.custom_stats_base_save[name]" />
		</template>
	<!-- </section> -->
	
	<transition name="fade">
		<AppBtm
			class="mr-t-24"
			v-if="show_Default_Btn" 
			icon="return"
			@click="defaultStats()"
			name="refresh_to_recommended" 
		/>
	</transition>
</template>

<script>
import BaseStatsCard__Main from "@/components/settings/2_settings__class/BaseStatsCard__Main.vue";
import BaseStatsCard__Custom from "@/components/settings/2_settings__class/BaseStatsCard__Custom.vue";
import ClassParam__Stats from "@/components/parameters/2_param__class/ClassParam__Stats.vue";

import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useStatsStore } from "@/stores/modules/StatsStore";
export default {
	name: "ClassSett__BaseStats",
	components: {
		BaseStatsCard__Main,
		BaseStatsCard__Custom,
		ClassParam__Stats,
	},
	data() {
		return {
			stats_btn: [
				{ name: "standard", numb: 72, custom_stats: false, },
				{ name: "stats_custom", numb: 72, custom_stats: true, },
			],
		};
	},
	computed: {
		// STORES
		...mapState(useMYStore, ["MY", "MY_Class"]),
		// GETTERS
		...mapState(useStatsStore, ["stats_Keys", "stats_Base_Arr", "stats_base_numb"]),

		show_Default_Btn() {
			if(this.MY.custom_stats) {
				const def_arr = this.MY_Class.stats_base;
				for (const kay in def_arr) {
					const index = def_arr.indexOf(def_arr[kay]);
					const numb = this.stats_base_numb[index];
					if (this.MY.custom_stats_base_save[def_arr[kay]] !== numb) return true;
				}
				return false;
			} else {
				return this.MY.stats_base_save[this.MY_Class.name];
			}
		},

		stats_Custom_Sum() {
			const numb_arr = Object.values(this.MY.custom_stats_base_save);
			if(numb_arr.length == 0) return 72;
			let sum = numb_arr.reduce((a, b) => a + b, 0);
			return sum;
		},

		stats_Sum: (stor) => (bool) =>  {
			if(bool) return stor.stats_Custom_Sum
			else return 72
		}
	},

	methods: {
		defaultStats() {
			if(this.MY.custom_stats) {
				this.getCustomStatsObj(this.MY_Class.stats_base);
			} else {
				this.MY.stats_base_save[this.MY_Class.name] = null;
			}
		},

		getStatsStatus(bool) {
			this.MY.custom_stats = bool;
			if(this.MY.custom_stats && Object.keys(this.MY.custom_stats_base_save).length == 0) {
				this.getCustomStatsObj(this.stats_Base_Arr);
			}
		},

		getCustomStatsObj(arr) {
			for (let i in arr) {
				let numb = this.stats_base_numb[i];
				this.MY.custom_stats_base_save[arr[i]] = numb;
			}
		}
	},
};
</script>

<style scoped>
.marg {
	margin: 0 0 24px 16px;
}

.grid-col {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
