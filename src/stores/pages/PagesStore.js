// import { ref, computed } from "vue";

import { defineStore } from "pinia";
import { useMYStore } from "@/stores/MY/MYStore";


export const usePagesStore = defineStore({
	id: 'PagesStore',
  setup() {
    const  { MY } = useMYStore();
    return { MY }
  },
	state: () => ({
		main_page: {
			shown: {
				logo: false,
				lang: false,
				lvl: false,
			},
		},
		pages: {
			race_page: true,
			clas_page: false,
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
      },
  
      shown_humman_lang: false,
      
      color_selected: {
        skin: null,
        hair: null,
        eyes: null,
      },
  
      extra: {
        stats: null,
        skills: null,
        languages: null,
      },
  
      height_kof: 0.5,
      weight_kof: 0.5,
      age_kof: 0.5,
    }
	}),
	
  actions: {
		showHome() {
			this[this.page_open].shown[this.setting_open] = false;
			this.shown_home = true;
			this.page_open = null;
			this.setting_open = null;
		},

		showSettings(page, name) {
      console.log('showSettings:', page, name);
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
    
    //! Race_Page
    showSettings__Race(name){
      // const  { MY } = useMYStore();
      const ethnos = name === "ethnos";
      const ethnos_common = this.MY.ethnos.name === "common";
      let custom_ethnos = ethnos && ethnos_common;
      
      const str = name.split("_")[0];
      let color_length = this.MY.race.settings.color[str]?.length === 0;
      
      if (custom_ethnos || color_length) {
        return null;
      } else {
        this.showSettings("race_page", name);
      }
    },

    closeEthnos() {
      const  { MY } = useMYStore();
      const ethnos_show = this.race_page.shown.ethnos;
      const ethnos_common = MY.ethnos.name === "common";
      if (ethnos_show && ethnos_common) {
        this.showHome();
      }
    },
  
    closeColor(name) {
      const  { MY } = useMYStore();
      const color_page = this.race_page.shown[`${name}_color`] === true;
      const color_length = MY.race.settings.color[name].length === 0;
      if (color_page && color_length) {
        this.showHome();
      }
    },
  
    closePar(name) {
      const  { MY } = useMYStore();
      const page_shown = this.race_page.shown[name] === true;
      const null_race_par = MY.race.settings[`custom_${name}`] === undefined;
      const null_ethnos_par = MY.ethnos[`custom_${name}`] === undefined;
      if (page_shown && null_race_par && null_ethnos_par) {
        this.showHome();
      }
    },
  
    showRaceScroll(name) {
      this.race_page[name] = !this.race_page[name]
    },

	},
});
