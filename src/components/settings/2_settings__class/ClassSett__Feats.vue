<template>
	<section class="flex-col gap-34">
    <section class="grid-col int-700">
      <my-selection-card
        v-for="btn in main_buttons"
        :active_boll_link="shown_Btn == btn.name"
        @click="shownFeatsBtn(btn.name)"
      >
        <span>{{ t(btn.text) }}</span>
      </my-selection-card>
    </section>
    <AppSrdDisclaimer :text="t_feats_Details" :disclaimer="show_Disclaimer"/>
    <section class="flex-col gap-8">
      <AppCusstomCard
        v-for="list_el in feat_Arr.list"
        :key="list_el"
        :setting_name="feat_Arr.name"
        :select_list="feat_Arr.select_list"
        :custom="list_el"
        :active_boll_link="getActive(list_el)"
        :pass_boll_link="getPass(list_el)"
        @click="getFeatsSelect(list_el)"
      />
    </section>  
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { useMainStore } from "@/stores/general/MainStore";
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
		id_link: {
			type: String,
			default: null,
		},
	},

	computed: {
    ...mapState(useMainStore, ["srd"]),
		...mapState(useMYStore, ["MY", "MY_Class"]),
		...mapState(useFeatsStore, [
			"feats_Stats_2_Arr",
			"feats_Stats_1_1_Arr",
			"feats_Feats_Arr",
      "feats_Condition_Pass",
		]),

    show_Disclaimer() {
      return this.shown_Btn == "feats";
    },

    t_feats_Details() {
      if(this.shown_Btn == 'feats') {
        return null;
      } else {
        return this.T("stats_base_details_class")
      }
    },

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
				this.MY._settings_class[this.MY_Class.name]?.[this.id_link]?.id_btn;
			return btn ?? "stats_2";
		},
	},

	methods: {
    getOverlap(arr, list_el) {
      return arr.some(item => {
        if (item.name) {
          return item.name == list_el.name
        } else {
          return item.name_set == list_el.name_set
        }
      });
    },

    getActive(list_el) {
      return this.getOverlap(this.feat_Arr.select_list, list_el);
    },

    getPass(list_el) {
      return this.getOverlap(this.feats_Condition_Pass, list_el);
    },

		shownFeatsBtn(name) {
			this.getFeatsLink({});
			this.MY._settings_class[this.MY_Class.name][this.id_link].id_btn = name;
		},

		getFeatsLink(obj) {
			if (!this.MY._settings_class[this.MY_Class.name]) {
				this.MY._settings_class[this.MY_Class.name] = {};
			}
			if (!this.MY._settings_class[this.MY_Class.name][this.id_link]) {
				this.MY._settings_class[this.MY_Class.name][this.id_link] = obj;
			}
			const sett = this.MY._settings_class;
			this.MY._settings_class_old = JSON.parse(JSON.stringify(sett));
		},

		getFeatsSelect(list_el) {
			const active = this.getActive(list_el);
			const pass = this.getPass(list_el);

      if (active || pass) {
        return null;
      } else {
        let arr = this.feat_Arr.select_list.slice(0);
        arr.splice(0, 1);
        arr.push(list_el);
        this.getFeatsLink({ id_btn: this.shown_Btn });
        this.MY._settings_class[this.MY_Class.name][this.id_link][this.shown_Btn] = arr;
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
}

.grid-gap {
	display: grid;
}

.text-mrg {
	margin-bottom: 24px;
}

.marg-bot {
	margin-bottom: 16px;
}

.pd-rl-14 {
  padding: 0 14px;
}
</style>
