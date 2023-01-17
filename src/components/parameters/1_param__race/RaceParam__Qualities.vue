<template>
	<my-wrapper :hr="hr">
		<my-attribute
			v-if="MY.ethnos.hp_bonus"
			title="hp_bonus"
			:numb="hp_Bonus"
			plus
			icon="hp_bonus"
		/>
		<my-attribute
			v-for="(val, name) in MY.qualities"
			:key="name"
			:title="name"
			:numb="qualities_Numb_RE(name)"
			feet
			:icon="name"
		/>
	</my-wrapper>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";
export default {
	name: "RaceParam__Qualities",
	props: {
		hr: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),

		hp_Bonus() {
			if (this.MY.ethnos.hp_bonus) {
				let increm_1 = this.MY.ethnos.hp_bonus[0];
				let increm_2 = this.MY.ethnos.hp_bonus[1];
				let level = Math.ceil(this.MY.level / increm_1);
				return level * increm_2;
			} else {
				return 0;
			}
		},

    // hp_Bonus() {
		// 	let increm_1 = this.MY.ethnos.hp_bonus[0];
		// 	let increm_2 = this.MY.ethnos.hp_bonus[1];
		// 	let level = Math.ceil(this.MY.level / increm_1);
		// 	return level * increm_2;
		// },

    qualities_Numb_RE: (state) => (name) => {
			let summ = 0;
      let race_numb = state.MY.race.qualities?.[name];
			let ethnos_numb = state.MY.ethnos.qualities?.[name];
			race_numb ? summ += race_numb : 0
			ethnos_numb ? summ += ethnos_numb : 0
			return summ;
		},
	},
};
</script>
