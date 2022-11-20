<template>
	<div class="ethnos_attributes">
		<!-- Этнос_stats -->
		<my-wrapper>
			<my-attribute
				v-for="name in Stats_Keys"
				:key="name"
				:title="name"
				:type="`${name}_base`"
				plus
				:numb="getSummNumb('stats', name)"
				:icon="name"
			>
			</my-attribute>
		</my-wrapper>
		<my-card-text text="stats_base_details"></my-card-text>
	</div>
	<my-selection-card
		v-for="name in Stats_Pass_RE"
		:key="name"
		@click="getExtraActiv('stats', name)"
		:active_boll_link="Stats_Select.includes(name)"
	>
		<my-attribute
			:title="name"
			:type="`${name}_base`"
			plus
			:numb="Race_Settings.custom_stats[1]"
			:icon="name"
		>
		</my-attribute>
		<my-card-text title="" :text="`${name}_details`"></my-card-text>
	</my-selection-card>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
	name: "RaceCustomStats",
	computed: {
		...mapState({
			MY: (state) => state.MY.MY,
			race_page: (state) => state.pages.race_page,
		}),

		...mapGetters("MY", [
      "Race_Settings", 
      "Stats_Keys",
      "Stats_Activ_Obj_RE", 
      "Stats_Activ_RE",
      "Stats_Pass_RE",
    ]),

		// Race_Settings() {
		// 	return this.MY.race.settings;
		// },

		// Stats_Keys() {
		// 	return Object.keys(this.MY.stats);
		// },

		// stats_Activ_Obj() {
		// 	let i = this.MY.race.stats;
		// 	let j = this.MY.ethnos.stats;
		// 	let arr = Object.assign({}, i, j);
		// 	return arr;
		// },

		// Stats_Activ_RE() {
		// 	return Object.keys(this.stats_Activ_Obj);
		// },

		// Stats_Pass_RE() {
		// 	return Object.keys(this.MY.stats).filter(
		// 		(el) => !this.Stats_Activ_RE.includes(el)
		// 	);
		// },

		Stats_Select() {
			return this.race_page.extra.stats;
		},
	},

	methods: {
		// ...mapActions("pages", ["showMainSettings"]),
		...mapActions({ showSettings: "pages/showMainSettings" }),
		// ...mapActions("main_page", ["showSettings"]),

		getSummNumb(item, name) {
      // this.getSummNumb_2(name)
      console.log('getSummNumb_2')
      const upp_item = item.charAt(0).toUpperCase() + item.slice(1)
			let i = 0;
			let activ_val = this[`${upp_item}_Activ_Obj_RE`][name];
      let custom_set = this.Race_Settings[`custom_${item}`]
      // console.log(custom_set)
			if (activ_val) {
				i = activ_val;
			} else if (custom_set) {
				let extr_bool = this[`${upp_item}_Select`].includes(name);
				let increment = custom_set[1];
        extr_bool ? i = increment : i = 0;
			} else {
				i = 0;
			}
			return i;
		},

    getCustomActiv(item, name) {
      const selekt = this.race_page.extra[item];
      const upp_item = item.charAt(0).toUpperCase() + item.slice(1)
      const active = this[`${upp_item}_Activ_RE`].includes(name);
      const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				return (this.race_page.extra[item] = arr);
			}
		},

    getExtraActiv(item, name) {
      const selekt = this.race_page.extra[item];
      const upp_item = item.charAt(0).toUpperCase() + item.slice(1)
      const active = this[`${upp_item}_Activ_RE`].includes(name);
      const passive = selekt.includes(name);
			if (active || passive) {
				return null;
			} else {
				let arr = selekt;
				arr.splice(0, 1);
				arr.push(name);
				return (this.race_page.extra[item] = arr);
			}
		},
	},
};
</script>

<style scoped>
.ethnos_attributes {
	color: rgba(255, 255, 255, 0.2);
	display: flex;
	flex-direction: column;
	gap: 26px;
	margin: 0 0 26px 16px;
}
</style>
