// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import MY from "@/assets/catalog/MY.js";
import { useStatsStore } from "@/stores/modules/StatsStore";
import { useSkillsStore } from "@/stores/modules/SkillsStore";
import { useLanguagesStore } from "@/stores/modules/LanguagesStore";
import { useSpellsStore } from "@/stores/modules/SpellsStore";
import { usePagesStore } from "@/stores/user/PagesStore";

export const useMYStore = defineStore({
	id: "MYStore",
	state: () => ({
		MY: MY,
	}),
	//SECTION - GETTERS
	getters: {
		Mastery(state) {
			return 1 + Math.ceil(state.MY.level / 4);
		},

		MY_Subclass() {
			const class_subclasses = this.subclass_Find_Lvl;
			const subclass_save = this.MY.subclass_save[this.MY.class.name];
			if (class_subclasses) {
				return subclass_save ? subclass_save : class_subclasses.list[0];
			}
			return null;
		},

		ethnos_Setting(state) {
			return (name) =>
				state.MY.ethnos.settings?.find((item) => item.type == name);
		},

		level_Filter() {
			const lvl = this.MY.level;
			// return (item) => item?.filter((el) => lvl >= el.level);
			return (item) => item?.filter((el) => (el.level ? lvl >= el.level : el));
		},

		level_Filter_Arr: (state) => (item) => {
			const lvl = state.MY.level;
			let arr = item?.filter((el) => (el.level ? lvl >= el.level : el));
			return arr ? arr : [];
		},

		// setting_Filter: (state) => (arr_obj, type, name) => {
		// 	const lvl = this.MY.level;
		// 	// const arr_lvl = arr_obj?.filter((item) => lvl >= item.level);
		// 	const arr_type = arr_obj?.filter(
		// 		(item) => lvl >= item.level && item.type == type
		// 	);

		// 	return arr_type?.find((item) => item.name == name);
		// },

		subclass_Find_Lvl() {
			const lvl = this.MY.level;
			return this.MY.class.settings?.find(
				(item) => item.name == "subclass" && lvl >= item.level
			);
		},

		// class_Setting_Find_Lvl(state) {
		// 	return (name) =>
		// 		state.MY.class.settings?.find((item) => item.name == name && lvl >= item.level);
		// },

		// class_Setting_Filter_Lvl(state) {
		// 	return (name) =>
		// 		state.MY.class.settings?.filter((item) => item.type == name && lvl >= item.level);
		// },

		class_Specials_Filter_Lvl(state) {
			const lvl = state.MY.level;
			return (name) =>
				state.MY.class.specials?.filter(
					(item) => item.type == name && lvl >= item.level
				);
		},

		//NOTE - COMMON (stats, skills, languages, spells)
		COMMON_Custom_Arr_RE: (state) => (name) => {
			const { stats_Keys, stats_Activ_Arr_RE } = useStatsStore();
			const { skills_Keys, skills_Activ_Arr_RE } = useSkillsStore();
			const { languages_Keys, languages_Activ_Arr_RE } = useLanguagesStore();
			const { spells_Keys, spells_Activ_Arr_RE } = useSpellsStore();

			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];

			let ACTIV_ARR = [];
			if (name == "stats") {
				ACTIV_ARR = stats_Activ_Arr_RE;
			}
			if (name == "skills") {
				ACTIV_ARR = skills_Activ_Arr_RE;
			}
			if (name == "languages") {
				ACTIV_ARR = languages_Activ_Arr_RE;
			}
			if (name == "spells") {
				ACTIV_ARR = spells_Activ_Arr_RE;
			}

			let KEYS = [];
			if (name == "stats") {
				KEYS = stats_Keys;
			}
			if (name == "skills") {
				KEYS = skills_Keys;
			}
			if (name == "languages") {
				KEYS = languages_Keys;
			}
			if (name == "spells") {
				KEYS = spells_Keys;
			}

			let pass_selected_arr = selected_arr.filter(
				(el) => !ACTIV_ARR.includes(el)
			);
			const increment = state.option_Custom_RE_Quant(name);
			if (increment === 0) {
				return custom_arr;
			} else {
				if (pass_selected_arr.length === increment) {
					custom_arr = pass_selected_arr;
				} else if (pass_selected_arr.length < increment) {
					const activ_full_arr = ACTIV_ARR.concat(pass_selected_arr);
					let pass_arr = KEYS.filter((el) => !activ_full_arr.includes(el));
					const i = increment - pass_selected_arr.length;
					custom_arr = pass_selected_arr.concat(pass_arr.slice(0, i));
				} else if (pass_selected_arr.length > increment) {
					const i = pass_selected_arr.length - increment;
					pass_selected_arr.splice(0, i);
					custom_arr = pass_selected_arr;
				}
				return custom_arr;
			}
		},

		option_Custom_RE_Quant: (state) => (name) => {
			const ethnos_settings = state.ethnos_Setting(name);
			return ethnos_settings ? ethnos_settings.select : 0;
		},

		setting_Type_Arr: (state) => (arr_obj) => {
			const sett_lvl = state.level_Filter_Arr(arr_obj);
			let arr = [];
			sett_lvl?.forEach((el) => {
				if (el.type !== "feats") {
					if (!arr.includes(el.type)) {
						arr.push(el.type);
					}
					// !(arr.includes(el.type)) ? arr.push(el.type) : null
				}
			});
			return arr;
		},

		setting_Name_Arr: (state) => (arr_obj, type) => {
			let arr = [];
			arr_obj?.forEach((el) => (el.type == type ? arr.push(el.name) : null));
			return arr;
		},

		setting_Arr: (state) => (arr_obj, key) => {
			const sett_lvl = state.level_Filter_Arr(arr_obj);
			let arr = [];
			sett_lvl?.forEach((el) => {
				// if (el[key]) {
				!arr.includes(el[key]) ? arr.push(el[key]) : null;
				// }
			});
			return arr;
		},

		select_Numb() {
			const lvl = this.MY.level;
			return (select) => (Array.isArray(select) ? select[lvl - 1] : select);
		},

		// settings_Customm_0() {
		// 	const sett_obj = {};
		// 	const sett_lvl = this.level_Filter_Arr(this.MY.class.settings);
		// 	const sett_custtom = sett_lvl.filter((el) => el.type == "custom");

		// 	sett_obj[this.MY.class.name] = [];

		// 	sett_custtom?.forEach((item) => {
		// 		const select = this.select_Numb(item.select);
		// 		let arr_elem = [];
		// 		for (let i = 0; i < select; i += 1) {
		// 			arr_elem.push(item.list[i]);
		// 		}
		// 		sett_obj[this.MY.class.name].push({
		// 			type: item.type,
		// 			name: item.name,
		// 			select: item.select,
		// 			select_list: arr_elem,
		// 		});
		// 	});
		// 	return sett_obj;
		// },

		сustomm_Settings_100() {
			const sett_obj = {};
			const sett_lvl = this.level_Filter_Arr(this.MY.class.settings);
			const sett_custtom = sett_lvl.filter((el) => el.type == "custom");
			const sett_select = this.MY._settings_class[this.MY.class.name];
			let name_arr = [];
			sett_custtom?.forEach((item) => {
				if (!name_arr.includes(item.name)) {
					name_arr.push(item.name);
				}
			});

			name_arr?.forEach((item_name) => {
				const str = `custom__${item_name}`;
				sett_obj[item_name] = [];
				const name_filter = sett_custtom.filter(
					(item) => item.name == item_name
				);

				let arr_name = [];
				name_filter?.forEach((item) => {
					let count = 0;
					for (let i = 0; i < arr_name.length; i += 1) {
						if (arr_name[i] === item.name) {
							count += 1;
						}
					}
					arr_name.push(item.name);
					const str_numb = `${str}__${count}`;
					const select_numb = this.select_Numb(item.select);
					let arr_elem = [];

					const select_arr = sett_select?.[str_numb];
					let pass_arr = item.list;
					if (select_arr) {
						pass_arr = item.list.filter((el) => !select_arr.includes(el));
					}

					// TODO - выбор
					for (let i = 0; i < select_numb; i += 1) {
						if (select_arr?.[i]) {
							arr_elem.push(select_arr[i]);
						} else {
							arr_elem.push(pass_arr[i]);
						}
					}

					sett_obj[item_name].push({
						id: str_numb,
						type: item.type,
						name: item.name,
						select: item.select,
						select_list: arr_elem,
						list: item.list,
					});
				});
			});
			return sett_obj;
		},

		// level_Filter_Set() {
		//   return this.level_Filter_Arr(this.MY.class.settings);
		// },

		settings_Class() {
			let custtom_arr = [];
			const str = "custom";
			const settings_lvl = this.level_Filter_Arr(this.MY.class.settings);
			const settings_custom = settings_lvl.filter((el) => el.type == "custom");

			let name_arr = settings_custom.reduce(
				(accum, item) => accum.concat(item.name),
				[]
			);
			let custtom_name_arr = name_arr.filter(
        (item, i) => name_arr.indexOf(item) === i
        );
        
				console.log('custtom_name_arr:', custtom_name_arr)


			// let custtom_name_arr = [];
			// for (const item_sett of settings_custom) {
			//   if (!custtom_name_arr.includes(item_sett.name)) {
			// 		custtom_name_arr.push(item_sett.name);
			// 	}
			// }
			// console.log('custtom_name_arr:', custtom_name_arr)

			for (const name of custtom_name_arr) {
				let str_link = `${str}__${name}`;
				const settings_custom_name = settings_custom.filter(
					(item_sett) => item_sett.name == name
				);
				// console.log(`settings_custom_${name}:`, settings_custom_name)

				for (const [item, ind] of settings_custom_name) {
					let str_link_ind = `${str_link}__${name}`;

					// console.log(`settings_custom_${name}:`, item, ind);
				}
			}

			custtom_name_arr?.forEach((item_name) => {
				const str = `custom__${item_name}`;
				const settings_custom_name = settings_custom.filter(
					(item_sett) => item_sett.name == item_name
				);

				// let arr_name = [];
				// name_filter?.forEach((item) => {
				// 	let count = 0;
				// 	for (let i = 0; i < arr_name.length; i += 1) {
				// 		if (arr_name[i] === item.name) {
				// 			count += 1;
				// 		}
				// 	}
				// 	arr_name.push(item.name);
				// 	const str_numb = `${str}__${count}`;
				// 	const select_numb = this.select_Numb(item.select);
				// 	let arr_elem = [];

				// 	const select_arr = sett_select?.[str_numb];
				// 	let pass_arr = item.list;
				// 	if (select_arr) {
				// 		pass_arr = item.list.filter((el) => !select_arr.includes(el));
				// 	}

				// 	// TODO - выбор
				// 	for (let i = 0; i < select_numb; i += 1) {
				// 		if (select_arr?.[i]) {
				// 			arr_elem.push(select_arr[i]);
				// 		} else {
				// 			arr_elem.push(pass_arr[i]);
				// 		}
				// 	}

				// 	sett_obj[item_name].push({
				// 		id: str_numb,
				// 		type: item.type,
				// 		name: item.name,
				// 		select: item.select,
				// 		select_list: arr_elem,
				// 		list: item.list,
				// 	});

				// });
			});

			return true;
		},

		// сustomm_Settings_200() {
		//     const sett_obj = {};
		//     const sett_lvl = this.level_Filter_Arr(this.MY.class.settings);
		//     const sett_custtom = sett_lvl.filter((el) => el.type == "custom");
		//     let name_arr = [];
		//     sett_custtom?.forEach((item) => {
		//       if (!name_arr.includes(item.name)) {
		//         name_arr.push(item.name);
		//       }
		//     });

		//     name_arr?.forEach((item_name) => {
		//       const str = `custom_${item_name}`;
		//       sett_obj[item_name] = [];
		//       const name_filter = sett_custtom.filter(
		//         (item) => item.name == item_name
		//       );

		//       let arr_name = [];

		//       name_filter?.forEach((item) => {

		//         let count = 0;
		//         for (let i = 0; i < arr_name.length; i +=1 ) {
		//           if (arr_name[i] === item.name) {
		//             count += 1;
		//           }
		//         }
		//         arr_name.push(item.name);
		//         const str_numb = `${str}_${count}`;

		//         const select = this.select_Numb(item.select);
		//         let arr_elem = [];
		//         for (let i = 0; i < select; i += 1) {
		//           arr_elem.push(item.list[i]);
		//         }
		//         sett_obj[item_name].push({
		//           id: str_numb,
		//           type: item.type,
		//           name: item.name,
		//           select: item.select,
		//           select_list: arr_elem,
		//           list: item.list,
		//         });
		//       });
		//     });
		//     // const PagesStore = usePagesStore();
		//     // PagesStore.createVarClass(sett_obj);
		//     return sett_obj;
		// },

		// сustomm_Settings_0_All: (state) => (name) => {
		//   const sett_lvl = state.level_Filter_Arr(state.MY.class.settings);
		//   const sett_custtom = sett_lvl.filter((el) => el.type == "custom");
		//   const sett_name = sett_custtom.filter((el) => el.name == name);
		//   return sett_name;
		// },
	},
	//!SECTION - GETTERS

	//SECTION - //? ACTIONS
	actions: {
		// getSettingsClass() {
		// },

		getRaceObj(name) {
			this.MY.race = name;
		},

		getRaceName(name) {
			this.MY.race_name = name;
		},

		getEthnos() {
			this.MY.ethnos = Object.values(this.MY.race.race_settings.ethnos)[0];
		},

		getEthnosName() {
			this.MY.ethnos_name = Object.values(
				this.MY.race.race_settings.ethnos
			)[0].name;
		},

		//NOTE - COMMON (stats, skills, languages, spells)
		getCustomSelect_COMMON_RE(item, name) {
			const { stats_Activ_Arr_RE } = useStatsStore();
			const { skills_Activ_Arr_RE } = useSkillsStore();
			const { languages_Activ_Arr_RE } = useLanguagesStore();
			const { spells_Activ_Arr_RE } = useSpellsStore();
			const selekt = this.COMMON_Custom_Arr_RE(item);

			let active = null;
			if (item === "stats") {
				active = stats_Activ_Arr_RE.includes(name);
			}
			if (item === "skills") {
				active = skills_Activ_Arr_RE.includes(name);
			}
			if (item === "languages") {
				active = languages_Activ_Arr_RE.includes(name);
			}
			if (item === "spells") {
				active = spells_Activ_Arr_RE.includes(name);
			}

			const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				this.MY.custom_selected_race_page[item] = arr;
			}
		},
	},
});
//!SECTION - ACTIONS
