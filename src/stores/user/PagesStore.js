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
				subclass: false,
				// favor: true,
				stats: false,
			},
		},
	}),

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

		showSettings(page, name) {
			if (this.setting_open !== name) {
				if (this.setting_open) {
					this[this.page_setting_open].shown[this.setting_open] = false;
				}
				this[page].shown[name] = true;
				this.page_setting_open = page;
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
      console.log('name:', name)
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

		closePar(name) {
			const MYStore = useMYStore();
			const page_shown = this.race_page.shown[name] === true;
			const null_race_par =
				MYStore.MY.race.race_settings[`custom_${name}`] === undefined;
			const null_ethnos_par = MYStore.MY.ethnos[`custom_${name}`] === undefined;
			if (page_shown && null_race_par && null_ethnos_par) {
				this.showHome();
			}
		},

		showRaceScroll(name) {
			this.race_page[name] = !this.race_page[name];
		},

		// ^ Class Page: Shown settings

		closeSubclass() {
			const MYStore = useMYStore();
			const subclass_show = this.class_page.shown.subclass;
			const subclass = MYStore.MY_Subclass;
			if (subclass_show && !subclass) {
				this.showHome();
			}
		},

		closeCustomClass() {
			const MYStore = useMYStore();
			const setting_open = this.setting_open;
			if (setting_open) {
				let str = setting_open.split("__");
				const custom = MYStore.сustomm_Settings_100[str[1]];
        let filter = custom?.find((el) => el.id == setting_open);
        const str_0 = `${str[0]}__${str[1]}__0`;
        let filter_0 = custom?.find((el) => el.id == str_0);
        if(filter || str[0] !== "custom") {
          return null;
        } else if(filter_0) {
          this.setting_open = str_0;
          this.class_page.shown[setting_open] = false;
          this.class_page.shown[str_0] = true;
        } else {
          this.showHome();
        }
			} else {
        this.showHome();
      }
		},

		// createVarClass(obj) {
		//   for (let key in obj) {
		//     const set = `${obj[key][0].type}_${key}`;

		//     for (let i = 0; i < obj[key].length; i += 1) {
		//     // for (let i in obj[key]) {
		//       const set_numb = `${set}_${i}`;

		//       if (!this.class_page.shown[set_numb]) {
		//         this.class_page.shown[set_numb] = false;
		//       }
		//     }
		//   }
		// },
	},
});
