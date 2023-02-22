// import { ref, computed } from "vue";

import { defineStore, storeToRefs } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export const usePagesStore = defineStore({
	id: "PagesStore",
	state: () => ({
		main_page: {
			shown: {
				logo: false,
				lang: false,
				lvl: false,
			},
		},
		pages: {
			race_page: false,
			class_page: true,
		},
		// page_open: "race_page",
		page_setting_open: null,
		setting_open: null,
		shown_home: true,

		race_page: {
			shown: {
				ethnos: false,
        backstory: false,
				gender: false,
				skin_color: false,
				eyes_color: false,
				hair_color: false,
				age: false,
				height: false,
				weight: false,
				stats: false,
				skills: false,
				languages: false,
				spells: false,
			},

			shown_humman_lang: false,

			color_selected: {
				skin: null,
				hair: null,
				eyes: null,
			},

			height_kof: 0.5,
			weight_kof: 0.5,
			age_kof: 0.5,
		},

		class_page: {
			shown: {
				stats: false,
			},
      shown_feats: {

      }
		},
	}),

  getters: {
    page_Open() {
      if(this.pages.race_page) {
        return "race_page";
      } else if(this.pages.class_page) {
        return "class_page";
      }
    }
  },

	actions: {
		goPage(page_name) {
			for (const [key, value] of Object.entries(this.pages)) {
				value == true ? (this.pages[key] = false) : null;
			}
			this.pages[page_name] = true;
			if (this.page_setting_open !== "main_page") {
				this.showHome();
			}
		},

		showHome() {
			let page_setting = this.page_setting_open;
			let setting = this.setting_open;
			setting ? (this[page_setting].shown[setting] = false) : null;
			// this[this.page_setting_open].shown[this.setting_open] = false;
			this.shown_home = true;
			this.page_setting_open = null;
			this.setting_open = null;
		},

    toggleSettings(page, name) {
      if (this.setting_open) {
        this[this.page_setting_open].shown[this.setting_open] = false;
      }
      this[page].shown[name] = true;
      this.page_setting_open = page;
      this.setting_open = name;
      this.shown_home = false;
    },

		showSettings(page, name) {
			if (this.setting_open !== name) {
        this.toggleSettings(page, name);
			} else {
				this.showHome();
			}
		},

		showSettings__Main(name) {
			this.showSettings("main_page", name);
		},

		// ANCHOR //^ Race Page: Shown settings

		showSettings__Race(name) {
			const MYStore = useMYStore();
			const ethnos = name === "ethnos";
			const ethnos_common = MYStore.MY.ethnos.name === "common";
			let custom_ethnos = ethnos && ethnos_common;
			const str = name.split("_")[0];
			let color_length = MYStore.MY.race.race_settings.color[str]?.length === 0;

			if (custom_ethnos || color_length) {
				return null;
			} else {
				this.showSettings("race_page", name);
			}
		},

		showSettings__Class(name) {
			this.showSettings("class_page", name);
		},

		closeEthnos() {
			const MYStore = useMYStore();
			const ethnos_show = this.race_page.shown.ethnos;
			const ethnos_common = MYStore.MY.ethnos.name === "common";
			if (ethnos_show && ethnos_common) {
				this.showHome();
			}
		},

		closeColor(name) {
			const MYStore = useMYStore();
			const color_page = this.race_page.shown[`${name}_color`] === true;
			const color_length =
				MYStore.MY.race.race_settings.color[name].length === 0;
			if (color_page && color_length) {
				this.showHome();
			}
		},

		showRaceScroll(name) {
			this.race_page[name] = !this.race_page[name];
		},

		// ^ Class Page: Shown settings
		closeCustomSett() {
			const MYStore = useMYStore();

			const setting_open = this.setting_open;
			if (setting_open && setting_open.includes("__")) {
				let custom = MYStore.сustomm_Settings_Race_Arr;
        if (this.pages.class_page) {
          custom = MYStore.сustomm_Settings_Class_Arr;
        }
        
        const filter_full = custom?.find((el) => el.id_link == setting_open);
        if (filter_full) {
          this.toggleSettings(this.page_Open, filter_full.id_link);
          return;
        }
        
        const str_name_numb = setting_open.split("___").pop();
        const filter_name_i = custom?.find((el) => el.id_link.includes(str_name_numb));
        if (filter_name_i) {
          this.toggleSettings(this.page_Open, filter_name_i.id_link);
          return;
        }

        const str_name = str_name_numb.split("__")[0];
        const filter_name = custom?.find((el) => el.id_link.includes(str_name));
        if (filter_name) {
          this.toggleSettings(this.page_Open, filter_name.id_link);
          return;
        } else {
          this.showHome();
        }
			} else {
        return null;
        // this.showHome();
      }
		},
	},
});
