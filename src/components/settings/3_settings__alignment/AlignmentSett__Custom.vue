<template>
  <section class="flex-col gap-34">
    <AppSrdDisclaimer :text="custom.details" :disclaimer="Boolean(custom?.disclaimer)"/>
    <section class="flex-col gap-8">
      <AppCustomCard
        v-for="list_el in custom.list"
        :key="list_el"
        :setting_name="custom.name"
        :select_list="custom.select_list"
        :custom="list_el"
        @click="getCustomSelect(list_el)"
        :active_boll_link="getActive(list_el)"
        save_setting="_settings_alignment"
        :id_link="custom.id_link"
      />
    </section>
	</section>
</template>



<script>
import { mapState } from "pinia";
import { useMYStore } from "@/stores/user/MYStore";

export default {
	name: "AlignmentSett__Custom",
	props: {
		custom: {
			type: Object,
			default: null,
		},
	},
	computed: {
		...mapState(useMYStore, ["MY"]),
    getActive: (stor) => (list_el) => {
      return stor.custom.select_list.some(item => {
        if (item.name) {
          return item.name == list_el.name
        } else {
          return item.name_set == list_el.name_set
        }
      })
    },
	},

	methods: {
		getCustomSelect(list_el) {
			const active = this.getActive(list_el);
      if (active) {
        return null;
      } else {
        let arr = this.custom.select_list.slice(0);
        arr.splice(0, 1);
        if(list_el.hasOwnProperty('name_custom')) {
          const save_custom_name = this.MY._settings_custom_name[this.custom.id_link];
          arr.push({...list_el, name_custom: save_custom_name});
        } else {
          arr.push(list_el);
        }
        this.MY._settings_alignment[this.custom.id_link] = arr;
      }
		},
	},
};
</script>
