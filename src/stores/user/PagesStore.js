
import { defineStore, storeToRefs } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export const usePagesStore = defineStore({
	id: "PagesStore",
	state: () => ({
    new_user: true,
    screen_size: null,
    loading_pdf: false,
    site_settings: {
      save: {},
      visit_page: {
        class_page: false,
        alignment_page: false,
      },
      welcome: true,
      logo_anim: false,
      print_dialog: false,
    },

    errors: {
      file_photo: false,
    },

    links: {
      stats_link: {},
    },

    welcome_page: {
      hash: null,
    },

		main_page: {
			shown: {
				logo: false,
				lang: false,
				lvl: false,
			},

      level_sett: {
        min: 1,
        max: 10,
      }
		},

		pages: {
      race_page: true,
			class_page: false,
      alignment_page: false,
		},

		page_setting_open: null,
		setting_open: null,
		shown_home: true,

		shown_mob_param: false,
    mob_param_spell: false,

		race_page: {
			shown: {},
		},

		class_page: {
			shown: {},
		},

		alignment_page: {
			shown: {},
      ratio_photo: 362/480,
		},
	}),

  persist: {
    paths: [
      'new_user',
      'site_settings', 
      'pages', 
    ],
  },

  getters: {
    screen_Max: (stor) => stor.screen_size >= 1280,
    // screen_1280: (stor) => stor.screen_size <= 1280,
    // screen_955: (stor) => stor.screen_size <= 955,
    // screen_480: (stor) => stor.screen_size <= 480,
    screen_Menu_Num: (stor) => stor.screen_size >= 434 ? 434 : stor.screen_size,

    page_Open() {
      const key = Object.keys(this.pages);
      let name = "race_page";
      key.forEach(el => this.pages[el] ? name = el : null);
      return name;
    },

    btn_Page() {
      if(this.pages.race_page) return 1;
      if(this.pages.class_page) return 2;
      if(this.pages.alignment_page) return 3;
    },

    btn_Numb() {
      if(this.btn_Page == 1) return '02';
      if(this.btn_Page == 2) return '03';
      if(this.btn_Page == 3) return null;
    },

    btn_Numb_Page() {
      if(this.btn_Page == 1) return '01';
      if(this.btn_Page == 2) return '02';
      if(this.btn_Page == 3) return '03';
    },

    btn_Name() {
      if(this.btn_Page == 1) return 'class';
      if(this.btn_Page == 2) return 'alignment';
      if(this.btn_Page == 3) return 'download_charsheet';
    },

    btn_Name_Page() {
      if(this.btn_Page == 1) return 'race';
      if(this.btn_Page == 2) return 'class';
      if(this.btn_Page == 3) return 'alignment';
    }
  },

	actions: {
    // Видалення минулих змінних

    goToChar() {
      this.$router.push('/char-builder');
      this.new_user = false;
    },

    goHomePage(hash_name) {
      this.showHome();
      this.new_user = false;
      if(hash_name) this.welcome_page.hash = hash_name;
      this.$router.push('/');
    },

    zeroingDell() {
      if(this.site_settings.old_page) {
        this.goPage(this.site_settings.old_page);
        this.site_settings.old_page = null;
      }
      if(!this.site_settings.old_page && this.pages.master_page) {
        this.goPage('race_page');
      }
    },

    btnGo() {
      if(this.btn_Page == 1) {
        this.goPage('class_page');
      } else if(this.btn_Page == 2) {
        this.goPage('alignment_page');
      } else if(this.btn_Page == 3) {
        this.site_settings.print_dialog = true;
      }
    },

		goPage(page_name) {
			for (const [key, value] of Object.entries(this.pages)) {
				value == true ? (this.pages[key] = false) : null;
			}
			this.pages[page_name] = true;
      this.site_settings.visit_page[page_name] = true;
      this.new_user = false;
			if (this.page_setting_open !== "main_page") {
				this.showHome();
			}
		},

		showHome() {
			let page_setting = this.page_setting_open;
			let setting = this.setting_open;
			setting ? (this[page_setting].shown[setting] = false) : null;
      
      this.shown_mob_param = false;
      this.mob_param_spell = false;
			
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
        if(name == 'logo') this.site_settings.logo_anim = false;
        this.showSettings("main_page", name);
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

			// const setting_open = this.setting_open;
			if (this.setting_open && this.setting_open.includes("__")) {
				let custom = MYStore.сustomm_Settings_Race_Arr;
        if (this.pages.class_page) {
          custom = MYStore.settings_Class_Arr;
        }

        const filter_full = custom?.find((el) => el.id_link == this.setting_open);
        if (filter_full) {
          this.toggleSettings(this.page_Open, filter_full.id_link);
          return;
        }
        
        const str_name_numb = this.setting_open.split("___").pop();
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

    showMobParam() {
      this.shown_mob_param = !this.shown_mob_param;
		},

    showMobParamSpell() {
      this.mob_param_spell = !this.mob_param_spell;
		},

    showPhotoSet() {
      if (!this.setting_open) {
        this.showSettings__Alignment('photo');
      } else {
        this.showHome();
      }
    }
	},
});
