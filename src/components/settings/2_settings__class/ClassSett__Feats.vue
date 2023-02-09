<template>
	<section class="grid-col int-700">
		<my-selection-card
			:active_boll_link="shown_Btn == 'stats_2'"
			@click="shownFeatsBtn('stats_2')"
		>
			<span>+2</span>
		</my-selection-card>
		<my-selection-card
			:active_boll_link="shown_Btn == 'stats_1_1'"
			@click="shownFeatsBtn('stats_1_1')"
		>
			<span>+1 +1</span>
		</my-selection-card>
		<my-selection-card
			:active_boll_link="shown_Btn == 'feats'"
			@click="shownFeatsBtn('feats')"
		>
			<span>{{t("feat")}}</span>
		</my-selection-card>
	</section>

	<!-- <transition name="mode-fade" mode="out-in"> -->
	<!-- <section class="scroll"> -->
	<section class="grid-gap" v-if="shown_Stats">
		<my-card-text
			class="text-mrg"
			text="stats_base_details_class"
		></my-card-text>
		<my-selection-card
			v-for="list_el in stats_Arr.list"
			:key="list_el"
			:active_boll_link="stats_Arr.select_list.includes(list_el)"
			@click="getFeatsSelect(list_el, stats_Arr)"
		>
			<my-attribute
				:title="list_el.stats[0].name"
				:type="`${list_el.stats[0].name}_base`"
				plus
				:numb="list_el.stats[0].num"
				:save="stats_Saving_Arr"
			>
			</my-attribute>
			<my-card-text :text="`${list_el.stats[0].name}_details`"></my-card-text>
		</my-selection-card>
	</section>

	<section class="grid-gap" v-else>
		<Card__CusstomClass
			v-for="list_el in feats_Arr.list"
			:key="list_el"
			:custom="list_el"
			:active_boll_link="feats_Arr.select_list.includes(list_el)"
			@click="getFeatsSelect(list_el, feats_Arr)"
		/>
	</section>
	<!-- </section> -->
	<!-- </transition> -->
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";
import { useStatsStore } from "@/stores/modules/StatsStore";

import Card__CusstomClass from "@/components/settings/2_settings__class/Card__CusstomClass.vue";
export default {
	name: "ClassSett__Feats",
	components: {
		Card__CusstomClass,
	},
	props: {
		id_link: {
			type: String,
			default: null,
		},
	},

	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useFeatsStore, ["feats_Stats_2_Arr", "feats_Stats_1_1_Arr", "feats_Feats_Arr"]),
		...mapState(useStatsStore, ["stats_Keys", "stats_Saving_Arr"]),

		shown_Stats() {
			return this.shown_Btn == "stats_2" || this.shown_Btn == "stats_1_1";
		},

    stats_Arr() {
      const state_2_arr = this.feats_Stats_2_Arr.find(el => el.id_link == this.id_link)
      const state_1_1_arr = this.feats_Stats_1_1_Arr.find(el => el.id_link == this.id_link)
      return this.shown_Btn == "stats_2" ? state_2_arr : state_1_1_arr;
    },

		shown_Feats() {
			return this.shown_Btn == "feats";
		},

    feats_Arr() {
      console.log('feats_Arr:', this.feats_Feats_Arr.find(el => el.id_link == this.id_link))
      return this.feats_Feats_Arr.find(el => el.id_link == this.id_link);
    },

		shown_Btn() {
			const btn =
				this.MY._settings_class[this.MY.class.name]?.[this.id_link]?.id_btn;
			return btn ?? "stats_2";
		},

	},

	methods: {
		shownFeatsBtn(name) {
			this.getFeatsLink(name);
			this.MY._settings_class[this.MY.class.name][this.id_link].id_btn =
				name;
		},

		getFeatsLink(name) {
			if (!this.MY._settings_class[this.MY.class.name]) {
				this.MY._settings_class[this.MY.class.name] = {};
			}
			if (!this.MY._settings_class[this.MY.class.name][this.id_link]) {
				this.MY._settings_class[this.MY.class.name][this.id_link] = { id_btn: name };
			}
		},

		getFeatsSelect(list_el, obj) {
			const active = obj.select_list.includes(list_el);

			if (active) {
				return null;
			} else {
				let arr = obj.select_list.slice(0);
				arr.splice(0, 1);
				arr.push(list_el);
				this.getFeatsLink(this.shown_Btn);
				this.MY._settings_class[this.MY.class.name][this.id_link][this.shown_Btn] = arr;
			}
		},
	},
};
</script>

<style scoped>
.flex-col {
	width: 100%;
	display: flex;
	gap: 8px;
	/* margin: 0 0 26px 16px; */
}

.grid-col {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 8px;
	height: 50px;
	margin-bottom: 24px;
}

.grid-gap {
	display: grid;
	gap: 8px;
}

.text-mrg {
	margin-bottom: 24px;
}

.marg-bot {
	margin-bottom: 16px;
}

/* .skill_marg:not(:first-child) {
	margin-top: 16px;
} */

.mode-fade-enter-active,
.mode-fade-leave-active {
	transition: opacity 0.3s ease-in-out;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
	opacity: 0;
}

/* .scroll {
	overflow-y: scroll;
	max-height: 100%;
	scrollbar-width: none;
}

.scroll::-webkit-scrollbar {
	width: 0;
} */
</style>
