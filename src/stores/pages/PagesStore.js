// import { ref, computed } from "vue";

import { defineStore, storeToRefs } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";

export const usePagesStore = defineStore({
	id: 'PagesStore',
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
		page_open: null,
		setting_open: null,
		shown_home: true,

    race_page: {
      shown: {
        ethnos: false,
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
    },

    
	}),
	
  actions: {
		showHome() {
			this[this.page_open].shown[this.setting_open] = false;
			this.shown_home = true;
			this.page_open = null;
			this.setting_open = null;
		},

		showSettings(page, name) {
			if (this.setting_open !== name) {
				if (this.setting_open) {
					this[this.page_open].shown[this.setting_open] = false;
				}
				this[page].shown[name] = true;
				this.page_open = page;
				this.setting_open = name;
				this.shown_home = false;
			} else {
				this.showHome();
			}
		},

		showSettings__Main(name) {
			this.showSettings("main_page", name);
		},
    
    // ANCHOR //^ Race Page: Shown settings

    showSettings__Race(name){
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
      const color_length = MYStore.MY.race.race_settings.color[name].length === 0;
      if (color_page && color_length) {
        this.showHome();
      }
    },
  
    closePar(name) {
      const MYStore = useMYStore();
      const page_shown = this.race_page.shown[name] === true;
      const null_race_par = MYStore.MY.race.race_settings[`custom_${name}`] === undefined;
      const null_ethnos_par = MYStore.MY.ethnos[`custom_${name}`] === undefined;
      if (page_shown && null_race_par && null_ethnos_par) {
        this.showHome();
      }
    },
  
    showRaceScroll(name) {
      this.race_page[name] = !this.race_page[name]
    },

    // ^ Race Page: Shown settings

	},
});
