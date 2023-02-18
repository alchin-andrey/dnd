<template>
	<my-selection-card
		v-for="item in spells_Pass_Obj_RE_Sort"
		:key="item"
		@click="getCustomSelect_Spells_RE(name_Find(item))"
		:active_boll_link="spells_Custom_Arr_RE.includes(name_Find(item))"
		no_blur
	>
		<my-spell-text 
    :active_card="spells_Custom_Arr_RE.includes(name_Find(item))"
    :lvl="ethnos_Setting('spells').level" :spell="item" select>
		</my-spell-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "RaceSetting__Spells",
	computed: {
		// GETTERS
		...mapState(useMYStore, ["ethnos_Setting"]),

		name_Find() {
			return (item) => item.find((el) => el.name).name;
		},

    spells_For_Arr_Obj: (state) => (arr_obj) => {
      let arr_spell = [];
      arr_obj.forEach((el) => arr_spell.push(el.spell));
			return arr_spell;
		},

    spells_Race_Main_Arr() {
      const MYStore = useMYStore();
      const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.race?.spells);
			return this.spells_For_Arr_Obj(spell_obj);
		},

		spells_Race_Ethnos_Arr() {
      const MYStore = useMYStore();
			const spell_obj = MYStore.level_Filter_Arr(MYStore.MY.ethnos?.spells);
      return this.spells_For_Arr_Obj(spell_obj);
		},

    spells_Activ_Obj_RE() {
			const race_spells = this.spells_Race_Main_Arr;
			const ethnos_spells = this.spells_Race_Ethnos_Arr;
			return race_spells.concat(ethnos_spells);
		},

		spells_Activ_Arr_RE(state) {
			let arr = [];
			this.spells_Activ_Obj_RE.forEach((el) =>
				arr.push(el.find((x) => x.name).name)
			);
			return arr;
		},

		spells_Settings_Obj_RE(state) {
      const MYStore = useMYStore();
			let arr = [];
			let spells_settings = MYStore.ethnos_Setting("spells");

			if (spells_settings) {
				let mana_min = spells_settings.mana_min;
				let mana_max = spells_settings.mana_max;
				let classes = spells_settings.classes;
				for (let kay in state.spells) {
					for (let j = mana_min; j <= mana_max; j++) {
						let name = state.spells[kay][j]?.name;
						if (name) {
							for (let i in classes) {
								let check = state.spells[kay][j].classes.includes(classes[i]);
                let not_ability = state.spells[kay][j].type != "ability";
								if (check && not_ability) {
									let unique = !arr.includes(state.spells[kay]);
									if (unique) {
										arr.push(state.spells[kay]);
									}
								}
							}
						}
					}
				}
			}
			return arr;
		},

    spells_Pass_Obj_RE() {
			return this.spells_Settings_Obj_RE.filter(
				(el) => !this.spells_Activ_Obj_RE.includes(el)
			);
		},

    spells_Pass_Obj_RE_Sort() {
      const { t } = useDicStore();
      if (this.spells_Pass_Obj_RE) {
        return this.spells_Pass_Obj_RE.sort((x, y) => t(x[0].name).localeCompare(t(y[0].name)));
      }
		},

		spells_Keys(state) {
			let arr = [];
			this.spells_Settings_Obj_RE.forEach((el) =>
				arr.push(el.find((x) => x.name).name)
			);
			return arr;
		},

		spells_Pass_Arr_RE(state) {
			let arr = [];
			this.spells_Pass_Obj_RE.forEach((el) =>
				arr.push(el.find((x) => x.name).name)
			);
			return arr;
		},

		spells_Pass_Arr_RE_ALL() {
			return this.spells_Keys.filter(
				(el) => !this.spells_Activ_Arr_RE.includes(el)
			);
		},

		spells_Custom_Arr_RE() {
      const MYStore = useMYStore();
			return MYStore.COMMON_Custom_Arr_RE("spells");
		},

    spells_Custom_Obj_RE() {
			let arr = [];
			let pass_obj = this.spells_Pass_Obj_RE;
			let cusstom_arr = this.spells_Custom_Arr_RE;
			for (let i in pass_obj) {
        for (let j in pass_obj[i]) {
				for (let item in cusstom_arr)
					if (pass_obj[i][j].name == cusstom_arr[item]) {
						arr.push(pass_obj[i]);
					}
        }
			}
			return arr;
		},

    stats_Custom_Arr_RE() {
      const MYStore = useMYStore();
			return MYStore.COMMON_Custom_Arr_RE("stats");
		},

    COMMON_Custom_Arr_RE: (state) => (name) => {
			let custom_arr = [];
			const selected_arr = state.MY.custom_selected_race_page[name];

			let ACTIV_ARR = spells_Activ_Arr_RE;
			let KEYS = spells_Keys;

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
	},

	methods: {
    getCustomSelect_Spells_RE(name) {
      const MYStore = useMYStore();
			MYStore.getCustomSelect_COMMON_RE("spells", name);
		},

    getCustomSelect_COMMON_RE(item, name) {
			const selekt = this.COMMON_Custom_Arr_RE(item);
			let active = spells_Activ_Arr_RE.includes(name);
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

};
</script>

