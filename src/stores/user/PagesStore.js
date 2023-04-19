
import { defineStore, storeToRefs } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export const usePagesStore = defineStore({
	id: "PagesStore",
	state: () => ({
    site_settings: {
      save: {},
      welcome: true,
      logo_anim: false,
      print_dialog: false,
      old_page: null,
      name_user: false,
    },

    links: {
      stats_link: {},
    },

		main_page: {
			shown: {
				logo: false,
				lang: false,
				lvl: false,
			},

      level_sett: {
        min: 1,
        max: 6,
      }
		},

		pages: {
      race_page: true,
			class_page: false,
      alignment_page: false,
      master_page: false,
		},

		page_setting_open: null,
		setting_open: null,
		shown_home: true,

		race_page: {
			shown: {},
		},

		class_page: {
			shown: {},
		},

		alignment_page: {
			shown: {},
		},

    master_page: {}
	}),

  persist: {
    paths: ['site_settings', 'pages'],
  },

  getters: {
    page_Open() {
      const key = Object.keys(this.pages);
      let name = "race_page";
      key.forEach(el => this.pages[el] ? name = el : null);
      return name;
    },

    btn_Page() {
      const OLD = this.site_settings.old_page;
      if(OLD == "race_page") return 1;
      if(this.pages.race_page || OLD == "class_page") return 2;
      if(this.pages.class_page || OLD == "alignment_page") return 3;
      if(this.pages.alignment_page) return 4;
    },

    btn_Numb() {
      if(this.btn_Page == 1) return '01';
      if(this.btn_Page == 2) return '02';
      if(this.btn_Page == 3) return '03';
      if(this.btn_Page == 4) return null;
    },

    btn_Name() {
      if(this.btn_Page == 1) return 'race';
      if(this.btn_Page == 2) return 'class';
      if(this.btn_Page == 3) return 'alignment';
      if(this.btn_Page == 4) return 'download_charsheet';
    }
  },

	actions: {

    btnGo() {
      if(this.site_settings.old_page) {
        this.goOldPage();
      } else {
        if(this.btn_Page == 1) {
          this.goPage('race_page');
        } else if(this.btn_Page == 2) {
          this.goPage('class_page');
        } else if(this.btn_Page == 3) {
          this.goPage('alignment_page');
        } else if(this.btn_Page == 4) {
          this.site_settings.print_dialog = true;
        }
      }
    },

		goOldPage() {
      this.goPage(this.site_settings.old_page);
      this.site_settings.old_page = null;
		},

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
      if(this.site_settings.old_page) {
        this.goOldPage();
      } else {
        if(name == 'logo') this.site_settings.logo_anim = false;
        this.showSettings("main_page", name);
      }
		},

		// ANCHOR //^ Race Page: Shown settings

		showSettings__Race(name) {
			const MYStore = useMYStore();
			const ethnos = name === "ethnos";
			const ethnos_common = MYStore.MY_Ethnos.name === "common";
			let custom_ethnos = ethnos && ethnos_common;
			const str = name.split("_")[0];
			let color_length = MYStore.MY_Race.race_settings.color[str]?.length === 0;

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
			const ethnos_common = MYStore.MY_Ethnos.name === "common";
			if (ethnos_show && ethnos_common) {
				this.showHome();
			}
		},

		closeColor(name) {
			const MYStore = useMYStore();
			const color_page = this.race_page.shown[`${name}_color`] === true;
			const color_length =
				MYStore.MY_Race.race_settings.color[name].length === 0;
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
          custom = MYStore.settings_Class_Arr;
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
        const filter_name = custom?.find((el) => el.id_link.includes(`${str_name}__0`));
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


    showSettings__Alignment(name) {
			this.showSettings("alignment_page", name);
		},
	},
});
