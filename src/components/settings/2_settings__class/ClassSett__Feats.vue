<template>
	<section class="grid-col int-700">
		<my-selection-card
			v-for="btn in main_buttons"
			:active_boll_link="shown_Btn == btn.name"
			@click="shownFeatsBtn(btn.name)"
		>
			<span>{{ t(btn.text) }}</span>
		</my-selection-card>
	</section>

	<section class="grid-gap">
		<my-card-text
			v-if="shown_Btn !== 'feats'"
			class="text-mrg"
			text="stats_base_details_class"
		/>
		<AppCusstomCard
			v-for="list_el in feat_Arr.list"
			:key="list_el"
      :setting_name="feat_Arr.name"
      :select_list="feat_Arr.select_list"
			:custom="list_el"
			:active_boll_link="feat_Arr.select_list.includes(list_el)"
			@click="getFeatsSelect(list_el)"
			@clickOneMore="getFeatsSelect"
		/>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";

export default {
	name: "ClassSett__Feats",
	data() {
		return {
			main_buttons: [
				{ name: "stats_2", text: "+2" },
				{ name: "stats_1_1", text: "+1 +1" },
				{ name: "feats", text: "feat" },
			],
		};
	},
	props: {
		// modelValue: {
		// 	type: String,
		// 	default: null,
		// },
		id_link: {
			type: String,
			default: null,
		},
	},

	computed: {
		...mapState(useMYStore, ["MY"]),
		...mapState(useFeatsStore, [
			"feats_Stats_2_Arr",
			"feats_Stats_1_1_Arr",
			"feats_Feats_Arr",
		]),

		feat_Arr() {
			if (this.shown_Btn == "stats_2") {
				return this.feats_Stats_2_Arr.find((el) => el.id_link == this.id_link);
			} else if (this.shown_Btn == "stats_1_1") {
				return this.feats_Stats_1_1_Arr.find(
					(el) => el.id_link == this.id_link
				);
			} else if (this.shown_Btn == "feats") {
				return this.feats_Feats_Arr.find((el) => el.id_link == this.id_link);
			}
		},

		shown_Btn() {
			const btn =
				this.MY._settings_class[this.MY.class_name]?.[this.id_link]?.id_btn;
			return btn ?? "stats_2";
		},
	},

	methods: {
		shownFeatsBtn(name) {
			this.getFeatsLink({});
			this.MY._settings_class[this.MY.class_name][this.id_link].id_btn = name;
		},

		getFeatsLink(obj) {
			if (!this.MY._settings_class[this.MY.class_name]) {
				this.MY._settings_class[this.MY.class_name] = {};
			}
			if (!this.MY._settings_class[this.MY.class_name][this.id_link]) {
				this.MY._settings_class[this.MY.class_name][this.id_link] = obj;
			}
			const sett = this.MY._settings_class;
			this.MY._settings_class_old = JSON.parse(JSON.stringify(sett));
		},

		getFeatsSelect(list_el) {
			const active = this.feat_Arr.select_list.includes(list_el);
			let arr = this.feat_Arr.select_list.slice(0);
			if (!active) {
				arr.splice(0, 1);
				arr.push(list_el);
			}
			this.getFeatsLink({ id_btn: this.shown_Btn });
			this.MY._settings_class[this.MY.class_name][this.id_link][
				this.shown_Btn
			] = arr;
		},
	},
};
</script>

<style scoped>
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
</style>
