<template>
	<section class="grid-col int-700">
    <my-selection-card
    v-for="btn in main_buttons"
			:active_boll_link="shown_Btn == btn.name"
			@click="shownFeatsBtn(btn.name)"
		>
			<span>{{t(btn.text)}}</span>
		</my-selection-card>
	</section>

	<section class="grid-gap">
    <my-card-text
      v-if="shown_Btn !== 'feats'"
			class="text-mrg"
			text="stats_base_details_class"
		/>
		<Card__CusstomClass
			v-for="list_el in feat_Arr.list"
			:key="list_el"
			:custom="list_el"
			:active_boll_link="feat_Arr.select_list.includes(list_el)"
			@click="getFeatsSelect(list_el)"
		/>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useFeatsStore } from "@/stores/modules/FeatsStore";

import Card__CusstomClass from "@/components/settings/2_settings__class/Card__CusstomClass.vue";
export default {
	name: "ClassSett__Feats",
  components: {
		Card__CusstomClass,
	},
  data() {
		return {
			main_buttons: [
        {name: "stats_2", text: "+2" },
        {name: "stats_1_1", text: "+1 +1"},
        {name: "feats", text: "feat"}
      ]
		};
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

    feat_Arr() {
      if(this.shown_Btn == "stats_2") {
        return this.feats_Stats_2_Arr.find(el => el.id_link == this.id_link);
      } else if (this.shown_Btn == "stats_1_1") {
        return this.feats_Stats_1_1_Arr.find(el => el.id_link == this.id_link);
      } else if (this.shown_Btn == "feats") {
        return this.feats_Feats_Arr.find(el => el.id_link == this.id_link);
      }
    },

		shown_Btn() {
			const btn =
				this.MY._settings_class[this.MY.class.name]?.[this.id_link]?.id_btn;
			return btn ?? "stats_2";
		},

	},

	methods: {
		shownFeatsBtn(name) {
			this.getFeatsLink({});
			this.MY._settings_class[this.MY.class.name][this.id_link].id_btn =
				name;
		},

		getFeatsLink(obj) {
			if (!this.MY._settings_class[this.MY.class.name]) {
				this.MY._settings_class[this.MY.class.name] = {};
			}
			if (!this.MY._settings_class[this.MY.class.name][this.id_link]) {
				this.MY._settings_class[this.MY.class.name][this.id_link] = obj;
			}
      let sett = this.MY._settings_class;
      this.MY._settings_class_old = JSON.parse(JSON.stringify(sett));
    },

		getFeatsSelect(list_el) {
			const active = this.feat_Arr.select_list.includes(list_el);

			if (active) {
				return null;
			} else {
				let arr = this.feat_Arr.select_list.slice(0);
				arr.splice(0, 1);
				arr.push(list_el);
				this.getFeatsLink({ id_btn: this.shown_Btn });
				this.MY._settings_class[this.MY.class.name][this.id_link][this.shown_Btn] = arr;
			}
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
