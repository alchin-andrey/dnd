// import { ref, computed } from "vue";
import { defineStore } from "pinia";
// import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
import { usePagesStore } from "@/stores/user/PagesStore";
import { useDicStore } from "@/stores/general/DicStore";

export const useFormStore = defineStore({
	id: "FormStore",
	state: () => ({
    form_kof: {
      height: 0.5,
      weight: 0.5,
      age: 0.5,
    },
	}),
  persist: true,
	getters: {

    // ...mapState(useMYStore, ["MY", "MY_Race"]),
    // ...mapState(usePagesStore, ["race_page"]),

    MY_Height() {
      const MYStore = useMYStore();
      if(MYStore.MY.height) return MYStore.MY.height;
      else return this.Get_Height;
    },

    MY_Weight() {
      const MYStore = useMYStore();
      if(MYStore.MY.weight) return MYStore.MY.weight;
      else return this.Get_Weight;
    },

    MY_Age() {
      const MYStore = useMYStore();
      if(MYStore.MY.age) return MYStore.MY.age;
      else return this.Get_Age;
    },

    Char_Hight_Back() {
      const MYStore = useMYStore();
      const PagesStore = usePagesStore();
			let max_height = MYStore.MY_Race.race_settings.height.max;
			let min_height = MYStore.MY_Race.race_settings.height.min;
			let mein_height = (min_height + max_height) / 2;
			let kof = 0;
			if (mein_height == 105) {
				kof = 4;
			} else if (mein_height == 135) {
				kof = 3.7;
			} else if (mein_height == 165) {
				kof = 3.4;
			} else {
				kof = 3.1;
			}
			if (PagesStore.race_page.shown.eyes_color || PagesStore.race_page.shown.hair_color) {
				return `calc((100% / 210 * ${mein_height})*${kof})`;
			} else {
				return `100%`;
			}
		},

		Get_Height() {
      const MYStore = useMYStore();
			let min = MYStore.MY_Race.race_settings.height.min;
			let max = MYStore.MY_Race.race_settings.height.max;
			let kof = this.form_kof.height;
			return min + Math.round((max - min) * kof);
		},

		Get_Weight() {
      const MYStore = useMYStore();
			let min = MYStore.MY_Race.race_settings.weight.min;
			let max = MYStore.MY_Race.race_settings.weight.max;
			let kof = this.form_kof.weight;
			return min + Math.round((max - min) * kof);
		},

		Get_Age() {
      const MYStore = useMYStore();
			let min = MYStore.MY_Race.race_settings.age.min;
			let max = MYStore.MY_Race.race_settings.age.max;
			let mature = MYStore.MY_Race.race_settings.age.mature;
      const AGE = MYStore.MY.age;
			if (AGE) {
				if (AGE < min) {
					return min;
				} else if (AGE > max) {
					return max;
				} else {
					return AGE;
				}
			} else {
				return mature;
			}
		},

    Age_Note() {
      const MYStore = useMYStore();
      const { t } = useDicStore();
			let age = MYStore.MY_Race.race_settings.age;
			let baby = age.min;
			let young = age.young;
			let mature = age.mature;
			let old = age.old;
			let oldest = age.max;
			const MY_AGE = MYStore.MY.age;
			if (baby <= MY_AGE && MY_AGE < young) {
				return t("baby");
			} else if (young <= MY_AGE && MY_AGE < mature) {
				return t("young");
			} else if (mature <= MY_AGE && MY_AGE < old) {
				return t("mature");
			} else if (old <= MY_AGE && MY_AGE < oldest) {
				return t("old");
			} else {
				return t("oldest");
			}
		},

		Weight_Note() {
      const { t } = useDicStore();
			let kof = this.form_kof.weight;
			if (kof === 0) {
				return t("skinny");
			} else if (kof === 1) {
				return t("fat");
			} else {
				return null;
			}
		},

		Hight_Note() {
      const MYStore = useMYStore();
      const { t } = useDicStore();
			return t(MYStore.MY_Race.race_settings.size);
		},

	},
  actions: {

  },
});
