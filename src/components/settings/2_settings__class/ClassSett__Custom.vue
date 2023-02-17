<template>
	<section class="flex-col">
		<my-card-text
			class="marg-bot"
			v-if="custom.details"
			:text="custom.details"
		/>
		<AppCusstomCard
			v-for="list_el in custom.list"
			:key="list_el"
      :setting_name="custom.name"
			:custom="list_el"
			@click="getCustomSelect(list_el)"
			:active_boll_link="custom.select_list.includes(list_el)"
			@clickOneMore="getCustomSelect"
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
	},

	methods: {
		getLink() {
			if (!this.MY._settings_class[this.MY.class.name]) {
				this.MY._settings_class[this.MY.class.name] = {};
			}
		},

		getCustomSelect(list_el) {
			const active = this.custom.select_list.includes(list_el);
			let arr = this.custom.select_list.slice(0);
			if (!active) {
				arr.splice(0, 1);
				arr.push(list_el);
			}
			this.getLink();
			this.MY._settings_class[this.MY.class.name][this.custom.id_link] = arr;
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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
