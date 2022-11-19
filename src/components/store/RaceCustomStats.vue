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
				v-for="name in Stats_Pass"
				:key="name"
				@click="
					getExtraActiv(
						Stats_Activ.includes(name),
						stats_Select.includes(name),
						name,
						'stats'
					)
				"
				:active_boll_link="stats_Select.includes(name)"
			>
				<my-attribute
					:title="name"
					:type="`${name}_base`"
					plus
					:numb="Race_Set_Obj.custom_stats[1]"
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

		// ...mapGetters("dic", ["Em_Icon", "Lang_Icon"]),

    Race_Set_Obj() {
			return this.MY.race.settings;
		},

    Stats_Keys() {
			return Object.keys(this.MY.stats);
		},

    stats_Activ_Obj() {
			let i = this.MY.race.stats;
			let j = this.MY.ethnos.stats;
			let arr = Object.assign({}, i, j);
			return arr;
		},

		Stats_Activ() {
			return Object.keys(this.stats_Activ_Obj);
		},

    Stats_Pass() {
			return Object.keys(this.MY.stats).filter(
				(el) => !this.Stats_Activ.includes(el)
			);
		},

    stats_Select() {
			return this.race_page.extra.stats;
		},



	},

	methods: {
    // ...mapActions("pages", ["showMainSettings"]),
    ...mapActions({showSettings: "pages/showMainSettings"}),
		// ...mapActions("main_page", ["showSettings"]),

    getExtraActiv(active, selekt, item, name) {
			if (active || selekt) {
				return null;
			} else {
				let arr = this.race_page.extra[name];
				arr.splice(0, 1);
				arr.push(item);
				return (this.race_page.extra[name] = arr);
			}
		},

    getSummNumb(name, item) {
			let i = 0;
			let activ_val = this[`${name}_Activ_Obj`][item];
			if (activ_val) {
				i = activ_val;
			} else if ((this.Race_Set_Obj || {})[`custom_${name}`]) {
				let extr_bool = this[`${name}_Select`].includes(item);
				let increment = this.Race_Set_Obj[`custom_${name}`][1];
				if (extr_bool) {
					i = increment;
				} else {
					i = 0;
				}
			} else {
				i = 0;
			}
			return i;
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
