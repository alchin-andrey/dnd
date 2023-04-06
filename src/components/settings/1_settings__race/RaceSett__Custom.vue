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
      :select_list="custom.select_list"
			:custom="list_el"
			@click="getCustomSelect(list_el)"
			:active_boll_link="getActive(list_el)"
		/>
	</section>
</template>

<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "RaceSett__Custom",
	props: {
		custom: {
			type: Object,
			default: null,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY", "MY_Race"]),

    getActive: (stor) => (list_el) => {
      return stor.custom.select_list.some(item => {
        if (item.name) {
          return item.name == list_el.name
        } else {
          return item.name_set == list_el.name_set
        }
      })
    }
	},

	methods: {
		getLink() {
			if (!this.MY._settings_race[this.MY_Race.name]) {
				this.MY._settings_race[this.MY_Race.name] = {};
			}
		},

		getCustomSelect(list_el) {
			const active = this.getActive(list_el);
      if (active) {
        return null;
      } else {
        let arr = this.custom.select_list.slice(0);
        arr.splice(0, 1);
				arr.push(list_el);
        this.getLink();
        this.MY._settings_race[this.MY_Race.name][this.custom.id_link] = arr;
      }
    }
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
