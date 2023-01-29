<template>
	<section class="flex-col">
		<my-card-text class="marg-bot" v-if="custom.details" :text="custom.details" />
		<Card__CusstomClass
			v-for="list_el in custom.list"
			:key="list_el"
			:custom="list_el"
			@click="getCustomSelect(custom, list_el)"
			:active_boll_link="custom.select_list.includes(list_el)"
		/>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

import Card__CusstomClass from "@/components/settings/2_settings__class/Card__CusstomClass.vue";
export default {
	name: "ClassSett__Custom",
	components: {
		Card__CusstomClass,
	},
	props: {
		custom: {
			type: Object,
			default: null,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),

		// skill_Name() {
		// 	const name = this.custom.list.reduce(
		// 		(acc, el) => acc.concat(el.name_set),
		// 		[]
		// 	);
		// 	return name;
		// },

		// getSkillMarg: (store) => (i) => {
		// 	if (i === 0) {
		// 		return true;
		// 	}
		// 	const value = store.MY.skills[store.skill_Name[i]]?.mod;
		// 	if (value) {
		// 		const old_value = store.MY.skills[store.skill_Name[i - 1]]?.mod;
		// 		if (value !== old_value) {
		// 			return true;
		// 		}
		// 	}

		// 	return false;
		// },
	},

	methods: {
		getCustomSelect(item, list_el) {
			const active = item.select_list.includes(list_el);

			if (active) {
				return null;
			} else {
				let arr = item.select_list.slice(0);
				arr.splice(0, 1);
				arr.push(list_el);

				if (!this.MY._settings_class[this.MY.class.name]) {
					this.MY._settings_class[this.MY.class.name] = {};
				}
				this.MY._settings_class[this.MY.class.name][item.id_link] = arr;
			}
		},
	},
};
</script>

<style scoped>
.flex-col {
	display: flex;
	flex-direction: column;
	gap: 8px;
	/* margin: 0 0 26px 16px; */
}
.marg-bot {
	margin-bottom: 16px;
}

/* .skill_marg:not(:first-child) {
	margin-top: 16px;
} */

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
